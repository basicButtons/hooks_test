import React, { useState, useEffect } from "react"
import Table from "./table"
import SearchPanel from "project-list/searchPanel"
import qs from "qs"
import {useDebounce,parseParams} from "utils"

const Test = () => {
    const [list, setList] = useState([])
    const [users, setUsers] = useState([])
    const [param, setParam] = useState({
        name: "",
        personId: ""
    })
    const debounceParams = useDebounce(param,1000)
    console.log(debounceParams)
    useEffect(() => {
        fetch("http://localhost:3000/user").then(async (response) => {
            if (response.ok) {
                setUsers(await response.json())
            }
        })
    }, [])
    useEffect(() => {
        fetch("http://localhost:3000/projects?"+qs.stringify(parseParams(debounceParams))).then(async (response) => {
            if (response.ok) {
                setList(await response.json())
            }
        })
    }, [debounceParams])
    return <div>
        <SearchPanel param={param} setParam={setParam} users={users}></SearchPanel>
        <Table list={list} setList={setList} users={users}></Table>
    </div>
}

export default Test;