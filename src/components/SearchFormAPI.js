import React from "react";
import { Formik, Form, Field } from 'formik';
import { Row, Col, Button } from 'reactstrap';

export default function SearchForm(props) {
  let currentPage = props.currentPage;
  let setCurrentPage = props.setCurrentPage;

  const filterResults = (criteria) => {
    setCurrentPage(`https://rickandmortyapi.com/api/character/?name=${criteria}`);
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
            <Field type="text" name="search" placeholder="Search by name" className="form-control" />
            <Button color="info" type="submit">Search Entire Catalog</Button>
          </Form>
        )}
      />
      </Col>
    </Row>
  );
}
