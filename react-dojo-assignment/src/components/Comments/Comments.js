import React, { useState } from "react";
import "./Comments.css";
const Comments = ({ title, content, postid, addcomment }) => {
  const [isActive, setIsActive] = useState(false);
  const [newcomment, setnewcomment] = useState("");

  return (
    <div className="accordion-item px-3">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>
          {isActive ? (
            <div className="border-bottom mb-3">
              <span>
                Hide Comment <i className="fa-solid fa-circle-arrow-up"></i>
              </span>
            </div>
          ) : (
            <span>
              View Comment <i className="fa-solid fa-circle-arrow-down"></i>
            </span>
          )}
        </div>
      </div>
      {isActive && (
        <div className="accordion-content">
          {content.map((comment) => (
            <div className="cardflex" key={comment.id}>
              <div className="flexcontainer">
                <div className="email">
                  <b>{comment.email}</b>
                </div>

                <div>{comment.body}</div>
              </div>
            </div>
          ))}
          <div className="addcomment">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your comment"
              value={newcomment}
              onChange={(e) => setnewcomment(e.target.value)}
            />
            <button
              className="btn btn-primary"
              onClick={() => {
                addcomment(newcomment, postid);
                setnewcomment("");
              }}
            >
              Comment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Comments;
