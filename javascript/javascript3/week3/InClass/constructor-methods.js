class Comment {
  constructor(comment, userName, timeStamp) {
    this.comment = comment;
    this.userName = userName;
    this.timeStamp = timeStamp;
  }
  getComment() {
    return this.comment;
  }

  likeComment() {
    console.log(`liked the comment`);
  }

  eidtComment(newComment) {
    this.comment = newComment;
  }
}

const comment = new Comment("This was a great video", "aurajiu", new Date());

comment.eidtComment("This is bit owwww");
console.log(comment.getComment());

// function createComment(comment, userName, timeStamp) {
//     const getAgeOfComment =
//         return {
//             comment: comment,
//             userName: userName,
//             timeStamp: timeStamp,
//         }
// // }
