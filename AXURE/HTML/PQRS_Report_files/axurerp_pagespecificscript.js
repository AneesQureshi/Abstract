for(var i = 0; i < 198; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

widgetIdToShowFunction['u119'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u162', GetNum('0'), GetNum('55'),'none',500);

	MoveWidgetBy('u133', GetNum('0'), GetNum('55'),'none',500);

	SetPanelState('u128', 'pd0u128','fade','',0,'none','',500);

	SetPanelState('u128', 'pd1u128','none','',500,'fade','',0);

}

}

widgetIdToHideFunction['u119'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u162', GetNum('0'), GetNum('-55'),'none',500);

	MoveWidgetBy('u133', GetNum('0'), GetNum('-55'),'none',500);

	SetPanelState('u128', 'pd1u128','fade','',0,'none','',500);

	SetPanelState('u128', 'pd0u128','none','',500,'fade','',0);

}

}

widgetIdToShowFunction['u163'] = function() {
var e = windowEvent;

if (true) {

	SetPanelState('u176', 'pd0u176','fade','',0,'none','',500);

	SetPanelState('u176', 'pd1u176','none','',500,'fade','',0);

	MoveWidgetBy('u133', GetNum('0'), GetNum('109'),'none',500);

}

}

widgetIdToHideFunction['u163'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u133', GetNum('0'), GetNum('-109'),'none',500);

	SetPanelState('u176', 'pd1u176','fade','',0,'none','',500);

	SetPanelState('u176', 'pd0u176','none','',500,'fade','',0);

}

}

widgetIdToShowFunction['u75'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u93', GetNum('0'), GetNum('109'),'none',500);

	MoveWidgetBy('u162', GetNum('0'), GetNum('109'),'none',500);

	MoveWidgetBy('u133', GetNum('0'), GetNum('109'),'none',500);

	MoveWidgetBy('u118', GetNum('0'), GetNum('109'),'none',500);

	SetPanelState('u88', 'pd0u88','fade','',0,'none','',500);

	SetPanelState('u88', 'pd1u88','none','',500,'fade','',0);

}

}

widgetIdToHideFunction['u75'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u93', GetNum('0'), GetNum('-109'),'none',500);

	MoveWidgetBy('u162', GetNum('0'), GetNum('-109'),'none',500);

	MoveWidgetBy('u133', GetNum('0'), GetNum('-109'),'none',500);

	MoveWidgetBy('u118', GetNum('0'), GetNum('-109'),'none',500);

	SetPanelState('u88', 'pd1u88','fade','',500,'none','',500);

	SetPanelState('u88', 'pd0u88','none','',500,'fade','',500);

}

}

widgetIdToShowFunction['u94'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u162', GetNum('0'), GetNum('162'),'none',500);

	MoveWidgetBy('u133', GetNum('0'), GetNum('162'),'none',500);

	MoveWidgetBy('u118', GetNum('0'), GetNum('162'),'none',500);

	SetPanelState('u111', 'pd0u111','fade','',0,'none','',500);

	SetPanelState('u111', 'pd1u111','none','',500,'fade','',0);

}

}

widgetIdToHideFunction['u94'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u162', GetNum('0'), GetNum('-162'),'none',500);

	MoveWidgetBy('u133', GetNum('0'), GetNum('-162'),'none',500);

	MoveWidgetBy('u118', GetNum('0'), GetNum('-162'),'none',500);

	SetPanelState('u111', 'pd1u111','fade','',0,'none','',500);

	SetPanelState('u111', 'pd0u111','none','',500,'fade','',0);

}

}

widgetIdToShowFunction['u134'] = function() {
var e = windowEvent;

if (true) {

	SetPanelState('u157', 'pd0u157','fade','',0,'none','',500);

	SetPanelState('u157', 'pd1u157','none','',500,'fade','',0);

}

}

widgetIdToHideFunction['u134'] = function() {
var e = windowEvent;

if (true) {

	SetPanelState('u157', 'pd1u157','fade','',0,'none','',500);

	SetPanelState('u157', 'pd0u157','none','',500,'fade','',0);

}

}

widgetIdToShowFunction['u58'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u74', GetNum('0'), GetNum('83'),'none',500);

	MoveWidgetBy('u93', GetNum('0'), GetNum('83'),'none',500);

	MoveWidgetBy('u162', GetNum('0'), GetNum('83'),'none',500);

	MoveWidgetBy('u133', GetNum('0'), GetNum('83'),'none',500);

	MoveWidgetBy('u118', GetNum('0'), GetNum('83'),'none',500);

	SetPanelState('u69', 'pd0u69','fade','',0,'none','',500);

	SetPanelState('u69', 'pd1u69','none','',500,'fade','',0);

}

}

