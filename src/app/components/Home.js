import React from "react";

export class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age: props.initialAge,
            status: 0,
            homeLink: props.initialLinkName,
        };
        setTimeout(() => {
            this.setState({
                status: 1
            });
        },3000);
        console.log("constructor");
    }
    
    componentWillMount(){
        console.log("component will mount");
    }
    
    componentDidMount(){
        console.log("component did mount");
    }

    componentWillReceiveProps(nextProps){
        console.log("component will receive props", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("should component update", nextProps, nextState);
        //if(nextState===1){
        //    return false
        //};
        return true;
    }

    componentWillUpdate(nextProps, nextState){
        console.log("component will update");
    }

    componentDidUpdate(prevProps, prevState){
        console.log("component did update", prevProps, prevState)
    }

    componentWillUnmount(){
        console.log("component will unmount");
    }

    onChangeLink(){
        this.props.changeLink(this.state.homeLink);
    }

    onMakeOlder() {
        this.setState({
            age: this.state.age + 3
        });
    }
    onChangeHandler(event){
        this.setState({
            homeLink:event.target.value
        });
    }
    
    render() {
        return (
            <div>
                <p>In a new Component!</p>
                <p>Your name is {this.props.name} and your age is {this.state.age}</p>
                <p>Status: {this.state.status}</p>
                <hr/>
                <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older!</button>
                <hr/>
                <button onClick={this.props.greet} className="btn btn-primary">Say Hello!</button>
                <hr/>
                <input type="text" value={this.state.homeLink}
                onChange={(event)=>this.onChangeHandler(event)}/>
                <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Link</button>
            </div>
        );
    }
}

Home.propTypes = {
    name: React.PropTypes.string,
    initialAge: React.PropTypes.number,
    greet: React.PropTypes.func,
    initialLinkName: React.PropTypes.string
};

export default Home ;