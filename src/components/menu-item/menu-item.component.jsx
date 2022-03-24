import React from "react"
import { withRouter } from "react-router-dom"

import {
  SubtitleSpan,
  TitleComponent,
  ContentComponent,
  MenuItemContainer,
  BackgroundImageContainer,
} from "./menu-item.styles"

const MenuItem = ({ title, imageUrl, size, history, match }) => (
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

export default withRouter(MenuItem)
