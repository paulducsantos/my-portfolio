$(document).ready(function(){

  $(".list-group").on("click", "a", function(e){
    e.preventDefault();

    $.ajax({
        type: "GET",
        url: $(this).attr("href") + "/commits",
        success: function(commits){
          $(".modal-body").empty();
          console.log(commits[0].commit.message);
          for(var i = 0; i < 5; i++){
            var modalWithCommit = buildNewModalContent(commits[i]);
            $(".modal-body").append(modalWithCommit);
          }
        }
      });


  });

  function buildNewModalContent(commitData){
    var commitMessage = commitData.commit.message;
    return commitMessage;
  }
  









});