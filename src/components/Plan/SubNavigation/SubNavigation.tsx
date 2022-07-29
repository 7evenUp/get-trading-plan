import { AddHexagon, ArrowDownCircled, ArrowUpCircled, Cancel, DeleteCircledOutline } from 'iconoir-react'
import { useState } from 'react'
import Button from '../../Button/Button'
import styles from './SubNavigation.module.css'

import CreationForm from './CreationForm'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { deletePlan } from '../../../redux/planSlice'
import { motion, AnimatePresence } from 'framer-motion'

export default function SubNavigation() {
  const [isCreating, setIsCreating] = useState(false)
  const [planDetailsOpened, setPlanDetailsOpened] = useState(false)
  const plan = useSelector((state: RootState) => state.plan.value)
  const dispatch = useDispatch()

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Plan</h2>
      <hr style={{height: 2, width: 300, backgroundColor: '#CBCBCB', border: 'none', borderRadius: 50}} />
      { plan !== null ? (
        <div className={styles.plan_item}>
          <div className={styles.plan_item_header}>
            <h3>{plan.title}</h3>
            <button
              className={styles.plan_item_delete}
              type='button'
              onClick={() => setPlanDetailsOpened(!planDetailsOpened)}
            >
              {planDetailsOpened ?
                <ArrowUpCircled height={24} width={24} /> :
                <ArrowDownCircled height={24} width={24} />
              }
            </button>
          </div>
          <AnimatePresence>
            {planDetailsOpened && (
              <motion.div
                initial={{y: '-100%', opacity: 0, scale: 0}}
                animate={{y: 0, opacity: 1, scale: 1}}
                exit={{y: '-50%', opacity: 0, scale: 0}}
                
                className={styles.plan_item_content}
              >
                <div className={styles.stats_item}>
                  <span>Deposit</span>
                  <span className={styles.stats_item_value}>{plan.deposit} $</span>
                </div>
                <div className={styles.stats_item}>
                  <span>Goal</span>
                  <span className={styles.stats_item_value}>{plan.goal} $</span>
                </div>
                <div className={styles.stats_item}>
                  <span>Goal duration</span>
                  <span className={styles.stats_item_value}>{plan.periodDays} days</span>
                </div>
                <div className={styles.stats_item}>
                  <span>Risk Managment</span>
                  <span className={styles.stats_item_value}>{plan.riskManagment} %</span>
                </div>
                <div>
                  <Button 
                    label='Delete plan'
                    onClick={() => dispatch(deletePlan())}
                    iconComponent={<DeleteCircledOutline height={24} width={24} color='#FFFFFF' />}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : isCreating ? (
        <>
          <Button 
            label='Cancel creation'
            onClick={() => setIsCreating(false)}
            iconComponent={<Cancel height={24} width={24} color='#FFFFFF' />}
          />
          <CreationForm />
        </>
      ) : (
        <Button
          label='Create new plan'
          onClick={() => setIsCreating(true)}
          iconComponent={<AddHexagon height={24} width={24} color='#FFFFFF' />}
        />
      )}
    </div>
  )
}
