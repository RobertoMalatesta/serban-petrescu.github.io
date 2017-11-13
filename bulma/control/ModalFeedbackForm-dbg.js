"use strict";

sap.ui.define(["sap/ui/core/Control", "sap/ui/Device"], function (Control, Device) {

    return Control.extend("portfolio.bulma.control.ModalFeedbackForm", {
        metadata: {
            properties: {
                title: {
                    type: "string"
                },
                submitText: {
                    type: "string"
                },
                ratingLabel: {
                    type: "string"
                },
                areaLabel: {
                    type: "string"
                },
                ratingValue: {
                    type: "int",
                    defaultValue: 0
                },
                areaValue: {
                    type: "string",
                    defaultValue: ""
                },
                open: {
                    type: "boolean",
                    defaultValue: false
                }
            },
            events: {
                submit: {}
            }
        },

        onAfterRendering: function onAfterRendering() {
            var _this = this;

            var sPress = Device.support.touch ? "tap" : "click";
            this.$().find(".delete").on(sPress, function () {
                return _this.close();
            });
            this.$().find(".rating-star").on(sPress, function (e) {
                _this.setRatingValue(parseInt(e.currentTarget.getAttribute("data-index"), 10));
                return false;
            });
            this.$().find("textarea").change(function (e) {
                return _this.setProperty("areaValue", e.target.value, true);
            });
            this.$("submit").on(sPress, function () {
                return _this.fireEvent("submit", {}, true);
            });
        },

        open: function open() {
            this.setOpen(true);
        },

        close: function close() {
            this.setOpen(false);
        },

        renderer: function renderer(oRm, oC) {
            (function () {
                oRm.write("<div ");
                oRm.writeControlData(oC);

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
                })({ "modal": true, "is-active": oC.getOpen() });

                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<div ");
                oRm.addClass("modal-background");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("</div>");
                oRm.write("<div ");
                oRm.addClass("modal-card");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<header ");
                oRm.addClass("modal-card-head");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<p ");
                oRm.addClass("modal-card-title");
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped((oC.getTitle()) || "");
                oRm.write("</p>");
                oRm.write("<button ");
                oRm.addClass("delete");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("</button>");
                oRm.write("</header>");
                oRm.write("<section ");
                oRm.addClass("modal-card-body");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<div ");
                oRm.addClass("field");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<label ");
                oRm.addClass("label");
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped((oC.getRatingLabel()) || "");
                oRm.write("</label>");
                oRm.write("<div ");
                oRm.addClass("control");
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped(([1, 2, 3, 4, 5].forEach(function (iIndex) {
                    return (function () {
                        oRm.write("<a ");
                        oRm.writeAttribute("href", "#");
                        oRm.addClass("is-primary");
                        oRm.addClass("rating-star");
                        oRm.writeAttributeEscaped("data-index", iIndex);
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
                        })(["fa", "fa-" + (iIndex > oC.getRatingValue() ? "star-o" : "star")]);

                        oRm.writeClasses();
                        oRm.write(">");
                        oRm.write("</i>");
                        oRm.write("</span>");
                        oRm.write("</a>");
                    })();
                })) || "");
                oRm.write("</div>");
                oRm.write("</div>");
                oRm.write("<div ");
                oRm.addClass("field");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<label ");
                oRm.addClass("label");
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped((oC.getAreaLabel()) || "");
                oRm.write("</label>");
                oRm.write("<div ");
                oRm.addClass("control");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<textarea ");
                oRm.addClass("textarea");
                oRm.addClass("feedback-area");
                oRm.writeAttribute("rows", "3");
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped((oC.getAreaValue()) || "");
                oRm.write("</textarea>");
                oRm.write("</div>");
                oRm.write("</div>");
                oRm.write("</section>");
                oRm.write("<footer ");
                oRm.addClass("modal-card-foot");
                oRm.writeAttribute("style", "justify-content:flex-end");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<a ");
                oRm.addClass("button");
                oRm.addClass("is-primary");
                oRm.writeAttributeEscaped("id", oC.getId() + "-submit");

                (function (mA) {
                    var mAttr = mA || {};

                    for (var sKey in mAttr) {
                        if (mAttr.hasOwnProperty(sKey)) {
                            oRm.writeAttributeEscaped(sKey, mAttr[sKey]);
                        }
                    }
                })(oC.getRatingValue() === 0 ? { disabled: "disabled" } : {});

                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped((oC.getSubmitText()) || "");
                oRm.write("</a>");
                oRm.write("</footer>");
                oRm.write("</div>");
                oRm.write("</div>");
            })();
        }
    });
});
//# sourceMappingURL=ModalFeedbackForm.js.map
