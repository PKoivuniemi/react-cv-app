import React, { useRef } from 'react';

function ContentEditor(props) {

    const editedHeader = useRef("");
    const editedDate = useRef("");
    const editedContent = useRef("");

    function setCvData() {
        props.setCvData(props.id, editedHeader.current.value,
            editedDate.current.value,
            editedContent.current.value);
    }
    
    function removeCvData() {
        props.removeCvData(props.id);
     }

    return (
        <div className="content-editor">
            <form>
                <div className="header-row">
                    <input ref={editedHeader} name='header' defaultValue={props.header} />
                    <input ref={editedDate} name="date" defaultValue={props.date} />
                </div>
                <textarea className="content-editor-textfield" ref={editedContent} name="textcontent">{props.textcontent}</textarea>
                <button onClick={e => { e.preventDefault(); removeCvData() }}>Poista</button>
            <button onClick={e => { e.preventDefault(); setCvData() }}>Tallenna</button>
            </form>
        </div>
    );
}
export default ContentEditor;