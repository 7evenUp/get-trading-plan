import React from 'react'
import logo from './logo.svg'

export default function Navigation() {
  return (
    <nav style={{backgroundColor: '#111111', width: 200, padding: '60px 32px', color: 'white'}}>
      <div>
        <img src={logo} alt='Logo' />
      </div>
      <div>
        <ul>
          <li>Plan</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Settings</li>
          <li>Account</li>
        </ul>
      </div>
    </nav>
  )
}
