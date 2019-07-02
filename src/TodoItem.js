import React, {Component} from "react";
import PropTypes from 'prop-types';

class TodoItem extends Component {
    state = {};

    constructor(props) {
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    render() {
        console.log("render");
        const {content} = this.props;
        return <li onClick={this.handleItemClick}>{content}</li>;
    }

    handleItemClick() {
        const {index} = this.props;
        this.props.deleteItem(index);
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    static getDerivedStateFromProps(nextProps, nextContext) {
        console.log("getDerivedStateFromProps");
        return null;
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
}

TodoItem.propTypes = {
    content: PropTypes.string.isRequired,
    index: PropTypes.number,
    deleteItem: PropTypes.func
};

TodoItem.defaultProps = {
    content: 'Hello World'
};


export default TodoItem