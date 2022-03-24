import "./with-spinner.styles.scss"

const Spinner =
  (WrappedComponent) =>
  ({ isLoading, ...otherProps }) =>
    isLoading ? <div>spinner</div> : <WrappedComponent {...otherProps} />

export default Spinner
