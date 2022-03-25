import React, { Component } from "react";
import "./App.css";
import tag from "../src/image/tag.png";
import checkin1 from "../src/image/checkin1.png";
import gif from "../src/image/gif.png";
import event from "../src/image/event.png";
import cross from "../src/image/cross.png";
import gallary from "../src/image/gallary.png";
import video from "../src/image/video.png";
import compose from "../src/image/compose.png";
import profile from "../src/image/profile.png";
export default class App extends Component {
  constructor() {
    super();
    this.state = { isGifselected: false, gif: null, searches: null };
  }

 
  componentDidMount() {
    // let APIKEY = ""; 
    const url = "https://api.giphy.com/v1/gifs/search?api_key=NS9qeYXAPDfAkn9nVgvMkk2298SoI5ZG&limit=1&q=" 
    fetch(url).then(response => response.json())
    .then(data => console.log(data.data));
  }

  gifs = [
    {
      title: "apple",
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    },
    {
      title: "grapes",
      img: "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg",
    },
    {
      title: "orange",
      img: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
    },
  ];

  buttens = [
    { icon: tag, onclick: () => {}, title: "Tag friend" },
    { icon: checkin1, onclick: () => {}, title: "Check In" },
    {
      icon: gif,
      onclick: () => {
        this.setState({ isGifselected: true });
      },
      title: "Gif",
    },
    { icon: event, onclick: () => {}, title: "Tag Event" },
  ];

  render() {
    const { isGifselected, gif, searches } = this.state;
    return (
      <React.StrictMode>
        <div
          className="app_u"
          style={{ visibility: isGifselected ? "visible" : "hidden" }}
        >
          <input
            placeholder="Search.."
            onChange={(e) => {
              this.setState({ searches: null });
              for (let i = 0; i < this.gifs.length; i++) {
                console.log(
                  this.gifs[i].title.split(e.target.value).length > 1
                );
                if (this.gifs[i].title.split(e.target.value).length > 1) {
                  this.setState({ searches: this.gifs[i] });
                  break;
                }
              }
            //   this.setState({ searches: this.gifs[0] });
            }}
          />
          {searches != null ? (
            <img
              className="app_m_a"
              width={"100%"}
              onClick={() => this.setState({ gif: searches })}
              src={searches.img}
            />
          ) : null}
        </div>
        <div className="app_a">
          <div className="app_b">
            <div className="app_c">
              <div className="app_d">
                <div className="app_e"> <img
                src={compose}
                style={{ height: "25px", width: "60px" }}
              /></div>
                <div className="app_f">Compose Post</div>
              </div>
              <div className="app_d">
                <div className="app_e"> <img
                src={gallary}
                style={{ height: "20px", width: "40px", marginLeft: "0px" }}
              /></div>
                <div className="app_f">Photos/vidios Albums</div>
              </div>
              <div className="app_d">
                <div className="app_e"> <img
                src={video}
                style={{
                  height: "25px",
                  width: "50px",
                 
                }}
              /></div>
                <div className="app_f">Live video</div>
              </div>
            </div>
            <div className="app_m">
              <div className="app_n"><img
            src={profile}
            style={{
              height: "60px",
              width: "60px",
              marginLeft: "20px",
              marginTop: "20px",
            }}
          /></div>
              <input
                className="app_o"
                placeholder="Write something here...ಇಲ್ಲಿ ಏನಾದರೂ ಬರೆಯಿರಿ..."
              />
            </div>
            {gif != null ? <img className="app_m_a" src={gif.img} /> : null}
            <div className="">
              {[1, 1, 1, 1].map((item, k) => (
                <div key={k} className="app_p"></div>
              ))}
            </div>
            <div className="app_q">
           
              {this.buttens.map((item, k) => (
                <div key={k} className="app_r" onClick={item.onclick}> 
                  <img src={item.icon} style={{height:"30px",width:"30px",marginRight:"40px"}} className="app_s" />
                  <div className="app_t">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </React.StrictMode>
    );
  }
}