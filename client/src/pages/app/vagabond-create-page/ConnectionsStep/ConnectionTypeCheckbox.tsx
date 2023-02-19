import { FieldValues } from "react-hook-form"
import { RHFCheckboxField, RHFCheckboxFieldProps } from "../../../../components/RHF/RHFCheckboxField"
import { RHFCheckboxFieldItem, RHFCheckboxFieldItemProps } from "../../../../components/RHF/RHFCheckboxFieldItem"

type ConnectionTypeCheckboxFieldProps<T extends FieldValues> = 
  & RHFCheckboxFieldProps<T>
  & {
    ItemProps?: Omit<
      RHFCheckboxFieldItemProps<T>,
      'control' | 'name' | 'label' | 'value' | 'helperText'
    >
  }

export const ConnectionTypeCheckboxField = <T extends FieldValues>({
  ItemProps = {},
  ...props
}: ConnectionTypeCheckboxFieldProps<T>) => {
  return (
    <RHFCheckboxField {...props}>
      {connectionTypes.map(({ name, value, description }) => (
        <RHFCheckboxFieldItem
          key={name}

          control={props.control as any}
          name={props.name}

          label={name}
          value={value}
          helperText={description}

          {...ItemProps}
        />
      ))}
    </RHFCheckboxField>
  )
}

export const connectionTypes = [
  { name: 'Protector', value: 'protector', description: 'When they are in reach, mark exhaustion to take a blow meant for them. If you do, take +1 ongoing to weapon moves for the rest of the scene.' },
  { name: 'Partner', value: 'partner', description: 'When you fill in this connection, you each mark 2-prestige with the faction you helped, and mark 2-notoriety with the faction you harmed. During play, if you are spotted together, then any prestige or notoriety gains with those factions are doubled for the two of you.' },
  { name: 'Watcher', value: 'watcher', description: 'When you figure them out, you always hold 1, even on a miss. When you plead with them to go along with you, you can let them clear 2-exhaustion instead of 1.' },
  { name: 'Friend', value: 'friend', description: 'When you help them, you can mark 2-exhaustion to give a +2, instead of 1-exhaustion for a +1.' },
  { name: 'Professional', value: 'professional', description: 'If you share information with them after reading a tense situation, you both benefit from the +1 for acting on the answers. If you help them while they attempt a roguish feat, you gain choices on the help move as if you had marked 2-exhaustion when you mark 1-exhaustion.' },
  { name: 'Family', value: 'family', description: 'When you help them fulfill their nature, you both clear your exhaustion track.' },
]
