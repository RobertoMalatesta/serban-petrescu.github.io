"use strict";

sap.ui.define(["sap/ui/core/Control"], function (Control) {

    return Control.extend("portfolio.bulma.control.MediaObject", {
        metadata: {
            properties: {
                text: {
                    type: "string"
                },
                src: {
                    type: "sap.ui.core.URI"
                }
            },
            aggregations: {
                icons: {
                    type: "portfolio.bulma.control.MediaObjectIcon",
                    multiple: true
                }
            },
            defaultAggregation: "icons"
        },

        renderer: function renderer(oRm, oC) {
            (function () {
                oRm.write("<article ");
                oRm.writeControlData(oC);
                oRm.addClass("media");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<figure ");
                oRm.addClass("media-left");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<p ");
                oRm.addClass("image");
                oRm.addClass("is-64x64");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<img ");
                oRm.writeAttributeEscaped("src", oC.getSrc());
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("</p>");
                oRm.write("</figure>");
                oRm.write("<div ");
                oRm.addClass("media-content");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<div ");
                oRm.addClass("content");
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped(((oC.getText() || "").split("\n").forEach(function (l) {
                    return (function () {
                        oRm.write("<p ");
                        oRm.writeClasses();
                        oRm.write(">");
                        oRm.writeEscaped((l) || "");
                        oRm.write("</p>");
                    })();
                })) || "");
                oRm.write("</div>");
                oRm.write("<nav ");
                oRm.addClass("level");
                oRm.addClass("is-mobile");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<div ");
                oRm.addClass("level-left");
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped(((oC.getIcons() || []).forEach(function (i) {
                    return (function () {
                        oRm.renderControl(i);
                    })();
                })) || "");
                oRm.write("</div>");
                oRm.write("</nav>");
                oRm.write("</div>");
                oRm.write("</article>");
            })();
        }
    });
});
//# sourceMappingURL=MediaObject.js.map
