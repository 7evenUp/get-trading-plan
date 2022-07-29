import styles from './TextInput.module.css'

type TextInputProps = {
  name: string,
  placeholder: string,
  value: string,
  changeValue: (evt: React.ChangeEvent<HTMLInputElement>) => void
}

export default function TextInput({name, placeholder, value, changeValue}: TextInputProps) {
  return (
    <input
      className={styles.input}
      value={value}
      onChange={(evt) => changeValue(evt)}
      name={name}
      type='text'
      placeholder={placeholder}
    />
  )
}
