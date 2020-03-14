for(var i = 0; i < 257; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

widgetIdToShowFunction['u129'] = function() {
var e = windowEvent;

if (true) {

	SetPanelState('u152', 'pd0u152','fade','',0,'none','',500);

	SetPanelState('u152', 'pd1u152','none','',500,'fade','',0);

}

}

widgetIdToHideFunction['u129'] = function() {
var e = windowEvent;

if (true) {

	SetPanelState('u152', 'pd1u152','fade','',0,'none','',500);

	SetPanelState('u152', 'pd0u152','none','',500,'fade','',0);

}

}

widgetIdToShowFunction['u89'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u157', GetNum('0'), GetNum('162'),'none',500);

	MoveWidgetBy('u128', GetNum('0'), GetNum('162'),'none',500);

	MoveWidgetBy('u113', GetNum('0'), GetNum('162'),'none',500);

	SetPanelState('u106', 'pd0u106','fade','',0,'none','',500);

	SetPanelState('u106', 'pd1u106','none','',500,'fade','',0);

}

}

widgetIdToHideFunction['u89'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u157', GetNum('0'), GetNum('-162'),'none',500);

	MoveWidgetBy('u128', GetNum('0'), GetNum('-162'),'none',500);

	MoveWidgetBy('u113', GetNum('0'), GetNum('-162'),'none',500);

	SetPanelState('u106', 'pd1u106','fade','',0,'none','',500);

	SetPanelState('u106', 'pd0u106','none','',500,'fade','',0);

}

}

widgetIdToShowFunction['u158'] = function() {
var e = windowEvent;

if (true) {

	SetPanelState('u171', 'pd0u171','fade','',0,'none','',500);

	SetPanelState('u171', 'pd1u171','none','',500,'fade','',0);

	MoveWidgetBy('u128', GetNum('0'), GetNum('109'),'none',500);

}

}

widgetIdToHideFunction['u158'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u128', GetNum('0'), GetNum('-109'),'none',500);

	SetPanelState('u171', 'pd1u171','fade','',0,'none','',500);

	SetPanelState('u171', 'pd0u171','none','',500,'fade','',0);

}

}

widgetIdToShowFunction['u114'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u157', GetNum('0'), GetNum('55'),'none',500);

	MoveWidgetBy('u128', GetNum('0'), GetNum('55'),'none',500);

	SetPanelState('u123', 'pd0u123','fade','',0,'none','',500);

	SetPanelState('u123', 'pd1u123','none','',500,'fade','',0);

}

}

widgetIdToHideFunction['u114'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u157', GetNum('0'), GetNum('-55'),'none',500);

	MoveWidgetBy('u128', GetNum('0'), GetNum('-55'),'none',500);

	SetPanelState('u123', 'pd1u123','fade','',0,'none','',500);

	SetPanelState('u123', 'pd0u123','none','',500,'fade','',0);

}

}

widgetIdToShowFunction['u53'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u69', GetNum('0'), GetNum('83'),'none',500);

	MoveWidgetBy('u88', GetNum('0'), GetNum('83'),'none',500);

	MoveWidgetBy('u157', GetNum('0'), GetNum('83'),'none',500);

	MoveWidgetBy('u128', GetNum('0'), GetNum('83'),'none',500);

	MoveWidgetBy('u113', GetNum('0'), GetNum('83'),'none',500);

	SetPanelState('u64', 'pd0u64','fade','',0,'none','',500);

	SetPanelState('u64', 'pd1u64','none','',500,'fade','',0);

}

}

widgetIdToHideFunction['u53'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u69', GetNum('0'), GetNum('-83'),'none',500);

	MoveWidgetBy('u88', GetNum('0'), GetNum('-83'),'none',500);

	MoveWidgetBy('u157', GetNum('0'), GetNum('-83'),'none',500);

	MoveWidgetBy('u128', GetNum('0'), GetNum('-83'),'none',500);

	MoveWidgetBy('u113', GetNum('0'), GetNum('-83'),'none',500);

	SetPanelState('u64', 'pd1u64','fade','',0,'none','',500);

	SetPanelState('u64', 'pd0u64','none','',500,'fade','',0);

}

}

