import { Component } from 'react'

class ErrorBoundary extends Component {
  state = { hasErrored: false }
  static getDerivedStateFromError(error) {
    return { hasErrored: true }
  }

  componentDidCatch(error, info) {
    console.log(error)
  }

  render() {
    if (this.state.hasErrored) {
      return <div>Something went wrong. Try to reload the page</div>
    }
    return this.props.children
  }
}

export default ErrorBoundary
