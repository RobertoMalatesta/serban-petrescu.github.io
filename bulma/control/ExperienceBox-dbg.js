"use strict";

sap.ui.define(["sap/ui/core/Control"], function (Control) {

    return Control.extend("portfolio.bulma.control.ExperienceBox", {
        metadata: {
            properties: {
                title: {
                    type: "string"
                },
                period: {
                    type: "string"
                },
                description: {
                    type: "string"
                },
                icon: {
                    type: "string"
                }
            }
        },

        renderer: function renderer(oRm, oC) {
            (function () {
                oRm.write("<div ");
                oRm.writeControlData(oC);
                oRm.addClass("box");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<article ");
                oRm.addClass("media");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<div ");
                oRm.addClass("media-left");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<span ");
                oRm.addClass("icon");
                oRm.addClass("is-medium");
                oRm.addClass("experience-icon");
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
                oRm.write("</div>");
                oRm.write("<div ");
                oRm.addClass("media-content");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<div ");
                oRm.addClass("content");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<p ");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<strong ");
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped((oC.getTitle()) || "");
                oRm.write("</strong>");
                oRm.write("<br ");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<small ");
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped((oC.getPeriod()) || "");
                oRm.write("</small>");
                oRm.write("<br ");
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped((oC.getDescription()) || "");
                oRm.write("</p>");
                oRm.write("</div>");
                oRm.write("</div>");
                oRm.write("</article>");
                oRm.write("</div>");
            })();
        }
    });
});
//# sourceMappingURL=ExperienceBox.js.map
