import { MainBanner } from "../components/banners/MainBanner"
import {TopMenu} from "../components/TopMenu"
import { GoTopButton } from "../components/GoTopButton"
import { useState } from "react"
import le36 from "../assets/images/36.jpg"
import front from "../assets/images/front.jpg"

function SlideMenu () {
  const [ind, setInd] = useState(0);
  const img = [le36, front];

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
    <div className="bg-slate-400 shadow-lg">
      <div className="grid grid-cols-4 flex">
        <div className="col-span-1 col-start-1 flex center justify-center">
          <button 
            onClick={leftButtonClick}
            className="h-[100%]">
            Tourne à gauche
            </button>
        </div>
        <div className="col-span-2 col-start-2 flex center justify-center items-center">
          <img className="w-[80%] object-contain h-[80%]" src={img[ind]} />
        </div>
        <div className="col-span-1 col-start-4 flex center justify-center">
          <button onClick={rightButtonClick}>Tourne à droite</button>
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
    </div>
    <div style={{height: '10vh'}}></div>
    <SlideMenu/>
    <div style={{height: '20vh'}}></div>
  </div>
  )
}

export default Home