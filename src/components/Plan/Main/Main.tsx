import { motion } from 'framer-motion'
import { DeleteCircledOutline } from 'iconoir-react'
import { useDispatch, useSelector } from 'react-redux'
import { deletePlan } from '../../../redux/planSlice'
import { RootState } from '../../../redux/store'
import Button from '../../Button/Button'

export default function Main() {
  const dispatch = useDispatch()
  const plan = useSelector((state: RootState) => state.plan.value)

  return (
    <div style={{padding: '60px 32px', flex: 1}}>
      { plan ? (
        <motion.div
          initial={{ opacity: 0, y: -300 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Here is your plan</h2>
          <p>Title: {plan.title}</p>
          <p>Deposit: {plan.deposit}$</p>
          <p>Goal: {plan.goal}$</p>

          <Button
            label='Delete plan'
            onClick={() => dispatch(deletePlan())}
            iconComponent={<DeleteCircledOutline height={24} width={24} color='#FFFFFF' />}
          />
        </motion.div>
      ) : ( 
        <h2>No data available.<br />Why don't you create a new plan?</h2>
      )}
    </div>
  )
}
