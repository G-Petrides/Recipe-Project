import styles from "./recipe-index.module.css"
export default function RecipeIndex({toggleEditor}:{toggleEditor:()=>void}){
    return(
        <div className={styles.container}>
            <Menu toggleEditor={toggleEditor}/>
        </div>
    )
}

function Menu({toggleEditor}:{toggleEditor:()=>void}){
    return(
        <div className={styles.menu}>
            <button onClick={toggleEditor}>New Recipe</button>
        </div>
    )
}