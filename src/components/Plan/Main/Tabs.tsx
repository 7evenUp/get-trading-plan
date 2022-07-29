import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import styles from './Tabs.module.css'

export default function Tabs() {
  const [tradingStyle, setTradingStyle] = useState<0 | 1 | 2>(0)
  const [activeBtnId, setActiveBtnId] = useState(0)

  const plan = useSelector((state: RootState) => state.plan.value)
  let dialAmountWithRiskManagment
  let dailyMoneyForGoal
  let neededPNL

  if (plan) {
    dialAmountWithRiskManagment = plan.deposit * plan.riskManagment / 100
    if (tradingStyle === 0) {
      dailyMoneyForGoal = plan.goal / plan.periodDays
    } else if (tradingStyle === 1) {
      dailyMoneyForGoal = plan.goal / 16
    } else {
      dailyMoneyForGoal = plan.goal / 8
    }
    dailyMoneyForGoal = Math.round(dailyMoneyForGoal)
    neededPNL = Math.round(dailyMoneyForGoal * 100 / dialAmountWithRiskManagment)
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.tabs_container}>
        <button
          className={activeBtnId === 0 ? styles.tabs_btn__active : styles.tabs_btn}
          type='button'
          onClick={() => {
            setActiveBtnId(0)
            setTradingStyle(0)
          }}
        >
          Everyday trading
        </button>
        <button
          className={activeBtnId === 1 ? styles.tabs_btn__active : styles.tabs_btn}
          type='button'
          onClick={() => {
            setActiveBtnId(1)
            setTradingStyle(1)
          }}
        >
          3-4 times a week trading
        </button>
        <button
          className={activeBtnId === 2 ? styles.tabs_btn__active : styles.tabs_btn}
          type='button'
          onClick={() => {
            setActiveBtnId(2)
            setTradingStyle(2)
          }}
        >
          Weekend trading
        </button>
      </div>
      <hr />
      <div className={styles.children_container}>
        <div className={styles.child}>
          <span className={styles.child_heading}>Amount of dial according to risk managment</span>
          <span className={styles.child_value}>{dialAmountWithRiskManagment} $</span>
        </div>
        <div className={styles.child}>
          <span className={styles.child_heading}>Money needed to earn every trading day</span>
          <span className={styles.child_value}>{dailyMoneyForGoal} $</span>
        </div>
        <div className={styles.child}>
          <span className={styles.child_heading}>Total PNL needed for one trading day</span>
          <span className={styles.child_value}>{neededPNL} %</span>
        </div>
      </div>
    </div>
  )
}