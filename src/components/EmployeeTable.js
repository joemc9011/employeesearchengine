import React from "react";
import EmployeeTableHeaders from "./EmployeeTableHeaders";
import "./fulltable.css"


function EmployeeRow({data}) {
    return (
        <tr className = "tablerowbody">
        <td> {`${data.name.first} ${data.name.last}`}</td>
            <td>{data.email}</td>
            <td>{data.phone}</td>
            <td>{data.age}</td>
        </tr>
    )
}


 function EmployeeTable({employees}) {
    return (
        <table className="tablebody">
            <EmployeeTableHeaders />
            <tbody>
            {
                employees.map((employee) => {
                    return <EmployeeRow data={employee}/>
                })
            }
            </tbody>
        </table>
    );
}

export default EmployeeTable