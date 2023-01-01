import React from "react";

class AddContact extends React.Component {
  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui from">
          <div className="field">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" placeholder="name" />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="username@gmail.com" />
          </div>
          <button type="button" className="ui button blue">
            Add Contact
          </button>
        </form>
      </div>
    );
  }
}

export default AddContact;
