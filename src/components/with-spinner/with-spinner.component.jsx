import './with-spinner.styles.scss'

const Spinner = () => (
  <div className="spinner-container">
    <div className="spinner"></div>
  </div>
)

const WithSpinner = (WrappedComponent) => (props) =>
  props.isLoading ? <Spinner /> : <WrappedComponent {...props} />

export default WithSpinner
