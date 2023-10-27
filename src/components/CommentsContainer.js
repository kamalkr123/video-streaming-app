import React from "react";

const commentsData = [
  {
    name: "Username1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    replies: [
      {
        name: "Username2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        replies: [],
      },
    ],
  },
  {
    name: "Username3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    replies: [
      {
        name: "Username4",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        replies: [],
      },
      {
        name: "Username5",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        replies: [
          {
            name: "Username6",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            replies: [
              {
                name: "Username7",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
                replies: [
                  {
                    name: "Username8",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Ragesh",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    replies: [],
  },
  {
    name: "Ankit",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    replies: [
      {
        name: "Karan",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        replies: [],
      },
    ],
  },
  {
    name: "Dhananjay",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    replies: [],
  },
];

const Comment = ({ comment }) => {
  const { name, text } = comment;
  return (
    <div className="comment">
      <img
        className="user-img"
        src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
        alt="user"
      />
      <div className="user-info">
        <p className="username">{name}</p>
        <p className="usertext">{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ commentsData }) => {
  return (
    <div>
      {commentsData.map((comment, index) => {
        return (
          <div key={index}>
            <Comment comment={comment} />
            <div className="comment-replies">
              <CommentList commentsData={comment.replies} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="comment-section">
      <div className="comment-list">
        <CommentList commentsData={commentsData} />
      </div>
    </div>
  );
};

export default CommentsContainer;
