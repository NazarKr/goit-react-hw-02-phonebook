import React from 'react';
import { Formik, Field, Form } from 'formik';
import { FilterContainer, FilterLabel, FilterField, } from './FilterContact.styled';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
    <FilterContainer>
        <Formik>
            <Form
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
        <FilterLabel>
            Find contacts by name
                    <Field
                        as={FilterField}
                        type="text"
                        placeholder="Search"
                        value={value}
                        onChange={onChange} />
                </FilterLabel>
        </Form>
        </Formik>
    </FilterContainer>
);

export default Filter;

Filter.propTypes = {
    value:  PropTypes.string.isRequired,
}