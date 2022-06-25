import { Navigate } from 'react-router-dom'
import Home from './home'
import Inbox from './inbox'
import Today from './today'

const routes = [
  {
    path: '/',
    element: <Home />,
    children: [
      { path: '/', index: true, element: <Navigate to="/today" replace /> },
      { path: '/today', element: <Today /> },
      { path: '/inbox', element: <Inbox /> },
    ],
  },
]

export default routes
