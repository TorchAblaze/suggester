$(document).ready(function () {
  $("form#suggester").submit(function (event) {
    event.preventDefault();
    const progXP = parseInt(
      $("input:radio[name=prog-experience]:checked").val()
    );
    const color = parseInt($("input:radio[name=color]:checked").val());
    const devInterest = parseInt($("input:radio[name=interest]:checked").val());
    const animal = parseInt($("input:radio[name=animal]:checked").val());
    const chaotic = parseInt($("input:radio[name=chaotic]:checked").val());
    const time = parseInt($("input:radio[name=chaotic]:checked").val());
    const totalScore = progXP + color + devInterest + animal + chaotic + time;
    let langSuggest;

    if (totalScore <= 3) {
      langSuggest = "Ruby or Python";
    } else if (totalScore <= 7) {
      langSuggest = "C# (C Sharp)";
    } else if (totalScore === 8) {
      langSuggest = "maybe JavaScript";
    } else {
      langSuggest = "JavaScript";
    }

    $(".best-suggest").text(langSuggest);
    $("#language-suggestion").show();
  });
});
