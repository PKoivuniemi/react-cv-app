import App from './App';
import Topic from './Topic'
import React from 'react';
import content from '../cvContent.js';

function Content(props) {
    return (
        <div className="content-main">
            {
                content.map(cell =>
                    <React.Fragment key={cell.id}>
                        <Topic id={cell.id}/>
                    </React.Fragment>
                )
            }
        </div>
    );
}
export default Content;