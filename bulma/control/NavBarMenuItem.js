"use strict";sap.ui.define(["sap/ui/core/Control"],function(e){return e.extend("portfolio.bulma.control.NavBarMenuItem",{metadata:{properties:{text:{type:"string"},href:{type:"sap.ui.core.URI"}},aggregations:{items:{type:"portfolio.bulma.control.NavBarMenuItem",multiple:!0}},defaultAggregation:"items"},renderer:function(e,t){t.getItems()&&t.getItems().length?(e.write("<div "),e.writeControlData(t),e.addClass("navbar-item"),e.addClass("has-dropdown"),e.addClass("is-hoverable"),e.writeClasses(),e.write(">"),e.write("<a "),e.addClass("navbar-link"),e.writeAttributeEscaped("href",t.getHref()),e.writeClasses(),e.write(">"),e.writeEscaped(t.getText()||""),e.write("</a>"),e.write("<div "),e.addClass("navbar-dropdown"),e.writeClasses(),e.write(">"),e.writeEscaped(t.getItems().forEach(function(t){return void e.renderControl(t)})||""),e.write("</div>"),e.write("</div>")):(e.write("<a "),e.writeControlData(t),e.addClass("navbar-item"),e.writeAttributeEscaped("href",t.getHref()),e.writeClasses(),e.write(">"),e.writeEscaped(t.getText()||""),e.write("</a>"))}})});