Codify
======
While working on writing documentation for Bizo's fork of Bootstrap, [Bizstrap](http://bizo.github.com/bizstrap) we realized writing documentation for  HTML/CSS frameworks is no fun. You often have to copy/paste code for your visual examples into pre/code tags so readers can easily copy/paste examples. Then when you change the visual example you might forget to update the code in your pre/code tags leading to faulty docs. There is no need to do this manually - codify generates pre/code tags with source code for you.  

It's a simple jQuery Plugin, easy as pie

Usage
======

Given some HTML like so:

    <div id="widgetA">
      <div class="code-example">
        <ul class="widget-a">
            <!-- Extra Markup -->
        </ul>
      </div>
    </div>

When you execute:

    $(document).ready(function() {
      $("body").codify(".code-example");
    });

Then codify will automatically document the source code for you eg: 


    <div id="widgetA">
      <div class="code-example">
        <ul class="widget-a">
            <!-- Markup -->
        </ul>
      </div>

      <pre>
        <code>
          &lt;ul class="widget-a"&gt;
            <!-- Extra Markup -->
          &lt;/ul&gt;
        <code>
      </pre>
    </div>

Boom! no more copy pasting your visual examples into code/pre tags

You need not use ".code-example", you can  pass in any valid jQuery selector you like too!
