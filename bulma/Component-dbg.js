"use strict";

sap.ui.define(["sap/ui/core/UIComponent", "sap/ui/Device", "portfolio/bulma/model/models"], function (UIComponent, Device, models) {
    "use strict";

    return UIComponent.extend("portfolio.bulma.Component", {

        metadata: {
            manifest: "json"
        },

        /**
         * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
         * @public
         * @override
         */
        init: function init() {
            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            //set the main model
            this.setModel(models.createMainModel(this.getModel("i18n").getResourceBundle()));

            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);
        }
    });
});
//# sourceMappingURL=Component.js.map
