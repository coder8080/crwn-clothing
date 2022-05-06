import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderComponent = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 400px) {
    font-size: 0.8em;
  }

  @media screen and (max-width: 300px) {
    font-size: 0.6em;
  }

  @media screen and (max-width: 800px) {
    height: 60px;
    marging-bottom: 20px;
    padding: 10px;
  }
`

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;

  @media screen and (max-width: 800px) {
    padding: 0;
    width: 25px;
  }
`

export const OptionsContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`
