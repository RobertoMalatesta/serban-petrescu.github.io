"use strict";

sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/core/Fragment", "jquery.sap.global"], function (Controller, Fragment, jQuery) {
    "use strict";

    return Controller.extend("portfolio.print.controller.Print", {
        /** Lifecycle post-rendering hook. */
        onAfterRendering: function onAfterRendering() {
            this.byId("dlgPrint").open();
        },

        formatConcepts: function formatConcepts(aTechnologies) {
            var sResult, i;
            if (aTechnologies && aTechnologies[0]) {
                sResult = aTechnologies[0].name;
                for (i = 1; aTechnologies[i]; ++i) {
                    sResult += ", " + aTechnologies[i].name;
                }
                return sResult;
            } else {
                return "";
            }
        },

        onAfterDialogOpen: function onAfterDialogOpen() {
            jQuery(this.byId("dlgPrint").getDomRef()).css("display", "");
            window.print();
        },

        onRePrint: function onRePrint() {
            window.print();
        },

        onClose: function onClose() {
            window.close();
        }
    });
});
//# sourceMappingURL=Print.controller.js.map
