import CardExample from "./CardExample";
import ChartExample from "./ChartExample";
import TableExample from "./TableExample";
import Form from './Form'
import { UserContext } from "../Context";
import { useContext } from "react";


const DashboardContent = () => {

    const context = useContext(UserContext)

    return (
        <main>
            {/* {console.log("CONTEXT TESTING:", context)} */}
            <div className="container-fluid">
                <h1 className="mt-4">Dashboard</h1>
                <ol className="breadcrumb mb-4">
                    <li className="breadcrumb-item active">Dashboard</li>
                </ol>
                {/* <CardExample /> */}
                {/* <ChartExample /> */}
                <TableExample />
            </div>
        </main>

    );
}

export default DashboardContent;