sap.ui.define([
	"sap/ui/core/mvc/Controller", //5
	"sap/m/MessageToast", //5
	"sap/ui/core/Fragment", //6
], function(Controller, MessageToast, Fragment ){
	"use strict";
	return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
		onShowHello : function () {
			var oBundle = this.getView().getModel("i18n").getResourceBundle(); //리소스모델을 가져와서 객체로 만들고 객체를 가져와 변수에 담는다
			var sRecipient = this.getView().getModel().getProperty("/recipient/name"); //디폴트모델에서 name프로포티 글자 읽어와 변수에 담는다, getProperty: 모델의 데이터 가져옴
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);	//("키워드",[ ]) 인사라는 문자열이 키워드에 리턴됨 //helloMsg= {0}님, 반갑습니다. , sRecipient = Nion
										
			MessageToast.show(sMsg);
		},

		// study 6. 다이얼로그 열기
		onOpenDialog : function () { 
			var oView = this.getView(); //getView하면 컨트롤러가 연결된 뷰를 가져옴. 즉 fragment.xml
			
			if(!this.byId("helloDialog")) { //괄호안의 ID를 찾음. 첫번째 실행인 경우 true에 넣는다
				Fragment.load({ 	
					id: oView.getId(), //id에 oView(fragment.xml)에 있는 ID를 찾는다.
					name: "sap.ui.demo.walkthrough.view.HelloDialog",
				        controller: this //??_fragment는 컨트롤러가 없으므로, 이렇게 지정해 주는것인가?
               }).then(function (oDialog) {	     //
					oView.addDependent(oDialog); //컨트롤러가 연결된 oView 에 위에서 로드한 객체 연결. 
												 //다이얼로그는 반드시 addDependent로 연결
					oDialog.open();
				});
			} 
			else {
				this.byId("HelloDialog").open(); //Dialog ID 
			}
		},

		// study 6. 다이얼로그 닫기 및 재실행을 위해 파괴하기
		onCloseDialog : function () {
			this.byId("HelloDialog").close();
			this.byId("HelloDialog").destroy(); //distory안하면 두번쨰 실행 떄 중복에러 발생
			
				}		

	});
});