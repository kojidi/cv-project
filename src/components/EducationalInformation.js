import React from "react";
import Educations from "./Educations";
import '../styles/EducationalStyle.css';

class EducationalInformation extends React.Component {
    constructor() {
        super();

        this.state = {
            addingStatus: false,
            values: {
                id: 1,
                university: "",
                fromYear: "",
                toYear: "",
                degree: "",
                grade: "",
            },
            edus: [],
        }

        this.handleAddingStatus = this.handleAddingStatus.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleAdding = this.handleAdding.bind(this);
        this.addUniversity = this.addUniversity.bind(this);
        this.addFromYear = this.addFromYear.bind(this);
        this.addToYear = this.addToYear.bind(this);
        this.addDegree = this.addDegree.bind(this);
        this.addGrade = this.addGrade.bind(this);
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

    addUniversity(e) {
        this.setState(prevState => ({
            values: {                  
                ...prevState.values,    
                university: e.target.value      
            }
        }))
    }

    addFromYear(e) {
        this.setState(prevState => ({
            values: {                  
                ...prevState.values,    
                fromYear: e.target.value      
            }
        }))
    }

    addToYear(e) {
        this.setState(prevState => ({
            values: {                  
                ...prevState.values,    
                toYear: e.target.value      
            }
        }))
    }

    addDegree(e) {
        this.setState(prevState => ({
            values: {                  
                ...prevState.values,    
                degree: e.target.value      
            }
        }))
    }

    addGrade(e) {
        this.setState(prevState => ({
            values: {                  
                ...prevState.values,    
                grade: e.target.value      
            }
        }))
    }

    handleAdding() {
        this.setState({
            edus: this.state.edus.concat(this.state.values),
            values: {
                id: this.state.id + 1,
                university: "",
                fromYear: "",
                toYear: "",
                degree: "",
                grade: ""
            },
            addingStatus: false
        })
    }
    
    render() {
        const {addingStatus, values, edus} = this.state;
        return (
            <div className="edu-container">
                <h1>Education: </h1>
                <Educations data={edus}/>

                {!addingStatus ? 
                    <button className="btn add-btn" onClick={this.handleAddingStatus}>+Add</button>
                
                :
                    <div className="add-edu">
                        <div className="left-inputs">
                            <label htmlFor="university">University's Name: </label>
                            <input id="university" placeholder="Enter the name ..." value={values.university} onChange={this.addUniversity}/>
                            <div className="year-inputs">
                                <label htmlFor="from-year">From: </label>
                                <input id="from-year" placeholder="YYYY" value={values.fromYear} onChange={this.addFromYear}/>
                                <label htmlFor="to-year">To: </label>
                                <input id="to-year" placeholder="YYYY" value={values.toYear} onChange={this.addToYear}/>
                            </div>
                        </div>
                        <div className="right-inputs">
                            <label htmlFor="degree">Degree: </label>
                            <input id="degree" placeholder="Your Degree" value={values.degree} onChange={this.addDegree}/>
                            <label htmlFor="grade">Grade: </label>
                            <input id="grade" placeholder="Your Final Grade" value={values.grade} onChange={this.addGrade}/>

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