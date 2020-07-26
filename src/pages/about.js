import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"

export default function About() {
    return (
       <Layout>
       <div style={{color: `teal`}}>
           <Header headerText={"hie"} />
            <p>Such wow. very React.</p>
        </div>
        </Layout>
    )
}