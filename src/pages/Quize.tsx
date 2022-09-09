import React from 'react'

import { bestPlayers, questions } from '../assets/json/json'
import { Header } from '../components/Header/Header'
import { Hints } from '../components/Header/Hints'
import { Modal } from '../components/Modal/Modal'
import { Questions } from '../components/Question/Questions'
import { Result } from '../components/Result/Result'

import { BestPlayers, Question } from '../interface'

interface Props {
  userName: string
}

const storedBestUSers = JSON.parse(localStorage.getItem('bestResults') ?? JSON.stringify(bestPlayers))

export const Quize: React.FC<Props> = ({ userName }) => {

  const [step, setStep] = React.useState(0)
  const [rightAnswer, setRightAnswer] = React.useState(0)
  const [hintCount, setHintCount] = React.useState(2)
  const [fiftyFiftyCount, setFiftyFiftyCount] = React.useState(2)
  const [allQuestions, setAllQuestion] = React.useState<Question[]>([])
  const [bestResults, setBestResults] = React.useState<BestPlayers[]>(storedBestUSers)
  const [modal, setModal] = React.useState(true)
  const [fiftyFifty, setFiftyFifty] = React.useState<string | string[]>()
    
  const currentQuestion: Question = allQuestions[step]

  const changeVariants = (index: number) => {
    setStep(step + 1)

    if (index === currentQuestion.answer) {
      setRightAnswer(rightAnswer + 1)
    }
        
  }

  const callPersents = Math.round(step / allQuestions.length * 100)

  const handleHint = (step: number) => {
    const corectAnswer = allQuestions[step].answer
    const res = allQuestions[step].variants.forEach((item, index) => {
      if (index === corectAnswer) {
        return setFiftyFifty(item)
      }
    })

    if (hintCount === 0) return
    setHintCount(hintCount - 1)
    setModal(!modal)
        
  }

  const handleFiftyFifty = (step: number) => {

    const corectAnswer = allQuestions[step].answer

    let firtyfirtyy: string[] = []

    let randomNumber = Math.ceil(Math.random() * 3)
        
    if (randomNumber === corectAnswer) {
      randomNumber = 0
    }

    const res = allQuestions[step].variants.forEach((item, index) => {
      if (index === corectAnswer) {
        firtyfirtyy.push(item)
      } else if (index === randomNumber) {
        firtyfirtyy.push(item)
      }
    })
    setFiftyFifty(firtyfirtyy)
    setModal(!modal)
    if (fiftyFiftyCount === 0) return
    setFiftyFiftyCount(fiftyFiftyCount - 1)

  }
 
  const shuffle = (arr: Question[]) => {
    let result = arr.sort(() => Math.round(Math.random() * 100) - 50)
    setAllQuestion(result)
  }

  React.useEffect(() => {
    shuffle(questions)
    localStorage.setItem('bestResults', JSON.stringify(bestResults))
  }, [bestResults])

  React.useEffect(() => {
    if (step !== allQuestions.length) return
    if (step >= 10) {
      setBestResults([...bestResults, { name: userName, result: rightAnswer }])
    } 
  }, [step])

  const sortedBestResult = bestResults.sort((a, b) => b.result - a.result)

  const closeModal = () => {
    setModal(!modal)
  }

  return (
    <div className='mt-5  max-w-[600px] m-auto'>
     
      {step !== allQuestions.length
        ? <div className='w-[400px] shadow-xl bg-slate-200 m-auto mt-8 rounded-lg p-4 '>

          <Header
            step={step}
            allQuestions={allQuestions}
            userName={userName}
            callPersent={callPersents}
            setStep={setStep}
          />

          <Hints
            step={step}
            fiftyFiftyCount={fiftyFiftyCount}
            hintCount={hintCount}
            handleFiftyFifty={handleFiftyFifty}
            handleHint={handleHint}
          />

          {!modal &&
            <Modal closeModal={closeModal}>
              <div>
                {typeof (fiftyFifty) === 'string'
                  ? fiftyFifty
                  : fiftyFifty?.map((item, index) => (
                    <div key={index}>{item}</div>
                  ))}
              </div>
            </Modal>}
                
          <Questions
            currentQuestion={currentQuestion}
            changeVariants={changeVariants}
          />
         
        </div>
        : <Result
          allQuestions={allQuestions}
          rightAnswer={rightAnswer}
          sortedBestResult={sortedBestResult}
          fiftyFiftyCount={fiftyFiftyCount}
          hintCount={hintCount}
        />
      }
     
    </div>
  )
}
