import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Prism from 'prismjs';
import '@atomikui/core/dist/styles/main.min.css';
import { Header, Footer, Link, Card } from '@atomikui/core';
import Hero from './components/Hero';
import AtomikUILogo from './components/AtomikUILogo';
import './styles/main.scss';
import 'prismjs/themes/prism-okaidia.css';

if (process.env.NODE_ENV !== 'production') {
  const axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}

const { version } = require('../../package.json');

const versionNumber = `Version: ${version}`;

const npmPath = 'https://www.npmjs.com/package/@atomikui/core';

const logo = <AtomikUILogo size={40} />;

const App = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
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
      <main>
        <Hero
          title="Atomik UI"
          subtitle="A Library of Accessible React Components for Rapid Application Development"
          btnLink="/styleguide"
        />
        <div className="main-content">
          <Grid>
            <Row>
              <Col md={6} className="margin-bottom-16">
                <Card
                  title={<h3>Installation</h3>}
                  footer={
                    <Link
                      className="link"
                      href="/styleguide#/Getting%20Started/Installation"
                    >
                      Read Installation Docs
                    </Link>
                  }
                >
                  <div style={{ height: '320px' }}>
                    <p>1. Install the Atomik UI package from npm.</p>
                    <div className="margin-top-16 margin-bottom-8">
                      npm
                      <pre>
                        <code className="language-javascript">
                          npm install @atomikui/core
                        </code>
                      </pre>
                      yarn
                      <pre>
                        <code className="language-javascript">
                          yarn add @atomikui/core
                        </code>
                      </pre>
                    </div>
                    <p>2. Import the supporting CSS into your project.</p>
                    <div className="margin-top-16 margin-bottom-8">
                      <pre>
                        <code className="language-javascript">
                          import '@atomikui/core/dist/styles/main.min.css';
                        </code>
                      </pre>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col md={6}>
                <Card
                  title={<h3>Usage</h3>}
                  footer={
                    <Link className="link" href="/styleguide">
                      Explore Component Docs
                    </Link>
                  }
                >
                  <div style={{ height: '320px' }}>
                    <p>Import components as needed into your project.</p>
                    <div className="margin-top-16 margin-bottom-8">
                      <pre>
                        <code className="language-javascript">
                          {`import { RangeSlider } from '@atomikui/core';
    
<RangeSlider
  label="Select Amount"
  min="100"
  max="1000"
  step="100"
  errorText="Please select an amount"
  onChange={(value) => console.log(value)}
/>`}
                        </code>
                      </pre>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </Grid>
          <div className="status-badges">
            <img
              src="https://travis-ci.com/atomikui/atomikui-core.svg?branch=master"
              alt="Travis CI Status Image"
            />
            <a href="https://sonarcloud.io/dashboard?id=atomikui_atomikui-core">
              <img
                src="https://sonarcloud.io/api/project_badges/measure?project=atomikui_atomikui-core&metric=alert_status"
                alt="Quality Gate Status"
              />
            </a>
            <img
              src="https://badgen.net/npm/v/@atomikui/core"
              alt="Package Version Image"
            />
            <img
              alt="GitHub Issues"
              src="https://img.shields.io/github/issues-raw/atomikui/atomikui-core"
            />
            <img
              alt="License"
              src="https://img.shields.io/github/license/atomikui/atomikui-core"
            />
          </div>
        </div>
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
    </>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
