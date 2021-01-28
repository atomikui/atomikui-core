import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Prism from 'prismjs';
import '@atomikui/core/dist/styles/main.min.css';
import { Header, Footer, Link, Card } from '@atomikui/core';
import Hero from './components/Hero';
import AtomikUILogo from './components/AtomikUILogo';
import links from './links';
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
        backgroundColor="#1b282e"
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
          title="Accelerate Your Development"
          subtitle="A Library of Accessible React Components for Rapid Application Development."
          btnLink="/styleguide"
        />
        <div className="main-content">
          <p className="margin-left-8 margin-right-8 margin-bottom-36">
            Atomik UI is a library of accessible React components for rapid
            application development. From form controls to informational
            components like modals, alerts and toast notifications, you'll find
            everything you need here to get your next project off the ground.
          </p>
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
                      Read installation docs
                    </Link>
                  }
                >
                  <div style={{ height: '320px' }}>
                    <p>1. Install the Atomik UI package from npm.</p>
                    <div className="margin-top-16 margin-bottom-8">
                      <pre>
                        <code className="language-javascript">// with npm</code>
                        <br />
                        <code className="language-javascript">
                          npm install @atomikui/core
                        </code>
                        <br />
                        <br />
                        <code className="language-javascript">
                          // with yarn
                        </code>
                        <br />
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
                      Explore component docs
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
          <div className="margin-top-20">
            <Grid>
              <Col>
                <h4 className="text-size-24 margin-bottom-32 has-bottom-border">
                  Components and Features
                </h4>
              </Col>
              {Object.keys(links).map((category) => (
                <Row className="sitemap" key={category}>
                  <Col md={3}>
                    <h5 className="text-size-20 margin-bottom-16">
                      {category}
                    </h5>
                    <p className="margin-bottom-24">{links[category][0]}</p>
                  </Col>
                  <Col md={1} />
                  <Col md={8} className="margin-bottom-32">
                    <ul className="sitemap__list">
                      {links[category][1].map((link) => (
                        <li key={link}>
                          <Link
                            href={`/styleguide/#/${category}/${link}`}
                            className="margin-bottom-16 atomikui-btn atomikui-btn--cyan atomikui-btn--block atomikui-btn--pill atomikui-btn--md"
                            style={{
                              backgroundColor: '#80DEEA',
                              textTransform: 'none',
                            }}
                          >
                            {link}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Col>
                </Row>
              ))}
            </Grid>
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
