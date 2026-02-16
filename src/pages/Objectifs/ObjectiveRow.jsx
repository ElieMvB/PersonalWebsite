import { NavLink } from "react-router-dom"

export function ObjectiveRow ({objective}) {
    const style = objective.achieved ? undefined : {color: 'red'}

    return (
        <tr>
            <td style={style} 
                className="bg-blue-200 border-gray-900 hover:border-gray-400
                            text-center text-xl border-2">
                {objective.name}
            </td>
            <td className=" bg-blue-200 border-gray-900 hover:border-gray-400
                            text-center text-xl border-2">
                <NavLink to={objective.link} className="decoration-amber-500 
                                                hover:decoration-amber-600">
                    <div className="text-amber-500 hover:text-amber-600">
                        plus de détails ici
                    </div>
                </NavLink>
            </td>
        </tr>
    )
}
