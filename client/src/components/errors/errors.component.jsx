import './errors.styles.scss'

const Errors = ({ errors }) => (
  <div className="errors">
    {errors ? (
      <ul className="error-list">
        {errors.map((error, i) => (
          <li className="error" key={i}>
            <i className="bx bx-error-alt icon"></i>
            {error}
          </li>
        ))}
      </ul>
    ) : null}
  </div>
)

export default Errors
