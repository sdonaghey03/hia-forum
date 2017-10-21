"use strict";define("admin/extend/plugins",["jqueryui","translator","benchpress"],function(e,t,i){var n={};n.init=function(){var e=$(".plugins");var o=e[0].querySelectorAll("li").length;var c;if(!o){t.translate("<li><p><i>[[admin/extend/plugins:none-found]]</i></p></li>",function(t){e.append(t)});return}$("#plugin-search").val("");e.on("click",'button[data-action="toggleActive"]',function(){var e=$(this).parents("li");c=e.attr("data-plugin-id");var n=$("#"+c+' [data-action="toggleActive"]');var a=ajaxify.data.installed[e.attr("data-plugin-index")];function l(){socket.emit("admin.plugins.toggleActive",c,function(i,l){if(i){return app.alertError(i)}t.translate('<i class="fa fa-power-off"></i> [[admin/extend/plugins:plugin-item.'+(l.active?"deactivate":"activate")+"]]",function(t){n.html(t);n.toggleClass("btn-warning",l.active).toggleClass("btn-success",!l.active);if(l.active&&!$("#active #"+c).length){$("#active ul").prepend(e.clone(true))}a.active=!a.active;app.alert({alert_id:"plugin_toggled",title:"[[admin/extend/plugins:alert."+(l.active?"enabled":"disabled")+"]]",message:"[[admin/extend/plugins:alert."+(l.active?"activate-success":"deactivate-success")+"]]",type:l.active?"warning":"success",timeout:5e3,clickfn:function(){require(["admin/modules/instance"],function(e){e.restart()})}})})})}if(a.license&&a.active!==true){i.parse("admin/partials/plugins/license",a,function(e){bootbox.dialog({title:"[[admin/extend/plugins:license.title]]",message:e,size:"large",buttons:{cancel:{label:"[[modules:bootbox.cancel]]",className:"btn-link"},save:{label:"[[modules:bootbox.confirm]]",className:"btn-primary",callback:l}}})})}else{l(c)}});e.on("click",'button[data-action="toggleInstall"]',function(){var e=$(this);e.attr("disabled",true);c=$(this).parents("li").attr("data-plugin-id");if($(this).attr("data-installed")==="1"){return n.toggleInstall(c,$(this).parents("li").attr("data-version"))}n.suggest(c,function(i,l){if(i){bootbox.confirm(t.compile("admin/extend/plugins:alert.suggest-error",i.status,i.responseText),function(t){if(t){n.toggleInstall(c,"latest")}else{e.removeAttr("disabled")}});return}if(l.version!=="latest"){n.toggleInstall(c,l.version)}else if(l.version==="latest"){a(c,function(t){if(t){n.toggleInstall(c,"latest")}else{e.removeAttr("disabled")}})}else{e.removeAttr("disabled")}})});e.on("click",'button[data-action="upgrade"]',function(){var e=$(this);var i=e.parents("li");c=i.attr("data-plugin-id");n.suggest(c,function(n,s){if(n){return bootbox.alert("[[admin/extend/plugins:alert.package-manager-unreachable]]")}require(["semver"],function(n){if(s.version!=="latest"&&n.gt(s.version,i.find(".currentVersion").text())){l(c,e,s.version)}else if(s.version==="latest"){a(c,function(){l(c,e,s.version)})}else{bootbox.alert(t.compile("admin/extend/plugins:alert.incompatible",app.config.version,s.version))}})})});$("#plugin-search").on("input propertychange",function(){var e=$(this).val();$(".plugins li").each(function(){var t=$(this).attr("data-plugin-id");$(this).toggleClass("hide",t&&t.indexOf(e)===-1)})});$("#plugin-order").on("click",function(){$("#order-active-plugins-modal").modal("show");socket.emit("admin.plugins.getActive",function(e,i){if(e){return app.alertError(e)}var n="";i.forEach(function(e){n+='<li class="">'+e+"</li>"});if(!i.length){t.translate("[[admin/extend/plugins:none-active]]",function(e){$("#order-active-plugins-modal .plugin-list").html(e).sortable()});return}$("#order-active-plugins-modal .plugin-list").html(n).sortable()})});$("#save-plugin-order").on("click",function(){var e=$("#order-active-plugins-modal .plugin-list").children();var t=[];e.each(function(e,i){t.push({name:$(i).text(),order:e})});socket.emit("admin.plugins.orderActivePlugins",t,function(e){if(e){return app.alertError(e.message)}$("#order-active-plugins-modal").modal("hide")})});s();r()};function a(e,i){bootbox.confirm(t.compile("admin/extend/plugins:alert.possibly-incompatible",e),function(e){i(e)})}function l(e,t,i){t.attr("disabled",true).find("i").attr("class","fa fa-refresh fa-spin");socket.emit("admin.plugins.upgrade",{id:e,version:i},function(e,n){if(e){return app.alertError(e.message)}var a=t.parents("li");a.find(".fa-exclamation-triangle").remove();a.find(".currentVersion").text(i);t.remove();if(n){app.alert({alert_id:"plugin_upgraded",title:"[[admin/extend/plugins:alert.upgraded]]",message:"[[admin/extend/plugins:alert.upgrade-success]]",type:"warning",timeout:5e3,clickfn:function(){require(["admin/modules/instance"],function(e){e.reload()})}})}})}n.toggleInstall=function(e,t,i){var n=$('li[data-plugin-id="'+e+'"] button[data-action="toggleInstall"]');n.find("i").attr("class","fa fa-refresh fa-spin");socket.emit("admin.plugins.toggleInstall",{id:e,version:t},function(e,t){if(e){n.removeAttr("disabled");return app.alertError(e.message)}ajaxify.refresh();app.alert({alert_id:"plugin_toggled",title:"[[admin/extend/plugins:alert."+(t.installed?"installed":"uninstalled")+"]]",message:"[[admin/extend/plugins:alert."+(t.installed?"install-success":"uninstall-success")+"]]",type:"info",timeout:5e3});if(typeof i==="function"){i.apply(this,arguments)}})};n.suggest=function(e,t){var i=app.config.version.match(/^\d\.\d\.\d/);$.ajax((app.config.registry||"https://packages.nodebb.org")+"/api/v1/suggest",{type:"GET",data:{package:e,version:i[0]},dataType:"json"}).done(function(e){t(undefined,e)}).fail(t)};function s(){$("#installed ul li").each(function(){if($(this).children('[data-action="upgrade"]').length){$("#upgrade ul").append($(this).clone(true))}})}function r(){$("#installed ul li").each(function(){if($(this).hasClass("active")){$("#active ul").append($(this).clone(true))}else{$("#deactive ul").append($(this).clone(true))}})}return n});
//# sourceMappingURL=public/src/admin/extend/plugins.js.map