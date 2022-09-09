import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
  getUserName: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Home: React.FC<Props> = ({ getUserName }) => {

  const [explanation, setExplanation] = React.useState(true)

  return (
    <div className='w-screen h-screen bg-amber-200 '>
      <div className={explanation ? 'flex flex-col w-[35%] pt-7 m-auto shadow-xl bg-amber-300 p-5 mt-5 rounded-xl' : 'opacity-25 w-[500px] pt-7 m-auto'}>
        <h1 className='mb-5 text-center w-max-[90%] m-auto text-3xl text-neutral-600 '>
          React Quiz Game
        </h1>
        <input placeholder='Enter you name'
          className='w-[90%] p-2 m-auto mb-3 outline-none rounded-xl text-center'
          onChange={(e) => getUserName(e)}
        />
        <div className='flex flex-row justify-between'>
          <Link to='/game' className='w-[30%] bg-slate-500 rounded-lg p-1  mt-3 text-center hover:text-white '
          >Start game
          </Link>
          
            <button
              className='w-[30%] bg-slate-500 rounded-lg p-1 mt-3 text-center hover:text-white '
              onClick={() => setExplanation(!explanation)}
            >
              Instraction
            </button>
          
        </div>
       
      </div>
      <div className={explanation ? 'opacity-0' : ' w-[400px] m-auto mt-7 bg-slate-400 py-4 px-7 rounded-lg'}>
        Welcome to our game!
        How well do you know React?
        You have 10 questions that need to be answered. You have 25 seconds to choose your answer, if you dont the question will be automatically switched. There is also good news! You have 4 hints, 2 of which are 50/50. At the end of the game you can see your score and the best players.
        Good luck!
      </div>
    </div>
  )
}