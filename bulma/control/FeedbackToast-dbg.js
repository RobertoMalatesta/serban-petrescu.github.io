"use strict";

sap.ui.define(["sap/ui/core/Control", "sap/ui/Device"], function (Control, Device) {

    return Control.extend("portfolio.bulma.control.FeedbackToast", {
        metadata: {
            properties: {
                intro: {
                    type: "string"
                },
                text: {
                    type: "string"
                }
            },
            events: {
                press: {}
            }
        },

        onAfterRendering: function onAfterRendering() {
            var _this = this;

            this.$("link").on(Device.support.touch ? "tap" : "click", function () {
                return _this.fireEvent("press", {}, true);
            });
        },

        open: function open(iTime) {
            this.$().fadeIn(500).delay(iTime || 2000).fadeOut(500);
        },

        close: function close() {
            this.$().css("display", "none");
        },

        renderer: function renderer(oRm, oC) {
            (function () {
                oRm.write("<div ");
                oRm.writeControlData(oC);
                oRm.addClass("toast");
                oRm.writeAttribute("style", "display:none");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<div ");
                oRm.addClass("notification");
                oRm.addClass("is-primary");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<span ");
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped((oC.getIntro() + " ") || "");
                oRm.write("</span>");
                oRm.write("<a ");
                oRm.writeAttributeEscaped("id", oC.getId() + "-link");
                oRm.writeAttribute("href", "#");
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped((oC.getText()) || "");
                oRm.write("</a>");
                oRm.write("</div>");
                oRm.write("</div>");
            })();
        }
    });
});
//# sourceMappingURL=FeedbackToast.js.map
