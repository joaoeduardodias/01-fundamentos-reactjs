import styles from './App.module.css'
import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'
import './global.css'

export function App() {

  return (
    <div>
    <Header />
      <div className={styles.Wrapper}>
        <Sidebar />
       
        <main>
        <Post
         author="João Dias"
         content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti recusandae doloribus nam sit."    
        />
        <Post
         author="João Dias"
         content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti recusandae doloribus nam sit."    
        />
   
        </main>
      </div>
   
   </div>
  )
}
  
