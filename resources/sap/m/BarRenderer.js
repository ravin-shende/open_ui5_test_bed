/*!

 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','./BarInPageEnabler'],function(q,B){"use strict";var a={};a.render=B.prototype.render;a.decorateRootElement=function(r,c){r.addClass("sapMBar");r.addClass(this.getContext(c));r.writeAccessibilityState(c,{"role":c._getRootAccessibilityRole()});if(c.getTranslucent()&&(sap.ui.Device.support.touch||q.sap.simulateMobileOnDesktop)){r.addClass("sapMBarTranslucent");}r.addClass("sapMBar-CTX");};a.shouldAddIBarContext=function(){return true;};a.renderBarContent=function(r,c){var C="</div>";r.write("<div id='"+c.getId()+"-BarLeft' ");r.addClass('sapMBarLeft');r.addClass('sapMBarContainer');r.writeClasses();w("left",r,c);r.write(">");this.renderAllControls(c.getContentLeft(),r,c);r.write(C);r.write("<div id='"+c.getId()+"-BarMiddle' ");r.addClass('sapMBarMiddle');r.writeClasses();r.write(">");if(c.getEnableFlexBox()){c._oflexBox=c._oflexBox||new sap.m.HBox(c.getId()+"-BarPH",{alignItems:"Center"}).addStyleClass("sapMBarPH").setParent(c,null,true);var b=!!c.getContentLeft().length,d=!!c.getContentMiddle().length,e=!!c.getContentRight().length;if(d&&!b&&!e){c._oflexBox.addStyleClass("sapMBarFlexBoxWidth100");}c.getContentMiddle().forEach(function(m){c._oflexBox.addItem(m);});r.renderControl(c._oflexBox);}else{r.write("<div id='"+c.getId()+"-BarPH' ");r.addClass('sapMBarPH');r.addClass('sapMBarContainer');w("middle",r,c);r.writeClasses();r.write(">");this.renderAllControls(c.getContentMiddle(),r,c);r.write(C);}r.write(C);r.write("<div id='"+c.getId()+"-BarRight'");r.addClass('sapMBarRight');r.addClass('sapMBarContainer');if(sap.ui.getCore().getConfiguration().getRTL()){r.addClass("sapMRTL");}r.writeClasses();w("right",r,c);r.write(">");this.renderAllControls(c.getContentRight(),r,c);r.write(C);};a.renderAllControls=function(c,r,b){c.forEach(function(C){sap.m.BarInPageEnabler.addChildClassTo(C,b);r.renderControl(C);});};a._mContexts={Header:"sapMHeader-CTX",SubHeader:"sapMSubHeader-CTX",Footer:"sapMFooter-CTX",Default:"sapMContent-CTX"};a.getContext=function(c){var d=c.getDesign(),C=a._mContexts;return C[d]||C.Default;};function w(A,r,c){var C=!!c.getContentLeft().length,b=!!c.getContentMiddle().length,d=!!c.getContentRight().length;function e(){r.addStyle("width","100%");r.writeStyles();}switch(A.toLowerCase()){case"left":if(C&&!b&&!d){e();}break;case"middle":if(b&&!C&&!d){e();}break;case"right":if(d&&!C&&!b){e();}break;default:q.sap.log.error("Cannot determine which of the three content aggregations is alone");}}return a;},true);
