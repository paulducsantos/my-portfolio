$(document).ready(function(){
  $.ajax({
    type: "GET",
    url: "https://api.github.com/users/paulducsantos/repos",
    success: function(repos) {
      for (var i = 0; i < repos.length ; i++) {
        var newRepoListItem = buildRepoList(repos[i]);
        $(".list-group").append(newRepoListItem);
      }
    }
  });

  function buildRepoList (repoData){
    var repoUrl = "https://api.github.com/repos/";
    repoUrl += repoData.full_name;

    var repoListGroupItem = $("<a>")
      .attr("data-url", repoUrl)
      .attr("data-toggle", "modal")
      .attr("data-target", "#myModal")
      .addClass("list-group-item")
      .append(repoData.name);

    return repoListGroupItem;
  }

});

  