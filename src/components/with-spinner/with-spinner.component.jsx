import "./with-spinner.styles.scss"

const Spinner = () => (
  <div className="spinner-container">
    <div className="spinner"></div>
  </div>
)

const withSpinner =
  (WrappedComponent) =>
  ({ isLoading, ...otherProps }) =>
    isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />

export default withSpinner
