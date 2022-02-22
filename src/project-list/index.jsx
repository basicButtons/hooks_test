import React, { useState, useEffect } from "react"
import Table from "./table"
import SearchPanel from "project-list/searchPanel"

const Test = () => {
    const [list, setList] = useState([])
    const [users, setUsers] = useState([])
    const [param, setParam] = useState({
        name: "",
        personId: ""
    })
    useEffect(() => {
        fetch("http://localhost:3000/user").then(async (response) => {
            if (response.ok) {
                setUsers(await response.json())
            }
        })
    }, [])
    useEffect(() => {
        fetch("http://localhost:3000/projects").then(async (response) => {
            if (response.ok) {
                setList(await response.json())
            }
        })
    }, [param])
    return <div>
        <SearchPanel param={param} setParam={setParam} users={users}></SearchPanel>
        <Table list={list} setList={setList}></Table>
    </div>
}

export default Test;