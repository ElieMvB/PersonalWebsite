import { TopMenu } from "../components/TopMenu";
import player from "../assets/images/myGames/jumper/player.gif"
import video from "../assets/videos/myGames/jumper.mp4"

export function Jumper () {

    return (
            <div className="bg-indigo-950 text-white">
                <TopMenu/>
                <div className="flex flex-row justify-center">
                    <img className="w-[150px] h-[150px] mr-10" src={player}/>
                    <h1 className="text-center mt-20 text-amber-300 text-7xl">Jumper</h1>
                </div>
                <h1 className="ml-6">Le jeux :</h1>
                <h2 className="ml-8">
                    Ce jeux a été codé en 6h avec un ami lors de la Nuit du Code 2023.
                </h2>
                <h2 className="ml-8">
                    J'aimerais dire qu'on l'avait gagnée, car parmis les lycées de Perpignan c'est
                    bien le cas. Mais je crois que notre prof n'a jamais fait les démarches
                    pour réellement participer à la "vraie" Nuit du Code internationale...
                </h2>
                <h2 className="ml-8">
                    Qu'importe, beaucoup de plaisir à développer ce petit jeux sous la pression
                    de la compétition. Ce que j'aime réellement beaucoup c'est qu'on a créé une
                    sorte de petit moteur de jeux et qu'il est possible de rajouter un niveau sans
                    devoir réellement coder en python. Par contre, il faudrait décoder comment
                    on a choisi de stocker les niveaux car je n'en ai pas beaucoup de souvenirs...
                </h2>
                <h1 className="ml-6 mt-12">Petite vidéo de gamplay :</h1>
                <div className="flex justify-center">
                    <video src={video} width="500" height="500" controls="controls" className="sm:block hidden"/>
                    <video src={video} width="500" height="500" controls="controls" className="sm:hidden w-[75%]"/>
                </div>
                <h1 className="ml-6 mb-0">
                    Photo de la victoire :
                </h1>
                <h1 className="ml-6 mb-0">
                    Lien GitHub du projet :
                    <a href="https://github.com/ElieMvB/Jumper" target="_blank"
                    className="ml-8 text-amber-400 hover:text-amber-600 text-2xl">
                        https://github.com/ElieMvB/Jumper
                    </a>
                </h1>
                <div style={{height: '10vh'}}></div>
    
            </div>
        )
}