export interface Question {
  id: string
  question: string
  variants: string[]
  answer: number
}

export interface BestPlayers {
  name: string
  result: number
}