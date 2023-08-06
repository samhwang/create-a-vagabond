import { AddShoppingCart } from "@mui/icons-material"
import { IconButton, ListItem, ListItemSecondaryAction, ListItemText } from "@mui/material"
import { useAtomValue } from "jotai"
import { graphql, useFragment } from "react-relay"
import { vagabondCreateInputAtom } from ".."
import { AvailableEquipmentListItem_equipment$key } from "./__generated__/AvailableEquipmentListItem_equipment.graphql"

export type AddItem = {
  id: string
  name: string
  load: number
  value: number
  maxWear: number
}

type AvailableEquipmentListItemProps = {
  equipmentRef: AvailableEquipmentListItem_equipment$key
  onItemAdd?: (item: AddItem) => void
  currentValue: number
  totalCarrying: number
}

export const AvailableEquipmentListItem = ({ equipmentRef, onItemAdd, currentValue, totalCarrying }: AvailableEquipmentListItemProps) => {
  const equipment = useFragment(
    graphql`
      fragment AvailableEquipmentListItem_equipment on Equipment {
        id
        name
        load
        value
        maxWear
      }
    `,
    equipmentRef
  )

  const characterCreateData = useAtomValue(vagabondCreateInputAtom)
  const max = (characterCreateData.might + 4) * 2
  const disabled = (currentValue - equipment.value < 0) || (totalCarrying + equipment.load > max)

  return (
    <ListItem>
      <ListItemText
        primary={equipment.name}
        secondary={`Load: ${equipment.load} | Value: ${equipment.value}`}
      />
      <ListItemSecondaryAction>
        <IconButton
          onClick={() => onItemAdd?.({
            id: equipment.id,
            name: equipment.name,
            load: equipment.load,
            value: equipment.value,
            maxWear: equipment.maxWear,
          })}
          disabled={disabled}
        >
          <AddShoppingCart />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}
