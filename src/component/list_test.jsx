import React, { Component } from "react";
import "./style.css";
import Counter from "./counter"; // Updated filename

class Counters extends Component {
  state = {
    countersList: [
      { id: 1, value: 0 },
      { id: 2, value: 11 },
      { id: 3, value: 22 },
      { id: 4, value: 33 },
      { id: 5, value: 44 },
      { id: 6, value: 55 },
      { id: 7, value: 66 },
      { id: 8, value: 77 },
      { id: 9, value: 88 },
      { id: 10, value: 99 },
    ],
  };

  renderTags() {
    if (this.state.countersList.length === 0)
      return <p className="ms_error">This array is empty</p>;
    return (
      <div className="list_test_one">
        {this.state.countersList.map((item) => (
          <div className="items_list_test_one">
            <Counter
              key={item.id}
              onDelete={this.handleDelete} // Updated name
                counter={item}
            />
          </div>
        ))}
      </div>
    );
  }

  handleDelete = (counterId) => {
    const countersList = this.state.countersList.filter((c) => c.id !== counterId);
    this.setState({ countersList });
  };

  render() {
    return (
      <React.Fragment>
        <br></br>
        {this.state.countersList.length === 0 && (
          <p className="ms_error">This array is empty</p>
        )}
        {this.renderTags()}
      </React.Fragment>
    );
  }
}

export default Counters;
