"use strict";

sap.ui.define(["sap/ui/core/Control", "sap/ui/Device", "jquery.sap.global"], function (Control, Device, jQuery) {

    return Control.extend("portfolio.bulma.control.NavBar", {
        metadata: {
            properties: {
                brandText: {
                    type: "string"
                },
                active: {
                    type: "boolean",
                    defaultValue: false
                }
            },
            aggregations: {
                startItems: { type: "sap.ui.core.Control", multiple: true },
                endItems: { type: "sap.ui.core.Control", multiple: true }
            }
        },

        onAfterRendering: function onAfterRendering() {
            var _this = this;

            this.$("burger").on(Device.support.touch ? "tap" : "click", function () {
                return _this.setActive(!_this.getActive());
            });
            this.$("menu").find("a").on(Device.support.touch ? "tap" : "click", function () {
                jQuery.sap.delayedCall(100, null, function () {
                    return _this.setActive(false);
                });
                return true;
            });
        },

        renderer: function renderer(oRm, oC) {
            (function () {
                oRm.write("<nav ");
                oRm.addClass("navbar");
                oRm.addClass("fixed");
                oRm.writeControlData(oC);
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<div ");
                oRm.addClass("navbar-brand");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<a ");
                oRm.addClass("navbar-item");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<span ");
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped((oC.getBrandText().toUpperCase()) || "");
                oRm.write("</span>");
                oRm.write("</a>");
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
                })({ "navbar-burger": true, "burger": true, "is-active": oC.getActive() });

                oRm.writeAttributeEscaped("id", oC.getId() + "-burger");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<span ");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("</span>");
                oRm.write("<span ");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("</span>");
                oRm.write("<span ");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("</span>");
                oRm.write("</div>");
                oRm.write("</div>");
                oRm.write("<div ");
                oRm.writeAttributeEscaped("id", oC.getId() + "-menu");

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
                })({ "navbar-menu": true, "is-active": oC.getActive() });

                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<div ");
                oRm.addClass("navbar-start");
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped(((oC.getStartItems() || []).forEach(function (i) {
                    return (function () {
                        oRm.renderControl(i);
                    })();
                })) || "");
                oRm.write("</div>");
                oRm.write("<div ");
                oRm.addClass("navbar-end");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<div ");
                oRm.addClass("navbar-item");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<div ");
                oRm.addClass("field");
                oRm.addClass("is-grouped");
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped(((oC.getEndItems() || []).forEach(function (i) {
                    return (function () {
                        oRm.renderControl(i);
                    })();
                })) || "");
                oRm.write("</div>");
                oRm.write("</div>");
                oRm.write("</div>");
                oRm.write("</div>");
                oRm.write("</nav>");
            })();
        }
    });
});
//# sourceMappingURL=NavBar.js.map
