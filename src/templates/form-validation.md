```jsx
import * as yup from 'yup';
import { useFormik } from 'formik';
import {
  Button,
  Dropdown,
  FileUpload,
  FormField,
  FormOption,
  RangeSlider,
} from '@alaneicker/react-component-library';

const validationSchema = yup.object().shape({
  first_name: yup.string().required('First name is required'),
  last_name: yup.string().required('Last name is required'),
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Please enter your email'),
  phone: yup.string().required('Phone is required'),
  level_of_experience: yup.string().required('Level of experience is required'),
  salary_range: yup.string().required('Salary range is required'),
  file: yup
    .mixed()
    .required('A file is required')
    .test('fileFormat', 'PDF only', (value) => {
      return value && ['application/pdf'].includes(value.type);
    }),
});

const initialValues = {
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  level_of_experience: '',
  salary_range: '',
  file: '',
};

const { handleSubmit, handleChange, values, errors, touched } = useFormik({
  initialValues,
  validationSchema,
  onSubmit: (values) => {
    console.log(values);
  },
});

<form onSubmit={handleSubmit}>
  <fieldset>
    <legend className="margin-bottom-24">Applicant Information</legend>
    <div className="margin-bottom-24">
      <FormField
        name="first_name"
        label="First Name"
        value={values.first_name}
        onChange={handleChange}
        hasError={errors.first_name && touched.first_name}
        errorText={errors.first_name}
      />
    </div>
    <div className="margin-bottom-24">
      <FormField
        name="last_name"
        label="Last Name"
        value={values.last_name}
        onChange={handleChange}
        hasError={errors.last_name && touched.last_name}
        errorText={errors.last_name}
      />
    </div>
    <div className="margin-bottom-24">
      <FormField
        name="email"
        label="Email address"
        value={values.email}
        onChange={handleChange}
        hasError={errors.email && touched.email}
        errorText={errors.email}
      />
    </div>
    <div className="margin-bottom-24">
      <FormField
        name="phone"
        label="Phone Number"
        mask="(999) 999-9999"
        value={values.phone}
        onChange={handleChange}
        hasError={errors.phone && touched.phone}
        errorText={errors.phone}
      />
    </div>
    <div className="margin-bottom-24">
      <Dropdown
        name="level_of_experience"
        label="Level of Experience"
        errorText="Please select a color"
        value={values.level_of_experience}
        onChange={handleChange}
        hasError={errors.level_of_experience && touched.level_of_experience}
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
        hasError={errors.salary_range && touched.salary_range}
        errorText={errors.first_name}
        min="100000"
        max="500000"
        step="100000"
        value={values.salary_range}
        onChange={handleChange}
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
        name="file"
        label="Upload Resume"
        uploadBtnVariant="primary"
        onChange={handleChange}
        helpText="PDF format only"
        errorText={errors.file}
        hasError={errors.file && touched.file}
      />
    </div>
    <div className="margin-bottom-24 margin-top-24">
      <FormOption
        name="notification_subscribe"
        label="Sign me up for job notifications"
      />
    </div>
    <Button theme="primary" type="submit">
      Submit
    </Button>
  </fieldset>
</form>;
```
