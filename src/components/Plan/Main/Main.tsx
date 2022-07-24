import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'

export default function Main() {
  const plan = useSelector((state: RootState) => state.plan.value)

  return (
    <div style={{padding: '60px 32px', flex: 1}}>
      { plan ? (
        <>
          <h2>Here is your plan</h2>
          <p>Title: {plan.title}</p>
          <p>Deposit: {plan.deposit}$</p>
          <p>Goal: {plan.goal}$</p>
        </>
      ) : ( 
        <h2>No data available.<br />Why don't you create a new plan?</h2>
      )}
    </div>
  )
}
