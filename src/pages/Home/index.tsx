import { useCallback, useState } from 'react'
import { Container, Content } from './styles'

export function Home (): JSX.Element {
  const [waitingToCalc, setWaitingToCalc] = useState(0)
  const [number, setNumber] = useState(0)
  const [operator, setOperator] = useState('')
  const [hasOperator, setHasOperator] = useState(false)

  const handleReset = useCallback(() => {
    setNumber(0)
    setWaitingToCalc(0)
    setOperator('')
  }, [])

  const handleOperator = useCallback((operator: string) => {
    setOperator(operator)
    setWaitingToCalc(number)
    setHasOperator(true)
  }, [number])

  const handleNumber = useCallback((num: number) => {
    const calc = (number && !hasOperator) ? (number * 10) + num : num
    if (hasOperator) {
      setHasOperator(false)
    }
    setNumber(calc)
  }, [number, hasOperator])

  const handleCalc = useCallback(() => {
    const sum = waitingToCalc + number
    const min = waitingToCalc - number
    const mul = waitingToCalc * number
    const div = waitingToCalc / number
    setNumber(() => {
      switch (operator) {
        case '+':
          return sum
        case '-':
          return min
        case '/':
          return div
        case '*':
          return mul
        default:
          return 0
      }
    })
  }, [number, operator, waitingToCalc])

  useCallback(() => {}, [])

  return (
    <Container>
      <Content>
        <h1>
          {Intl.NumberFormat('pt-BR', {
            maximumFractionDigits: 8
          }).format(number)}
        </h1>
        <main>
          <button className="initial" onClick={handleReset}>
            {number ? 'C' : 'AC'}
          </button>

          <button className="initial" onClick={() => {
            setNumber(prevState => (prevState ? prevState * -1 : 0))
          }}>
            +/-
          </button>

          <button className="initial" onClick={() => {
            setNumber(prevState => prevState / 100)
          }}>
            %
          </button>

          <button className={`operator ${hasOperator && operator === '/' && 'active'}`} onClick={() => handleOperator('/')}>
            ÷
          </button>

          <button
            className="number" onClick={() => handleNumber(7)}>
            7
          </button>

          <button className="number" onClick={() => handleNumber(8)}>
            8
          </button>

          <button className="number" onClick={() => handleNumber(9)}>
            9
          </button>

          <button className={`operator ${hasOperator && operator === '*' && 'active'}`} onClick={() => handleOperator('*')}>
            x
          </button>

          <button className="number" onClick={() => handleNumber(4)}>
            4
          </button>

          <button className="number" onClick={() => handleNumber(5)}>
            5
          </button>

          <button className="number" onClick={() => handleNumber(6)}>
            6
          </button>

          <button className={`operator ${hasOperator && operator === '-' && 'active'}`} onClick={() => handleOperator('-')}>
            -
          </button>

          <button className="number" onClick={() => handleNumber(1)}>
            1
          </button>

          <button className="number" onClick={() => handleNumber(2)}>
            2
          </button>

          <button className="number" onClick={() => handleNumber(3)}>
            3
          </button>

          <button className={`operator ${hasOperator && operator === '+' && 'active'}`} onClick={() => handleOperator('+')}>
            +
          </button>

          <button className="number zero" onClick={() => handleNumber(0)}>
            0
          </button>

          <button className="number" onClick={() => {}} disabled>
            ,
          </button>

          <button className="operator" onClick={handleCalc}>
            =
          </button>
        </main>
      </Content>
    </Container>
  )
}
