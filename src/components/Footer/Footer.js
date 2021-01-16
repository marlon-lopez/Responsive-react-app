import React from 'react'
import { Button } from '../../GlobalStyles'
import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterSubText,
  FormInput,
  Form,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItem,
  FooterLinkTitle,
  FooterLink,
} from './styles'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Join our exclusive membership to receive the lastest news and trends
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time</FooterSubText>
        <Form>
          <FormInput name='email' type='email' required />
          <Button>Subscribe</Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinksItem>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to='/sign-up'>How it works</FooterLink>
            <FooterLink to='/sign-up'>Testimonial</FooterLink>
            <FooterLink to='/sign-up'>Careers</FooterLink>
            <FooterLink to='/sign-up'>Investors</FooterLink>
            <FooterLink to='/sign-up'>Terms of service</FooterLink>
          </FooterLinksItem>
          <FooterLinksItem>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to='/sign-up'>How it works</FooterLink>
            <FooterLink to='/sign-up'>Testimonial</FooterLink>
            <FooterLink to='/sign-up'>Careers</FooterLink>
            <FooterLink to='/sign-up'>Investors</FooterLink>
            <FooterLink to='/sign-up'>Terms of service</FooterLink>
          </FooterLinksItem>
          <FooterLinksItem>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to='/sign-up'>How it works</FooterLink>
            <FooterLink to='/sign-up'>Testimonial</FooterLink>
            <FooterLink to='/sign-up'>Careers</FooterLink>
            <FooterLink to='/sign-up'>Investors</FooterLink>
            <FooterLink to='/sign-up'>Terms of service</FooterLink>
          </FooterLinksItem>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      {/* <SocialMedia>
        <SocialMediaWrapper>
          <SocialLogo>
            <SocialIcon>ULTRA</SocialIcon>
            <WebsiteRights>ULTRA &copy; 2020</WebsiteRights>
            <SocialIcons>
              <SocialIconLink>Facebook</SocialIconLink>
            </SocialIcons>
          </SocialLogo>
        </SocialMediaWrapper>
      </SocialMedia> */}
    </FooterContainer>
  )
}

export default Footer
