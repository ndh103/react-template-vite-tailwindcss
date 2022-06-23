import homeRoutes from './home/routes'
import expensesRoutes from './expenses/routes'
import invoicesRoutes from './invoices/routes'

function NotFoundPath() {
  return (
    <main style={{ padding: '1rem' }}>
      <p>There's nothing here!</p>
    </main>
  )
}

const routes = [
  ...homeRoutes,
  ...expensesRoutes,
  ...invoicesRoutes,
  {
    path: '*',
    element: <NotFoundPath />,
  },
]

export default routes