widgetIdToShowFunction['u70'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u88', GetNum('0'), GetNum('109'),'none',500);

	MoveWidgetBy('u157', GetNum('0'), GetNum('109'),'none',500);

	MoveWidgetBy('u128', GetNum('0'), GetNum('109'),'none',500);

	MoveWidgetBy('u113', GetNum('0'), GetNum('109'),'none',500);

	SetPanelState('u83', 'pd0u83','fade','',0,'none','',500);

	SetPanelState('u83', 'pd1u83','none','',500,'fade','',0);

}

}

widgetIdToHideFunction['u70'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u88', GetNum('0'), GetNum('-109'),'none',500);

	MoveWidgetBy('u157', GetNum('0'), GetNum('-109'),'none',500);

	MoveWidgetBy('u128', GetNum('0'), GetNum('-109'),'none',500);

	MoveWidgetBy('u113', GetNum('0'), GetNum('-109'),'none',500);

	SetPanelState('u83', 'pd1u83','fade','',500,'none','',500);

	SetPanelState('u83', 'pd0u83','none','',500,'fade','',500);

}

}

if (bIE) document.getElementById('u203').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u203'); });
else {
    document.getElementById('u203').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u203'); }, true);
    document.getElementById('u203').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u203'); }, true);
}

widgetIdToDragFunction['u203'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u203',widgetDragInfo.xDelta,widgetDragInfo.yDelta,'none',500);

	BringToFront("u203");

}

}
gv_vAlignTable['u122'] = 'center';u21.tabIndex = 0;

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
document.getElementById('u243_img').tabIndex = 0;

u243.style.cursor = 'pointer';
$axure.eventManager.click('u243', function(e) {

if (true) {

SetWidgetSelected('u243');
SetWidgetNotSelected('u245');
;

;

}
});
gv_vAlignTable['u156'] = 'center';gv_vAlignTable['u207'] = 'center';gv_vAlignTable['u7'] = 'top';document.getElementById('u2_img').tabIndex = 0;

u2.style.cursor = 'pointer';
$axure.eventManager.click('u2', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});

$axure.eventManager.mouseover('u4', function(e) {
if (!IsTrueMouseOver('u4',e)) return;
if (true) {

	SetPanelVisibility('u13','','none',500);

	BringToFront("u13");

}
});
gv_vAlignTable['u4'] = 'top';document.getElementById('u153_img').tabIndex = 0;

u153.style.cursor = 'pointer';
$axure.eventManager.click('u153', function(e) {

if ((GetWidgetVisibility('u129')) == (true)) {

	SetPanelVisibility('u129','hidden','none',500);

	SetPanelVisibility('u89','hidden','none',500);

	SetPanelVisibility('u53','hidden','none',500);

	SetPanelVisibility('u70','hidden','none',500);

	SetPanelVisibility('u158','hidden','none',500);

}
});
document.getElementById('u140_img').tabIndex = 0;

u140.style.cursor = 'pointer';
$axure.eventManager.click('u140', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Reports.html');

}
});
gv_vAlignTable['u17'] = 'center';gv_vAlignTable['u135'] = 'center';gv_vAlignTable['u151'] = 'center';gv_vAlignTable['u212'] = 'center';gv_vAlignTable['u256'] = 'top';gv_vAlignTable['u229'] = 'center';gv_vAlignTable['u55'] = 'center';gv_vAlignTable['u101'] = 'center';
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
gv_vAlignTable['u105'] = 'center';gv_vAlignTable['u27'] = 'center';gv_vAlignTable['u235'] = 'top';document.getElementById('u138_img').tabIndex = 0;

u138.style.cursor = 'pointer';
$axure.eventManager.click('u138', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PQRS_Report.html');

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

if ((GetWidgetVisibility('u53')) == (false)) {

	SetPanelVisibility('u53','','fade',500);

	SetPanelVisibility('u158','hidden','none',500);

	SetPanelVisibility('u70','hidden','none',500);

	SetPanelVisibility('u89','hidden','none',500);

	SetPanelVisibility('u129','hidden','none',500);

	SetPanelVisibility('u114','hidden','none',500);

}
});
document.getElementById('u65_img').tabIndex = 0;

