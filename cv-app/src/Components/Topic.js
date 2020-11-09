import App from './App';
import content from '../cvContent.js';
import { useState, useEffect } from 'react';

function Topic(props) {
    const [cvcontent, setContent] = useState(content[props.id]);
    const [editMode, setEditMode] = useState(false);
    
    useEffect(() => {
        console.log(cvcontent);
    });
    
    const toggleEditMode = (e) => {
        e.preventDefault();
        setEditMode(!editMode);
    }
    const setCvData = (e) => {
        e.preventDefault();
        
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
                                <input placeholder={topic.header}/>
                                <input placeholder={topic.date}/>
                            </div>,
                            <input placeholder={topic.textcontent} />,
                            <button onClick={ e => setCvData(e) }>Tallenna</button>
                        ];
                        return elems;
                    })
                }
                </form>
            }
            <button onClick={e => toggleEditMode(e)}>{ editMode ? "Takaisin" : "Muokkaa" }</button>
        </div>
    );
}

export default Topic;