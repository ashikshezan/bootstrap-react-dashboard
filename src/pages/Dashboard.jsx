import React, { useReducer, useState } from 'react';
import DashboardContent from '../components/DashboardContent';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { UserContext } from '../Context';
import data from '../data.json'

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD-USER":
            return { ...state, userList: [action.payload, ...state.userList] }
        case "UPDATE-USER":
            return {
                ...state, userList: state.userList.map(item => {
                    if (item.id === action.payload.id) {
                        return action.payload
                    }
                    return item
                })
            }
        case "REMOVE-USER":
            return state
        default:
            return state
    }
}


const Dashboard = () => {

    // const [userList, setUserList] = useState(data)
    const [state, dispatch] = useReducer(reducer, { userList: data })
    return (
        <>
            <Navbar />
            <div id="layoutSidenav">
                <Sidebar />
                <div id="layoutSidenav_content">
                    <UserContext.Provider value={{ state, dispatch }}>
                        <DashboardContent />
                    </UserContext.Provider>
                    <Footer />
                </div>
            </div>
        </>

    );
}

export default Dashboard;
