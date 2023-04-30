import { PlusCircle } from "phosphor-react"
import styles from "./Search.module.css"

export function Search(){
  return(
    <form className={styles.formContent}>
      <input className={styles.inputField} type="text" placeholder="Adicione uma nova tarefa"/>
      <button className={styles.createButton} type="submit">
        Criar
        <PlusCircle size={20}/>
      </button>
    </form>
  )
}