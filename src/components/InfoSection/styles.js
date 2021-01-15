import styled from 'styled-components'

export const InfoSec = styled.div`
  color: #fff;
  padding: 100px 0;
  background: #101522;
`
export const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`
export const InfoColumn = styled.div`
  margin: 0 15px 15px 15px;
  flex: 1;
  flex-basis: 50%;
  max-width: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`
