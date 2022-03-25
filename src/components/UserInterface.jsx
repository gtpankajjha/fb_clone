import React from "react";
import "./User.css";
import tag from "../image/tag.png";
import checkin1 from "../image/checkin1.png";
import gif from "../image/gif.png";
import event from "../image/event.png";
import cross from "../image/cross.png";
import gallary from "../image/gallary.png";
import video from "../image/video.png";
import compose from "../image/compose.png";
import profile from "../image/profile.png";

const UserInterface = () => {
  return (
    <div className="hm">
      <div className="hm2">
        <div>
          {" "}
          <div className="hm2_tag">
            <span style={{ marginLeft: "10px" }}>
              <img
                src={compose}
                style={{ height: "20px", width: "60px", marginLeft: "20px" }}
              />
              Compose Post
            </span>
            <span style={{ marginLeft: "30px" }}>
              <img
                src={gallary}
                style={{ height: "20px", width: "60px", marginLeft: "20px" }}
              />
              <span></span> Photo/video Album
            </span>
            <span style={{ marginLeft: "30px" }}>
              <img
                src={video}
                style={{
                  height: "25px",
                  width: "60px",
                  marginLeft: "20px",
                  marginTop: "5px",
                }}
              />
              Live Video
            </span>
            <span style={{ marginLeft: "500px" }}>
              <img
                src={cross}
                style={{ height: "20px", width: "60px", marginLeft: "20px" }}
              />
            </span>
          </div>
        </div>
      </div>

      <div className="box1">
        <div style={{ display: "flex" }}>
          {" "}
          <img
            src={profile}
            style={{
              height: "70px",
              width: "70px",
              marginLeft: "20px",
              marginTop: "20px",
            }}
          />
          <div>
            <input
              className="box1_input"
              type="text"
              placeholder="Write Something here..."
            />
          </div>
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <div>
                  <div className="tab" style={{display:"flex"}}>
                      <div>
                          <img
              src={tag}
              style={{ height: "60px", width: "60px", marginLeft: "20px" }}
                          />
                      </div><div style={{ marginTop: "20px", marginLeft: "20px" }}><span style={{ color: "blue", fontSize: "18px", fontWeight: "500" }}>Tag friends</span></div>
            
          </div>
                  <div className="tab">
                      <div style={{display:"flex"}}><div> <img
              src={gif}
              style={{
                height: "50px",
                width: "50px",
                marginLeft: "20px",
                padding: "5px",
              }}
            /></div><div  style={{marginTop:"20px", marginLeft:"20px"}}><span style={{color:"blue",fontSize:"18px",fontWeight:"500"}}>GIF</span></div></div>
           
          </div>
        </div>
        <div>
                  <div className="tab">
                      <div style={{display:"flex"}}><div><img
              src={checkin1}
              style={{
                height: "50px",
                width: "50px",
                marginLeft: "20px",
                marginTop: "5px",
              }}
            /></div><div  style={{marginTop:"20px", marginLeft:"20px"}}><span style={{color:"blue",fontSize:"18px",fontWeight:"500"}}>Check In</span></div></div>
            
          </div>
                  <div className="tab">
                      <div style={{display:"flex"}}><div> <img
              src={event}
              style={{
                height: "45px",
                width: "50px",
                marginLeft: "20px",
                marginTop: "6px",
              }}
            /></div><div><div  style={{marginTop:"20px", marginLeft:"20px"}}><span style={{color:"blue",fontSize:"18px",fontWeight:"500"}}>Tag Events</span></div></div></div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInterface;
