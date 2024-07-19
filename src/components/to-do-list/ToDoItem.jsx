import { useState } from 'react'
import CheckBox from './CheckBox'
import ToDoText from './ToDoText'

function ToDoItem({ toDo }) {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckButton = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div className="flex justify-between py-5 ">
      <ToDoText
        isChecked={isChecked}
        handleCheckButton={handleCheckButton}
        toDo={toDo}
      />
      <CheckBox isChecked={isChecked} onChange={setIsChecked} />
    </div>
  )
}

export default ToDoItem
