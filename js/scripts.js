$(document).ready(function () {
  $("form#suggester").submit(function (event) {
    event.preventDefault();
    const userName = $(".user-name").val();
    const progXP = parseInt(
      $("input:radio[name=prog-experience]:checked").val()
    );
    const color = parseInt($("input:radio[name=color]:checked").val());
    const devInterest = parseInt($("input:radio[name=interest]:checked").val());
    const animal = parseInt($("input:radio[name=animal]:checked").val());
    const chaotic = parseInt($("input:radio[name=chaotic]:checked").val());
    const time = parseInt($("input:radio[name=time]:checked").val());
    const torture = parseInt($("input:radio[name=torture]:checked").val());
    const totalScore =
      progXP + color + devInterest + animal + chaotic + time + torture;
    let suggestStrength;
    let langSuggest;

    if (totalScore === 4 || totalScore === 9 || totalScore === 10) {
      suggestStrength = "mostly";
    } else {
      suggestStrength = "totally";
    }

    if (totalScore <= 4) {
      langSuggest = "Either Ruby or Python";
    } else if (totalScore <= 9) {
      langSuggest = "C# (C Sharp)";
    } else {
      langSuggest = "JavaScript";
    }

    $("form#suggester").hide();
    $(".user-name").text(userName);
    $("#suggest-strength").text(suggestStrength);
    $(".best-suggest").text(langSuggest);
    $("#language-suggestion").show();
  });
});
