import { useAtomValue } from 'jotai';
import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { graphql, useFragment } from 'react-relay';
import { StatsMovesStepInput, statsMovesStepInputAtom } from '.';
import { RHFCheckboxField } from '../../../../components/RHF/RHFCheckboxField';
import { RHFCheckboxFieldItem } from '../../../../components/RHF/RHFCheckboxFieldItem';
import { ClassMovesField_class$key } from './__generated__/ClassMovesField_class.graphql';

export type ClassMovesFieldProps = {
  vagabondClassRef: ClassMovesField_class$key;
};

export function ClassMovesField({ vagabondClassRef }: ClassMovesFieldProps) {
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
  );
  const tinkerDefaultSkillIds = useTinkerDefaultMoves(vagabondClass.name);

  const { control, setValue, watch } = useFormContext<StatsMovesStepInput>();
  const { classMoves } = useAtomValue(statsMovesStepInputAtom);
  useEffect(() => {
    if (classMoves.length) setValue('classMoves', classMoves);
  }, [classMoves]);

  const selectedClassMoves = watch('classMoves', [])

  return (
    <RHFCheckboxField control={control} name="classMoves" label="Class Moves">
      {vagabondClass.classMoveConnection.edges.map((edge) => {
        if (!edge?.node) return null;

        return (
          <RHFCheckboxFieldItem
            key={edge.node.id}
            control={control}
            name="classMoves"
            label={edge.node.name}
            value={edge.node.id}
            disabled={getItemDisabled(selectedClassMoves, edge.node.id)}
          />
        );
      })}
    </RHFCheckboxField>
  );
}

const getItemDisabled = (selectedClassMoveIds: readonly string[], moveId: string) => {
  const isTinkerDefaultMove = tinkerDefaultMovesIds.includes(moveId)
  if (isTinkerDefaultMove) return true

  if (selectedClassMoveIds.length === 3) {
    return !selectedClassMoveIds.includes(moveId)
  }
}

export const tinkerDefaultMoves = ['toolbox', 'repair'];
export const tinkerDefaultMovesIds = tinkerDefaultMoves.map((skill) => window.btoa(`ClassMove:${skill}`));
function useTinkerDefaultMoves(name: string) {
  const { setValue } = useFormContext<{ classMoves: ReadonlyArray<string> }>();
  useEffect(() => {
    if (name === 'tinker') {
      setValue('classMoves', tinkerDefaultMovesIds);
    }
  }, [name]);

  return tinkerDefaultMovesIds;
}
