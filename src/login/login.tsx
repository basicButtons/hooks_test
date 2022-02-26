import React, { FormEvent } from "react";
import { useAuth } from "context/auth-context"
const LoginScreen =()=>{
    const {login , user} = useAuth();
    const handleSubmit = (event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        const username = (event.currentTarget.elements[0] as HTMLInputElement).value
        const password = (event.currentTarget.elements[1] as HTMLInputElement).value
        login({username,password})
    }
    return <form onSubmit={handleSubmit}>
        {user? "登录成功用户名：" + user.name : ""}
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