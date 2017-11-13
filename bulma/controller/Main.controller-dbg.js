"use strict";

sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/Global", "jquery.sap.global"], function (Controller, sapUi, jQuery) {
    "use strict";

    var TOAST_SHOW_TIME = 4000;
    var FEEDBACK_API = "https://feedback-p1940442392trial.hanatrial.ondemand.com:443/api/v2/apps/b659539f-42a1-458d-84f4-d67e8956cfd9/posts";

    return Controller.extend("portfolio.bulma.controller.Main", {

        /** Lifecycle initialization hook. */
        onInit: function onInit() {
            var _this = this;

            var oWindow = jQuery(window);
            var bShown = this.hasGivenFeedback();
            oWindow.on("scroll", function () {
                if (oWindow.scrollTop() > jQuery(document).height() / 2 && !bShown) {
                    bShown = true;
                    _this.byId("toast").open(TOAST_SHOW_TIME);
                }
            });
        },

        /** Checks if the user already gave feedback. */
        hasGivenFeedback: function hasGivenFeedback() {
            try {
                return window.localStorage.getItem("feedback-given") === "true";
            } catch (e) {
                return false;
            }
        },

        /** Calls the feedback service with the feedback data */
        onFeedbackSubmit: function onFeedbackSubmit(oEvent) {
            oEvent.preventDefault();
            oEvent.getSource().close();
            jQuery.ajax({
                method: "POST",
                url: FEEDBACK_API,
                contentType: "application/json",
                data: JSON.stringify({
                    texts: {
                        t1: oEvent.getSource().getAreaValue()
                    },
                    ratings: {
                        r1: { value: oEvent.getSource().getRatingValue() }
                    },
                    context: {
                        page: "index.html",
                        language: sapUi.getCore().getConfiguration().getLanguage()
                    }
                })
            }).then(function () {
                try {
                    return window.localStorage.setItem("feedback-given", "true");
                } catch (e) {
                    return false;
                }
            });
        },

        /** Opens the gallery dialog. */
        onOpenGallery: function onOpenGallery(oEvent) {
            var sPath = oEvent.getSource().getBindingContext().getPath();
            var oDialog = this.byId("dlgGallery");
            oEvent.preventDefault();
            oDialog.bindElement(sPath);
            oDialog.open();
        },

        /** Opens the feedback modal. */
        onPressFeedback: function onPressFeedback(oEvent) {
            oEvent.preventDefault();
            oEvent.getSource().close();
            this.byId("dlgFeedback").open();
        }

    });
});
//# sourceMappingURL=Main.controller.js.map
