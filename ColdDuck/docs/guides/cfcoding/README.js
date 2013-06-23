Ext.data.JsonP.cfcoding({"guide":"<h1 id='cfcoding-section-tips-for-coldfusion-to-improve-the-documentation'>Tips for ColdFusion to improve the documentation</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ol>\n<li><a href='#!/guide/cfcoding-section-hint-attribute'>Hint attribute</a></li>\n<li><a href='#!/guide/cfcoding-section-component-displayname-attribute'>Component Displayname attribute</a></li>\n<li><a href='#!/guide/cfcoding-section-colddoc-annotations'>ColdDoc annotations</a></li>\n</ol>\n</div>\n\n<p>ColdDuck leverages ColdDoc. ColdDoc uses the CF ComponentMetaData to generate the documentation about classes/components (including ORM), functions, parameters, properties, etc. So, you dont need to do anything to get that information into your documentation.</p>\n\n<p>In other words most of the work is done for you.</p>\n\n<h2 id='cfcoding-section-hint-attribute'>Hint attribute</h2>\n\n<p>ColdDuck looks for the 'hint' attribute on components, functions, parameters and properties and uses that information in the documentation. You can improve the look of the documentation by simply arranging your hint attributes in the following way.</p>\n\n<p>If your hints are short then the usual will suffice:</p>\n\n<pre><code>&lt;cfargument name=\"commentText\" required=\"yes\" hint=\"The comment text\"&gt;\n</code></pre>\n\n<p>If they are longer, I suggest the following format:</p>\n\n<pre><code>&lt;cffunction name=\"addComment\" returntype=\"any\" access=\"public\" hint=\"\nI add a comment to a blog post\n\nYou must always be nice in blog posts!  \n\"&gt;\n</code></pre>\n\n<p>ie make the hint the final attribute and start the text on a new line. It will look similar in the documentation - ie with line breaks, not just a long line of text. Of course, you could embed html tags in your text too - JSDuck renders the hints as HTML fragments. See <a href=\"../samples/superblogdocs/#!/api/SuperBlog.Comments\">SuperBlog.Comments</a> for an example. ie from the SuperBlog.Comments.CFC:</p>\n\n<pre><code>## Comments class\nI am a component that adds comments to posts.&lt;br&gt;I am being rendered using a combination of markdown and HTML. **Nifty!**\n\n#### ColdFusion tip:\nSince CF uses ## and so does Markdown, you need to double up your CF ## so that Markdown does the right thing.\n#### You can include code samples by indenting 4 spaces\n    My code example here\n\nFinally, some more info could go here....\n</code></pre>\n\n<p>Just suggestions.</p>\n\n<h2 id='cfcoding-section-component-displayname-attribute'>Component Displayname attribute</h2>\n\n<p>I have had a few issues when testing where sometimes (but not always) ColdDoc chokes if the cfcomponent tag does not have a 'displayname' attribute. I suspect it is something to do with my mapping tests or CF rather than ColdDoc. Just in case you experience this you can try adding the DisplayName.</p>\n\n<p>And, at present, the DisplayName attribute is not used in the documentation. It should probably be an option. I prefer to know exactly what the CFC is called. Others probably have a different view. If you want, it should be easy to fix. See the comment in the ColdDuckStrategy.cfc file in the getPackageAndName() method.</p>\n\n<h2 id='cfcoding-section-colddoc-annotations'>ColdDoc annotations</h2>\n\n<p>ColdDoc provided a way to use custom ColdDoc \"metatags\" to provide ColdDoc specific functionality for annotating your code. See <a href=\"https://github.com/markmandel/ColdDoc/wiki/List-of-Custom-Annotations\">https://github.com/markmandel/ColdDoc/wiki/List-of-Custom-Annotations</a> for details.</p>\n\n<p>I added colddoc:ignore to these (for the ColdDuck strategy only)</p>\n\n<h3 id='cfcoding-section-colddoc-abstract'>colddoc:abstract</h3>\n\n<p>Use it to mark a CFC as \"abstract\". It will be marked as such in JSDuck.\neg</p>\n\n<pre><code>&lt;cfcomponent displayname=\"MyBaseClass\" colddoc:abstract=\"true\" access=\"private\" hint=\"I am the base class.\"&gt;\n</code></pre>\n\n<p>Look at the <a href=\"../samples/superblogdocs/#!/api/SuperBlog.MyBaseClass\">SuperBlog sample documentation for the MyBaseClass class</a>. You will see a grey \"Abstract\" tag next to the Class name. This class is also marked Private due to it having 'access=\"private\"' specified in the cfcomponent tag.</p>\n\n<h3 id='cfcoding-section-colddoc-generic'>colddoc:generic</h3>\n\n<p>Provides a way to document the data types where a function return type or an argument is not a simple type. eg when passing or returning a CF struct.\neg if the getOptions() method returns a struct that has one numeric and one string field, this annotation will reveal that in the documentation. See the <a href=\"../samples/superblogdocs/#!/api/SuperBlog.Blog-method-getOptions\">SuperBlog.Blog class getOptions() method</a>.</p>\n\n<pre><code>&lt;cffunction name=\"getOptions\" returntype=\"struct\" colddoc:generic=\"numeric,string\" access=\"public\" hint=\"Return the current instance.options structure\"&gt;\n</code></pre>\n\n<p>At present, it does not provide a way to <em>automatically</em> include the field names or descriptions. Of course you could always hand code that into the hint of the function if you wished. And, someone might add that functionality to the ColdDuckStrategy.cfc ;-)</p>\n\n<h3 id='cfcoding-section-colddoc-ignore'>colddoc:ignore</h3>\n\n<p>There may be CFCs or functions that you do NOT want to include in the documentation. This is a separate situation to Abstract or Private classes. Setting this annotation means that the CFC or Function will NOT be included in the documentation. If the CFC is <em>extended</em> by other CFCs the child CFCs will still \"inherit\" the ignored CFC but the ignored CFC wont appear in the documentation as a class.\neg</p>\n\n<pre><code>&lt;cfcomponent displayname=\"Secret\" extends=\"MyBaseClass\" colddoc:ignore hint=\"My secret CFC\"&gt;\n</code></pre>\n\n<p>At present this annotation is for ColdDuck only.</p>\n","title":"Tips for ColdFusion to improve the documentation"});