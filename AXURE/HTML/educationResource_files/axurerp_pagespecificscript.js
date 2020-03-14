for(var i = 0; i < 339; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

widgetIdToShowFunction['u85'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u153', GetNum('0'), GetNum('162'),'none',500);

	MoveWidgetBy('u124', GetNum('0'), GetNum('162'),'none',500);

	MoveWidgetBy('u109', GetNum('0'), GetNum('162'),'none',500);

	SetPanelState('u102', 'pd0u102','fade','',0,'none','',500);

	SetPanelState('u102', 'pd1u102','none','',500,'fade','',0);

}

}

widgetIdToHideFunction['u85'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u153', GetNum('0'), GetNum('-162'),'none',500);

	MoveWidgetBy('u124', GetNum('0'), GetNum('-162'),'none',500);

	MoveWidgetBy('u109', GetNum('0'), GetNum('-162'),'none',500);

	SetPanelState('u102', 'pd1u102','fade','',0,'none','',500);

	SetPanelState('u102', 'pd0u102','none','',500,'fade','',0);

}

}

if (bIE) document.getElementById('u258').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u258'); });
else {
    document.getElementById('u258').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u258'); }, true);
    document.getElementById('u258').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u258'); }, true);
}

widgetIdToDragFunction['u258'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u258',widgetDragInfo.xDelta,widgetDragInfo.yDelta,'none',500);

	BringToFront("u258");

}

}

widgetIdToShowFunction['u110'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u153', GetNum('0'), GetNum('55'),'none',500);

	MoveWidgetBy('u124', GetNum('0'), GetNum('55'),'none',500);

	SetPanelState('u119', 'pd0u119','fade','',0,'none','',500);

	SetPanelState('u119', 'pd1u119','none','',500,'fade','',0);

}

}

widgetIdToHideFunction['u110'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u153', GetNum('0'), GetNum('-55'),'none',500);

	MoveWidgetBy('u124', GetNum('0'), GetNum('-55'),'none',500);

	SetPanelState('u119', 'pd1u119','fade','',0,'none','',500);

	SetPanelState('u119', 'pd0u119','none','',500,'fade','',0);

}

}

widgetIdToShowFunction['u125'] = function() {
var e = windowEvent;

if (true) {

	SetPanelState('u148', 'pd0u148','fade','',0,'none','',500);

	SetPanelState('u148', 'pd1u148','none','',500,'fade','',0);

}

}

widgetIdToHideFunction['u125'] = function() {
var e = windowEvent;

if (true) {

	SetPanelState('u148', 'pd1u148','fade','',0,'none','',500);

	SetPanelState('u148', 'pd0u148','none','',500,'fade','',0);

}

}

widgetIdToShowFunction['u154'] = function() {
var e = windowEvent;

if (true) {

	SetPanelState('u167', 'pd0u167','fade','',0,'none','',500);

	SetPanelState('u167', 'pd1u167','none','',500,'fade','',0);

	MoveWidgetBy('u124', GetNum('0'), GetNum('109'),'none',500);

}

}

widgetIdToHideFunction['u154'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u124', GetNum('0'), GetNum('-109'),'none',500);

	SetPanelState('u167', 'pd1u167','fade','',0,'none','',500);

	SetPanelState('u167', 'pd0u167','none','',500,'fade','',0);

}

}

widgetIdToShowFunction['u49'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u65', GetNum('0'), GetNum('83'),'none',500);

	MoveWidgetBy('u84', GetNum('0'), GetNum('83'),'none',500);

	MoveWidgetBy('u153', GetNum('0'), GetNum('83'),'none',500);

	MoveWidgetBy('u124', GetNum('0'), GetNum('83'),'none',500);

	MoveWidgetBy('u109', GetNum('0'), GetNum('83'),'none',500);

	SetPanelState('u60', 'pd0u60','fade','',0,'none','',500);

	SetPanelState('u60', 'pd1u60','none','',500,'fade','',0);

}

}

widgetIdToHideFunction['u49'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u65', GetNum('0'), GetNum('-83'),'none',500);

	MoveWidgetBy('u84', GetNum('0'), GetNum('-83'),'none',500);

	MoveWidgetBy('u153', GetNum('0'), GetNum('-83'),'none',500);

	MoveWidgetBy('u124', GetNum('0'), GetNum('-83'),'none',500);

	MoveWidgetBy('u109', GetNum('0'), GetNum('-83'),'none',500);

	SetPanelState('u60', 'pd1u60','fade','',0,'none','',500);

	SetPanelState('u60', 'pd0u60','none','',500,'fade','',0);

}

}

