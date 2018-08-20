import React, { Component } from "react";

/*styles = {
  fontSize: 24,
  fontWeight: "bold",
  textAlign: center
};

class Weekly extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div class="row">
            <h3 style={this.styles}>Chef Jenny's Recipe Pick of the Week!</h3>
          </div>
        </div>
      </div>
    );
  }
}*/

class Weekly extends Component {
  state = {
    count: 0,
    tags: [
      "1 tbsp olive oil",
      "2 chicken breasts boneless, skinless",
      "salt and pepper",
      "1/2 cup bbq sauce",
      "1/2 cup mozzarella cheese shredded",
      "1 cup pineapple chopped"
    ],
    imageUrl: "https://picsum.photos/300/300?image=835"
  };

  rednerTags() {
    if (this.state.tags.length === 0) return <p>Suggest a Recipe!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  styles = {
    fontWeight: "bold",
    textAlign: "center"
  };

  handleIncrement = () => {
    console.log("Increatment Clicked", this);
  };

  render() {
    return (
      <div>
        <div className="container">
          <h3 style={this.styles}>Chef Jenny's Recipe Pick of the Week!</h3>
          <div className="row">
            <div className="col-sm-4">
              <img
                src={this.state.imageUrl}
                className="img-fluid"
                alt="Weekly Recipe Photos"
              />
            </div>
            <div className="col-sm-8">
              <p>
                Moroccan lemon chicken made in one pan with fresh herbs and
                blistered tomatoes. The Mediterranean spices add wonderful color
                and robust flavors to each bite.
              </p>
              <h5>
                <b>Ingredients</b>
              </h5>
              <ul>
                {/*{this.state.tags.map(tag => (
                    <li key={tag}>{tag}</li>
                  ))}*/}
                {this.state.tags.length === 0 && "Suggest a Recipe!"}
                {this.rednerTags()}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Weekly;
