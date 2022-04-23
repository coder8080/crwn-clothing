import { useRouteMatch, useHistory } from 'react-router-dom'

import {
  SubtitleSpan,
  TitleComponent,
  ContentComponent,
  MenuItemContainer,
  BackgroundImageContainer,
} from './menu-item.styles'

const MenuItem = ({ title, imageUrl, size }) => {
  const history = useHistory()
  const match = useRouteMatch()
  return (
    <MenuItemContainer
      size={size}
      onClick={() => history.push(`${match.url}shop/${title.toLowerCase()}`)}
    >
      <BackgroundImageContainer imageUrl={imageUrl} />
      <ContentComponent>
        <TitleComponent>{title.toUpperCase()}</TitleComponent>
        <SubtitleSpan>SHOP NOW</SubtitleSpan>
      </ContentComponent>
    </MenuItemContainer>
  )
}

export default MenuItem
