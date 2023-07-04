$(document).ready(function() {
    $("#form").submit(function(event) {
      event.preventDefault();

        var nome = $("#input").val();

        var listItem = $("<li>").text(nome);

        listItem.click(function() {
        $(this).toggleClass("completo");
        });

        $("#lista").append(listItem);

        $("#input").val("");
    });
});