u65.style.cursor = 'pointer';
$axure.eventManager.click('u65', function(e) {

if ((GetWidgetVisibility('u53')) == (true)) {

	SetPanelVisibility('u53','hidden','none',500);

	SetPanelVisibility('u158','hidden','none',500);

	SetPanelVisibility('u70','hidden','none',500);

	SetPanelVisibility('u89','hidden','none',500);

	SetPanelVisibility('u129','hidden','none',500);

	SetPanelVisibility('u114','hidden','none',500);

}
});
gv_vAlignTable['u120'] = 'center';gv_vAlignTable['u110'] = 'center';gv_vAlignTable['u6'] = 'top';gv_vAlignTable['u205'] = 'center';gv_vAlignTable['u108'] = 'center';gv_vAlignTable['u238'] = 'top';gv_vAlignTable['u251'] = 'top';gv_vAlignTable['u141'] = 'center';gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u133'] = 'center';document.getElementById('u34_img').tabIndex = 0;

u34.style.cursor = 'pointer';
$axure.eventManager.click('u34', function(e) {

if (true) {

	SetPanelVisibility('u23','hidden','none',500);

}
});
gv_vAlignTable['u68'] = 'center';gv_vAlignTable['u47'] = 'center';document.getElementById('u213_img').tabIndex = 0;
HookClick('u213', false);

u213.style.cursor = 'pointer';
$axure.eventManager.click('u213', function(e) {

if (true) {

	SetPanelVisibility('u203','hidden','none',500);

	SetPanelVisibility('u255','','none',500);

}
});
gv_vAlignTable['u72'] = 'center';gv_vAlignTable['u103'] = 'center';gv_vAlignTable['u164'] = 'center';gv_vAlignTable['u99'] = 'center';gv_vAlignTable['u233'] = 'top';gv_vAlignTable['u66'] = 'center';gv_vAlignTable['u112'] = 'center';gv_vAlignTable['u78'] = 'center';gv_vAlignTable['u231'] = 'center';gv_vAlignTable['u57'] = 'center';gv_vAlignTable['u191'] = 'top';document.getElementById('u119_img').tabIndex = 0;

u119.style.cursor = 'pointer';
$axure.eventManager.click('u119', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('SearchPatient.html');

}
});

$axure.eventManager.mouseover('u16', function(e) {
if (!IsTrueMouseOver('u16',e)) return;
if (true) {

	SetPanelVisibility('u13','','none',500);

}
});
gv_vAlignTable['u125'] = 'center';gv_vAlignTable['u41'] = 'center';document.getElementById('u172_img').tabIndex = 0;

u172.style.cursor = 'pointer';
$axure.eventManager.click('u172', function(e) {

if ((GetWidgetVisibility('u158')) == (true)) {

	SetPanelVisibility('u158','hidden','none',500);

	SetPanelVisibility('u89','hidden','none',500);

	SetPanelVisibility('u53','hidden','none',500);

	SetPanelVisibility('u70','hidden','none',500);

	SetPanelVisibility('u129','hidden','none',500);

}
});
gv_vAlignTable['u246'] = 'center';gv_vAlignTable['u149'] = 'center';gv_vAlignTable['u118'] = 'center';
u197.style.cursor = 'pointer';
$axure.eventManager.click('u197', function(e) {

if (true) {

	SetPanelVisibility('u203','','none',500);

	SetPanelVisibility('u201','hidden','none',500);

}
});
gv_vAlignTable['u189'] = 'top';document.getElementById('u174_img').tabIndex = 0;

u174.style.cursor = 'pointer';
$axure.eventManager.click('u174', function(e) {

if ((GetWidgetVisibility('u158')) == (false)) {

	SetPanelVisibility('u158','','fade',500);

	SetPanelVisibility('u89','hidden','none',500);

	SetPanelVisibility('u53','hidden','none',500);

	SetPanelVisibility('u70','hidden','none',500);

	SetPanelVisibility('u129','hidden','none',500);

}
});
gv_vAlignTable['u216'] = 'center';gv_vAlignTable['u85'] = 'center';gv_vAlignTable['u51'] = 'center';gv_vAlignTable['u252'] = 'top';gv_vAlignTable['u10'] = 'top';document.getElementById('u100_img').tabIndex = 0;

