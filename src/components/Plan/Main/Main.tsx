import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import Tabs from './Tabs'

// Trading plan 
// Formula: 
// deposit, goal, periodDays, riskManagment = 5%
// Deposit * riskManagment / 100 = One trade dial
// Goal / periodDays = Needed money per day to achieve goal
// ===========================================================
//  Deposit = 230$
//  Goal = 100$
//  PeriodDays = 30
//  RiskManagment = 5
//  ----------------------
//  Deposit * RiskManagment / 100 = 11.5 (Maximum one trade dial)
//  Goal / periodDays = 3.33 (Dollar need to earn per day)
//  --- 11.5 * 3.33 / 100 = 0,38 === 38% (Needed PNL)
// 

export default function Main() {
  const plan = useSelector((state: RootState) => state.plan.value)

  return (
    <div style={{padding: '60px 32px', flex: 1}}>
      { plan ? (
        <motion.div
          initial={{ opacity: 0, y: '-100%', scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
        >
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8
          }}>
            <h2>Here is your plan</h2>

            <Tabs />
          </div>
        </motion.div>
      ) : ( 
        <h2>No data available.<br />Why don't you create a new plan?</h2>
      )}
    </div>
  )
}
