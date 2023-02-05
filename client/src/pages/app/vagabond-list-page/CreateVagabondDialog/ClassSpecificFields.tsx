import { ClassSpecificFieldsRefetchQuery } from './__generated__/ClassSpecificFieldsRefetchQuery.graphql'
import { ClassSpecificFields_query$key } from './__generated__/ClassSpecificFields_query.graphql'
import { VagabondCreateInput } from './__generated__/CreateVagabondDialogMutation.graphql'
import { ClassSpecificFields_useDefaultValue_class$key } from './__generated__/ClassSpecificFields_useDefaultValue_class.graphql'

import { useEffect } from 'react'
import { Control, useFormContext } from 'react-hook-form'
import { graphql, useFragment, useRefetchableFragment } from 'react-relay'
import { Stack, TextField } from '@mui/material'

import { RHFStatField } from '../../../../components/RHF/RHFStatField'
import { useStartingPointLeft } from './useStartingPointLeft'
import { NatureSelect } from './NatureSelect'
import { DrivesSelect } from './DrivesSelect'
import { RoguishFeatSelect } from './RoguishFeatSelect'
import { WeaponSkillSelect } from './WeaponSkillSelect'
import { RHFTextField } from '../../../../components/RHF/RHFTextField'

type ClassSpecificFieldsProps = {
  control: Control<VagabondCreateInput, any>
  selectedClassId?: string
  queryRef: ClassSpecificFields_query$key
}
 
export const ClassSpecificFields = ({
  control,
  queryRef,
  selectedClassId,
}: ClassSpecificFieldsProps) => {
  const [query, refetch] = useRefetchableFragment<ClassSpecificFieldsRefetchQuery, ClassSpecificFields_query$key>(
    graphql`
      fragment ClassSpecificFields_query on Query
      @argumentDefinitions(selectedClassId: { type: "ID", defaultValue: "" })
      @refetchable(queryName: "ClassSpecificFieldsRefetchQuery")
      {
        ...RoguishFeatSelect_query
        node(id: $selectedClassId) {
          ... on VagabondClass {
            startingCharm
            startingCunning
            startingFinesse
            startingLuck
            startingMight
            ...ClassSpecificFields_useDefaultValue_class
            ...useStartingPointLeft_class
            ...NatureSelect_class
            ...DrivesSelect_class
            ...RoguishFeatSelect_class
            ...WeaponSkillSelect_class
          }
        }
      }
    `,
    queryRef
  );

  // on selected id change, refetch
  useEffect(() => {
    if (selectedClassId) refetch({ selectedClassId })
  }, [selectedClassId])

  useDefaultValue(query.node)
  const pointLeft = useStartingPointLeft(query.node)

  if (!query.node) return <></>

  return (
    <Stack direction='row' spacing={2}>
      <Stack direction='column' spacing={2} minWidth={250}>
        <NatureSelect
          control={control}
          name='nature'
          label='Nature'
          vagabondClassRef={query.node}
        />
        <DrivesSelect
          control={control}
          name='drives'
          label='Drives'
          vagabondClassRef={query.node}
        />
        <RoguishFeatSelect
          control={control}
          name='roguishFeats'
          label='Roguish Feats'
          queryRef={query}
          vagabondClassRef={query.node}
        />
        <WeaponSkillSelect
          control={control}
          name='weaponSkill'
          label='Weapond Skill'
          vagabondClassRef={query.node}
        />
      </Stack>
      <Stack direction='column' spacing={2} minWidth={250}>
        <RHFStatField
          control={control}
          name='charm'
          label='Charm'
          startingPoint={query.node.startingCharm!}
          hasPointLeft={Boolean(pointLeft)}
        />
        <RHFStatField
          control={control}
          name='cunning'
          label='Cunning'
          startingPoint={query.node.startingCunning!}
          hasPointLeft={Boolean(pointLeft)}
        />
        <RHFStatField
          control={control}
          name='finesse'
          label='Finesse'
          startingPoint={query.node.startingFinesse!}
          hasPointLeft={Boolean(pointLeft)}
        />
        <RHFStatField
          control={control}
          name='luck'
          label='Luck'
          startingPoint={query.node.startingLuck!}
          hasPointLeft={Boolean(pointLeft)}
        />
        <RHFStatField
          control={control}
          name='might'
          label='Might'
          startingPoint={query.node.startingMight!}
          hasPointLeft={Boolean(pointLeft)}
        />
        <Stack direction='row' spacing={2}>
          <CarryWeightInfoFields />
        </Stack>
        <RHFTextField
          control={control}
          name='value'
          label='Value'
          disabled
          inputProps={{ sx: { textAlign: 'center' } }}
        />
      </Stack>
    </Stack>
  )
}

// on class changed, update the default value for dependent fields
const useDefaultValue = (vagabondClassRef?: ClassSpecificFields_useDefaultValue_class$key | null) => {
  const { setValue } = useFormContext<VagabondCreateInput>();
  const vagabondClass = useFragment(
    graphql`
      fragment ClassSpecificFields_useDefaultValue_class on VagabondClass {
        id
        roguishFeatConnection { edges { node { id } } }
        startingCharm
        startingCunning
        startingFinesse
        startingLuck
        startingMight
        startingValue
      }
    `,
    vagabondClassRef!
  );

  const startingFeatsIds = vagabondClass?.roguishFeatConnection.edges
    .filter(edge => Boolean(edge?.node))
    .map(edge => edge!.node.id)

  useEffect(() => {
    if (vagabondClass) {
      // TODO: find out why this specific one not works
      // setValue('nature', '')
      setValue('drives', [])
      setValue('roguishFeats', startingFeatsIds)
      setValue('value', vagabondClass.startingValue)

      setValue('charm', vagabondClass.startingCharm!)
      setValue('cunning', vagabondClass.startingCunning!)
      setValue('finesse', vagabondClass.startingFinesse!)
      setValue('luck', vagabondClass.startingLuck!)
      setValue('might', vagabondClass.startingMight!)
    }
  }, [vagabondClass, setValue]);
};

const CarryWeightInfoFields = () => {
  const { watch } = useFormContext<VagabondCreateInput>()
  const might = watch('might')

  const burdened = might + 4
  const max = burdened * 2

  return (
    <>
      <TextField label='Burdened' disabled value={burdened} />
      <TextField label='Max' disabled value={max} />
    </>
  )
}
