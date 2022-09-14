import {MagnifyingGlassPlus} from 'phosphor-react';
import './styles/main.css';
import logo from './assets/Logo.svg';

function App() {
  return (
    <div className='max-w-[1344px] mx-auto flex items-center flex-col my-20'>
      <img src={logo} alt="logo rocketseat" />
      <h1 className='text-6xl text-white font-black mt-20'>Seu 
      <span className='bg-gradiente bg-clip-text text-transparent'> duo </span> 
      esta aqui</h1>

      <div className= 'grid grid-cols-6 gap-6 mt-16 rounded-lg overflow-hidden'>
        <a href="" className= "relative rounded-lg overflow-hidden">
          <img src="/image 1.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0'>
            <strong className='font-bold text-white'>League of Legends</strong>
            <span className='text-zinc-300 text-sm block'>4 Anuncios</span>
          </div>
        </a>

        <a href="" className= "relative rounded-lg overflow-hidden">
          <img src="/image 2.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0'>
            <strong className='font-bold text-white'>Dota 2</strong>
            <span className='text-zinc-300 text-sm block'>4 Anuncios</span>
          </div>
        </a>

        <a href="" className= "relative rounded-lg overflow-hidden">
          <img src="/image 3.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0'>
            <strong className='font-bold text-white'>Counter Strike</strong>
            <span className='text-zinc-300 text-sm block'>4 Anuncios</span>
          </div>
        </a>

        <a href="" className= "relative rounded-lg overflow-hidden">
          <img src="/image 5.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0'>
            <strong className='font-bold text-white'>Apex</strong>
            <span className='text-zinc-300 text-sm block'>4 Anuncios</span>
          </div>
        </a>

        <a href="" className= "relative rounded-lg overflow-hidden">
          <img src="/image 6.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0'>
            <strong className='font-bold text-white'>Fortnite</strong>
            <span className='text-zinc-300 text-sm block'>4 Anuncios</span>
          </div>
        </a>

        <a href="" className= "relative rounded-lg overflow-hidden">
          <img src="/image 7.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0'>
            <strong className='font-bold text-white'>World of Warcraft</strong>
            <span className='text-zinc-300 text-sm block'>4 Anuncios</span>
          </div>
        </a>
      </div>

      <div className='pt-1 mt-8 self-stretch bg-gradiente rounded-lg'>
        <div className='bg-[#2A2634] py-6 px-8 self-stretch flex justify-between items-center'>
          <div>
            <strong className='text-2x1 text-white font-black'>Não encontrou seu duo?</strong>
            <span className='text-zinc-400 block'>Publique um anuncio para encontrar novos players!</span>
          </div>
          
          <button className='py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3'>
            <MagnifyingGlassPlus size={24}/>
            Publicar Anuncio
          </button>
        </div>
      </div>
    </div>
  ) 
}

export default App
