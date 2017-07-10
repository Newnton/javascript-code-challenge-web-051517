class CommentList{
  constructor(array){
    this.comments = ''
    this.commentsAry = []
    let newComment = ''
    if(array){for(let i=0;i<array.length;i++)
      newComment = new Comment(array[i])
      this.comments += newComment.render()
      this.commentsAry.push(array[i])
    }
  }

  render(){
    return `<ul>${this.comments}</ul>`
  }

  addComment(comment){
    let newComment = new Comment(comment)
    this.comments += newComment.render()
    this.commentsAry.push(comment)
  }
}
