Form Validation can be easily set up using [Formik](https://jaredpalmer.com/formik) and [Yup](https://www.npmjs.com/package/yup). The example below demonstrates how these libraries can be tied into any form component.

```jsx
import { useState } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import {
  Button,
  Dropdown,
  FileUpload,
  FormField,
  CheckOption,
  RangeSlider,
} from '@alaneicker/atomik-ui';

const [sendNotifications, setSendNotifications] = useState(false);

const validationSchema = yup.object().shape({
  first_name: yup.string().required('First name is required'),
  last_name: yup.string().required('Last name is required'),
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Please enter your email'),
  phone: yup.string().required('Phone is required'),
  level_of_experience: yup.string().required('Level of experience is required'),
  salary_range: yup
    .number()
    .required('Salary range is required')
    .moreThan(100000, 'Common! You deserve a better salary!'),
  file_upload: yup
    .mixed()
    .required('A file is required')
    .test('fileFormat', 'The file selected was not a PDF', (value) => {
      console.log('FILE:', value);
      return value && ['application/pdf'].includes(value.type);
    }),
});

const initialValues = {
  first_name: 'Alan',
  last_name: '',
  email: '',
  phone: '',
  level_of_experience: 'Mid Level',
  salary_range: '100000',
};

const {
  handleSubmit,
  handleChange,
  values,
  errors,
  setFieldValue,
  touched,
} = useFormik({
  initialValues,
  validationSchema,
  onSubmit: (values) => {
    const formData = { ...values, sendNotifications };
    console.log(formData);
  },
});

<form
  onSubmit={handleSubmit}
  noValidate
  autoComplete="off"
  style={{ maxWidth: '500px', margin: '0 auto' }}
>
  <fieldset>
    <legend className="margin-bottom-24">Applicant Information</legend>
    <div className="margin-bottom-24">
      <FormField
        name="first_name"
        label="First Name"
        defaultValue={values.first_name}
        onChange={handleChange}
        hasError={!!(errors.first_name && touched.first_name)}
        errorText={errors.first_name}
      />
    </div>
    <div className="margin-bottom-24">
      <FormField
        name="last_name"
        label="Last Name"
        defaultValue={values.last_name}
        onChange={handleChange}
        hasError={!!(errors.last_name && touched.last_name)}
        errorText={errors.last_name}
      />
    </div>
    <div className="margin-bottom-24">
      <FormField
        name="email"
        label="Email address"
        defaultValue={values.email}
        onChange={handleChange}
        hasError={!!(errors.email && touched.email)}
        errorText={errors.email}
      />
    </div>
    <div className="margin-bottom-24">
      <FormField
        name="phone"
        label="Phone Number"
        mask="(999) 999-9999"
        defaultValue={values.phone}
        onChange={handleChange}
        hasError={!!(errors.phone && touched.phone)}
        errorText={errors.phone}
      />
    </div>
    <div className="margin-bottom-24">
      <Dropdown
        name="level_of_experience"
        label="Level of Experience"
        errorText="Please select a color"
        defaultValue={values.level_of_experience}
        onChange={handleChange}
        hasError={!!(errors.level_of_experience && touched.level_of_experience)}
        errorText={errors.level_of_experience}
        options={[
          { text: 'Junior Level', value: 'Junior Level' },
          { text: 'Mid Level', value: 'Mid Level' },
          { text: 'Senior Level', value: 'Senior Level' },
          { text: 'Manager Level', value: 'Manager Level' },
        ]}
      />
    </div>
    <div className="margin-bottom-24">
      <RangeSlider
        name="salary_range"
        label="Salary Range"
        hasError={!!(errors.salary_range && touched.salary_range)}
        errorText={errors.salary_range}
        min="100000"
        max="500000"
        step="100000"
        value={values.salary_range}
        onChange={(value) => setFieldValue('salary_range', value)}
        ticks={[
          { text: '$100k', val: '100000' },
          { text: '$200k', val: '200000' },
          { text: '$300k', val: '300000' },
          { text: '$400k', val: '400000' },
          { text: '$500k', val: '500000' },
        ]}
      />
    </div>
    <div className="margin-bottom-24 padding-top-24">
      <FileUpload
        name="file_upload"
        label="Upload Resume"
        uploadBtnTheme="primary"
        onChange={(files) => setFieldValue('file_upload', files[0])}
        helpText="PDF format only"
        errorText={errors.file_upload}
        hasError={!!errors.file_upload}
      />
    </div>
    <div className="margin-bottom-24 margin-top-24">
      <CheckOption
        name="notification_subscribe"
        label="Sign me up for job notifications"
        onChange={() => setSendNotifications(!sendNotifications)}
        checked={sendNotifications}
      />
    </div>
    <Button theme="primary" type="submit">
      Submit
    </Button>
  </fieldset>
</form>;
```
