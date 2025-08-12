/*global QUnit*/

sap.ui.define([
	"travelexpensensp/workflow-ui-module/controller/TravelExpenseApprovalForm.controller"
], function (Controller) {
	"use strict";

	QUnit.module("TravelExpenseApprovalForm Controller");

	QUnit.test("I should test the TravelExpenseApprovalForm controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