widgetIdToShowFunction['u66'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u84', GetNum('0'), GetNum('109'),'none',500);

	MoveWidgetBy('u153', GetNum('0'), GetNum('109'),'none',500);

	MoveWidgetBy('u124', GetNum('0'), GetNum('109'),'none',500);

	MoveWidgetBy('u109', GetNum('0'), GetNum('109'),'none',500);

	SetPanelState('u79', 'pd0u79','fade','',0,'none','',500);

	SetPanelState('u79', 'pd1u79','none','',500,'fade','',0);

}

}

widgetIdToHideFunction['u66'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u84', GetNum('0'), GetNum('-109'),'none',500);

	MoveWidgetBy('u153', GetNum('0'), GetNum('-109'),'none',500);

	MoveWidgetBy('u124', GetNum('0'), GetNum('-109'),'none',500);

	MoveWidgetBy('u109', GetNum('0'), GetNum('-109'),'none',500);

	SetPanelState('u79', 'pd1u79','fade','',500,'none','',500);

	SetPanelState('u79', 'pd0u79','none','',500,'fade','',500);

}

}

u36.style.cursor = 'pointer';
$axure.eventManager.click('u36', function(e) {

if (true) {

	SetPanelVisibility('u27','hidden','none',500);

SetWidgetRichText('u26', '<p style="text-align:right;"><span style="font-family:Arial;font-size:12px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">( Location C )</span></p>');

SetCheckState('u32', false);

SetCheckState('u34', false);

}
});
gv_vAlignTable['u180'] = 'top';gv_vAlignTable['u216'] = 'center';gv_vAlignTable['u194'] = 'top';gv_vAlignTable['u72'] = 'center';gv_vAlignTable['u97'] = 'center';gv_vAlignTable['u152'] = 'center';document.getElementById('u231_img').tabIndex = 0;
HookHover('u231', false);

u231.style.cursor = 'pointer';
$axure.eventManager.click('u231', function(e) {

if (true) {

SetWidgetSelected('u231');
SetWidgetNotSelected('u233');
SetWidgetFormText('u225', 'Adalat');

	SetPanelVisibility('u228','hidden','fade',100);

}
});
gv_vAlignTable['u78'] = 'center';gv_vAlignTable['u166'] = 'center';gv_vAlignTable['u298'] = 'center';gv_vAlignTable['u139'] = 'center';gv_vAlignTable['u201'] = 'center';gv_vAlignTable['u1'] = 'center';document.getElementById('u215_img').tabIndex = 0;
HookHover('u215', false);

u215.style.cursor = 'pointer';
$axure.eventManager.click('u215', function(e) {

if (true) {

SetWidgetSelected('u215');
SetWidgetNotSelected('u217');
SetWidgetFormText('u209', 'Loimc1');

	SetPanelVisibility('u212','hidden','fade',100);

}
});
gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u332'] = 'center';document.getElementById('u151_img').tabIndex = 0;

u151.style.cursor = 'pointer';
$axure.eventManager.click('u151', function(e) {

if ((GetWidgetVisibility('u125')) == (false)) {

	SetPanelVisibility('u125','','fade',500);

	SetPanelVisibility('u85','hidden','none',500);

	SetPanelVisibility('u49','hidden','none',500);

	SetPanelVisibility('u66','hidden','none',500);

	SetPanelVisibility('u154','hidden','none',500);

}
});
gv_vAlignTable['u202'] = 'top';gv_vAlignTable['u26'] = 'top';document.getElementById('u138_img').tabIndex = 0;

u138.style.cursor = 'pointer';
$axure.eventManager.click('u138', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ListDisclosure.html');

}
});
document.getElementById('u54_img').tabIndex = 0;

u54.style.cursor = 'pointer';
$axure.eventManager.click('u54', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('UserGroupList.html');

}
});
gv_vAlignTable['u236'] = 'center';gv_vAlignTable['u192'] = 'top';document.getElementById('u269_img').tabIndex = 0;
HookClick('u269', false);

u269.style.cursor = 'pointer';
$axure.eventManager.click('u269', function(e) {

if (true) {

	SetPanelVisibility('u258','hidden','fade',50);

}
});
gv_vAlignTable['u150'] = 'center';gv_vAlignTable['u287'] = 'top';u24.tabIndex = 0;

u24.style.cursor = 'pointer';
$axure.eventManager.click('u24', function(e) {

if (true) {

	NewWindow($axure.globalVariableProvider.getLinkUrl('ChangePassword.html'), "", "directories=0, height=245, location=0, menubar=0, resizable=0, scrollbars=0, status=0, toolbar=0, width=450, left=400, top=400", false, 450, 245);

}
});

$axure.eventManager.mouseover('u24', function(e) {
if (!IsTrueMouseOver('u24',e)) return;
if (true) {

	SetPanelVisibility('u17','','none',500);

}
});
gv_vAlignTable['u24'] = 'top';document.getElementById('u80_img').tabIndex = 0;

