import App from './App';
import content  from '../cvContent.js';
import { useState, useEffect, useRef } from 'react';

function Topic(props) {
    const [cvcontent, setContent] = useState(content[props.id]);
    const [editMode, setEditMode] = useState(false);
    
    const formContent = useRef(null);
    const editedHeader = useRef("");
    const editedDate = useRef("");
    const editedContent = useRef("");

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
    const setCvData = (id) => {
        const tmp = cvcontent;
        const form = formContent.current;
        console.log("makkaraa " + formContent.current['Header'].value);
        if (tmp !== undefined && tmp.parts !== undefined) {
            tmp.parts[id].header = form["Header"].value;
            tmp.parts[id].date = form["date"].value;
            tmp.parts[id].textcontent = form["textcontent"].value;
            setContent({ ...tmp });
            console.log("set new data to id " + id + ": header "
                + tmp.parts[id].header +
                ", date " + tmp.parts[id].date +
                ", content " + tmp.parts[id].textcontent);
         }    
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

            {editMode===true &&
                <form ref={ formContent }>
                {
                    cvcontent?.parts?.map((topic) => {
                        let key = cvcontent.parts.findIndex(part => part.header === topic.header);
                        console.log(key);
                        const elems = [
                            <div className="header-row">
                                <input  name="Header" type="text" defaultValue={topic.header}/>
                                <input ref={editedDate} name="date" type="text" defaultValue={topic.date}/>
                            </div>,
                            <textarea className="content-editor" ref={editedContent} name="textcontent">{topic.textcontent}</textarea>,
                            <button onClick={e => { e.preventDefault(); setCvData(key) }}>Tallenna</button>
                        ];
                        return elems;
                    })
                }
                </form>
                
            }
            <button onClick={e => toggleEditMode(e)}>{editMode ? "Takaisin" : "Muokkaa"}</button>
            {editMode===true &&
                <button onClick={e => { e.preventDefault(); AddNewPart() } }>Lisää</button>
            }
        </div>
    );
}

export default Topic;