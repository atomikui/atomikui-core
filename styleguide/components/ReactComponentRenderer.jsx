/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import Pathline from 'react-styleguidist/lib/client/rsg-components/Pathline';
import Styled from 'react-styleguidist/lib/client/rsg-components/Styled';

const styles = ({ color, fontSize, space }) => ({
  root: {
    marginBottom: space[6],
  },
  header: {
    marginBottom: space[3],
  },
  tabs: {
    marginBottom: space[3],
  },
  tabButtons: {
    marginBottom: space[1],
  },
  tabBody: {
    overflowX: 'auto',
    maxWidth: '100%',
    WebkitOverflowScrolling: 'touch',
  },
  docs: {
    color: color.base,
    fontSize: fontSize.text,
  },
});
const ReactComponentRenderer = ({
  classes,
  name,
  heading,
  pathLine,
  description,
  docs,
  examples,
  tabButtons,
  tabBody,
}) => (
  <div className={classes.root} data-testid={`${name}-container`}>
    <header className={classes.header}>
      {heading}
      {pathLine && <Pathline>{pathLine}</Pathline>}
    </header>
    {(description || docs) && (
      <div className={classes.docs}>
        {description}
        {docs}
      </div>
    )}
    {examples}
    <h3 className="text-size-24 margin-bottom-16">API</h3>
    {tabButtons && (
      <div className={classes.tabs}>
        <div className={classes.tabButtons}>{tabButtons}</div>
        <div className={classes.tabBody}>{tabBody}</div>
      </div>
    )}
  </div>
);

ReactComponentRenderer.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  name: PropTypes.string.isRequired,
  heading: PropTypes.node.isRequired,
  pathLine: PropTypes.string,
  tabButtons: PropTypes.node,
  tabBody: PropTypes.node,
  description: PropTypes.node,
  docs: PropTypes.node,
  examples: PropTypes.node,
};

export default Styled(styles)(ReactComponentRenderer);