u80.style.cursor = 'pointer';
$axure.eventManager.click('u80', function(e) {

if ((GetWidgetVisibility('u66')) == (true)) {

	SetPanelVisibility('u66','hidden','none',500);

	SetPanelVisibility('u154','hidden','none',500);

	SetPanelVisibility('u49','hidden','none',500);

	SetPanelVisibility('u85','hidden','none',500);

	SetPanelVisibility('u125','hidden','none',500);

	SetPanelVisibility('u110','hidden','none',500);

}
});
document.getElementById('u113_img').tabIndex = 0;

u113.style.cursor = 'pointer';
$axure.eventManager.click('u113', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('AddPatient.html');

}
});
gv_vAlignTable['u268'] = 'center';gv_vAlignTable['u330'] = 'center';gv_vAlignTable['u227'] = 'center';document.getElementById('u63_img').tabIndex = 0;

u63.style.cursor = 'pointer';
$axure.eventManager.click('u63', function(e) {

if ((GetWidgetVisibility('u49')) == (false)) {

	SetPanelVisibility('u49','','fade',500);

	SetPanelVisibility('u154','hidden','none',500);

	SetPanelVisibility('u66','hidden','none',500);

	SetPanelVisibility('u85','hidden','none',500);

	SetPanelVisibility('u125','hidden','none',500);

	SetPanelVisibility('u110','hidden','none',500);

}
});
gv_vAlignTable['u326'] = 'center';gv_vAlignTable['u37'] = 'top';gv_vAlignTable['u93'] = 'center';gv_vAlignTable['u112'] = 'center';gv_vAlignTable['u285'] = 'top';
$axure.eventManager.mouseover('u18', function(e) {
if (!IsTrueMouseOver('u18',e)) return;
if (true) {

	SetPanelVisibility('u17','','none',500);

}
});

$axure.eventManager.mouseout('u18', function(e) {
if (!IsTrueMouseOut('u18',e)) return;
if (true) {

	SetPanelVisibility('u17','hidden','none',500);

}
});
gv_vAlignTable['u74'] = 'center';gv_vAlignTable['u162'] = 'center';gv_vAlignTable['u55'] = 'center';document.getElementById('u149_img').tabIndex = 0;

u149.style.cursor = 'pointer';
$axure.eventManager.click('u149', function(e) {

if ((GetWidgetVisibility('u125')) == (true)) {

	SetPanelVisibility('u125','hidden','none',500);

	SetPanelVisibility('u85','hidden','none',500);

	SetPanelVisibility('u49','hidden','none',500);

	SetPanelVisibility('u66','hidden','none',500);

	SetPanelVisibility('u154','hidden','none',500);

}
});
gv_vAlignTable['u306'] = 'center';gv_vAlignTable['u284'] = 'center';
$axure.eventManager.mouseover('u12', function(e) {
if (!IsTrueMouseOver('u12',e)) return;
if (true) {

	SetPanelState('u27', 'pd0u27','none','',500,'none','',500);

	BringToFront("u27");

}
});
gv_vAlignTable['u12'] = 'top';gv_vAlignTable['u175'] = 'top';document.getElementById('u283_img').tabIndex = 0;

u283.style.cursor = 'pointer';
$axure.eventManager.click('u283', function(e) {

if (true) {

SetWidgetNotSelected('u277');
SetWidgetNotSelected('u279');
SetWidgetNotSelected('u281');
SetWidgetSelected('u283');
SetGlobalVariableValue('FileName', 'filename4.csv');

;

}
});

$axure.eventManager.mouseover('u20', function(e) {
if (!IsTrueMouseOver('u20',e)) return;
if (true) {

	SetPanelVisibility('u17','','none',500);

}
});
document.getElementById('u279_img').tabIndex = 0;

u279.style.cursor = 'pointer';
$axure.eventManager.click('u279', function(e) {

if (true) {

SetWidgetNotSelected('u277');
SetWidgetSelected('u279');
SetWidgetNotSelected('u281');
SetWidgetNotSelected('u283');
SetGlobalVariableValue('FileName', 'filename2.csv');

;

}
});
gv_vAlignTable['u160'] = 'center';
$axure.eventManager.mouseover('u8', function(e) {
if (!IsTrueMouseOver('u8',e)) return;
if (true) {

	SetPanelVisibility('u17','','none',500);

	BringToFront("u17");

}
});
gv_vAlignTable['u8'] = 'top';u25.tabIndex = 0;

u25.style.cursor = 'pointer';
$axure.eventManager.click('u25', function(e) {

if (true) {

	parent.location.href = 'Login.html';

}
});

