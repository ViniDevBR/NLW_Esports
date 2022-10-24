//RADIX UI
import * as ToggleGroup from '@radix-ui/react-toggle-group'

//REACT
import { Dispatch, SetStateAction } from 'react'

interface IButton {
  day: string[]
  setDay: Dispatch<SetStateAction<string[]>>
}

export function ButtonDays({ day, setDay }: IButton) {
  // console.log(day)

  return (
    <ToggleGroup.Root
      type="multiple"
      className="grid grid-cols-4 gap-2"
      onValueChange={setDay}
    >

      <ToggleGroup.Item
        value="0"
        className={`w-8 h-8 rounded ${
          day.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'
        }`}
        title="Domingo"
      >
        D
      </ToggleGroup.Item>

      <ToggleGroup.Item
        value="1"
        className={`w-8 h-8 rounded ${
          day.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'
        }`}
        title="Segunda"
      >
        S
      </ToggleGroup.Item>

      <ToggleGroup.Item
        value="2"
        className={`w-8 h-8 rounded ${
          day.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'
        }`}
        title="Terça"
      >
        T
      </ToggleGroup.Item>

      <ToggleGroup.Item
        value="3"
        className={`w-8 h-8 rounded ${
          day.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'
        }`}
        title="Quarta"
      >
        Q
      </ToggleGroup.Item>

      <ToggleGroup.Item
        value="4"
        className={`w-8 h-8 rounded ${
          day.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'
        }`}
        title="Quinta"
      >
        Q
      </ToggleGroup.Item>

      <ToggleGroup.Item
        value="5"
        className={`w-8 h-8 rounded ${
          day.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'
        }`}
        title="Sexta"
      >
        S
      </ToggleGroup.Item>

      <ToggleGroup.Item
        value="6"
        className={`w-8 h-8 rounded ${
          day.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'
        }`}
        title="Sabado"
      >
        S
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  )
}