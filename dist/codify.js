/* 
   eg. $("body").codify(".code-example");

   will append pre/code blocks containing the source code
   of any elements wrapped in a .code-example container
*/ 
(function($) {
  function codifyElement(obj, outputClass) {
    var parent_node = obj.parent();

    var html = obj.html()
              .replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;");

    var code = $("<code></code>");
    code.append(html);

    var pre = $("<pre></pre>").addClass(outputClass);
    pre.append(code);

    obj.append(pre);

    return obj;
  }

  $.fn.codify = function(cssSelector, outputClass) {
    var settings = $.extend({
      selector: ".code-example",
      outputClass: "prettyprint"
    }, { selector: cssSelector, outputClass: outputClass });

    return this.find(settings.selector).each(function(i, item) {
      codifyElement($(item), settings.outputClass);
    });
  }
})(jQuery);
