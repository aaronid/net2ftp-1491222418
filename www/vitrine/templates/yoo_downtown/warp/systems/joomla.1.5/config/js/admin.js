/* Copyright (C) YOOtheme GmbH, YOOtheme Proprietary Use License (http://www.yootheme.com/license) */

function submitbutton(a){a=="save"||a=="apply"?jQuery('form[name="adminForm"]').trigger("save",a):submitform(a)}
jQuery(function(a){a("#config").closest("fieldset.adminform").before(a("#config")).remove();a("#config").tabs();a("#profile").prependTo("#config li.Profiles").profiles('[data-profile="default"]');a(window).width()<1200&&a("div.tabs-box").addClass("small-screen");var f=a("#config ul.verify").hide();a("#config a.verify-link").bind("click",function(a){a.preventDefault();f.slideToggle()});a('form[name="adminForm"]').bind("save",function(f,d){var g={},h=[],e=a(this),i=a("#toolbar-"+d);i.addClass("saving");
e.find("li.ignore > .field").find("input, select, textarea").each(function(){h.push(a(this).attr("name"))});a.each(e.serializeArray(),function(b,c){if(!(a.inArray(c.name,h)>-1))g[c.name]=c.value});a.ajax({url:e.attr("action"),type:"post",data:a.extend(g,{option:"com_admin",tmpl:"warp-ajax"}),success:function(b){i.removeClass("saving");try{if(b=a.parseJSON(b),b.message=="success"){if(d=="apply")return}else{alert("Save failed!");return}}catch(c){}submitform(d)}})})});