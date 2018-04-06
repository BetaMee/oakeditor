import styled, { injectGlobal }  from 'styled-components'
import PropTypes from 'prop-types'

import GoogleFonts from '../../../assets/fonts/googlefonts.woff2'

injectGlobal`
	@font-face {
	  font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src: url('${GoogleFonts}') format('woff2');
	}
`

const color = ({ mColor }) => mColor && `color: ${mColor}`

const Icon = styled.i`
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: ${({ mSize }) => `${mSize}px`};
  ${color};
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
  user-select: none;
`

Icon.defaultProps = {
  mSize: 22,
}

Icon.propTypes = {
  children: PropTypes.string.isRequired,
  mSize: PropTypes.number.isRequired,
  mColor: PropTypes.string,
}

export default Icon
