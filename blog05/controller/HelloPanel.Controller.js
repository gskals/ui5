sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
], function(Controller, MessageToast, ){
	"use strict";
	return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
		onShowHello : function () {
			var oBundle = this.getView().getModel("i18n").getResourceBundle(); //리소스모델을 가져와서 객체로 만들고 객체를 가져와 변수에 담는다
			var sRecipient = this.getView().getModel().getProperty("/recipient/name"); //디폴트모델에서 name프로포티 글자 읽어와 변수에 담는다, getProperty: 모델의 데이터 가져옴
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);	//("키워드",[ ]) 인사라는 문자열이 키워드에 리턴됨 //helloMsg= {0}님, 반갑습니다. , sRecipient = Nion
										
			MessageToast.show(sMsg);
		}
	});
});