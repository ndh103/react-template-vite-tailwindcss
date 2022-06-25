import { useEffect, useState } from 'react'
import { TaskModel } from './api-services/taskModel'
import taskService from './api-services/taskService'

export default function Inbox() {
  const [tasks, setTasks] = useState(new Array<TaskModel>())

  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      const tasksData = await taskService.getAll()

      if (tasksData != null) {
        setTasks(tasksData.data)
      }
    }

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error)
  }, []) // only run once

  return (
    <div>
      {tasks.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </div>
  )
}
