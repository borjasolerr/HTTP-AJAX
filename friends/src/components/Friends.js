import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export default class Friends extends React.Component {
  state = {
    friends: null,
    error: null,
    loading: false
  };

  componentDidMount() {
    this.fetchFriends();
  }

  fetchFriends = () => {
    axios
      .get('http://localhost:5000/friends')
      .then(res => this.addFriends(res.data))
      .catch(res => this.addError(res.message));
  };
  addFriends = friends => {
    this.setState({ friends: friends });
  };

  addError = error => {
    this.setState({ error: error });
  };

  render() {
    console.log(this.state.friends);
    return (
      <div>
        <div>
          {this.state.friends &&
            this.state.friends.map(friend => {
              return (
                <div key={friend.name}>
                  <div>Name: {friend.name}</div>
                  <div>Age: {friend.age}</div>
                  <div>Email: {friend.email}</div>
                </div>
              );
            })}

          {!this.state.friends && <div>Loading friends...</div>}
        </div>
      </div>
    );
  }
}

Friends.propTypes = {
  friends: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string
  })
};
