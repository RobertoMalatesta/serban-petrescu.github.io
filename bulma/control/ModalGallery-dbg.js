"use strict";

sap.ui.define(["sap/ui/core/Control", "sap/ui/Device"], function (Control, Device) {

    return Control.extend("portfolio.bulma.control.ModalGallery", {
        metadata: {
            properties: {
                title: {
                    type: "string"
                },
                previousButtonText: {
                    type: "string"
                },
                nextButtonText: {
                    type: "string"
                },
                open: {
                    type: "boolean",
                    defaultValue: false
                },
                activeItem: {
                    type: "int",
                    defaultValue: 0
                }
            },
            aggregations: {
                items: {
                    type: "portfolio.bulma.control.GalleryItem",
                    multiple: true
                }
            },
            defaultAggregation: "items"
        },

        onAfterRendering: function onAfterRendering() {
            var _this = this;

            var sPress = Device.support.touch ? "tap" : "click";
            this.$().find(".delete").on(sPress, function () {
                return _this.close();
            });
            this.$().find(".pagination-previous, .gallery-item-left").on(sPress, function () {
                return _this.setActiveItem(_this.getActiveItem() - 1);
            });
            this.$().find(".pagination-next, .gallery-item-right").on(sPress, function () {
                return _this.setActiveItem(_this.getActiveItem() + 1);
            });
            this.$().find(".pagination-link").on(sPress, function (oEvent) {
                _this.setActiveItem(parseInt(oEvent.target.getAttribute("data-index"), 10));
            });
            this.$().find(".gallery-item").on("swipeleft", function () {
                return _this.setActiveItem(_this.getActiveItem() + 1);
            });
            this.$().find(".gallery-item").on("swiperight", function () {
                return _this.setActiveItem(_this.getActiveItem() - 1);
            });
        },

        setActiveItem: function setActiveItem(iItem) {
            if (iItem < 0) {
                this.setProperty("activeItem", 0);
            } else if (this.getItems() && this.getItems().length <= iItem) {
                this.setProperty("activeItem", this.getItems().length - 1);
            } else {
                this.setProperty("activeItem", iItem);
            }
        },

        open: function open() {
            this.setActiveItem(0);
            this.setOpen(true);
        },

        close: function close() {
            this.setOpen(false);
        },

        renderer: function renderer(oRm, oC) {
            var fnPrevDisabled = function fnPrevDisabled() {
                return oC.getActiveItem() === 0 ? { disabled: "disabled" } : {};
            };
            var fnNextDisabled = function fnNextDisabled() {
                return oC.getActiveItem() === oC.getItems().length - 1 ? { disabled: "disabled" } : {};
            };
            var oActiveItem = oC.getItems() ? oC.getItems()[oC.getActiveItem()] : undefined;

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
                oRm.addClass("gallery-card");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<header ");
                oRm.addClass("modal-card-head");
                oRm.addClass("is-hidden-mobile");
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
                oRm.writeEscaped((oActiveItem && (function () {
                    oRm.write("<section ");
                    oRm.addClass("modal-card-body");
                    oRm.addClass("gallery-item");

                    (function (mS) {
                        var mStyles = mS || {};

                        if (mStyles instanceof Array) {
                            for (var i = 0; i < mStyles.length; ++i) {
                                if (mStyles[i] && mStyles[i].name && mStyles[i].value !== null) {
                                    oRm.addStyle(mStyles[i].name, mStyles[i].value);
                                }
                            }
                        } else {
                            for (var sKey in mStyles) {
                                if (mStyles.hasOwnProperty(sKey) && mStyles[sKey] !== null) {
                                    oRm.addStyle(sKey, mStyles[sKey]);
                                }
                            }
                        }

                        oRm.writeStyles();
                    })({
                        "background-image": "url(" + oActiveItem.getSrc() + ")"
                    });

                    oRm.writeClasses();
                    oRm.write(">");
                    oRm.write("<button ");
                    oRm.addClass("delete");
                    oRm.addClass("is-hidden-tablet");
                    oRm.addClass("gallery-item-close");
                    oRm.writeClasses();
                    oRm.write(">");
                    oRm.write("</button>");
                    oRm.write("</section>");
                })()) || "");
                oRm.writeEscaped((oActiveItem && (function () {
                    oRm.write("<div ");
                    oRm.addClass("notification");
                    oRm.addClass("gallery-item-description");
                    oRm.addClass("is-primary");
                    oRm.writeClasses();
                    oRm.write(">");
                    oRm.write("<a ");
                    oRm.addClass("is-primary");
                    oRm.addClass("is-hidden-tablet");
                    oRm.addClass("gallery-item-left");

                    (function (mS) {
                        var mStyles = mS || {};

                        if (mStyles instanceof Array) {
                            for (var i = 0; i < mStyles.length; ++i) {
                                if (mStyles[i] && mStyles[i].name && mStyles[i].value !== null) {
                                    oRm.addStyle(mStyles[i].name, mStyles[i].value);
                                }
                            }
                        } else {
                            for (var sKey in mStyles) {
                                if (mStyles.hasOwnProperty(sKey) && mStyles[sKey] !== null) {
                                    oRm.addStyle(sKey, mStyles[sKey]);
                                }
                            }
                        }

                        oRm.writeStyles();
                    })({ display: oC.getActiveItem() === 0 ? "none" : "intial" });

                    oRm.writeClasses();
                    oRm.write(">");
                    oRm.write("<span ");
                    oRm.addClass("icon");
                    oRm.writeClasses();
                    oRm.write(">");
                    oRm.write("<i ");
                    oRm.addClass("fa");
                    oRm.addClass("fa-arrow-circle-left");
                    oRm.writeClasses();
                    oRm.write(">");
                    oRm.write("</i>");
                    oRm.write("</span>");
                    oRm.write("</a>");
                    oRm.write("<div ");
                    oRm.addClass("gallery-item-text");
                    oRm.writeClasses();
                    oRm.write(">");
                    oRm.writeEscaped((oActiveItem.getText()) || "");
                    oRm.write("</div>");
                    oRm.write("<a ");
                    oRm.addClass("is-primary");
                    oRm.addClass("is-hidden-tablet");
                    oRm.addClass("gallery-item-right");

                    (function (mS) {
                        var mStyles = mS || {};

                        if (mStyles instanceof Array) {
                            for (var i = 0; i < mStyles.length; ++i) {
                                if (mStyles[i] && mStyles[i].name && mStyles[i].value !== null) {
                                    oRm.addStyle(mStyles[i].name, mStyles[i].value);
                                }
                            }
                        } else {
                            for (var sKey in mStyles) {
                                if (mStyles.hasOwnProperty(sKey) && mStyles[sKey] !== null) {
                                    oRm.addStyle(sKey, mStyles[sKey]);
                                }
                            }
                        }

                        oRm.writeStyles();
                    })({ display: oC.getActiveItem() === oC.getItems().length - 1 ? "none" : "intial" });

                    oRm.writeClasses();
                    oRm.write(">");
                    oRm.write("<span ");
                    oRm.addClass("icon");
                    oRm.writeClasses();
                    oRm.write(">");
                    oRm.write("<i ");
                    oRm.addClass("fa");
                    oRm.addClass("fa-arrow-circle-right");
                    oRm.writeClasses();
                    oRm.write(">");
                    oRm.write("</i>");
                    oRm.write("</span>");
                    oRm.write("</a>");
                    oRm.write("</div>");
                })()) || "");
                oRm.writeEscaped((oC.getItems() && oC.getItems().length > 1 && (function () {
                    oRm.write("<footer ");
                    oRm.addClass("modal-card-foot");
                    oRm.addClass("is-hidden-touch");
                    oRm.writeClasses();
                    oRm.write(">");
                    oRm.write("<nav ");
                    oRm.addClass("pagination");
                    oRm.addClass("is-centered");
                    oRm.addClass("is-fullwidth");
                    oRm.writeClasses();
                    oRm.write(">");
                    oRm.write("<a ");
                    oRm.addClass("pagination-previous");

                    (function (mA) {
                        var mAttr = mA || {};

                        for (var sKey in mAttr) {
                            if (mAttr.hasOwnProperty(sKey)) {
                                oRm.writeAttributeEscaped(sKey, mAttr[sKey]);
                            }
                        }
                    })(fnPrevDisabled());

                    oRm.writeClasses();
                    oRm.write(">");
                    oRm.writeEscaped((oC.getPreviousButtonText()) || "");
                    oRm.write("</a>");
                    oRm.write("<a ");
                    oRm.addClass("pagination-next");

                    (function (mA) {
                        var mAttr = mA || {};

                        for (var sKey in mAttr) {
                            if (mAttr.hasOwnProperty(sKey)) {
                                oRm.writeAttributeEscaped(sKey, mAttr[sKey]);
                            }
                        }
                    })(fnNextDisabled());

                    oRm.writeClasses();
                    oRm.write(">");
                    oRm.writeEscaped((oC.getNextButtonText()) || "");
                    oRm.write("</a>");
                    oRm.write("<ul ");
                    oRm.addClass("pagination-list");
                    oRm.writeClasses();
                    oRm.write(">");
                    oRm.writeEscaped((oC.getItems().forEach(function (oItem, iIndex) {
                        return (function () {
                            oRm.write("<li ");
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
                            })({
                                "pagination-link": true,
                                "is-current": iIndex === oC.getActiveItem()
                            });

                            oRm.writeAttributeEscaped("data-index", iIndex);
                            oRm.writeClasses();
                            oRm.write(">");
                            oRm.writeEscaped((iIndex + 1) || "");
                            oRm.write("</a>");
                            oRm.write("</li>");
                        })();
                    })) || "");
                    oRm.write("</ul>");
                    oRm.write("</nav>");
                    oRm.write("</footer>");
                })()) || "");
                oRm.write("</div>");
                oRm.write("</div>");
            })();
        }
    });
});
//# sourceMappingURL=ModalGallery.js.map
