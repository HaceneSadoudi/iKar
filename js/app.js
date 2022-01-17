$(document).ready(function () {
  // PASSWORD HIDE/SHOW TOGGLE
  $(document).on("click", ".pwdToggle", (e) => {
    var pwdInput = $(e.currentTarget).parent().find("input");
    if (pwdInput.attr("type") == "password") {
      pwdInput.prop("type", "text");
    } else {
      pwdInput.prop("type", "password");
    }
  });
});
