import uuid from 'react-uuid'

export const questions = [
  {
    id: uuid(),
    question: 'Everything in React is a ___',
    variants: ['Module', 'Component', 'Package', 'Class'],
    answer: 0
  },
  {
    id: uuid(),
    question: 'What does the "webpack" command do?',
    variants: ['Transpiles all the Javascript down into one file', 'None of the above', 'Runs react local development server.', 'A module bundler'],
    answer: 3
  },
  {
    id: uuid(),
    question: 'React is ....?',
    variants: ['framwork', 'liberry', 'aplication', 'language'],
    answer: 1
  },
  {
    id: uuid(),
    question: 'How many elements does a react component return?',
    variants: ['1 Element', '2 Elements', 'Multiple Elements', 'None of the above'],
    answer: 2
  },
  {
    id: uuid(),
    question: 'What is Babel?',
    variants: ['An interpreter', 'A transpiler.', 'A Compiler', 'Both Compiler and Transpilar'],
    answer: 3
  },
  {
    id: uuid(),
    question: 'In which directory React Components are saved?',
    variants: ['Inside js/components/', 'Inside vendor/components/', 'Inside vendor/components/', 'Inside vendor/'],
    answer: 0
  },
  {
    id: uuid(),
    question: 'Props are __________ into other components',
    variants: ['Injected', 'Methods', 'Both A and B', 'All of these'],
    answer: 1
  },
  {
    id: uuid(),
    question: 'Which of the following API is a MUST for every ReactJS component?',
    variants: ['getInitialState', 'render', 'renderComponent', 'None of the Above'],
    answer: 2
  },
  {
    id: uuid(),
    question: 'How can you access the state of a component from inside of a member function?',
    variants: ['this.prototype.stateValue', 'this.getState()', 'this.values', 'this.state'],
    answer: 2
  },
  {
    id: uuid(),
    question: 'ReactJS uses _____ to increase performance',
    variants: ['Original DOM', 'Virtual DOM', 'Both 1 & 2', 'None of the above'],
    answer: 1
  }
]

export const bestPlayers = [
  { name: 'Guest', result: 3 } 
]