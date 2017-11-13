"use strict";

sap.ui.define(["sap/ui/core/Control"], function (Control) {

    return Control.extend("portfolio.bulma.control.Hero", {
        metadata: {
            properties: {
                title: {
                    type: "string"
                },
                subtitle: {
                    type: "string"
                }
            }
        },

        renderer: function renderer(oRm, oC) {
            (function () {
                oRm.write("<section ");
                oRm.writeControlData(oC);
                oRm.addClass("hero");
                oRm.addClass("is-fullheight");
                oRm.addClass("is-primary");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<div ");
                oRm.addClass("hero-body");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<div ");
                oRm.addClass("container");
                oRm.addClass("has-text-centered");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<h1 ");
                oRm.addClass("title");
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped((oC.getTitle()) || "");
                oRm.write("</h1>");
                oRm.write("<h2 ");
                oRm.addClass("subtitle");
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped((oC.getSubtitle()) || "");
                oRm.write("</h2>");
                oRm.write("</div>");
                oRm.write("</div>");
                oRm.write("</section>");
            })();
        }
    });
});
//# sourceMappingURL=Hero.js.map
