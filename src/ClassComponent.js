import { Component } from "react";

class ClassComponent extends Component {
    // Mounting
    constructor(props) {
        super(props);
        // state - object, which holds the component properties
        this.state = {
            name:"HRB",
            mobile:8825410600,
            email:"info@mjit.in",
            location: "Chennai",
            visible: true,
        };
    }

    // Mounting, Updating
    // static getDerivedStateFromProps(props, state) {
    //     return{
    //         location: props.location
    //     }
    // }

    // Mounting
    componentDidMount() {
        setTimeout(() => {
            this.setState({location: "Hyderabad"})
        }, 2000)
    } 
    changeName = (newName) => {
        this.setState({
            // name: "Hiran Ram Babu",
            name: newName,
            email: "hrb@mjit.in"
        })
    }

    // Updating
    shouldComponentUpdate() {
        return true;
    }

    // Updating
    // This will help to identify the virtualdom comparision
    // This will work only if we have componentDidUpdate(){}
    getSnapshotBeforeUpdate(prevProps, prevState){
        return console.log(prevProps.location, prevState.Name)
    }
    
    // Updating
    // This will help to identify the virtualdom comparision
    componentDidUpdate () {
        const newDiv = document.getElementById("newDiv");
        newDiv.innerHTML = "Component Updated"
        console.log("Component Updated")
    }

    deleteChild = () => {
        this.setState({
            visible: false
        })
    }

    // Mounting, Updating
    render() {
        let childC;
        if (this.state.visible){
            childC = <ChildClassComponent />
        }
        return (
            <div>
                Testing Class Sample
                <br></br>
                following are the details of the Maintainer:
                <br></br>
                {this.state.name}
                <br></br>
                {this.state.mobile}
                <br></br>
                {this.state.email}
                <br></br>
                {this.state.location}
                {/* <button onClick={this.changeName}>Click Me</button> */}
                <button onClick={() => this.changeName("Hiran Ram Babu")}>Click Me</button>
                {/* <button onclick="changeName()">Click Me</button> */}
                <br></br>
                {childC}
                <button onClick={this.deleteChild}>Delete me</button>
            </div>
        );
    }
}

class ChildClassComponent extends Component {
    componentWillUnmount() {
        return console.log("Boss you have removed me!")
    }
    render() {
        return(
        <div>
            This is child Component
        </div>
        )
    }
}

export {ClassComponent};