import { AddHexagon } from 'iconoir-react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { create } from '../../../redux/planSlice'
import Button from '../../Button/Button'
import styles from './SubNavigation.module.css'

export default function SubNavigation() {
  const dispatch = useDispatch()
  const [isCreating, setIsCreating] = useState(false)

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Plan</h2>
      <hr style={{height: 1, width: 300}} />
      { isCreating ? (
        <div>Creating plan...</div>
      ) : (
        <Button
          label='Create new plan'
          onClick={() => {
            // dispatch(create({
            //   title: 'MyFirstGoal',
            //   deposit: 200,
            //   goal: 100
            // }))

            setIsCreating(true)
          }}
          iconComponent={<AddHexagon height={24} width={24} color='#FFFFFF' />}
        />
      )}
      
      <Outlet />
    </div>
  )
}
