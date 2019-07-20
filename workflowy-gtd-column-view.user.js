// ==UserScript==
// @name         Workflowy GTD Column View
// @namespace    https://github.com/GHXXST
// @version      0.1
// @description  A GTD-style homepage for viewing multiple Workflowy windows in one place.
// @author       GHXXST
// @grant        none
// @match        *workflowy.com
// @noframes
// ==/UserScript==

(function() {
    'use strict';

document.writeln("<!DOCTYPE html>");
document.writeln("<html>");
document.writeln("<head>");
document.writeln("  <title>Workflowy GTD</title>");
document.writeln("  <style type=\"text/css\">");
document.writeln("    iframe {");
document.writeln("      border: 0;");
document.writeln("      border-left:solid #ebebeb 1px;");
document.writeln("      height: 100vh;");
document.writeln("    }");
document.writeln("  </style>");
document.writeln("</head>");
document.writeln("<body>");
document.writeln("  <table style=\"height: 100%; width: 100%;\">");
document.writeln("    <tbody>");
document.writeln("      <tr style=\"height: 100%;\">");
document.writeln("        <td style=\"height: 100%;\">");
document.writeln("          <iframe id=\"frame\"");
document.writeln("                  src=\"https://workflowy.com/#/f1afe5880dc3\"");  // Node URL for 1st column
document.writeln("                  width=\"100%\"");
document.writeln("                  frameborder=\"0\"");
document.writeln("                  hspace=\"0\"");
document.writeln("                  vspace=\"0\"");
document.writeln("                  marginheight=\"0\"");
document.writeln("                  marginwidth=\"0\"");
document.writeln("                  height=\"100%\">");
document.writeln("           </iframe>");
document.writeln("         </td>");
document.writeln("        <td style=\"height: 100%;\">");
document.writeln("          <iframe id=\"frame\"");
document.writeln("                  src=\"https://workflowy.com/#/8e13cb705e66\"");  // Node URL for 2nd column
document.writeln("                  width=\"100%\"");
document.writeln("                  frameborder=\"0\"");
document.writeln("                  hspace=\"0\"");
document.writeln("                  vspace=\"0\"");
document.writeln("                  marginheight=\"0\"");
document.writeln("                  marginwidth=\"0\"");
document.writeln("                  height=\"100%\">");
document.writeln("           </iframe>");
document.writeln("         </td>");
document.writeln("        <td style=\"height: 100%;\">");
document.writeln("          <iframe id=\"frame\"");
document.writeln("                  src=\"https://workflowy.com/#/8670d7e3bd4e\"");  // Node URL for 3rd column
document.writeln("                  width=\"100%\"");
document.writeln("                  frameborder=\"0\"");
document.writeln("                  hspace=\"0\"");
document.writeln("                  vspace=\"0\"");
document.writeln("                  marginheight=\"0\"");
document.writeln("                  marginwidth=\"0\"");
document.writeln("                  height=\"100%\">");
document.writeln("           </iframe>");
document.writeln("         </td>");
document.writeln("        <td style=\"height: 100%;\">");
document.writeln("          <iframe id=\"frame\"");
document.writeln("                  src=\"https://workflowy.com/#/7a5d018bad51\"");  // Node URL for 4th column
document.writeln("                  width=\"100%\"");
document.writeln("                  frameborder=\"0\"");
document.writeln("                  hspace=\"0\"");
document.writeln("                  vspace=\"0\"");
document.writeln("                  marginheight=\"0\"");
document.writeln("                  marginwidth=\"0\"");
document.writeln("                  height=\"100%\">");
document.writeln("           </iframe>");
document.writeln("         </td>");
document.writeln("        <td style=\"height: 100%;\">");
document.writeln("          <iframe id=\"frame\"");
document.writeln("                  src=\"https://workflowy.com/#/df3ab089a267\"");  // Node URL for 5th column
document.writeln("                  width=\"100%\"");
document.writeln("                  frameborder=\"0\"");
document.writeln("                  hspace=\"0\"");
document.writeln("                  vspace=\"0\"");
document.writeln("                  marginheight=\"0\"");
document.writeln("                  marginwidth=\"0\"");
document.writeln("                  height=\"100%\">");
document.writeln("           </iframe>");
document.writeln("         </td>");
document.writeln("        <td style=\"height: 100%;\">");
document.writeln("          <iframe id=\"frame\"");
document.writeln("                  src=\"https://workflowy.com/#/d95c5285b45c\"");  // Node URL for projects column
document.writeln("                  width=\"100%\"");
document.writeln("                  frameborder=\"0\"");
document.writeln("                  hspace=\"0\"");
document.writeln("                  vspace=\"0\"");
document.writeln("                  marginheight=\"0\"");
document.writeln("                  marginwidth=\"0\"");
document.writeln("                  height=\"100%\">");
document.writeln("           </iframe>");
document.writeln("         </td>");
document.writeln("      </tr>");
document.writeln("    </tbody>");
document.writeln("  </table>");
document.writeln("</body>");
document.writeln("</html>");

})();
