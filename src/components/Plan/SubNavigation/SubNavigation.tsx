import { AddHexagon } from 'iconoir-react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { create } from '../../../redux/planSlice'
import Button from '../../Button/Button'
import styles from './SubNavigation.module.css'

export default function SubNavigation() {
  const dispatch = useDispatch()

  return (
    <div className={styles.container}>
      <h2>Plan</h2>
      <hr />
      <Button
        label='Create new plan'
        onClick={() => {
          dispatch(create({
            title: 'MyFirstGoal',
            deposit: 200,
            goal: 100
          }))
        }}
        iconComponent={<AddHexagon height={24} width={24} color='#FFFFFF' />}
      />
      <Outlet />
    </div>
  )
}
