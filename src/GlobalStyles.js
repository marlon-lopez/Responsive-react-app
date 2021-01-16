import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing:border-box;
        margin:0;
        padding:0;
        font-family :"Source Sans Pro",sans-serif
    }
`
export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 50px;

  @media screen and (max-width: 990px) {
    padding: 0 30px;
  }
`
export const Button = styled.button`
  border-radius: 4px;
  font-size: 1.2rem;
  padding: 8px 16px;
  background: #434fec;
  white-space: nowrap;
  color: white;
  border: none;
  cursor: pointer;
  outline: none;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`

export default GlobalStyles
