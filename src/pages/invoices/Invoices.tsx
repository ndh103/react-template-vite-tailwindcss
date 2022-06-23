import {
  NavLink,
  NavLinkProps,
  Outlet,
  useLocation,
  useSearchParams,
} from 'react-router-dom'
import { getInvoices } from '../../ultils/data'

function QueryNavLink({ to, ...props }: NavLinkProps): JSX.Element {
  const location = useLocation()

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <NavLink to={to + location.search} {...props} />
}

function Invoices() {
  const invoices = getInvoices()
  const [searchParams, setSearchParams] = useSearchParams()

  return (
    <div style={{ display: 'flex' }}>
      <nav
        style={{
          borderRight: 'solid 1px',
          padding: '1rem',
        }}
      >
        <input
          value={searchParams.get('filter') || ''}
          onChange={(event) => {
            const filter = event.target.value
            if (filter) {
              setSearchParams({ filter })
            } else {
              setSearchParams({})
            }
          }}
        />
        {invoices
          .filter((invoice) => {
            const filter = searchParams.get('filter')
            if (!filter) return true
            const name = invoice.name.toLowerCase()
            return name.startsWith(filter.toLowerCase())
          })
          .map((invoice) => (
            <QueryNavLink
              style={({ isActive }) => ({
                display: 'block',
                margin: '1rem 0',
                color: isActive ? 'red' : '',
              })}
              to={`/invoices/${invoice.number}`}
              key={invoice.number}
            >
              {invoice.name}
            </QueryNavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  )
}

export default Invoices
