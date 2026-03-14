import { MainBanner } from "../components/banners/MainBanner"
import {TopMenu} from "../components/TopMenu"
import { GoTopButton } from "../components/GoTopButton"
import { useState } from "react"
import bubbles from "../assets/images/me/bubbles.jpg"
import jeux from "../assets/images/me/jeux.jpg"
import mountain from "../assets/images/me/mountain.jpg"
import river from "../assets/images/me/river.jpg"
import planch from "../assets/images/me/semi-planch.jpg"

function SlideMenu () {
  const [ind, setInd] = useState(0);
  const img = [bubbles, jeux, mountain, river, planch];

  function rightButtonClick () {
    console.log("right");
    if (ind == img.length - 1) {
      setInd(0);
    } else {
      setInd(ind + 1);
    }
  }

  function leftButtonClick () {
    console.log("left");
    if (ind == 0) {
      setInd(img.length - 1);
    } else {
      setInd(ind - 1);
    }
  }

  return (
    <div className="bg-gray-400/65 shadow-lg">
      <div className="grid grid-cols-4 flex md:h-70 sm:h-50 xl:h-100 lg:h-80">
        <div className="col-span-1 col-start-1 flex center justify-center items-center ">
          <button 
            onClick={leftButtonClick}
            className="lg:w-24 lg:h-24 md:w-18 md:h-18 sm:w-12 sm:h-12 rounded-full bg-blue-600 text-white text-2xl flex items-center text-4xl  
                      justify-center shadow-lg hover:bg-blue-700 hover:text-amber-500 hover:border-amber-500">
              &lt;
            </button>
        </div>
        <div className="col-span-2 col-start-2 flex center justify-center items-center md:h-70 sm:h-50 xl:h-100 lg:h-80">
          <img className="w-[70%] object-contain h-[80%]" src={img[ind]} />
        </div>
        <div className="col-span-1 col-start-4 flex center justify-center items-center">
          <button 
            onClick={rightButtonClick}
            className="lg:w-24 lg:h-24 md:w-18 md:h-18 sm:w-12 sm:h-12 rounded-full bg-blue-600 text-white text-2xl flex items-center text-4xl 
                      justify-center shadow-lg hover:bg-blue-700 hover:text-amber-500 hover:border-amber-500">
              &gt;
          </button>
        </div>
      </div>
    </div>
  )
}

function Home () {
  return (
  <div className="bg-blue-100">
    <GoTopButton/>
    <TopMenu/>
    <MainBanner/>
    <div className="py-8">
      <h2 className="sm:ml-14 text-lg ml-4">
        Cette page est pour moi un bac a sable dans lequel j'apprends différentes choses liées au
        développement web. Il me permet aussi de partager certains de mes projets, en informatique
        ou autre.
      </h2>
      <h2 className="sm:ml-14 text-lg ml-4">
        Il y a quelques pages fun, et d'autres un peu moins fun... <br/>
        J'ai essayé de rendre ça au plus intéressant, car sinon le site n'aura pas beaucoup d'intérêt.
        <br/><br/>
        Bonne découverte ! :)
      </h2>
    </div>
    <div style={{height: '5vh'}} className="hidden lg:block"></div>
    <div style={{height: '5vh'}}></div>
    <SlideMenu/>
    <div style={{height: '20vh'}}></div>
  </div>
  )
}

export default Home