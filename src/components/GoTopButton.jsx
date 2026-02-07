import { useState } from "react";
import { useEffect } from "react";
import glider from "../assets/images/glider.png"

export function GoTopButton () {

    const [showButtonGoTop, setShowButtonGoTop] = useState(false)

    //functions
    const onClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"});
    }

    //listen scroll
    useEffect(() => {
        const handler = (e) => {
            if (window.scrollY > 0){
                setShowButtonGoTop(true)
            } else {
                setShowButtonGoTop(false)
            }
        }
        window.addEventListener('scroll',handler)
        return () => {
            window.removeEventListener('scroll', handler)
        }
    }, [])

    return (
        <div className="fixed absolute z-51 right-5 bottom-5" >
        {showButtonGoTop && <button className="bg-blue-300 border-blue-400 
            hover:bg-sky-600 rounded-full">
            <img
                className="w-[60px]"
                src={glider}
                onClick={onClick}
            />
        </button>}
        </div>
    )
}