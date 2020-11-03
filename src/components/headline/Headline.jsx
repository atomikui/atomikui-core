import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Headline = ({ className, subtitle, title, uppercase, ...others }) => {
  return (
    <div
      className={classnames('atomikui-headline', className, {
        'is-uppercase': uppercase,
      })}
      {...others}
    >
      <h1 className="atomikui-headline__title">{title}</h1>
      <h2 className="atomikui-headline__subtitle">{subtitle}</h2>
    </div>
  );
};

Headline.propTypes = {
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Headline subtitle text */
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Headline title text */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Makes Headline uppercase */
  uppercase: PropTypes.bool,
};

Headline.defaultProps = {
  className: '',
  subtitle: '',
  title: '',
  uppercase: false,
};

export default Headline;
