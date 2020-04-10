/* eslint-disable import/no-webpack-loader-syntax */
/* eslint-disable import/no-unresolved */
import React from 'react';
import html from 'html-loader!./test-report.html';

const TestCoverage = () => {
  return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
};

export default TestCoverage;
