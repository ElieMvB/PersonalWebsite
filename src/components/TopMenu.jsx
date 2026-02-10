import {useState} from "react";
import menu from "../assets/menu.svg"
import { NavLink } from "react-router-dom";

const MENU = [
    {name: "Accueil", link: "/"},
    {name: "Mes jeux", link: "/mes-jeux"},
    {name: "Contact", link: "/contact"}
]

export function TopMenu() {

    //variables
    const [seeMenu, setSeeMenu] = useState(false)
    const pages = []

    //page parameters
    document.title="La page d'Elie"

    for (let page of MENU){
        pages.push(
                <li className="inline-block" key={page.link}>
                    <NavLink className={"font-mono no-underline py-2 mx-4 text-2xl text-amber-400 hover:text-amber-600 sm:py-0"}
                        to={page.link}>{page.name}</NavLink>
                </li>)
    }

    return (
        <>
        <nav className="fixed top-0 w-full flex justify-center bg-gradient-to-r
            from-blue-800 to-blue-400 sm:py-6 py-3 z-50">
            <ul className={`${seeMenu ? "flex" : "hidden"} w-full flex-col items-center 
                justify-center transparent absolute top-full pb-5 sm:flex sm:relative sm:flex-row 
                sm:pb-0 bg-gradient-to-r from-blue-800 to-blue-400`}>
                {pages}
            </ul>
            <button
                onClick={() => setSeeMenu(!seeMenu)}
                className="ml-auto sm:hidden bg-transparent border-transparent"
            >
                <img
                    className="w-[30px]"
                    src={menu}
                    alt="icon"
                />
            </button>
        </nav>
        <div style={{height: '10vh'}}></div>
        </>
    )
}