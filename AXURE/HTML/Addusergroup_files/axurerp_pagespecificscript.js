for(var i = 0; i < 194; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

widgetIdToShowFunction['u83'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u151', GetNum('0'), GetNum('162'),'none',500);

	MoveWidgetBy('u122', GetNum('0'), GetNum('162'),'none',500);

	MoveWidgetBy('u107', GetNum('0'), GetNum('162'),'none',500);

	SetPanelState('u100', 'pd0u100','fade','',0,'none','',500);

	SetPanelState('u100', 'pd1u100','none','',500,'fade','',0);

}

}

widgetIdToHideFunction['u83'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u151', GetNum('0'), GetNum('-162'),'none',500);

	MoveWidgetBy('u122', GetNum('0'), GetNum('-162'),'none',500);

	MoveWidgetBy('u107', GetNum('0'), GetNum('-162'),'none',500);

	SetPanelState('u100', 'pd1u100','fade','',0,'none','',500);

	SetPanelState('u100', 'pd0u100','none','',500,'fade','',0);

}

}

widgetIdToShowFunction['u108'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u151', GetNum('0'), GetNum('55'),'none',500);

	MoveWidgetBy('u122', GetNum('0'), GetNum('55'),'none',500);

	SetPanelState('u117', 'pd0u117','fade','',0,'none','',500);

	SetPanelState('u117', 'pd1u117','none','',500,'fade','',0);

}

}

widgetIdToHideFunction['u108'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u151', GetNum('0'), GetNum('-55'),'none',500);

	MoveWidgetBy('u122', GetNum('0'), GetNum('-55'),'none',500);

	SetPanelState('u117', 'pd1u117','fade','',0,'none','',500);

	SetPanelState('u117', 'pd0u117','none','',500,'fade','',0);

}

}

widgetIdToShowFunction['u47'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u63', GetNum('0'), GetNum('83'),'none',500);

	MoveWidgetBy('u82', GetNum('0'), GetNum('83'),'none',500);

	MoveWidgetBy('u151', GetNum('0'), GetNum('83'),'none',500);

	MoveWidgetBy('u122', GetNum('0'), GetNum('83'),'none',500);

	MoveWidgetBy('u107', GetNum('0'), GetNum('83'),'none',500);

	SetPanelState('u58', 'pd0u58','fade','',0,'none','',500);

	SetPanelState('u58', 'pd1u58','none','',500,'fade','',0);

}

}

widgetIdToHideFunction['u47'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u63', GetNum('0'), GetNum('-83'),'none',500);

	MoveWidgetBy('u82', GetNum('0'), GetNum('-83'),'none',500);

	MoveWidgetBy('u151', GetNum('0'), GetNum('-83'),'none',500);

	MoveWidgetBy('u122', GetNum('0'), GetNum('-83'),'none',500);

	MoveWidgetBy('u107', GetNum('0'), GetNum('-83'),'none',500);

	SetPanelState('u58', 'pd1u58','fade','',0,'none','',500);

	SetPanelState('u58', 'pd0u58','none','',500,'fade','',0);

}

}

widgetIdToShowFunction['u152'] = function() {
var e = windowEvent;

if (true) {

	SetPanelState('u165', 'pd0u165','fade','',0,'none','',500);

	SetPanelState('u165', 'pd1u165','none','',500,'fade','',0);

	MoveWidgetBy('u122', GetNum('0'), GetNum('109'),'none',500);

}

}

widgetIdToHideFunction['u152'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u122', GetNum('0'), GetNum('-109'),'none',500);

	SetPanelState('u165', 'pd1u165','fade','',0,'none','',500);

	SetPanelState('u165', 'pd0u165','none','',500,'fade','',0);

}

}

widgetIdToShowFunction['u123'] = function() {
var e = windowEvent;

if (true) {

	SetPanelState('u146', 'pd0u146','fade','',0,'none','',500);

	SetPanelState('u146', 'pd1u146','none','',500,'fade','',0);

}

}

