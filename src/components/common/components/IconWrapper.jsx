import styled from 'styled-components'
import PropTypes from 'prop-types'

const hover = ({ isAllowed, hoverColor }) => isAllowed && `
  &:hover {
    color: ${hoverColor};
    background-color: hsla(0,0%,100%,.1);
  }
`

const IconWrapper = styled.span`
  width: ${({ wSize }) => `${wSize}px`};
  height: ${({ wSize }) => `${wSize}px`};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: ${({ isAllowed }) => isAllowed ? 'pointer' : 'not-allowed'};
  border-radius: 4px;
  color: ${({ wColor }) => wColor};
  ${hover}
`
IconWrapper.defaultProps = {
  wSize: 38,
  isAllowed: true,
  wColor: '#b9b9b9',
  hoverColor: 'rgba(255, 255, 255, 1)',
}

IconWrapper.propTypes = {
  children: PropTypes.element.isRequired,
  wSize: PropTypes.number.isRequired,
  isAllowed: PropTypes.bool.isRequired,
  wColor: PropTypes.string.isRequired,
  hoverColor: PropTypes.string.isRequired,
}

export default IconWrapper
