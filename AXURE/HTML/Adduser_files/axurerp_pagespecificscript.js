for(var i = 0; i < 259; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

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
document.getElementById('u115_img').tabIndex = 0;

u115.style.cursor = 'pointer';
$axure.eventManager.click('u115', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('SearchPatient.html');

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

$axure.eventManager.mouseover('u21', function(e) {
if (!IsTrueMouseOver('u21',e)) return;
if (true) {

	SetPanelVisibility('u15','','none',500);

}
});
gv_vAlignTable['u21'] = 'top';
u32.style.cursor = 'pointer';
$axure.eventManager.click('u32', function(e) {

if (true) {

	SetPanelVisibility('u25','hidden','none',500);

SetWidgetRichText('u24', '<p style="text-align:right;"><span style="font-family:Arial;font-size:12px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">( Location B )</span></p>');

SetCheckState('u30', false);

SetCheckState('u34', false);

}
});
gv_vAlignTable['u156'] = 'center';gv_vAlignTable['u207'] = 'center';document.getElementById('u130_img').tabIndex = 0;

u130.style.cursor = 'pointer';
$axure.eventManager.click('u130', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PatientList.html');

}
});
gv_vAlignTable['u7'] = 'top';gv_vAlignTable['u236'] = 'center';document.getElementById('u4_img').tabIndex = 0;

u4.style.cursor = 'pointer';
$axure.eventManager.click('u4', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
document.getElementById('u140_img').tabIndex = 0;

u140.style.cursor = 'pointer';
$axure.eventManager.click('u140', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ImmunizationRegistry.html');

}
});
gv_vAlignTable['u17'] = 'center';gv_vAlignTable['u222'] = 'center';gv_vAlignTable['u135'] = 'center';document.getElementById('u151_img').tabIndex = 0;

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
document.getElementById('u256_img').tabIndex = 0;
HookHover('u256', false);

u256.style.cursor = 'pointer';
$axure.eventManager.click('u256', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('UserList.html');

}
});
gv_vAlignTable['u229'] = 'center';gv_vAlignTable['u55'] = 'center';gv_vAlignTable['u101'] = 'center';gv_vAlignTable['u186'] = 'center';gv_vAlignTable['u14'] = 'top';document.getElementById('u105_img').tabIndex = 0;

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
gv_vAlignTable['u27'] = 'center';document.getElementById('u138_img').tabIndex = 0;

u138.style.cursor = 'pointer';
$axure.eventManager.click('u138', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ListDisclosure.html');

}
});
document.getElementById('u52_img').tabIndex = 0;

u52.style.cursor = 'pointer';
$axure.eventManager.click('u52', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('UserList.html');

}
});

$axure.eventManager.mouseover('u20', function(e) {
if (!IsTrueMouseOver('u20',e)) return;
if (true) {

	SetPanelVisibility('u15','','none',500);

}
});
gv_vAlignTable['u20'] = 'top';document.getElementById('u120_img').tabIndex = 0;

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
gv_vAlignTable['u152'] = 'center';
$axure.eventManager.mouseover('u6', function(e) {
if (!IsTrueMouseOver('u6',e)) return;
if (true) {

	SetPanelVisibility('u15','','none',500);

	BringToFront("u15");

}
});
gv_vAlignTable['u6'] = 'top';gv_vAlignTable['u205'] = 'top';gv_vAlignTable['u108'] = 'center';gv_vAlignTable['u247'] = 'top';gv_vAlignTable['u37'] = 'center';gv_vAlignTable['u238'] = 'center';gv_vAlignTable['u251'] = 'top';gv_vAlignTable['u62'] = 'center';gv_vAlignTable['u141'] = 'center';u11.tabIndex = 0;

u11.style.cursor = 'pointer';
$axure.eventManager.click('u11', function(e) {

if (true) {

	parent.location.href = 'Login.html';

}
});
gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u133'] = 'center';gv_vAlignTable['u200'] = 'top';
u34.style.cursor = 'pointer';
$axure.eventManager.click('u34', function(e) {

if (true) {

	SetPanelVisibility('u25','hidden','none',500);

SetWidgetRichText('u24', '<p style="text-align:right;"><span style="font-family:Arial;font-size:12px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">( Location C )</span></p>');

SetCheckState('u30', false);

SetCheckState('u32', false);

}
});
gv_vAlignTable['u68'] = 'center';gv_vAlignTable['u89'] = 'center';gv_vAlignTable['u184'] = 'center';gv_vAlignTable['u72'] = 'center';document.getElementById('u103_img').tabIndex = 0;

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
gv_vAlignTable['u164'] = 'center';gv_vAlignTable['u99'] = 'center';gv_vAlignTable['u112'] = 'center';gv_vAlignTable['u78'] = 'center';gv_vAlignTable['u57'] = 'center';gv_vAlignTable['u253'] = 'top';
$axure.eventManager.mouseover('u16', function(e) {
if (!IsTrueMouseOver('u16',e)) return;
if (true) {

	SetPanelVisibility('u15','','none',500);

}
});

