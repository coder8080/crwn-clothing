import styled, { css } from 'styled-components'

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`

const basicStyles = css`
  background-color: black;
  color: white;
  overflow: hidden;

  &:hover {
    background-color: white;
    border: 1px solid black;
  }
`

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;

  &:hover {
    color: black;
  }

  ${({ isGoogleSignIn }) => (isGoogleSignIn ? googleSignInStyles : basicStyles)}
`
