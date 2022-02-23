import React from "react";
import {User} from "./searchPanel"
interface Project{
    id:string;
    name:string;
    personId:number;
    organization:string;
    created:number;
}

interface TableProp{
    list:Project[];
    users:User[];
}

const Table = (props:TableProp)=>{
    const {list,users} = props
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
                    <td>{project.name}</td>
                    <td>{users.find(user => user.id === project.personId)?.name || "未发现"}</td>
                </tr>)
            }
        </tbody>
    </table>
}
export default Table;