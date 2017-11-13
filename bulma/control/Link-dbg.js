"use strict";

sap.ui.define(["sap/ui/core/Control"], function (Control) {

    return Control.extend("portfolio.bulma.control.Link", {
        metadata: {
            properties: {
                text: {
                    type: "string"
                },
                href: {
                    type: "sap.ui.core.URI"
                }
            }
        },

        renderer: function renderer(oRm, oC) {
            (function () {
                oRm.write("<a ");
                oRm.writeControlData(oC);
                oRm.writeAttributeEscaped("href", oC.getHref());
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped((oC.getText()) || "");
                oRm.write("</a>");
            })();
        }
    });
});
//# sourceMappingURL=Link.js.map
