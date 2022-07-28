import { AddHexagon } from 'iconoir-react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Button from '../../Button/Button'
import styles from './SubNavigation.module.css'

import CreationForm from './CreationForm'

export default function SubNavigation() {
  const dispatch = useDispatch()
  const [isCreating, setIsCreating] = useState(false)

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Plan</h2>
      <hr style={{height: 2, width: 300, backgroundColor: '#CBCBCB', border: 'none', borderRadius: 50}} />
      { isCreating ? (
        <CreationForm />
      ) : (
        <Button
          label='Create new plan'
          onClick={() => {
            setIsCreating(true)
          }}
          iconComponent={<AddHexagon height={24} width={24} color='#FFFFFF' />}
        />
      )}
    </div>
  )
}