widgetIdToHideFunction['u58'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u74', GetNum('0'), GetNum('-83'),'none',500);

	MoveWidgetBy('u93', GetNum('0'), GetNum('-83'),'none',500);

	MoveWidgetBy('u162', GetNum('0'), GetNum('-83'),'none',500);

	MoveWidgetBy('u133', GetNum('0'), GetNum('-83'),'none',500);

	MoveWidgetBy('u118', GetNum('0'), GetNum('-83'),'none',500);

	SetPanelState('u69', 'pd1u69','fade','',0,'none','',500);

	SetPanelState('u69', 'pd0u69','none','',500,'fade','',0);

}

}
gv_vAlignTable['u115'] = 'center';document.getElementById('u122_img').tabIndex = 0;

u122.style.cursor = 'pointer';
$axure.eventManager.click('u122', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('AddPatient.html');

}
});
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
gv_vAlignTable['u156'] = 'center';gv_vAlignTable['u130'] = 'center';gv_vAlignTable['u7'] = 'top';document.getElementById('u2_img').tabIndex = 0;

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
gv_vAlignTable['u4'] = 'top';document.getElementById('u153_img').tabIndex = 0;

u153.style.cursor = 'pointer';
$axure.eventManager.click('u153', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Intigrity.html');

}
});
gv_vAlignTable['u140'] = 'center';gv_vAlignTable['u17'] = 'center';document.getElementById('u151_img').tabIndex = 0;

u151.style.cursor = 'pointer';
$axure.eventManager.click('u151', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('OverdueImmunization.html');

}
});
gv_vAlignTable['u159'] = 'center';
$axure.eventManager.change('u55', function(e) {

if ((GetSelectedOption('u55')) == ('Select One...')) {

}
});

$axure.eventManager.blur('u55', function(e) {

if ((GetSelectedOption('u55')) == ('Select One...')) {

}
else
if (true) {

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

	self.location.href=$axure.globalVariableProvider.getLinkUrl('RecordDisclosure.html');

}
});
gv_vAlignTable['u27'] = 'center';gv_vAlignTable['u138'] = 'center';document.getElementById('u52_img').tabIndex = 0;
HookHover('u52', false);

u52.style.cursor = 'pointer';
$axure.eventManager.click('u52', function(e) {

if (true) {

	SetPanelVisibility('u191','','none',500);

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
gv_vAlignTable['u20'] = 'top';document.getElementById('u65_img').tabIndex = 0;

u65.style.cursor = 'pointer';
$axure.eventManager.click('u65', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('UserRights.html');

}
});
gv_vAlignTable['u152'] = 'center';gv_vAlignTable['u110'] = 'center';gv_vAlignTable['u6'] = 'top';gv_vAlignTable['u108'] = 'center';gv_vAlignTable['u62'] = 'center';document.getElementById('u141_img').tabIndex = 0;

u141.style.cursor = 'pointer';
$axure.eventManager.click('u141', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Automate_measure_Calculation.html');

}
});
gv_vAlignTable['u11'] = 'top';document.getElementById('u34_img').tabIndex = 0;

u34.style.cursor = 'pointer';
$axure.eventManager.click('u34', function(e) {

if (true) {

	SetPanelVisibility('u23','hidden','none',500);

}
});
gv_vAlignTable['u68'] = 'center';document.getElementById('u89_img').tabIndex = 0;

u89.style.cursor = 'pointer';
$axure.eventManager.click('u89', function(e) {

if ((GetWidgetVisibility('u75')) == (true)) {

	SetPanelVisibility('u75','hidden','none',500);

	SetPanelVisibility('u163','hidden','none',500);

	SetPanelVisibility('u58','hidden','none',500);

	SetPanelVisibility('u94','hidden','none',500);

	SetPanelVisibility('u134','hidden','none',500);

	SetPanelVisibility('u119','hidden','none',500);

}
});
gv_vAlignTable['u47'] = 'center';gv_vAlignTable['u184'] = 'top';document.getElementById('u72_img').tabIndex = 0;

