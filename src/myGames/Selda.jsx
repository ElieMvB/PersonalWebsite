import { TopMenu } from "../components/TopMenu";
import video from "../assets/videos/myGames/selda.mp4"

export function Selda () {

    return (
        <div className="bg-gradient-to-br from-slate-400 to-slate-50 text-black">
            <TopMenu/>
            <div>
                <h1 className="text-center mt-20 text-rose-600 text-7xl">Selda</h1>
            </div>
            <h1 className="ml-6">Le jeux :</h1>
            <h2 className="ml-8">
                Le jeux a été fait avec l'aide de Manoé (mon frère). Il a fait les textures et
                toutes les musiques originales (celle qui sont des reprises de titres existants
                ont étés codées par moi).
                Sans surprise, le jeux s'inspire fortement de Zelda, quoi qu'il soit plus simple
                que le premier Zelda sortit...
            </h2>
            <h2 className="ml-8">
                L'objectif est simplement de libérer un chateau envahit par des monstres.
            </h2>
            <h1 className="ml-6 mt-12">Petite vidéo de gamplay :</h1>
            <div className="flex justify-center">
                <video src={video} width="500" height="500" controls="controls" 
                    className="sm:block hidden"/>
                <video src={video} width="500" height="500" controls="controls" 
                    className="sm:hidden w-[75%]"/>
            </div>
            <h1 className="ml-6 mb-0">
                Lien GitHub du projet :
                <a href="https://github.com/ElieMvB/Galaxian" target="_blank"
                className="ml-8 text-amber-400 hover:text-amber-600 text-2xl">
                    https://github.com/ElieMvB/Galaxian
                </a>
            </h1>
            <div style={{height: '10vh'}}></div>

        </div>
    )
}