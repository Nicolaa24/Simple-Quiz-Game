import React from 'react'

import { Question } from '../../interface'
import { Timer } from '../Timer/Timer'

interface Props {
  step: number
  allQuestions: Question[]
  userName: string
  callPersent: number
  setStep: React.Dispatch<React.SetStateAction<number>>
}

export const Header: React.FC<Props> = ({ step, allQuestions, userName, callPersent, setStep }) => {
  return (
     <div className='flex  justify-between  mx-2'>
            <div className='flex flex-col'>
              <div className='flex'>
                <h1 className='text-xl '>Questions: </h1>
                <span className='text-center text-xl ml-3'>{step + 1}/{allQuestions.length}</span>
              </div>
              <input className='w-[200px] my-2' readOnly type='range' value={callPersent} step="1" max={100} />
              <div className='text-xl'>
                User: {userName}
              </div>
            </div>

            <Timer step={step} setStep={setStep} />
               
          </div>
  )
}
