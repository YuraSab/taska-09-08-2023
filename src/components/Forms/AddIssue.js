import React, {useEffect, useState} from 'react';

const AddIssue = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");


    const getToken = () => {
    //    gets token
    }


    const handleAddIssue = () => {
        if (title !== "" && description !== "") {
            const issue = {
                // project_data: something about project,
                title,
                description,
                issue_on: date,
                // filename: idk,
            };

            const Token = getToken();

            const response = fetch("url", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: Token
                },
                body: JSON.stringify(issue)
            });

        //     response returns "issue" and "issue files"
        //     redirect on Drawing.jsx
        }
    }

    const handleChangeData = (propData) => {
        let month = propData.getUTCMonth() + 1;
        let day = propData.getUTCDate();
        let year = propData.getUTCFullYear();
        setDate(`${day}/${month}/${year}`);
    }

    useEffect(() => {
        getToken();
    }, []);



    return (
        <div>
            <h3>Title</h3>
            <input
                type={"text"}
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            <h3>Description</h3>
            <input
                type={"text"}
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />

            <h3>Date</h3>
            <input
                type={"date"}
                value={description}
                onChange={(event) => handleChangeData(event)}
            />

            <div>
                <button onClick={() => handleAddIssue()}>Add issue</button>
            </div>
        </div>
    );
};

export default AddIssue;