var TableLookupWizard=new Class({Binds:["send","show","checked","selected"],initialize:function(a){this.element=a;$$(("#ctrl_"+a+" .jserror")).setStyle("display","none");$$(("#ctrl_"+a+" .search")).setStyle("display","table-row");$$(("#ctrl_"+a+" tbody tr")).each(function(c){var b=c.getElement("input[type=checkbox]")?c.getElement("input[type=checkbox]"):c.getElement("input[type=radio]");if(b){b.addEvent("change",function(d){d.target.getParent("tr").destroy();$(("ctrl_"+a)).send()})}});$(("ctrl_"+a)).set("send",{url:("ajax.php?action=ffl&id="+a),link:"cancel",onSuccess:this.show}).addEvent("keyup",this.send)},send:function(){$$(("#ctrl_"+this.element+" .search input.tl_text")).setStyle("background-image","url(system/modules/tablelookupwizard/html/loading.gif)");$(("ctrl_"+this.element)).send()},show:function(b,c){$$(("#ctrl_"+this.element+" .search input.tl_text")).setStyle("background-image","none");$$(("#ctrl_"+this.element+" tr.found")).each(function(d){d.destroy()});var a=Elements.from(b,false);$$(("#ctrl_"+this.element+" tbody")).adopt(a);a.each(function(d){if(d.getElement("input[type=checkbox]")){d.getElement("input[type=checkbox]").addEvent("click",this.checked)}if(d.getElement("input[type=radio]")){d.getElement("input[type=radio]").addEvent("click",this.selected)}}.bind(this))},checked:function(a){if(a.target.checked){a.target.getParent("tr").removeClass("found").inject($$(("#ctrl_"+this.element+" tr.search"))[0],"before")}else{a.target.getParent("tr").destroy();$(("ctrl_"+this.element)).send()}},selected:function(a){a.target.getParent("tr").removeClass("found").inject($$(("#ctrl_"+this.element+" tr.search"))[0],"before");a.target.getParent("tr").getAllPrevious().destroy();$(("ctrl_"+this.element)).send()}});