u72.style.cursor = 'pointer';
$axure.eventManager.click('u72', function(e) {

if ((GetWidgetVisibility('u58')) == (false)) {

	SetPanelVisibility('u58','','fade',500);

	SetPanelVisibility('u163','hidden','none',500);

	SetPanelVisibility('u75','hidden','none',500);

	SetPanelVisibility('u94','hidden','none',500);

	SetPanelVisibility('u134','hidden','none',500);

	SetPanelVisibility('u119','hidden','none',500);

}
});
gv_vAlignTable['u66'] = 'center';document.getElementById('u112_img').tabIndex = 0;

u112.style.cursor = 'pointer';
$axure.eventManager.click('u112', function(e) {

if ((GetWidgetVisibility('u94')) == (true)) {

	SetPanelVisibility('u94','hidden','none',500);

	SetPanelVisibility('u163','hidden','none',500);

	SetPanelVisibility('u58','hidden','none',500);

	SetPanelVisibility('u75','hidden','none',500);

	SetPanelVisibility('u134','hidden','none',500);

	SetPanelVisibility('u119','hidden','none',500);

}
});
document.getElementById('u78_img').tabIndex = 0;

u78.style.cursor = 'pointer';
$axure.eventManager.click('u78', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PasswordSettings.html');

}
});
document.getElementById('u179_img').tabIndex = 0;

u179.style.cursor = 'pointer';
$axure.eventManager.click('u179', function(e) {

if ((GetWidgetVisibility('u163')) == (false)) {

	SetPanelVisibility('u163','','fade',500);

	SetPanelVisibility('u94','hidden','none',500);

	SetPanelVisibility('u58','hidden','none',500);

	SetPanelVisibility('u75','hidden','none',500);

	SetPanelVisibility('u134','hidden','none',500);

}
});

$axure.eventManager.mouseover('u16', function(e) {
if (!IsTrueMouseOver('u16',e)) return;
if (true) {

	SetPanelVisibility('u13','','none',500);

}
});
gv_vAlignTable['u125'] = 'center';gv_vAlignTable['u41'] = 'center';document.getElementById('u149_img').tabIndex = 0;

u149.style.cursor = 'pointer';
$axure.eventManager.click('u149', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ImmunizationRegistry.html');

}
});
gv_vAlignTable['u54'] = 'top';
u197.style.cursor = 'pointer';
$axure.eventManager.click('u197', function(e) {

if (true) {

	SetPanelVisibility('u191','hidden','none',500);

}
});
gv_vAlignTable['u189'] = 'top';gv_vAlignTable['u85'] = 'center';gv_vAlignTable['u51'] = 'center';gv_vAlignTable['u10'] = 'top';gv_vAlignTable['u100'] = 'center';gv_vAlignTable['u144'] = 'center';gv_vAlignTable['u36'] = 'top';
u30.style.cursor = 'pointer';
$axure.eventManager.click('u30', function(e) {

if (true) {

	SetPanelVisibility('u23','hidden','none',500);

SetWidgetRichText('u22', '<p style="text-align:right;"><span style="font-family:Arial;font-size:12px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">( Location B )</span></p>');

SetCheckState('u28', false);

SetCheckState('u32', false);

}
});
document.getElementById('u61_img').tabIndex = 0;

u61.style.cursor = 'pointer';
$axure.eventManager.click('u61', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('UserList.html');

}
});
gv_vAlignTable['u195'] = 'top';document.getElementById('u116_img').tabIndex = 0;

