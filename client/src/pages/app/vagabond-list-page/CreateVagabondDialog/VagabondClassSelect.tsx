import { MenuItem } from '@mui/material'
import { FieldValues } from 'react-hook-form'
import { graphql, usePaginationFragment } from 'react-relay'
import { RHFTextField, RHFTextFieldProps } from '../../../../components/RHF/RHFTextField'
import { VagabondClassSelectPaginationQuery } from './__generated__/VagabondClassSelectPaginationQuery.graphql'
import { VagabondClassSelect_query$key } from './__generated__/VagabondClassSelect_query.graphql'

type VagabondClassSelectProps<T extends FieldValues> = Omit<RHFTextFieldProps<T>, 'select'> & {
  queryRef: VagabondClassSelect_query$key
}

export const VagabondClassSelect = <T extends FieldValues>({ queryRef, ...props }: VagabondClassSelectProps<T>) => {
  const { data } = usePaginationFragment<VagabondClassSelectPaginationQuery, VagabondClassSelect_query$key>(
    graphql`
      fragment VagabondClassSelect_query on Query
      @refetchable(queryName: "VagabondClassSelectPaginationQuery")
      @argumentDefinitions(count: { type: "Int", defaultValue: 50 }, cursor: { type: "String" }) {
        vagabondClassConnection(first: $count, after: $cursor) @connection(key: "VagabondClassSelect_query_vagabondClassConnection") {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    `,
    queryRef
  )

  return (
    <RHFTextField {...props} select>
      {data.vagabondClassConnection.edges.map(edge => {
        if (!edge?.node) return

        return (
          <MenuItem
            key={edge.node.id}
            value={edge.node.id}
          >
            {edge.node.name}
          </MenuItem>
        )
      })}
    </RHFTextField>
  )
}
