Ext.data.JsonP.cfcoding({"guide":"<h1 id='cfcoding-section-tips-to-improve-the-documentation-of-your-cfcs'>Tips to improve the documentation of your CFCs</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ol>\n<li><a href='#!/guide/cfcoding-section-hint-attribute'>Hint attribute</a></li>\n<li><a href='#!/guide/cfcoding-section-code-samples-in-the-hint-attribute'>Code samples in the Hint attribute</a></li>\n<li><a href='#!/guide/cfcoding-section-markdown-in-hints'>Markdown in Hints</a></li>\n<li><a href='#!/guide/cfcoding-section-component-displayname-attribute'>Component Displayname attribute</a></li>\n<li><a href='#!/guide/cfcoding-section-colddoc-annotations'>ColdDoc annotations</a></li>\n<li><a href='#!/guide/cfcoding-section-coldduck-annotations'>ColdDuck annotations</a></li>\n</ol>\n</div>\n\n<p>ColdDuck leverages ColdDoc. ColdDoc uses the CF ComponentMetaData to generate the documentation about classes/components (including ORM), functions, parameters, properties, etc. So, you dont need to do anything to get that information into your documentation.</p>\n\n<p>In other words most of the work is done for you. There are a few things you can do to customise your documentation.</p>\n\n<h2 id='cfcoding-section-hint-attribute'>Hint attribute</h2>\n\n<p>ColdDuck looks for the 'hint' attribute on components, functions, parameters and properties and uses that information in the documentation. You can improve the look of the documentation by simply arranging your hint attributes in the following way.</p>\n\n<p>If your hints are short then the usual will suffice:</p>\n\n<pre><code>&lt;cfargument name=\"commentText\" required=\"yes\" hint=\"The comment text\"&gt;\n</code></pre>\n\n<p>If they are longer, I suggest the following format:</p>\n\n<pre><code>&lt;cffunction name=\"addComment\" returntype=\"any\" access=\"public\" hint=\"\nI add a comment to a blog post\n\nYou must always be nice in blog posts!  \n\"&gt;\n</code></pre>\n\n<p>ie make the hint the final attribute and start the text on a new line. It will look similar in the documentation - ie with line breaks, not just a long line of text. Of course, you could embed html tags in your text too - JSDuck renders the hints as HTML fragments. See <a href=\"../samples/superblogdocs/#!/api/SuperBlog.Comments\">SuperBlog.Comments</a> for an example. ie from the SuperBlog.Comments.CFC:</p>\n\n<pre><code>## Comments class\nI am a component that adds comments to posts.&lt;br&gt;I am being rendered using a combination of markdown and HTML. **Nifty!**\n\n#### ColdFusion tip:\nSince CF uses ## and so does Markdown, you need to double up your CF ## so that Markdown does the right thing.\n#### You can include code samples by indenting 4 spaces\n    My code example here\n\nFinally, some more info could go here....\n</code></pre>\n\n<p>Just suggestions.</p>\n\n<h2 id='cfcoding-section-code-samples-in-the-hint-attribute'>Code samples in the Hint attribute</h2>\n\n<p>Markdown (which JSDuck uses) will treat any text that is indented by 4 spaces as a code sample. This is really useful. And there is a small pitfall. If you code your hints as suggested you need to watch out for the indenting in your CFCs.</p>\n\n<p>eg this will display the argument's hint text as normal text because evertying starts in column 1:</p>\n\n<pre><code>&lt;cffunction name=\"myClass\" returntype=\"any\" access=\"public\" hint=\"\nMy hint text ...\n\"&gt;\n&lt;cfargument name=\"myArgument\" type=\"string\" required=\"yes\" hint=\"\nMy argument text    \n\"&gt;\n&lt;/cffunction&gt;\n</code></pre>\n\n<p>while this will show the argument as a code sample because it is indented 4 spaces (assuming the cffunction tag is in column 1):</p>\n\n<pre><code>&lt;cffunction name=\"myClass\" returntype=\"any\" access=\"public\" hint=\"\nMy hint text ...\n\"&gt;\n    &lt;cfargument name=\"myArgument\" type=\"string\" required=\"yes\" hint=\"\n    My argument text    \n    \"&gt;\n&lt;/cffunction&gt;\n</code></pre>\n\n<h2 id='cfcoding-section-markdown-in-hints'>Markdown in Hints</h2>\n\n<p>You can include Markdown in your hints (and HTML too if you want). For bold and italic the markdown is <strong>Bold</strong> and <em>italic</em>. I have noticed that if you are starting a line with bold or italic in a hint you need to add an extra * to the start.\neg</p>\n\n<pre><code>***This is bold** and **so is this**\n\n**This is italic* and *so is this* \n</code></pre>\n\n<p>I think it is because JSDuck is assuming this kind of comment style:</p>\n\n<pre><code>/**\n * \n */\n</code></pre>\n\n<p>whereas for CF hints we dont want to be bothered with all the extra ** and ColdDuck doesnt generate them (on purpose).</p>\n\n<h2 id='cfcoding-section-component-displayname-attribute'>Component Displayname attribute</h2>\n\n<p>I have had a few issues when testing where sometimes (but not always) ColdDoc chokes if the cfcomponent tag does not have a 'displayname' attribute. I suspect it is something to do with my mapping tests or CF rather than ColdDoc. Just in case you experience this you can try adding the DisplayName.</p>\n\n<p>And, at present, the DisplayName attribute is not used in the documentation. It should probably be an option. I prefer to know exactly what the CFC is called. Others probably have a different view. If you want, it should be easy to fix. See the comment in the ColdDuckStrategy.cfc file in the getPackageAndName() method.</p>\n\n<h2 id='cfcoding-section-colddoc-annotations'>ColdDoc annotations</h2>\n\n<p>ColdDoc provided a way to use custom ColdDoc \"metatags\" to provide ColdDoc specific functionality for annotating your code. See <a href=\"https://github.com/markmandel/ColdDoc/wiki/List-of-Custom-Annotations\">https://github.com/markmandel/ColdDoc/wiki/List-of-Custom-Annotations</a> for details.</p>\n\n<p>I added colddoc:ignore to these (for the ColdDuck strategy only)</p>\n\n<h3 id='cfcoding-section-colddoc-abstract'>colddoc:abstract</h3>\n\n<p>Use it to mark a CFC as \"abstract\". It will be marked as such in JSDuck.\neg</p>\n\n<pre><code>&lt;cfcomponent displayname=\"MyBaseClass\" colddoc:abstract=\"true\" access=\"private\" hint=\"I am the base class.\"&gt;\n</code></pre>\n\n<p>Look at the <a href=\"../samples/superblogdocs/#!/api/SuperBlog.MyBaseClass\">SuperBlog sample documentation for the MyBaseClass class</a>. You will see a grey \"Abstract\" tag next to the Class name. This class is also marked Private due to it having 'access=\"private\"' specified in the cfcomponent tag.</p>\n\n<h3 id='cfcoding-section-colddoc-generic'>colddoc:generic</h3>\n\n<p>Provides a way to document the data types where a function return type or an argument is not a simple type. eg when passing or returning a CF struct.\neg if the getOptions() method returns a struct that has one numeric and one string field, this annotation will reveal that in the documentation. See the <a href=\"../samples/superblogdocs/#!/api/SuperBlog.Blog-method-getOptions\">SuperBlog.Blog class getOptions() method</a>.</p>\n\n<pre><code>&lt;cffunction name=\"getOptions\" returntype=\"struct\" colddoc:generic=\"numeric,string\" access=\"public\" hint=\"Return the current instance.options structure\"&gt;\n</code></pre>\n\n<p>At present, it does not provide a way to <em>automatically</em> include the field names or descriptions. Of course you could always hand code that into the hint of the function if you wished. And, someone might add that functionality to the ColdDuckStrategy.cfc ;-)</p>\n\n<h2 id='cfcoding-section-coldduck-annotations'>ColdDuck annotations</h2>\n\n<h3 id='cfcoding-section-colddoc-ignore'>colddoc:ignore</h3>\n\n<p>There may be CFCs or functions that you do NOT want to include in the documentation. This is a separate situation to Abstract or Private classes. Setting this annotation means that the CFC or Function will NOT be included in the documentation. If the CFC is <em>extended</em> by other CFCs the child CFCs will still \"inherit\" the ignored CFC but the ignored CFC wont appear in the documentation as a class.\neg</p>\n\n<pre><code>&lt;cfcomponent displayname=\"Secret\" extends=\"MyBaseClass\" colddoc:ignore hint=\"My secret CFC\"&gt;\n</code></pre>\n\n<p>At present this annotation is for ColdDuck only.</p>\n\n<h3 id='cfcoding-section--lt-lt-coldducktable'>&lt;&lt;coldducktable</h3>\n\n<p>Neither Markdown sytax nor JSDuck provide a way to include a table. You can, of course, use html in your Hint attributes in ColdFusion to hand code a table. I needed to do this and rather than coding the html I decided to add a special tag that you can include in any hint that will generate a html table for you.\neg</p>\n\n<pre><code>&lt;&lt;coldducktable{\n    \"tableAttr\" : \"border=1\",\n    \"cellStyle\" : \"padding:4px;\",\n    \"delim\"     : \"^\",\n    \"rows\"      : [\n         \"Style^Comment\"\n        ,\"font-size^Set the font size\"\n        ,\"color^Sets the font colour\"\n        ,\"background-color^Sets the background of the body of the comment\"\n    ]                       \n}\n&gt;&gt;\n</code></pre>\n\n<p>Now, if your table is small it would be easier to code it directly in html yourself. If it is longer, the syntax above might be more compact. It is just another option.</p>\n\n<p><strong>Note</strong> I tried using the html TABLE cellPadding attribute instead of adding the cellStyle to each TD, however it seems that jsDuck ignores the table cellPadding attribute.</p>\n\n<p>See the ColdDuckStrategy.processColdDuckCustomTags() method. This is marked as experimental.</p>\n","title":"Tips to improve the documentation of your CFCs"});