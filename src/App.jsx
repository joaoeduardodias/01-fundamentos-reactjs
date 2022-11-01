import styles from './App.module.css'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import './global.css'
import { Post } from './Post'
export function App() {

  return (
    <div>
    <Header />
      <div className={styles.Wrapper}>
        <Sidebar />
       
        <main>
        <Post
      author="João Dias"
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti recusandae doloribus nam sit ad,
               aspernatur rem, reiciendis dicta veritatis adipisci eaque aperiam fugiat! Error obcaecati praesentium in 
               sapiente temporibus aliquam."    
    />
    <Post
      author="João Dias"
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti recusandae doloribus nam sit ad,
               aspernatur rem, reiciendis dicta veritatis adipisci eaque aperiam fugiat! Error obcaecati praesentium in 
               sapiente temporibus aliquam."    
    />
        </main>
      </div>
   
   </div>
  )
}
  
