import React from "react";
import { Formik, Form, Field } from 'formik';
import { Row, Col, Button } from 'reactstrap';

export default function SearchForm(props) {
  let characters = props.characters;
  let setDisplayedCharacters = props.setDisplayedCharacters;

  const filterResults = (criteria) => {
    let filteredResults = characters.filter(character => character.name.includes(criteria));
    console.log(filteredResults);
    setDisplayedCharacters(filteredResults);
  }

  return (
    <Row>
      <Col xs="12" className="search-form d-flex justify-content-center my-3">
      <Formik
        initialValues={{ search: '' }}
        onSubmit={(values, actions) => {
          filterResults(values.search);
          setTimeout(() => {
            actions.setSubmitting(false);
          }, 1000);
        }}
        render={props => (
          <Form className="form-inline">
            <Field type="text" name="search" placeholder="Search" className="form-control" />
            <Button color="info" type="submit">Submit</Button>
          </Form>
        )}
      />
      </Col>
    </Row>
  );
}
