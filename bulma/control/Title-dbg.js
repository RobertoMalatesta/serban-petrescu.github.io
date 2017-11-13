"use strict";

sap.ui.define(["sap/ui/core/Control"], function (Control) {

    return Control.extend("portfolio.bulma.control.Title", {
        metadata: {
            properties: {
                text: {
                    type: "string"
                },
                name: {
                    type: "string"
                },
                href: {
                    type: "sap.ui.core.URI"
                },
                level: {
                    type: "int",
                    defaultValue: 4
                }
            }
        },

        renderer: function renderer(oRm, oC) {
            (function () {
                oRm.write("<h4 ");
                oRm.writeAttributeEscaped("id", oC.getName() || oC.getId());

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
                })(["title", "is-" + oC.getLevel()]);

                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped((oC.getText()) || "");
                oRm.write("</h4>");
            })();
        }
    });
});
//# sourceMappingURL=Title.js.map