widgetIdToHideFunction['u123'] = function() {
var e = windowEvent;

if (true) {

	SetPanelState('u146', 'pd1u146','fade','',0,'none','',500);

	SetPanelState('u146', 'pd0u146','none','',500,'fade','',0);

}

}

widgetIdToShowFunction['u64'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u82', GetNum('0'), GetNum('109'),'none',500);

	MoveWidgetBy('u151', GetNum('0'), GetNum('109'),'none',500);

	MoveWidgetBy('u122', GetNum('0'), GetNum('109'),'none',500);

	MoveWidgetBy('u107', GetNum('0'), GetNum('109'),'none',500);

	SetPanelState('u77', 'pd0u77','fade','',0,'none','',500);

	SetPanelState('u77', 'pd1u77','none','',500,'fade','',0);

}

}

widgetIdToHideFunction['u64'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u82', GetNum('0'), GetNum('-109'),'none',500);

	MoveWidgetBy('u151', GetNum('0'), GetNum('-109'),'none',500);

	MoveWidgetBy('u122', GetNum('0'), GetNum('-109'),'none',500);

	MoveWidgetBy('u107', GetNum('0'), GetNum('-109'),'none',500);

	SetPanelState('u77', 'pd1u77','fade','',500,'none','',500);

	SetPanelState('u77', 'pd0u77','none','',500,'fade','',500);

}

}
u21.tabIndex = 0;

u21.style.cursor = 'pointer';
$axure.eventManager.click('u21', function(e) {

if (true) {

	parent.location.href = 'Login.html';

}
});

$axure.eventManager.mouseover('u21', function(e) {
if (!IsTrueMouseOver('u21',e)) return;
if (true) {

	SetPanelVisibility('u13','','none',500);

}
});
gv_vAlignTable['u21'] = 'top';
u32.style.cursor = 'pointer';
$axure.eventManager.click('u32', function(e) {

if (true) {

	SetPanelVisibility('u23','hidden','none',500);

SetWidgetRichText('u22', '<p style="text-align:right;"><span style="font-family:Arial;font-size:12px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">( Location C )</span></p>');

SetCheckState('u28', false);

SetCheckState('u30', false);

}
});
gv_vAlignTable['u156'] = 'center';document.getElementById('u130_img').tabIndex = 0;

u130.style.cursor = 'pointer';
$axure.eventManager.click('u130', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Automate_measure_Calculation.html');

}
});
gv_vAlignTable['u7'] = 'top';document.getElementById('u2_img').tabIndex = 0;

u2.style.cursor = 'pointer';
$axure.eventManager.click('u2', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u79'] = 'center';
$axure.eventManager.mouseover('u4', function(e) {
if (!IsTrueMouseOver('u4',e)) return;
if (true) {

	SetPanelVisibility('u13','','none',500);

	BringToFront("u13");

}
});
gv_vAlignTable['u4'] = 'top';document.getElementById('u140_img').tabIndex = 0;

u140.style.cursor = 'pointer';
$axure.eventManager.click('u140', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('OverdueImmunization.html');

}
});
gv_vAlignTable['u17'] = 'center';gv_vAlignTable['u135'] = 'center';gv_vAlignTable['u55'] = 'center';document.getElementById('u101_img').tabIndex = 0;

u101.style.cursor = 'pointer';
$axure.eventManager.click('u101', function(e) {

if ((GetWidgetVisibility('u83')) == (true)) {

	SetPanelVisibility('u83','hidden','none',500);

	SetPanelVisibility('u152','hidden','none',500);

	SetPanelVisibility('u47','hidden','none',500);

	SetPanelVisibility('u64','hidden','none',500);

	SetPanelVisibility('u123','hidden','none',500);

	SetPanelVisibility('u108','hidden','none',500);

}
});
gv_vAlignTable['u186'] = 'top';
$axure.eventManager.mouseover('u14', function(e) {
if (!IsTrueMouseOver('u14',e)) return;
if (true) {

	SetPanelVisibility('u13','','none',500);

}
});

