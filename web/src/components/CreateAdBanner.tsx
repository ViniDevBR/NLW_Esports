//PHOSPHOR ICON
import {MagnifyingGlassPlus} from 'phosphor-react';

//RADIX UI
import * as Dialog from '@radix-ui/react-dialog';

export function CreateAdBanner() {
  return (
    <div className="pt-1 mt-8 self-stretch bg-gradiente rounded-lg">
      <div className="bg-[#2A2634] py-6 px-8 self-stretch flex justify-between items-center">
        <div>
          <strong className="text-2x1 text-white font-black">
            Não encontrou seu duo?
          </strong>
          <span className="text-zinc-400 block">
            Publique um anuncio para encontrar novos players!
          </span>
        </div>

        <Dialog.Trigger className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3">
          <MagnifyingGlassPlus size={24} />
          Publicar Anuncio
        </Dialog.Trigger>
      </div>
    </div>
  )
}