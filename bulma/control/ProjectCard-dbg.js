"use strict";

sap.ui.define(["sap/ui/core/Control"], function (Control) {

    return Control.extend("portfolio.bulma.control.ProjectCard", {
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
                difficultyState: {
                    type: "sap.ui.core.ValueState",
                    defaultValue: "None"
                },
                difficultyText: {
                    type: "string"
                }
            },
            aggregations: {
                topics: {
                    type: "sap.ui.core.Item",
                    multiple: true
                },
                links: {
                    type: "portfolio.bulma.control.ProjectCardLink",
                    multiple: true
                }
            }
        },

        renderer: function renderer(oRm, oC) {
            var hasVisibleChild = function hasVisibleChild(c) {
                return !!c.find(function (c) {
                    return c.getVisible();
                });
            };

            var stateToTagClasses = function stateToTagClasses(s) {
                return {
                    "tag": true,
                    "is-primary": s === "None",
                    "is-success": s === "Success",
                    "is-warning": s === "Warning",
                    "is-danger": s === "Error",
                    "very-small-margin": true
                };
            };

            (function () {
                oRm.write("<div ");
                oRm.writeControlData(oC);
                oRm.addClass("card");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<header ");
                oRm.addClass("card-header");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<p ");
                oRm.addClass("card-header-title");
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped((oC.getTitle()) || "");
                oRm.write("</p>");
                oRm.write("</header>");
                oRm.write("<div ");
                oRm.addClass("card-content");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<div ");
                oRm.addClass("content");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<em ");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<small ");
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped((oC.getPeriod()) || "");
                oRm.write("</small>");
                oRm.write("</em>");
                oRm.write("<br ");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<p ");
                oRm.addClass("sapUiTinyMarginTopBottom");
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped((oC.getDescription()) || "");
                oRm.write("</p>");
                oRm.write("<span ");

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
                })(stateToTagClasses(oC.getDifficultyState()));

                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped((oC.getDifficultyText()) || "");
                oRm.write("</span>");
                oRm.writeEscaped(((oC.getTopics() || []).forEach(function (t) {
                    return (function () {
                        oRm.write("<span ");
                        oRm.addClass("very-small-margin");
                        oRm.addClass("tag");
                        oRm.addClass("is-primary");
                        oRm.writeClasses();
                        oRm.write(">");
                        oRm.writeEscaped((t.getText()) || "");
                        oRm.write("</span>");
                    })();
                })) || "");
                oRm.write("</div>");
                oRm.write("</div>");
                oRm.writeEscaped((oC.getLinks() && hasVisibleChild(oC.getLinks()) && (function () {
                    oRm.write("<footer ");
                    oRm.addClass("card-footer");
                    oRm.writeClasses();
                    oRm.write(">");
                    oRm.writeEscaped((oC.getLinks().forEach(function (c) {
                        return (function () {
                            oRm.renderControl(c);
                        })();
                    })) || "");
                    oRm.write("</footer>");
                })()) || "");
                oRm.write("</div>");
            })();
        }
    });
});
//# sourceMappingURL=ProjectCard.js.map
