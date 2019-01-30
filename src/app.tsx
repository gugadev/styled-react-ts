import React from 'react'
import styles from './app.pcss'

export default class App extends React.Component {
  title = 'You got it'

  render(): React.ReactNode {
    return (
      <React.Fragment>
        <main className="container">
          <img
            src="/img/hello-world.jpg"
            className="picture"
          />
          <h1 className="title">
            { this.title }
          </h1>
        </main>
        <style jsx>{ styles }</style>
      </React.Fragment>
    )
  }
}