$axure.eventManager.mouseout('u14', function(e) {
if (!IsTrueMouseOut('u14',e)) return;
if (true) {

	SetPanelVisibility('u13','hidden','none',500);

}
});
document.getElementById('u105_img').tabIndex = 0;

u105.style.cursor = 'pointer';
$axure.eventManager.click('u105', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u27'] = 'center';document.getElementById('u138_img').tabIndex = 0;

u138.style.cursor = 'pointer';
$axure.eventManager.click('u138', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ImmunizationRegistry.html');

}
});
document.getElementById('u52_img').tabIndex = 0;

u52.style.cursor = 'pointer';
$axure.eventManager.click('u52', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('UserGroupList.html');

}
});
u20.tabIndex = 0;

u20.style.cursor = 'pointer';
$axure.eventManager.click('u20', function(e) {

if (true) {

	NewWindow($axure.globalVariableProvider.getLinkUrl('ChangePassword.html'), "", "directories=0, height=245, location=0, menubar=0, resizable=0, scrollbars=0, status=0, toolbar=0, width=450, left=400, top=400", false, 450, 245);

}
});

$axure.eventManager.mouseover('u20', function(e) {
if (!IsTrueMouseOver('u20',e)) return;
if (true) {

	SetPanelVisibility('u13','','none',500);

}
});
gv_vAlignTable['u20'] = 'top';document.getElementById('u67_img').tabIndex = 0;

u67.style.cursor = 'pointer';
$axure.eventManager.click('u67', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PasswordSettings.html');

}
});
document.getElementById('u120_img').tabIndex = 0;

u120.style.cursor = 'pointer';
$axure.eventManager.click('u120', function(e) {

if ((GetWidgetVisibility('u108')) == (false)) {

	SetPanelVisibility('u108','','fade',500);

	SetPanelVisibility('u152','hidden','none',500);

	SetPanelVisibility('u47','hidden','none',500);

	SetPanelVisibility('u64','hidden','none',500);

	SetPanelVisibility('u123','hidden','none',500);

	SetPanelVisibility('u83','hidden','none',500);

}
});
gv_vAlignTable['u110'] = 'center';gv_vAlignTable['u6'] = 'top';gv_vAlignTable['u62'] = 'center';gv_vAlignTable['u141'] = 'center';gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u133'] = 'center';document.getElementById('u34_img').tabIndex = 0;

u34.style.cursor = 'pointer';
$axure.eventManager.click('u34', function(e) {

if (true) {

	SetPanelVisibility('u23','hidden','none',500);

}
});
gv_vAlignTable['u68'] = 'center';gv_vAlignTable['u89'] = 'center';gv_vAlignTable['u184'] = 'top';gv_vAlignTable['u72'] = 'center';document.getElementById('u103_img').tabIndex = 0;

u103.style.cursor = 'pointer';
$axure.eventManager.click('u103', function(e) {

if ((GetWidgetVisibility('u83')) == (false)) {

	SetPanelVisibility('u83','','fade',500);

	SetPanelVisibility('u152','hidden','none',500);

	SetPanelVisibility('u47','hidden','none',500);

	SetPanelVisibility('u64','hidden','none',500);

	SetPanelVisibility('u123','hidden','none',500);

	SetPanelVisibility('u108','hidden','none',500);

}
});
gv_vAlignTable['u164'] = 'center';gv_vAlignTable['u99'] = 'center';gv_vAlignTable['u66'] = 'center';gv_vAlignTable['u112'] = 'center';document.getElementById('u78_img').tabIndex = 0;

