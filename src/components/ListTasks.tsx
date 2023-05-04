import styles from "./ListTasks.module.css"
import Clipboard from "../assets/clipboard.svg";

export function ListTasks(){
  return(
    <main className={styles.listTasks}>
      <header className={styles.header}>
        <div>
          <strong>Tarefas criadas</strong>
          <span>0</span>
        </div>
        <div>
          <strong>Concluídas</strong>
          <span>0</span>
        </div>
      </header>
      <main className={styles.listContent}>
        <img src={Clipboard} alt="ícone de Clipboard"/>
        <div>
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </main>
    </main>
  )
}