"use strict";define("admin/manage/categories",["vendor/jquery/serializeObject/jquery.ba-serializeobject.min","translator","benchpress"],function(e,a,t){var r={};var i=-1;var n;r.init=function(){socket.emit("admin.categories.getAll",function(e,a){if(e){return app.alertError(e.message)}r.render(a)});$('button[data-action="create"]').on("click",r.throwCreateModal);$(".categories").on("click",'button[data-action="toggle"]',function(){var e=$(this);var a=e.attr("data-cid");var t=e.parents('li[data-cid="'+a+'"]');var i=t.hasClass("disabled");var n=t.find("li[data-cid]").map(function(){return $(this).attr("data-cid")}).get();r.toggle([a].concat(n),!i);return false});$(".categories").on("click",".toggle",function(){var e=$(this);e.find("i").toggleClass("fa-minus").toggleClass("fa-plus");e.closest("[data-cid]").find("> ul[data-cid]").toggleClass("hidden")})};r.throwCreateModal=function(){socket.emit("admin.categories.getNames",{},function(e,a){if(e){return app.alertError(e.message)}t.parse("admin/partials/categories/create",{categories:a},function(e){var a=bootbox.dialog({title:"[[admin/manage/categories:alert.create]]",message:e,buttons:{save:{label:"[[global:save]]",className:"btn-primary",callback:t}}});function t(){var e=a.find("form").serializeObject();e.description="";e.icon="fa-comments";r.create(e);a.modal("hide");return false}a.find("form").on("submit",t)})})};r.create=function(e){socket.emit("admin.categories.create",e,function(e,a){if(e){return app.alertError(e.message)}app.alert({alert_id:"category_created",title:"[[admin/manage/categories:alert.created]]",message:"[[admin/manage/categories:alert.create-success]]",type:"success",timeout:2e3});ajaxify.go("admin/manage/categories/"+a.cid)})};r.render=function(e){var t=$(".categories");if(!e||!e.length){a.translate("[[admin/manage/categories:alert.none-active]]",function(e){$("<div></div>").addClass("alert alert-info text-center").text(e).appendTo(t)})}else{n={};s(e,t,0)}};r.toggle=function(e,a){var t={};e.forEach(function(e){t[e]={disabled:a?1:0}});socket.emit("admin.categories.update",t,function(e){if(e){return app.alertError(e.message)}ajaxify.refresh()})};function o(e){i=e.to.dataset.cid}function c(e){var a=parseInt(i,10)!==-1;if(e.newIndex!=null&&parseInt(e.oldIndex,10)!==parseInt(e.newIndex,10)||a){var t=a?n[i]:n[e.from.dataset.cid];var r={};var o=0;var c=t.toArray();var s=c.length;for(o;o<s;o+=1){r[c[o]]={order:o+1}}if(a){r[e.item.dataset.cid].parentCid=i}i=-1;socket.emit("admin.categories.update",r)}}function s(e,r,i){var d=0;e.forEach(function(e,t,r){a.translate(e.name,function(a){if(e.name!==a){e.name=a}d+=1;if(d===r.length){l()}})});if(!e.length){l()}function l(){t.parse("admin/partials/categories/category-rows",{cid:i,categories:e},function(t){a.translate(t,function(a){r.append(a);for(var t=0,d=e.length;t<d;t+=1){s(e[t].children,$('li[data-cid="'+e[t].cid+'"]'),e[t].cid)}n[i]=Sortable.create($('ul[data-cid="'+i+'"]')[0],{group:"cross-categories",animation:150,handle:".icon",dataIdAttr:"data-cid",ghostClass:"placeholder",onAdd:o,onEnd:c})})})}}return r});
//# sourceMappingURL=public/src/admin/manage/categories.js.map