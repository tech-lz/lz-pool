import React from 'react'
import styled from 'styled-components'

import Spacer from '../Spacer'

const ModalActions: React.FC = ({ children }) => {
  const l = React.Children.toArray(children).length
  return (
    <StyledModalActions>
      {React.Children.map(children, (child, i) => (
        <span>
          <StyledModalAction>
            {child}
          </StyledModalAction>
        </span>
      ))}
    </StyledModalActions>
  )
}

const StyledModalActions = styled.div`
  align-items: center;
  background-color: ${props => props.theme.color.grey[100]}00;
  display: flex;
  margin: 0;
  padding: 0px 20px;
  justify-content: space-around;
`

const StyledModalAction = styled.div`
  flex: 1;
`

export default ModalActions
