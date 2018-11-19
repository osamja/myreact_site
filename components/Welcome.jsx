class WelcomeHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
        };
    }

    render() {
        return (
            <div className="WelcomeHeader">
                <h1>Welcome to my website!</h1>
                <p>I'm {this.state.name}, nice to meet you :)</p>
            </div>
        );
    }
}
