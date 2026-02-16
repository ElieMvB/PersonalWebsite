export function ObjectiveCategoryRow ({name}) {
    return (
        <tr>
            <td colSpan={2} className="border border-gray-900 border-2
                            bg-blue-300 text-center text-2xl hover:border-gray-400">
                <strong>
                    {name}
                </strong>
            </td>
        </tr>
    )
}
