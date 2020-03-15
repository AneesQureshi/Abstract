$(document).ready(function () {
    $("input[type='submit']").click(function (e) {
        if ($("#role").val() === "-1") {
           e.preventDefault();
           // display error msg beside ddl too
      }
    });
}
)