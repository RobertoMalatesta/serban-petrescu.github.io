"use strict";

sap.ui.define(["sap/ui/core/Control"], function (Control) {

    return Control.extend("portfolio.bulma.control.ExperienceContainer", {
        metadata: {
            aggregations: {
                boxes: {
                    type: "portfolio.bulma.control.ExperienceBox",
                    multiple: true,
                    singularName: "box"
                }
            },
            defaultAggregation: "boxes"
        },

        renderer: function renderer(oRm, oC) {
            (function () {
                oRm.write("<div ");
                oRm.writeControlData(oC);
                oRm.addClass("sapUiSmallMarginBottom");
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped(((oC.getBoxes() || []).forEach(function (b, i) {
                    return (function () {
                        oRm.write("<div ");
                        oRm.writeClasses();
                        oRm.write(">");
                        oRm.write("<div ");

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
                        })({ "sapUiSmallMarginTopBottom": i !== 0 });

                        oRm.writeClasses();
                        oRm.write(">");
                        oRm.write("</div>");
                        oRm.renderControl(b);
                        oRm.write("</div>");
                    })();
                })) || "");
                oRm.write("</div>");
            })();
        }
    });
});
//# sourceMappingURL=ExperienceContainer.js.map
