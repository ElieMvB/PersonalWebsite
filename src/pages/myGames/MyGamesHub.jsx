import { NavLink } from "react-router-dom";
import { TopMenu } from "../../components/TopMenu";
import {Banner} from "../../components/banners/SimpleBanner";
import galaxian from "../../assets/images/myGames/galaxian/galaxian.png";
import jumper from "../../assets/images/myGames/jumper/jumper.png";
import selda from "../../assets/images/myGames/selda/selda.png";
import python from "../../assets/images/Python-logo.png";
import bannerGames from "../../assets/images/banners/gamesBanner.png";


export function MyGamesHub () {

    return (
    <div className="font-semibold bg-gradient-to-r from-blue-200 to-blue-100 min-h-screen ">
        <TopMenu/>
        <Banner banner={bannerGames}/>
        <h1 className="text-center mt-15">Mes jeux :</h1>
        <Description/>
        <div className=" py-1 flex flex-row">
            <img className="w-[40px] h-[40px] mt-6 m-2" src={python} />
            <h1 className="">En python :</h1>
        </div>
        <PythonGames/>
    </div>
    )
}

function Description () {
    return (
    <div className="ml-6 mt-8 text-lg">
        <p>
            Petit catalogue avec les différents jeux que j'ai pu coder. Pour l'instant surtout
            des jeux en python que j'ai codé quand j'étais au lycée.
        </p>
        <p>
            Il y a des explications plus approfondies sur chaque jeux en cliquant dessus.
        </p>
    </div>
    )
}

function PythonGames () {
    return (
        <nav className="sm:ml-15 sm:grid sm:grid-cols-3 sm:ml-1/2 flex flex-col items-center justify-center">
            <NavLink to="/mes-jeux/Galaxian" className="bg-transparent border-transparent no-underline w-[75%] sm:w-[95%]">
                <div className="text-amber-500 hover:text-amber-600 hover:brightness-50 w-[75%] sm:w-[95%]">
                    <img className="w-[75%] sm:w-[95%] rounded-md" src={galaxian}/>
                    <h2 className="font-mono">Galaxian</h2>
                </div>
            </NavLink>
            <NavLink to="/mes-jeux/Jumper" className="bg-transparent border-transparent no-underline w-[75%] sm:w-[95%]">
                <div className="text-amber-500 hover:text-amber-600 hover:brightness-50 w-[75%] sm:w-[95%]">
                    <img className="w-[75%] sm:w-[95%] rounded-md" src={jumper}/>
                    <h2 className="font-mono">Jumper</h2>
                </div>
            </NavLink>
            <NavLink to="/mes-jeux/Selda" className="bg-transparent border-transparent no-underline w-[75%] sm:w-[95%]">
                <div className="text-amber-500 hover:text-amber-600 hover:brightness-50 w-[75%] sm:w-[95%]">
                    <img className="w-[75%] sm:w-[95%] rounded-md" src={selda}/>
                    <h2 className="font-mono">Selda</h2>
                </div>
            </NavLink>
        </nav>
    )
}