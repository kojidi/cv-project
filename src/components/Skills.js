import React from "react";
import '../styles/Educations.css';
import '../styles/Skills.css';

class Skills extends React.Component {
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
                        <div>
                            <p><b>{e.title}</b></p>
                        </div>
                        <div className="skills-btn">
                            <button data-row={e.title} name={e.id} onClick={handleEditEdu} className="edit-btn skills">Edit</button>
                            <button name={e.id} onClick={handleDeleteEdu} className="delete-btn skills">Delete</button>
                        </div>
                    </div>
                ))}
                
            </div>
        )
    }
}

export default Skills