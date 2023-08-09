import React, {useState} from 'react';


const AddFile = () => {

    const [description, setDescription] = useState("");

    const getToken = () => {
        //    gets token
    }


    const handleAddFile = () => {
        if (description !== ""
        // sth about file...
        ) {
            const file = {
                // project_data: something about project,
                // issue_id: issue_id, - idk
                description,
                // filename: idk,
            };

            const Token = getToken();

            const response = fetch("url", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: Token
                },
                body: JSON.stringify(response)
            });

            //     response returns "issue file object"
            //     redirect on Drawing.jsx
        }
    }


    return (
        <div>
            <div>
                <h3>Description</h3>
                <input
                    type={"text"}
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />

                <button onClick={() => handleAddFile()}>Add file</button>
            </div>


        </div>
    );
};

export default AddFile;