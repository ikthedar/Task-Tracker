import { useState } from 'react'

const Tasks = () => {
    const [tasks, setTasks] = useState ([
        {
            id: 1,
            text: "Hello There",
            day: 'Feb 6th, 1 PM',
            reminder: true,
        },
        {
            id: 2,
            text: "I am Ikthedar",
            day: 'Feb 7th, 11 PM',
            reminder: true,
        },
        {
            id: 3,
            text: "I am Ikthedar",
            day: 'Feb 8th, 10 PM',
            reminder: true,
        },
    
    ])

    return (
        <>
          {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}  
        </>
    )
}

export default Tasks
