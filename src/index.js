$(document).ready(function(){
  $('#note-form').on('submit', function(event){
    $('#comments-list').append(`<li>${$('#content').val()}</li>`)
    event.preventDefault()
  })

  $('#search-form').on('submit', function(event){
    let term = $('#searchterm').val()
    let includesTerm = ''
    for (let i=0;i<$('#comments-list li').length;i++){
      let comment = $('#comments-list li')[i].innerHTML
      if(comment.includes(term)){
        includesTerm += `<li>${$('#comments-list li')[i].innerHTML}</li>`
      }
      else{continue}
    }
    $('#comments-list').html(includesTerm)
    event.preventDefault()
  })
})
