import React from 'react'
import styles from './Layout.module.css'
function Layout({ children }: any) {
  return <div className={styles.layout}>{children}</div>
}

export default Layout
