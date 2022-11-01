import { Header } from './components/Header'
import './global.css'
import { Post } from './Post'
export function App() {

  return (
    <>
    <Header />
    <Post
      author="João Dias"
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti recusandae doloribus nam sit ad,
               aspernatur rem, reiciendis dicta veritatis adipisci eaque aperiam fugiat! Error obcaecati praesentium in 
               sapiente temporibus aliquam."    
    />
   
   </>
  )
}
  
