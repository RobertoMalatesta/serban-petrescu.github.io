"use strict";sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","portfolio/bulma/model/models"],function(e,t,o){return e.extend("portfolio.bulma.Component",{metadata:{manifest:"json"},init:function(){this.setModel(o.createDeviceModel(),"device"),this.setModel(o.createMainModel(this.getModel("i18n").getResourceBundle())),e.prototype.init.apply(this,arguments)}})});