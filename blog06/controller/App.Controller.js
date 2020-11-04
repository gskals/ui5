sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel" /* 다국어 지원*/
], function(Controller, JSONModel, ResourceModel){
	"use strict";
	return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
		onInit :  function() {
			var oData = {
				recipient : {
					name : "윤여현"
				}
		};
		
		
		var oModel = new JSONModel(oData); //모델에 데이터를 담고
		this.getView().setModel(oModel); //모델을 뷰에 바인딩, 데이터를 뷰에 바로 바인딩할수 없다 

		var i18nModel = new ResourceModel({
			bundleName : "sap.ui.demo.walkthrough.i18n.i18n" //i18n.properties
		});
		this.getView().setModel(i18nModel, "i18n");	//디폴트모델아닌 이름 지정한 모델 
	  
	},	//양방향바인딩, 모델을 통해 한군데만 수정했는데 두군데 다 반영
	  
	});
});