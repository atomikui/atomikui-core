import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import '@atomikui/core/dist/styles/main.min.css';
import { Header, Footer, Link } from '@atomikui/core';
import Hero from './components/Hero';
import AtomikUILogo from './components/AtomikUILogo';
import './styles/main.scss';

const { version } = require('../../package.json');

const versionNumber = `Version: ${version}`;

const npmPath = 'https://www.npmjs.com/package/@atomikui/core';

const logo = <AtomikUILogo size={40} />;

const App = () => {
  return (
    <div>
      <Header
        backgroundColor="#263238"
        logo={logo}
        logoLink="/"
        logoText="Atomik UI"
        logoFontSize={30}
        logoFont="'Barlow Condensed', Arial, Helvetica, sans-serif"
        logoFontColor="#fff9c4"
        linkColor="#fff"
        menuToggleColor="#fff"
      >
        <Link href={npmPath} target="_blank" rel="noreferrer noopener">
          {versionNumber}
        </Link>
      </Header>
      <Hero
        title="Atomik UI"
        subtitle="A Library of Accessible React Components for Rapid Application Development"
      />
      <main>
        <Grid>
          <Row>
            <Col md={6}></Col>
            <Col md={6}></Col>
            <Col md={6}></Col>
          </Row>
        </Grid>
      </main>
      <Footer
        copyrightEntity="Atomik UI"
        backgroundColor="#263238"
        navBackgroundColor="#1b282e"
        linkColor="#fff9c4"
        textColor="#fff"
        logo={logo}
      >
        <Link href={npmPath}>{versionNumber}</Link>
      </Footer>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
