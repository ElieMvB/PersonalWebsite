import { TopMenu } from "../components/TopMenu";
import shipGif from "../assets/images/myGames/galaxian/ship.gif"
import ennemyGif from "../assets/images/myGames/galaxian/ennemy.gif"
import gameplay from "../assets/images/myGames/galaxian/galaxian.png"

export function Galaxian () {

    return (
        <div className="bg-black text-white min-h-screen">
            <TopMenu/>
            <div>
                <img className="rotate-90 lg:absolute top-0 2xl:ml-70 lg:ml-40 hidden xl:block" 
                    src={shipGif}/>
                <img className="rotate-90 lg:absolute lg:top-0 xl:right-0 2xl:mr-80 xl:mr-50 hidden xl:block"
                    src={ennemyGif}/>
                <h1 className="text-center md:mt-20 text-amber-300 text-7xl">Galaxian</h1>
            </div>
            <h1 className="ml-6">Le jeux :</h1>
            <h2 className="ml-8">
                Le jeux est un jeux type Space Invader. Je l'ai codé lorsque j'étais au lycée 
                et que j'apprenais à coder à peu près correctement en python.
                La petite spécificité est que l'on ne peut jouer qu'avec une manette de jeux.
                Je l'ai codé spécifiquement pour une manette type xBox, mais ça marche probablement
                avec d'autres marques également.
            </h2>
            <h2 className="ml-8">
                Le but est de détruire le plus de vaisseaux ennemis possible (qui arrivent par le 
                haut de l'écran).
                Pour cela on peut tirer 20 fois en appuyant sur B (sur une mannette xBox).
                Il faut après recharger en appuyant sur A.
            </h2>
            <h1 className="ml-6 mt-12">Petite vidéo de gamplay :</h1>
            <div className=" flex items-center justify-center">
                <img src={gameplay}/>
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