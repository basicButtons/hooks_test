import React, { useState } from "react"

export interface User{
    id:number;
    name:string;
    token?:string;
}

interface SearchPanelProps{
    users : User[],
    param:{
        name:string;
        personId:string;
    },
    setParam:(param:SearchPanelProps['param']) => void
}

const Panel = (props:SearchPanelProps) => {
    const {users} = props
    const {param,setParam} = props
    return <div>
        <input type="text" value={param.name} onChange={e => {
            setParam({
                ...param,
                name: e.target.value
            })
        }} />
        <select value={param.personId} onChange={
            e => setParam({
                ...param,
                personId: e.target.value
            }) 
        }>
            <option value={""}>负责人</option>
            {users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
        </select>
    </div>
}

export default Panel