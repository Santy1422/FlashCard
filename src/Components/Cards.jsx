import React, { useEffect, useState } from "react";
import { useStat } from "./useStat";
import axios from "axios"
import { useSpeechSynthesis } from "react-speech-kit";

export const Cards = () =>{

const [posicion, setPosicion] = useState(0)    
const [español, setEspañol] = useState(false)    
const { speak } = useSpeechSynthesis();

    const {profile} = useStat()    
console.log(profile)
const next = () => {
    if(profile?.palabras?.ingles[posicion + 1] === undefined) alert("Agrega mas palabras")
    else{
    setEspañol(false)
    setPosicion(posicion + 1)
}

} 
const prev = () => {
    if(posicion === 0) alert("No puedes ir mas atras")
    else{
        setEspañol(false)

    setPosicion(posicion -1)
}

}   


console.log(profile?.palabras?.ingles)
    return(
       
        <><div class="relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
            <div class="px-6">
                <div class="flex flex-wrap justify-center">
                    <div class="w-full flex justify-center">
                        <div class="relative">
                            <img src="https://github.com/creativetimofficial/soft-ui-dashboard-tailwind/blob/main/build/assets/img/team-2.jpg?raw=true" class="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]" />
                        </div>
                    </div>
                    <div class="w-full text-center mt-20">
                        <div class="flex justify-center lg:pt-4 pt-8 pb-0">
                            <div class="p-3 text-center">
                                <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">{profile?.palabras?.ingles.length}</span>
                                <span class="text-sm text-slate-400">Palabras</span>
                            </div>
                            <div class="p-3 text-center">
                                <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">{profile?.palabras?.ingles.length}</span>
                                <span class="text-sm text-slate-400">Aprendidas</span>
                            </div>

                            <div class="p-3 text-center">
                                <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">{profile?.palabras?.ingles.length}</span>
                                <span class="text-sm text-slate-400">Estudiando</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center mt-2">
                    <h3 class="text-2xl text-slate-700 font-bold leading-normal mb-1">{español ? profile?.palabras?.español[posicion] : profile?.palabras?.ingles[posicion]}</h3>
                    <div class="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                        <i class="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>
                    </div>
                </div>
                <div class="mt-6 py-6 border-t border-slate-200 text-center">
                    <div class="flex flex-wrap justify-center">
                        <div class="w-full px-4">
<p></p>

{!español ? 
                        <button onClick={() =>setEspañol(!español)}
    type="button"
    class="inline-block rounded bg-primary-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-slate-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200">
 Ver en español
  </button>    
: 

<button onClick={() =>setEspañol(!español)}
    type="button"
    class="inline-block rounded bg-primary-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-slate-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200">
 Ver en ingles
  </button>   
}                
<div class="card-actions-container absolute top-1/2   justify-center">
        <button class="btn btn-primary  mx-20" onClick={() => prev()}>Anterior</button>
        <button class="btn btn-primary  mx-20" onClick={() => next()}>Siguiente</button>
      </div>   
                        </div>
                    </div>
                </div>
            </div>
        </div>        </>

    )
}