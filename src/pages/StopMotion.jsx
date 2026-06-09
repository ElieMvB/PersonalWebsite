import { TopMenu } from "../components/TopMenu";
import pirate from "../assets/images/pirate-head.png"
import stopmotion from "../assets/videos/stop_motion_pirates.mp4"

export function StopMotion () {
  return (
    <div>
        <TopMenu/>
        <div className="bg-blue-300 md:h-20 h-5"></div>
        <div className="bg-linear-to-b from-blue-300 to-blue-800 text-red-700 text-shadow-lg flex flex-col items-center text-2xl">
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
                className="w-[70%]" 
            />
        </div>
        <div style={{height: '20vh'}} className="bg-gradient-to-b from-blue-800 to-blue-950">
        </div>
    </div>
  )
}