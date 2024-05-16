import classes from "./ErrorText.module.css"

const ErrorText = ({errorMessage}) => {
  return <p className={classes.error}>{errorMessage}</p>
}

export default ErrorText
