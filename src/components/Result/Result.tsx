import { BestPlayers, Question } from '../../interface'

interface Props {
  allQuestions: Question[]
  rightAnswer: number
  sortedBestResult: BestPlayers[]
  fiftyFiftyCount: number
  hintCount: number
}

export const Result: React.FC<Props> = ({ allQuestions, rightAnswer, sortedBestResult, fiftyFiftyCount, hintCount }) => {
  return (
    <div className='flex flex-col w-[400px] shadow-xl bg-slate-200 m-auto mt-8 rounded-lg p-4 '>
      <div className='flex flex-col ml-3 p-2 rounded-lg text-white bg-cyan-600'>
        Your result :
        <span>Right answer: {rightAnswer}</span>
        <span>All questions: {allQuestions.length}</span>
        <span>Used hints: { 4 - (fiftyFiftyCount + hintCount) }</span>
      </div>
      <div className=' flex flex-col  w-[300px] max-h-[400px] bg-yellow-600  m-auto mt-6 rounded-lg p-4 overflow-y-auto'>Best players
        {sortedBestResult.map((user, index) => (
          <div className='border border-1 p-1 mt-1' key={index}>
            {user.name } {user.result}
          </div>))}
      </div>
      <a href='/' className='w-[50%] m-auto'>
        <button
          className= 'w-[100%] rounded-lg bg-cyan-600 my-3 p-1 text-white'
        >Try  again
        </button>
      </a>
    </div>
  )
}
