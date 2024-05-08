export const TableSkeleton = () => {
    // Define the number of rows you want to generate
    const numberOfRows = 6;

    // Function to generate a single table row
    const generateTableRow = (key: number) => (
        <tr key={key} className="bg-white border-b border-gray-50">
            <td className="py-3 px-6"><div className="h-4 w-4 rounded bg-gray-100"></div></td>
            <td className="py-3 px-6"><div className="h-4 w-32 rounded bg-gray-100"></div></td>
            <td className="py-3 px-6"><div className="h-4 w-20 rounded bg-gray-100"></div></td>
            <td className="py-3 px-6"><div className="h-4 w-32 rounded bg-gray-100"></div></td>
            <td className="flex justify-center gap-1 py-3">
                <div className="h-7 w-7 rounded-sm bg-gray-100"></div>
                <div className="h-7 w-7 rounded-sm bg-gray-100"></div>
            </td>
        </tr>
    );

    // Generate table rows using the looping technique
    const tableRows = [];
    for (let i = 0; i < numberOfRows; i++) {
        tableRows.push(generateTableRow(i));
    }

    return(
        <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-sm text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th className="py-3 px-6">#</th>
                    <th className="py-3 px-6">Name</th>
                    <th className="py-3 px-6">Phone Number</th>
                    <th className="py-3 px-6">Created At</th>
                    <th className="py-3 px-6 text-center">Actions</th>
                </tr>
            </thead>
            <tbody className="animated-pulse">
                {tableRows}
            </tbody>
        </table>
    )
}
