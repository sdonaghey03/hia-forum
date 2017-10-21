"use strict";define("forum/chats",["components","translator","mousetrap","forum/chats/recent","forum/chats/search","forum/chats/messages","benchpress"],function(e,t,a,n,o,r,s){var i={initialised:false};var c=false;i.init=function(){var t=utils.findBootstrapEnvironment();if(!i.initialised){i.addSocketListeners();i.addGlobalEventListeners()}n.init();i.addEventListeners();i.createTagsInput($('[component="chat/messages"] .users-tag-input'),ajaxify.data);i.createAutoComplete($('[component="chat/input"]'));e.get("expanded-chat/controlsToggle").on("click",function(){e.get("expanded-chat/controls").toggleClass("hide")});if(t==="md"||t==="lg"){i.resizeMainWindow();i.addHotkeys()}r.scrollToBottom($(".expanded-chat ul"));i.initialised=true;o.init();if(ajaxify.data.hasOwnProperty("roomId")){e.get("chat/input").focus()}};i.addEventListeners=function(){i.addSendHandlers(ajaxify.data.roomId,$(".chat-input"),$('.expanded-chat button[data-action="send"]'));$('[data-action="pop-out"]').on("click",function(){var t=e.get("chat/input").val();var a=ajaxify.data.roomId;if(app.previousUrl&&app.previousUrl.match(/chats/)){ajaxify.go("user/"+ajaxify.data.userslug+"/chats",function(){app.openChat(a,ajaxify.data.uid)},true)}else{window.history.go(-1);app.openChat(a,ajaxify.data.uid)}$(window).one("action:chat.loaded",function(){e.get("chat/input").val(t)})});i.addEditDeleteHandler(e.get("chat/messages"),ajaxify.data.roomId);i.addRenameHandler(ajaxify.data.roomId,$('[component="chat/room/name"]'));i.addScrollHandler(ajaxify.data.roomId,ajaxify.data.uid,$(".chat-content"));i.addCharactersLeftHandler(e.get("chat/input"))};i.addScrollHandler=function(e,t,a){var n=false;a.off("scroll").on("scroll",function(){if(n){return}var o=(a[0].scrollHeight-a.height())*.1;if(a.scrollTop()>=o){return}n=true;var s=parseInt($(".chat-content").children("[data-index]").first().attr("data-index"),10)+1;socket.emit("modules.chats.getMessages",{roomId:e,uid:t,start:s},function(e,t){if(e){return app.alertError(e.message)}if(!t){return}r.parseMessage(t,function(e){var t=a.scrollTop();var o=a[0].scrollHeight;e=$(e);a.prepend(e);e.find(".timeago").timeago();e.find("img:not(.not-responsive)").addClass("img-responsive");a.scrollTop(a[0].scrollHeight-o+t);n=false})})})};i.addCharactersLeftHandler=function(e){e.on("keyup",function(){$('[component="chat/message/length"]').text(e.val().length)})};i.addEditDeleteHandler=function(e,t){e.on("click",'[data-action="edit"]',function(){var e=$(this).parents("[data-mid]").attr("data-mid");var a=$('[data-roomid="'+t+'"] [component="chat/input"]');r.prepEdit(a,e,t)}).on("click",'[data-action="delete"]',function(){var e=$(this).parents("[data-mid]").attr("data-mid");r.delete(e,t)})};i.addHotkeys=function(){a.bind("ctrl+up",function(){var e=$(".chats-list .bg-primary");var t=e.prev();if(t.length){i.switchChat(t.attr("data-roomid"))}});a.bind("ctrl+down",function(){var e=$(".chats-list .bg-primary");var t=e.next();if(t.length){i.switchChat(t.attr("data-roomid"))}});a.bind("up",function(t){if(t.target===e.get("chat/input").get(0)){var a=e.get("chat/messages").find('.chat-message[data-self="1"]').last();var n=a.attr("data-mid");var o=e.get("chat/input");r.prepEdit(o,n,ajaxify.data.roomId)}})};i.addRenameHandler=function(e,t){var a=t.val();t.on("blur keypress",function(n){if(n.type==="keypress"&&n.keyCode!==13){return}var o=t.val();if(a===o){return}socket.emit("modules.chats.renameRoom",{roomId:e,newName:o},function(e){if(e){return app.alertError(e.message)}a=o;t.blur()})})};i.addSendHandlers=function(e,t,a){t.off("keypress").on("keypress",function(a){if(a.which===13&&!a.shiftKey){r.sendMessage(e,t);return false}});a.off("click").on("click",function(){r.sendMessage(e,t);t.focus();return false})};i.createAutoComplete=function(e){var t={element:e,strategies:[],options:{zIndex:2e4,listPosition:function(e){this.$el.css(this._applyPlacement(e));this.$el.css("position","absolute");return this}}};$(window).trigger("chat:autocomplete:init",t);if(t.strategies.length){t.element.textcomplete(t.strategies,t.options)}};i.createTagsInput=function(e,t){e.tagsinput({confirmKeys:[13,44],trimValue:true});if(t.users&&t.users.length){t.users.forEach(function(t){e.tagsinput("add",$("<div/>").html(t.username).text())})}e.on("beforeItemAdd",function(e){e.cancel=e.item===app.user.username});e.on("itemAdded",function(a){if(a.item===app.user.username){return}socket.emit("modules.chats.addUserToRoom",{roomId:t.roomId,username:a.item},function(t){if(t){app.alertError(t.message);e.tagsinput("remove",a.item,{nouser:true})}})});e.on("beforeItemRemove",function(a){if(a.options&&a.options.nouser){return}a.cancel=!t.isOwner||e.tagsinput("items").length<2;if(!t.owner){return app.alertError("[[error:not-allowed]]")}if(e.tagsinput("items").length<2){return app.alertError("[[error:cant-remove-last-user]]")}});e.on("itemRemoved",function(e){if(e.options&&e.options.nouser){return}socket.emit("modules.chats.removeUserFromRoom",{roomId:t.roomId,username:e.item},function(e){if(e){return app.alertError(e.message)}})});var a=$(".users-tag-container").find(".bootstrap-tagsinput input");require(["autocomplete"],function(e){e.user(a)})};i.leave=function(e){var t=e.attr("data-roomid");socket.emit("modules.chats.leave",t,function(a){if(a){return app.alertError(a.message)}if(parseInt(t,10)===parseInt(ajaxify.data.roomId,10)){ajaxify.go("user/"+ajaxify.data.userslug+"/chats")}else{e.remove()}require(["chat"],function(e){var a=e.getModal(t);if(a.length){e.close(a)}})})};i.switchChat=function(t){var a="user/"+ajaxify.data.userslug+"/chats/"+t;if(self.fetch){fetch(config.relative_path+"/api/"+a,{credentials:"include"}).then(function(t){if(t.ok){t.json().then(function(t){app.parseAndTranslate("partials/chats/message-window",t,function(a){e.get("chat/main-wrapper").html(a);i.resizeMainWindow();ajaxify.data=t;i.setActive();i.addEventListeners();if(history.pushState){history.pushState({url:"user/"+t.userslug+"/chats/"+t.roomId},null,window.location.protocol+"//"+window.location.host+config.relative_path+"/user/"+t.userslug+"/chats/"+t.roomId)}})})}else{console.warn("[search] Received "+t.status)}}).catch(function(e){console.warn("[search] "+e.message)})}else{ajaxify.go(a)}};i.addGlobalEventListeners=function(){$(window).on("resize",i.resizeMainWindow);$(window).on("mousemove keypress click",function(){if(c&&ajaxify.data.roomId){socket.emit("modules.chats.markRead",ajaxify.data.roomId);c=false}})};i.addSocketListeners=function(){socket.on("event:chats.receive",function(a){if(parseInt(a.roomId,10)===parseInt(ajaxify.data.roomId,10)){c=a.self===0;a.message.self=a.self;r.appendChatMessage($(".expanded-chat .chat-content"),a.message)}else if(ajaxify.currentPage.startsWith("chats")){var n=$("[data-roomid="+a.roomId+"]");if(n.length>0){n.addClass("unread")}else{var o=e.get("chat/recent");s.parse("partials/chats/recent_room",{rooms:{roomId:a.roomId,lastUser:a.message.fromUser,usernames:a.message.fromUser.username,unread:true}},function(e){t.translate(e,function(e){o.prepend(e)})})}}});socket.on("event:user_status_change",function(e){app.updateUserStatus($('.chats-list [data-uid="'+e.uid+'"] [component="user/status"]'),e.status)});r.onChatMessageEdit();socket.on("event:chats.roomRename",function(e){$('[component="chat/room/name"]').val($("<div/>").html(e.newName).text())})};i.resizeMainWindow=function(){var t=$(".expanded-chat .chat-content");var a=$(".chat-search").height();var n=$('[component="chat/search/list"]').outerHeight(true)-$('[component="chat/search/list"]').height();var o=e.get("chat/recent").offset().top;if(t.length){var r=$(".expanded-chat ul").outerHeight(true)-$(".expanded-chat ul").height();var s=$(".chat-input").outerHeight(true);t.height($(window).height()-(o+s+r*4));e.get("chat/recent").height($(".expanded-chat").height()-(a+n));$('[component="chat/search/list"]').css("max-height",e.get("chat/recent").height()/2+"px")}else{e.get("chat/recent").height($(window).height()-(o+a+n))}i.setActive()};i.setActive=function(){if(ajaxify.data.roomId){socket.emit("modules.chats.markRead",ajaxify.data.roomId);$(".expanded-chat input").focus()}$(".chats-list li").removeClass("bg-primary");$('.chats-list li[data-roomid="'+ajaxify.data.roomId+'"]').addClass("bg-primary")};return i});
//# sourceMappingURL=public/src/client/chats.js.map