Ext.data.JsonP.introduction({"guide":"<h1 id='introduction-section-introduction'>Introduction</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ol>\n<li><a href='#!/guide/introduction-section-coldduck'>ColdDuck</a></li>\n<li><a href='#!/guide/introduction-section-background'>Background</a></li>\n<li><a href='#!/guide/introduction-section-my-cf-to-jsduck-strategy'>My CF to JSDuck strategy</a></li>\n<li><a href='#!/guide/introduction-section-sample-application'>Sample application</a></li>\n</ol>\n</div>\n\n<p><strong>This is a beta version (v0.1) - no guarantees!</strong> Having said that it all seems to work nicely but I am the only tester so far. I have tested this using CF9, ColdDoc 1.0 and JSDuck 4.10.</p>\n\n<h2 id='introduction-section-coldduck'>ColdDuck</h2>\n\n<p>... beautiful documentation for your ColdFusion classes using ColdDoc and JSDuck.</p>\n\n<h2 id='introduction-section-background'>Background</h2>\n\n<p>I have been developing a set of ColdFusion CFCs recently and wanted to produce some nice documentation. After much searching I installed <a href=\"http://www.compoundtheory.com/?action=colddoc.index\">ColdDoc</a> and ran it. It produced a good set of documentation in the JavaDoc style. Thanks to <a href=\"http://www.compoundtheory.com/\">Mark Mandel at CompoundTheory</a>!</p>\n\n<p>Here is the ColdDoc JavaDoc style documentation: <a href=\"http://markmandel.github.io/ColdDoc/docs/\">http://markmandel.github.io/ColdDoc/docs/</a></p>\n\n<p>As well as ColdFusion I use <a href=\"http://www.sencha.com/products/extjs/\">ExtJS</a>. ExtJS and Sench Touch has great documentation that is created using <a href=\"https://github.com/senchalabs/jsduck/wiki\">JSDuck</a> (which is actually an open source Sencha product). Indeed, the very documentation you are reading now was created using JSDuck.</p>\n\n<p>A full implementation of JSDuck can be seen at the Sencha ExtJS API documentation site: <a href=\"http://docs.sencha.com/extjs/4.1.3/\">http://docs.sencha.com/extjs/4.1.3/</a></p>\n\n<p>I have been a consumer of the ExtJS documentation for a while now and wanted to be able to use JSDuck for my ColdFusion CFCs. But how? While I am a JSDuck novice I figured that trying to make JSDuck produce documentation directly from ColdFusion CFCs was likely to result in tears (mine!). So, after some thought, I came up with another strategy that users of other programming languages might want to consider.</p>\n\n<p><strong>Note:</strong> <em>I am a JSDuck novice, a part-time ColdFusion coder and a first time GitHub user. I don't know much about Macs so this is all a bit Windows-centric even though everything should work on a Mac (apart from the Windows command lines of course!). Any helpful advice will be gratefully accepted.</em></p>\n\n<h2 id='introduction-section-my-cf-to-jsduck-strategy'>My CF to JSDuck strategy</h2>\n\n<p>Mark Mandel's ColdDoc can be extended to produce different kinds of output by utilising a \"strategy\" cfc. It comes with one that produces the JavaDoc style HTML format. Strategies utilise the CF ComponentMetaData. So, I made my own strategy that takes ColdFusion CFCs and makes a pseudo-app in JavaScript code that is annotated using JSDuck formatting. Of course it auto-documents functions etc and picks up the 'hint' attributes where it finds them and uses all that to produce the raw material for rich documentation. It also works with CF ORM CFCs (although this part could be made even richer than it is at present).</p>\n\n<p>So, for example, this MyBaseClass.CFC</p>\n\n<pre><code>&lt;cfcomponent displayname=\"MyBaseClass\"  output=\"false\" hint=\"\nI am the base class.\n\nI have all sorts of wonderful functionality that my normal CFCs can inherit.\n\"&gt;\n\n    &lt;cffunction name=\"writeToLog\" returntype=\"void\" access=\"private\" hint=\"\n    I write something to a log file.\n    \"&gt;\n        &lt;cfargument name=\"something\" type=\"any\" required=\"no\" default=\"\" hint=\"Some text or object or whatever that you want to log\"&gt;\n        &lt;cfscript&gt;\n            var logPath = \"\";\n            // Do something in here then return\n            return \"\";\n        &lt;/cfscript&gt;\n    &lt;/cffunction&gt;\n\n&lt;/cfcomponent&gt;\n</code></pre>\n\n<p>becomes this MyBaseClass.JS file in the generated pseudoApp folder:</p>\n\n<pre><code>/**\nI am the base class.\n\nI have all sorts of wonderful functionality that my normal CFCs can inherit.\n*/\nExt.define('SuperBlog.MyBaseClass',{\nextend: \"WEB-INF.cftags.component\",\n\n    /**\n    I write something to a log file.\n\n    @private\n    @param {any} [something=''] Some text or object or whatever that you want to log\n    @return {void}\n    */\n    writeToLog: function(something){}\n\n});\n</code></pre>\n\n<p>Then, I simply use JSDuck to read the JS pseudoApp to produce the final documentation. You can see the sample result here: <a href=\"../samples/superblogdocs/#!/api/SuperBlog.MyBaseClass\">../samples/superblogdocs/#!/api/SuperBlog.MyBaseClass</a> (right click / command click to open in a new tab)</p>\n\n<h2 id='introduction-section-sample-application'>Sample application</h2>\n\n<p>ColdDuck comes with a sample CF application called SuperBlog that has a few do-nothing CFCs so that you can play around with the system.</p>\n\n<p>You can view the SuperBlog sample application documented using the ColdDuck process here:\n<a href=\"../samples/superblogdocs/\">../samples/superblogdocs/</a> (right click / command click to open in a new tab)</p>\n\n<p>Ready to try it? Check out the <a href=\"../docs/#!/guide/setup\">Setup ColdDuck</a> page.</p>\n\n<p>Happy documenting!</p>\n\n<p>Murray</p>\n\n<p>PS: While you are documenting your CFCs you might want to listen to our musical namesakes:<a href=\"http://www.coldduck.com/tunes.php\">http://www.coldduck.com/tunes.php</a> - very groovy!</p>\n","title":"Introduction"});