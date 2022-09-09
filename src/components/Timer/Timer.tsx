import React from 'react'

interface IProps {
  step: number
  setStep: (step: number) => void
}

export const Timer: React.FC<IProps> = ({ step, setStep }) => {

  const [second, setSecond] = React.useState(25)

  React.useEffect(() => {
    if (second === 0) return setStep(step + 1)
    
    const interval = setInterval(() => {
      setSecond((prev) => prev - 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [second])

  React.useEffect(() => {
    setSecond(25)
  }, [step])

  return (
    <div>
            
      <div
        className={second >= 16 ? 'text-green-900  text-4xl m-4' : 'text-yellow-600  text-4xl m-4'} >
        {second}
      </div>
          
    </div>
  )
}