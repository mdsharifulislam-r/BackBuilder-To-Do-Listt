
import { Toaster } from 'react-hot-toast'
import Router from './components/TamplateAndRoute/Router'
import { RouterProvider } from 'react-router-dom'


function App() {


  return (
    <>
   <RouterProvider router={Router}/>
   <Toaster
   position='top-center'
   />
    </>
  )
}

export default App
