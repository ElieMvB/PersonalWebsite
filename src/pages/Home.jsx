import { MainBanner } from "../components/banners/MainBanner"
import {TopMenu} from "../components/TopMenu"
import { GoTopButton } from "../components/GoTopButton"

function Home () {
  return (
  <div className="bg-blue-100">
    <GoTopButton/>
    <TopMenu/>
    <MainBanner/>
    <div className="py-8">
      <h1 className="ml-10">
        Description du site :
      </h1>
      <p className="ml-14 text-lg">
        Cette page est pour moi un bac a sable dans lequel j'apprends différentes choses liées au
        développement web. Il me permet aussi de partager certains de mes projets, en informatique
        ou autre.
      </p>
    </div>
    <div style={{height: '50vh'}}></div>
  </div>
  )
}

export default Home