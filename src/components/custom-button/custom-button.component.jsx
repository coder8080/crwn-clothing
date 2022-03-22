import './custom-button.styles.scss'

const CustomButton = ({ children, isWhite, ...props }) => (
  <button className={`${isWhite ? 'white' : null} custom-button`} {...props}>
    {children}
  </button>
)

export default CustomButton
