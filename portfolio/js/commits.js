$(document).ready(function(){

  $(".list-group").on("click", "a", function(e){
    e.preventDefault();
    $("#modalRepoTitle").empty()
    var repoTitle = $(this).html();
    var repoLink = $("<a>").attr("href", "https://github.com/paulducsantos/" + repoTitle)
                              .attr("target", "_blank")
                              .append(repoTitle);
    $("#modalRepoTitle").append(repoLink);
    $.ajax({
        type: "GET",
        url: $(this).attr("data-url") + "/commits",
        success: function(commits){
          $("#commit-list").empty();
          for(var i = 0; i < 5; i++){
            var newCommitLine = $("<tr>");
            var commitTableData = buildNewTableDataCommitMsg(commits[i]);
            var authorTableData = buildNewTableDataAuthor(commits[i]);
            var dateTableData = buildNewTableDataDate(commits[i]);
            newCommitLine.append(commitTableData)
              .append(authorTableData)
              .append(dateTableData);
            $("#commit-list").append(newCommitLine);
          }
        },
        error: function(jqXHR, textStatus, errorThrown){
          alert("uh-oh");
        }
      });
    });

  function buildNewTableDataCommitMsg(commitData){
    var newCommitTableData = $("<td>");
    var commitLink = $("<a>").attr("href", commitData.html_url)
                                              .attr("target", "_blank");
    var commitMessage = commitData.commit.message;
    newCommitTableData.append(commitLink.append(commitMessage));
    return newCommitTableData;
  }

  function buildNewTableDataAuthor(commitData){
    var newAuthorTableData = $("<td>");
    if (commitData.author === null){
      var commitAuthor = ""
    } else {
      var commitAuthor = commitData.author.login;
    }
    newAuthorTableData.append(commitAuthor);
    return newAuthorTableData;
  }

  function buildNewTableDataDate(commitData){
    var newDateTableData = $("<td>");
    var commitDate = commitData.commit.committer.date;
    newDateTableData.append(commitDate);
    return newDateTableData;
  }
  









});