u100.style.cursor = 'pointer';
$axure.eventManager.click('u100', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('RecordDisclosure.html');

}
});
document.getElementById('u144_img').tabIndex = 0;

u144.style.cursor = 'pointer';
$axure.eventManager.click('u144', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ImmunizationRegistry.html');

}
});
gv_vAlignTable['u202'] = 'top';gv_vAlignTable['u166'] = 'center';gv_vAlignTable['u82'] = 'center';gv_vAlignTable['u36'] = 'top';
u30.style.cursor = 'pointer';
$axure.eventManager.click('u30', function(e) {

if (true) {

	SetPanelVisibility('u23','hidden','none',500);

SetWidgetRichText('u22', '<p style="text-align:right;"><span style="font-family:Arial;font-size:12px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">( Location B )</span></p>');

SetCheckState('u28', false);

SetCheckState('u32', false);

}
});
gv_vAlignTable['u95'] = 'center';gv_vAlignTable['u61'] = 'center';document.getElementById('u195_img').tabIndex = 0;

u195.style.cursor = 'pointer';
$axure.eventManager.click('u195', function(e) {

if (true) {

	SetPanelVisibility('u203','','none',500);

	SetPanelVisibility('u201','hidden','none',500);

}
});
gv_vAlignTable['u116'] = 'center';gv_vAlignTable['u74'] = 'center';gv_vAlignTable['u223'] = 'center';gv_vAlignTable['u33'] = 'top';gv_vAlignTable['u160'] = 'center';gv_vAlignTable['u221'] = 'center';document.getElementById('u126_img').tabIndex = 0;

u126.style.cursor = 'pointer';
$axure.eventManager.click('u126', function(e) {

if ((GetWidgetVisibility('u114')) == (false)) {

	SetPanelVisibility('u114','','fade',500);

	SetPanelVisibility('u158','hidden','none',500);

	SetPanelVisibility('u53','hidden','none',500);

	SetPanelVisibility('u70','hidden','none',500);

	SetPanelVisibility('u129','hidden','none',500);

	SetPanelVisibility('u89','hidden','none',500);

}
});
gv_vAlignTable['u181'] = 'center';document.getElementById('u198_img').tabIndex = 0;

u198.style.cursor = 'pointer';
$axure.eventManager.click('u198', function(e) {

if (true) {

	SetPanelVisibility('u201','','none',500);

}
});
gv_vAlignTable['u5'] = 'top';gv_vAlignTable['u214'] = 'center';gv_vAlignTable['u127'] = 'center';gv_vAlignTable['u225'] = 'center';gv_vAlignTable['u43'] = 'center';gv_vAlignTable['u240'] = 'top';document.getElementById('u56_img').tabIndex = 0;

u56.style.cursor = 'pointer';
$axure.eventManager.click('u56', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('UserList.html');

}
});
document.getElementById('u150_img').tabIndex = 0;

u150.style.cursor = 'pointer';
$axure.eventManager.click('u150', function(e) {

if (true) {

	SetPanelVisibility('u129','toggle','none',500);

	SetPanelVisibility('u53','hidden','none',500);

	SetPanelVisibility('u70','hidden','none',500);

}
});
gv_vAlignTable['u187'] = 'top';document.getElementById('u142_img').tabIndex = 0;

u142.style.cursor = 'pointer';
$axure.eventManager.click('u142', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ListDisclosure.html');

}
});
gv_vAlignTable['u168'] = 'center';gv_vAlignTable['u154'] = 'center';gv_vAlignTable['u227'] = 'center';gv_vAlignTable['u139'] = 'center';gv_vAlignTable['u87'] = 'center';gv_vAlignTable['u193'] = 'center';gv_vAlignTable['u250'] = 'center';
$axure.eventManager.mouseover('u19', function(e) {
if (!IsTrueMouseOver('u19',e)) return;
if (true) {

	SetPanelVisibility('u13','','none',500);

}
});
gv_vAlignTable['u19'] = 'top';document.getElementById('u155_img').tabIndex = 0;

