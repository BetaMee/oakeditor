import styled from 'styled-components'
import PropTypes from 'prop-types'

const hover = ({ isAllowed }) => isAllowed && `
  &:hover {
    color: rgba(255, 255, 255, 1);
    background-color: hsla(0,0%,100%,.1);
  }
`

const IconWrapper = styled.span`
  width: ${({ wWidth }) => `${wWidth}px`};
  height: ${({ wHeight }) => `${wHeight}px`};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: ${({ isAllowed }) => isAllowed ? 'pointer' : 'not-allowed'};
  border-radius: 4px;
  color: #b9b9b9;
  ${hover}
`
IconWrapper.defaultProps = {
  wWidth: 38,
  wHeight: 38,
  isAllowed: true,
}

IconWrapper.propTypes = {
  children: PropTypes.element.isRequired,
  wWidth: PropTypes.number.isRequired,
  wHeight: PropTypes.number.isRequired,
  isAllowed: PropTypes.bool.isRequired,
}

export default IconWrapper
