import React from 'react'

import { Question } from '../../interface'

interface Props {
  currentQuestion: Question
  changeVariants: (index: number) => void
}

export const Questions: React.FC<Props> = ({ currentQuestion, changeVariants }) => {
  return (
              <div className='flex flex-col mt-2'>
            <h1 className='max-w-[60%] m-auto text-2xl mb-1'>Question</h1>
            <h1 className='m-1 text-xl'>{currentQuestion.question}</h1>
                 
            {currentQuestion.variants.map((question, index) => (
              <div className='cursor-pointer '
                key={index}
                onClick={() => changeVariants(index)}
              >
                <p className='m-1'>
                  {index + 1}  {question}
                </p>
              </div>
            ))}
          </div>
  )
}
