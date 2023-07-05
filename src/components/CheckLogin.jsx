import { useEffect, useState } from "react";
export default function CheckLogin(){
    const [checkLogin,setCheckLogin] = useState(false);
    useEffect(()=>{
        async function getToken(){
            const token = await sessionStorage.getItem("access-token");
            if(token){
                setCheckLogin(true)
            }
        }
        getToken()
    })
    return{
        checkLogin
    }
}