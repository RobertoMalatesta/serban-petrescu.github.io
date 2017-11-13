"use strict";

sap.ui.define(["sap/ui/core/Control"], function (Control) {

    return Control.extend("portfolio.bulma.control.NavBarButton", {
        metadata: {
            properties: {
                text: {
                    type: "string"
                },
                tooltip: {
                    type: "string"
                },
                href: {
                    type: "sap.ui.core.URI"
                },
                icon: {
                    type: "string"
                },
                target: {
                    type: "string",
                    defaultValue: "_blank"
                },
                primary: {
                    type: "boolean",
                    defaultValue: false
                }
            }
        },

        renderer: function renderer(oRm, oC) {
            (function () {
                oRm.write("<p ");
                oRm.addClass("control");
                oRm.writeControlData(oC);
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<a ");

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
                })({ button: true, "is-primary": oC.getPrimary(), "is-outlined": true });

                oRm.writeAttributeEscaped("title", oC.getTooltip());
                oRm.writeAttributeEscaped("href", oC.getHref());
                oRm.writeAttributeEscaped("target", oC.getTarget());
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<span ");
                oRm.addClass("icon");
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
                oRm.write("</span>");
                oRm.writeEscaped((oC.getText() && (function () {
                    oRm.write("<span ");
                    oRm.writeClasses();
                    oRm.write(">");
                    oRm.writeEscaped((oC.getText()) || "");
                    oRm.write("</span>");
                })()) || "");
                oRm.write("</a>");
                oRm.write("</p>");
            })();
        }
    });
});
//# sourceMappingURL=NavBarButton.js.map
