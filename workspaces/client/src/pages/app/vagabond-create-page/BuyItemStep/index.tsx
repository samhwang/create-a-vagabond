import { zodResolver } from "@hookform/resolvers/zod";
import { Remove } from "@mui/icons-material";
import { Button, Container, Grid, IconButton } from "@mui/material";
import { Stack } from "@mui/system";
import { useAtom, useAtomValue } from "jotai";
import { atomWithStorage } from "jotai/utils";
import React, { useEffect } from "react";
import { FormProvider, SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { graphql, useLazyLoadQuery } from "react-relay";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { vagabondCreateInputAtom } from "..";
import { RHFTextField } from "../../../../components/RHF/RHFTextField";
import { AvailableEquipmentList } from "./AvailableEquipmentList";
import { BuyItemStepQuery } from "./__generated__/BuyItemStepQuery.graphql";

const BuyItemStepInputSchema = z.object({
  value: z.number().min(0),
  carrying: z.number(), // got some max
  equipments: z.array(z.object({
    equipmentId: z.string(),
    name: z.string().min(1),
    wear: z.number().min(1),
    
    load: z.number(),
    value: z.number(),
  }))
});

export type BuyItemStepInput = z.infer<typeof BuyItemStepInputSchema>;

export const buyItemStepInputAtom = atomWithStorage<BuyItemStepInput>('buyItemStep', {
  value: 0,
  carrying: 0,
  equipments: [],
});

export const BuyItemStep = () => {
  const navigate = useNavigate();
  const characterCreateData = useAtomValue(vagabondCreateInputAtom)
  const [buyStepData, setBuyStepData] = useAtom(buyItemStepInputAtom)

  const methods = useForm<BuyItemStepInput>({
    defaultValues: buyStepData,
    resolver: zodResolver(BuyItemStepInputSchema),
  });
  const onSubmit: SubmitHandler<BuyItemStepInput> = data => {
    setBuyStepData(data)
    navigate('/vagabond-create/review_create');
  }

  const data = useLazyLoadQuery<BuyItemStepQuery>(
    graphql`
      query BuyItemStepQuery($classId: ID!) {
        ...AvailableEquipmentList_query
        node(id: $classId) {
          ... on VagabondClass {
            name
            startingValue
          }
        }
      }
    `,
    {
      classId: characterCreateData.class
    }
  )

  useEffect(() => {
    methods.setValue('value', buyStepData.value || data.node?.startingValue || 0)
  }, [buyStepData.value, data.node?.startingValue])

  useEffect(() => {
    methods.setValue('carrying', buyStepData.carrying)
  }, [buyStepData.carrying])

  const equipmentHash = JSON.stringify(buyStepData.equipments)
  useEffect(() => {
    methods.setValue('equipments', buyStepData.equipments)
  }, [equipmentHash])

  const { fields, append, remove } = useFieldArray({
    control: methods.control,
    name: 'equipments',
  });

  const totalUsedValue = fields.reduce((total, field) => total += field.value, 0)
  const value = (data.node?.startingValue || 0) - totalUsedValue
  useEffect(() => {
    methods.setValue('value', value)
  }, [value])

  const totalCarrying = fields.reduce((total, field) => total += field.load, 0)
  useEffect(() => {
    methods.setValue('carrying', totalCarrying)
  }, [totalCarrying])

  return (
    <Container maxWidth="lg" sx={{ mt: 4, justifyContent: 'center' }}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <RHFTextField
            control={methods.control}
            name='value'
            label='Value'
          />
          <RHFTextField
            control={methods.control}
            name='carrying'
            label='Carrying'
          />
          <Grid container>
            <Grid item xs>
              <AvailableEquipmentList
                queryRef={data}
                currentValue={value}
                totalCarrying={totalCarrying}
                onItemAdd={({ id, name, maxWear, load, value }) => {
                  append({
                    equipmentId: id,
                    wear: maxWear,
                    name,
                    load,
                    value,
                  })
                }}
              />
            </Grid>
            <Grid item xs>
              {fields.map((field, index) => (
                <Stack key={field.id} direction='row' alignItems='center' spacing={2} mb={2}>
                  <RHFTextField control={methods.control} name={`equipments.${index}.name`} label='Name' />
                  <RHFTextField control={methods.control} name={`equipments.${index}.wear`} label='Wear' disabled />
                  <div>
                    <IconButton onClick={() => remove(index)}>
                      <Remove />
                    </IconButton>
                  </div>
                </Stack>
              ))}
            </Grid>
          </Grid>
          <Stack direction="row" justifyContent="flex-end" mt={2}>
            <Button onClick={() => navigate('/vagabond-create/connections')}>Back</Button>
            <Button type="submit" variant="contained">
              Next
            </Button>
          </Stack>
        </form>
      </FormProvider>
    </Container>
  )
}
