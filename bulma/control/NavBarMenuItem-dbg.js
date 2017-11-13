"use strict";

sap.ui.define(["sap/ui/core/Control"], function (Control) {

    return Control.extend("portfolio.bulma.control.NavBarMenuItem", {
        metadata: {
            properties: {
                text: {
                    type: "string"
                },
                href: {
                    type: "sap.ui.core.URI"
                }
            },
            aggregations: {
                items: {
                    type: "portfolio.bulma.control.NavBarMenuItem",
                    multiple: true
                }
            },
            defaultAggregation: "items"
        },

        renderer: function renderer(oRm, oC) {
            if (oC.getItems() && oC.getItems().length) {
                (function () {
                    oRm.write("<div ");
                    oRm.writeControlData(oC);
                    oRm.addClass("navbar-item");
                    oRm.addClass("has-dropdown");
                    oRm.addClass("is-hoverable");
                    oRm.writeClasses();
                    oRm.write(">");
                    oRm.write("<a ");
                    oRm.addClass("navbar-link");
                    oRm.writeAttributeEscaped("href", oC.getHref());
                    oRm.writeClasses();
                    oRm.write(">");
                    oRm.writeEscaped((oC.getText()) || "");
                    oRm.write("</a>");
                    oRm.write("<div ");
                    oRm.addClass("navbar-dropdown");
                    oRm.writeClasses();
                    oRm.write(">");
                    oRm.writeEscaped((oC.getItems().forEach(function (item) {
                        return (function () {
                            oRm.renderControl(item);
                        })();
                    })) || "");
                    oRm.write("</div>");
                    oRm.write("</div>");
                })();
            } else {
                (function () {
                    oRm.write("<a ");
                    oRm.writeControlData(oC);
                    oRm.addClass("navbar-item");
                    oRm.writeAttributeEscaped("href", oC.getHref());
                    oRm.writeClasses();
                    oRm.write(">");
                    oRm.writeEscaped((oC.getText()) || "");
                    oRm.write("</a>");
                })();
            }
        }
    });
});
//# sourceMappingURL=NavBarMenuItem.js.map
