/*import React, { Component } from "react";

class HowTo extends Component {
  getVideos() {
    let myTarget = document.querySelector("#myVideos");
    let lessons = [
      {
        topic: "Breakfast for 5 with Chef Jenny",
        videoURL:
          "https://www.incredibleegg.org/cooking-school/egg-cookery/stovetop-scramble-eggs/"
      },
      {
        topic: "Late Night tacos for 10",
        videoURL: "https://www.youtube.com/watch?v=vZariS25PF8"
      },
      {
        topic: "Picking your own lemons",
        videoURL: "https://www.youtube.com/watch?v=IlEhIiK-LTk"
      },
      {
        topic: "How to impress your inlaws - homemade pasta",
        videoURL: "https://www.youtube.com/watch?v=HdSLKZ6LN94"
      },
      {
        topic: "Dips, Dips, Dips with Chef Jenny",
        videoURL: "https://www.youtube.com/watch?v=4qU9Pzzzk3Q"
      },
      {
        topic: "Chef Jenny travels with her cooking knives",
        videoURL: "https://www.youtube.com/watch?v=LO35cdWL1MQ"
      }
    ];

    lessons.forEach(item => {
      let elle = document.createElement("a");
      elle.href = item.videoURL;
      elle.innerText = item.topic;

      myTarget.appendChild(elle);
    });
  }
  rednerLessonsTips() {
    if (this.state.lessons.length === 0) return <p>Send a question!</p>;

    return <div id="myVideos" />;
  }
}

export default HowTo;*/
