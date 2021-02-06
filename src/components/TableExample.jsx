import { useContext, useState } from 'react';
import { Dropdown, ButtonGroup, Button } from 'react-bootstrap'
import { UserContext } from '../Context';


import ModalForm from './ModalForm';

const TableExample = () => {
    const { state } = useContext(UserContext)

    const [preFillValue, setPreFillValue] = useState(null);

    //Modal state
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <ModalForm
                show={modalShow}
                onHide={() => setModalShow(false)}
                preFillValue={preFillValue}
                setModalShow={setModalShow}
                setPreFillValue={setPreFillValue}

            />
            <div className="card mb-4">
                <div className="card-header">
                    <i className="fas fa-table mr-1" />
DataTable Example
</div>
                <div className="card-body">
                    <Button onClick={() => setModalShow(true)} className="mb-3">Creacte Account</Button>
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th>
                                    <th>Salary</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th>
                                    <th>Salary</th>
                                    <th>Action</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                <Cells userData={state.userList} setModalShow={setModalShow} setPreFillValue={setPreFillValue} />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>

    );
}

export default TableExample;

const Cells = ({ userData, setPreFillValue, setModalShow }) => {

    const handlEdit = (data) => {
        setPreFillValue(data)
        setModalShow(true)
    }


    return userData.slice(0, 10).map(data => {
        return <tr key={data.id}>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.office}</td>
            <td>{data.age}</td>
            <td>{data.start_date}</td>
            <td>{data.salary}</td>
            <td>
                <Dropdown as={ButtonGroup}>
                    <Dropdown.Toggle split variant="primary" id="dropdown-custom-2" />
                    <Dropdown.Menu className="">
                        <Dropdown.Item eventKey="1" onSelect={() => handlEdit(data)}>Edit</Dropdown.Item>
                        {/* <Dropdown.Item eventKey="2" onSelect={()}>Remove</Dropdown.Item> */}
                    </Dropdown.Menu>
                </Dropdown>
            </td>
        </tr >
    })
}