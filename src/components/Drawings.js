import React, {useEffect, useState} from 'react';
import AddIssue from "./Forms/AddIssue";
import AddFile from "./Forms/AddFile";
import IssueElement from "./ElementsOfList/IssueElement";
import FileElement from "./ElementsOfList/FileElement";

const Drawings = () => {

    // "issue" || "file" || ""
    const [adding, setAdding] = useState("");

    // mas of elements (from that drawings)
    const [issues, setIssues] = useState([]);
    const [files, setFiles] = useState([]);


    const handleAdd = (element) => {
        if (element === "issue") {
            if (adding === "issue") {
                setAdding("");
            }
            setAdding("issue");
        }
        else if (element === "file") {
            if (adding === "file") {
                setAdding("");
            }
            setAdding("file");
        }
    }


    const getIssues = async () => {
    //    getting issues
    };

    const getFiles = async () => {
        //    getting files
    };


    useEffect(async () => {
        getIssues();
        getFiles();
    }, []);


    return (
        <div>
            <div>
                <button onClick={() => handleAdd("issue")}>Add issue</button>
                <button onClick={() => handleAdd("file")}>Add file</button>
            </div>

            <div>
                {
                    adding === "issue" && <AddIssue/>
                }
                {
                    adding === "file" && <AddFile/>
                }
            </div>

            <div>
                {
                    issues.length &&
                    issues.map(el => <IssueElement element={el}/>)
                }
                {
                    files.length &&
                    files.map(el => <FileElement element={el}/>)
                }
            </div>


        </div>
    );
};

export default Drawings;