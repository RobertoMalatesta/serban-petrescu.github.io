"use strict";

sap.ui.define(["sap/ui/core/Control"], function (Control) {

    return Control.extend("portfolio.bulma.control.SkillTable", {
        metadata: {
            properties: {
                skillHeader: { type: "string" },
                levelHeader: { type: "string" }
            },
            aggregations: {
                skills: {
                    type: "sap.ui.core.Item",
                    multiple: true
                }
            },
            defaultAggregation: "skills"
        },

        renderer: function renderer(oRm, oC) {
            (function () {
                oRm.write("<table ");
                oRm.addClass("table");
                oRm.addClass("is-striped");
                oRm.writeControlData(oC);
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<thead ");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<tr ");
                oRm.writeClasses();
                oRm.write(">");
                oRm.write("<th ");
                oRm.writeAttribute("style", "width: 50%");
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped((oC.getSkillHeader()) || "");
                oRm.write("</th>");
                oRm.write("<th ");
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped((oC.getLevelHeader()) || "");
                oRm.write("</th>");
                oRm.write("</tr>");
                oRm.write("</thead>");
                oRm.write("<tbody ");
                oRm.writeClasses();
                oRm.write(">");
                oRm.writeEscaped(((oC.getSkills() || []).forEach(function (s) {
                    return (function () {
                        oRm.write("<tr ");
                        oRm.writeClasses();
                        oRm.write(">");
                        oRm.write("<td ");
                        oRm.writeClasses();
                        oRm.write(">");
                        oRm.writeEscaped((s.getKey()) || "");
                        oRm.write("</td>");
                        oRm.write("<td ");
                        oRm.writeClasses();
                        oRm.write(">");
                        oRm.writeEscaped((s.getText()) || "");
                        oRm.write("</td>");
                        oRm.write("</tr>");
                    })();
                })) || "");
                oRm.write("</tbody>");
                oRm.write("</table>");
            })();
        }
    });
});
//# sourceMappingURL=SkillTable.js.map
