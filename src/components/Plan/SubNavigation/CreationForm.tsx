import { motion } from 'framer-motion'
import { CheckCircledOutline } from 'iconoir-react'
import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { create } from '../../../redux/planSlice'
import Button from '../../Button/Button'
import TextInput from '../../TextInput/TextInput'
import styles from './CreationForm.module.css'

const CreationForm = () => {
  const dispatch = useDispatch()
  const [deposit, setDeposit] = useState('')
  const [goal, setGoal] = useState('')
  const selectRef = useRef<HTMLSelectElement>(null)

  return (
    <motion.form
      className={styles.form}
      initial={{ opacity: 0, scale: 0.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
        Creating plan . . .
        <TextInput 
          name='deposit'
          placeholder='Enter your total deposit'
          value={deposit}
          changeValue={(evt) => setDeposit(evt.currentTarget.value)}
        />
        <TextInput 
          name='goal'
          placeholder='Enter your goal'
          value={goal}
          changeValue={(evt) => setGoal(evt.currentTarget.value)}
        />
        <label htmlFor='riskManagment'>
          Choose your risk managment
          <select defaultValue={2.5} name='riskManagment' id='riskManagment' ref={selectRef}>
            <option value={2.5}>Safe</option>
            <option value={5}>Common</option>
            <option value={10}>Risky</option>
          </select>
        </label>

        <Button 
          label='Create a Plan'
          onClick={() => {
            if (selectRef.current?.value !== undefined) {
              dispatch(create({
                title: 'My plan',
                deposit: parseInt(deposit),
                goal: parseInt(goal),
                periodString: 'month',
                periodDays: 30,
                riskManagment: parseFloat(selectRef.current?.value)
              }))
            }
          }}
          iconComponent={<CheckCircledOutline height={24} width={24} color='#FFFFFF' />}
        />
    </motion.form>
  )
}

export default CreationForm
