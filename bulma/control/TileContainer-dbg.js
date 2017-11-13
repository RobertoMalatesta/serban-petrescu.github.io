"use strict";

sap.ui.define(["sap/ui/core/Control"], function (Control) {

    return Control.extend("portfolio.bulma.control.TileContainer", {
        metadata: {
            aggregations: {
                content: {
                    type: "sap.ui.core.Control",
                    multiple: true
                }
            },
            defaultAggregation: "content"
        },

        getContentWithLayout: function getContentWithLayout() {
            var fnIfNull = function fnIfNull(v, d) {
                return !v ? d : v;
            };
            var fnByOrder = function fnByOrder(c1, c2) {
                return c1.order - c2.order;
            };
            var fnToObject = function fnToObject(oC, iIndex) {
                var oData = oC.getLayoutData();
                if (oData) {
                    return {
                        control: oC,
                        order: fnIfNull(oData.getOrder(), iIndex),
                        size: fnIfNull(oData.getSize(), 4)
                    };
                } else {
                    return {
                        control: oC,
                        order: iIndex,
                        size: 4
                    };
                }
            };
            return (this.getContent() || []).map(fnToObject).sort(fnByOrder);
        },

        getContentAsRows: function getContentAsRows() {
            var aResult = [];
            var oObjects = this.getContentWithLayout();
            var mVisited = Object.create(null);
            var fnBuildRow = function fnBuildRow(i) {
                var iSum = oObjects[i].size;
                var aRow = [oObjects[i]];
                mVisited[i] = true;
                for (var j = i + 1; j < oObjects.length && iSum < 12; ++j) {
                    if (iSum + oObjects[j].size <= 12 && !mVisited[j]) {
                        iSum += oObjects[j].size;
                        aRow.push(oObjects[j]);
                        mVisited[j] = true;
                    }
                }
                if (iSum < 12) {
                    var iRest = 12 - iSum;
                    var iOldSum = iSum;
                    for (var _j = 0; _j < aRow.length; ++_j) {
                        var iInc = Math.floor(iRest * aRow[_j].size / iOldSum);
                        iSum += iInc;
                        aRow[_j].size += iInc;
                    }
                }
                if (iSum < 12) {
                    aRow[0].size += 12 - iSum;
                }
                return aRow;
            };
            for (var i = 0; i < oObjects.length; ++i) {
                if (!mVisited[i]) {
                    aResult.push(fnBuildRow(i));
                }
            }
            return aResult;
        },

        renderer: function renderer(oRm, oC) {
            (function () {
                oRm.write("<div ");
                oRm.writeControlData(oC);
                oRm.addClass("tile");
                oRm.addClass("is-ancestor");
                oRm.addClass("is-vertical");
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped((oC.getContentAsRows().forEach(function (aCells) {
                    return (function () {
                        oRm.write("<div ");
                        oRm.addClass("tile");
                        oRm.addClass("is-12");
                        oRm.writeClasses();
                        oRm.write(">");
                        oRm.writeEscaped((aCells.forEach(function (oCell) {
                            return (function () {
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
                                })(["tile", "padding", "is-" + oCell.size, "is-child"]);

                                oRm.writeClasses();
                                oRm.write(">");
                                oRm.renderControl(oCell.control);
                                oRm.write("</div>");
                            })();
                        })) || "");
                        oRm.write("</div>");
                    })();
                })) || "");
                oRm.write("</div>");
            })();
        }
    });
});
//# sourceMappingURL=TileContainer.js.map
