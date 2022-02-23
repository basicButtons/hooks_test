import React, { FormEvent } from "react";

const LoginScreen =()=>{
    const handleSubmit = (event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        const username = (event.currentTarget.elements[0] as HTMLInputElement).value
        const password = (event.currentTarget.elements[1] as HTMLInputElement).value
        fetch("http://localhost:3001/login",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({username,password})
        }).then(async(response)=>{
            console.log(response)
            if(response.ok){
                console.log("ok")
            }
        })
    }
    return <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username">用户名</label>
            <input type="text" id = {"username"}/>
        </div>
        <div>
            <label htmlFor="password">用户名</label>
            <input type="text" id = {"password"}/>
        </div>
        <button type="submit">登录</button>
    </form>
}

export default LoginScreen;