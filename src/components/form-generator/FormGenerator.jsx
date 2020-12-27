import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Grid, Row, Col } from 'react-flexbox-grid';
import AutoComplete from '../auto-complete';
import Button from '../button';
import ButtonGroup from '../button-group';
import CheckOption from '../check-option';
import DatePicker from '../date-picker';
import Dropdown from '../dropdown';
import FileUpload from '../file-upload';
import FormField from '../form-field';
import RangeSlider from '../range-slider';
import Switch from '../switch';

const components = {
  AutoComplete,
  Button,
  ButtonGroup,
  CheckOption,
  DatePicker,
  Dropdown,
  FileUpload,
  FormField,
  RangeSlider,
  Switch,
};

const FormGenerator = ({ rowSpacing, fieldsets }) => (
  <>
    {fieldsets.map((fieldset, gridIndex) => (
      <Grid key={`grid-${gridIndex + 1}`}>
        <Row>
          {fieldset.map(
            (
              { component, colProps = { sm: 12, md: 12, lg: 12 }, ...props },
              colIndex,
            ) => {
              const Component = components[component];
              return (
                <Col
                  key={`col-${colIndex + 1}`}
                  className={classnames({
                    [`padding-bottom-${rowSpacing}`]: rowSpacing,
                  })}
                  {...colProps}
                >
                  <Component {...props} />
                </Col>
              );
            },
          )}
        </Row>
      </Grid>
    ))}
  </>
);

FormGenerator.propTypes = {
  /** Sets the vertical rhythm for each row */
  rowSpacing: PropTypes.oneOf(['4', '8', '16', '20', '24', '28', '32', '40']),
  /** Data representing form fields */
  fieldsets: PropTypes.arrayOf(PropTypes.array),
};

FormGenerator.defaultProps = {
  rowSpacing: null,
  fieldsets: [],
};

export default FormGenerator;
