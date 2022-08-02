import React from "react";
import Skills from "./Skills";
import '../styles/EducationalStyle.css'; 
import uniqid from 'uniqid';

class SkillsForm extends React.Component {
    constructor() {
        super();

        this.state = {
            addingStatus: false,
            editingStatus: false,
            values: {
                id: uniqid(),
                title: "",
            },
            editValues: {
                id: "",
                title: "",
                row: ""
            },
            skills: [],
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleAddingStatus = this.handleAddingStatus.bind(this);
        this.handleAdding = this.handleAdding.bind(this); 
        this.handleCancel = this.handleCancel.bind(this);
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
                title: ""       
            }
        }))
    }

    handleChange(e) {
        this.setState({
            values: {
                title: e.target.value,
                id: this.state.values.id
            }
        })
    }


    handleAdding() {
        this.setState({
            skills: this.state.skills.concat(this.state.values),
            values: {
                title: "",
                id: uniqid()
            },
            addingStatus: false
        })
    }

    handleCancel() {
        this.setState({
            addingStatus: false,
            editingStatus: false
        })
    }

    handleDelete(e) {
        this.setState({
            addingStatus: false,
            editingStatus: false
        })

        if(window.confirm("Are you sure")) {
            const result = this.state.skills.filter(d => {
                return d.id !== e.target.name
            })
            this.setState({
                skills: result
            })
        }
    }

    handleEditEdu(e) {
        const intendedSkill = this.state.skills.filter(d => d.id === e.target.name)[0]
        this.setState({
            addingStatus: false,
            editingStatus: true,
            editValues: {
                id: intendedSkill.id,
                title: intendedSkill.title,
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
        this.state.skills.map(e => {
            if(e.id === this.state.editValues.id) {
                e.title = this.state.editValues.title;
            }
        })
        this.setState({
            editingStatus: false
        })
    }

    render() {

        const {addingStatus, editingStatus, values, editValues, skills} = this.state

        return (
            <div className="edu-container skill-container">
                <h2>Skills: </h2>

                {editingStatus ? 
                    <div className="edu-forms-container">
                        <p>You're editing <b>{skills.filter(e => e.id === editValues.id)[0].title}</b></p>
                        
                        <div className="add-edu update-edu">
                            <div className="left-inputs">
                                <label htmlFor="title"><b>Title:</b> </label>
                                <input id="title" placeholder="Enter Skill Title" value={editValues.title} name="title" onChange={this.handleEditChange}/>
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

                <Skills data={skills} handleDeleteEdu={this.handleDelete} handleEditEdu={this.handleEditEdu}/>

                {!addingStatus ? 
                    <button className="btn add-btn" onClick={this.handleAddingStatus}>+Add</button>
                :
                
                <div className="edu-forms-container">
                    <div className="add-edu">
                        <div className="left-inputs">
                            <label htmlFor="title"><b>Title:</b> </label>
                            <input id="title" placeholder="Title of Skill" value={values.title} name="title" onChange={this.handleChange}/>
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

export default SkillsForm;