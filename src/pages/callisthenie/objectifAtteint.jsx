import { useParams } from "react-router-dom"
import {TopMenu} from "../../components/TopMenu"
import confetti from "../../assets/gifs/confetti.gif"

export default function ObjectifAtteint () {
    const {parameter} = useParams();

    //créer le titre
    let title = String(parameter).replace(/-/g, " ");
    title = title.charAt(0).toUpperCase() + title.slice(1);

    //chemin de la video
    const videoPath = new URL(`../../assets/videos/${parameter}.mp4`, import.meta.url).href;

    return (
        <div className="bg-slate-900 w-full h-screen text-amber-500 text-center">
            <TopMenu/>
            <div style={{height: '10vh'}}/>
            <h1>Objectif réussi</h1>
            <h1>{title + " !!!"}</h1>
            <img 
                className="sm:absolute sm:w-[20%] w-[35%] sm:left-15 left-5 top-30"
                src={confetti}
            />
            <img 
                className="sm:absolute sm:w-[20%] w-[35%] sm:right-15 right-5 top-30 rotate-y-180"
                src={confetti}
            />
            <video src={videoPath} controls="controls" className="w-[50%]"/>
        </div>
    )
}