u155.style.cursor = 'pointer';
$axure.eventManager.click('u155', function(e) {

if ((GetWidgetVisibility('u129')) == (false)) {

	SetPanelVisibility('u129','','fade',500);

	SetPanelVisibility('u89','hidden','none',500);

	SetPanelVisibility('u53','hidden','none',500);

	SetPanelVisibility('u70','hidden','none',500);

	SetPanelVisibility('u158','hidden','none',500);

}
});
document.getElementById('u109_img').tabIndex = 0;

u109.style.cursor = 'pointer';
$axure.eventManager.click('u109', function(e) {

if ((GetWidgetVisibility('u89')) == (false)) {

	SetPanelVisibility('u89','','fade',500);

	SetPanelVisibility('u158','hidden','none',500);

	SetPanelVisibility('u53','hidden','none',500);

	SetPanelVisibility('u70','hidden','none',500);

	SetPanelVisibility('u129','hidden','none',500);

	SetPanelVisibility('u114','hidden','none',500);

}
});
document.getElementById('u84_img').tabIndex = 0;

u84.style.cursor = 'pointer';
$axure.eventManager.click('u84', function(e) {

if ((GetWidgetVisibility('u70')) == (true)) {

	SetPanelVisibility('u70','hidden','none',500);

	SetPanelVisibility('u158','hidden','none',500);

	SetPanelVisibility('u53','hidden','none',500);

	SetPanelVisibility('u89','hidden','none',500);

	SetPanelVisibility('u129','hidden','none',500);

	SetPanelVisibility('u114','hidden','none',500);

}
});
gv_vAlignTable['u239'] = 'top';gv_vAlignTable['u97'] = 'center';gv_vAlignTable['u63'] = 'center';gv_vAlignTable['u170'] = 'center';gv_vAlignTable['u76'] = 'center';document.getElementById('u134_img').tabIndex = 0;

u134.style.cursor = 'pointer';
$axure.eventManager.click('u134', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PatientList.html');

}
});
gv_vAlignTable['u209'] = 'center';document.getElementById('u60_img').tabIndex = 0;

u60.style.cursor = 'pointer';
$axure.eventManager.click('u60', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('UserRights.html');

}
});
u9.tabIndex = 0;

u9.style.cursor = 'pointer';
$axure.eventManager.click('u9', function(e) {

if (true) {

	parent.location.href = 'Login.html';

}
});
gv_vAlignTable['u9'] = 'top';document.getElementById('u73_img').tabIndex = 0;

u73.style.cursor = 'pointer';
$axure.eventManager.click('u73', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PasswordSettings.html');

}
});
gv_vAlignTable['u234'] = 'top';gv_vAlignTable['u147'] = 'center';gv_vAlignTable['u91'] = 'center';gv_vAlignTable['u131'] = 'center';gv_vAlignTable['u162'] = 'center';document.getElementById('u117_img').tabIndex = 0;

u117.style.cursor = 'pointer';
$axure.eventManager.click('u117', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('AddPatient.html');

}
});
gv_vAlignTable['u210'] = 'top';gv_vAlignTable['u29'] = 'top';document.getElementById('u111_img').tabIndex = 0;

u111.style.cursor = 'pointer';
$axure.eventManager.click('u111', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
document.getElementById('u132_img').tabIndex = 0;

u132.style.cursor = 'pointer';
$axure.eventManager.click('u132', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PatientReminder.html');

}
});
gv_vAlignTable['u175'] = 'center';document.getElementById('u217_img').tabIndex = 0;
HookClick('u217', false);

u217.style.cursor = 'pointer';
$axure.eventManager.click('u217', function(e) {

if (true) {

	SetPanelVisibility('u203','hidden','fade',50);

}
});
document.getElementById('u86_img').tabIndex = 0;

u86.style.cursor = 'pointer';
$axure.eventManager.click('u86', function(e) {

if ((GetWidgetVisibility('u70')) == (false)) {

	SetPanelVisibility('u70','','fade',500);

	SetPanelVisibility('u158','hidden','none',500);

	SetPanelVisibility('u53','hidden','none',500);

	SetPanelVisibility('u89','hidden','none',500);

	SetPanelVisibility('u129','hidden','none',500);

	SetPanelVisibility('u114','hidden','none',500);

}
});
document.getElementById('u58_img').tabIndex = 0;

