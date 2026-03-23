import { TopMenu } from "../components/TopMenu";
import ragda from "../assets/videos/stop_motion_pirates.mp4";

export default function Rock () {
    return (
        <div className="bg-slate-700 h-full">
            <TopMenu/>
            <div className="h-20"/>
            <div className="flex justify-center text-shadow-2xs text-shadow-slate-500">
                <div className="bg-slate-900 w-[70%]">
                    <div className="text-red-600 text-center text-3xl">
                        <h1>Let me dance</h1>
                        <h2>like a bug on a cinema screen !</h2>
                    </div>
                    <div className="text-green-700 ml-10 text-xl">
                        <h1>
                            Ragda !
                        </h1>
                        <p className="ml-5">
                            Spectacle étudiant après seulement 4 mois et demi de dance.
                            <br/>Un vrai banger, on s'est bien amusés !
                        </p>
                        <div className="flex justify-center">
                            <video
                                src={ragda}
                                controls="controls" 
                                className="w-[70%]" 
                            />
                        </div>
                    </div>
                    <div className="text-red-700 text-xl ml-10">
                        <h1 className="text-white">Chorées des 24h de <strong className="text-red-700">l'INSA</strong> !</h1>
                        <p className="text-slate-400 text-center">Comming soon</p>
                    </div>
                    <div className="text-amber-400 text-xl ml-10">
                        <h1>If's got talent</h1>
                        <p>
                            Petite chorée réalisée avec 3 amis danceurs. <br/>
                            Contrairement aux deux autres chorées, on n'avait pas de 
                            chorégraphe : on s'est donc improvisés chorégraphes tous ensembles !
                        </p>
                        <p className="text-slate-400 text-center">Comming soon</p>
                    </div>
                </div>
            </div>
        </div>
    )
};