import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const FooterContainer = styled.div`
  background: #101512;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 24px;
  color: #fff;
`
export const FooterSubHeading = styled.p`
  margin-bottom: 24px;
  font-size: 1.2rem;
`

export const FooterSubText = styled.p`
  margin-bottom: 24px;
  font-size: 1rem;
`
export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
  }
`
export const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 3px;
  font-size: 1.1rem;
  outline: none;
  border: none;
  margin-right: 16px;
  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`
export const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`
export const FooterLinksWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`

export const FooterLinksItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 160px;
  margin: 16px;
  box-sizing: border-box;
  color: #fff;
  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`
export const FooterLinkTitle = styled.h2`
  margin-bottom: 16px;
`
export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 8px;
  &:hover {
    color: #0467fb;
    transition: 0.3s ease-out;
  }
`
