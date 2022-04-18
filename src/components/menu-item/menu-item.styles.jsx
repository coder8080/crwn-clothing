import styled, { css } from 'styled-components'

const largeMenuItemContainerStyles = css`
  height: 380px;
`

export const SubtitleSpan = styled.span`
  font-weight: lighter;
  font-size: 16px;
`

export const TitleComponent = styled.h1`
  font-weight: bold;
  margin: 0 6px 0;
  font-size: 22px;
  color: #4a4a4a;
`

export const ContentComponent = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
`

export const MenuItemContainer = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  ${({ size }) => (size === 'large' ? largeMenuItemContainerStyles : null)}

  &:hover {
    cursor: pointer;

    & :first-child {
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      transform: scale(1.1);
    }

    & :last-child {
      opacity: 0.9;
    }
  }
`

export const BackgroundImageContainer = styled.div`
  background-image: url('${({ imageUrl }) => imageUrl}');
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
`
