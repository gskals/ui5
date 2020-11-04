sap.ui.define(["sap/ui/core/mvc/XMLView"], function(XMLView){
	"use strict"; 
	XMLView.create({	
		viewName: "sap.ui.demo.walkthrough.view.App"	
	}).then(function (oView) {	
		oView.placeAt("content");						//뷰객체 content에 붙임, 화면에서 id를 찾아서 그위치에 텍스트컨트롤을 붙여준다. = append
	});
});