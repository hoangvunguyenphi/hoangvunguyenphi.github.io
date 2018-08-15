/* jQuery Ajax Mail Send Script */

(function($) {
  $(function() {
    var contactForm = $("#gform");
    var $alert = $(".site-alert");
    var submitted = false;

    $("#gform").on("submit", function(e) {
      if (contactForm.valid()) {
        $("#gform *").fadeOut(2000);
        $("#gform").prepend("Your submission has been processed...");
      }
    });
  });

  $.fn.clearForm = function() {
    return this.each(function() {
      var type = this.type,
        tag = this.tagName.toLowerCase();
      if (tag == "form") return $(":input", this).clearForm();
      if (type == "text" || type == "password" || tag == "textarea")
        this.value = "";
      else if (type == "checkbox" || type == "radio") this.checked = false;
      else if (tag == "select") this.selectedIndex = -1;
    });
  };
})(jQuery);
