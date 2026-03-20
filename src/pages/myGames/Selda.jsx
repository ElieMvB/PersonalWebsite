import { TopMenu } from "../../components/TopMenu";
import video from "../../assets/videos/myGames/selda.mp4"

export function Selda () {

    return (
        <div className="bg-gradient-to-br from-slate-400 to-slate-50 text-black">
            <TopMenu/>
            <div>
                <h1 className="text-center mt-20 text-rose-600 text-7xl">Selda</h1>
            </div>
            <h1 className="sm:ml-6 ml-2 sm:text-3xl text-xl">Le jeux :</h1>
            <h2 className="sm:ml-8 ml-3 sm:text-2xl text-lg">
                Le jeux a été fait avec l'aide de Manoé (mon frère). Il a fait les textures et
                toutes les musiques originales (celle qui sont des reprises de titres existants
                ont étés codées par moi).
                Sans surprise, le jeux s'inspire fortement de Zelda, quoi qu'il soit plus simple
                que le premier Zelda sortit...
            </h2>
            <h2 className="sm:ml-8 ml-3 sm:text-2xl text-lg">
                L'objectif est simplement de libérer un chateau envahit par des monstres.
            </h2>
            <h1 className="sm:ml-6 ml-2 mt-12 sm:text-3xl text-xl">Petite vidéo de gamplay :</h1>
            <div className="flex justify-center">
                <video src={video} width="500" height="500" controls="controls" 
                    className="sm:block hidden"/>
                <video src={video} width="500" height="500" controls="controls" 
                    className="sm:hidden w-[75%]"/>
            </div>
            <h1 className="sm:ml-6 ml-2 py-8 sm:text-3xl text-xl">
                Télécharcger le jeux au format .pyxapp :
                <button className="ml-8 text-2xl hover:bg-emerald-600
                            bg-emerald-500 rounded-lg border-emerald-700">
                    <a href="Selda.pyxapp" download="Selda.pyxapp" 
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
            <h1 className="sm:ml-6 ml-2 mb-0 sm:text-3xl text-xl mt-10">
                Lien GitHub du projet :
                <br/>
                <a href="https://github.com/ElieMvB/Galaxian" target="_blank"
                className="sm:ml-8 text-amber-600 hover:text-amber-800 sm:text-2xl text-base">
                    https://github.com/ElieMvB/Galaxian
                </a>
            </h1>
            <div style={{height: '10vh'}}></div>

        </div>
    )
}