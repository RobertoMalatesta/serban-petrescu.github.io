"use strict";

sap.ui.define(["sap/ui/core/Control", "sap/ui/Device"], function (Control, Device) {

    return Control.extend("portfolio.bulma.control.ProjectCardLink", {
        metadata: {
            properties: {
                text: {
                    type: "string"
                },
                href: {
                    type: "sap.ui.core.URI",
                    defaultValue: ""
                }
            },
            events: {
                press: {}
            }
        },

        onAfterRendering: function onAfterRendering() {
            var _this = this;

            this.$().on(Device.support.touch ? "tap" : "click", function () {
                return _this.fireEvent("press", {}, true);
            });
        },

        renderer: function renderer(oRm, oC) {
            (function () {
                oRm.write("<a ");
                oRm.writeControlData(oC);
                oRm.writeAttributeEscaped("href", oC.getHref());
                oRm.addClass("card-footer-item");
                oRm.writeAttribute("target", "_blank");
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped((oC.getText()) || "");
                oRm.write("</a>");
            })();
        }
    });
});
//# sourceMappingURL=ProjectCardLink.js.map
