import React from "react";
import '../styles/Educations.css';

class Jobs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {data, handleDeleteEdu, handleEditEdu} = this.props;
        return (
            <div className="edulist-container">

                {data.map((e, i) => (
                    <div key={e.id} className="eduitems">
                        <div className="row">
                            <h3>{i + 1}</h3>
                        </div>
                        <div className="long-contents">
                            <p><b>Company:</b> {e.title}</p>
                            <p><b>City:</b> {e.university}</p>
                            <p><b>Role:</b> {e.degree}</p>
                        </div>
                        <div>
                            <p><b>From Year:</b> {e.fromYear}</p>
                            <p><b>To Year:</b> {e.toYear}</p>
                            <p><b>Description:</b> {e.grade}</p>
                        </div>
                        {/* <div className="grade">
                        </div> */}
                        <div className="btns-container">
                            <button data-row={e.title} name={e.id} onClick={handleEditEdu} className="edit-btn">Edit</button>
                            <button name={e.id} onClick={handleDeleteEdu} className="delete-btn">Delete</button>
                        </div>
                    </div>
                ))}
                
            </div>
        )
    }
}

export default Jobs