import App from './App';

function Topic(props) {
    const content = App.GetContent(props.id);
    
    return (
        <div className="topic-main">
            <h2>{content?.title}</h2>

            {
                content?.parts?.map((topic) => {
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

            <p>{content?.subtitles}</p>
            <p>{content?.textcontents}</p>
        </div>
    );
}

export default Topic;