$axure.eventManager.mouseover('u25', function(e) {
if (!IsTrueMouseOver('u25',e)) return;
if (true) {

	SetPanelVisibility('u17','','none',500);

}
});
gv_vAlignTable['u25'] = 'top';gv_vAlignTable['u81'] = 'center';gv_vAlignTable['u282'] = 'center';gv_vAlignTable['u76'] = 'center';gv_vAlignTable['u123'] = 'center';gv_vAlignTable['u278'] = 'center';gv_vAlignTable['u296'] = 'center';gv_vAlignTable['u137'] = 'center';gv_vAlignTable['u33'] = 'top';gv_vAlignTable['u254'] = 'top';gv_vAlignTable['u173'] = 'top';document.getElementById('u281_img').tabIndex = 0;

u281.style.cursor = 'pointer';
$axure.eventManager.click('u281', function(e) {

if (true) {

SetWidgetNotSelected('u277');
SetWidgetNotSelected('u279');
SetWidgetSelected('u281');
SetWidgetNotSelected('u283');
SetGlobalVariableValue('FileName', 'Filename3.csv');

;

}
});
document.getElementById('u122_img').tabIndex = 0;

u122.style.cursor = 'pointer';
$axure.eventManager.click('u122', function(e) {

if ((GetWidgetVisibility('u110')) == (false)) {

	SetPanelVisibility('u110','','fade',500);

	SetPanelVisibility('u154','hidden','none',500);

	SetPanelVisibility('u49','hidden','none',500);

	SetPanelVisibility('u66','hidden','none',500);

	SetPanelVisibility('u125','hidden','none',500);

	SetPanelVisibility('u85','hidden','none',500);

}
});
gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u317'] = 'center';document.getElementById('u136_img').tabIndex = 0;

u136.style.cursor = 'pointer';
$axure.eventManager.click('u136', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Reports.html');

}
});
gv_vAlignTable['u51'] = 'center';gv_vAlignTable['u302'] = 'center';gv_vAlignTable['u280'] = 'center';gv_vAlignTable['u121'] = 'center';gv_vAlignTable['u294'] = 'center';gv_vAlignTable['u135'] = 'center';gv_vAlignTable['u108'] = 'center';gv_vAlignTable['u252'] = 'center';gv_vAlignTable['u171'] = 'center';gv_vAlignTable['u266'] = 'center';gv_vAlignTable['u64'] = 'center';gv_vAlignTable['u239'] = 'center';document.getElementById('u301_img').tabIndex = 0;

u301.style.cursor = 'pointer';
$axure.eventManager.click('u301', function(e) {

if (true) {

	SetPanelVisibility('u258','hidden','fade',50);

}
});
document.getElementById('u120_img').tabIndex = 0;

u120.style.cursor = 'pointer';
$axure.eventManager.click('u120', function(e) {

if ((GetWidgetVisibility('u110')) == (true)) {

	SetPanelVisibility('u110','hidden','none',500);

	SetPanelVisibility('u154','hidden','none',500);

	SetPanelVisibility('u49','hidden','none',500);

	SetPanelVisibility('u66','hidden','none',500);

	SetPanelVisibility('u125','hidden','none',500);

	SetPanelVisibility('u85','hidden','none',500);

}
});
gv_vAlignTable['u21'] = 'center';document.getElementById('u134_img').tabIndex = 0;

u134.style.cursor = 'pointer';
$axure.eventManager.click('u134', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PQRS_Report.html');

}
});
document.getElementById('u251_img').tabIndex = 0;
HookHover('u251', false);

u251.style.cursor = 'pointer';
$axure.eventManager.click('u251', function(e) {

if (true) {

	SetPanelVisibility('u258','','fade',50);

	BringToFront("u258");

}
});
document.getElementById('u170_img').tabIndex = 0;

u170.style.cursor = 'pointer';
$axure.eventManager.click('u170', function(e) {

if ((GetWidgetVisibility('u154')) == (false)) {

	SetPanelVisibility('u154','','fade',500);

	SetPanelVisibility('u85','hidden','none',500);

	SetPanelVisibility('u49','hidden','none',500);

	SetPanelVisibility('u66','hidden','none',500);

	SetPanelVisibility('u125','hidden','none',500);

}
});
document.getElementById('u265_img').tabIndex = 0;
HookClick('u265', false);

u265.style.cursor = 'pointer';
$axure.eventManager.click('u265', function(e) {

if ((GetGlobalVariableValue('FileName')) != ('')) {

	SetPanelVisibility('u258','hidden','fade',50);

	SetPanelVisibility('u255','','none',500);
function waitu51ace3421ecd4feca65daa1c121c4f5d1() {

	SetPanelVisibility('u255','hidden','none',500);

SetWidgetFormText('u253', GetGlobalVariableValue('FileName'));
}
setTimeout(waitu51ace3421ecd4feca65daa1c121c4f5d1, 1000);

}
else
if ((GetGlobalVariableValue('FileName')) == ('')) {

	SetPanelVisibility('u258','hidden','fade',50);

}
});
document.getElementById('u82_img').tabIndex = 0;

