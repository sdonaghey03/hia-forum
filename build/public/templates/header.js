!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function t(n,a,e,s,i){return'<!DOCTYPE html>\n<html lang="'+n.__escape(i(a,n,"localeToHTML",[e(a&&a.userLang),e(a&&a.defaultLang)]))+'" '+(e(a&&a.languageDirection)?'data-dir="'+n.__escape(e(a&&a.languageDirection))+'" style="direction: '+n.__escape(e(a&&a.languageDirection))+';" ':"")+" >\n<head>\n\t<title>"+n.__escape(e(a&&a.browserTitle))+"</title>\n\t"+t.blocks.metaTags(n,a,e,s,i)+'\n\t<link rel="stylesheet" type="text/css" href="'+n.__escape(e(a&&a.relative_path))+"/assets/stylesheet.css?"+n.__escape(e(a&&a.config&&a.config["cache-buster"]))+'" />\n\t'+(e(a&&a.bootswatchCSS)?'<link id="bootswatchCSS" href="'+n.__escape(e(a&&a.bootswatchCSS))+'" rel="stylesheet" media="screen">':"")+"\n\t"+t.blocks.linkTags(n,a,e,s,i)+'\n\n\t<script>\n\t\tvar RELATIVE_PATH = "'+n.__escape(e(a&&a.relative_path))+"\";\n\t\tvar config = JSON.parse('"+e(a&&a.configJSON)+"');\n\t\tvar app = {\n\t\t\ttemplate: \""+n.__escape(e(a&&a.template&&a.template.name))+"\",\n\t\t\tuser: JSON.parse('"+e(a&&a.userJSON)+"')\n\t\t};\n\t<\/script>\n\n\t<script src=\""+n.__escape(e(a&&a.relative_path))+"/assets/nodebb.min.js?"+n.__escape(e(a&&a.config&&a.config["cache-buster"]))+'"><\/script>\n\n\t'+t.blocks.scripts(n,a,e,s,i)+"\n\n\t"+(e(a&&a.useCustomJS)?"\n\t"+e(a&&a.customJS)+"\n\t":"")+"\n\t"+(e(a&&a.useCustomCSS)?'\n\t<style type="text/css">'+e(a&&a.customCSS)+"</style>\n\t":"")+'\n</head>\n\n<body class="'+n.__escape(e(a&&a.bodyClass))+" skin-"+n.__escape(e(a&&a.config&&a.config.bootswatchSkin))+'">\n\t<nav id="menu" class="hidden">\n\t\t<div class="menu-profile">\n\t\t\t'+(e(a&&a.user&&a.user.uid)?"\n\t\t\t"+(e(a&&a.user&&a.user.picture)?'\n\t\t\t<img src="'+n.__escape(e(a&&a.user&&a.user.picture))+'"/>\n\t\t\t':'\n\t\t\t<div class="user-icon" style="background-color: '+n.__escape(e(a&&a.user&&a.user["icon:bgColor"]))+';">'+n.__escape(e(a&&a.user&&a.user["icon:text"]))+"</div>\n\t\t\t")+'\n\t\t\t<i component="user/status" class="fa fa-fw fa-circle status '+n.__escape(e(a&&a.user&&a.user.status))+'"></i>\n\t\t\t':"")+'\n\t\t</div>\n\n\t\t<section class="menu-section" data-section="navigation">\n\t\t\t<h3 class="menu-section-title">[[global:header.navigation]]</h3>\n\t\t\t<ul class="menu-section-list"></ul>\n\t\t</section>\n\n\t\t'+(e(a&&a.config&&a.config.loggedIn)?'\n\t\t<section class="menu-section" data-section="profile">\n\t\t\t<h3 class="menu-section-title">[[global:header.profile]]</h3>\n\t\t\t<ul class="menu-section-list" component="header/usercontrol"></ul>\n\t\t</section>\n\n\t\t<section class="menu-section" data-section="notifications">\n\t\t\t<h3 class="menu-section-title">\n\t\t\t\t[[global:header.notifications]]\n\t\t\t\t<span class="counter" component="notifications/icon" data-content="0"></span>\n\t\t\t</h3>\n\t\t\t<ul class="menu-section-list notification-list-mobile" component="notifications/list"></ul>\n\t\t\t<p class="menu-section-list"><a href="'+n.__escape(e(a&&a.relative_path))+'/notifications">[[notifications:see_all]]</a></p>\n\t\t</section>\n\n\t\t<section class="menu-section" data-section="chats">\n\t\t\t<h3 class="menu-section-title">\n\t\t\t\t[[global:header.chats]]\n\t\t\t\t<i class="counter" component="chat/icon" data-content="0"></i>\n\t\t\t</h3>\n\t\t\t<ul class="menu-section-list chat-list" component="chat/list"></ul>\n\t\t</section>\n\t\t':"")+'\n\t</nav>\n\n\t<main id="panel">\n\t\t<nav class="navbar navbar-default navbar-fixed-top header" id="header-menu" component="navbar">\n\t\t\t<div class="container">\n\t\t\t\t\t\t\t<div class="navbar-header">\n\t\t\t\t<button type="button" class="navbar-toggle" id="mobile-menu">\n\t\t\t\t\t<span component="notifications/icon" class="notification-icon fa fa-fw fa-bell-o" data-content="0"></span>\n\t\t\t\t\t<span class="icon-bar"></span>\n\t\t\t\t\t<span class="icon-bar"></span>\n\t\t\t\t\t<span class="icon-bar"></span>\n\t\t\t\t</button>\n\n\t\t\t\t<a href="'+(e(a&&a["brand:logo:url"])?n.__escape(e(a&&a["brand:logo:url"])):n.__escape(e(a&&a.relative_path))+"/")+'">\n\t\t\t\t\t<img alt="'+n.__escape(e(a&&a["brand:logo:alt"]))+'" class="'+n.__escape(e(a&&a["brand:logo:display"]))+' forum-logo" src="'+n.__escape(e(a&&a["brand:logo"]))+'" />\n\t\t\t\t</a>\n\t\t\t\t'+(e(a&&a.config&&a.config.showSiteTitle)?'\n\t\t\t\t<a href="'+(e(a&&a["title:url"])?n.__escape(e(a&&a["title:url"])):n.__escape(e(a&&a.relative_path))+"/")+'">\n\t\t\t\t\t<h1 class="navbar-brand forum-title">'+n.__escape(e(a&&a.title))+"</h1>\n\t\t\t\t</a>\n\t\t\t\t":"")+'\n\n\t\t\t\t<div component="navbar/title" class="visible-xs hidden">\n\t\t\t\t\t<span></span>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div id="nav-dropdown" class="hidden-xs">\n\t\t\t\t'+(e(a&&a.maintenanceHeader)?'\n\t\t\t\t<ul class="nav navbar-nav navbar-right">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href="'+n.__escape(e(a&&a.relative_path))+'/login">\n\t\t\t\t\t\t\t<i class="fa fa-sign-in visible-xs-inline"></i>\n\t\t\t\t\t\t\t<span>[[global:login]]</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t':"\n\t\t\t\t"+(e(a&&a.config&&a.config.loggedIn)?'\n\n\t\t\t\t<ul id="logged-in-menu" class="nav navbar-nav navbar-right">\n\t\t\t\t\t<li class="notifications dropdown text-center hidden-xs" component="notifications">\n\t\t\t\t\t\t<a href="'+n.__escape(e(a&&a.relative_path))+'/notifications" title="[[global:header.notifications]]" class="dropdown-toggle" data-toggle="dropdown" id="notif_dropdown" data-ajaxify="false" role="button">\n\t\t\t\t\t\t\t<i component="notifications/icon" class="fa fa-fw fa-bell-o" data-content="0"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<ul class="dropdown-menu" aria-labelledby="notif_dropdown">\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<ul component="notifications/list" class="notification-list">\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<a href="#"><i class="fa fa-refresh fa-spin"></i> [[global:notifications.loading]]</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class="notif-dropdown-link"><a href="#" class="mark-all-read">[[notifications:mark_all_read]]</a></li>\n\t\t\t\t\t\t\t<li class="notif-dropdown-link"><a href="'+n.__escape(e(a&&a.relative_path))+'/notifications">[[notifications:see_all]]</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t'+(e(a&&a.config&&a.config.disableChat)?"":'\n\t\t\t\t\t<li class="chats dropdown">\n\t\t\t\t\t\t<a class="dropdown-toggle" data-toggle="dropdown" href="'+n.__escape(e(a&&a.relative_path))+"/user/"+n.__escape(e(a&&a.user&&a.user.userslug))+'/chats" title="[[global:header.chats]]" id="chat_dropdown" component="chat/dropdown" data-ajaxify="false" role="button">\n\t\t\t\t\t\t\t<i component="chat/icon" class="fa fa-comment-o fa-fw"></i> <span class="visible-xs-inline">[[global:header.chats]]</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<ul class="dropdown-menu" aria-labelledby="chat_dropdown">\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<ul component="chat/list" class="chat-list chats-list">\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<i class="fa fa-refresh fa-spin"></i> [[global:chats.loading]]\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class="notif-dropdown-link"><a href="#" class="mark-all-read" component="chats/mark-all-read">[[modules:chat.mark_all_read]]</a></li>\n\t\t\t\t\t\t\t<li class="notif-dropdown-link"><a href="'+n.__escape(e(a&&a.relative_path))+"/user/"+n.__escape(e(a&&a.user&&a.user.userslug))+'/chats">[[modules:chat.see_all]]</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t\t')+'\n\n\t\t\t\t\t<li id="user_label" class="dropdown">\n\t\t\t\t\t\t<label for="user-control-list-check" class="dropdown-toggle" data-toggle="dropdown" id="user_dropdown" title="[[global:header.profile]]" role="button">\n\t\t\t\t\t\t\t<img component="header/userpicture" src="'+n.__escape(e(a&&a.user&&a.user.picture))+'" alt="'+n.__escape(e(a&&a.user&&a.user.username))+'"'+(e(a&&a.user&&a.user.picture)?"":' style="display: none;"')+' />\n\t\t\t\t\t\t\t<div component="header/usericon" class="user-icon" style="background-color: '+n.__escape(e(a&&a.user&&a.user["icon:bgColor"]))+";"+(e(a&&a.user&&a.user.picture)?" display: none;":"")+'">'+n.__escape(e(a&&a.user&&a.user["icon:text"]))+'</div>\n\t\t\t\t\t\t\t<span id="user-header-name" class="visible-xs-inline">'+n.__escape(e(a&&a.user&&a.user.username))+'</span>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t\t<input type="checkbox" class="hidden" id="user-control-list-check" aria-hidden="true">\n\t\t\t\t\t\t<ul id="user-control-list" component="header/usercontrol" class="dropdown-menu" aria-labelledby="user_dropdown">\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a component="header/profilelink" href="'+n.__escape(e(a&&a.relative_path))+"/user/"+n.__escape(e(a&&a.user&&a.user.userslug))+'">\n\t\t\t\t\t\t\t\t\t<i component="user/status" class="fa fa-fw fa-circle status '+n.__escape(e(a&&a.user&&a.user.status))+'"></i> <span component="header/username">'+n.__escape(e(a&&a.user&&a.user.username))+'</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li role="presentation" class="divider"></li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href="#" class="user-status" data-status="online">\n\t\t\t\t\t\t\t\t\t<i class="fa fa-fw fa-circle status online"></i><span> [[global:online]]</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href="#" class="user-status" data-status="away">\n\t\t\t\t\t\t\t\t\t<i class="fa fa-fw fa-circle status away"></i><span> [[global:away]]</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href="#" class="user-status" data-status="dnd">\n\t\t\t\t\t\t\t\t\t<i class="fa fa-fw fa-circle status dnd"></i><span> [[global:dnd]]</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href="#" class="user-status" data-status="offline">\n\t\t\t\t\t\t\t\t\t<i class="fa fa-fw fa-circle status offline"></i><span> [[global:invisible]]</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li role="presentation" class="divider"></li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a component="header/profilelink/edit" href="'+n.__escape(e(a&&a.relative_path))+"/user/"+n.__escape(e(a&&a.user&&a.user.userslug))+'/edit">\n\t\t\t\t\t\t\t\t\t<i class="fa fa-fw fa-edit"></i> <span>[[user:edit-profile]]</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a component="header/profilelink/settings" href="'+n.__escape(e(a&&a.relative_path))+"/user/"+n.__escape(e(a&&a.user&&a.user.userslug))+'/settings">\n\t\t\t\t\t\t\t\t\t<i class="fa fa-fw fa-gear"></i> <span>[[user:settings]]</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t'+(e(a&&a.showModMenu)?'\n\t\t\t\t\t\t\t<li role="presentation" class="divider"></li>\n\t\t\t\t\t\t\t<li class="dropdown-header">[[pages:moderator-tools]]</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href="'+n.__escape(e(a&&a.relative_path))+'/flags">\n\t\t\t\t\t\t\t\t\t<i class="fa fa-fw fa-flag"></i> <span>[[pages:flagged-content]]</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t'+(e(a&&a.isAdmin)?'\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href="'+n.__escape(e(a&&a.relative_path))+'/ip-blacklist">\n\t\t\t\t\t\t\t\t\t<i class="fa fa-fw fa-ban"></i> <span>[[pages:ip-blacklist]]</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t':"")+"\n\t\t\t\t\t\t\t":"")+'\n\t\t\t\t\t\t\t<li role="presentation" class="divider"></li>\n\t\t\t\t\t\t\t<li component="user/logout">\n\t\t\t\t\t\t\t\t<form method="post" action="'+n.__escape(e(a&&a.relative_path))+'/logout">\n\t\t\t\t\t\t\t\t\t<input type="hidden" name="_csrf" value="'+n.__escape(e(a&&a.config&&a.config.csrf_token))+'">\n\t\t\t\t\t\t\t\t\t<input type="hidden" name="noscript" value="true">\n\t\t\t\t\t\t\t\t\t<button type="submit" class="btn btn-link">\n\t\t\t\t\t\t\t\t\t\t<i class="fa fa-fw fa-sign-out"></i><span> [[global:logout]]</span>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\n\t\t\t\t</ul>\n\t\t\t\t':'\n\t\t\t\t<ul id="logged-out-menu" class="nav navbar-nav navbar-right">\n\t\t\t\t\t'+(e(a&&a.allowRegistration)?'\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href="'+n.__escape(e(a&&a.relative_path))+'/register">\n\t\t\t\t\t\t\t<i class="fa fa-pencil visible-xs-inline"></i>\n\t\t\t\t\t\t\t<span>[[global:register]]</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t':"")+'\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href="'+n.__escape(e(a&&a.relative_path))+'/login">\n\t\t\t\t\t\t\t<i class="fa fa-sign-in visible-xs-inline"></i>\n\t\t\t\t\t\t\t<span>[[global:login]]</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t')+"\n\t\t\t\t"+(e(a&&a.config&&a.config.searchEnabled)?'\n\t\t\t\t<ul class="nav navbar-nav navbar-right">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<form id="search-form" class="navbar-form navbar-right hidden-xs" role="search" method="GET">\n\t\t\t\t\t\t\t<button id="search-button" type="button" class="btn btn-link"><i class="fa fa-search fa-fw" title="[[global:header.search]]"></i></button>\n\t\t\t\t\t\t\t<div class="hidden" id="search-fields">\n\t\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t\t\t<input type="text" class="form-control" placeholder="[[global:search]]" name="query" value="">\n\t\t\t\t\t\t\t\t\t<a href="#"><i class="fa fa-gears fa-fw advanced-search-link"></i></a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<button type="submit" class="btn btn-default hide">[[global:search]]</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class="visible-xs" id="search-menu">\n\t\t\t\t\t\t<a href="'+n.__escape(e(a&&a.relative_path))+'/search">\n\t\t\t\t\t\t\t<i class="fa fa-search fa-fw"></i> [[global:search]]\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t':"")+'\n\n\t\t\t\t<ul class="nav navbar-nav navbar-right hidden-xs">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href="#" id="reconnect" class="hide" title="Connection to '+n.__escape(e(a&&a.title))+' has been lost, attempting to reconnect...">\n\t\t\t\t\t\t\t<i class="fa fa-check"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\n\t\t\t\t<ul class="nav navbar-nav navbar-right pagination-block visible-lg visible-md">\n\t\t\t\t\t<li class="dropdown">\n\t\t\t\t\t\t<a><i class="fa fa-angle-double-up pointer fa-fw pagetop"></i></a>\n\t\t\t\t\t\t<a><i class="fa fa-angle-up pointer fa-fw pageup"></i></a>\n\n\t\t\t\t\t\t<a href="#" class="dropdown-toggle" data-toggle="dropdown">\n\t\t\t\t\t\t\t<span class="pagination-text"></span>\n\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t<a><i class="fa fa-angle-down pointer fa-fw pagedown"></i></a>\n\t\t\t\t\t\t<a><i class="fa fa-angle-double-down pointer fa-fw pagebottom"></i></a>\n\n\t\t\t\t\t\t<div class="progress-container">\n\t\t\t\t\t\t\t<div class="progress-bar"></div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<ul class="dropdown-menu" role="menu">\n\t\t\t\t\t\t\t<li>\n  \t\t\t\t\t\t\t\t<input type="text" class="form-control" id="indexInput" placeholder="[[global:pagination.enter_index]]">\n  \t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\n\t\t\t\t<ul id="main-nav" class="nav navbar-nav">\n\t\t\t\t\t'+t.blocks.navigation(n,a,e,s,i)+"\n\t\t\t\t</ul>\n\n\t\t\t\t")+'\n\t\t\t</div>\n\n\t\t\t</div>\n\t\t</nav>\n\t\t<div class="container" id="content">\n\t\t\t<noscript>\n\t\t<div class="alert alert-danger">\n\t\t\t<p>\n\t\t\t\tYour browser does not seem to support JavaScript. As a result, your viewing experience will be diminished, and you may not be able to execute some actions.\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\tPlease download a browser that supports JavaScript, or enable it if it\'s disabled (i.e. NoScript).\n\t\t\t</p>\n\t\t</div>\n\t</noscript>\n'}return t.blocks={navigation:function(t,n,a,e,s){return e(a(n&&n.navigation),function(e,i,l){return"\n\t\t\t\t\t"+(s(n,t,"displayMenuItem",[n,i])?'\n\t\t\t\t\t<li class="'+t.__escape(a(n&&n.navigation&&n.navigation[e]&&n.navigation[e].class))+'">\n\t\t\t\t\t\t<a class="navigation-link" href="'+t.__escape(a(n&&n.navigation&&n.navigation[e]&&n.navigation[e].route))+'" title="'+t.__escape(a(n&&n.navigation&&n.navigation[e]&&n.navigation[e].title))+'" '+(a(n&&n.navigation&&n.navigation[e]&&n.navigation[e].id)?'id="'+t.__escape(a(n&&n.navigation&&n.navigation[e]&&n.navigation[e].id))+'"':"")+(a(n&&n.navigation&&n.navigation[e]&&n.navigation[e].properties&&n.navigation[e].properties.targetBlank)?' target="_blank"':"")+">\n\t\t\t\t\t\t\t"+(a(n&&n.navigation&&n.navigation[e]&&n.navigation[e].iconClass)?'\n\t\t\t\t\t\t\t<i class="fa fa-fw '+t.__escape(a(n&&n.navigation&&n.navigation[e]&&n.navigation[e].iconClass))+'"></i>\n\t\t\t\t\t\t\t':"")+"\n\n\t\t\t\t\t\t\t"+(a(n&&n.navigation&&n.navigation[e]&&n.navigation[e].text)?'\n\t\t\t\t\t\t\t<span class="'+t.__escape(a(n&&n.navigation&&n.navigation[e]&&n.navigation[e].textClass))+'">'+t.__escape(a(n&&n.navigation&&n.navigation[e]&&n.navigation[e].text))+"</span>\n\t\t\t\t\t\t\t":"")+"\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t":"")+"\n\t\t\t\t\t"})},scripts:function(t,n,a,e,s){return e(a(n&&n.scripts),function(e,s,i){return'\n\t<script type="text/javascript" src="'+t.__escape(a(n&&n.scripts&&n.scripts[e]&&n.scripts[e].src))+'"><\/script>\n\t'})},linkTags:function(t,n,a,e,s){return e(a(n&&n.linkTags),function(e,i,l){return t.__escape(s(n,t,"buildLinkTag",[a(n&&n.linkTags&&n.linkTags[e])]))})},metaTags:function(t,n,a,e,s){return e(a(n&&n.metaTags),function(e,i,l){return t.__escape(s(n,t,"buildMetaTag",[a(n&&n.metaTags&&n.metaTags[e])]))})}},t});