$axure.eventManager.mouseout('u16', function(e) {
if (!IsTrueMouseOut('u16',e)) return;
if (true) {

	SetPanelVisibility('u15','hidden','none',500);

}
});
gv_vAlignTable['u203'] = 'top';gv_vAlignTable['u41'] = 'center';document.getElementById('u149_img').tabIndex = 0;

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
document.getElementById('u54_img').tabIndex = 0;

u54.style.cursor = 'pointer';
$axure.eventManager.click('u54', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('UserGroupList.html');

}
});
gv_vAlignTable['u118'] = 'center';gv_vAlignTable['u38'] = 'top';gv_vAlignTable['u176'] = 'center';gv_vAlignTable['u174'] = 'center';gv_vAlignTable['u216'] = 'center';document.getElementById('u128_img').tabIndex = 0;

u128.style.cursor = 'pointer';
$axure.eventManager.click('u128', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PatientReminder.html');

}
});
document.getElementById('u254_img').tabIndex = 0;
HookHover('u254', false);

u254.style.cursor = 'pointer';
$axure.eventManager.click('u254', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('UserList.html');

}
});
gv_vAlignTable['u51'] = 'center';gv_vAlignTable['u182'] = 'center';gv_vAlignTable['u249'] = 'center';gv_vAlignTable['u241'] = 'top';gv_vAlignTable['u252'] = 'top';
$axure.eventManager.mouseover('u10', function(e) {
if (!IsTrueMouseOver('u10',e)) return;
if (true) {

	SetPanelState('u25', 'pd0u25','none','',500,'none','',500);

	BringToFront("u25");

}
});
gv_vAlignTable['u10'] = 'top';u23.tabIndex = 0;

u23.style.cursor = 'pointer';
$axure.eventManager.click('u23', function(e) {

if (true) {

	parent.location.href = 'Login.html';

}
});

$axure.eventManager.mouseover('u23', function(e) {
if (!IsTrueMouseOver('u23',e)) return;
if (true) {

	SetPanelVisibility('u15','','none',500);

}
});
gv_vAlignTable['u23'] = 'top';document.getElementById('u144_img').tabIndex = 0;

u144.style.cursor = 'pointer';
$axure.eventManager.click('u144', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Intigrity.html');

}
});
gv_vAlignTable['u202'] = 'top';gv_vAlignTable['u166'] = 'center';document.getElementById('u82_img').tabIndex = 0;

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
document.getElementById('u36_img').tabIndex = 0;

u36.style.cursor = 'pointer';
$axure.eventManager.click('u36', function(e) {

if (true) {

	SetPanelVisibility('u25','hidden','none',500);

}
});

u30.style.cursor = 'pointer';
$axure.eventManager.click('u30', function(e) {

if (true) {

	SetPanelVisibility('u25','hidden','none',500);

SetWidgetRichText('u24', '<p style="text-align:right;"><span style="font-family:Arial;font-size:12px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">( Location A )</span></p>');

SetCheckState('u32', false);

SetCheckState('u34', false);

}
});
gv_vAlignTable['u95'] = 'center';document.getElementById('u61_img').tabIndex = 0;

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
gv_vAlignTable['u195'] = 'top';gv_vAlignTable['u116'] = 'center';gv_vAlignTable['u158'] = 'center';gv_vAlignTable['u74'] = 'center';gv_vAlignTable['u123'] = 'center';gv_vAlignTable['u114'] = 'center';gv_vAlignTable['u33'] = 'top';gv_vAlignTable['u160'] = 'center';gv_vAlignTable['u255'] = 'center';gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u127'] = 'center';gv_vAlignTable['u225'] = 'center';gv_vAlignTable['u43'] = 'center';gv_vAlignTable['u257'] = 'center';gv_vAlignTable['u169'] = 'center';gv_vAlignTable['u240'] = 'top';document.getElementById('u56_img').tabIndex = 0;

u56.style.cursor = 'pointer';
$axure.eventManager.click('u56', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('UserRights.html');

}
});
gv_vAlignTable['u150'] = 'center';document.getElementById('u142_img').tabIndex = 0;

