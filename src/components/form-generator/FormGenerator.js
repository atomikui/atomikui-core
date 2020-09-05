import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Grid, Row, Col } from 'react-flexbox-grid';

const FormGenerator = ({ rowSpacing, fieldsets }) => {
  return (
    <>
      {fieldsets.map((fieldset, gridIndex) => {
        return (
          <Grid
            key={`grid-${gridIndex}`}
            className={classnames({
              [`margin-bottom-${rowSpacing}`]: rowSpacing,
            })}
          >
            <Row>
              {fieldset.map(
                (
                  {
                    Component,
                    colProps = { sm: 12, md: 12, lg: 12 },
                    ...props
                  },
                  colIndex,
                ) => {
                  return (
                    <Col key={`col-${colIndex}`} {...colProps}>
                      <Component {...props} />
                    </Col>
                  );
                },
              )}
            </Row>
          </Grid>
        );
      })}
    </>
  );
};

FormGenerator.propTypes = {
  /** Sets the vertical rhythm for each row */
  rowSpacing: PropTypes.oneOf(['4', '8', '16', '20', '24', '28', '32', '40']),
  /** Data representing form fields */
  fieldsets: PropTypes.arrayOf(PropTypes.array),
};

FormGenerator.defaultProps = {
  className: '',
  fieldsets: [],
};

export default FormGenerator;
