import Invoice from './Invoice'
import Invoices from './Invoices'

function InvoiceIndex() {
  return (
    <main style={{ padding: '1rem' }}>
      <p>Select an invoice</p>
    </main>
  )
}

const routes = [
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
]

export default routes
