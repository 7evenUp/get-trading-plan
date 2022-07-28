import { AddHexagon, Cancel } from 'iconoir-react'
import { useState } from 'react'
import Button from '../../Button/Button'
import styles from './SubNavigation.module.css'

import CreationForm from './CreationForm'

export default function SubNavigation() {
  const [isCreating, setIsCreating] = useState(false)

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Plan</h2>
      <hr style={{height: 2, width: 300, backgroundColor: '#CBCBCB', border: 'none', borderRadius: 50}} />
      { isCreating ? (
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
