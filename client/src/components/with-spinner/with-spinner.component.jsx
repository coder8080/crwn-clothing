import Spinner from '../spinner/spinner.component'

const WithSpinner = (WrappedComponent) => (props) =>
  props.isLoading ? <Spinner /> : <WrappedComponent {...props} />

export default WithSpinner