u78.style.cursor = 'pointer';
$axure.eventManager.click('u78', function(e) {

if ((GetWidgetVisibility('u64')) == (true)) {

	SetPanelVisibility('u64','hidden','none',500);

	SetPanelVisibility('u152','hidden','none',500);

	SetPanelVisibility('u47','hidden','none',500);

	SetPanelVisibility('u83','hidden','none',500);

	SetPanelVisibility('u123','hidden','none',500);

	SetPanelVisibility('u108','hidden','none',500);

}
});
gv_vAlignTable['u57'] = 'center';gv_vAlignTable['u191'] = 'center';gv_vAlignTable['u119'] = 'center';
$axure.eventManager.mouseover('u16', function(e) {
if (!IsTrueMouseOver('u16',e)) return;
if (true) {

	SetPanelVisibility('u13','','none',500);

}
});
gv_vAlignTable['u125'] = 'center';gv_vAlignTable['u41'] = 'center';gv_vAlignTable['u172'] = 'center';document.getElementById('u149_img').tabIndex = 0;

u149.style.cursor = 'pointer';
$axure.eventManager.click('u149', function(e) {

if ((GetWidgetVisibility('u123')) == (false)) {

	SetPanelVisibility('u123','','fade',500);

	SetPanelVisibility('u83','hidden','none',500);

	SetPanelVisibility('u47','hidden','none',500);

	SetPanelVisibility('u64','hidden','none',500);

	SetPanelVisibility('u152','hidden','none',500);

}
});
document.getElementById('u54_img').tabIndex = 0;

u54.style.cursor = 'pointer';
$axure.eventManager.click('u54', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('UserRights.html');

}
});
document.getElementById('u118_img').tabIndex = 0;

u118.style.cursor = 'pointer';
$axure.eventManager.click('u118', function(e) {

if ((GetWidgetVisibility('u108')) == (true)) {

	SetPanelVisibility('u108','hidden','none',500);

	SetPanelVisibility('u152','hidden','none',500);

	SetPanelVisibility('u47','hidden','none',500);

	SetPanelVisibility('u64','hidden','none',500);

	SetPanelVisibility('u123','hidden','none',500);

	SetPanelVisibility('u83','hidden','none',500);

}
});
gv_vAlignTable['u189'] = 'top';gv_vAlignTable['u176'] = 'top';gv_vAlignTable['u174'] = 'center';document.getElementById('u128_img').tabIndex = 0;

u128.style.cursor = 'pointer';
$axure.eventManager.click('u128', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PatientList.html');

}
});
gv_vAlignTable['u85'] = 'center';gv_vAlignTable['u51'] = 'center';gv_vAlignTable['u182'] = 'center';gv_vAlignTable['u10'] = 'top';document.getElementById('u144_img').tabIndex = 0;

u144.style.cursor = 'pointer';
$axure.eventManager.click('u144', function(e) {

if (true) {

	SetPanelVisibility('u123','toggle','none',500);

	SetPanelVisibility('u47','hidden','none',500);

	SetPanelVisibility('u64','hidden','none',500);

}
});
document.getElementById('u166_img').tabIndex = 0;

u166.style.cursor = 'pointer';
$axure.eventManager.click('u166', function(e) {

if ((GetWidgetVisibility('u152')) == (true)) {

	SetPanelVisibility('u152','hidden','none',500);

	SetPanelVisibility('u83','hidden','none',500);

	SetPanelVisibility('u47','hidden','none',500);

	SetPanelVisibility('u64','hidden','none',500);

	SetPanelVisibility('u123','hidden','none',500);

}
});
gv_vAlignTable['u36'] = 'top';
u30.style.cursor = 'pointer';
$axure.eventManager.click('u30', function(e) {

if (true) {

	SetPanelVisibility('u23','hidden','none',500);

SetWidgetRichText('u22', '<p style="text-align:right;"><span style="font-family:Arial;font-size:12px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">( Location B )</span></p>');

SetCheckState('u28', false);

SetCheckState('u32', false);

}
});
gv_vAlignTable['u95'] = 'center';document.getElementById('u61_img').tabIndex = 0;

