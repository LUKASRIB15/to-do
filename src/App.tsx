import { Header } from './components/Header'

import styles from "./App.module.css"
import './global.css'
import { Search } from './components/Search'

export function App() {
  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <Search/>
      </div>
    </>
  )
}
