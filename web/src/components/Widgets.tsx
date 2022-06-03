import { ChatTeardropDots } from 'phosphor-react'
import { Popover } from '@headlessui/react'
import { WidgetForm } from './WidgetForm'

// Estado: variavel cpaz de atualizar componente ao ter seu valor mudado: const [nome da variavel, funcao de atualizacao] = useState(valor inicial). Usar a funcao atualiza a var e renderiza o componente com o novo valor




export function Widget() {


    return (
        <Popover className='absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end'>
 
                <Popover.Panel><WidgetForm/></Popover.Panel> 


            <Popover.Button className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group'>
                <h1><ChatTeardropDots className='w-6 h-6' />
                </h1>
                <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
                    <span className='pl-2'></span>
                    Feedback
                </span>
            </Popover.Button>
        </Popover>
    )
}