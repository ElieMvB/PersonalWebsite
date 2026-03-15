import { MainBanner } from "../components/banners/MainBanner"
import {TopMenu} from "../components/TopMenu"
import { GoTopButton } from "../components/GoTopButton"
import { useState } from "react"
import bubbles from "../assets/images/me/bubbles.jpg"
import jeux from "../assets/images/me/jeux.jpg"
import mountain from "../assets/images/me/mountain.jpg"
import river from "../assets/images/me/river.jpg"
import planch from "../assets/images/me/semi-planch.jpg"
import stopmotion from "../assets/videos/stop_motion_pirates.mp4"
import pirate from "../assets/images/pirate-head.png"

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
    <div>
      <div style={{height: '3vh'}} className="bg-gradient-to-b from-blue-100 to-gray-400/65"></div>
      <div className="bg-gray-400/65">
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
      <div style={{height: '3vh'}} className="bg-gradient-to-b from-gray-400/65 to-blue-100"></div>
    </div>
  )
}

function PirateHomePage () {
  return (
    <div>
      <div style={{height: '20vh'}} className="bg-gradient-to-b from-blue-100 to-blue-400">
      </div>
      <div className="bg-blue-400 text-red-500 flex flex-col items-center text-2xl">
        <h1 className="2xl:py-20 py-6 xl:text-6xl sm:ml-0 ml-4">Stop motion lego pirates !</h1>
        <img
          src={pirate}
          className="absolute 2xl:left-40 xl:left-5 md:left-0 left-5 lg:w-[15%] w-[12%]
                    md:mt-0 sm:mt-33 hidden sm:block"
        />
        <img
          src={pirate}
          className="absolute 2xl:right-40 xl:right-5 md:right-0 right-5 lg:w-[15%] w-[12%]
                    md:mt-0 sm:mt-33 hidden sm:block"
        />
        <p className="py-6 sm:ml-10 ml-6"><strong>
          Petit projet entre frères. <br/>
          C'est une première donc c'est franchement pas parfait, mais pour une 
          première on ne s'est pas si mal débrouillés je trouve.
        </strong></p>
        <video
          src={stopmotion}
          controls="controls" 
          className="xl:w-[70%] w-[50%]" 
        />
      </div>
      <div style={{height: '20vh'}} className="bg-gradient-to-b from-blue-400 to-blue-100">
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
      <h2 className="sm:ml-14 sm:text-2xl text-lg ml-4">
        Cette page est pour moi un bac a sable dans lequel j'apprends différentes choses liées au
        développement web. Il me permet aussi de partager certains de mes projets, en informatique
        ou autre.
      </h2>
      <h2 className="sm:ml-14 sm:text-2xl text-lg ml-4">
        Il y a quelques pages fun, et d'autres un peu moins fun... <br/>
        J'ai essayé de rendre ça au plus intéressant, car sinon le site n'aura pas beaucoup d'intérêt.
        <br/><br/>
        Bonne découverte ! :)
      </h2>
    </div>
    <div style={{height: '5vh'}} className="hidden lg:block"></div>
    <div style={{height: '5vh'}}></div>
    <SlideMenu/>
    <div style={{height: '10vh'}}></div>
    <h2 className="py-10 sm:ml-14 sm:text-2xl text-lg ml-4">
      Commençons avec un <strong className="text-3xl">petit projet</strong> qui me tenais à coeur 
      par <strong className="sm:text-3xl text-2xl">nostalgie</strong>. <br/>
      Quand j'étais au collège j'avais du faire un <strong className="sm:text-3xl text-2xl">stop motion</strong>. 
      Or j'ai lamentablement échoué à rendre ce travail... Mais j'ai repris 
      <strong className="sm:text-3xl text-2xl">ma revenche</strong> il y a quelques mois ! 
    </h2>
    <div style={{height: '10vh'}}></div>
    <PirateHomePage/>
    <div style={{height: '20vh'}}></div>
  </div>
  )
}

export default Home