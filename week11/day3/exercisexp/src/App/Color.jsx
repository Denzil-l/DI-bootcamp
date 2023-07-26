import React, { Component } from "react";

class Child extends Component {
    componentWillUnmount() {
        alert("Child was destroed !!!");
    }

    render() {
        return <h2>Hello World!</h2>;
    }
}

class Color extends Component {
    state = {
        favoriteColor: 'red',
        show: true
    };

    componentDidMount() {
        this.setState({ favoriteColor: 'yellow' });
        console.log("after update")
    }

    ChangeColor = () => {
        this.setState({ favoriteColor: 'blue' });
    };

    shouldComponentUpdate() {
        // Set to true to allow re-rendering
        return true;
    }
    getSnapshotBeforeUpdate() {
        console.log("in getSnapshotBeforeUpdate")
    }
    handleDelete = () => {
        this.setState({ show: false });
    };
    render() {
        const { favoriteColor } = this.state;
        let childComponent = null;
        if (this.state.show) {
            childComponent = <Child />;
        }
        return (
            <>
                {childComponent}
                <h2>My favorite color is {favoriteColor}</h2>
                <button onClick={this.ChangeColor}>Change Color</button>
                <button onClick={this.handleDelete}>Удалить</button>

            </>
        );
    }
}

export default Color;