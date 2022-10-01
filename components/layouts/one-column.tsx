import React from "react";
import styles from "./layouts.module.css"

interface props {
    children:React.ReactNode
}

export default function OneColumn({children}:props){
    return(<div className={styles["one-column"]}>{children}</div>)
}