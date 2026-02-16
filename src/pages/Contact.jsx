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
            <h1 className="2xl:mt-20 xl:mt-15 lg:mt-17 md:mt-20 sm:mt-20 flex justify-center 
                            2xl:text-7xl sm:text-5xl">
                Me Contacter :
            </h1>
            <div className={` flex justify-center mb-5 
                            2xl:text-4xl lg:text-3xl bg-blue-100 sm:text-2xl text-md`}>
                <div className={`${showContact ? "" : "w-2/3"} sm:w-2/3 xl:w-2/5 border-black border-4 rounded-md flex 
                                justify-center bg-slate-400 py-2 sm:py-0`}>
                    {showContact === "ig" && <p>@elie_mvb</p>}
                    {showContact === "mail" && <p>elie.vanbeek66@gmail.com</p>}
                    {showContact === "in" && <p>IN</p>}
                    {showContact === null && <p>---</p>}
                    {showContact != null && 
                        <button onClick={handleCopy} className="ml-4 h-[50px] 2xl:mt-10 sm:mt-6 grid grid-cols-2
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
            <div className="bg-blue-100 w-full mb-4">
                <div className="2xl:ml-55 2xl:mr-55 xl:ml-40 xl:mr-40 grid sm:grid-cols-3 lg:gap-40 
                                lg:ml-20 lg:mr-20 md:ml-30 md:mr-30 md:gap-25 ml-25 
                                mr-25 gap-5 grid-cols-1">
                    <button className="aspect-square shadow-2xl bg-white border-transparent 
                                        rounded-2xl hover:brightness-75" 
                            onClick={() => handleClick("ig")}>
                        <img src={instagram} className="w-[80%]"/>
                    </button>
                    <button className="aspect-square shadow-2xl bg-white border-transparent 
                                        rounded-2xl hover:brightness-75" 
                            onClick={() => handleClick("mail")}>
                        <img src={mail} className="w-[80%]"/>
                    </button>
                    <button className="aspect-square shadow-2xl bg-white border-transparent 
                                        rounded-2xl hover:brightness-75" 
                            onClick={() => handleClick("in")}>
                        <img src={linkedin} className="w-[80%]"/>
                    </button>
                </div>
            </div>
        </div>
    )
}