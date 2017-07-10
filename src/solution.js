$(document).ready(function(){
  let commentList = new CommentList()
  $('#note-form').on('submit', function(event){
    commentList.addComment($('#content').val())
    $('#comments-list').html(commentList.render())
    event.preventDefault()
  })

  $('#search-form').on('submit', function(event){
    let commentsWithTerm = new CommentList()
    let term = $('#searchterm').val()
    debugger
    for (let i=0;i<commentList.commentsAry.length;i++){
      debugger
      let currentComment = commentList.commentsAry[i]
      if(currentComment.includes(term)){
        commentsWithTerm.addComment(currentComment)
      }else{continue}
    }
    $('#comments-list').html(commentsWithTerm.render())
    event.preventDefault()
  })
})
