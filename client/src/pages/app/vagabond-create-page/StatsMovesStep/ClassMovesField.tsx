import { useAtomValue } from 'jotai'
import { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { graphql, useFragment } from 'react-relay'
import { StatsMovesStepInput, statsMovesStepInputAtom } from '.'
import { RHFCheckboxField } from '../../../../components/RHF/RHFCheckboxField'
import { RHFCheckboxFieldItem } from '../../../../components/RHF/RHFCheckboxFieldItem'
import { ClassMovesField_class$key } from './__generated__/ClassMovesField_class.graphql'

export type ClassMovesFieldProps = {
  vagabondClassRef: ClassMovesField_class$key
}

export const ClassMovesField = ({ vagabondClassRef }: ClassMovesFieldProps) => {
  const vagabondClass = useFragment(
    graphql`
      fragment ClassMovesField_class on VagabondClass {
        name
        classMoveConnection(first: 50) {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    `,
    vagabondClassRef
  )
  const tinkerDefaultSkillIds = useTinkerDefaultSkills(vagabondClass.name)

  const { control, setValue } = useFormContext<StatsMovesStepInput>()
  const { classMoves } = useAtomValue(statsMovesStepInputAtom)
  useEffect(() => {
    if (classMoves.length) setValue('classMoves', classMoves)
  }, [classMoves])

  return (
    <RHFCheckboxField
      control={control}
      name='classMoves'
      label='Class Moves'
    >
      {vagabondClass.classMoveConnection.edges.map((edge) => {
        if (!edge?.node) return null;

        return (
          <RHFCheckboxFieldItem
            key={edge.node.id}

            control={control}
            name='classMoves'

            label={edge.node.name}
            value={edge.node.id}
            disabled={tinkerDefaultSkillIds.includes(edge.node.id)}
          />
        )
      })}
    </RHFCheckboxField>
  )
}

export const tinkerDefaultSkills = ['toolbox', 'repair'];
export const tinkerDefaultSkillIds = tinkerDefaultSkills.map((skill) => btoa(`ClassMove:${skill}`));
const useTinkerDefaultSkills = (name: string) => {
  const { setValue } = useFormContext<{ classMoves: ReadonlyArray<string> }>();
  useEffect(() => {
    if (name === 'tinker') {
      setValue('classMoves', tinkerDefaultSkillIds);
    }
  }, [name, setValue]);

  return tinkerDefaultSkillIds
}
