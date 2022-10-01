import {useSession} from "next-auth/react";
import OneColumn from "../components/layouts/one-column";
import Column from "../components/layouts/column"
import Menu from "../components/menu"

export default function Home() {
    const {data: session} = useSession()

    return (
        <>
            <OneColumn>
                <Menu></Menu>
                <Column>{session ? "authed Content Goes Here" : "un-authed component"}</Column>
            </OneColumn>
        </>
    )
}