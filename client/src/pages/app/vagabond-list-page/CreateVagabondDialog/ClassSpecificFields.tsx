import { useEffect } from 'react';
import { Control, useFormContext } from 'react-hook-form';
import { graphql, useFragment, useRefetchableFragment } from 'react-relay';
import { ClassSpecificFieldsRefetchQuery } from './__generated__/ClassSpecificFieldsRefetchQuery.graphql';
import { ClassSpecificFields_query$key } from './__generated__/ClassSpecificFields_query.graphql';
import { VagabondCreateInput } from './__generated__/CreateVagabondDialogMutation.graphql';
import { RHFStatField } from '../../../../components/RHF/RHFStatField';
import { ClassSpecificFields_useDefaultValue_class$key } from './__generated__/ClassSpecificFields_useDefaultValue_class.graphql';
import { NatureSelect } from './NatureSelect';
import { DrivesSelect } from './DrivesSelect';
import { useStartingPointLeft } from './useStartingPointLeft';

type ClassSpecificFieldsProps = {
  control: Control<VagabondCreateInput>;
  selectedClassId?: string;
  queryRef: ClassSpecificFields_query$key;
};

export function ClassSpecificFields({ control, queryRef, selectedClassId }: ClassSpecificFieldsProps) {
  const [selectedClass, refetchSelectedClass] = useRefetchableFragment<
    ClassSpecificFieldsRefetchQuery,
    ClassSpecificFields_query$key
  >(
    graphql`
      fragment ClassSpecificFields_query on Query
      @argumentDefinitions(selectedClassId: { type: "ID", defaultValue: "" })
      @refetchable(queryName: "ClassSpecificFieldsRefetchQuery") {
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
          }
        }
      }
    `,
    queryRef
  );

  // on selected id change, refetch
  useEffect(() => {
    if (selectedClassId) refetchSelectedClass({ selectedClassId });
  }, [selectedClassId, refetchSelectedClass]);

  useDefaultValue(selectedClass.node);
  const pointLeft = useStartingPointLeft(selectedClass.node);

  if (!selectedClass.node) return null;

  return (
    <>
      <NatureSelect control={control} name="nature" label="Nature" vagabondClassRef={selectedClass.node} />
      <DrivesSelect control={control} name="drives" label="Drives" vagabondClassRef={selectedClass.node} />
      <RHFStatField
        control={control}
        name="charm"
        label="Charm"
        startingPoint={selectedClass.node.startingCharm!}
        hasPointLeft={Boolean(pointLeft)}
      />
      <RHFStatField
        control={control}
        name="cunning"
        label="Cunning"
        startingPoint={selectedClass.node.startingCunning!}
        hasPointLeft={Boolean(pointLeft)}
      />
      <RHFStatField
        control={control}
        name="finesse"
        label="Finesse"
        startingPoint={selectedClass.node.startingFinesse!}
        hasPointLeft={Boolean(pointLeft)}
      />
      <RHFStatField
        control={control}
        name="luck"
        label="Luck"
        startingPoint={selectedClass.node.startingLuck!}
        hasPointLeft={Boolean(pointLeft)}
      />
      <RHFStatField
        control={control}
        name="might"
        label="Might"
        startingPoint={selectedClass.node.startingMight!}
        hasPointLeft={Boolean(pointLeft)}
      />
    </>
  );
}

// on class changed, update the default value for dependent fields
const useDefaultValue = (vagabondClassRef?: ClassSpecificFields_useDefaultValue_class$key | null) => {
  const { setValue } = useFormContext<VagabondCreateInput>();
  const vagabondClass = useFragment(
    graphql`
      fragment ClassSpecificFields_useDefaultValue_class on VagabondClass {
        id
        startingCharm
        startingCunning
        startingFinesse
        startingLuck
        startingMight
      }
    `,
    vagabondClassRef!
  );

  useEffect(() => {
    if (vagabondClass) {
      // TODO: find out why this specific one not works
      // setValue('nature', '')
      setValue('drives', []);
      setValue('charm', vagabondClass.startingCharm!);
      setValue('cunning', vagabondClass.startingCunning!);
      setValue('finesse', vagabondClass.startingFinesse!);
      setValue('luck', vagabondClass.startingLuck!);
      setValue('might', vagabondClass.startingMight!);
    }
  }, [vagabondClass, setValue]);
};