u61.style.cursor = 'pointer';
$axure.eventManager.click('u61', function(e) {

if ((GetWidgetVisibility('u47')) == (false)) {

	SetPanelVisibility('u47','','fade',500);

	SetPanelVisibility('u152','hidden','none',500);

	SetPanelVisibility('u64','hidden','none',500);

	SetPanelVisibility('u83','hidden','none',500);

	SetPanelVisibility('u123','hidden','none',500);

	SetPanelVisibility('u108','hidden','none',500);

}
});
gv_vAlignTable['u116'] = 'center';gv_vAlignTable['u158'] = 'center';gv_vAlignTable['u74'] = 'center';gv_vAlignTable['u114'] = 'center';gv_vAlignTable['u33'] = 'top';gv_vAlignTable['u160'] = 'center';document.getElementById('u126_img').tabIndex = 0;

u126.style.cursor = 'pointer';
$axure.eventManager.click('u126', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PatientReminder.html');

}
});
gv_vAlignTable['u5'] = 'top';gv_vAlignTable['u127'] = 'center';gv_vAlignTable['u43'] = 'center';gv_vAlignTable['u169'] = 'center';gv_vAlignTable['u150'] = 'center';document.getElementById('u142_img').tabIndex = 0;

u142.style.cursor = 'pointer';
$axure.eventManager.click('u142', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Intigrity.html');

}
});
gv_vAlignTable['u106'] = 'center';document.getElementById('u168_img').tabIndex = 0;

u168.style.cursor = 'pointer';
$axure.eventManager.click('u168', function(e) {

if ((GetWidgetVisibility('u152')) == (false)) {

	SetPanelVisibility('u152','','fade',500);

	SetPanelVisibility('u83','hidden','none',500);

	SetPanelVisibility('u47','hidden','none',500);

	SetPanelVisibility('u64','hidden','none',500);

	SetPanelVisibility('u123','hidden','none',500);

}
});
gv_vAlignTable['u154'] = 'center';gv_vAlignTable['u139'] = 'center';gv_vAlignTable['u87'] = 'center';gv_vAlignTable['u53'] = 'center';gv_vAlignTable['u193'] = 'center';gv_vAlignTable['u104'] = 'center';document.getElementById('u192_img').tabIndex = 0;
HookHover('u192', false);

u192.style.cursor = 'pointer';
$axure.eventManager.click('u192', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('UserGroupList.html');

}
});
gv_vAlignTable['u121'] = 'center';
$axure.eventManager.mouseover('u19', function(e) {
if (!IsTrueMouseOver('u19',e)) return;
if (true) {

	SetPanelVisibility('u13','','none',500);

}
});
gv_vAlignTable['u19'] = 'top';document.getElementById('u50_img').tabIndex = 0;

u50.style.cursor = 'pointer';
$axure.eventManager.click('u50', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('UserList.html');

}
});
gv_vAlignTable['u97'] = 'center';gv_vAlignTable['u76'] = 'center';document.getElementById('u134_img').tabIndex = 0;

u134.style.cursor = 'pointer';
$axure.eventManager.click('u134', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Reports.html');

}
});
gv_vAlignTable['u81'] = 'center';document.getElementById('u94_img').tabIndex = 0;

u94.style.cursor = 'pointer';
$axure.eventManager.click('u94', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('RecordDisclosure.html');

}
});
gv_vAlignTable['u60'] = 'center';document.getElementById('u190_img').tabIndex = 0;
HookHover('u190', false);

u190.style.cursor = 'pointer';
$axure.eventManager.click('u190', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('UserGroupList.html');

}
});
gv_vAlignTable['u102'] = 'center';u9.tabIndex = 0;

u9.style.cursor = 'pointer';
$axure.eventManager.click('u9', function(e) {

if (true) {

	parent.location.href = 'Login.html';

}
});
gv_vAlignTable['u9'] = 'top';document.getElementById('u147_img').tabIndex = 0;

