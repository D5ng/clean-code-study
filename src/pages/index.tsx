import CheckList from "@/components/CheckList"
import FillInForm from "@/components/FillInForm"
import { ListProvider } from "@/context/ListContext"
const TodoList = () => {

  return(
    <ListProvider>
    <div className="w-400 h-500 border-1 relative">
      <CheckList />
      <FillInForm/>
    </div>
    </ListProvider>
    
  )
}

export default TodoList