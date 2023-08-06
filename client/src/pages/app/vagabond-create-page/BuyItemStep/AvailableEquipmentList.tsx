import { List } from "@mui/material"
import { graphql, usePaginationFragment } from "react-relay"
import { AddItem, AvailableEquipmentListItem } from "./AvailableEquipmentListItem"
import { AvailableEquipmentListPaginationQuery } from "./__generated__/AvailableEquipmentListPaginationQuery.graphql"
import { AvailableEquipmentList_query$key } from "./__generated__/AvailableEquipmentList_query.graphql"

type AvailableEquipmentListProps = {
  queryRef: AvailableEquipmentList_query$key
  onItemAdd?: (item: AddItem) => void
  currentValue: number
  totalCarrying: number
}

export const AvailableEquipmentList = ({
  queryRef,
  onItemAdd,
  currentValue,
  totalCarrying,
}: AvailableEquipmentListProps) => {
  const { data } = usePaginationFragment<AvailableEquipmentListPaginationQuery, AvailableEquipmentList_query$key>(
    graphql`
      fragment AvailableEquipmentList_query on Query
      @refetchable(queryName: "AvailableEquipmentListPaginationQuery")
      @argumentDefinitions(
        count: { type: "Int", defaultValue: 10 }
        cursor: { type: "String" }
      )
      {
        equipmentConnection(first: $count, after: $cursor)
        @connection(key: "AvailableEquipmentList_query_equipmentConnection")
        {
          edges {
            node {
              id
              ...AvailableEquipmentListItem_equipment
            }
          }
        }
      }
    `,
    queryRef
  )

  return (
    <List>
      {data.equipmentConnection.edges.map(edge => {
        if (!edge?.node) return null

        return (
          <AvailableEquipmentListItem
            key={edge.node.id}
            equipmentRef={edge.node}
            onItemAdd={onItemAdd}
            currentValue={currentValue}
            totalCarrying={totalCarrying}
          />
        )
      })}
    </List>
  )
}
