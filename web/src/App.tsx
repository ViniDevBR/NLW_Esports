//REACT
import { useState, useEffect } from 'react';

// TAILWIND - POSTCSS
import './styles/main.css';

//IMG
import logo from './assets/Logo.svg';

//COMPONENTES
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import { CreateAdModal } from './components/CreateAdModal';

//RADIX UI
import * as Dialog from '@radix-ui/react-dialog';

//AXIOS
import axios from 'axios';

export interface Game{
  id: string,
  bannerUrl: string,
  title: string,
  _count: {
    ads: number
  }
}

function App() {
  const url = 'http://localhost:3333/games'
  const [games, setGames] = useState<Game[]>([])
  
  useEffect(() => {
    axios(url).then(response => {
      setGames(response.data)
    })
  }, [])
  return (
    <div className='max-w-[1344px] mx-auto flex items-center flex-col my-20'>
      <img src={logo} alt="logo rocketseat" />
      <h1 className='text-6xl text-white font-black mt-20'>Seu 
      <span className='bg-gradiente bg-clip-text text-transparent'> duo </span> 
      esta aqui</h1>

      <div className= 'grid grid-cols-6 gap-6 mt-16 rounded-lg overflow-hidden'>
        {games.map(game => {
          return (
            <GameBanner
            key={game.id}
            bannerUrl={game.bannerUrl} 
            title={game.title} 
            adsCount={game._count.ads}
            />
          )
        })}
      </div>
      <Dialog.Root>
        <CreateAdBanner/>
        <CreateAdModal />
      </Dialog.Root>
    </div>
  ) 
}

export default App