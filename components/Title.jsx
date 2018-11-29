class Title extends React.Component {
    constructor(props) {
        super(props);
        let style = {
            color: 'white',
            textAlign: 'center',
            fontSize: 32
        };
        this.state = {
            name: this.props.name,
            style: style
        };

    }

    render() {
        return (
            <div className="TitleHeader">
                <h1 style={this.state.style}>Sammy Javed</h1>
            </div>
        );
    }
}

ReactDOM.render(<Title />, document.querySelector('.title-container'));
