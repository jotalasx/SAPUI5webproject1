sap.ui.define([
	"sap/ui/core/ComponentContainer"
	], function (ComponentContainer){
		"use strict";
		new ComponentContainer({
			name: "sap.ui.chema",
			settings: {
				id: "chema"
			},
			async: true
		}).placeAt("content");
	});