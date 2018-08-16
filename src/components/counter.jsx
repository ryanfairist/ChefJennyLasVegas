import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["Dinner Parties", "Family Private Chef", "Upscale Birthdays"],
    imageUrl: "https://picsum.photos/200"
  };

  rednerTags() {
    if (this.state.tags.length === 0) return <p>Ther are no Test Types!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  styles = {
    fontSize: 40,
    fontWeight: "bold"
  };

  handleIncrement = () => {
    console.log("Increatment Clicked", this);
  };

  render() {
    return (
      <div>
        <img src={this.state.imageUrl} alt=" Photos" />

        <span style={this.styles}>18 SAT Books</span>

        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Enroll Now
        </button>

        <div>
          {this.state.tags.length === 0 && "Please create a new tag!"}
          {this.rednerTags()}
        </div>

        {/*<ul>
                    { this.state.tags.map(tag => <li key={tag}>{tag}</li>) }
                </ul>*/}
      </div>
    );
  }

  getBadgeClasses() {
    //method
    let classes = "badge m-2";
    classes += this.state.count === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
