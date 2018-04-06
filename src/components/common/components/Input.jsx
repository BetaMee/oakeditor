import styled  from 'styled-components'
import PropTypes from 'prop-types'

const Input = styled.input`
  padding: 4px 12px 4px 12px;
  cursor: pointer;
  color: #b9b9b9;
  background-color: transparent;
  font-size: 21px;
  border: 0;
  border-radius: 2px;
  outline: none;
  &:hover {
    color: #fff;
    background-color: hsla(0,0%,100%,.1);
  }
`

export default Input
