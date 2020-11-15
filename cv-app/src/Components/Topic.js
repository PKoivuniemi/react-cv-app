import content  from '../cvContent.js';
import React, { useState, useEffect, useRef } from 'react';
import ContentEditor from './ContentEditor';

function Topic(props) {
    const [cvcontent, setContent] = useState(content[props.id]);
    const [editMode, setEditMode] = useState(false);
    


    useEffect(() => {
        console.log(cvcontent);
    });
    /*
    useEffect(() => {
        setContent(content[props.id]);
    }, content[props.id]);
    */
    
    const toggleEditMode = (e) => {
        e.preventDefault();
        setEditMode(!editMode);
    }
    const setCvData = (id, header, date, content) => {
        const tmp = cvcontent;
        if (tmp !== undefined && tmp.parts !== undefined) {
            tmp.parts[id].header = header;
            tmp.parts[id].date = date;
            tmp.parts[id].textcontent = content;
            setContent({ ...tmp });
            console.log("set new data to id " + id + ": header "
                + tmp.parts[id].header +
                ", date " + tmp.parts[id].date +
                ", content " + tmp.parts[id].textcontent);
            }
    }

    const removeCvData = (id) => {
        let tmp = cvcontent;
        tmp.parts = tmp.parts.filter(part => part !== tmp.parts[id]);
        setContent({ ...tmp });
     }

    function AddNewPart() {
        let tmp = cvcontent;
        if (tmp !== undefined && tmp.parts !== undefined)
        {
            tmp.parts = [...tmp.parts,
            {
                header: "Uusi otsikko",
                date: "Aikajakso",
                textcontent: "Lisää kuvaus"
            }];
            setContent({ ...tmp });
         }
     }
    
    return (
        <div className="topic-main">
            <h2>{cvcontent?.title}</h2>

            { editMode===false &&
                cvcontent?.parts?.map((topic) => {
                    const elems = [
                        <div className="header-row">
                            <p><strong>{topic.header}</strong></p>
                            <p><strong>{topic.date}</strong></p>
                        </div>,
                        <p>{topic.textcontent}</p>
                    ];
                    return elems;
                 }
                )
            }

            {editMode === true &&
                cvcontent?.parts?.map((topic) => {
                    let key = cvcontent?.parts?.findIndex(part => part === topic);
                    return <ContentEditor id={key}
                        header={topic.header}
                        date={topic.date}
                        textcontent={topic.textcontent}
                        setCvData={setCvData}
                        removeCvData={removeCvData}
                            />
                 })
            }
            <button onClick={e => toggleEditMode(e)}>{editMode ? "Takaisin" : "Muokkaa"}</button>
            {editMode===true &&
                <button onClick={e => { e.preventDefault(); AddNewPart() } }>Lisää</button>
            }
        </div>
    );
}

export default Topic;