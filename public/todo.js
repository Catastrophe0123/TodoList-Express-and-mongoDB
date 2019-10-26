
$("input[type = 'text']").on('keypress', function (event) {
    if (event.which === 13) {
        $("input[type = 'text']").closest("form").submit();
    }
});


$('ul').on('click', 'li', function (event) {
    $(this).toggleClass("completed");
    let complete = $(this).hasClass("completed");
    $(this).children("input[type = 'hidden']")[0].value = complete;
    $(this).closest("form").submit();
});


$("ul").on({
    mouseenter: function () {
        $(this).children().attr("style", "display: contents");
    },
    mouseleave: function () {
        $(this).children().attr("style", "display: none");
    }
}, "li");

$("ul").on("click", "li a", function (event) {
    event.preventDefault();
    $.post(this.href, function (data) {
        console.log("oqiweoqdjasmxm");
    })
})

