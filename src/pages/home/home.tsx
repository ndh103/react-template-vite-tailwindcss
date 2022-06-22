import { Link, Outlet } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1 className="text-green-500 text-xl"> Bookkeeper</h1>

      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <Link to="/invoices">Invoices</Link> |{' '}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default Home
