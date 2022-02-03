import styles from '../../styles/Button/Button.module.scss'

const Button = ({ type, children, ...props }) => {
  return (
    <div className={[styles.button, styles[type]].join(' ')} {...props}>
      {children}
    </div>
  )
}

export default Button
