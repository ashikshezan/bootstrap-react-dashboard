import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Button, Col, Form } from 'react-bootstrap'
import { useRef } from 'react';
import { UserContext } from '../Context';

function UserForm({ preFillValue, setModalShow, setPreFillValue }) {
    const { dispatch } = useContext(UserContext)
    const { register, handleSubmit, setValue } = useForm();

    const onSubmit = (values) => {
        if (preFillValue) {
            values.id = preFillValue.id
            dispatch({ type: "UPDATE-USER", payload: values })
            setPreFillValue(null)
        }
        else {
            values.id = Date.now() % 1000
            dispatch({ type: "ADD-USER", payload: values })
            console.log('--------------------->', values);
        }
        setModalShow(false)


    }

    // For debugging
    const renderCount = useRef(1)


    useEffect(() => {
        // For debugging
        renderCount.current = renderCount.current + 1

        if (preFillValue) {
            setValue("name", preFillValue.name)
            setValue("office", preFillValue.office)
            setValue("salary", preFillValue.salary)
            setValue("start_date", preFillValue.start_date)
            setValue("age", Number(preFillValue.age))

        }
    }, [preFillValue, setValue])
    return (

        <div className="row">
            {console.log('////////////////////', preFillValue)}
            <div className="col">
                <div className="mb-4">
                    {preFillValue
                        ? <h3>Updating Account</h3>
                        : <h3>Creating New Account</h3>
                    }
                </div>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="name" type="text" placeholder="Enter email" ref={register} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formBasicOffice">
                            <Form.Label>Office</Form.Label>
                            <Form.Control name="office" type="text" placeholder="" ref={register} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>

                        <Form.Group as={Col} controlId="formBasicAge">
                            <Form.Label>Age</Form.Label>
                            <Form.Control name="age" type="number" placeholder="" ref={register} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formStartDate">
                            <Form.Label>Start Date</Form.Label>
                            <Form.Control name="start_date" type="text" placeholder="" ref={register} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formSalary">
                            <Form.Label>Salary</Form.Label>
                            <Form.Control name="salary" type="text" placeholder="" ref={register} />
                        </Form.Group>
                    </Form.Row>

                    <Button variant="primary" type="submit">{preFillValue ? "Update" : "Submit"}</Button>
                </Form>
                {console.log("Form RENDERED", renderCount.current, "times")}
            </div>

        </div>

    );
}

export default UserForm