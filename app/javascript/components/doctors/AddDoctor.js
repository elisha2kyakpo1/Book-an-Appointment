/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import React from 'react';

export default class NewItemForm extends React.Component {
    state = {
      image: {},
    }

    onChange = (e) => {
      e.persist();
      this.setState(() => ({
        [e.target.name]: e.target.files[0],
      }));
    }

    onSubmit = (e) => {
      e.preventDefault();
      const form = new FormData();
      form.append('image', this.state.image);
      fetch('/api/v1/doctors', {
        method: 'POST',
        body: form,
      });
    }

    render() {
      return (
        <div className="form">
          <h1>New Upload</h1>
          <form onSubmit={this.onSubmit}>
            <label>Image Upload</label>
            <input type="file" name="image" onChange={this.onChange} />
            <br />
            <br />
            <input type="submit" />
          </form>
        </div>
      );
    }
}
