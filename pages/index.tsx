import {useSession} from "next-auth/react";
import OneColumn from "../components/layouts/one-column";
import Column from "../components/layouts/column"
import Menu from "../components/menu"
import RecipeIndex from "./recipe-index";
import {useState} from "react";

export default function Home() {
    const {data: session} = useSession()
    const [recipeEditor, setRecipeEditor] = useState(false)
    
    const toggleRecipeEditor = () => setRecipeEditor(!recipeEditor)

    return (
        <>
            {recipeEditor && <RecipeEditor/>}
            <OneColumn>
                <Menu></Menu>
                <Column>{
                    session
                        ? <RecipeIndex toggleEditor={toggleRecipeEditor}/>
                        : "un-authed component"
                }</Column>
            </OneColumn>
        </>
    )
}

function RecipeEditor(){
    return(
        <div style={{position:"fixed"}}>Recipe Editor</div>
    )
}