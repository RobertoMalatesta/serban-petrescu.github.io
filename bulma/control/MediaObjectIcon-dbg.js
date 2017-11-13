"use strict";

sap.ui.define(["sap/ui/core/Control"], function (Control) {

    return Control.extend("portfolio.bulma.control.MediaObjectIcon", {
        metadata: {
            properties: {
                src: {
                    type: "sap.ui.core.URI"
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
                oRm.addClass("level-item");
                oRm.writeAttributeEscaped("href", oC.getHref());
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<img ");
                oRm.addClass("image");
                oRm.addClass("is-16x16");
                oRm.writeAttributeEscaped("src", oC.getSrc());
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("</a>");
            })();
        }
    });
});
//# sourceMappingURL=MediaObjectIcon.js.map
