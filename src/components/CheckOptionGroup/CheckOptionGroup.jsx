import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import shortid from 'shortid';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Hint from '../hint';

const CheckOptionGroup = ({
  className,
  children,
  helpText,
  errorText,
  hasError,
  onChange,
  label,
  cols,
  ...others
}) => {
  const uid = shortid.generate();
  const legnedId = `legend_${uid}`;
  const inputHintId = `hint_${uid}`;
  const inputErrorId = `error_${uid}`;
  const ariaDescribedBy = `${legnedId} ${inputHintId} ${inputErrorId}`;

  return (
    <fieldset
      aria-describedby={ariaDescribedBy}
      className={classnames('atomikui-check-option-group', className)}
      {...others}
    >
      <legend id={legnedId} className="atomikui-label margin-bottom-16">
        {label}
      </legend>
      <Grid>
        <Row>
          {Children.map(children, (child, index) => (
            <Col {...cols} className="margin-bottom-8">
              {cloneElement(child, {
                key: `check-option-group-item-${index}`,
                onChange: () => onChange(index),
                hasError,
              })}
            </Col>
          ))}
        </Row>
      </Grid>
      {(helpText || errorText) && (
        <div>
          {helpText && <Hint id={inputHintId}>{helpText}</Hint>}
          {hasError && (
            <Hint id={inputErrorId} type="error">
              {errorText}
            </Hint>
          )}
        </div>
      )}
    </fieldset>
  );
};

CheckOptionGroup.propTypes = {
  /** Sets custom classes to the parent container */
  className: PropTypes.string,
  /** CheckOptions */
  children: PropTypes.node.isRequired,
  /** Sets the responsive grid column values */
  cols: PropTypes.shape({
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
  }),
  /** Text to be displayed when there is an error. */
  errorText: PropTypes.string,
  /** Specifies the error state. */
  hasError: PropTypes.bool,
  /** Assistive text to be displayed with form field. */
  helpText: PropTypes.string,
  /** Callback triggered on change */
  onChange: PropTypes.func.isRequired,
  /** Check option group label text */
  label: PropTypes.string.isRequired,
};

CheckOptionGroup.defaultProps = {
  className: '',
  cols: { xs: 12, sm: 6, md: 6, lg: 6 },
  helpText: '',
  hasError: false,
  errorText: '',
};

export default CheckOptionGroup;
