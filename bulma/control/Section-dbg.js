"use strict";

sap.ui.define(["sap/ui/core/Control"], function (Control) {

    return Control.extend("portfolio.bulma.control.Section", {
        metadata: {
            aggregations: {
                content: {
                    type: "sap.ui.core.Control",
                    multiple: true
                }
            },
            defaultAggregation: "content"
        },

        renderer: function renderer(oRm, oC) {
            (function () {
                oRm.write("<section ");
                oRm.writeControlData(oC);
                oRm.addClass("section");
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped(((oC.getContent() || []).forEach(function (c) {
                    return (function () {
                        oRm.renderControl(c);
                    })();
                })) || "");
                oRm.write("</section>");
            })();
        }
    });
});
//# sourceMappingURL=Section.js.map
