import React from "react";
import '../styles/GeneralStyle.css';
import avatar from '../assets/img/avatar.jpg';

class GeneralInformation extends React.Component {
    constructor() {
        super();

        this.state = {
            editStatus: false,
            values: {
                fullname: "",
                occupation: "",
                country: "",
                city: "",
                email: "",
                phone: ""
            },
            information : {
                fullname: "Full Name",
                occupation: "Occupation",
                country: "Country",
                city: "City",
                email: "Email",
                phone: "Phone"
            }
        }

        this.handleEdit = this.handleEdit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleEdit() {
        this.setState({
            editStatus: true,
            values: {
                fullname: this.state.information.fullname,
                occupation: this.state.information.occupation,
                country: this.state.information.country,
                city: this.state.information.city,
                email: this.state.information.email,
                phone: this.state.information.phone 
            }
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

    handleUpdate() {
        this.setState({
            information: {
                fullname: this.state.values.fullname,
                occupation: this.state.values.occupation,
                country: this.state.values.country,
                city: this.state.values.city,
                email: this.state.values.email,
                phone: this.state.values.phone 
            },
            editStatus: false
        })
    }

    handleCancel() {
        this.setState({
            editStatus: false
        }) 
    }
    
    render() {
        const {editStatus,values, information} = this.state; 
        return (
            <>
                {editStatus ? 
                    <div className="general-container">
                
                        <section className="contents">
                            <div className="general-main-content">
                                <img src={avatar} alt="user-avatar" />
                                <input type="text" placeholder="Full Name" value={values.fullname} name="fullname" onChange={this.handleChange}/>
                                <input type="text" placeholder="Occupation" value={values.occupation} name="occupation" onChange={this.handleChange}/>
                            </div>
                            <div className="general-unessential-content">
                                <input type="text" placeholder="Country" value={values.country} name="country" onChange={this.handleChange}/>
                                <input type="text" placeholder="City" value={values.city} name="city" onChange={this.handleChange}/>
                                <input type="text" placeholder="Email" value={values.email} name="email" onChange={this.handleChange}/>
                                <input type="text" placeholder="Phone" value={values.phone} name="phone" onChange={this.handleChange}/>
                            </div>
                        </section>

                        <section className="btn-container">
                            <button onClick={this.handleUpdate} className="update-btn">Update</button>
                            <button onClick={this.handleCancel} className="cancel-btn">Cancel</button>
                        </section>

                    </div>
                    :
                    <div className="general-container">
                
                        <section className="contents">
                            <div className="general-main-content">
                                <img src={avatar} alt="user-avatar" />
                                <h1>{information.fullname}</h1>
                                <p>{information.occupation}</p>
                            </div>
                            <div className="general-unessential-content">
                                <p><b>Country:</b> {information.country}</p>
                                <p><b>City:</b> {information.city}</p>
                                <p><b>Email:</b> {information.email}</p>
                                <p><b>Phone:</b> {information.phone}</p>
                            </div>
                        </section>
                        <section className="btn-container">
                            <button onClick={this.handleEdit} className="edit-btn">Edit</button>
                        </section>

                    </div>
                }
            </>
            
        )
    }
}

export default GeneralInformation;