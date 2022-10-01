import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import {NextComponentType} from "next";

interface props {
    Component:NextComponentType;
    pageProps:any;
}

function App({ Component, pageProps: { session, ...pageProps }, }: props) {
  return(
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
  )
}

export default App