import React from 'react'
import styles from './Button.module.css'

type ButtonProps = {
  label: string
  iconComponent: React.ReactNode
  onClick: () => void
}

const Button = ({label, iconComponent, onClick}: ButtonProps) => {
  return (
    <button type='button' onClick={onClick} className={styles.button}>
      {label}
      {iconComponent}
    </button>
  )
}

export default Button