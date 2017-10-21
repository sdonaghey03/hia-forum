"use strict";define("admin/general/dashboard",["semver","Chart","translator","benchpress"],function(a,e,t,s){var r={};var n={rooms:false,graphs:false};var o=false;var i=/^v?\d+\.\d+\.\d+-.+$/;var d={rooms:{},traffic:{}};var l={units:"hours",until:undefined};var c={roomInterval:1e4,graphInterval:15e3,realtimeInterval:1500};var u=[];$(window).on("action:ajaxify.start",function(){clearInterval(n.rooms);clearInterval(n.graphs);n.rooms=null;n.graphs=null;d.rooms=null;d.traffic=null;u.length=0});r.init=function(){app.enterRoom("admin");o=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);$.get("https://api.github.com/repos/NodeBB/NodeBB/tags",function(e){e=e.sort(function(e,t){e=e.name.replace(/^v/,"");t=t.name.replace(/^v/,"");return a.lt(e,t)?1:-1}).filter(function(a){return!i.test(a.name)});var s=$("#version").html();var r=e[0].name.slice(1);var n=$(".version-check");var o;if(a.eq(r,s)){n.removeClass("alert-info").addClass("alert-success");o="[[admin/general/dashboard:up-to-date]]"}else if(a.gt(r,s)){n.removeClass("alert-info").addClass("alert-warning");if(!i.test(s)){o="[[admin/general/dashboard:upgrade-available, "+r+"]]"}else{o="[[admin/general/dashboard:prerelease-upgrade-available, "+r+"]]"}}else if(i.test(s)){n.removeClass("alert-info").addClass("alert-info");o="[[admin/general/dashboard:prerelease-warning]]"}t.translate(o,function(a){n.append(a)})});$('[data-toggle="tooltip"]').tooltip();B();v(function(){socket.emit("admin.rooms.getAll",r.updateRoomUsage);k()})};r.updateRoomUsage=function(a,e){if(a){return app.alertError(a.message)}if(JSON.stringify(d.rooms)===JSON.stringify(e)){return}d.rooms=e;var t='<div class="text-center pull-left">'+'<span class="formatted-number">'+e.onlineRegisteredCount+"</span>"+'<div class="stat">[[admin/general/dashboard:active-users.users]]</div>'+"</div>"+'<div class="text-center pull-left">'+'<span class="formatted-number">'+e.onlineGuestCount+"</span>"+'<div class="stat">[[admin/general/dashboard:active-users.guests]]</div>'+"</div>"+'<div class="text-center pull-left">'+'<span class="formatted-number">'+(e.onlineRegisteredCount+e.onlineGuestCount)+"</span>"+'<div class="stat">[[admin/general/dashboard:active-users.total]]</div>'+"</div>"+'<div class="text-center pull-left">'+'<span class="formatted-number">'+e.socketCount+"</span>"+'<div class="stat">[[admin/general/dashboard:active-users.connections]]</div>'+"</div>";b(e.onlineRegisteredCount,e.onlineGuestCount);C(e.users);y(e.topics);$("#active-users").translateHtml(t)};var g={traffic:null,registered:null,presence:null,topics:null};var p=["#bf616a","#5B90BF","#d08770","#ebcb8b","#a3be8c","#96b5b4","#8fa1b3","#b48ead","#ab7967","#46BFBD"];function f(a,e){var t=false;if(a[0]==="#"){a=a.slice(1);t=true}var s=parseInt(a,16);var r=(s>>16)+e;if(r>255)r=255;else if(r<0)r=0;var n=(s>>8&255)+e;if(n>255)n=255;else if(n<0)n=0;var o=(s&255)+e;if(o>255)o=255;else if(o<0)o=0;return(t?"#":"")+(o|n<<8|r<<16).toString(16)}function v(a){a=a||function(){};var n=document.getElementById("analytics-traffic");var i=document.getElementById("analytics-registered");var d=document.getElementById("analytics-presence");var l=document.getElementById("analytics-topics");var c=n.getContext("2d");var u=i.getContext("2d");var p=d.getContext("2d");var f=l.getContext("2d");var v=utils.getHoursArray();if(o){e.defaults.global.tooltips.enabled=false}var b=t.Translator.create();Promise.all([b.translateKey("admin/general/dashboard:graphs.page-views",[]),b.translateKey("admin/general/dashboard:graphs.unique-visitors",[]),b.translateKey("admin/general/dashboard:graphs.registered-users",[]),b.translateKey("admin/general/dashboard:graphs.anonymous-users",[]),b.translateKey("admin/general/dashboard:on-categories",[]),b.translateKey("admin/general/dashboard:reading-posts",[]),b.translateKey("admin/general/dashboard:browsing-topics",[]),b.translateKey("admin/general/dashboard:recent",[]),b.translateKey("admin/general/dashboard:unread",[])]).then(function(t){var o={labels:v,datasets:[{label:t[0],backgroundColor:"rgba(220,220,220,0.2)",borderColor:"rgba(220,220,220,1)",pointBackgroundColor:"rgba(220,220,220,1)",pointHoverBackgroundColor:"#fff",pointBorderColor:"#fff",pointHoverBorderColor:"rgba(220,220,220,1)",data:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{label:t[1],backgroundColor:"rgba(151,187,205,0.2)",borderColor:"rgba(151,187,205,1)",pointBackgroundColor:"rgba(151,187,205,1)",pointHoverBackgroundColor:"rgba(151,187,205,1)",pointBorderColor:"#fff",pointHoverBorderColor:"rgba(151,187,205,1)",data:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}]};n.width=$(n).parent().width();g.traffic=new e(c,{type:"line",data:o,options:{responsive:true,legend:{display:false},scales:{yAxes:[{ticks:{beginAtZero:true}}]},tooltips:{mode:"x"}}});g.registered=new e(u,{type:"doughnut",data:{labels:t.slice(2,4),datasets:[{data:[1,1],backgroundColor:["#F7464A","#46BFBD"],hoverBackgroundColor:["#FF5A5E","#5AD3D1"]}]},options:{responsive:true,legend:{display:false}}});g.presence=new e(p,{type:"doughnut",data:{labels:t.slice(4,9),datasets:[{data:[1,1,1,1,1],backgroundColor:["#F7464A","#46BFBD","#FDB45C","#949FB1","#9FB194"],hoverBackgroundColor:["#FF5A5E","#5AD3D1","#FFC870","#A8B3C5","#A8B3C5"]}]},options:{responsive:true,legend:{display:false}}});g.topics=new e(f,{type:"doughnut",data:{labels:[],datasets:[{data:[],backgroundColor:[],hoverBackgroundColor:[]}]},options:{responsive:true,legend:{display:false}}});h();$(window).on("resize",m);m();$('[data-action="updateGraph"]:not([data-units="custom"])').on("click",function(){var a=new Date;var e=$(this).attr("data-amount");if($(this).attr("data-units")==="days"){a.setHours(0,0,0,0)}a=a.getTime();h($(this).attr("data-units"),a,e);$('[data-action="updateGraph"]').removeClass("active");$(this).addClass("active");require(["translator"],function(a){a.translate("[[admin/general/dashboard:page-views-custom]]",function(a){$('[data-action="updateGraph"][data-units="custom"]').text(a)})})});$('[data-action="updateGraph"][data-units="custom"]').on("click",function(){var a=$(this);s.parse("admin/partials/pageviews-range-select",{},function(e){var t=bootbox.dialog({title:"[[admin/general/dashboard:page-views-custom]]",message:e,buttons:{submit:{label:"[[global:search]]",className:"btn-primary",callback:s}}});function s(){var e=t.find("form").serializeObject();var s=/\d{4}-\d{2}-\d{2}/;if(!e.startRange&&!e.endRange){h("days");$('[data-action="updateGraph"]').removeClass("active");$('[data-action="updateGraph"][data-units="days"]').addClass("active");return}else if(!s.test(e.startRange)||!s.test(e.endRange)){t.find(".alert-danger").removeClass("hidden");return false}var r=new Date(e.endRange);r.setDate(r.getDate()+1);r=r.getTime();var n=(r-new Date(e.startRange).getTime())/(1e3*60*60*24);h("days",r,n);$('[data-action="updateGraph"]').removeClass("active");a.addClass("active");a.html(e.startRange+" &ndash; "+e.endRange)}})});socket.emit("admin.rooms.getAll",r.updateRoomUsage);k();a()})}function m(){$(".pie-chart.legend-up").each(function(){var a=$(this);if(a.width()<320){a.addClass("compact")}else{a.removeClass("compact")}})}function h(a,e,t){if(!app.isFocused){return}socket.emit("admin.analytics.get",{graph:"traffic",units:a||"hours",until:e,amount:t},function(s,r){if(s){return app.alertError(s.message)}if(JSON.stringify(d.traffic)===JSON.stringify(r)){return}d.traffic=r;if(a==="days"){g.traffic.data.xLabels=utils.getDaysArray(e,t)}else{g.traffic.data.xLabels=utils.getHoursArray();$("#pageViewsThirty").html(r.summary.thirty);$("#pageViewsSeven").html(r.summary.seven);$("#pageViewsPastDay").html(r.pastDay);utils.addCommasToNumbers($("#pageViewsThirty"));utils.addCommasToNumbers($("#pageViewsSeven"));utils.addCommasToNumbers($("#pageViewsPastDay"))}g.traffic.data.datasets[0].data=r.pageviews;g.traffic.data.datasets[1].data=r.uniqueVisitors;g.traffic.data.labels=g.traffic.data.xLabels;g.traffic.update();l.units=a;l.until=e;l.amount=t})}function b(a,e){g.registered.data.datasets[0].data[0]=a;g.registered.data.datasets[0].data[1]=e;g.registered.update()}function C(a){g.presence.data.datasets[0].data[0]=a.categories;g.presence.data.datasets[0].data[1]=a.topics;g.presence.data.datasets[0].data[2]=a.category;g.presence.data.datasets[0].data[3]=a.recent;g.presence.data.datasets[0].data[4]=a.unread;g.presence.update()}function y(a){if(!Object.keys(a).length){a={0:{title:"No users browsing",value:1}}}var e=Object.keys(a);g.topics.data.labels=[];g.topics.data.datasets[0].data=[];g.topics.data.datasets[0].backgroundColor=[];g.topics.data.datasets[0].hoverBackgroundColor=[];for(var t=0,s=e.length;t<s;t+=1){g.topics.data.labels.push(a[e[t]].title);g.topics.data.datasets[0].data.push(a[e[t]].value);g.topics.data.datasets[0].backgroundColor.push(p[t]);g.topics.data.datasets[0].hoverBackgroundColor.push(f(p[t],10))}function r(){var t=$("#topics-legend").html("");for(var s=0,r=e.length;s<r;s+=1){var n=a[e[s]];var o=n.value==="0"?n.title:'<a title="'+n.title+'"href="'+RELATIVE_PATH+"/topic/"+e[s]+'" target="_blank"> '+n.title+"</a>";t.append("<li>"+'<div style="background-color: '+p[s]+';"></div>'+"<span>"+o+"</span>"+"</li>")}}r();g.topics.update()}function B(){$("#toggle-realtime .fa").on("click",function(){var a=$(this);if(a.hasClass("fa-toggle-on")){a.removeClass("fa-toggle-on").addClass("fa-toggle-off");a.parent().find("strong").html("OFF");k(false)}else{a.removeClass("fa-toggle-off").addClass("fa-toggle-on");a.parent().find("strong").html("ON");k(true)}})}function k(a){clearInterval(n.rooms);clearInterval(n.graphs);n.rooms=setInterval(function(){if(app.isFocused&&app.isConnected){socket.emit("admin.rooms.getAll",r.updateRoomUsage)}},a?c.realtimeInterval:c.roomInterval);n.graphs=setInterval(function(){h(l.units,l.until,l.amount)},a?c.realtimeInterval:c.graphInterval)}return r});
//# sourceMappingURL=public/src/admin/general/dashboard.js.map