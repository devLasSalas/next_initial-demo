import Head from "next/head"
import { Navbar } from "../Navbar"



export const MainLayout = ({ children }) => {
  return (
    <div>

        <Head>
            <title>Home - Carlos</title>
            <meta name="description" content="Home Page" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar/>

        <main>
            { children }
        </main>

    </div>
  )
}
