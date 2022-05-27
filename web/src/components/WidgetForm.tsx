import { CloseButton } from "./CloseButton";

import bugImageUrl from '../assets/bug.svg'
import ideabugImageUrl from '../assets/idea.svg'
import thoughtImageUrl from '../assets/thought.svg'

const feedbackTypes = {
    BUG:{
        title: "Problema",
        image:{
            source: '',
            alt: ''
        }
    },
    IDEA:{
        title: "Ideia"

    },
    OTHER:{
        title: "Outro"

    },
}

export function WidgetForm(){
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            
            <header>
                <span className="text-xl leading-6 ">Deixe seu feedback</span>

                <CloseButton/>
            </header>

            <div className="flex py-8 gap-2 w-full">



            </div>

            <footer>
                Feito com amor pela <a className="underline underline-offset-2 " href="https://rocketseat.com.br">Rocketseat</a>
            </footer>

        </div>
    )
}