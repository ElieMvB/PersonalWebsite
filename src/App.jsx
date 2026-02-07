import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import { MyGamesHub } from "./myGames/MyGamesHub"
import { Galaxian } from "./myGames/Galaxian"
import { Jumper } from "./myGames/Jumper"
import { Selda } from "./myGames/Selda"
import ScrollToTop from "./components/ScrollToTop"

const router = createBrowserRouter([
  {
    path: '/',
    element: <>
              <ScrollToTop/>
              <Outlet/>
             </>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: 'mes-jeux',
        element: <Outlet/>,
        children: [
          {
            path:'',
            element:<MyGamesHub/>
          },
          {
            path: "Galaxian",
            element: <Galaxian/>
          },
          {
            path: "Jumper",
            element: <Jumper/>
          },
          {
            path: "Selda",
            element: <Selda/>
          }
        ]
      },
      {
        path: "contact",
        element: <Contact/>
      }
    ]
  }
])

function ErrorPage() {
  const error = useRouteError()
  console.log(error)
  return <>
    <h1>Une erreur est survenue...</h1>
    <p>
      {error?.error?.toString() ?? error?.toString()}
    </p>
  </>
}

function App () {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
