import App from './App';
import content  from '../cvContent.js';
import { useState, useEffect, useRef } from 'react';

function Topic(props) {
    const [cvcontent, setContent] = useState(content[props.id]);
    const [editMode, setEditMode] = useState(false);
    
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
    const setCvData = (e) => {
        e.preventDefault();
        const tmp = cvcontent;
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
                <form>
                {
                cvcontent?.parts?.map((topic) => {
                        const elems = [
                            <div className="header-row">
                                <input ref={ editedHeader } placeholder={topic.header}/>
                                <input ref={ editedDate } placeholder={topic.date}/>
                            </div>,
                            <input ref={ editedContent } placeholder={topic.textcontent} />,
                            <button onClick={ e => setCvData(e) }>Tallenna</button>
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