import { TopMenu } from "../components/TopMenu";
import ragda from "../assets/videos/rock/ragda.mp4";

export default function Rock () {
    return (
        <div className="bg-slate-700 h-full">
            <TopMenu/>
            <div className="h-20 hidden sm:block"/>
            <div className="flex justify-center text-shadow-2xs text-shadow-slate-500">
                <div className="bg-slate-900 sm:w-[70%] w-[100%]">
                    <div className="text-red-600 text-center text-3xl">
                        <h1>Let me dance</h1>
                        <h2>like a bug on a cinema screen !</h2>
                    </div>
                    <div className="text-green-600 text-xl">
                        <h1 className="md:ml-10 ml-5 py-6">
                            Ragda !
                        </h1>
                        <p className="md:ml-15 ml-7">
                            Spectacle étudiant après seulement 4 mois et demi de dance.
                            <br/>Un vrai banger, on s'est bien amusés !<br/><br/>
                        </p>
                        <div className="flex justify-center">
                            <video
                                src={ragda}
                                controls="controls" 
                                className="w-[70%]" 
                            />
                        </div>
                    </div>
                    <div className="text-red-700 text-xl">
                        <h1 className="text-white md:ml-10 ml-5 py-6">Chorées des 24h de <strong className="text-red-700">l'INSA</strong> !</h1>
                        <p className="text-slate-400 text-center">Comming soon</p>
                    </div>
                    <div className="text-amber-400 text-xl">
                        <h1 className="md:ml-10 ml-5 py-6">If's got talent</h1>
                        <p className="md:ml-15 ml-7">
                            Petite chorée réalisée avec 3 amis danceurs. <br/>
                            Contrairement aux deux autres chorées, on n'avait pas de 
                            chorégraphe : on s'est donc improvisés chorégraphes tous ensembles !
                        </p>
                        <p className="text-slate-400 text-center">Comming soon</p>
                    </div>
                    <div className="h-20 hidden sm:block"/>
                </div>
            </div>
            <div className="h-20 hidden sm:block"/>
        </div>
    )
};