u58.style.cursor = 'pointer';
$axure.eventManager.click('u58', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('UserGroupList.html');

}
});
gv_vAlignTable['u183'] = 'top';gv_vAlignTable['u173'] = 'center';gv_vAlignTable['u185'] = 'center';gv_vAlignTable['u39'] = 'center';gv_vAlignTable['u31'] = 'top';gv_vAlignTable['u232'] = 'top';gv_vAlignTable['u178'] = 'center';
$axure.eventManager.mouseover('u8', function(e) {
if (!IsTrueMouseOver('u8',e)) return;
if (true) {

	SetPanelState('u23', 'pd0u23','none','',500,'none','',500);

	BringToFront("u23");

}
});
gv_vAlignTable['u8'] = 'top';gv_vAlignTable['u3'] = 'center';document.getElementById('u146_img').tabIndex = 0;

u146.style.cursor = 'pointer';
$axure.eventManager.click('u146', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('OverdueImmunization.html');

}
});
gv_vAlignTable['u196'] = 'center';gv_vAlignTable['u15'] = 'center';document.getElementById('u124_img').tabIndex = 0;

u124.style.cursor = 'pointer';
$axure.eventManager.click('u124', function(e) {

if ((GetWidgetVisibility('u114')) == (true)) {

	SetPanelVisibility('u114','hidden','none',500);

	SetPanelVisibility('u158','hidden','none',500);

	SetPanelVisibility('u53','hidden','none',500);

	SetPanelVisibility('u70','hidden','none',500);

	SetPanelVisibility('u129','hidden','none',500);

	SetPanelVisibility('u89','hidden','none',500);

}
});
gv_vAlignTable['u80'] = 'center';gv_vAlignTable['u1'] = 'center';document.getElementById('u245_img').tabIndex = 0;

u245.style.cursor = 'pointer';
$axure.eventManager.click('u245', function(e) {

if (true) {

SetWidgetNotSelected('u243');
SetWidgetSelected('u245');
;

;

}
});
document.getElementById('u148_img').tabIndex = 0;

u148.style.cursor = 'pointer';
$axure.eventManager.click('u148', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u93'] = 'center';gv_vAlignTable['u145'] = 'center';gv_vAlignTable['u237'] = 'center';gv_vAlignTable['u12'] = 'top';gv_vAlignTable['u199'] = 'center';gv_vAlignTable['u25'] = 'center';gv_vAlignTable['u59'] = 'center';gv_vAlignTable['u137'] = 'center';gv_vAlignTable['u244'] = 'center';
$axure.eventManager.mouseover('u18', function(e) {
if (!IsTrueMouseOver('u18',e)) return;
if (true) {

	SetPanelVisibility('u13','','none',500);

}
});
gv_vAlignTable['u18'] = 'top';gv_vAlignTable['u248'] = 'center';gv_vAlignTable['u45'] = 'center';gv_vAlignTable['u22'] = 'top';gv_vAlignTable['u143'] = 'center';document.getElementById('u107_img').tabIndex = 0;

u107.style.cursor = 'pointer';
$axure.eventManager.click('u107', function(e) {

if ((GetWidgetVisibility('u89')) == (true)) {

	SetPanelVisibility('u89','hidden','none',500);

	SetPanelVisibility('u158','hidden','none',500);

	SetPanelVisibility('u53','hidden','none',500);

	SetPanelVisibility('u70','hidden','none',500);

	SetPanelVisibility('u129','hidden','none',500);

	SetPanelVisibility('u114','hidden','none',500);

}
});
gv_vAlignTable['u35'] = 'center';document.getElementById('u136_img').tabIndex = 0;

u136.style.cursor = 'pointer';
$axure.eventManager.click('u136', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Automate_measure_Calculation.html');

}
});
gv_vAlignTable['u218'] = 'center';
u28.style.cursor = 'pointer';
$axure.eventManager.click('u28', function(e) {

if (true) {

	SetPanelVisibility('u23','hidden','none',500);

SetWidgetRichText('u22', '<p style="text-align:right;"><span style="font-family:Arial;font-size:12px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">( Location A )</span></p>');

SetCheckState('u30', false);

SetCheckState('u32', false);

}
});
