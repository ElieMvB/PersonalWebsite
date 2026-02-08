import { TopMenu } from "../components/TopMenu";
import instagram from "../assets/images/contact/instagram.png"
import linkedin from "../assets/images/contact/linkedin.png"
import mail from "../assets/images/contact/mail.png"
import copy from "../assets/buttons/copy.jpeg"
import copied from "../assets/buttons/copied.jpg"
import { useState } from "react";

export default function Contact () {
    const [showContact, setShowContact] = useState(null)
    const [copiedImage, setCopiedImage] = useState(false)

    function handleClick (type) {
        setShowContact(prev => prev == type ? null : type);
        setCopiedImage(false);
    }

    function handleCopy () {
        setCopiedImage(true);
        if (showContact === "ig"){
            navigator.clipboard.writeText("@elie_mvb");
        }
        else if (showContact === "mail") {
            navigator.clipboard.writeText("elie.vanbeek66@gmail.com");
        }
        else if (showContact === "in") {
            navigator.clipboard.writeText("IN");
        }
    }

    return (
        <div className="h-screen bg-blue-100">
            <TopMenu/>
            <h1 className="py-20 flex justify-center sm:text-7xl text-5xl">Me Contacter :</h1>
            <div className="sm:ml-80 sm:mr-80 sm:grid sm:grid-cols-3 sm:gap-40 bg-blue-100">
                <button className="aspect-square shadow-2xl bg-white border-transparent 
                                    rounded-2xl hover:brightness-75" 
                        onClick={() => handleClick("ig")}>
                    <img src={instagram}/>
                </button>
                <button className="aspect-square shadow-2xl bg-white border-transparent 
                                    rounded-2xl hover:brightness-75" 
                        onClick={() => handleClick("mail")}>
                    <img src={mail}/>
                </button>
                <button className="aspect-square shadow-2xl bg-white border-transparent 
                                    rounded-2xl hover:brightness-75" 
                        onClick={() => handleClick("in")}>
                    <img src={linkedin}/>
                </button>
            </div>
            <div className={`${showContact ? "flex" : "hidden"} sm:mt-10 justify-center sm:text-4xl 
                            bg-blue-100 text-2xl`}>
                {showContact === "ig" && <p>@elie_mvb</p>}
                {showContact === "mail" && <p>elie.vanbeek66@gmail.com</p>}
                {showContact === "in" && <p>IN</p>}
                {showContact != null && 
                    <button onClick={handleCopy} className="ml-4 h-[50px] sm:mt-10 mt-5 grid grid-cols-2
                                                    bg-white rounded-lg">
                        {!copiedImage && <>
                                <p className="w-[50px]">Copier</p>
                                <img src={copy} className="w-[30px] mt-2 ml-2"/>
                            </>}
                        {copiedImage && <>
                                <p className="w-[50px]">Copié !</p>
                                <img src={copied} className="w-[30px] mt-2 ml-2"/>
                            </>}
                    </button>
                
                }
            </div>
        </div>
    )
}