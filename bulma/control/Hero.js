"use strict";sap.ui.define(["sap/ui/core/Control"],function(e){return e.extend("portfolio.bulma.control.Hero",{metadata:{properties:{title:{type:"string"},subtitle:{type:"string"}}},renderer:function(e,t){e.write("<section "),e.writeControlData(t),e.addClass("hero"),e.addClass("is-fullheight"),e.addClass("is-primary"),e.writeClasses(),e.write(">"),e.write("<div "),e.addClass("hero-body"),e.writeClasses(),e.write(">"),e.write("<div "),e.addClass("container"),e.addClass("has-text-centered"),e.writeClasses(),e.write(">"),e.write("<h1 "),e.addClass("title"),e.writeClasses(),e.write(">"),e.writeEscaped(t.getTitle()||""),e.write("</h1>"),e.write("<h2 "),e.addClass("subtitle"),e.writeClasses(),e.write(">"),e.writeEscaped(t.getSubtitle()||""),e.write("</h2>"),e.write("</div>"),e.write("</div>"),e.write("</section>")}})});