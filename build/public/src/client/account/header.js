"use strict";define("forum/account/header",["coverPhoto","pictureCropper","components","translator","benchpress"],function(a,e,t,n,o){var i={};var r;i.init=function(){r=ajaxify.data.isAdmin||ajaxify.data.isSelf||ajaxify.data.isGlobalModerator;c();u();if(r){s()}t.get("account/follow").on("click",function(){l("follow")});t.get("account/unfollow").on("click",function(){l("unfollow")});t.get("account/chat").on("click",function(){socket.emit("modules.chats.hasPrivateChat",ajaxify.data.uid,function(a,e){if(a){return app.alertError(a.message)}if(e){app.openChat(e)}else{app.newChat(ajaxify.data.uid)}})});t.get("account/new-chat").on("click",function(){app.newChat(ajaxify.data.uid,function(){t.get("account/chat").parent().removeClass("hidden")})});t.get("account/ban").on("click",f);t.get("account/unban").on("click",d);t.get("account/delete").on("click",p);t.get("account/flag").on("click",m)};function c(){if(!app.user.uid||app.user.uid!==parseInt(ajaxify.data.theirid,10)){$(".account-sub-links .plugin-link.private").addClass("hide")}}function u(){$(".account-sub-links li").removeClass("active").each(function(){var a=$(this).find("a").attr("href");if(decodeURIComponent(a)===decodeURIComponent(window.location.pathname)){$(this).addClass("active");return false}})}function s(){a.init(t.get("account/cover"),function(a,e,t){socket.emit("user.updateCover",{uid:ajaxify.data.uid,imageData:a,position:e},t)},function(){e.show({title:"[[user:upload_cover_picture]]",socketMethod:"user.updateCover",aspectRatio:NaN,allowSkippingCrop:true,restrictImageDimension:false,paramName:"uid",paramValue:ajaxify.data.theirid,accept:".png,.jpg,.bmp"},function(a){t.get("account/cover").css("background-image","url("+a+"?"+config["cache-buster"]+")")})},g)}function l(a){socket.emit("user."+a,{uid:ajaxify.data.uid},function(e){if(e){return app.alertError(e.message)}t.get("account/follow").toggleClass("hide",a==="follow");t.get("account/unfollow").toggleClass("hide",a==="unfollow");app.alertSuccess("[[global:alert."+a+", "+ajaxify.data.username+"]]")});return false}function f(){o.parse("admin/partials/temporary-ban",{},function(a){bootbox.dialog({className:"ban-modal",title:"[[user:ban_account]]",message:a,show:true,buttons:{close:{label:"[[global:close]]",className:"btn-link"},submit:{label:"[[user:ban_account]]",callback:function(){var a=$(".ban-modal form").serializeArray().reduce(function(a,e){a[e.name]=e.value;return a},{});var e=a.length>0?Date.now()+a.length*1e3*60*60*(parseInt(a.unit,10)?24:1):0;socket.emit("user.banUsers",{uids:[ajaxify.data.theirid],until:e,reason:a.reason||""},function(a){if(a){return app.alertError(a.message)}ajaxify.refresh()})}}}})})}function d(){socket.emit("user.unbanUsers",[ajaxify.data.theirid],function(a){if(a){return app.alertError(a.message)}ajaxify.refresh()})}function p(){n.translate("[[user:delete_this_account_confirm]]",function(a){bootbox.confirm(a,function(a){if(!a){return}socket.emit("admin.user.deleteUsersAndContent",[ajaxify.data.theirid],function(a){if(a){return app.alertError(a.message)}app.alertSuccess("[[user:account-deleted]]");history.back()})})})}function m(){require(["flags"],function(a){a.showFlagModal({type:"user",id:ajaxify.data.uid})})}function g(){n.translate("[[user:remove_cover_picture_confirm]]",function(a){bootbox.confirm(a,function(a){if(!a){return}socket.emit("user.removeCover",{uid:ajaxify.data.uid},function(a){if(!a){ajaxify.refresh()}else{app.alertError(a.message)}})})})}return i});
//# sourceMappingURL=public/src/client/account/header.js.map