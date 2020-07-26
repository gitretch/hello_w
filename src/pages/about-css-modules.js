import React from "react"
import Container from "../components/container"
import styles from  "./about-css-modules.module.css"

const User = props => (
    <div className={styles.user}>
        <img src={props.avataor} className={styles.avatar} alt=""/>
        <div className={styles.description}>
        <h2 className={styles.username}>{props.username}</h2>
        <p className={styles.excerpt}>{props.excerpt}</p>
        </div>
    </div>
)
export default function About() {
    console.log(styles)
    return (
        <Container>
            <h1>about css modules</h1>
            <User
            username="T Clark"
            avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
            excerpt="I'm Jane Does"
            />
                  <User
        username="Bob Smith"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
        excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
        </Container>
    )
}
