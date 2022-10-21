import * as Select from '@radix-ui/react-select'
import { CheckIcon } from '@radix-ui/react-icons'

interface ListProps {
 ItemText: string;
 ItemValue: string
}

export function SelectList(props: ListProps) {
  return (
    <Select.Item
      className='flex items-center justify-between hover:bg-zinc-500 transition-all'
      value={props.ItemValue}
    >
      <Select.ItemText>
        {props.ItemText}
      </Select.ItemText>
      
      <Select.ItemIndicator>
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  )
}
