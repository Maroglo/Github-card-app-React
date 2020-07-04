import React from "react";
import axios from 'axios';
// GitHub usernames: gaearon, sophiebits, sebmarkbage, bvaughn


class Form extends React.Component {
    state = { username: '' };
    handleSubmit = async (e) => {
        e.preventDefault();
        const resp = await axios.get(`https://api.github.com/users/${this.state.username}`);
        this.props.onSubmit(resp.data);
        console.log("response", resp.data)
        this.setState({username: ''});
    };
    render() {
        return (
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        value={this.state.username}
                        onChange={e => this.setState({ username: e.target.value })}
                        placeholder="Github username"
                        required />
                    <button>Add card</button>
                </form>
        );
    }
}

export default Form;