u116.style.cursor = 'pointer';
$axure.eventManager.click('u116', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
document.getElementById('u158_img').tabIndex = 0;

u158.style.cursor = 'pointer';
$axure.eventManager.click('u158', function(e) {

if ((GetWidgetVisibility('u134')) == (true)) {

	SetPanelVisibility('u134','hidden','none',500);

	SetPanelVisibility('u94','hidden','none',500);

	SetPanelVisibility('u58','hidden','none',500);

	SetPanelVisibility('u75','hidden','none',500);

	SetPanelVisibility('u163','hidden','none',500);

}
});
gv_vAlignTable['u123'] = 'center';document.getElementById('u114_img').tabIndex = 0;

u114.style.cursor = 'pointer';
$axure.eventManager.click('u114', function(e) {

if ((GetWidgetVisibility('u94')) == (false)) {

	SetPanelVisibility('u94','','fade',500);

	SetPanelVisibility('u163','hidden','none',500);

	SetPanelVisibility('u58','hidden','none',500);

	SetPanelVisibility('u75','hidden','none',500);

	SetPanelVisibility('u134','hidden','none',500);

	SetPanelVisibility('u119','hidden','none',500);

}
});
gv_vAlignTable['u33'] = 'top';document.getElementById('u160_img').tabIndex = 0;

u160.style.cursor = 'pointer';
$axure.eventManager.click('u160', function(e) {

if ((GetWidgetVisibility('u134')) == (false)) {

	SetPanelVisibility('u134','','fade',500);

	SetPanelVisibility('u94','hidden','none',500);

	SetPanelVisibility('u58','hidden','none',500);

	SetPanelVisibility('u75','hidden','none',500);

	SetPanelVisibility('u163','hidden','none',500);

}
});
gv_vAlignTable['u92'] = 'center';gv_vAlignTable['u71'] = 'center';gv_vAlignTable['u5'] = 'top';gv_vAlignTable['u98'] = 'center';gv_vAlignTable['u127'] = 'center';gv_vAlignTable['u43'] = 'center';gv_vAlignTable['u169'] = 'center';
$axure.eventManager.change('u56', function(e) {

if ((GetSelectedOption('u56')) == ('Select One...')) {

}
});

$axure.eventManager.blur('u56', function(e) {

if ((GetSelectedOption('u56')) == ('Select One...')) {

}
else
if (true) {

}
});
gv_vAlignTable['u150'] = 'center';gv_vAlignTable['u142'] = 'center';gv_vAlignTable['u106'] = 'center';gv_vAlignTable['u154'] = 'center';document.getElementById('u139_img').tabIndex = 0;

u139.style.cursor = 'pointer';
$axure.eventManager.click('u139', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PatientList.html');

}
});
gv_vAlignTable['u87'] = 'center';gv_vAlignTable['u53'] = 'top';gv_vAlignTable['u193'] = 'center';gv_vAlignTable['u104'] = 'center';gv_vAlignTable['u121'] = 'center';
$axure.eventManager.mouseover('u19', function(e) {
if (!IsTrueMouseOver('u19',e)) return;
if (true) {

	SetPanelVisibility('u13','','none',500);

}
});
gv_vAlignTable['u19'] = 'top';document.getElementById('u155_img').tabIndex = 0;

u155.style.cursor = 'pointer';
$axure.eventManager.click('u155', function(e) {

if (true) {

	SetPanelVisibility('u134','toggle','none',500);

	SetPanelVisibility('u58','hidden','none',500);

	SetPanelVisibility('u75','hidden','none',500);

}
});
document.getElementById('u63_img').tabIndex = 0;

u63.style.cursor = 'pointer';
$axure.eventManager.click('u63', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('UserGroupList.html');

}
});
gv_vAlignTable['u81'] = 'center';document.getElementById('u177_img').tabIndex = 0;

u177.style.cursor = 'pointer';
$axure.eventManager.click('u177', function(e) {

if ((GetWidgetVisibility('u163')) == (true)) {

	SetPanelVisibility('u163','hidden','none',500);

	SetPanelVisibility('u94','hidden','none',500);

	SetPanelVisibility('u58','hidden','none',500);

	SetPanelVisibility('u75','hidden','none',500);

	SetPanelVisibility('u134','hidden','none',500);

}
});
gv_vAlignTable['u60'] = 'center';gv_vAlignTable['u190'] = 'top';gv_vAlignTable['u102'] = 'center';u9.tabIndex = 0;

u9.style.cursor = 'pointer';
$axure.eventManager.click('u9', function(e) {

if (true) {

	parent.location.href = 'Login.html';

}
});
gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u73'] = 'center';document.getElementById('u147_img').tabIndex = 0;

u147.style.cursor = 'pointer';
$axure.eventManager.click('u147', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ListDisclosure.html');

}
});
document.getElementById('u91_img').tabIndex = 0;

u91.style.cursor = 'pointer';
$axure.eventManager.click('u91', function(e) {

if ((GetWidgetVisibility('u75')) == (false)) {

	SetPanelVisibility('u75','','fade',500);

	SetPanelVisibility('u163','hidden','none',500);

	SetPanelVisibility('u58','hidden','none',500);

	SetPanelVisibility('u94','hidden','none',500);

	SetPanelVisibility('u134','hidden','none',500);

	SetPanelVisibility('u119','hidden','none',500);

}
});
document.getElementById('u131_img').tabIndex = 0;

