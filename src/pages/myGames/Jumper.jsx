import { TopMenu } from "../../components/TopMenu";
import player from "../../assets/images/myGames/jumper/player.gif"
import video from "../../assets/videos/myGames/jumper.mp4"
import ndc from "../../assets/images/myGames/jumper/ndc2023.jpg"

export function Jumper () {

    return (
            <div className="bg-indigo-950 text-white">
                <TopMenu/>
                <div className="flex flex-row justify-center sm:mt-5">
                    <img className="sm:w-[150px] sm:h-[150px] mr-10 w-[90px] h-[90px] mt-10 sm:mt-0" src={player}/>
                    <h1 className="text-center mt-20 text-amber-300 sm:text-7xl sm:text-5xl text-3xl">Jumper</h1>
                </div>
                <h1 className="ml-6">Le jeux :</h1>
                <h2 className="ml-8 sm:text-2xl text-lg">
                    Ce jeux a été codé en 6h avec un ami lors de la Nuit du Code 2023.
                </h2>
                <h2 className="ml-8 sm:text-2xl text-lg">
                    J'aimerais dire qu'on l'avait gagnée, car parmis les lycées de Perpignan c'est
                    bien le cas. Mais je crois que notre prof n'a jamais fait les démarches
                    pour réellement participer à la "vraie" Nuit du Code internationale...
                </h2>
                <h2 className="ml-8 sm:text-2xl text-lg">
                    Qu'importe, beaucoup de plaisir à développer ce petit jeux sous la pression
                    de la compétition. Ce que j'aime réellement beaucoup c'est qu'on a créé une
                    sorte de petit moteur de jeux et qu'il est possible de rajouter un niveau sans
                    devoir réellement coder en python. Par contre, il faudrait décoder comment
                    on a choisi de stocker les niveaux car je n'en ai pas beaucoup de souvenirs...
                </h2>
                <h1 className="ml-6 mt-12 sm:text-3xl text-lg">Petite vidéo de gamplay :</h1>
                <div className="flex justify-center">
                    <video src={video} width="500" height="500" controls="controls" className="sm:block hidden"/>
                    <video src={video} width="500" height="500" controls="controls" className="sm:hidden w-[75%]"/>
                </div>
                <h1 className="ml-6 py-8 sm:text-3xl text-lg">
                    Photo de la victoire :
                </h1>
                <div className="flex">
                    <img src={ndc} className="xl:ml-100 lg:ml-75 sm:ml-30 w-[90%] sm:w-[50%]"/>
                </div>
                <h1 className="ml-6 py-8 sm:text-3xl text-lg">
                    Télécharcger le jeux au format .pyxapp :
                    <button className="ml-8 text-2xl hover:bg-emerald-600
                                bg-emerald-500 rounded-lg border-emerald-700">
                        <a href="Jumper.pyxapp" download="Jumper.pyxapp" 
                            className="text-white hover:text-neutral-200 no-underline ">
                            Télécharger le jeux !
                        </a>
                    </button>
                </h1>
                <h2 className="ml-8 sm:text-2xl text-lg mb-4">
                    Pour pouvoir jouer avec le .pyxapp il faut l'exécuter avec la commande 
                    suivante dans un environnement python et la librairie pyxel : <br/>
                    pyxel play Jumper.pyxapp
                </h2>
                <h1 className="sm:ml-6 ml-2 mb-4 sm:text-3xl text-lg mt-10">
                    Lien GitHub du projet :
                    <br/>
                    <a href="https://github.com/ElieMvB/Jumper" target="_blank"
                    className="sm:ml-8 text-amber-400 hover:text-amber-600 sm:text-2xl text-base">
                        https://github.com/ElieMvB/Jumper
                    </a>
                </h1>
                <div style={{height: '10vh'}}></div>
    
            </div>
        )
}