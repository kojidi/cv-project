import React from "react";
import Educations from "./Educations";
import '../styles/EducationalStyle.css';
import uniqid from 'uniqid';

class EducationalInformation extends React.Component {
    constructor() {
        super();

        this.state = {
            addingStatus: false,
            values: {
                id: uniqid(),
                university: "",
                fromYear: "",
                toYear: "",
                degree: "",
                grade: "",
            },
            edus: [],
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleAddingStatus = this.handleAddingStatus.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleAdding = this.handleAdding.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleAddingStatus() {
        this.setState(prevState => ({
            addingStatus: true,
            values: {                  
                ...prevState.values,    
                university: "",
                fromYear: "",
                toYear: "",
                degree: "",
                grade: "",      
            }
        }))
    }

    handleCancel() {
        this.setState({
            addingStatus: false
        })
    }

    handleChange(e) {
        this.setState(prevState => ({
            values: {                  
                ...prevState.values,    
                [e.target.name]: e.target.value      
            }
        }))
    }

    handleAdding() {
        this.setState({
            edus: this.state.edus.concat(this.state.values),
            values: {
                id: uniqid(),
                university: "",
                fromYear: "",
                toYear: "",
                degree: "",
                grade: ""
            },
            addingStatus: false
        })
    }

    handleDelete(e) {
        if(window.confirm("Are you sure")) {
            const result = this.state.edus.filter(d => {
                return d.id !== e.target.name
            })
            this.setState({
                edus: result
            })
        }
    }
    
    render() {
        const {addingStatus, values, edus} = this.state;
        return (
            <div className="edu-container">
                <h2>Education: </h2>
                <Educations data={edus} handleDeleteEdu={this.handleDelete}/>

                {!addingStatus ? 
                    <button className="btn add-btn" onClick={this.handleAddingStatus}>+Add</button>
                
                :
                    <div className="add-edu">
                        <div className="left-inputs">
                            <label htmlFor="university">University's Name: </label>
                            <input id="university" placeholder="Enter the name ..." value={values.university} name="university" onChange={this.handleChange}/>
                            <div className="year-inputs">
                                <label htmlFor="from-year">From: </label>
                                <input id="from-year" placeholder="YYYY" value={values.fromYear} name="fromYear" onChange={this.handleChange}/>
                                <label htmlFor="to-year">To: </label>
                                <input id="to-year" placeholder="YYYY" value={values.toYear} name="toYear" onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="right-inputs">
                            <label htmlFor="degree">Degree: </label>
                            <input id="degree" placeholder="Your Degree" value={values.degree} name="degree" onChange={this.handleChange}/>
                            <label htmlFor="grade">Grade: </label>
                            <input id="grade" placeholder="Your Final Grade" value={values.grade} name="grade" onChange={this.handleChange}/>

                            <div className="adding-btns">
                                <button className="btn add-btn" onClick={this.handleAdding}>Add</button>
                                <button className="btn cancel-btn" onClick={this.handleCancel}>Cancel</button>
                            </div>
                        </div>
                    </div>
                }

            </div>  
        )
    }
}

export default EducationalInformation;