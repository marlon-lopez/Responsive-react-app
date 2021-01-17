import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const PricingSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #4b59f7;
`

export const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
  }
`
export const PricingHeading = styled.h2`
  color: #fff;
  font-size: 2rem;
  margin-top: 16px;
`
export const PricingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0;
  align-items: center;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 100%;
  }
`
export const PricingCard = styled(Link)`
  background: #242424;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 280px;
  text-decoration: none;
  border-radius: 4px;

  &:nth-child(2) {
    margin: 24px;
  }
  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }
  @media screen and (max-width: 960px) {
    width: 90%;
    &:hover {
      transform: none;
    }
  }
`
export const PricingCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
  align-items: center;
  color: #fff;
`
export const PricingCardIcon = styled.div`
  margin: 24px 0;
`
export const PricingCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 1.5rem;
`
export const PricingCardCost = styled.h4``

export const PricingCardLength = styled.p`
  margin-bottom: 24px;
`
export const PricingCardFeatures = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a9b3c1;
`
export const PricingCardFeature = styled.li`
  margin-bottom: 10px;
`
