"use strict";

sap.ui.define(["sap/ui/core/Control"], function (Control) {

    return Control.extend("portfolio.bulma.control.ContactPanel", {
        metadata: {
            properties: {
                address: {
                    type: "string"
                },
                addressLabel: {
                    type: "string"
                },
                email: {
                    type: "string"
                },
                emailLabel: {
                    type: "string"
                },
                phone: {
                    type: "string"
                },
                phoneLabel: {
                    type: "string"
                },
                accountsLabel: {
                    type: "string"
                }
            },
            aggregations: {
                accounts: {
                    type: "portfolio.bulma.control.Link",
                    multiple: true
                }
            },
            defaultAggregation: "accounts"
        },

        renderer: function renderer(oRm, oC) {
            (function () {
                oRm.write("<div ");
                oRm.writeControlData(oC);
                oRm.addClass("container");
                oRm.addClass("is-fluid");
                oRm.addClass("contact-container");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<div ");
                oRm.addClass("contact-row");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<div ");
                oRm.addClass("contact-cel");
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped((oC.getAddressLabel()) || "");
                oRm.writeEscaped(":");
                oRm.write("</div>");
                oRm.write("<div ");
                oRm.addClass("contact-cell-dummy");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("</div>");
                oRm.write("<div ");
                oRm.addClass("contact-cel");
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped((oC.getAddress()) || "");
                oRm.write("</div>");
                oRm.write("</div>");
                oRm.write("<div ");
                oRm.addClass("contact-row");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<div ");
                oRm.addClass("contact-cel");
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped((oC.getEmailLabel()) || "");
                oRm.writeEscaped(":");
                oRm.write("</div>");
                oRm.write("<div ");
                oRm.addClass("contact-cell-dummy");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("</div>");
                oRm.write("<div ");
                oRm.addClass("contact-cel");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<a ");
                oRm.writeAttributeEscaped("href", "mailto:" + oC.getEmail());
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped((oC.getEmail()) || "");
                oRm.write("</a>");
                oRm.write("</div>");
                oRm.write("</div>");
                oRm.write("<div ");
                oRm.addClass("contact-row");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<div ");
                oRm.addClass("contact-cel");
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped((oC.getPhoneLabel()) || "");
                oRm.writeEscaped(":");
                oRm.write("</div>");
                oRm.write("<div ");
                oRm.addClass("contact-cell-dummy");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("</div>");
                oRm.write("<div ");
                oRm.addClass("contact-cel");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<a ");
                oRm.writeAttributeEscaped("href", "tel:" + oC.getPhone());
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped((oC.getPhone()) || "");
                oRm.write("</a>");
                oRm.write("</div>");
                oRm.write("</div>");
                oRm.write("<div ");
                oRm.addClass("contact-row");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<div ");
                oRm.addClass("contact-cel");
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped((oC.getAccountsLabel()) || "");
                oRm.writeEscaped(":");
                oRm.write("</div>");
                oRm.write("<div ");
                oRm.addClass("contact-cell-dummy");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("</div>");
                oRm.write("<div ");
                oRm.addClass("contact-cel");
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped(((oC.getAccounts() || []).forEach(function (oL, i) {
                    return (function () {
                        oRm.write("<span ");
                        oRm.writeClasses();
                        oRm.write(">");
                        oRm.writeEscaped((i !== 0 ? ", " : " ") || "");
                        oRm.renderControl(oL);
                        oRm.write("</span>");
                    })();
                })) || "");
                oRm.write("</div>");
                oRm.write("</div>");
                oRm.write("</div>");
            })();
        }
    });
});
//# sourceMappingURL=ContactPanel.js.map
