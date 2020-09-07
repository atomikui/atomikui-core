The FormGenerator is a presentational component that builds a form layout from data. It can be used once to create an entire form, or it can be used mulitple times to build out each section of a form (fieldsets).

### Basic Usage

```jsx
import { FormGenerator, FormField, Button } from '@alaneicker/atomik-ui';

const personalInfo = [
  [
    {
      Component: FormField,
      colProps: { sm: 12, md: 6, lg: 6 },
      name: 'firstName',
      label: 'First Name',
      onChange: (e) => console.log(e.target.value),
    },
  ],
  [
    {
      Component: FormField,
      colProps: { sm: 12, md: 6, lg: 6 },
      name: 'lastName',
      label: 'Last Name',
      onChange: (e) => console.log(e.target.value),
    },
  ],
  [
    {
      Component: FormField,
      colProps: { sm: 12, md: 2, lg: 2 },
      id: 'mi',
      name: 'mi',
      label: 'Middle Initial',
      onChange: (e) => console.log(e.target.value),
    },
  ],
  [
    {
      Component: FormField,
      colProps: { sm: 12, md: 6, lg: 6 },
      id: 'email',
      name: 'email',
      label: 'Email Address',
      onChange: (e) => console.log(e.target.value),
    },
  ],
  [
    {
      Component: FormField,
      colProps: { sm: 12, md: 6, lg: 6 },
      id: 'phone',
      name: 'phone',
      label: 'Phone Number',
      mask: '(999) 999-9999',
      onChange: (e) => console.log(e.target.value),
    },
  ],
  [
    {
      Component: Button,
      theme: 'primary',
      children: 'Submit',
      className: 'margin-top-8',
    },
  ],
];

<form autoComplete="off" noValidate>
  <h3 className="text-weight-bold text-size-20 margin-bottom-6">
    Personal Information
  </h3>
  <FormGenerator fieldsets={personalInfo} rowSpacing="8" />
</form>;
```

### Layout

The FormGenerator uses [React-Flexbox-Grid](http://roylee0704.github.io/react-flexbox-grid/) to handle the layout of the form. Each form field is wrapped in a column whose width can be controlled by the `colProps` property.

For example, `colProps: { sm: 12, md: 6, lg: 6 }` will set a form fields column to 12 on small devices and 6 on medium and large devices.

By default, `colProps` is set to `12` for all breakpoints if otherwise not specified.
<br /><br />

### Validation

The FormGenerator is a presentational component, thus validation needs to be handled separately. The example below demonstrates how to integrate [Formik](https://jaredpalmer.com/formik) and [Yup](https://www.npmjs.com/package/yup) with the FormGenerator.

**NOTE:** If you are using a third-party validator like Formik to handle your form's state, you must use `defaultValue` or `defaultChecked` to set the values of your form fields since React considers them uncontrolled.
<br /><br />

```jsx
import {
  FormGenerator,
  FormField,
  Button,
  DatePicker,
} from '@alaneicker/atomik-ui';
import * as yup from 'yup';
import { useFormik } from 'formik';

const [submittedFormData, setSubmittedFormData] = React.useState(null);

const initialValues = {
  firstName: '',
  lastName: '',
  date: '',
};

const validationSchema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  date: yup.string().required('Date is required'),
});

const {
  handleSubmit,
  handleChange,
  setFieldValue,
  values,
  errors,
  touched,
} = useFormik({
  initialValues,
  validationSchema,
  onSubmit: (formData) => {
    setSubmittedFormData(formData);
  },
});

const formfields = [
  [
    {
      Component: FormField,
      colProps: { sm: 12, md: 6, lg: 6 },
      name: 'firstName',
      label: 'First Name',
      defaultValue: values.firstName,
      hasError: !!errors.firstName && touched.firstName,
      errorText: errors.firstName,
      onChange: handleChange,
    },
  ],
  [
    {
      Component: FormField,
      colProps: { sm: 12, md: 6, lg: 6 },
      name: 'lastName',
      label: 'Last Name',
      defaultValue: values.lastName,
      hasError: !!errors.lastName && touched.lastName,
      errorText: errors.lastName,
      onChange: handleChange,
    },
  ],
  [
    {
      Component: DatePicker,
      colProps: { sm: 12, md: 6, lg: 6 },
      name: 'date',
      label: 'Select a Date',
      defaultValue: values.date,
      hasError: !!errors.date && touched.date,
      errorText: errors.date,
      onChange: (date) => setFieldValue('date', date),
    },
  ],
  [
    {
      Component: Button,
      type: 'submit',
      theme: 'primary',
      children: 'Submit',
      className: 'margin-top-8',
    },
  ],
];

<>
  {submittedFormData && (
    <div className="margin-bottom-16">
      <div className="text-color-green-200 text-weight-semibold">
        Form Submitted!
      </div>
      {JSON.stringify(submittedFormData)}
    </div>
  )}
  <form onSubmit={handleSubmit} autoComplete="off" noValidate>
    <FormGenerator fieldsets={formfields} rowSpacing="8" />
  </form>
</>;
```
