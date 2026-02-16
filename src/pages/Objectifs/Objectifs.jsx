import { TopMenu } from "../../components/TopMenu";
import { Input } from "../../components/forms/Input";
import {Checkbox} from "../../components/forms/Checkbox";
import { ObjectiveRow } from "./ObjectiveRow";
import {ObjectiveCategoryRow} from "./ObjectiveCategoryRow";
import { useState } from "react";

const OBJECTIVES = [
    {category: "callisténie", name: "front lever 3s", 
        link: "/objectifs/front-lever-3s", achieved: true},
    {category: "callisténie", name: "front lever 10s", 
        link: "/objectifs/front-lever-10s", achieved: false},
    {category: "info", name: "mon site internet", 
        link: "/objectifs/mon-site", achieved: false},
    {category: "jeux vidéos", name: "Fallen Knigdom", 
        link: "/objectifs/fk", achieved: true},
    {category: "bricolage", name: "construire ma chambre",
        link: "/objectifs/construire-ma-chambre", achieved: true
    }
]

function Objectifs () {

    const [showPending, setShowPending] = useState(true)
    const [showAchieved, setShowAchieved] = useState(true)
    const [search, setSearch] = useState('')

    const visibleObjectives = OBJECTIVES.filter(objective => {
        if (!showPending && !(objective.achieved)) {
            return false
        }
        if (!showAchieved && (objective.achieved)) {
            return false
        }
        if (search && !objective.name.includes(search)){
            return false
        }
        return true
    })

    return (
        <div className="bg-blue-100 h-screen">
            <TopMenu/>
            <h1 className="mt-20 ml-10 mb-5">Mes objectifs :</h1>
            <SearchBar 
                search={search}
                onSearchChange={setSearch}
                showPending={showPending} 
                onShowPendingChange={setShowPending} 
                showAchieved={showAchieved}
                onShowAchievedChange={setShowAchieved}
            />
            <ObjectivesTable objectives={visibleObjectives}/>
        </div>
    )
}

function SearchBar ({showPending, onShowPendingChange, 
                    search, onSearchChange,
                    showAchieved, onShowAchievedChange
}) {
    return (
        <div className="flex justify-center">
            <div className="m-4 w-4/5">
                <Input 
                    value={search} 
                    onChange={onSearchChange} 
                    placeholder="Rechercher..." 
                />
                <div className="grid grid-cols-2">
                    <Checkbox
                        checked={showPending} 
                        onChange={onShowPendingChange} 
                        id="pending" 
                        label="Afficher les objectifs en cours" 
                    />
                    <Checkbox 
                        checked={showAchieved} 
                        onChange={onShowAchievedChange} 
                        id="achieved" 
                        label="Afficher les objectifs atteints" 
                    />
                </div>
            </div>
        </div>
    )
}

function ObjectivesTable ({objectives}) {

    const rows=[]

    const categories=[]
    let currentCategory = null
    for (let objective of objectives) {
        currentCategory = objective.category
        if (!(categories.includes(currentCategory))) {
            categories.push(currentCategory)
            rows.push(<ObjectiveCategoryRow name={currentCategory}/>)
            const objectivesInCategory = objectives.filter(
                (obj) => obj.category === currentCategory
            )
            for (let obj of objectivesInCategory) {
                if (obj.category === currentCategory) {
                    rows.push(<ObjectiveRow objective={obj} key={obj.name}/>)
                }
            }
        }
    }

    return (
        <div className="flex justify-center bg-blue-100 py-10">
        <table className="table-auto border border-gray-400 border-3
                            rounded-sm w-1/2">
            <thead>
                <tr>
                    <th className="border border-gray-900 hover:border-gray-400
                                    bg-blue-400 text-xl border-2">
                        Objectif
                    </th>
                    <th className="border border-gray-900 hover:border-gray-400
                                    bg-blue-400 text-xl border-2">
                        Infos
                    </th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
        </div>
    )
}

export default Objectifs;