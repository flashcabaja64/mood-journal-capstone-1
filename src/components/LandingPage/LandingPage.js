import React, { Component } from 'react';

export default class LandingPage extends Component {
  render() {
    return(
      <>
      <main role="main">
      <header role="banner">
        <h1>Mood Journal</h1>
        <h2>Understand the inner you.</h2>
      </header>
      <section>
        <header>
            <h3>Experience your inner emotions</h3>
        </header>
        <p>[<em>placeholder for screenshot of journal interface</em>]</p>
        <p>This mood journal is a documentation of your moods and/or emotions. After collecting a handful of entries, you can return back and read the different emotions you went through. During the process, you can discover new things you never understood about yourself.</p>
      </section>
      <section>
        <header>
            <h3>Record your moods</h3>
        </header>
        <p>[<em>placeholder for screenshot of journal interface</em>]</p>
        <p>By collecting reoccuring data of your moods and/or emotions, the person starts to be self-aware of things they never thought existed. This can take the person through a multitude of directions including self-discovery, self-improvement, and introspection.</p>
      </section>
      <section>
        <header>
            <h3>Keep track of your progress</h3>
        </header>
        <p>[<em>placeholder for screenshot of journal entries</em>]</p>
        <p>This is a whole list view of journal entries to give a general picture of how often you document an entry.</p>
      </section>
    </main>
    <footer aria-label="content-info">Created by Hubert Yang</footer>
    </>
    )
  }
}