import React from "react";
import EmployeeTable from "./components/EmployeeTable";
import Searchform from "./components/Searchform";

import API from "./utils/API";
import "./App.css"


// import compontents here
class App extends React.Component {
    state = {
        employees: [],
        search: "",
        results: []
    };

    componentDidMount() { 

        API.getAllEmployees()
            .then(res => this.setState({
                employees: res.data.results.map((emp, id) => ({
                    name: emp.name,
                    email: emp.email,
                    phone: emp.phone,
                    age: emp.dob.age,
                    picture: emp.picture.thumbnail,
                    key: id
                })),
            }))
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const value = event.target.value;
        this.setState({
           
            search: event.target.value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const {search} = this.state
        let results = this.state.employees.filter(item => {
            return `${item.name.first} ${item.name.last}`.includes(search) || item.email.includes(search) || item.phone.includes(search) 
        })
        console.log(results)
        this.setState({results})
       
    };



    
    render() {
        return (
            <div className="body">
                <header>
                  <h1 id='title'>Employee Search Engine</h1>
                </header>
                <Searchform
                
                    search={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
                <EmployeeTable
                    employees={this.state.results.length > 0 ? this.state.results : this.state.employees} />

            </div>
        );
    }





}

export default App;