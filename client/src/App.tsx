import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./components/ui/Root"
import IndexPage from "./components/pages/IndexPage"
import AdminPage from "./components/pages/AdminPage"
import './styles.css'

function App():React.JSX.Element {
  const router = createBrowserRouter([
    {path: '/',
      element: <Root/>,
      // здесь нужно добавить errorElement
      children: [
        {path: '/', element: <IndexPage/>},
        {path: '/admin',
          element: <AdminPage/>
        }
      ]

    }


  ])

  return <RouterProvider router={router} />
}

export default App
