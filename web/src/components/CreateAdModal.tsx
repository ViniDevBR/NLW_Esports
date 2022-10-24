//REACT
import { FormEvent, useState, useEffect } from 'react';

//RADIX UI
import * as Dialog from '@radix-ui/react-dialog';
import * as Checkbox from '@radix-ui/react-checkbox';

//PHOSPHOR ICONS
import { Check, GameController } from "phosphor-react";

//COMPONENTES
import { Input } from "./Form/Inputs";
import { SelectGame } from './SelectGame/SelectGame';
import { ButtonDays } from './Form/ButtonDays';

//AXIOS
import axios from 'axios';


export function CreateAdModal() {
  const [useVoiceChannel, setUseVoiceChannel] = useState(false)
  const [weekDay, setWeekDay] = useState<string[]>([])
  const [gameName, setGameName] = useState('')

  const urlGet = `http://localhost:3333/games`
  useEffect(() => {
      axios(urlGet).then(response => {
        setGameName(response.data) 
      })
  }, [])
  
//THIS Promise<void> testar
  async function submitForm (event: FormEvent): Promise<void> {
    event.preventDefault()

    const formInfos = new FormData(event.target as HTMLFormElement)
    const infos = Object.fromEntries(formInfos)
    const urlPost = `http://localhost:3333/games/${gameName}/ads`

    if(!infos.name){
      return
    }

    try{
      await axios.post(urlPost, {
        name: infos.name,
        yearsPlaying: Number(infos.yearsPlaying),
        discord: infos.discord,
        weekDays: weekDay.map(Number),
        hourStart: infos.hourStart,
        hourEnd: infos.hourEnd,
        useVoiceChannel: useVoiceChannel
      })

      alert('Anuncio criado com Sucesso!')
    } catch(error) {
      console.error(error)
      alert('Erro ao criar anuncio :(')
    }
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
      <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-xl shadow-black/50">

        <Dialog.Title className="text-3x1 font-black">
          Publique um anúncio
        </Dialog.Title>

        <form onSubmit={submitForm} className="mt-8 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="game" className="font-semibold">
              Qual o game?
            </label>
            <SelectGame 
              gameName={gameName}
              setGameName={setGameName}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="name">Seu nome (ou nickname)</label>
            <Input name="name" id="name" placeholder="Como te chamam dentro do game" />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
              <Input
                name='yearsPlaying'
                id="yearsPlaying"
                type="number"
                placeholder="Tudo bem ser ZERO"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="discord">Qual o seu Discord?</label>
              <Input name='discord' id="discord" placeholder="usuario0000" />
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="weekDays">Quando costuma jogar?</label>
              <ButtonDays
                day={weekDay}
                setDay={setWeekDay}
              />
            </div>

            <div className="flex flex-1 flex-col gap-2">
              <label htmlFor="hourStart">Qual horario do dia?</label>
              <div className="grid grid-cols-2 gap-2">
                <Input name='hourStart' id="hourStart" type="time" placeholder="De" />
                <Input name='hourEnd' id="hourEnd" type="time" placeholder="Até" />
              </div>
            </div>
          </div>

          <label className="mt-2 flex items-center gap-2 text-sm">
            <Checkbox.Root
              checked={useVoiceChannel} 
              onCheckedChange={(checked) => {
                checked === true ? setUseVoiceChannel(true) : setUseVoiceChannel(false)
              }}
              className='w-6 h-6 p-1 rounded bg-zinc-900'
            >
              <Checkbox.Indicator>
                <Check className='w-4 h-4 text-emerald-400' />
              </Checkbox.Indicator>
            </Checkbox.Root>
            Costumo me conectar ao chat de voz
          </label>

          <footer className="flex justify-end mt-4 gap-4">
            <Dialog.Close
              type="button"
              className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600"
            >
              Cancelar
            </Dialog.Close>

            <button
              className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-2 hover:bg-violet-600"
              type="submit"
            >
              <GameController className="w-6 h-6" />
              Encontrar duo
            </button>
          </footer>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  )
}