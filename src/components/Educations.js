import React from "react";
import '../styles/Educations.css';

class Educations extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const edus = this.props.data;
        return (
            <div className="edulist-container">

                {edus.map(e => (
                    <div key={e.id} className="eduitems">
                        <div>
                            <p><b>University:</b> {e.university}</p>
                            <p><b>From Year:</b> {e.fromYear}</p>
                        </div>
                        <div>
                            <p><b>Degree:</b> {e.degree}</p>
                            <p><b>To Year:</b> {e.toYear}</p>
                        </div>
                        <div>
                            <p><b>Grade:</b> {e.grade}</p>
                            <button className="edit-btn">Edit</button>
                            <button name={e.id} onClick={this.props.handleDeleteEdu} className="delete-btn">Delete</button>
                        </div>
                    </div>
                ))}
                
            </div>
        )
    }
}

export default Educations