u82.style.cursor = 'pointer';
$axure.eventManager.click('u82', function(e) {

if ((GetWidgetVisibility('u66')) == (false)) {

	SetPanelVisibility('u66','','fade',500);

	SetPanelVisibility('u154','hidden','none',500);

	SetPanelVisibility('u49','hidden','none',500);

	SetPanelVisibility('u85','hidden','none',500);

	SetPanelVisibility('u125','hidden','none',500);

	SetPanelVisibility('u110','hidden','none',500);

}
});
gv_vAlignTable['u16'] = 'top';document.getElementById('u238_img').tabIndex = 0;

u238.style.cursor = 'pointer';
$axure.eventManager.click('u238', function(e) {

if (true) {

SetWidgetFormText('u237', '');

}
});
gv_vAlignTable['u314'] = 'center';gv_vAlignTable['u292'] = 'center';gv_vAlignTable['u133'] = 'center';gv_vAlignTable['u250'] = 'center';gv_vAlignTable['u147'] = 'center';
u34.style.cursor = 'pointer';
$axure.eventManager.click('u34', function(e) {

if (true) {

	SetPanelVisibility('u27','hidden','none',500);

SetWidgetRichText('u26', '<p style="text-align:right;"><span style="font-family:Arial;font-size:12px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">( Location B )</span></p>');

SetCheckState('u32', false);

SetCheckState('u36', false);

}
});
document.getElementById('u61_img').tabIndex = 0;

u61.style.cursor = 'pointer';
$axure.eventManager.click('u61', function(e) {

if ((GetWidgetVisibility('u49')) == (true)) {

	SetPanelVisibility('u49','hidden','none',500);

	SetPanelVisibility('u154','hidden','none',500);

	SetPanelVisibility('u66','hidden','none',500);

	SetPanelVisibility('u85','hidden','none',500);

	SetPanelVisibility('u125','hidden','none',500);

	SetPanelVisibility('u110','hidden','none',500);

}
});
gv_vAlignTable['u164'] = 'center';gv_vAlignTable['u95'] = 'center';document.getElementById('u132_img').tabIndex = 0;

u132.style.cursor = 'pointer';
$axure.eventManager.click('u132', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Automate_measure_Calculation.html');

}
});
document.getElementById('u146_img').tabIndex = 0;

u146.style.cursor = 'pointer';
$axure.eventManager.click('u146', function(e) {

if (true) {

	SetPanelVisibility('u125','toggle','none',500);

	SetPanelVisibility('u49','hidden','none',500);

	SetPanelVisibility('u66','hidden','none',500);

}
});
document.getElementById('u52_img').tabIndex = 0;

u52.style.cursor = 'pointer';
$axure.eventManager.click('u52', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('UserList.html');

}
});
gv_vAlignTable['u91'] = 'center';document.getElementById('u277_img').tabIndex = 0;

u277.style.cursor = 'pointer';
$axure.eventManager.click('u277', function(e) {

if (true) {

SetWidgetSelected('u277');
SetWidgetNotSelected('u279');
SetWidgetNotSelected('u281');
SetWidgetNotSelected('u283');
SetGlobalVariableValue('FileName', 'filename1.csv');

;

}
});
gv_vAlignTable['u47'] = 'center';gv_vAlignTable['u131'] = 'center';gv_vAlignTable['u145'] = 'center';gv_vAlignTable['u118'] = 'center';gv_vAlignTable['u262'] = 'center';gv_vAlignTable['u322'] = 'center';gv_vAlignTable['u89'] = 'center';document.getElementById('u249_img').tabIndex = 0;
HookHover('u249', false);

u249.style.cursor = 'pointer';
$axure.eventManager.click('u249', function(e) {

if (true) {

SetWidgetNotSelected('u243');
SetWidgetNotSelected('u245');
SetWidgetNotSelected('u247');
SetWidgetSelected('u249');
SetWidgetFormText('u237', 'V86.50');

	SetPanelVisibility('u240','hidden','fade',100);

}
});
gv_vAlignTable['u211'] = 'center';document.getElementById('u130_img').tabIndex = 0;

u130.style.cursor = 'pointer';
$axure.eventManager.click('u130', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PatientList.html');

}
});

$axure.eventManager.mouseover('u22', function(e) {
if (!IsTrueMouseOver('u22',e)) return;
if (true) {

	SetPanelVisibility('u17','','none',500);

}
});
gv_vAlignTable['u22'] = 'top';document.getElementById('u144_img').tabIndex = 0;

u144.style.cursor = 'pointer';
$axure.eventManager.click('u144', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Intigrity.html');

}
});
gv_vAlignTable['u43'] = 'center';gv_vAlignTable['u248'] = 'center';document.getElementById('u210_img').tabIndex = 0;

u210.style.cursor = 'pointer';
$axure.eventManager.click('u210', function(e) {

if (true) {

SetWidgetFormText('u209', '');

}
});
document.getElementById('u107_img').tabIndex = 0;

