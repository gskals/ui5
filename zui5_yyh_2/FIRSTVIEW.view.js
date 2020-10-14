sap.ui.jsview("zui5_yyh_2.FIRSTVIEW", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf zui5_yyh_2.FIRSTVIEW
	*/ 
	getControllerName : function() {
		return "zui5_yyh_2.FIRSTVIEW";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf zui5_yyh_2.FIRSTVIEW
	*/ 
	createContent : function(oController) {
	
	//******************** 자바스크립트 입력 시작 *******************

	alert("test");
    document.write("test");
	


	//******************** 자바스크립트 입력 종료 *******************
	
	}

	});