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
  // margin: 0 15px 15px 15px;
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
export const TopLine = styled.div`
  color: #a9b3c1;
  font-size: 18px;
  letter-spacing: 1.4px;
`

export const Heading = styled.h1`
  margin-bottom: 24px;
  color: #f7f8fa;
`
export const Subtitle = styled.p`
  max-width: 400px;
  font-size: 1.2rem;
  margin-bottom: 35px;
  color: #a9b3c1;
`

export const ImgWrapper = styled.div`
  display: flex;
  max-width: 550px;
  justify-content: flex-end;
`
export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  max-height: 500px;
`
