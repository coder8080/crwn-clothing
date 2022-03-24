import { withRouter } from "react-router-dom"

import "./collection-preview.styles.scss"
import CollectionItem from "../collection-item/collection-item.component"

const CollectionPreview = ({ title, items, match, history }) => {
  return (
    <div className="collection-preview">
      <h1
        className="title"
        onClick={() =>
          history.push(
            `${
              match.url.slice(-1) === "/" ? match.url.slice(0, -1) : match.url
            }/${title.toLowerCase()}`
          )
        }
      >
        {title.toUpperCase()}
      </h1>
      <div className="preview">
        {items.slice(0, 4).map((item) => (
          <CollectionItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

export default withRouter(CollectionPreview)
