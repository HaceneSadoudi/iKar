/* ############################################################# */
/* ####################  SHOW INPUT ERROR  ##################### */
/* ############################################################# */
var showError = function (input, message = "") {
  const input_group = input.parents('.input-group');
  const small = input_group.find("small");
  input_group.removeClass("success").addClass("error");
  small.text(message);
};