u147.style.cursor = 'pointer';
$axure.eventManager.click('u147', function(e) {

if ((GetWidgetVisibility('u123')) == (true)) {

	SetPanelVisibility('u123','hidden','none',500);

	SetPanelVisibility('u83','hidden','none',500);

	SetPanelVisibility('u47','hidden','none',500);

	SetPanelVisibility('u64','hidden','none',500);

	SetPanelVisibility('u152','hidden','none',500);

}
});
gv_vAlignTable['u91'] = 'center';gv_vAlignTable['u131'] = 'center';gv_vAlignTable['u70'] = 'center';gv_vAlignTable['u188'] = 'center';gv_vAlignTable['u162'] = 'center';document.getElementById('u113_img').tabIndex = 0;

u113.style.cursor = 'pointer';
$axure.eventManager.click('u113', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('SearchPatient.html');

}
});
gv_vAlignTable['u29'] = 'top';document.getElementById('u111_img').tabIndex = 0;

u111.style.cursor = 'pointer';
$axure.eventManager.click('u111', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('AddPatient.html');

}
});
document.getElementById('u132_img').tabIndex = 0;

u132.style.cursor = 'pointer';
$axure.eventManager.click('u132', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PQRS_Report.html');

}
});
gv_vAlignTable['u129'] = 'center';gv_vAlignTable['u39'] = 'center';gv_vAlignTable['u31'] = 'top';gv_vAlignTable['u178'] = 'center';
$axure.eventManager.mouseover('u8', function(e) {
if (!IsTrueMouseOver('u8',e)) return;
if (true) {

	SetPanelState('u23', 'pd0u23','none','',500,'none','',500);

	BringToFront("u23");

}
});
gv_vAlignTable['u8'] = 'top';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u15'] = 'center';gv_vAlignTable['u49'] = 'center';document.getElementById('u80_img').tabIndex = 0;

u80.style.cursor = 'pointer';
$axure.eventManager.click('u80', function(e) {

if ((GetWidgetVisibility('u64')) == (false)) {

	SetPanelVisibility('u64','','fade',500);

	SetPanelVisibility('u152','hidden','none',500);

	SetPanelVisibility('u47','hidden','none',500);

	SetPanelVisibility('u83','hidden','none',500);

	SetPanelVisibility('u123','hidden','none',500);

	SetPanelVisibility('u108','hidden','none',500);

}
});
gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u148'] = 'center';gv_vAlignTable['u93'] = 'center';gv_vAlignTable['u167'] = 'center';gv_vAlignTable['u145'] = 'center';gv_vAlignTable['u12'] = 'top';gv_vAlignTable['u25'] = 'center';document.getElementById('u59_img').tabIndex = 0;

u59.style.cursor = 'pointer';
$axure.eventManager.click('u59', function(e) {

if ((GetWidgetVisibility('u47')) == (true)) {

	SetPanelVisibility('u47','hidden','none',500);

	SetPanelVisibility('u152','hidden','none',500);

	SetPanelVisibility('u64','hidden','none',500);

	SetPanelVisibility('u83','hidden','none',500);

	SetPanelVisibility('u123','hidden','none',500);

	SetPanelVisibility('u108','hidden','none',500);

}
});
gv_vAlignTable['u137'] = 'center';
$axure.eventManager.mouseover('u18', function(e) {
if (!IsTrueMouseOver('u18',e)) return;
if (true) {

	SetPanelVisibility('u13','','none',500);

}
});
gv_vAlignTable['u18'] = 'top';gv_vAlignTable['u22'] = 'top';gv_vAlignTable['u143'] = 'center';gv_vAlignTable['u35'] = 'center';document.getElementById('u136_img').tabIndex = 0;

u136.style.cursor = 'pointer';
$axure.eventManager.click('u136', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ListDisclosure.html');

}
});
gv_vAlignTable['u180'] = 'center';
u28.style.cursor = 'pointer';
$axure.eventManager.click('u28', function(e) {

if (true) {

	SetPanelVisibility('u23','hidden','none',500);

SetWidgetRichText('u22', '<p style="text-align:right;"><span style="font-family:Arial;font-size:12px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">( Location A )</span></p>');

SetCheckState('u30', false);

SetCheckState('u32', false);

}
});
