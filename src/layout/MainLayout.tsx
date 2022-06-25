import { PropsWithChildren } from 'react'

function MainLayout({ children }: PropsWithChildren): JSX.Element {
  return (
    <div>
      <div className="h-12 w-full bg-teal-400 fixed p-3">Site header</div>
      <div className="flex pt-12">
        <div className="flex-none overflow-auto h-full fixed w-80 bg-gray-100 p-3">
          Left sidebar
        </div>
        <div className="flex-grow w-full ml-80 p-5 pl-8">{children}</div>
      </div>
    </div>
  )
}

export default MainLayout
