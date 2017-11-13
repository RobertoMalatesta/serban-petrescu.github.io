"use strict";

sap.ui.define(["sap/ui/core/Control"], function (Control) {

    return Control.extend("portfolio.bulma.control.ResponsiveDualContainer", {
        metadata: {
            aggregations: {
                first: {
                    type: "sap.ui.core.Control",
                    multiple: true
                },
                second: {
                    type: "sap.ui.core.Control",
                    multiple: true
                }
            }
        },

        renderer: function renderer(oRm, oC) {
            (function () {
                oRm.write("<div ");
                oRm.writeControlData(oC);
                oRm.addClass("columns");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<div ");
                oRm.addClass("column");
                oRm.addClass("is-half");
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped(((oC.getFirst() || []).forEach(function (c) {
                    return (function () {
                        oRm.renderControl(c);
                    })();
                })) || "");
                oRm.write("</div>");
                oRm.write("<div ");
                oRm.addClass("column");
                oRm.addClass("is-half");
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped(((oC.getSecond() || []).forEach(function (c) {
                    return (function () {
                        oRm.renderControl(c);
                    })();
                })) || "");
                oRm.write("</div>");
                oRm.write("</div>");
            })();
        }
    });
});
//# sourceMappingURL=ResponsiveDualContainer.js.map
