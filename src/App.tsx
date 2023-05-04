import { Header } from './components/Header'

import styles from "./App.module.css"
import './global.css'
import { Search } from './components/Search'
import { ListTasks } from './components/ListTasks'

export function App() {
  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <Search/>
        <ListTasks/>
      </div>
    </>
  )
}
