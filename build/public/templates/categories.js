!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function t(e,s,o,a,r){return(o(s&&s.breadcrumbs&&s.breadcrumbs.length)?'\n<ol class="breadcrumb">\n\t'+t.blocks.breadcrumbs(e,s,o,a,r)+"\n</ol>\n":"")+'\n<div widget-area="header">\n\t'+t.blocks["widgets.header"](e,s,o,a,r)+'\n</div>\n<div class="row">\n\t<div class="'+(o(s&&s.widgets&&s.widgets.sidebar&&s.widgets.sidebar.length)?"col-lg-9 col-sm-12":"col-lg-12")+'">\n\t\t<h1 class="categories-title">[[pages:categories]]</h1>\n\t\t<ul class="categories" itemscope itemtype="http://www.schema.org/ItemList">\n\t\t\t'+t.blocks.categories(e,s,o,a,r)+'\n\t\t</ul>\n\t</div>\n\t<div widget-area="sidebar" class="col-lg-3 col-sm-12 '+(o(s&&s.widgets&&s.widgets.sidebar&&s.widgets.sidebar.length)?"":"hidden")+'">\n\t\t'+t.blocks["widgets.sidebar"](e,s,o,a,r)+'\n\t</div>\n</div>\n<div widget-area="footer">\n\t'+t.blocks["widgets.footer"](e,s,o,a,r)+"\n</div>\n"}return t.blocks={"widgets.footer":function(t,e,s,o,a){return o(s(e&&e.widgets&&e.widgets.footer),function(t,o,a){return"\n\t"+s(e&&e.widgets&&e.widgets.footer&&e.widgets.footer[t]&&e.widgets.footer[t].html)+"\n\t"})},"widgets.sidebar":function(t,e,s,o,a){return o(s(e&&e.widgets&&e.widgets.sidebar),function(t,o,a){return"\n\t\t"+s(e&&e.widgets&&e.widgets.sidebar&&e.widgets.sidebar[t]&&e.widgets.sidebar[t].html)+"\n\t\t"})},categories:function(t,e,s,o,a){return o(s(e&&e.categories),function(r,i,c){return'\n\t\t\t<li component="categories/category" data-cid="'+t.__escape(s(e&&e.categories&&e.categories[r]&&e.categories[r].cid))+'" data-numRecentReplies="1" class="row clearfix">\n\t<meta itemprop="name" content="'+t.__escape(s(e&&e.categories&&e.categories[r]&&e.categories[r].name))+'">\n\n\t<div class="content col-xs-12 '+(s(e&&e.config&&e.config.hideCategoryLastPost)?"col-md-10 col-sm-12":"col-md-7 col-sm-9")+'">\n\t\t<div class="icon pull-left" style="'+t.__escape(a(e,t,"generateCategoryBackground",[s(e&&e.categories&&e.categories[r])]))+'">\n\t\t\t<i class="fa fa-fw '+t.__escape(s(e&&e.categories&&e.categories[r]&&e.categories[r].icon))+'"></i>\n\t\t</div>\n\n\t\t<h2 class="title">\n\t\t\t'+(s(e&&e.categories&&e.categories[r]&&e.categories[r].isSection)?"\n"+t.__escape(s(e&&e.categories&&e.categories[r]&&e.categories[r].name))+"\n":"\n"+(s(e&&e.categories&&e.categories[r]&&e.categories[r].link)?'\n<a href="'+t.__escape(s(e&&e.categories&&e.categories[r]&&e.categories[r].link))+'" itemprop="url" target="_blank">\n':'\n<a href="'+t.__escape(s(e&&e.config&&e.config.relative_path))+"/category/"+t.__escape(s(e&&e.categories&&e.categories[r]&&e.categories[r].slug))+'" itemprop="url">\n')+"\n"+t.__escape(s(e&&e.categories&&e.categories[r]&&e.categories[r].name))+"\n</a>\n")+"<br/>\n\t\t\t"+(s(e&&e.categories&&e.categories[r]&&e.categories[r].descriptionParsed)?'\n\t\t\t<span class="description">'+t.__escape(s(e&&e.categories&&e.categories[r]&&e.categories[r].descriptionParsed))+"</span>\n\t\t\t":"")+"\n\t\t\t"+(s(e&&e.config&&e.config.hideSubCategories)?"":"\n\t\t\t"+t.__escape(a(e,t,"generateChildrenCategories",[s(e&&e.categories&&e.categories[r])]))+"\n\t\t\t")+'\n\t\t</h2>\n\t\t<span class="visible-xs pull-right">\n\t\t\t'+(s(e&&e.categories&&e.categories[r]&&e.categories[r].teaser&&e.categories[r].teaser.timestampISO)?'\n\t\t\t<a class="permalink" href="'+t.__escape(s(e&&e.categories&&e.categories[r]&&e.categories[r].teaser&&e.categories[r].teaser.url))+'">\n\t\t\t\t<small class="timeago" title="'+t.__escape(s(e&&e.categories&&e.categories[r]&&e.categories[r].teaser&&e.categories[r].teaser.timestampISO))+'"></small>\n\t\t\t</a>\n\t\t\t':"")+"\n\t\t</span>\n\t</div>\n\n\t"+(s(e&&e.categories&&e.categories[r]&&e.categories[r].link)?"":'\n\t<div class="col-md-1 hidden-sm hidden-xs stats">\n\t\t<span class="'+t.__escape(s(e&&e.categories&&e.categories[r]&&e.categories[r]["unread-class"]))+' human-readable-number" title="'+t.__escape(s(e&&e.categories&&e.categories[r]&&e.categories[r].totalTopicCount))+'">'+t.__escape(s(e&&e.categories&&e.categories[r]&&e.categories[r].totalTopicCount))+'</span><br />\n\t\t<small>[[global:topics]]</small>\n\t</div>\n\t<div class="col-md-1 hidden-sm hidden-xs stats">\n\t\t<span class="'+t.__escape(s(e&&e.categories&&e.categories[r]&&e.categories[r]["unread-class"]))+' human-readable-number" title="'+t.__escape(s(e&&e.categories&&e.categories[r]&&e.categories[r].totalPostCount))+'">'+t.__escape(s(e&&e.categories&&e.categories[r]&&e.categories[r].totalPostCount))+"</span><br />\n\t\t<small>[[global:posts]]</small>\n\t</div>\n\t"+(s(e&&e.config&&e.config.hideCategoryLastPost)?"":'\n\t<div class="col-md-3 col-sm-3 teaser hidden-xs" component="topic/teaser">\n\t\t<div class="card" style="border-color: '+t.__escape(s(e&&e.categories&&e.categories[r]&&e.categories[r].bgColor))+'">\n\t'+(s(e&&e.categories&&e.categories[r]&&e.categories[r].posts)?o(s(e&&e.categories&&e.categories[r]&&e.categories[r].posts),function(o,a,i){return"\n\t"+(0===a?'\n\t<div component="category/posts">\n\t\t<p>\n\t\t\t<a href="'+t.__escape(s(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(s(e&&e.categories&&e.categories[r]&&e.categories[r].posts&&e.categories[r].posts[o]&&e.categories[r].posts[o].user&&e.categories[r].posts[o].user.userslug))+'">\n\t\t\t\t'+(s(e&&e.categories&&e.categories[r]&&e.categories[r].posts&&e.categories[r].posts[o]&&e.categories[r].posts[o].user&&e.categories[r].posts[o].user.picture)?'\n\t\t\t\t<img class="user-img" title="'+t.__escape(s(e&&e.categories&&e.categories[r]&&e.categories[r].posts&&e.categories[r].posts[o]&&e.categories[r].posts[o].user&&e.categories[r].posts[o].user.username))+'" alt="'+t.__escape(s(e&&e.categories&&e.categories[r]&&e.categories[r].posts&&e.categories[r].posts[o]&&e.categories[r].posts[o].user&&e.categories[r].posts[o].user.username))+'" src="'+t.__escape(s(e&&e.categories&&e.categories[r]&&e.categories[r].posts&&e.categories[r].posts[o]&&e.categories[r].posts[o].user&&e.categories[r].posts[o].user.picture))+'">\n\t\t\t\t':'\n\t\t\t\t<span class="user-icon user-img" title="'+t.__escape(s(e&&e.categories&&e.categories[r]&&e.categories[r].posts&&e.categories[r].posts[o]&&e.categories[r].posts[o].user&&e.categories[r].posts[o].user.username))+'" style="background-color: '+t.__escape(s(e&&e.categories&&e.categories[r]&&e.categories[r].posts&&e.categories[r].posts[o]&&e.categories[r].posts[o].user&&e.categories[r].posts[o].user["icon:bgColor"]))+';">'+t.__escape(s(e&&e.categories&&e.categories[r]&&e.categories[r].posts&&e.categories[r].posts[o]&&e.categories[r].posts[o].user&&e.categories[r].posts[o].user["icon:text"]))+"</span>\n\t\t\t\t")+'\n\t\t\t</a>\n\t\t\t<a class="permalink" href="'+t.__escape(s(e&&e.config&&e.config.relative_path))+"/topic/"+t.__escape(s(e&&e.categories&&e.categories[r]&&e.categories[r].posts&&e.categories[r].posts[o]&&e.categories[r].posts[o].topic&&e.categories[r].posts[o].topic.slug))+(s(e&&e.categories&&e.categories[r]&&e.categories[r].posts&&e.categories[r].posts[o]&&e.categories[r].posts[o].index)?"/"+t.__escape(s(e&&e.categories&&e.categories[r]&&e.categories[r].posts&&e.categories[r].posts[o]&&e.categories[r].posts[o].index)):"")+'">\n\t\t\t\t<small class="timeago" title="'+t.__escape(s(e&&e.categories&&e.categories[r]&&e.categories[r].posts&&e.categories[r].posts[o]&&e.categories[r].posts[o].timestampISO))+'"></small>\n\t\t\t</a>\n\t\t</p>\n\t\t<div class="post-content">\n\t\t\t'+t.__escape(s(e&&e.categories&&e.categories[r]&&e.categories[r].posts&&e.categories[r].posts[o]&&e.categories[r].posts[o].content))+"\n\t\t</div>\n\t</div>\n\t":"")+"\n\t"}):o(s(e&&e.posts),function(o,a,r){return"\n\t"+(0===a?'\n\t<div component="category/posts">\n\t\t<p>\n\t\t\t<a href="'+t.__escape(s(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(s(e&&e.posts&&e.posts[o]&&e.posts[o].user&&e.posts[o].user.userslug))+'">\n\t\t\t\t'+(s(e&&e.posts&&e.posts[o]&&e.posts[o].user&&e.posts[o].user.picture)?'\n\t\t\t\t<img class="user-img" title="'+t.__escape(s(e&&e.posts&&e.posts[o]&&e.posts[o].user&&e.posts[o].user.username))+'" alt="'+t.__escape(s(e&&e.posts&&e.posts[o]&&e.posts[o].user&&e.posts[o].user.username))+'" src="'+t.__escape(s(e&&e.posts&&e.posts[o]&&e.posts[o].user&&e.posts[o].user.picture))+'">\n\t\t\t\t':'\n\t\t\t\t<span class="user-icon user-img" title="'+t.__escape(s(e&&e.posts&&e.posts[o]&&e.posts[o].user&&e.posts[o].user.username))+'" style="background-color: '+t.__escape(s(e&&e.posts&&e.posts[o]&&e.posts[o].user&&e.posts[o].user["icon:bgColor"]))+';">'+t.__escape(s(e&&e.posts&&e.posts[o]&&e.posts[o].user&&e.posts[o].user["icon:text"]))+"</span>\n\t\t\t\t")+'\n\t\t\t</a>\n\t\t\t<a class="permalink" href="'+t.__escape(s(e&&e.config&&e.config.relative_path))+"/topic/"+t.__escape(s(e&&e.posts&&e.posts[o]&&e.posts[o].topic&&e.posts[o].topic.slug))+(s(e&&e.posts&&e.posts[o]&&e.posts[o].index)?"/"+t.__escape(s(e&&e.posts&&e.posts[o]&&e.posts[o].index)):"")+'">\n\t\t\t\t<small class="timeago" title="'+t.__escape(s(e&&e.posts&&e.posts[o]&&e.posts[o].timestampISO))+'"></small>\n\t\t\t</a>\n\t\t</p>\n\t\t<div class="post-content">\n\t\t\t'+t.__escape(s(e&&e.posts&&e.posts[o]&&e.posts[o].content))+"\n\t\t</div>\n\t</div>\n\t":"")+"\n\t"}))+"\n\n\t"+(s(e&&e.categories&&e.categories[r]&&e.categories[r].posts&&e.categories[r].posts.length)?"":'\n\t<div component="category/posts">\n\t\t<div class="post-content">\n\t\t\t[[category:no_new_posts]]\n\t\t</div>\n\t</div>\n\t')+"\n</div>\n\n\t</div>\n\t")+"\n\t")+"\n</li>\n\n\t\t\t"})},"widgets.header":function(t,e,s,o,a){return o(s(e&&e.widgets&&e.widgets.header),function(t,o,a){return"\n\t"+s(e&&e.widgets&&e.widgets.header&&e.widgets.header[t]&&e.widgets.header[t].html)+"\n\t"})},breadcrumbs:function(t,e,s,o,a){return o(s(e&&e.breadcrumbs),function(o,a,r){return"\n\t<li"+(a===r-1?' component="breadcrumb/current"':"")+' itemscope="itemscope" itemtype="http://data-vocabulary.org/Breadcrumb" '+(a===r-1?'class="active"':"")+">\n\t\t"+(a!==r-1?'<a href="'+t.__escape(s(e&&e.breadcrumbs&&e.breadcrumbs[o]&&e.breadcrumbs[o].url))+'" itemprop="url">':"")+'\n\t\t\t<span itemprop="title">\n\t\t\t\t'+t.__escape(s(e&&e.breadcrumbs&&e.breadcrumbs[o]&&e.breadcrumbs[o].text))+"\n\t\t\t\t"+(a===r-1?"\n\t\t\t\t"+(s(e&&e["feeds:disableRSS"])?"":"\n\t\t\t\t"+(s(e&&e.rssFeedUrl)?'<a target="_blank" href="'+t.__escape(s(e&&e.rssFeedUrl))+'"><i class="fa fa-rss-square"></i></a>':""))+"\n\t\t\t\t":"")+"\n\t\t\t</span>\n\t\t"+(a!==r-1?"</a>":"")+"\n\t</li>\n\t"})}},t});