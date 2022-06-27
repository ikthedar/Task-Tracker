import { useState } from 'react' /* Instead of using the "state" outside of the component, it is always better to use Hooks like useState */

/* We will cut this following state and paste it to main App component to use it as Global state 
We will learn about Context API or Redux later to handle these situations */


const Tasks = () => {
    const [tasks, setTasks] = useState ([       /* Here we named the state "tasks", and added the array of objects after useState */
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
