//REACT
import { useState, useEffect, Dispatch, SetStateAction } from 'react';

//RADIX UI
import * as Select from '@radix-ui/react-select'
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'

//COMPONENTE
import { SelectList } from './SelectList'

//INTERFACE
import { Game } from '../../App';

interface IGameName {
  gameName: string
  setGameName: Dispatch<SetStateAction<string>>
}

export function SelectGame({ gameName, setGameName}: IGameName) {
  const url = 'http://localhost:3333/games'
  const [games, setGames] = useState<Game[]>([])
  
  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
      setGames(data)
    })
  }, [])
  
  return (
    <Select.Root onValueChange={setGameName}>
      <Select.Trigger 
        className='flex items-center justify-between bg-zinc-900 py-3 px-4 rounded text-sm text-white'
        aria-label="Seleção dos games"
      >
        <Select.Value placeholder="Selecione o game que deseja jogar" />
        
        <Select.Icon>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal className='bg-zinc-900 rounded text-white py-3 px-4'>
        <Select.Content>
          <Select.ScrollUpButton>
            <ChevronUpIcon />
          </Select.ScrollUpButton>

          <Select.Viewport
            className='cursor-pointer bg-zinc-900 rounded text-white'
          >
            {games?.map(game => {
              return (
                <SelectList
                  key={game.id}
                  ItemText={game.title}
                  ItemValue={game.id}
                />
              )
            })}
          </Select.Viewport>
          
          <Select.ScrollDownButton />
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
