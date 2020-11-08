import App from './App';

function Topic() {
    return (
        <div className="topic-main">
            <h2>Topic header</h2>
            <p>{App.content.foo}</p>
        </div>
    );
}

export default Topic;