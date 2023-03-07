import React from 'react'
import styled from 'styled-components'
import Footer from '../Footer'
import { isMobile } from 'react-device-detect'


const Page: React.FC = ({ children }) => (
  <StyledPage>
    <StyledMain>{children}</StyledMain>
    {/*<Footer />*/}
  </StyledPage>
)

const StyledPage = styled.div`
    min-width: ${isMobile ? '100%' : '100%'};
    *, *:before, *:after {
        -moz-box-sizing: border-box; 
        -webkit-box-sizing: border-box; 
        box-sizing: border-box;
    }
    display: flex;
    justify-content: center;
`

const StyledMain = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - ${(props) => props.theme.topBarSize}px);

  @media (max-width: 768px) {
    min-height: 100%;
  }
`

export default Page
