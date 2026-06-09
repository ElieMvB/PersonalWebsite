import { MainBanner } from "../components/banners/MainBanner"
import {TopMenu} from "../components/TopMenu"
import { GoTopButton } from "../components/GoTopButton"
import { useState, useCallback} from "react"
import bubbles from "../assets/images/me/bubbles.jpg"
import jeux from "../assets/images/me/jeux.jpg"
import mountain from "../assets/images/me/mountain.jpg"
import river from "../assets/images/me/river.jpg"
import planch from "../assets/images/me/semi-planch.jpg"
import stopmotion from "../assets/videos/stop_motion_pirates.mp4"
import pirate from "../assets/images/pirate-head.png"

function SlideMenu () {
  const img = [bubbles, jeux, mountain, river, planch];
  const [ind, setInd] = useState(0);

  const rightButtonClick = useCallback(() => {
    setInd((prev) => (prev + 1) % img.length);
  }, []);

  const leftButtonClick = useCallback(() => {
    setInd((prev) => (prev - 1 + img.length) % img.length);
  }, []);

  return (
    <div>
      <div style={{height: '3vh'}} className="bg-gradient-to-b to-gray-400/40"></div>
      <div className="bg-gray-400/40">
        <div className="grid grid-cols-4 flex md:h-70 sm:h-50 xl:h-100 lg:h-80 h-40">
          <div className="col-span-1 col-start-1 flex center justify-center items-center ">
            <button 
              onClick={leftButtonClick}
              className="lg:w-24 lg:h-24 md:w-18 md:h-18 sm:w-12 sm:h-12 w-10 h-10 rounded-full bg-blue-600 text-white text-2xl flex items-center text-4xl  
                        justify-center shadow-lg hover:bg-blue-700 hover:text-amber-500 hover:border-amber-500 border-white/50">
                &lt;
              </button>
          </div>
          <div className="col-span-2 col-start-2 flex center justify-center items-center md:h-70 sm:h-50 xl:h-100 lg:h-80 h-40">
            <img 
              className="w-[70%] object-contain h-[80%]" 
              src={img[ind]} 
              alt="slider"
            />
          </div>
          <div className="col-span-1 col-start-4 flex center justify-center items-center">
            <button 
              onClick={rightButtonClick}
              className="lg:w-24 lg:h-24 md:w-18 md:h-18 sm:w-12 sm:h-12 w-10 h-10 rounded-full bg-blue-600 text-white text-2xl flex items-center text-4xl 
                        justify-center shadow-lg hover:bg-blue-700 hover:text-amber-500 hover:border-amber-500 border-white/50">
                &gt;
            </button>
          </div>
        </div>
      </div>
      <div style={{height: '3vh'}} className="bg-gradient-to-b from-gray-400/40"></div>
    </div>
  )
}

function Footer () {
  return (
  <footer className="bg-gradient-to-br from-slate-700 to-slate-950 sm:h-30 h-50 text-white">
    <h1 className="ml-6 py-2">
      Répo GituHub : 
      <a className="ml-6 text-2xl hover:text-blue-500" href="https://github.com/ElieMvB/PersonalWebsite" target="blank_">
        ici
      </a>
    </h1>
    <h2 className="ml-6 py-2 flex justify-center">Pas d'autres idées...</h2>
  </footer>)
}

function Home () {
  return (
  <div className="bg-gradient-to-br from-blue-100 to-blue-400">
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
    <div style={{height: '5vh'}} className="hidden sm:block"></div>
    <SlideMenu/>
    <div style={{height: '10vh'}} className="hidden sm:block"></div>
    <Footer/>
  </div>
  )
}

export default Home