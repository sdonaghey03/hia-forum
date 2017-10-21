"use strict";define("pictureCropper",["translator","cropper","benchpress"],function(e,a,i){var t={};t.show=function(e,a){var i=e.hasOwnProperty("fileSize")&&e.fileSize!==undefined?parseInt(e.fileSize,10):false;r({showHelp:e.hasOwnProperty("showHelp")&&e.showHelp!==undefined?e.showHelp:true,fileSize:i,title:e.title||"[[global:upload_file]]",description:e.description||"",button:e.button||"[[global:upload]]",accept:e.accept?e.accept.replace(/,/g,"&#44; "):""},function(i){i=$(i);i.modal("show");i.on("hidden.bs.modal",function(){i.remove()});i.find("#fileUploadSubmitBtn").on("click",function(){$(this).addClass("disabled");e.uploadModal=i;o(e,a);return false})})};t.handleImageCrop=function(t,o){$("#crop-picture-modal").remove();i.parse("modals/crop_picture",{url:t.url},function(i){e.translate(i,function(e){var i=$(e);i.modal({backdrop:"static"}).modal("show");var r=parseInt($(window).height()/2,10);var n=document.getElementById("cropped-image");$(n).css("max-height",r);var s=new a(n,{aspectRatio:t.aspectRatio,autoCropArea:1,viewMode:1,cropmove:function(){if(t.restrictImageDimension){if(s.cropBoxData.width>t.imageDimension){s.setCropBoxData({width:t.imageDimension})}if(s.cropBoxData.height>t.imageDimension){s.setCropBoxData({height:t.imageDimension})}}},ready:function(){if(t.restrictImageDimension){var e=n.width<n.height?n.width:n.height;var r=e>t.imageDimension?t.imageDimension:e;s.setCropBoxData({width:r,height:r})}i.find(".rotate").on("click",function(){var e=this.getAttribute("data-degrees");s.rotate(e)});i.find(".flip").on("click",function(){var e=this.getAttribute("data-option");var a=this.getAttribute("data-method");if(a==="scaleX"){s.scaleX(e)}else{s.scaleY(e)}this.setAttribute("data-option",e*-1)});i.find(".reset").on("click",function(){s.reset()});i.find(".crop-btn").on("click",function(){$(this).addClass("disabled");var e=t.imageType?s.getCroppedCanvas().toDataURL(t.imageType):s.getCroppedCanvas().toDataURL();i.find("#upload-progress-bar").css("width","100%");i.find("#upload-progress-box").show().removeClass("hide");var a={};a[t.paramName]=t.paramValue;a.imageData=e;socket.emit(t.socketMethod,a,function(e,a){if(e){i.find("#upload-progress-box").hide();i.find(".upload-btn").removeClass("disabled");i.find(".crop-btn").removeClass("disabled");return app.alertError(e.message)}o(a.url);i.modal("hide")})});i.find(".upload-btn").on("click",function(){$(this).addClass("disabled");s.destroy();s=new a(n,{viewMode:1,autoCropArea:1,ready:function(){i.find(".crop-btn").trigger("click")}})})}})})})};function o(e,a){function i(a,i){t.hideAlerts(e.uploadModal);if(a==="error"){e.uploadModal.find("#fileUploadSubmitBtn").removeClass("disabled")}e.uploadModal.find("#alert-"+a).translateText(i).removeClass("hide")}var o=e.uploadModal.find("#fileInput");if(!o.val()){return i("error","[[uploads:select-file-to-upload]]")}var r=o[0].files[0];var n=new FileReader;var s;var d=r.type;n.addEventListener("load",function(){s=n.result;e.uploadModal.modal("hide");t.handleImageCrop({url:s,imageType:d,socketMethod:e.socketMethod,aspectRatio:e.aspectRatio,allowSkippingCrop:e.allowSkippingCrop,restrictImageDimension:e.restrictImageDimension,imageDimension:e.imageDimension,paramName:e.paramName,paramValue:e.paramValue},a)},false);if(r){n.readAsDataURL(r)}}function r(a,t){i.parse("partials/modals/upload_file_modal",a,function(a){e.translate(a,t)})}return t});
//# sourceMappingURL=public/src/modules/pictureCropper.js.map