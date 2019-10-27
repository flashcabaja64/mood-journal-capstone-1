import React, { Component } from 'react';
import './LandingPage.css'
import moods from './images/moods_page.PNG'
import dashboard from './images/dashboard_page.PNG'

export default class LandingPage extends Component {
  render() {
    return(
      <>
      <main className="landing-container" role="main">
        <div className="landing-wrap">
          <header role="banner">
            <h1 className="landing-main">Mood Journal</h1>
          </header>
          <section>
            <header>
              <h3 className="landing-3">Experience your inner emotions</h3>
            </header>
            <p className="landing-text">This mood journal is a documentation of your moods and/or emotions. After collecting a handful of entries, you can return back and read the different emotions you went through. During the process, you can discover new things you never understood about yourself.</p>
          </section>
          <section>
            <header>
              <h3 className="landing-3">Record your moods</h3>
            </header>
            <img src={moods} alt="moods page" className="moods"></img>
            <p className="landing-text">By collecting reoccuring data of your moods and/or emotions, the person starts to be self-aware of things they never thought existed. This can take the person through a multitude of directions including self-discovery, self-improvement, and introspection.</p>
          </section>
          <section>
            <header>
              <h3 className="landing-3">Keep track of your progress</h3>
            </header>
            <img src={dashboard} alt="dashboard page" className="moods"></img>
            <p className="landing-text">This is a whole list view of journal entries to give a general picture of how often you document an entry.</p>
          </section>
        </div>
      </main>
    </>
    )
  }
}