/* 
   eg. $("body").codify(".code-example");

   will append pre/code blocks containing the source code
   of any elements wrapped in a .code-example container
*/ 
(function($) {
  function codifyElement(obj) {
    var parent_node = obj.parent();

    var html = obj.html()
              .replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;");

    var code = $("<code></code>");
    code.append(html);

    var pre = $("<pre></pre>");
    pre.append(code);

    parent_node.append(pre);

    return obj;
  }

  $.fn.codify = function(cssSelector) {
    var settings = $.extend({
      selector: ".code-example"
    }, cssSelector);

    return this.find(settings.selector).each(function(i, item) {
      codifyElement($(item));
    });
  }
})(jQuery);
