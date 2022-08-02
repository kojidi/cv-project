import React from "react";
import Educations from "./Educations";
import '../styles/EducationalStyle.css';
import uniqid from 'uniqid';

class EducationalInformation extends React.Component {
    constructor() {
        super();

        this.state = {
            addingStatus: false,
            editingStatus: false,
            values: {
                id: uniqid(),
                title: "",
                university: "",
                fromYear: "",
                toYear: "",
                degree: "",
                grade: ""
            },
            editValues: {
                id: "",
                title: "",
                university: "",
                fromYear: "",
                toYear: "",
                degree: "",
                grade: "",
                row: ""
            },
            edus: [],
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleAddingStatus = this.handleAddingStatus.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleAdding = this.handleAdding.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEditEdu = this.handleEditEdu.bind(this);
        this.handleEditChange = this.handleEditChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleAddingStatus() {
        this.setState(prevState => ({
            editingStatus: false,
            addingStatus: true,
            values: {                  
                ...prevState.values,
                title: "",    
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
            addingStatus: false,
            editingStatus: false
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
                title: "",
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

    handleEditEdu(e) {
        const intendedEdu = this.state.edus.filter(d => d.id === e.target.name)[0]
        this.setState({
            addingStatus: false,
            editingStatus: true,
            editValues: {
                id: intendedEdu.id,
                title: intendedEdu.title,
                university: intendedEdu.university,
                fromYear: intendedEdu.fromYear,
                toYear: intendedEdu.toYear,
                degree: intendedEdu.degree,
                grade: intendedEdu.grade,
                row: e.target.dataset.row
            },

        })
    }

    handleEditChange(e) {
        this.setState(prevState => ({
            editValues : {
                ...prevState.editValues,
                [e.target.name]: e.target.value
            }
        }))
    }

    handleUpdate() {
        this.state.edus.map(e => {
            if(e.id === this.state.editValues.id) {
                e.title = this.state.editValues.title;
                e.university = this.state.editValues.university;
                e.fromYear = this.state.editValues.fromYear;
                e.toYear = this.state.editValues.toYear;
                e.degree = this.state.editValues.degree;
                e.grade = this.state.editValues.grade;
            }
        })
        this.setState({
            editingStatus: false
        })
        // console.log("Update");
    }
    
    render() {
        const {addingStatus, values, editValues, edus, editingStatus} = this.state;
        console.log(edus);
        return (
            <div className="edu-container">
                <h2>Education: </h2>

                {editingStatus ? 
                    <div className="edu-forms-container">
                        <p>You're editing <b>{edus.filter(e => e.id === editValues.id)[0].title}</b></p>
                        
                        <div className="add-edu update-edu">
                            <div className="left-inputs">
                                <label htmlFor="title"><b>Title:</b> </label>
                                <input id="title" placeholder="Enter the title" value={editValues.title} name="title" onChange={this.handleEditChange}/>
                                <label htmlFor="university"><b>University's Name:</b> </label>
                                <input id="university" placeholder="Enter the name ..." value={editValues.university} name="university" onChange={this.handleEditChange}/>
                                <label htmlFor="degree"><b>Degree:</b> </label>
                                <input id="degree" placeholder="Your Degree" value={editValues.degree} name="degree" onChange={this.handleEditChange}/>

                            </div>
                        
                            <div className="right-inputs">
                                <label htmlFor="from-year"><b>From:</b> </label>
                                <input id="from-year" placeholder="YYYY" value={editValues.fromYear} name="fromYear" onChange={this.handleEditChange}/>
                                <label htmlFor="to-year"><b>To:</b> </label>
                                <input id="to-year" placeholder="YYYY" value={editValues.toYear} name="toYear" onChange={this.handleEditChange}/>
                                <label htmlFor="grade"><b>Grade:</b> </label>
                                <input id="grade" placeholder="Your Final Grade" value={editValues.grade} name="grade" onChange={this.handleEditChange}/>
                            </div>
                        </div>
                        <div className="adding-btns">
                            <button className="btn add-btn" onClick={this.handleUpdate}>Update</button>
                            <button className="btn cancel-btn" onClick={this.handleCancel}>Cancel</button>
                        </div>
                    </div>
                :
                    null
                }

                <Educations data={edus} handleDeleteEdu={this.handleDelete} handleEditEdu={this.handleEditEdu}/>

                {!addingStatus ? 
                    <button className="btn add-btn" onClick={this.handleAddingStatus}>+Add</button>
                
                :
                
                <div className="edu-forms-container">
                    <div className="add-edu">
                        <div className="left-inputs">
                            <label htmlFor="title"><b>Title:</b> </label>
                            <input id="title" placeholder="Enter the title" value={values.title} name="title" onChange={this.handleChange}/>
                            <label htmlFor="university"><b>University's Name:</b> </label>
                            <input id="university" placeholder="Enter the name ..." value={values.university} name="university" onChange={this.handleChange}/>
                            <label htmlFor="degree"><b>Degree:</b> </label>
                            <input id="degree" placeholder="Your Degree" value={values.degree} name="degree" onChange={this.handleChange}/>
                        </div>
                        <div className="right-inputs">
                            <label htmlFor="from-year"><b>From:</b> </label>
                            <input id="from-year" placeholder="YYYY" value={values.fromYear} name="fromYear" onChange={this.handleChange}/>
                            <label htmlFor="to-year"><b>To:</b> </label>
                            <input id="to-year" placeholder="YYYY" value={values.toYear} name="toYear" onChange={this.handleChange}/>
                            <label htmlFor="grade"><b>Grade:</b> </label>
                            <input id="grade" placeholder="Your Final Grade" value={values.grade} name="grade" onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="adding-btns">
                        <button className="btn add-btn" onClick={this.handleAdding}>Add</button>
                        <button className="btn cancel-btn" onClick={this.handleCancel}>Cancel</button>
                    </div>
                </div>
                }

            </div>  
        )
    }
}

export default EducationalInformation;