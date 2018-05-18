import styled from 'styled-components'

const UserSubmit = styled.button`
  width: 100%;
  height: 34px;
  color: #ffffff;
  font-size: 14px;
  background-color: #28a745;
  background-image: linear-gradient(-180deg, #34d058 0%, #28a745 90%);
  border-radius: 3px;
  box-sizing: border-box;
  border: 0;
  outline: none;
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    background-color: #269f42;
    background-image: linear-gradient(-180deg, #2fcb53 0%, #269f42 90%)
  }
`

export default UserSubmit
