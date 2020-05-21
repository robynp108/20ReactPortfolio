import React from "react";

function Project(props) {
    const styles = {
        width: "40rem",
        padding: "10px",
        margin: 10,
        flex: 1
    }
    return (
        <div className="card" style={styles}>
            <img src={process.env.PUBLIC_URL + props.image} className="card-img-top" alt={props.alt} />
            <div ClassName="card-body">
                <h5 ClassName="card-title">{props.title}</h5>
                <p ClassName="card-text">{props.text}</p>
                <a href={props.deployed} target="_blank"
                    ClassName="btn btn-primary">Deployed App</a>
                <br />
                <a href={props.repo} target="_blank">GitHub Repo</a>
            </div>
        </div>
    );
}

export default Project;