/* ############################################################# */
/* ####################  SHOW INPUT ERROR  ##################### */
/* ############################################################# */
var showError = function (input, message = "") {
  const input_group = input.parents(".input-group");
  const small = input_group.find("small");
  input_group.removeClass("success").addClass("error");
  small.text(message);
};
/* ############################################################# */
/* ####################  HIDE INPUT ERROR  ##################### */
/* ############################################################# */
var hideError = function (input) {
  const input_group = input.parents(".input-group");
  input_group.removeClass("error");
};
/* ############################################################# */
/* ####################  SHOW INPUT SUCCESS  ################### */
/* ############################################################# */
var showSuccess = function (input) {
  const input_group = input.parents(".input-group");
  input_group.removeClass("error").addClass("success");
};

export { showError, hideError, showSuccess };