u131.style.cursor = 'pointer';
$axure.eventManager.click('u131', function(e) {

if ((GetWidgetVisibility('u119')) == (false)) {

	SetPanelVisibility('u119','','fade',500);

	SetPanelVisibility('u163','hidden','none',500);

	SetPanelVisibility('u58','hidden','none',500);

	SetPanelVisibility('u75','hidden','none',500);

	SetPanelVisibility('u134','hidden','none',500);

	SetPanelVisibility('u94','hidden','none',500);

}
});
gv_vAlignTable['u64'] = 'center';document.getElementById('u70_img').tabIndex = 0;

u70.style.cursor = 'pointer';
$axure.eventManager.click('u70', function(e) {

if ((GetWidgetVisibility('u58')) == (true)) {

	SetPanelVisibility('u58','hidden','none',500);

	SetPanelVisibility('u163','hidden','none',500);

	SetPanelVisibility('u75','hidden','none',500);

	SetPanelVisibility('u94','hidden','none',500);

	SetPanelVisibility('u134','hidden','none',500);

	SetPanelVisibility('u119','hidden','none',500);

}
});
gv_vAlignTable['u188'] = 'top';gv_vAlignTable['u117'] = 'center';gv_vAlignTable['u113'] = 'center';gv_vAlignTable['u29'] = 'top';gv_vAlignTable['u132'] = 'center';gv_vAlignTable['u175'] = 'center';document.getElementById('u129_img').tabIndex = 0;

u129.style.cursor = 'pointer';
$axure.eventManager.click('u129', function(e) {

if ((GetWidgetVisibility('u119')) == (true)) {

	SetPanelVisibility('u119','hidden','none',500);

	SetPanelVisibility('u163','hidden','none',500);

	SetPanelVisibility('u58','hidden','none',500);

	SetPanelVisibility('u75','hidden','none',500);

	SetPanelVisibility('u134','hidden','none',500);

	SetPanelVisibility('u94','hidden','none',500);

}
});
gv_vAlignTable['u183'] = 'center';gv_vAlignTable['u173'] = 'center';gv_vAlignTable['u39'] = 'center';gv_vAlignTable['u171'] = 'center';gv_vAlignTable['u31'] = 'top';gv_vAlignTable['u83'] = 'center';gv_vAlignTable['u178'] = 'center';
$axure.eventManager.mouseover('u8', function(e) {
if (!IsTrueMouseOver('u8',e)) return;
if (true) {

	SetPanelState('u23', 'pd0u23','none','',500,'none','',500);

	BringToFront("u23");

}
});
gv_vAlignTable['u8'] = 'top';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u96'] = 'center';gv_vAlignTable['u146'] = 'center';
u196.style.cursor = 'pointer';
$axure.eventManager.click('u196', function(e) {

if (true) {

	SetPanelVisibility('u191','hidden','none',500);

}
});
gv_vAlignTable['u15'] = 'center';document.getElementById('u124_img').tabIndex = 0;

u124.style.cursor = 'pointer';
$axure.eventManager.click('u124', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('SearchPatient.html');

}
});
gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u148'] = 'center';gv_vAlignTable['u167'] = 'center';document.getElementById('u145_img').tabIndex = 0;

u145.style.cursor = 'pointer';
$axure.eventManager.click('u145', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Reports.html');

}
});
gv_vAlignTable['u12'] = 'top';gv_vAlignTable['u165'] = 'center';gv_vAlignTable['u25'] = 'center';document.getElementById('u137_img').tabIndex = 0;

u137.style.cursor = 'pointer';
$axure.eventManager.click('u137', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PatientReminder.html');

}
});
gv_vAlignTable['u90'] = 'center';
$axure.eventManager.mouseover('u18', function(e) {
if (!IsTrueMouseOver('u18',e)) return;
if (true) {

	SetPanelVisibility('u13','','none',500);

}
});
gv_vAlignTable['u18'] = 'top';gv_vAlignTable['u161'] = 'center';gv_vAlignTable['u45'] = 'center';gv_vAlignTable['u77'] = 'center';gv_vAlignTable['u22'] = 'top';document.getElementById('u143_img').tabIndex = 0;

u143.style.cursor = 'pointer';
$axure.eventManager.click('u143', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u35'] = 'center';gv_vAlignTable['u136'] = 'center';gv_vAlignTable['u180'] = 'center';
u28.style.cursor = 'pointer';
$axure.eventManager.click('u28', function(e) {

if (true) {

	SetPanelVisibility('u23','hidden','none',500);

SetWidgetRichText('u22', '<p style="text-align:right;"><span style="font-family:Arial;font-size:12px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">( Location A )</span></p>');

SetCheckState('u30', false);

SetCheckState('u32', false);

}
});
gv_vAlignTable['u194'] = 'top';