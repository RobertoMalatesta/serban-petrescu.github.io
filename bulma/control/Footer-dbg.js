"use strict";

sap.ui.define(["sap/ui/core/Control"], function (Control) {

    return Control.extend("portfolio.bulma.control.Footer", {
        metadata: {
            properties: {
                text: {
                    type: "string"
                },
                icon: {
                    type: "string",
                    defaultValue: "github"
                },
                href: {
                    type: "sap.ui.core.URI"
                }
            },
            aggregations: {
                links: {
                    type: "portfolio.bulma.control.Link"
                }
            },
            defaultAggregation: "links"
        },

        renderer: function renderer(oRm, oC) {
            (function () {
                oRm.write("<footer ");
                oRm.writeControlData(oC);
                oRm.addClass("footer");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<div ");
                oRm.addClass("container");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<div ");
                oRm.addClass("content");
                oRm.addClass("has-text-centered");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<p ");
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped((oC.getText()) || "");
                oRm.writeEscaped(((oC.getLinks() || []).forEach(function (oL, i) {
                    return (function () {
                        oRm.write("<span ");
                        oRm.writeClasses();
                        oRm.write(">");
                        oRm.writeEscaped((i !== 0 ? ", " : " ") || "");
                        oRm.renderControl(oL);
                        oRm.write("</span>");
                    })();
                })) || "");
                oRm.writeEscaped(".\n                        ");
                oRm.write("</p>");
                oRm.write("<p ");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<a ");
                oRm.addClass("icon");
                oRm.writeAttributeEscaped("href", oC.getHref());
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<i ");

                (function (mC) {
                    var mClasses = mC || {};

                    if (mClasses instanceof Array) {
                        for (var i = 0; i < mClasses.length; ++i) {
                            if (mClasses[i]) {
                                oRm.addClass(mClasses[i]);
                            }
                        }
                    } else {
                        for (var sKey in mClasses) {
                            if (mClasses.hasOwnProperty(sKey) && mClasses[sKey]) {
                                oRm.addClass(sKey);
                            }
                        }
                    }
                })(["fa", "fa-" + oC.getIcon()]);

                oRm.writeClasses();
                oRm.write(">");
                oRm.write("</i>");
                oRm.write("</a>");
                oRm.write("</p>");
                oRm.write("</div>");
                oRm.write("</div>");
                oRm.write("</footer>");
            })();
        }
    });
});
//# sourceMappingURL=Footer.js.map
