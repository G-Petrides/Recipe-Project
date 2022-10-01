import React from "react";
import styles from "./layouts.module.css"

interface props {
    children:React.ReactNode
}

export default function Column({children}:props){
    return(<div className={styles.column}>{children}</div>)
}