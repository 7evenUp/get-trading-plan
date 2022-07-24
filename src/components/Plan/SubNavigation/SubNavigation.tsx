import React from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { create } from '../../../redux/planSlice'

export default function SubNavigation() {
  const dispatch = useDispatch()

  return (
    <div style={{backgroundColor: '#EEEEEE', padding: '60px 32px', width: 450}}>
      <h2>Plan</h2>
      <hr />
      <button type='button' onClick={() => {
        dispatch(create({
          title: 'MyFirstGoal',
          deposit: 200,
          goal: 100
        }))
      }}>
        Create new plan
      </button>
      <Outlet />
    </div>
  )
}
