(function(C,D,E,F,G,H,q,r,t,u,v,p,I,w,K,s,x,y,L,z,A,B,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,aa,ba,ca,da,ea,fa,ga,ha,ia,ja,ka,la,ma,na,oa,pa,qa,ra,sa,ta,ua,h,l){q("JV");c$=z(JV,"JmolStateCreator");q("JV");t(["JV.JmolStateCreator","java.util.Hashtable"],"JV.StateCreator","java.lang.Float java.util.Arrays $.Date JU.BS $.P3 $.PT $.SB J.c.PAL $.STR $.VDW JM.Atom $.AtomCollection $.Bond $.BondSet JS.T J.shape.Shape JU.BSUtil $.C $.ColorEncoder $.Edge $.Escape $.Font $.Logger JV.GlobalSettings $.JC $.StateManager $.Viewer".split(" "),
function(){c$=v(function(){this.temp3=this.temp2=this.temp=this.vwr=null;this.undoWorking=!1;u(this,arguments)},JV,"StateCreator",JV.JmolStateCreator);A(c$,function(){this.temp=new java.util.Hashtable;this.temp2=new java.util.Hashtable;this.temp3=new java.util.Hashtable});w(c$,function(){B(this,JV.StateCreator,[])});l(c$,"setViewer",function(a){this.vwr=a},"JV.Viewer");l(c$,"getStateScript",function(a,b,c){var d=null==a||a.equalsIgnoreCase("all"),e=new JU.SB,f=d?(new JU.SB).append("function _setState() {\n"):
null;d&&(e.append("# Jmol state version "+JV.Viewer.getJmolVersion()+";\n"),this.vwr.isApplet&&(this.app(e,"# fullName = "+JU.PT.esc(this.vwr.fullName)),this.app(e,"# documentBase = "+JU.PT.esc(JV.Viewer.appletDocumentBase)),this.app(e,"# codeBase = "+JU.PT.esc(JV.Viewer.appletCodeBase)),e.append("\n")));var g=this.vwr.g;(d||a.equalsIgnoreCase("windowState"))&&e.append(this.getWindowState(f,b,c));(d||a.equalsIgnoreCase("fileState"))&&e.append(this.getFileState(f));(d||a.equalsIgnoreCase("definedState"))&&
e.append(this.getDefinedState(f,!0));(d||a.equalsIgnoreCase("variableState"))&&e.append(this.getParameterState(g,f));(d||a.equalsIgnoreCase("dataState"))&&e.append(this.getDataState(f));(d||a.equalsIgnoreCase("modelState"))&&e.append(this.getModelState(f,!0,this.vwr.getBooleanProperty("saveProteinStructureState")));(d||a.equalsIgnoreCase("colorState"))&&e.append(this.getColorState(this.vwr.cm,f));(d||a.equalsIgnoreCase("frameState"))&&e.append(this.getAnimState(this.vwr.am,f));(d||a.equalsIgnoreCase("perspectiveState"))&&
e.append(this.getViewState(this.vwr.tm,f));(d||a.equalsIgnoreCase("selectionState"))&&e.append(this.getSelectionState(this.vwr.slm,f));null!=f&&(this.app(f,"set refreshing true"),this.app(f,"set antialiasDisplay "+g.antialiasDisplay),this.app(f,"set antialiasTranslucent "+g.antialiasTranslucent),this.app(f,"set antialiasImages "+g.antialiasImages),this.vwr.tm.spinOn&&this.app(f,"spin on"),f.append("}\n\n_setState;\n"));d&&e.appendSB(f);return e.toString()},"~S,~N,~N");h(c$,"getDataState",function(a){var b=
new JU.SB,c=!1,d=this.getAtomicPropertyState(-1,null);0<d.length&&(c=!0,b.append(d));null!=this.vwr.userVdws&&(d=this.vwr.getDefaultVdwNameOrData(0,J.c.VDW.USER,this.vwr.bsUserVdws),0<d.length&&(c=!0,b.append(d)));null!=this.vwr.nmrCalculation&&(c=(new Boolean(c|this.vwr.nmrCalculation.getState(b))).valueOf());null!=this.vwr.dm&&(c=(new Boolean(c|this.vwr.dm.getDataState(this,b))).valueOf());if(!c)return"";c="";null!=a&&(a.append("  _setDataState;\n"),c="function _setDataState() {\n",b.append("}\n\n"));
return c+b.toString()},"JU.SB");h(c$,"getDefinedState",function(a,b){var c=this.vwr.ms,d=c.stateScripts.size();if(0==d)return"";for(var e=!1,f=new JU.SB,g,k=0;k<d;k++){var n=c.stateScripts.get(k);if(n.inDefinedStateBlock&&0<(g=n.toString()).length)this.app(f,g),e=!0}if(!e)return"";g="";b&&null!=a&&(a.append("  _setDefinedState;\n"),g="function _setDefinedState() {\n\n");null!=a&&f.append("\n}\n\n");return g+f.toString()},"JU.SB,~B");l(c$,"getModelState",function(a,b,c){var d=new JU.SB;b&&null!=a&&
(a.append("  _setModelState;\n"),d.append("function _setModelState() {\n"));var e,f=this.vwr.ms,g=f.bo,k=f.am,n=f.mc;if(b){for(var m=f.stateScripts.size(),j=0;j<m;j++){var h=f.stateScripts.get(j);!h.inDefinedStateBlock&&0<(e=h.toString()).length&&this.app(d,e)}e=new JU.SB;for(j=0;j<f.bondCount;j++)if(!k[g[j].atom1.mi].isModelKit&&(g[j].isHydrogen()||0!=(g[j].order&131072)))m=g[j],h=m.atom1.i,m.atom1.group.isAdded(h)&&(h=-1-h),e.appendI(h).appendC("\t").appendI(m.atom2.i).appendC("\t").appendI(m.order&
-131073).appendC("\t").appendF(m.mad/1E3).appendC("\t").appendF(m.getEnergy()).appendC("\t").append(JU.Edge.getBondOrderNameFromOrder(m.order)).append(";\n");0<e.length()&&d.append('data "connect_atoms"\n').appendSB(e).append('end "connect_atoms";\n');d.append("\n")}if(f.haveHiddenBonds){e=new JM.BondSet;for(j=f.bondCount;0<=--j;)0!=g[j].mad&&0==(g[j].shapeVisibilityFlags&JM.Bond.myVisibilityFlag)&&e.set(j);e.isEmpty()?f.haveHiddenBonds=!1:d.append("  hide ").append(JU.Escape.eBond(e)).append(";\n")}this.vwr.setModelVisibility();
c&&d.append(f.getProteinStructureState(null,b?1073742327:1073742158));for(j=0;j<n;j++)null!=k[j].mat4&&d.append("  frame orientation "+f.getModelNumberDotted(j)+JU.Escape.matrixToScript(k[j].mat4)+";\n");this.getShapeStatePriv(d,b,2147483647);if(b){c=!1;for(j=0;j<n;j++)if(k[j].isJmolDataFrame){c=!0;break}e=new JU.SB;for(j=0;j<n;j++)g=k[j],e.setLength(0),m=f.getInfo(j,"modelID"),null!=m&&!m.equals(f.getInfo(j,"modelID0"))&&e.append("  frame ID ").append(JU.PT.esc(m)).append(";\n"),m=f.frameTitles[j],
null!=m&&0<m.length&&e.append("  frame title ").append(JU.PT.esc(m)).append(";\n"),c&&(null!=g.orientation&&!f.isTrajectorySubFrame(j))&&e.append("  ").append(g.orientation.getMoveToText(!1)).append(";\n"),0!=g.frameDelay&&!f.isTrajectorySubFrame(j)&&e.append("  frame delay ").appendF(g.frameDelay/1E3).append(";\n"),null!=g.simpleCage&&(e.append("  unitcell ").append(JU.Escape.eAP(g.simpleCage.getUnitCellVectors())).append(";\n"),this.getShapeStatePriv(e,b,33)),0<e.length()&&d.append("  frame "+f.getModelNumberDotted(j)+
";\n").appendSB(e);c=!1;if(null!=f.unitCells){g=!1;for(j=0;j<n;j++)m=f.getUnitCell(j),null!=m&&(e.setLength(0),m.getState(e)&&(c=!0,d.append("  frame ").append(f.getModelNumberDotted(j)).appendSB(e).append(";\n")),g=(new Boolean(g|0<=this.vwr.ms.getLastVibrationVector(j,1275072532))).valueOf());c&&this.vwr.shm.loadShape(33);this.getShapeStatePriv(d,b,33);if(g){b=new java.util.Hashtable;for(j=n;0<=--j;)if(0<=(n=this.vwr.ms.getLastVibrationVector(j,1275072532)))for(e=k[j].firstAtomIndex;e<=n;e++)c=
f.getModulation(e),null!=c&&JU.BSUtil.setMapBitSet(b,e,e,c.getState());d.append(this.getCommands(b,null,"select"))}}d.append("  set fontScaling "+this.vwr.getBoolean(603979845)+";\n")}null!=a&&d.append("\n}\n\n");return d.toString()},"JU.SB,~B,~B");h(c$,"getWindowState",function(a,b,c){var d=this.vwr.g,e=new JU.SB;null!=a&&(a.append("  initialize;\n  set refreshing false;\n  _setWindowState;\n"),e.append("\nfunction _setWindowState() {\n"));0!=b&&e.append("# preferredWidthHeight ").appendI(b).append(" ").appendI(c).append(";\n");
e.append("# width ").appendI(0==b?this.vwr.getScreenWidth():b).append(";\n# height ").appendI(0==c?this.vwr.getScreenHeight():c).append(";\n");this.app(e,"stateVersion = "+JV.JC.versionInt);this.app(e,"background "+JU.Escape.escapeColor(d.objColors[0]));for(b=1;7>b;b++)0!=d.objColors[b]&&this.app(e,JV.StateManager.getObjectNameFromId(b)+'Color = "'+JU.Escape.escapeColor(d.objColors[b])+'"');null!=d.backgroundImageFileName&&this.app(e,"background IMAGE "+(d.backgroundImageFileName.startsWith(";base64,")?
"":"/*file*/")+JU.PT.esc(d.backgroundImageFileName));e.append(this.getLightingState(!1));null!=a&&e.append("}\n\n");return e.toString()},"JU.SB,~N,~N");l(c$,"getLightingState",function(a){var b=new JU.SB,c=this.vwr.gdata;this.app(b,"set ambientPercent "+c.getAmbientPercent());this.app(b,"set diffusePercent "+c.getDiffusePercent());this.app(b,"set specular "+c.getSpecular());this.app(b,"set specularPercent "+c.getSpecularPercent());this.app(b,"set specularPower "+c.getSpecularPower());var d=c.getSpecularExponent(),
e=c.getPhongExponent();this.app(b,Math.pow(2,d)==e?"set specularExponent "+d:"set phongExponent "+e);this.app(b,"set celShading "+c.getCel());this.app(b,"set celShadingPower "+c.getCelPower());this.app(b,"set zShadePower "+this.vwr.g.zShadePower);a&&this.getZshadeState(b,this.vwr.tm,!0);return b.toString()},"~B");h(c$,"getFileState",function(a){var b=new JU.SB;null!=a&&(a.append("  _setFileState;\n"),b.append("function _setFileState() {\n\n"));0>b.indexOf("append")&&this.vwr.getModelSetFileName().equals("zapped")&&
b.append("  zap;\n");this.appendLoadStates(b);null!=a&&b.append("\n}\n\n");return b.toString()},"JU.SB");h(c$,"appendLoadStates",function(a){var b=this.vwr.ligandModelSet;if(null!=b)for(var c,b=b.keySet().iterator();b.hasNext()&&((c=b.next())||1);){var d=this.vwr.ligandModels.get(c+"_data");null!=d&&a.append("  ").append(JU.Escape.encapsulateData("ligand_"+c,d.trim()+"\n",0));d=this.vwr.ligandModels.get(c+"_file");null!=d&&a.append("  ").append(JU.Escape.encapsulateData("file_"+c,d.trim()+"\n",0))}var b=
new JU.SB,d=this.vwr.ms,e=d.am,f=d.mc;for(c=0;c<f;c++)if(!d.isJmolDataFrameForModel(c)&&!d.isTrajectorySubFrame(c)){var g=e[c],k=b.indexOf(g.loadState);(0>k||k!=b.lastIndexOf(g.loadState))&&b.append(e[c].loadState);e[c].isModelKit?(k=d.getModelAtomBitSetIncludingDeleted(c,!1),null!=d.tainted&&(null!=d.tainted[2]&&d.tainted[2].andNot(k),null!=d.tainted[3]&&d.tainted[3].andNot(k)),g.loadScript=new JU.SB,this.getInlineData(b,this.vwr.getModelExtract(k,!1,!0,"MOL"),0<c,null)):b.appendSB(g.loadScript)}b=
b.toString();if(0>b.indexOf('data "append ')){c=b.indexOf("load /*data*/");d=b.indexOf("load /*file*/");0<=d&&d<c&&(c=d);if(0<=(d=b.indexOf('load "@'))&&d<c)c=d;0<=c&&(b=b.substring(0,c)+"zap;"+b.substring(c))}a.append(b)},"JU.SB");l(c$,"getInlineData",function(a,b,c,d){c=(c?"append":"model")+" inline";a.append('load /*data*/ data "').append(c).append('"\n').append(b).append('end "').append(c).append(null==d||0==d.length?"":" filter"+JU.PT.esc(d)).append('";')},"JU.SB,~S,~B,~S");h(c$,"getColorState",
function(a,b){var c=new JU.SB,d=this.getCEState(a.ce,c);0<d&&null!=b&&b.append("\n  _setColorState\n");return 0<d&&null!=b?"function _setColorState() {\n"+c.append("}\n\n").toString():c.toString()},"JV.ColorManager,JU.SB");h(c$,"getCEState",function(a,b){for(var c=0,d,e=a.schemes.entrySet().iterator();e.hasNext()&&((d=e.next())||1);){var f=d.getKey();(new Boolean(0<f.length&0<=c++)).valueOf()&&b.append('color "'+f+"="+JU.ColorEncoder.getColorSchemeList(d.getValue())+'";\n')}return c},"JU.ColorEncoder,JU.SB");
h(c$,"getAnimState",function(a,b){var c=this.vwr.ms.mc;if(2>c)return"";var d=new JU.SB;null!=b&&(b.append("  _setFrameState;\n"),d.append("function _setFrameState() {\n"));d.append("# frame state;\n");d.append("# modelCount ").appendI(c).append(";\n# first ").append(this.vwr.getModelNumberDotted(0)).append(";\n# last ").append(this.vwr.getModelNumberDotted(c-1)).append(";\n");0<=a.backgroundModelIndex&&this.app(d,"set backgroundModel "+this.vwr.getModelNumberDotted(a.backgroundModelIndex));if(null!=
this.vwr.tm.bsFrameOffsets)this.app(d,"frame align "+JU.Escape.eBS(this.vwr.tm.bsFrameOffsets));else if(null!=this.vwr.ms.translations)for(;0<=--c;){var e=this.vwr.ms.getTranslation(c);null!=e&&this.app(d,"frame "+this.vwr.ms.getModelNumberDotted(c)+" align "+e)}this.app(d,"frame RANGE "+a.getModelSpecial(-1)+" "+a.getModelSpecial(1));this.app(d,"animation DIRECTION "+(1==a.animationDirection?"+1":"-1"));this.app(d,"animation FPS "+a.animationFps);this.app(d,"animation MODE "+JS.T.nameOf(a.animationReplayMode)+
" "+a.firstFrameDelay+" "+a.lastFrameDelay);0<a.morphCount&&this.app(d,"animation MORPH "+a.morphCount);c=!0;null!=a.animationFrames&&(this.app(d,"anim frames "+JU.Escape.eAI(a.animationFrames)),c=a.caf,this.app(d,"frame "+(c+1)),c=a.cmi!=a.modelIndexForFrame(c));c&&(c=a.getModelSpecial(0),this.app(d,c.equals("0")?"frame *":"model "+c));this.app(d,"animation "+(!a.animationOn?"OFF":1==a.currentDirection?"PLAY":"PLAYREV"));a.animationOn&&a.animationPaused&&this.app(d,"animation PAUSE");null!=b&&d.append("}\n\n");
return d.toString()},"JV.AnimationManager,JU.SB");h(c$,"getParameterState",function(a,b){var c=Array(a.htBooleanParameterFlags.size()+a.htNonbooleanParameterValues.size()),d=new JU.SB;null!=b&&(b.append("  _setParameterState;\n"),d.append("function _setParameterState() {\n\n"));for(var e=0,f,g=a.htBooleanParameterFlags.keySet().iterator();g.hasNext()&&((f=g.next())||1);)JV.GlobalSettings.doReportProperty(f)&&(c[e++]="set "+f+" "+a.htBooleanParameterFlags.get(f));for(g=a.htNonbooleanParameterValues.keySet().iterator();g.hasNext()&&
((f=g.next())||1);)if(JV.GlobalSettings.doReportProperty(f)){var k=a.htNonbooleanParameterValues.get(f);"="==f.charAt(0)?f=f.substring(1):(f=(0==f.indexOf("default")?" ":"")+"set "+f,k=JU.Escape.e(k));c[e++]=f+" "+k}switch(a.axesMode){case 603979808:c[e++]="set axes unitcell";break;case 603979804:c[e++]="set axes molecular";break;default:c[e++]="set axes window"}java.util.Arrays.sort(c,0,e);for(f=0;f<e;f++)null!=c[f]&&this.app(d,c[f]);c=JV.StateManager.getVariableList(a.htUserVariables,0,!1,!0);0<
c.length&&(d.append("\n#user-defined atom sets; \n"),d.append(c));null!=this.vwr.shm.getShape(5)&&d.append(this.getDefaultLabelState(this.vwr.shm.shapes[5]));a.haveSetStructureList&&(c=a.structureList,d.append("struture HELIX set "+JU.Escape.eAF(c.get(J.c.STR.HELIX))),d.append("struture SHEET set "+JU.Escape.eAF(c.get(J.c.STR.SHEET))),d.append("struture TURN set "+JU.Escape.eAF(c.get(J.c.STR.TURN))));null!=b&&d.append("\n}\n\n");return d.toString()},"JV.GlobalSettings,JU.SB");h(c$,"getDefaultLabelState",
function(a){var b=(new JU.SB).append("\n# label defaults;\n");this.app(b,"select none");this.app(b,J.shape.Shape.getColorCommand("label",a.defaultPaletteID,a.defaultColix,a.translucentAllowed));this.app(b,"background label "+J.shape.Shape.encodeColor(a.defaultBgcolix));this.app(b,"set labelOffset "+JV.JC.getXOffset(a.defaultOffset)+" "+JV.JC.getYOffset(a.defaultOffset));var c=JV.JC.getHorizAlignmentName(a.defaultAlignment);this.app(b,"set labelAlignment "+(5>c.length?"left":c));c=JV.JC.getPointerName(a.defaultPointer);
this.app(b,"set labelPointer "+(0==c.length?"off":c));0!=(a.defaultZPos&32)?this.app(b,"set labelFront"):0!=(a.defaultZPos&16)&&this.app(b,"set labelGroup");this.app(b,J.shape.Shape.getFontCommand("label",JU.Font.getFont3D(a.defaultFontId)));return b.toString()},"J.shape.Labels");h(c$,"getSelectionState",function(a,b){var c=new JU.SB;null!=b&&(b.append("  _setSelectionState;\n"),c.append("function _setSelectionState() {\n"));null!=this.vwr.ms.trajectory&&this.app(c,this.vwr.ms.trajectory.getState());
var d=new java.util.Hashtable,e=null;this.addBs(c,"hide ",a.bsHidden);this.addBs(c,"subset ",a.bsSubset);this.addBs(c,"delete ",a.bsDeleted);this.addBs(c,"fix ",a.bsFixed);d.put("-",this.vwr.slm.getSelectedAtomsNoSubset());e=this.getCommands(d,null,"select");null==e?this.app(c,"select none"):c.append(e);this.app(c,"set hideNotSelected "+a.hideNotSelected);c.append(this.vwr.getShapeProperty(1,"selectionState"));this.vwr.getSelectionHalosEnabled()&&this.app(c,"SelectionHalos ON");null!=b&&c.append("}\n\n");
return c.toString()},"JV.SelectionManager,JU.SB");h(c$,"getViewState",function(a,b){var c=new JU.SB,d=a.getMoveToText(0,!1);null!=b&&(b.append("  _setPerspectiveState;\n"),c.append("function _setPerspectiveState() {\n"));this.app(c,"set perspectiveModel "+a.perspectiveModel);this.app(c,"set scaleAngstromsPerInch "+a.scale3DAngstromsPerInch);this.app(c,"set perspectiveDepth "+a.perspectiveDepth);this.app(c,"set visualRange "+a.visualRangeAngstroms);a.isWindowCentered()||this.app(c,"set windowCentered false");
this.app(c,"set cameraDepth "+a.cameraDepth);var e=1==a.mode;e&&this.app(c,"set navigationMode true");this.app(c,this.vwr.ms.getBoundBoxCommand(!1));this.app(c,"center "+JU.Escape.eP(a.fixedRotationCenter));c.append(this.vwr.getOrientationText(1073742034,null,null).toString());this.app(c,d);!e&&!a.zoomEnabled&&this.app(c,"zoom off");c.append("  slab ").appendI(a.slabPercentSetting).append(";depth ").appendI(a.depthPercentSetting).append(a.slabEnabled&&!e?";slab on":"").append(";\n");c.append("  set slabRange ").appendF(a.slabRange).append(";\n");
null!=a.slabPlane&&c.append("  slab plane ").append(JU.Escape.eP4(a.slabPlane)).append(";\n");null!=a.depthPlane&&c.append("  depth plane ").append(JU.Escape.eP4(a.depthPlane)).append(";\n");this.getZshadeState(c,a,!1);c.append(this.getSpinState(!0)).append("\n");this.vwr.ms.modelSetHasVibrationVectors()&&a.vibrationOn&&this.app(c,"set vibrationPeriod "+a.vibrationPeriod+";vibration on");d=null!=a.depthPlane||null!=a.slabPlane;e&&c.append(a.getNavigationState());!a.slabEnabled&&d&&c.append("  slab off;\n");
null!=b&&c.append("}\n\n");return c.toString()},"JV.TransformManager,JU.SB");h(c$,"getZshadeState",function(a,b,c){c&&(this.app(a,"set zDepth "+b.zDepthPercentSetting),this.app(a,"set zSlab "+b.zSlabPercentSetting),b.zShadeEnabled||this.app(a,"set zShade false"));b.zShadeEnabled&&this.app(a,"set zShade true");try{null!=b.zSlabPoint&&this.app(a,"set zSlab "+JU.Escape.eP(b.zSlabPoint))}catch(d){if(!s(d,Exception))throw d;}},"JU.SB,JV.TransformManager,~B");l(c$,"getSpinState",function(){var a=this.vwr.tm,
b="  set spinX "+p(a.spinX)+"; set spinY "+p(a.spinY)+"; set spinZ "+p(a.spinZ)+"; set spinFps "+p(a.spinFps)+";";Float.isNaN(a.navFps)||(b+="  set navX "+p(a.navX)+"; set navY "+p(a.navY)+"; set navZ "+p(a.navZ)+"; set navFps "+p(a.navFps)+";");a.navOn&&(b+=" navigation on;");if(!a.spinOn)return b;var c=a.isSpinSelected?"\n  select "+JU.Escape.eBS(this.vwr.bsA())+";\n  rotateSelected":"\n ";if(a.isSpinInternal){var d=JU.P3.newP(a.internalRotationCenter);d.sub(a.rotationAxis);b+=c+" spin "+a.rotationRate+
" "+JU.Escape.eP(a.internalRotationCenter)+" "+JU.Escape.eP(d)}else b=a.isSpinFixed?b+(c+" spin axisangle "+JU.Escape.eP(a.rotationAxis)+" "+a.rotationRate):b+" spin on";return b+";"},"~B");l(c$,"getCommands",function(a,b,c){var d=new JU.SB;a=this.getCommands2(a,d,null,c);null!=b&&this.getCommands2(b,d,a,"select");return d.toString()},"java.util.Map,java.util.Map,~S");h(c$,"getCommands2",function(a,b,c,d){if(null==a)return"";var e;for(a=a.entrySet().iterator();a.hasNext()&&((e=a.next())||1);){var f=
e.getKey(),g=JU.Escape.eBS(e.getValue());5>g.length||(g=d+" "+g,g.equals(c)||this.app(b,g),c=g,0!=f.indexOf("-")&&this.app(b,f))}return c},"java.util.Map,JU.SB,~S,~S");h(c$,"app",function(a,b){0!=b.length&&a.append("  ").append(b).append(";\n")},"JU.SB,~S");h(c$,"addBs",function(a,b,c){null==c||0==c.length()||this.app(a,b+JU.Escape.eBS(c))},"JU.SB,~S,JU.BS");h(c$,"getFontState",function(a,b){var c=JV.StateManager.getObjectIdFromName(a.equalsIgnoreCase("axes")?"axis":a);if(0>c)return"";var d=this.vwr.getObjectMad10(c),
c=(new JU.SB).append("\n");this.app(c,a+(0==d?" off":1==d?" on":-1==d?" dotted":20>d?" "+d:" "+d/2E4));if(3>c.length())return"";d=J.shape.Shape.getFontCommand(a,b);0<d.length&&(d="  "+d+";\n");return c+d},"~S,JU.Font");h(c$,"appendTickInfo",function(a,b,c){b.append("  ");b.append(a);JV.StateCreator.addTickInfo(b,c,!1);b.append(";\n")},"~S,JU.SB,JM.TickInfo");c$.addTickInfo=h(c$,"addTickInfo",function(a,b,c){a.append(" ticks ").append(b.type).append(" ").append(JU.Escape.eP(b.ticks));var d=null!=b.scale&&
Float.isNaN(b.scale.x);d&&a.append(" UNITCELL");null!=b.tickLabelFormats&&a.append(" format ").append(JU.Escape.eAS(b.tickLabelFormats,!1));!d&&null!=b.scale&&a.append(" scale ").append(JU.Escape.eP(b.scale));c&&(!Float.isNaN(b.first)&&0!=b.first)&&a.append(" first ").appendF(b.first);null!=b.reference&&a.append(" point ").append(JU.Escape.eP(b.reference))},"JU.SB,JM.TickInfo,~B");h(c$,"getMeasurementState",function(a){var b=a.measurements,c=a.measurementCount,d=a.font3d,e=a.defaultTickInfo,f=new JU.SB;
this.app(f,"measures delete");for(var g=0;g<c;g++){var k=b.get(g),n=k.count,h=(new JU.SB).append("measure");null!=k.thisID&&h.append(" ID ").append(JU.PT.esc(k.thisID));0!=k.mad&&h.append(" radius ").appendF(null==k.thisID||0<k.mad?k.mad/2E3:0);0!=k.colix&&h.append(" color ").append(JU.Escape.escapeColor(JU.C.getArgb(k.colix)));null!=k.text&&(null!=k.text.font&&h.append(" font ").append(k.text.font.getInfo()),0!=k.text.align&&h.append(" align ").append(JV.JC.getHorizAlignmentName(k.text.align)),null!=
k.text.pymolOffset&&h.append(" offset ").append(JU.Escape.eAF(k.text.pymolOffset)));var j=k.tickInfo;null!=j&&JV.StateCreator.addTickInfo(h,j,!0);for(j=1;j<=n;j++)h.append(" ").append(k.getLabel(j,!0,!0));h.append("; # "+a.getInfoAsString(g));this.app(f,h.toString())}this.app(f,"select *; set measures "+this.vwr.g.measureDistanceUnits);this.app(f,J.shape.Shape.getFontCommand("measures",d));d=0;n=new java.util.Hashtable;h=JU.BS.newN(c);for(g=0;g<c;g++)k=b.get(g),k.isHidden&&(d++,h.set(g)),null!=a.bsColixSet&&
a.bsColixSet.get(g)&&JU.BSUtil.setMapBitSet(n,g,g,J.shape.Shape.getColorCommandUnk("measure",k.colix,a.translucentAllowed)),null!=k.strFormat&&JU.BSUtil.setMapBitSet(n,g,g,"measure "+JU.PT.esc(k.strFormat));if(0<d)if(d==c)this.app(f,"measures off; # lines and numbers off");else for(g=0;g<c;g++)h.get(g)&&JU.BSUtil.setMapBitSet(n,g,g,"measure off");null!=e&&(f.append(" measure "),JV.StateCreator.addTickInfo(f,e,!0),f.append(";\n"));0<=a.mad&&f.append(" set measurements ").appendF(a.mad/2E3).append(";\n");
a=this.getCommands(n,null,"select measures");null!=a&&0!=a.length&&(f.append(a),this.app(f,"select measures ({null})"));return f.toString()},"J.shape.Measures");h(c$,"getShapeStatePriv",function(a,b,c){var d=this.vwr.shm.shapes;if(null!=d){var e;2147483647==c?(c=0,e=37):e=c+1;for(;c<e;++c){var f=d[c];if(null!=f&&(b||9<=c&&16>c))f=this.getShapeState(f),null!=f&&1<f.length&&a.append(f)}a.append("  select *;\n")}},"JU.SB,~B,~N");h(c$,"getBondState",function(a){var b=a.bsOrderSet,c=a.reportAll;this.clearTemp();
var d=this.vwr.ms,e=d.bo,f=d.bondCount,g;if(c||null!=a.bsSizeSet)for(d=c?f-1:a.bsSizeSet.nextSetBit(0);0<=d;d=c?d-1:a.bsSizeSet.nextSetBit(d+1))JU.BSUtil.setMapBitSet(this.temp,d,d,"wireframe "+(1==(g=e[d].mad)?"on":""+JU.PT.escF(g/2E3)));if(c||null!=b)for(d=c?f-1:b.nextSetBit(0);0<=d;d=c?d-1:b.nextSetBit(d+1))g=e[d],(c||0==(g.order&131072))&&JU.BSUtil.setMapBitSet(this.temp,d,d,"bondOrder "+JU.Edge.getBondOrderNameFromOrder(g.order));if(null!=a.bsColixSet)for(d=a.bsColixSet.nextSetBit(0);0<=d;d=
a.bsColixSet.nextSetBit(d+1))b=e[d].colix,2==(b&-30721)?JU.BSUtil.setMapBitSet(this.temp,d,d,J.shape.Shape.getColorCommand("bonds",J.c.PAL.CPK.id,b,a.translucentAllowed)):JU.BSUtil.setMapBitSet(this.temp,d,d,J.shape.Shape.getColorCommandUnk("bonds",b,a.translucentAllowed));a=this.getCommands(this.temp,null,"select BONDS")+"\n";this.clearTemp();return a},"J.shape.Sticks");h(c$,"clearTemp",function(){this.temp.clear();this.temp2.clear()});h(c$,"getShapeState",function(a){var b;switch(a.shapeID){case 34:b=
this.getAxesState(a);break;case 33:if(!this.vwr.ms.haveUnitCells)return"";a=b=this.getFontLineShapeState(a);var c=this.vwr.am.cai;0<=c&&(b+="  unitcell ({"+c+"});\n");c=this.vwr.getCurrentUnitCell();null!=c&&(b+=c.getUnitCellState(),b+=a);break;case 32:b=this.getFontLineShapeState(a);break;case 36:b=this.getFontState(a.myType,a.baseFont3d);break;case 6:b=this.getMeasurementState(a);break;case 7:case 18:b=this.getAtomShapeState(a);break;case 1:b=this.getBondState(a);break;case 31:b=new JU.SB;b.append("\n  set echo off;\n");
for(a=a.objects.values().iterator();a.hasNext()&&((c=a.next())||1);)b.append(this.getTextState(c)),c.hidden&&b.append("  set echo ID ").append(JU.PT.esc(c.target)).append(" hidden;\n");b=b.toString();break;case 8:b=this.getAtomShapeState(a)+(2==a.colixSelection?"":0==a.colixSelection?"  color SelectionHalos NONE;\n":J.shape.Shape.getColorCommandUnk("selectionHalos",a.colixSelection,a.translucentAllowed)+";\n");null!=a.bsHighlight&&(b+="  set highlight "+JU.Escape.eBS(a.bsHighlight)+"; "+J.shape.Shape.getColorCommandUnk("highlight",
a.colixHighlight,a.translucentAllowed)+";\n");break;case 35:this.clearTemp();if(null!=a.atomFormats)for(b=this.vwr.ms.ac;0<=--b;)null!=a.atomFormats[b]&&JU.BSUtil.setMapBitSet(this.temp,b,b,"set hoverLabel "+JU.PT.esc(a.atomFormats[b]));b="\n  hover "+JU.PT.esc(null==a.labelFormat?"":a.labelFormat)+";\n"+this.getCommands(this.temp,null,"select");this.clearTemp();break;case 5:if(!a.isActive||null==a.bsSizeSet)return"";this.clearTemp();for(b=a.bsSizeSet.nextSetBit(0);0<=b;b=a.bsSizeSet.nextSetBit(b+
1)){var c=a.getLabel(b),d="label ";null==c?d+=JU.PT.esc(a.formats[b]):(d+=JU.PT.esc(c.textUnformatted),null!=c.pymolOffset&&(d+=";set labelOffset "+JU.Escape.eAF(c.pymolOffset)));JU.BSUtil.setMapBitSet(this.temp,b,b,d);null!=a.bsColixSet&&a.bsColixSet.get(b)&&JU.BSUtil.setMapBitSet(this.temp2,b,b,J.shape.Shape.getColorCommand("label",a.paletteIDs[b],a.colixes[b],a.translucentAllowed));null!=a.bsBgColixSet&&a.bsBgColixSet.get(b)&&JU.BSUtil.setMapBitSet(this.temp2,b,b,"background label "+J.shape.Shape.encodeColor(a.bgcolixes[b]));
c=a.getLabel(b);c=null!=c?c.scalePixelsPerMicron:0;0<c&&JU.BSUtil.setMapBitSet(this.temp2,b,b,"set labelScaleReference "+1E4/c);if(null!=a.offsets&&a.offsets.length>b){c=a.offsets[b];JU.BSUtil.setMapBitSet(this.temp2,b,b,"set "+(JV.JC.isOffsetAbsolute(c)?"labelOffsetAbsolute ":"labelOffset ")+JV.JC.getXOffset(c)+" "+JV.JC.getYOffset(c));var d=JV.JC.getHorizAlignmentName(c>>2),e=JV.JC.getPointerName(c);0<e.length&&JU.BSUtil.setMapBitSet(this.temp2,b,b,"set labelPointer "+e);0!=(c&32)?JU.BSUtil.setMapBitSet(this.temp2,
b,b,"set labelFront"):0!=(c&16)&&JU.BSUtil.setMapBitSet(this.temp2,b,b,"set labelGroup");0<d.length&&JU.BSUtil.setMapBitSet(this.temp3,b,b,"set labelAlignment "+d)}null!=a.mads&&0>a.mads[b]&&JU.BSUtil.setMapBitSet(this.temp2,b,b,"set toggleLabel");null!=a.bsFontSet&&a.bsFontSet.get(b)&&JU.BSUtil.setMapBitSet(this.temp2,b,b,J.shape.Shape.getFontCommand("label",JU.Font.getFont3D(a.fids[b])))}b=this.getCommands(this.temp,this.temp2,"select")+this.getCommands(null,this.temp3,"select");this.temp3.clear();
this.clearTemp();break;case 0:this.clearTemp();var c=this.vwr.ms.ac,d=this.vwr.ms.at,e=a.colixes,f=a.paletteIDs,g=0;for(b=0;b<c;b++)if(null!=a.bsSizeSet&&a.bsSizeSet.get(b)&&(0>(g=d[b].madAtom)?JU.BSUtil.setMapBitSet(this.temp,b,b,"Spacefill on"):JU.BSUtil.setMapBitSet(this.temp,b,b,"Spacefill "+JU.PT.escF(g/2E3))),null!=a.bsColixSet&&a.bsColixSet.get(b)){var k=d[b].paletteID;(k!=J.c.PAL.CPK.id||JU.C.isColixTranslucent(d[b].colixAtom))&&JU.BSUtil.setMapBitSet(this.temp,b,b,J.shape.Shape.getColorCommand("atoms",
k,d[b].colixAtom,a.translucentAllowed));null!=e&&b<e.length&&JU.BSUtil.setMapBitSet(this.temp2,b,b,J.shape.Shape.getColorCommand("balls",f[b],e[b],a.translucentAllowed))}b=this.getCommands(this.temp,this.temp2,"select");this.clearTemp();break;default:b=a.getShapeState()}return b},"J.shape.Shape");h(c$,"getFontLineShapeState",function(a){var b=this.getFontState(a.myType,a.font3d);if(null==a.tickInfos)return b;var c=0<=b.indexOf(" off"),d=new JU.SB;d.append(b);for(b=0;4>b;b++)null!=a.tickInfos[b]&&
this.appendTickInfo(a.myType,d,a.tickInfos[b]);c&&d.append("  "+a.myType+" off;\n");return d.toString()},"J.shape.FontLineShape");h(c$,"getAxesState",function(a){var b=new JU.SB;b.append(this.getFontLineShapeState(a));b.append("  axes scale ").appendF(this.vwr.getFloat(570425346)).append(";\n");null!=a.fixedOrigin&&b.append("  axes center ").append(JU.Escape.eP(a.fixedOrigin)).append(";\n");var c=a.axisXY;0!=c.z&&b.append("  axes position [").appendI(p(c.x)).append(" ").appendI(p(c.y)).append(" ").append(0>
c.z?" %":"").append("];\n");c=a.labels;if(null!=c){b.append("  axes labels ");for(var d=0;d<c.length;d++)null!=c[d]&&b.append(JU.PT.esc(c[d])).append(" ");b.append(";\n")}null!=a.axisType&&b.append("  axes type "+JU.PT.esc(a.axisType));return b.toString()},"J.shape.Axes");l(c$,"getAtomShapeState",function(a){if(!a.isActive)return"";this.clearTemp();var b=JV.JC.shapeClassBases[a.shapeID],c=18==a.shapeID,d;if(null!=a.bsSizeSet)for(var e=a.bsSizeSet.nextSetBit(0);0<=e;e=a.bsSizeSet.nextSetBit(e+1))JU.BSUtil.setMapBitSet(this.temp,
e,e,b+" "+(0>(d=a.mads[e])?c&&-1>d?""+-d:"on":JU.PT.escF(d/2E3)));if(null!=a.bsColixSet)for(e=a.bsColixSet.nextSetBit(0);0<=e;e=a.bsColixSet.nextSetBit(e+1))JU.BSUtil.setMapBitSet(this.temp2,e,e,J.shape.Shape.getColorCommand(b,a.paletteIDs[e],a.colixes[e],a.translucentAllowed));a=this.getCommands(this.temp,this.temp2,"select");this.clearTemp();return a},"J.shape.AtomShape");h(c$,"getTextState",function(a){var b=new JU.SB,c=a.text;if(null==c||a.isLabelOrHover||a.target.equals("error"))return"";var d=
null!=a.image,e=null,f="set echo ID "+JU.PT.esc(a.target);switch(a.valign){case 3:e=2147483647==a.movableXPercent||2147483647==a.movableYPercent?(2147483647==a.movableXPercent?a.movableX+" ":a.movableXPercent+"% ")+(2147483647==a.movableYPercent?a.movableY+"":a.movableYPercent+"%"):"["+a.movableXPercent+" "+a.movableYPercent+"%]";case 4:null==e&&(e=JU.Escape.eP(a.xyz));b.append("  ").append(f).append(" ").append(e);4!=a.align&&b.append(";  ").append(f).append(" ").append(JV.JC.getHorizAlignmentName(a.align));
break;default:b.append("  set echo ").append(JV.JC.getEchoName(a.valign)).append(" ").append(JV.JC.getHorizAlignmentName(a.align))}2147483647!=a.movableZPercent&&b.append(";  ").append(f).append(" depth ").appendI(a.movableZPercent);d?b.append("; ").append(f).append(" IMAGE /*file*/"):b.append("; echo ");b.append(JU.PT.esc(c));b.append(";\n");d&&1!=a.imageScale&&b.append("  ").append(f).append(" scale ").appendF(a.imageScale).append(";\n");null!=a.script&&b.append("  ").append(f).append(" script ").append(JU.PT.esc(a.script)).append(";\n");
0<=a.modelIndex&&b.append("  ").append(f).append(" model ").append(this.vwr.getModelNumberDotted(a.modelIndex)).append(";\n");null!=a.pointerPt&&b.append("  ").append(f).append(" point ").append(r(a.pointerPt,JM.Atom)?"({"+a.pointerPt.i+"})":JU.Escape.eP(a.pointerPt)).append(";\n");null!=a.pymolOffset&&b.append("  ").append(f).append(" offset ").append(JU.Escape.escapeFloatA(a.pymolOffset,!0)).append(";\n");a.appendFontCmd(b);b.append("; color echo");JU.C.isColixTranslucent(a.colix)&&b.append(JU.C.getColixTranslucencyLabel(a.colix));
b.append(" ").append(JU.C.getHexCode(a.colix));0!=a.bgcolix&&(b.append("; color echo background "),JU.C.isColixTranslucent(a.bgcolix)&&b.append(JU.C.getColixTranslucencyLabel(a.bgcolix)).append(" "),b.append(JU.C.getHexCode(a.bgcolix)));b.append(";\n");return b.toString()},"JM.Text");l(c$,"getAllSettings",function(a){for(var b=this.vwr.g,c=new JU.SB,d=Array(b.htBooleanParameterFlags.size()+b.htNonbooleanParameterValues.size()+b.htUserVariables.size()),e=0,f="_"+a,g,k=b.htBooleanParameterFlags.keySet().iterator();k.hasNext()&&
((g=k.next())||1);)if(null==a||0==g.indexOf(a)||0==g.indexOf(f))d[e++]=(0==g.indexOf("_")?g+" = ":"set "+g+" ")+b.htBooleanParameterFlags.get(g);for(k=b.htNonbooleanParameterValues.keySet().iterator();k.hasNext()&&((g=k.next())||1);)if("@"!=g.charAt(0)&&(null==a||0==g.indexOf(a)||0==g.indexOf(f))){var h=b.htNonbooleanParameterValues.get(g);r(h,String)&&(h=JV.StateCreator.chop(JU.PT.esc(h)));d[e++]=(0==g.indexOf("_")?g+" = ":"set "+g+" ")+h}for(k=b.htUserVariables.keySet().iterator();k.hasNext()&&
((g=k.next())||1);)if(null==a||0==g.indexOf(a))h=b.htUserVariables.get(g),f=h.escape(),d[e++]=g+" "+(g.startsWith("@")?"":"= ")+(4==h.tok?JV.StateCreator.chop(JU.PT.esc(f)):f);java.util.Arrays.sort(d,0,e);for(a=0;a<e;a++)null!=d[a]&&this.app(c,d[a]);c.append("\n");return c.toString()},"~S");c$.chop=h(c$,"chop",function(a){var b=a.length;if(512>b)return a;for(var c=new JU.SB,d=0,e=72;e<b;d=e,e+=72){for(;"\\"==a.charAt(e-1);)e++;c.append(0==d?"":'"\\\n    + "').append(a.substring(d,e))}c.append('"\\\n    + "').append(a.substring(d,
b));return c.toString()},"~S");l(c$,"getFunctionCalls",function(a){null==a&&(a="");var b=new JU.SB,c=a.indexOf("*"),d=0<=c,e=0==a.indexOf("static_"),f=a.equalsIgnoreCase("names")||a.equalsIgnoreCase("static_names");f&&(a="");d&&(a=a.substring(0,c));a=a.toLowerCase();(e||0==a.length)&&this.addFunctions(b,JV.Viewer.staticFunctions,a,d,f);(!e||0==a.length)&&this.addFunctions(b,this.vwr.localFunctions,a,d,f);return b.toString()},"~S");h(c$,"addFunctions",function(a,b,c,d,e){for(var f=Array(b.size()),
g=0,k,h=b.keySet().iterator();h.hasNext()&&((k=h.next())||1);)if(0==c.length&&!k.startsWith("_")||k.equalsIgnoreCase(c)||d&&0==k.toLowerCase().indexOf(c))f[g++]=k;java.util.Arrays.sort(f,0,g);for(c=0;c<g;c++)d=b.get(f[c]),a.append(e?d.getSignature():d.toString()),a.appendC("\n")},"JU.SB,java.util.Map,~S,~B,~B");c$.isTainted=h(c$,"isTainted",function(a,b,c){return null!=a&&null!=a[c]&&a[c].get(b)},"~A,~N,~N");l(c$,"getAtomicPropertyState",function(a,b){if(!this.vwr.g.preserveState)return"";for(var c,
d=new JU.SB,e=0;17>e;e++)if(0>a||e==a)null!=(c=null!=b?b:this.vwr.ms.getTaintedAtoms(e))&&this.getAtomicPropertyStateBuffer(d,e,c,null,null);return d.toString()},"~N,JU.BS");l(c$,"getAtomicPropertyStateBuffer",function(a,b,c,d,e){if(this.vwr.g.preserveState){var f=new JU.SB;d=(null==d?JM.AtomCollection.userSettableValues[b]:d)+" set";var g=0,k=2==b,h=this.vwr.ms.at,m=this.vwr.ms.tainted;if(null!=c)for(var j=c.nextSetBit(0);0<=j;j=c.nextSetBit(j+1))if(!h[j].isDeleted()){f.appendI(j+1).append(" ").append(h[j].getElementSymbol()).append(" ").append(h[j].getInfo().$replace(" ",
"_")).append(" ");switch(b){case 17:j<e.length&&f.appendF(e[j]);break;case 13:f.appendI(h[j].getAtomNumber());break;case 16:f.append(h[j].getChainIDStr());break;case 15:f.appendI(h[j].group.getResno());break;case 14:f.appendI(h[j].getSeqID());break;case 0:f.append(h[j].getAtomName());break;case 1:f.append(h[j].getAtomType());break;case 2:JV.StateCreator.isTainted(m,j,2)&&(k=!1);f.appendF(h[j].x).append(" ").appendF(h[j].y).append(" ").appendF(h[j].z);break;case 12:var l=h[j].getVibrationVector();
null==l?f.append("0 0 0"):Float.isNaN(l.modScale)?f.appendF(l.x).append(" ").appendF(l.y).append(" ").appendF(l.z):f.appendF(1.4E-45).append(" ").appendF(1.4E-45).append(" ").appendF(l.modScale);break;case 3:f.appendI(h[j].getAtomicAndIsotopeNumber());break;case 4:f.appendI(h[j].getFormalCharge());break;case 6:f.appendF(h[j].getBondingRadius());break;case 7:f.appendI(h[j].getOccupancy100());break;case 8:f.appendF(h[j].getPartialCharge());break;case 9:f.appendF(h[j].getBfactor100()/100);break;case 10:f.appendI(h[j].getValence());
break;case 11:f.appendF(h[j].getVanderwaalsRadiusFloat(this.vwr,J.c.VDW.AUTO))}f.append(" ;\n");++g}0!=g&&(k&&(d+="(default)"),a.append('\n  DATA "'+d+'"\n').appendI(g).append(" ;\nJmol Property Data Format 1 -- Jmol ").append(JV.Viewer.getJmolVersion()).append(";\n"),a.appendSB(f),a.append('  end "'+d+'";\n'))}},"JU.SB,~N,JU.BS,~S,~A");l(c$,"undoMoveAction",function(a,b){switch(a){case 4165:case 4139:switch(b){case -2:this.vwr.undoClear();break;case -1:(4165==a?this.vwr.actionStates:this.vwr.actionStatesRedo).clear();
break;case 0:b=2147483647;default:100<b&&(b=(4165==a?this.vwr.actionStates:this.vwr.actionStatesRedo).size());for(var c=0;c<b;c++)this.undoMoveActionClear(0,a,!0)}}},"~N,~N");l(c$,"undoMoveActionClear",function(a,b,c){if(this.vwr.g.preserveState){var d=0<=a?this.vwr.ms.at[a].mi:this.vwr.ms.mc-1;switch(b){case 4139:case 4165:this.vwr.stopMinimization();var e="";switch(b){default:case 4165:e=this.vwr.actionStates;a=this.vwr.actionStatesRedo;break;case 4139:if(e=this.vwr.actionStatesRedo,a=this.vwr.actionStates,
1==this.vwr.actionStatesRedo.size())return}if(0==e.size()||this.undoWorking)return;this.undoWorking=!0;a.add(0,e.removeItemAt(0));e=this.vwr.actionStatesRedo.get(0);4165==b&&1==a.size()&&(a=x(-1,[1]),b=JU.PT.parseIntNext(e,a),a=JU.PT.parseIntNext(e,a),this.undoMoveActionClear(a,b,!1));this.vwr.ms.am[d].isModelKit||0>e.indexOf("zap ")?(JU.Logger.debugging&&this.vwr.log(e),this.vwr.evalStringQuiet(e)):this.vwr.actionStates.clear();break;default:if(this.undoWorking&&c)return;this.undoWorking=!0;e=new JU.SB;
e.append("#"+b+" "+a+" "+new java.util.Date+"\n");0<=a?(d=this.vwr.getModelUndeletedAtomsBitSet(d),this.vwr.ms.taintAtoms(d,b),e.append(this.getAtomicPropertyState(-1,null))):(d=this.vwr.getModelUndeletedAtomsBitSet(d),e.append("zap "),e.append(JU.Escape.eBS(d)).append(";"),this.getInlineData(e,this.vwr.getModelExtract(d,!1,!0,"MOL"),!0,null),e.append("set refreshing false;").append(this.vwr.acm.getPickingState()).append(this.vwr.tm.getMoveToText(0,!1)).append("set refreshing true;"));c?(this.vwr.actionStates.add(0,
e.toString()),this.vwr.actionStatesRedo.clear()):this.vwr.actionStatesRedo.add(1,e.toString());100==this.vwr.actionStates.size()&&this.vwr.actionStates.removeItemAt(99)}this.undoWorking=!c}},"~N,~N,~B");l(c$,"syncScript",function(a,b,c){var d=this.vwr.sm;if("GET_GRAPHICS".equalsIgnoreCase(a))d.setSyncDriver(5),d.syncSend(a,b,0),this.vwr.setBooleanProperty("_syncMouse",!1),this.vwr.setBooleanProperty("_syncScript",!1);else{"=".equals(b)&&(b="~",d.setSyncDriver(2));var e="~".equals(b);if(0<c||!e&&!".".equals(b))if(d.syncSend(a,
b,c),!"*".equals(b)||a.startsWith("{"))return;if(a.equalsIgnoreCase("on")||a.equalsIgnoreCase("true"))d.setSyncDriver(1);else if(a.equalsIgnoreCase("off")||a.equalsIgnoreCase("false"))d.setSyncDriver(0);else if(a.equalsIgnoreCase("slave"))d.setSyncDriver(2);else if(b=d.getSyncMode(),0!=b)if(1!=b&&(e=!1),JU.Logger.debugging&&JU.Logger.debug(this.vwr.htmlName+" syncing with script: "+a),e&&d.setSyncDriver(3),0!=a.indexOf("Mouse: ")){b=JV.JC.getServiceCommand(a);switch(b){case 70:case 42:case 49:case 56:case 63:d.syncSend(a,
".",c);return;case 0:case 77:case 28:case 35:if(e)return;case 21:case 7:case 14:if(null==(a=this.vwr.getJSV().processSync(a,b)))return}this.vwr.evalStringQuietSync(a,!0,!1)}else this.mouseScript(a),e&&this.vwr.setSyncDriver(4)}},"~S,~S,~N");l(c$,"mouseScript",function(a){var b=JU.PT.getTokens(a),c=b[1];try{switch(c=(c.toLowerCase()+"...............").substring(0,15),"zoombyfactor...zoomby.........rotatezby......rotatexyby.....translatexyby..rotatemolecule.spinxyby.......rotatearcball..".indexOf(c)){case 0:switch(b.length){case 3:this.vwr.zoomByFactor(JU.PT.parseFloat(b[2]),
2147483647,2147483647);return;case 5:this.vwr.zoomByFactor(JU.PT.parseFloat(b[2]),JU.PT.parseInt(b[3]),JU.PT.parseInt(b[4]));return}break;case 15:switch(b.length){case 3:this.vwr.zoomBy(JU.PT.parseInt(b[2]));return}break;case 30:switch(b.length){case 3:this.vwr.rotateZBy(JU.PT.parseInt(b[2]),2147483647,2147483647);return;case 5:this.vwr.rotateZBy(JU.PT.parseInt(b[2]),JU.PT.parseInt(b[3]),JU.PT.parseInt(b[4]))}break;case 45:this.vwr.rotateXYBy(JU.PT.parseFloat(b[2]),JU.PT.parseFloat(b[3]));return;
case 60:this.vwr.translateXYBy(JU.PT.parseInt(b[2]),JU.PT.parseInt(b[3]));return;case 75:this.vwr.rotateSelected(JU.PT.parseFloat(b[2]),JU.PT.parseFloat(b[3]),null);return;case 90:this.vwr.spinXYBy(JU.PT.parseInt(b[2]),JU.PT.parseInt(b[3]),JU.PT.parseFloat(b[4]));return;case 105:this.vwr.rotateXYBy(JU.PT.parseInt(b[2]),JU.PT.parseInt(b[3]));return}}catch(d){if(!s(d,Exception))throw d;}this.vwr.showString("error reading SYNC command: "+a,!1)},"~S");y(c$,"MAX_ACTION_UNDO",100)})})(Clazz,Clazz.getClassName,
Clazz.newLongArray,Clazz.doubleToByte,Clazz.doubleToInt,Clazz.doubleToLong,Clazz.declarePackage,Clazz.instanceOf,Clazz.load,Clazz.instantialize,Clazz.decorateAsClass,Clazz.floatToInt,Clazz.floatToLong,Clazz.makeConstructor,Clazz.defineEnumConstant,Clazz.exceptionOf,Clazz.newIntArray,Clazz.defineStatics,Clazz.newFloatArray,Clazz.declareType,Clazz.prepareFields,Clazz.superConstructor,Clazz.newByteArray,Clazz.declareInterface,Clazz.p0p,Clazz.pu$h,Clazz.newShortArray,Clazz.innerTypeInstance,Clazz.isClassDefined,
Clazz.prepareCallback,Clazz.newArray,Clazz.castNullAs,Clazz.floatToShort,Clazz.superCall,Clazz.decorateAsType,Clazz.newBooleanArray,Clazz.newCharArray,Clazz.implementOf,Clazz.newDoubleArray,Clazz.overrideConstructor,Clazz.clone,Clazz.doubleToShort,Clazz.getInheritedLevel,Clazz.getParamsType,Clazz.isAF,Clazz.isAB,Clazz.isAI,Clazz.isAS,Clazz.isASS,Clazz.isAP,Clazz.isAFloat,Clazz.isAII,Clazz.isAFF,Clazz.isAFFF,Clazz.tryToSearchAndExecute,Clazz.getStackTrace,Clazz.inheritArgs,Clazz.alert,Clazz.defineMethod,
Clazz.overrideMethod,Clazz.declareAnonymous,Clazz.cloneFinals);
