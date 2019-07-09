import React, {Component} from "react";
import PropTypes from 'prop-types';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    render() {
        const {content} = this.props;
        return <li onClick={this.handleItemClick}>{content}</li>;
    }

    handleItemClick() {
        const {index} = this.props;
        this.props.deleteItem(index);
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