u107.style.cursor = 'pointer';
$axure.eventManager.click('u107', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u224'] = 'center';gv_vAlignTable['u143'] = 'center';gv_vAlignTable['u260'] = 'center';gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u59'] = 'center';gv_vAlignTable['u35'] = 'top';gv_vAlignTable['u274'] = 'center';gv_vAlignTable['u328'] = 'center';gv_vAlignTable['u106'] = 'center';document.getElementById('u142_img').tabIndex = 0;

u142.style.cursor = 'pointer';
$axure.eventManager.click('u142', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('OverdueImmunization.html');

}
});
gv_vAlignTable['u70'] = 'center';
u237.style.cursor = 'pointer';
$axure.eventManager.click('u237', function(e) {

if (true) {

SetWidgetFormText('u237', '');

SetWidgetNotSelected('u243');
SetWidgetNotSelected('u245');
SetWidgetNotSelected('u247');
SetWidgetNotSelected('u249');
}
});

$axure.eventManager.keyup('u237', function(e) {

if (((GetWidgetText('u237')) == ('v')) || (((GetWidgetText('u237')) == ('v8')) || (((GetWidgetText('u237')) == ('v84')) || ((GetWidgetText('u237')) == ('v85'))))) {

	SetPanelState('u240', 'pd0u240','swing','up',50,'swing','down',50);

}
else
if (((GetWidgetText('u237')) == ('8')) || (((GetWidgetText('u237')) == ('5')) || ((GetWidgetText('u237')) == ('4')))) {

	SetPanelState('u240', 'pd0u240','swing','up',500,'swing','down',500);

}
});

$axure.eventManager.blur('u237', function(e) {

if (true) {

SetWidgetFormText('u237', 'Search...');

}
});
gv_vAlignTable['u156'] = 'center';gv_vAlignTable['u188'] = 'top';document.getElementById('u105_img').tabIndex = 0;

u105.style.cursor = 'pointer';
$axure.eventManager.click('u105', function(e) {

if ((GetWidgetVisibility('u85')) == (false)) {

	SetPanelVisibility('u85','','fade',500);

	SetPanelVisibility('u154','hidden','none',500);

	SetPanelVisibility('u49','hidden','none',500);

	SetPanelVisibility('u66','hidden','none',500);

	SetPanelVisibility('u125','hidden','none',500);

	SetPanelVisibility('u110','hidden','none',500);

}
});
gv_vAlignTable['u311'] = 'center';document.getElementById('u6_img').tabIndex = 0;

u6.style.cursor = 'pointer';
$axure.eventManager.click('u6', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u29'] = 'center';
u209.style.cursor = 'pointer';
$axure.eventManager.click('u209', function(e) {

if (true) {

SetWidgetFormText('u209', '');

SetWidgetNotSelected('u215');
SetWidgetNotSelected('u217');
}
});

$axure.eventManager.keyup('u209', function(e) {

if (((GetWidgetText('u209')) == ('l')) || (((GetWidgetText('u209')) == ('o')) || (((GetWidgetText('u209')) == ('i')) || (((GetWidgetText('u209')) == ('1')) || (((GetWidgetText('u209')) == ('2')) || ((GetWidgetText('u209')) == ('3'))))))) {

	SetPanelState('u212', 'pd0u212','swing','up',50,'swing','down',50);

}
});

$axure.eventManager.blur('u209', function(e) {

if (true) {

SetWidgetFormText('u209', 'Search...');

}
});
gv_vAlignTable['u272'] = 'center';gv_vAlignTable['u336'] = 'center';gv_vAlignTable['u19'] = 'center';gv_vAlignTable['u104'] = 'center';gv_vAlignTable['u308'] = 'center';gv_vAlignTable['u221'] = 'top';gv_vAlignTable['u232'] = 'center';u13.tabIndex = 0;

u13.style.cursor = 'pointer';
$axure.eventManager.click('u13', function(e) {

if (true) {

	parent.location.href = 'Login.html';

}
});
gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u208'] = 'center';document.getElementById('u103_img').tabIndex = 0;

u103.style.cursor = 'pointer';
$axure.eventManager.click('u103', function(e) {

if ((GetWidgetVisibility('u85')) == (true)) {

	SetPanelVisibility('u85','hidden','none',500);

	SetPanelVisibility('u154','hidden','none',500);

	SetPanelVisibility('u49','hidden','none',500);

	SetPanelVisibility('u66','hidden','none',500);

	SetPanelVisibility('u125','hidden','none',500);

	SetPanelVisibility('u110','hidden','none',500);

}
});
gv_vAlignTable['u158'] = 'center';gv_vAlignTable['u220'] = 'center';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u31'] = 'center';gv_vAlignTable['u234'] = 'center';gv_vAlignTable['u270'] = 'center';gv_vAlignTable['u319'] = 'center';document.getElementById('u56_img').tabIndex = 0;

u56.style.cursor = 'pointer';
$axure.eventManager.click('u56', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('UserRights.html');

}
});
gv_vAlignTable['u300'] = 'center';gv_vAlignTable['u116'] = 'center';document.getElementById('u233_img').tabIndex = 0;
HookHover('u233', false);