u142.style.cursor = 'pointer';
$axure.eventManager.click('u142', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('OverdueImmunization.html');

}
});
gv_vAlignTable['u106'] = 'center';document.getElementById('u168_img').tabIndex = 0;

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
gv_vAlignTable['u227'] = 'top';gv_vAlignTable['u139'] = 'center';gv_vAlignTable['u87'] = 'center';gv_vAlignTable['u53'] = 'center';gv_vAlignTable['u104'] = 'center';gv_vAlignTable['u121'] = 'center';gv_vAlignTable['u211'] = 'center';gv_vAlignTable['u19'] = 'center';gv_vAlignTable['u242'] = 'top';gv_vAlignTable['u239'] = 'top';gv_vAlignTable['u97'] = 'center';document.getElementById('u63_img').tabIndex = 0;

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
gv_vAlignTable['u76'] = 'center';document.getElementById('u134_img').tabIndex = 0;

u134.style.cursor = 'pointer';
$axure.eventManager.click('u134', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PQRS_Report.html');

}
});
gv_vAlignTable['u81'] = 'center';gv_vAlignTable['u209'] = 'top';gv_vAlignTable['u190'] = 'center';gv_vAlignTable['u9'] = 'top';document.getElementById('u69_img').tabIndex = 0;

u69.style.cursor = 'pointer';
$axure.eventManager.click('u69', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PasswordSettings.html');

}
});
gv_vAlignTable['u234'] = 'top';gv_vAlignTable['u147'] = 'center';gv_vAlignTable['u91'] = 'center';gv_vAlignTable['u131'] = 'center';gv_vAlignTable['u64'] = 'center';gv_vAlignTable['u70'] = 'center';gv_vAlignTable['u24'] = 'top';gv_vAlignTable['u188'] = 'center';gv_vAlignTable['u162'] = 'center';gv_vAlignTable['u204'] = 'top';gv_vAlignTable['u13'] = 'top';document.getElementById('u113_img').tabIndex = 0;

u113.style.cursor = 'pointer';
$axure.eventManager.click('u113', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('AddPatient.html');

}
});
gv_vAlignTable['u29'] = 'center';document.getElementById('u132_img').tabIndex = 0;

u132.style.cursor = 'pointer';
$axure.eventManager.click('u132', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Automate_measure_Calculation.html');

}
});
gv_vAlignTable['u129'] = 'center';gv_vAlignTable['u171'] = 'center';gv_vAlignTable['u31'] = 'top';gv_vAlignTable['u232'] = 'center';gv_vAlignTable['u83'] = 'center';gv_vAlignTable['u178'] = 'center';gv_vAlignTable['u8'] = 'top';gv_vAlignTable['u3'] = 'center';document.getElementById('u96_img').tabIndex = 0;

u96.style.cursor = 'pointer';
$axure.eventManager.click('u96', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('RecordDisclosure.html');

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
gv_vAlignTable['u196'] = 'top';document.getElementById('u80_img').tabIndex = 0;

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
gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u93'] = 'center';gv_vAlignTable['u145'] = 'center';gv_vAlignTable['u12'] = 'top';gv_vAlignTable['u201'] = 'top';gv_vAlignTable['u199'] = 'top';gv_vAlignTable['u59'] = 'center';gv_vAlignTable['u137'] = 'center';
$axure.eventManager.mouseover('u18', function(e) {
if (!IsTrueMouseOver('u18',e)) return;
if (true) {

	SetPanelVisibility('u15','','none',500);

}
});
gv_vAlignTable['u45'] = 'center';u22.tabIndex = 0;

u22.style.cursor = 'pointer';
$axure.eventManager.click('u22', function(e) {

if (true) {

	NewWindow($axure.globalVariableProvider.getLinkUrl('ChangePassword.html'), "", "directories=0, height=245, location=0, menubar=0, resizable=0, scrollbars=0, status=0, toolbar=0, width=450, left=400, top=400", false, 450, 245);

}
});

$axure.eventManager.mouseover('u22', function(e) {
if (!IsTrueMouseOver('u22',e)) return;
if (true) {

	SetPanelVisibility('u15','','none',500);

}
});
gv_vAlignTable['u22'] = 'top';gv_vAlignTable['u143'] = 'center';gv_vAlignTable['u220'] = 'top';document.getElementById('u107_img').tabIndex = 0;

u107.style.cursor = 'pointer';
$axure.eventManager.click('u107', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u35'] = 'top';document.getElementById('u136_img').tabIndex = 0;

u136.style.cursor = 'pointer';
$axure.eventManager.click('u136', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Reports.html');

}
});
gv_vAlignTable['u218'] = 'center';gv_vAlignTable['u180'] = 'center';gv_vAlignTable['u194'] = 'center';