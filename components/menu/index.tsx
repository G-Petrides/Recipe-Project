import React from "react";
import styles from "./menu.module.css"
import {signIn, signOut, useSession} from "next-auth/react";

interface props {
    children?:React.ReactNode
}

export default function Menu({children = null}:props){
    const {data: session} = useSession()

    return(
        <div className={styles.menu}>
            <div>{children}</div>
            <div>{session ? <button onClick={() => signOut()}>Sign out</button> : <button onClick={() => signIn()}>Sign in</button>}</div>
        </div>
    )
}