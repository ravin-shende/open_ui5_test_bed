/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','./TextField','./library','sap/ui/core/IconPool','sap/ui/core/theming/Parameters'],function(q,T,l,I,P){"use strict";var V=T.extend("sap.ui.commons.ValueHelpField",{metadata:{library:"sap.ui.commons",properties:{iconURL:{type:"sap.ui.core.URI",group:"Appearance",defaultValue:null},iconHoverURL:{type:"sap.ui.core.URI",group:"Appearance",defaultValue:null},iconDisabledURL:{type:"sap.ui.core.URI",group:"Appearance",defaultValue:null}},events:{valueHelpRequest:{}}}});V.prototype.onBeforeRendering=function(){this.sIconDsblUrl="sap-icon://value-help";this.sIconRegularUrl="sap-icon://value-help";this.sIconHoverUrl="sap-icon://value-help";};V.prototype.onmouseover=function(e){if(e.target.id==this.getId()+'-icon'&&this.getEnabled()&&this.getEditable()&&!this.bIsIconURI){if(this.getIconHoverURL()){this.sIconHoverUrl=this.getIconHoverURL();}else if(this.getIconURL()){this.sIconHoverUrl=this.sIconRegularUrl;}else{this.sIconHoverUrl="sap-icon://value-help";}var i=q.sap.byId(e.target.id);i.attr('src',this.sIconHoverUrl);}};V.prototype.onmouseout=function(e){if(e.target.id==this.getId()+'-icon'&&this.getEnabled()&&this.getEditable()&&!this.bIsIconURI){var i=q.sap.byId(e.target.id);i.attr('src',this.sIconRegularUrl);}};V.prototype.onclick=function(e){if(e.target.id==this.getId()+'-icon'&&this.getEnabled()&&this.getEditable()){this.fireValueHelpRequest({});}};V.prototype.setEnabled=function(e){var o=this.getEnabled();T.prototype.setEnabled.apply(this,arguments);if(this.getDomRef()&&o!=e&&!this.bIsIconURI){var i=this.$("icon");if(e){i.attr('src',this.sIconRegularUrl);i.removeClass('sapUiTfValueHelpDsblIcon');i.addClass('sapUiTfValueHelpRegularIcon');}else{i.attr('src',this.sIconRegularUrl);i.removeClass('sapUiTfValueHelpRegularIcon');i.addClass('sapUiTfValueHelpDsblIcon');}}};V.prototype.setEditable=function(e){var o=this.getEditable();T.prototype.setEditable.apply(this,arguments);if(this.getDomRef()&&o!=e&&!this.bIsIconURI){var i=this.$("icon");if(e){i.removeClass('sapUiTfValueHelpDsblIcon');i.addClass('sapUiTfValueHelpRegularIcon');}else{i.removeClass('sapUiTfValueHelpRegularIcon');i.addClass('sapUiTfValueHelpDsblIcon');}}};V.prototype.onsapshow=function(e){this._checkChange(e);this.fireValueHelpRequest({});e.preventDefault();e.stopPropagation();};V.prototype.getTooltip_AsString=function(){var t=T.prototype.getTooltip_AsString.apply(this,arguments);if(this.getEnabled()&&this.getEditable()){var r=sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons");var s=r.getText("VHF_TOOLTIP");return(t?t+" - ":"")+s;}else{return t;}};V.prototype.onThemeChanged=function(e){if(this.getDomRef()){this.invalidate();}};V.prototype.exit=function(){this.sIconRegularUrl=undefined;this.sIconHoverUrl=undefined;this.sIconDsblUrl=undefined;};return V;},true);