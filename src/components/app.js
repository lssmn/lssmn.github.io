import React from 'react';
import Typist from 'react-typist';
import styles from './app.css';

const typistConfig = {
  props: {
    avgTypingDelay: 40,
    stdTypingDelay: 20,
    cursor:{
      show: false,
    },
  },
  delay: 1400,
};

const App = () => (
  <main className={styles.app}>
    <header className={styles.header}>
      <Typist
        {...typistConfig.props}
        avgTypingDelay={70}
        stdTypingDelay={60}
      >
        <p className={styles.logo}>Hello World</p>
      </Typist>
    </header>
    <section>
      <Typist
        {...typistConfig.props}
        onLineTyped={() => {
          window.scrollTo(0, document.body.scrollHeight);
        }}>
        <Typist.Delay ms={typistConfig.delay} />
        <article>
          <blockquote className={styles.quote}>
            <p>I'm personally convinced that computer science has a lot in common with physics. Both are about how the world works at a rather fundamental level.</p> 
            <p>The difference, of course, is that while in physics you're supposed to figure out how the world is made up, in computer science you create the world.</p>
            <p>Within the confines of the computer, you are the creator. You get to ultimately control everything that happens.</p>
            <p>If you're good enough, you can be God. On a small scale.</p>
            <cite className={styles.author}>Linus Torvalds</cite>
          </blockquote>
        </article>
        <article>
          <p>Hi 👋</p>
          <p>My name is Alessio Minichiello 😁</p>
          <p>I am from Genoa 🇮🇹 and currently based in London 🇬🇧</p>
          <p>I work as Senior Application Engineer at The LEGO® Group 🤓</p>
        </article>
        <article>
          <p>Find me on the Internet 👀</p>
          <ul>
            <li>
              <a target="_blank" href="https://twitter.com/_lssmn">Twitter</a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/lssmn">GitHub</a>
            </li>
            <li>
              <a target="_blank" href="https://www.linkedin.com/in/alessiominichiello">LinkedIn</a>
            </li>
          </ul>
        </article>
        <article>
          <p>This page was created with <a target="_blank" href="https://github.com/facebook/create-react-app">create-react-app</a>. Hosted by <a target="_blank" href="https://github.com/lssmn/lssmn.github.io">GitHub</a>.</p>
          <p>Ciao 🤙</p>
        </article>
      </Typist>
    </section>
  </main>
);

export default App;
