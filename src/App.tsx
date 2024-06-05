
import './App.css'
import {useState} from 'react'

type TaskProps = {
  title: string,
  description: string,
  isComplete: boolean,
  id: number
}

const taskArray: TaskProps[] = [
  {
      title:"Dishwashing",
      description: "Wash and dry dishes, pots, pans, and utensils",
      isComplete: false,
      id: 1
  },
  {
      title:"Laundry",
      description: "Wash, dry, fold, and put away clothes and linens",
      isComplete: false, 
      id: 2
  },
  {
      title:"Vacuuming",
      description: "Vacuum carpets, rugs, and floors throughout the house",
      isComplete: false, 
      id: 3
  },
  {
      title:"Dusting",
      description: "Dust furniture, shelves, and other surfaces ",
      isComplete: false, 
      id: 4
  }
]

const Task = ({title, description}: TaskProps) => {
  const[toggle, setToggle] = useState(false)
  const toggleBg = toggle ? 'bg-[#359845]' : 'bg-[#FFFFFF]'
  const taskBoxBg = toggle ? 'bg-[#E2FFE5]' : 'bg-[#FFFFFF]'

  return (
    <div className="font-light">
        <div className='flex justify-center'> 
            <div className={`w-[462px] ${taskBoxBg} border-solid flex flex-row mb-4 border border-color:grey rounded-lg`}> 
                <div className="flex items-center m-3"> 
                        <button onClick={() => setToggle(!toggle)} className={`shrink-0   border rounded-md border-solid w-[25px] h-[25px] mx-4 font-sans ${toggleBg}`}> </button>
                        <div className='flex flex-col items-start'>
                            <p className="text-lg "> {title} </p>
                            <p className="text-md flex justify-left text-slate-400"> {description}</p>
                        </div>
                </div>
            </div> 
        </div>
    </div>
  )
}

const TaskList = () => {
  return (
    <div> 
      <h1 className="font-sans:inter font-light text-5xl tracking-wider justify-left pb-4"> Task</h1>
      {taskArray.map((task) => (
        <Task key={task.id} {...task} />
      ))}
    </div>
  )
}

export default TaskList; 

