interface Props {
  step: number
  fiftyFiftyCount: number
  hintCount: number
  handleFiftyFifty: (step: number) => void
  handleHint: (step: number) => void
}

export const Hints: React.FC<Props> = (
  { step, fiftyFiftyCount, hintCount, handleFiftyFifty, handleHint }) => {
  return (
    <div className='flex justify-between m-3'>
      {fiftyFiftyCount > 0
        ? <button className='bg-amber-300 rounded-xl p-2 w-[30%] hover:font-bold'
          onClick={() => handleFiftyFifty(step)}
        >50/50
        </button>
        : <div>You use all hint</div>
      }
                 
      {hintCount > 0
        ? <button
        className='bg-amber-300 rounded-xl w-[30%] p-2 hover:font-bold '
        onClick={() => handleHint(step)}>
        hint
        </button>
        : <div>You use all hint</div>}
                  
    </div>
  )
}
