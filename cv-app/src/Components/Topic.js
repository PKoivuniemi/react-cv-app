import App from './App';

function Topic(props) {
    const content = App.GetContent(props.id);
    const TopicContents = () => {
        let len = content.subtitles?.length;
        const elements = [];
        if (len > 0) {
            for (let i = 0; i < len; i++) {
                elements.push(<p><strong>{content.subtitles[i]}</strong></p>);
            }
        }
        else console.log(content.subtitles);
        
        return elements;
     }
    return (
        <div className="topic-main">
            <h2>{content?.title}</h2>
            <p>{content?.subtitles}</p>
            <p>{content?.textcontents}</p>
        </div>
    );
}

export default Topic;