u233.style.cursor = 'pointer';
$axure.eventManager.click('u233', function(e) {

if (true) {

SetWidgetNotSelected('u231');
SetWidgetSelected('u233');
SetWidgetFormText('u225', 'Asprin');

	SetPanelVisibility('u228','hidden','fade',100);

}
});
gv_vAlignTable['u87'] = 'center';document.getElementById('u247_img').tabIndex = 0;
HookHover('u247', false);

u247.style.cursor = 'pointer';
$axure.eventManager.click('u247', function(e) {

if (true) {

SetWidgetNotSelected('u243');
SetWidgetNotSelected('u245');
SetWidgetSelected('u247');
SetWidgetNotSelected('u249');
SetWidgetFormText('u237', 'V86.01');

	SetPanelVisibility('u240','hidden','fade',100);

}
});
gv_vAlignTable['u68'] = 'center';document.getElementById('u226_img').tabIndex = 0;

u226.style.cursor = 'pointer';
$axure.eventManager.click('u226', function(e) {

if (true) {

SetWidgetFormText('u225', '');

}
});
gv_vAlignTable['u198'] = 'center';gv_vAlignTable['u101'] = 'center';gv_vAlignTable['u190'] = 'top';document.getElementById('u115_img').tabIndex = 0;

u115.style.cursor = 'pointer';
$axure.eventManager.click('u115', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('SearchPatient.html');

}
});
gv_vAlignTable['u7'] = 'center';gv_vAlignTable['u246'] = 'center';gv_vAlignTable['u62'] = 'center';document.getElementById('u219_img').tabIndex = 0;
HookHover('u219', false);

u219.style.cursor = 'pointer';
$axure.eventManager.click('u219', function(e) {

if (true) {

SetWidgetSelected('u215');
SetWidgetNotSelected('u217');
SetWidgetFormText('u209', 'Loimc3');

	SetPanelVisibility('u212','hidden','fade',100);

}
});
gv_vAlignTable['u114'] = 'center';gv_vAlignTable['u57'] = 'center';gv_vAlignTable['u169'] = 'center';document.getElementById('u38_img').tabIndex = 0;

u38.style.cursor = 'pointer';
$axure.eventManager.click('u38', function(e) {

if (true) {

	SetPanelVisibility('u27','hidden','none',500);

}
});
document.getElementById('u245_img').tabIndex = 0;
HookHover('u245', false);

u245.style.cursor = 'pointer';
$axure.eventManager.click('u245', function(e) {

if (true) {

SetWidgetNotSelected('u243');
SetWidgetSelected('u245');
SetWidgetNotSelected('u247');
SetWidgetNotSelected('u249');
SetWidgetFormText('u237', 'V85.06');

	SetPanelVisibility('u240','hidden','fade',100);

}
});
gv_vAlignTable['u14'] = 'top';gv_vAlignTable['u218'] = 'center';gv_vAlignTable['u99'] = 'center';document.getElementById('u168_img').tabIndex = 0;

u168.style.cursor = 'pointer';
$axure.eventManager.click('u168', function(e) {

if ((GetWidgetVisibility('u154')) == (true)) {

	SetPanelVisibility('u154','hidden','none',500);

	SetPanelVisibility('u85','hidden','none',500);

	SetPanelVisibility('u49','hidden','none',500);

	SetPanelVisibility('u66','hidden','none',500);

	SetPanelVisibility('u125','hidden','none',500);

}
});
gv_vAlignTable['u127'] = 'center';gv_vAlignTable['u338'] = 'center';
u32.style.cursor = 'pointer';
$axure.eventManager.click('u32', function(e) {

if (true) {

	SetPanelVisibility('u27','hidden','none',500);

SetWidgetRichText('u26', '<p style="text-align:right;"><span style="font-family:Arial;font-size:12px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">( Location A )</span></p>');

SetCheckState('u34', false);

SetCheckState('u36', false);

}
});
gv_vAlignTable['u244'] = 'center';gv_vAlignTable['u83'] = 'center';gv_vAlignTable['u40'] = 'top';gv_vAlignTable['u324'] = 'center';document.getElementById('u243_img').tabIndex = 0;
HookHover('u243', false);

u243.style.cursor = 'pointer';
$axure.eventManager.click('u243', function(e) {

if (true) {

SetWidgetSelected('u243');
SetWidgetNotSelected('u245');
SetWidgetNotSelected('u247');
SetWidgetNotSelected('u249');
SetWidgetFormText('u237', 'V84.00');

	SetPanelVisibility('u240','hidden','fade',100);

}
});
gv_vAlignTable['u257'] = 'center';document.getElementById('u69_img').tabIndex = 0;

