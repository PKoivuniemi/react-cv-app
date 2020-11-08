import App from './App';
import Topic from './Topic'
import React from 'react';

function Content(props) {
    return (
        <div className="content-main">
            {
                App.cvContent.map(content =>
                    <React.Fragment key={content.id}>
                        <Topic id={content.id}/>
                    </React.Fragment>
                    )
            }
            <Topic/>
        </div>
    );
}
export default Content;