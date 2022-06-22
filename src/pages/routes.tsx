import Expenses from './home/expenses'
import Home from './home/home'
import Invoice from './home/invoice'
import Invoices from './home/invoices'

function InvoiceIndex() {
  return (
    <main style={{ padding: '1rem' }}>
      <p>Select an invoice</p>
    </main>
  )
}

function NotFoundPath() {
  return (
    <main style={{ padding: '1rem' }}>
      <p>There's nothing here!</p>
    </main>
  )
}

const routes = [
  { path: '/', element: <Home /> },
  {
    path: '/expenses',
    element: <Expenses />,
  },
  {
    path: '/invoices',
    element: <Invoices />,
    children: [
      {
        index: true,
        element: <InvoiceIndex />,
      },
      {
        path: ':invoiceId',
        element: <Invoice />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPath />,
  },
]

export default routes
