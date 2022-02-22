import React from "react";


const Table = (props)=>{
    const {list} = props
    return <table>
        <thead>
            <tr>
                <th>名称</th>
                <th>负责人</th>
            </tr>
        </thead>
        <tbody>
            {
                list.map(project => <tr key={project.id}>
                    <td>{project.id}</td>
                    <td>{project.name}</td>
                </tr>)
            }
        </tbody>
    </table>
}
export default Table; 