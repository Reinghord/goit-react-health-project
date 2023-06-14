import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import { number } from 'prop-types';
// import * as yup from 'yup';
// import { Modal } from '../Modal';

// let schema = yup.object({
// });

function CalculatorCalorieForm() {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const startValue = {
    height: '',
    age: '',
    currentWeight: '',
    cesiredWeight: '',
    BloodType: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    resetForm();
    // dispatch(calorieCalc(values));
    openModal();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      {/* <Header>Calculate your daily calorie intake right now</Header> */}
      <Formik
        onSubmit={handleSubmit}
        // validationSchema={schema}
        initialValues={startValue}
      >
        <Form>
          {/* <Input type="number" name="height" placeholder="Height *" /> */}
          <ErrorMessage name="height" component="div" />

          {/* <Input type="number" name="age" placeholder="Age *" /> */}
          <ErrorMessage name="age" component="div" />

          {/* <Input
            type="number"
            name="currentWeight"
            placeholder="Current weight *"
          /> */}
          <ErrorMessage name="currentWeight" component="div" />

          {/* <Input
            type="number"
            name="desiredWeight"
            placeholder="Desired weight *"
          /> */}
          <ErrorMessage name="desiredWeight" component="div" />

          <Field component="div" name="bloodType">
            <input
              type="radio"
              id="bloodType1"
              // defaultChecked={values.bloodType === '1'}
              name="bloodType"
              value="1"
            />

            <label htmlFor="type1">Blood type 1</label>
            <input
              type="radio"
              id="bloodType2"
              // defaultChecked={values.bloodType === '2'}
              name="bloodType"
              value="2"
            />

            <label htmlFor="type2">Blood type 2</label>
            <input
              type="radio"
              id="bloodType3"
              // defaultChecked={values.bloodType === '3'}
              name="bloodType"
              value="3"
            />
            <label htmlFor="type3">Blood type 3</label>

            <input
              type="radio"
              id="bloodType4"
              // defaultChecked={values.bloodType === '4'}
              name="bloodType"
              value="4"
            />
            <label htmlFor="type4">Blood type 4</label>
          </Field>
          <ErrorMessage name="bloodType" component="div" />

          {/* <Button type="submit">Start losing weight</Button> */}

          {/* {isModalOpen && <Modal />} */}
        </Form>
      </Formik>
    </>
  );
}

export default CalculatorCalorieForm;