u69.style.cursor = 'pointer';
$axure.eventManager.click('u69', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PasswordSettings.html');

}
});
gv_vAlignTable['u45'] = 'center';gv_vAlignTable['u184'] = 'top';document.getElementById('u96_img').tabIndex = 0;

u96.style.cursor = 'pointer';
$axure.eventManager.click('u96', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('RecordDisclosure.html');

}
});
gv_vAlignTable['u53'] = 'center';gv_vAlignTable['u129'] = 'center';
u174.style.cursor = 'pointer';
$axure.eventManager.click('u174', function(e) {

if (true) {

SetWidgetFormText('u206', '');

SetWidgetFormText('u253', 'No file selected.');

SetWidgetFormText('u237', 'Search...');

SetWidgetFormText('u225', 'Search...');

SetWidgetFormText('u209', 'Search...');

SetWidgetFormText('u222', '');

	SetPanelVisibility('u185','','fade',500);
function waitu0ea46ec80d264c4d8bde9528afb0e59e1() {

	SetPanelVisibility('u199','','fade',500);
function waitu9d8f64a3355244d2986bd99130465c091() {

	SetPanelVisibility('u199','hidden','fade',500);
}
setTimeout(waitu9d8f64a3355244d2986bd99130465c091, 3000);
}
setTimeout(waitu0ea46ec80d264c4d8bde9528afb0e59e1, 1000);

}
});
gv_vAlignTable['u205'] = 'top';gv_vAlignTable['u10'] = 'top';gv_vAlignTable['u141'] = 'center';document.getElementById('u197_img').tabIndex = 0;

u197.style.cursor = 'pointer';
$axure.eventManager.click('u197', function(e) {

if (true) {

SetWidgetFormText('u206', 'Andoren');

SetWidgetFormText('u253', 'No file selected.');

SetWidgetFormText('u237', 'V85.06');

SetWidgetFormText('u225', 'Asprin');

SetWidgetFormText('u209', 'Loimc1');

SetWidgetFormText('u222', 'http://www.example.com');

}
});
gv_vAlignTable['u39'] = 'center';gv_vAlignTable['u15'] = 'top';document.getElementById('u128_img').tabIndex = 0;

u128.style.cursor = 'pointer';
$axure.eventManager.click('u128', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PatientReminder.html');

}
});
gv_vAlignTable['u204'] = 'top';gv_vAlignTable['u182'] = 'top';gv_vAlignTable['u178'] = 'top';document.getElementById('u140_img').tabIndex = 0;

u140.style.cursor = 'pointer';
$axure.eventManager.click('u140', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ImmunizationRegistry.html');

}
});
gv_vAlignTable['u196'] = 'center';
$axure.eventManager.mouseover('u23', function(e) {
if (!IsTrueMouseOver('u23',e)) return;
if (true) {

	SetPanelVisibility('u17','','none',500);

}
});
gv_vAlignTable['u23'] = 'top';gv_vAlignTable['u264'] = 'center';gv_vAlignTable['u203'] = 'top';document.getElementById('u217_img').tabIndex = 0;
HookHover('u217', false);

u217.style.cursor = 'pointer';
$axure.eventManager.click('u217', function(e) {

if (true) {

SetWidgetNotSelected('u215');
SetWidgetSelected('u217');
SetWidgetFormText('u209', 'Loimc2');

	SetPanelVisibility('u212','hidden','fade',100);

}
});
document.getElementById('u195_img').tabIndex = 0;

u195.style.cursor = 'pointer';
$axure.eventManager.click('u195', function(e) {

if (true) {

	SetPanelVisibility('u185','hidden','fade',500);

SetWidgetFormText('u206', '');

SetWidgetFormText('u237', 'Search...');

SetWidgetFormText('u209', 'Search...');

SetWidgetFormText('u225', 'Search...');

SetWidgetFormText('u222', '');

SetWidgetFormText('u253', 'No file selected.');

}
});

u225.style.cursor = 'pointer';
$axure.eventManager.click('u225', function(e) {

if (true) {

SetWidgetFormText('u225', '');

SetWidgetNotSelected('u231');
SetWidgetNotSelected('u233');
}
});

$axure.eventManager.keyup('u225', function(e) {

if (((GetWidgetText('u225')) == ('a')) || (((GetWidgetText('u225')) == ('ad')) || ((GetWidgetText('u225')) == ('as')))) {

	SetPanelState('u228', 'pd0u228','swing','up',50,'swing','down',50);

}
});

$axure.eventManager.blur('u225', function(e) {

if (true) {

SetWidgetFormText('u225', 'Search...');

}
});
gv_vAlignTable['u334'] = 'center';