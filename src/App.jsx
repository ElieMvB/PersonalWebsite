import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import { MyGamesHub } from "./pages/myGames/MyGamesHub"
import { Galaxian } from "./pages/myGames/Galaxian"
import { Jumper } from "./pages/myGames/Jumper"
import { Selda } from "./pages/myGames/Selda"
import ScrollToTop from "./components/ScrollToTop"
import Objectifs from "./pages/Objectifs"
import ObjectifAtteint from "./pages/callisthenie/objectifAtteint"

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
        path: "objectifs",
        element: <Outlet/>,
        children: [
          {
            path: "",
            element: <Objectifs/>
          },
          {
            path: ":parameter",
            element: <ObjectifAtteint/>
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
