import { TopMenu } from "../components/TopMenu";
import instagram from "../assets/images/contact/instagram.png"
import linkedin from "../assets/images/contact/linkedin.png"
import mail from "../assets/images/contact/mail.png"

export default function Contact () {
    return (
        <div className="h-screen bg-blue-100">
            <TopMenu/>
            <h1 className="py-25 flex justify-center text-7xl">Me Contacter :</h1>
            <div className="sm:ml-80 sm:mr-80 sm:grid sm:grid-cols-3 sm:gap-40">
                <button className="aspect-square shadow-2xl bg-white border-transparent 
                                    rounded-2xl hover:brightness-75">
                    <img src={instagram}/>
                </button>
                <button className="aspect-square shadow-2xl bg-white border-transparent 
                                    rounded-2xl hover:brightness-75">
                    <img src={mail}/>
                </button>
                <button className="aspect-square shadow-2xl bg-white border-transparent 
                                    rounded-2xl hover:brightness-75">
                    <img src={linkedin}/>
                </button>
            </div>
        </div>
    )
}