class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentIndex: null };
        this.renderImageContent = this.renderImageContent.bind(this);
    }

    renderImageContent(src, index) {
        return (
            <div key={src.toString()}>
                <img src={src}/>
            </div>
        )
    }

    render() {
        return (
            <div className="gallery-container">
                <div className="gallery-grid">
                    {imgUrls.map(this.renderImageContent)}
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Gallery />, document.querySelector('.gallery-container'));
