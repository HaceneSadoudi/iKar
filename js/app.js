$(document).ready(function () {
  // PASSWORD HIDE/SHOW TOGGLE
  $(document).on("click", ".pwdToggle", (e) => {
    var pwdInput = $(e.currentTarget).parent().find("input");
    var icon = e.target == e.currentTarget 
        ? $(e.target).children().first() // e.target == e.currentTarget == <button>
        : $(e.target); // e.target == <i> AND e.currentTarget == <button>
    if (pwdInput.attr("type") == "password") {
      pwdInput.prop("type", "text");
      icon.addClass("fa-eye-slash");      
    } else {
      pwdInput.prop("type", "password");
      icon.removeClass("fa-eye-slash");
    }
  });
});
