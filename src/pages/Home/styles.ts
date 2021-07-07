import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  background: #222;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  width: 100%;
  max-width: 304px;

  h1 {
    text-align: right;
    color: #ffffff;
    margin-bottom: 1rem;
    font-size: 3rem;
    font-weight: 500;
  }

  main {
    display: flex;
    gap: 1rem;
    flex-flow: row wrap;

    button {
      width: 4rem;
      height: 4rem;
      background: #444;
      color: #ffffff;
      border-radius: 1.8rem;
      font-weight: 500;
      font-size: 1.6rem;
      cursor: pointer;

      &.initial {
        color: #222;
        background: #f0f0f0;
      }

      &.operator {
        background: orange;
      }

      &.zero {
        width: 9rem
      }

      &:active {
        background: rgba(255,255,255,.1)
      }

      &:disabled {
        opacity: 0.2
      }

      &.active {
        color: orange;
        background: #ffffff;
      }
    }
  }
`
