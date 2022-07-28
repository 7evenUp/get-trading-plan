import { motion } from 'framer-motion'
import { CheckCircledOutline } from 'iconoir-react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { create } from '../../../redux/planSlice'
import Button from '../../Button/Button'
import styles from './CreationForm.module.css'

const CreationForm = () => {
  const dispatch = useDispatch()
  const [deposit, setDeposit] = useState('')
  const [goal, setGoal] = useState('')

  return (
    <motion.form
      className={styles.form}
      initial={{ opacity: 0, scale: 0.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
        Creating plan . . .
        <input
          className={styles.input}
          value={deposit}
          onChange={(evt) => {setDeposit(evt.currentTarget.value)}}
          name='deposit'
          type='text'
          placeholder='Enter your total deposit'
        />
        <input
          className={styles.input}
          value={goal}
          onChange={(evt) => {setGoal(evt.currentTarget.value)}}
          name='goal'
          type='text'
          placeholder='Enter your goal' 
        />
        <Button 
          label='Create a Plan'
          onClick={() => {
            dispatch(create({
              title: 'My plan',
              deposit: parseInt(deposit),
              goal: parseInt(goal)
            }))
          }}
          iconComponent={<CheckCircledOutline height={24} width={24} color='#FFFFFF' />}
        />
    </motion.form>
  )
}

export default CreationForm
