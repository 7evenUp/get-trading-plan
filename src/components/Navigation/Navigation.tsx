import { NavLink, Outlet } from 'react-router-dom'
import logo from './logo.svg'
import { HomeSimple, Settings, User } from 'iconoir-react'
import styles from './Navigation.module.css'

export default function Navigation() {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <img src={logo} alt='Logo' />
        </div>
        <ul className={styles.list}>
          <li>
            <NavLink to='plan' className={styles.link}>
              {({ isActive }) => (
                <>
                  <HomeSimple height={24} width={24} color={isActive ? '#7992ED' : '#EEEEEE'} />
                  <span style={isActive ? {color: '#7992ED'} : undefined}>Plan</span>
                </>
              )}
            </NavLink>
          </li>
        </ul>
        <ul className={`${styles.list} ${styles.supportList}`}>
          <li>
            <NavLink className={styles.link} to='settings'>
              {({ isActive }) => (
                <>
                  <Settings height={24} width={24} color={isActive ? '#7992ED' : '#EEEEEE'} />
                  <span style={isActive ? {color: '#7992ED'} : undefined}>Settings</span>
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.link} to='account'>
              {({ isActive }) => (
                <>
                  <User height={24} width={24} color={isActive ? '#7992ED' : '#EEEEEE'} />
                  <span style={isActive ? {color: '#7992ED'} : undefined}>Account</span>
                </>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}
