for(var i = 0; i < 189; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

widgetIdToShowFunction['u150'] = function() {
var e = windowEvent;

if (true) {

	SetPanelState('u163', 'pd0u163','fade','',0,'none','',500);

	SetPanelState('u163', 'pd1u163','none','',500,'fade','',0);

	MoveWidgetBy('u120', GetNum('0'), GetNum('109'),'none',500);

}

}

widgetIdToHideFunction['u150'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u120', GetNum('0'), GetNum('-109'),'none',500);

	SetPanelState('u163', 'pd1u163','fade','',0,'none','',500);

	SetPanelState('u163', 'pd0u163','none','',500,'fade','',0);

}

}

widgetIdToShowFunction['u106'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u149', GetNum('0'), GetNum('55'),'none',500);

	MoveWidgetBy('u120', GetNum('0'), GetNum('55'),'none',500);

	SetPanelState('u115', 'pd0u115','fade','',0,'none','',500);

	SetPanelState('u115', 'pd1u115','none','',500,'fade','',0);

}

}

widgetIdToHideFunction['u106'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u149', GetNum('0'), GetNum('-55'),'none',500);

	MoveWidgetBy('u120', GetNum('0'), GetNum('-55'),'none',500);

	SetPanelState('u115', 'pd1u115','fade','',0,'none','',500);

	SetPanelState('u115', 'pd0u115','none','',500,'fade','',0);

}

}

widgetIdToShowFunction['u62'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u80', GetNum('0'), GetNum('109'),'none',500);

	MoveWidgetBy('u149', GetNum('0'), GetNum('109'),'none',500);

	MoveWidgetBy('u120', GetNum('0'), GetNum('109'),'none',500);

	MoveWidgetBy('u105', GetNum('0'), GetNum('109'),'none',500);

	SetPanelState('u75', 'pd0u75','fade','',0,'none','',500);

	SetPanelState('u75', 'pd1u75','none','',500,'fade','',0);

}

}

widgetIdToHideFunction['u62'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u80', GetNum('0'), GetNum('-109'),'none',500);

	MoveWidgetBy('u149', GetNum('0'), GetNum('-109'),'none',500);

	MoveWidgetBy('u120', GetNum('0'), GetNum('-109'),'none',500);

	MoveWidgetBy('u105', GetNum('0'), GetNum('-109'),'none',500);

	SetPanelState('u75', 'pd1u75','fade','',500,'none','',500);

	SetPanelState('u75', 'pd0u75','none','',500,'fade','',500);

}

}

widgetIdToShowFunction['u81'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u149', GetNum('0'), GetNum('162'),'none',500);

	MoveWidgetBy('u120', GetNum('0'), GetNum('162'),'none',500);

	MoveWidgetBy('u105', GetNum('0'), GetNum('162'),'none',500);

	SetPanelState('u98', 'pd0u98','fade','',0,'none','',500);

	SetPanelState('u98', 'pd1u98','none','',500,'fade','',0);

}

}

widgetIdToHideFunction['u81'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u149', GetNum('0'), GetNum('-162'),'none',500);

	MoveWidgetBy('u120', GetNum('0'), GetNum('-162'),'none',500);

	MoveWidgetBy('u105', GetNum('0'), GetNum('-162'),'none',500);

	SetPanelState('u98', 'pd1u98','fade','',0,'none','',500);

	SetPanelState('u98', 'pd0u98','none','',500,'fade','',0);

}

}

widgetIdToShowFunction['u45'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u61', GetNum('0'), GetNum('83'),'none',500);

	MoveWidgetBy('u80', GetNum('0'), GetNum('83'),'none',500);

	MoveWidgetBy('u149', GetNum('0'), GetNum('83'),'none',500);

	MoveWidgetBy('u120', GetNum('0'), GetNum('83'),'none',500);

	MoveWidgetBy('u105', GetNum('0'), GetNum('83'),'none',500);

	SetPanelState('u56', 'pd0u56','fade','',0,'none','',500);

	SetPanelState('u56', 'pd1u56','none','',500,'fade','',0);

}

}

widgetIdToHideFunction['u45'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u61', GetNum('0'), GetNum('-83'),'none',500);

	MoveWidgetBy('u80', GetNum('0'), GetNum('-83'),'none',500);

	MoveWidgetBy('u149', GetNum('0'), GetNum('-83'),'none',500);

	MoveWidgetBy('u120', GetNum('0'), GetNum('-83'),'none',500);

	MoveWidgetBy('u105', GetNum('0'), GetNum('-83'),'none',500);

	SetPanelState('u56', 'pd1u56','fade','',0,'none','',500);

	SetPanelState('u56', 'pd0u56','none','',500,'fade','',0);

}

}

widgetIdToShowFunction['u121'] = function() {
var e = windowEvent;

if (true) {

	SetPanelState('u144', 'pd0u144','fade','',0,'none','',500);

	SetPanelState('u144', 'pd1u144','none','',500,'fade','',0);

}

}

widgetIdToHideFunction['u121'] = function() {
var e = windowEvent;

if (true) {

	SetPanelState('u144', 'pd1u144','fade','',0,'none','',500);

	SetPanelState('u144', 'pd0u144','none','',500,'fade','',0);

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

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PQRS_Report.html');

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

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Intigrity.html');

}
});
gv_vAlignTable['u17'] = 'center';gv_vAlignTable['u135'] = 'center';gv_vAlignTable['u55'] = 'center';document.getElementById('u101_img').tabIndex = 0;

u101.style.cursor = 'pointer';
$axure.eventManager.click('u101', function(e) {

if ((GetWidgetVisibility('u81')) == (false)) {

	SetPanelVisibility('u81','','fade',500);

	SetPanelVisibility('u150','hidden','none',500);

	SetPanelVisibility('u45','hidden','none',500);

	SetPanelVisibility('u62','hidden','none',500);

	SetPanelVisibility('u121','hidden','none',500);

	SetPanelVisibility('u106','hidden','none',500);

}
});
gv_vAlignTable['u186'] = 'center';
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
document.getElementById('u48_img').tabIndex = 0;

u48.style.cursor = 'pointer';
$axure.eventManager.click('u48', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('UserList.html');

}
});
gv_vAlignTable['u27'] = 'center';document.getElementById('u138_img').tabIndex = 0;

u138.style.cursor = 'pointer';
$axure.eventManager.click('u138', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('OverdueImmunization.html');

}
});
document.getElementById('u52_img').tabIndex = 0;

u52.style.cursor = 'pointer';
$axure.eventManager.click('u52', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('UserRights.html');

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

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u152'] = 'center';gv_vAlignTable['u110'] = 'center';gv_vAlignTable['u6'] = 'top';gv_vAlignTable['u108'] = 'center';gv_vAlignTable['u141'] = 'center';gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u133'] = 'center';document.getElementById('u34_img').tabIndex = 0;

u34.style.cursor = 'pointer';
$axure.eventManager.click('u34', function(e) {

if (true) {

	SetPanelVisibility('u23','hidden','none',500);

}
});
gv_vAlignTable['u68'] = 'center';gv_vAlignTable['u89'] = 'center';gv_vAlignTable['u47'] = 'center';document.getElementById('u185_img').tabIndex = 0;

u185.style.cursor = 'pointer';
$axure.eventManager.click('u185', function(e) {

if (true) {

	SetPanelVisibility('u187','','none',500);

	SetPanelVisibility('u187','hidden','fade',8000);

}
});
gv_vAlignTable['u72'] = 'center';document.getElementById('u103_img').tabIndex = 0;

u103.style.cursor = 'pointer';
$axure.eventManager.click('u103', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
document.getElementById('u164_img').tabIndex = 0;

u164.style.cursor = 'pointer';
$axure.eventManager.click('u164', function(e) {

if ((GetWidgetVisibility('u150')) == (true)) {

	SetPanelVisibility('u150','hidden','none',500);

	SetPanelVisibility('u81','hidden','none',500);

	SetPanelVisibility('u45','hidden','none',500);

	SetPanelVisibility('u62','hidden','none',500);

	SetPanelVisibility('u121','hidden','none',500);

}
});
document.getElementById('u99_img').tabIndex = 0;

u99.style.cursor = 'pointer';
$axure.eventManager.click('u99', function(e) {

if ((GetWidgetVisibility('u81')) == (true)) {

	SetPanelVisibility('u81','hidden','none',500);

	SetPanelVisibility('u150','hidden','none',500);

	SetPanelVisibility('u45','hidden','none',500);

	SetPanelVisibility('u62','hidden','none',500);

	SetPanelVisibility('u121','hidden','none',500);

	SetPanelVisibility('u106','hidden','none',500);

}
});
gv_vAlignTable['u66'] = 'center';gv_vAlignTable['u112'] = 'center';document.getElementById('u78_img').tabIndex = 0;

u78.style.cursor = 'pointer';
$axure.eventManager.click('u78', function(e) {

if ((GetWidgetVisibility('u62')) == (false)) {

	SetPanelVisibility('u62','','fade',500);

	SetPanelVisibility('u150','hidden','none',500);

	SetPanelVisibility('u45','hidden','none',500);

	SetPanelVisibility('u81','hidden','none',500);

	SetPanelVisibility('u121','hidden','none',500);

	SetPanelVisibility('u106','hidden','none',500);

}
});
document.getElementById('u57_img').tabIndex = 0;

u57.style.cursor = 'pointer';
$axure.eventManager.click('u57', function(e) {

if ((GetWidgetVisibility('u45')) == (true)) {

	SetPanelVisibility('u45','hidden','none',500);

	SetPanelVisibility('u150','hidden','none',500);

	SetPanelVisibility('u62','hidden','none',500);

	SetPanelVisibility('u81','hidden','none',500);

	SetPanelVisibility('u121','hidden','none',500);

	SetPanelVisibility('u106','hidden','none',500);

}
});
gv_vAlignTable['u119'] = 'center';
$axure.eventManager.mouseover('u16', function(e) {
if (!IsTrueMouseOver('u16',e)) return;
if (true) {

	SetPanelVisibility('u13','','none',500);

}
});
gv_vAlignTable['u125'] = 'center';gv_vAlignTable['u41'] = 'center';gv_vAlignTable['u172'] = 'center';document.getElementById('u118_img').tabIndex = 0;

u118.style.cursor = 'pointer';
$axure.eventManager.click('u118', function(e) {

if ((GetWidgetVisibility('u106')) == (false)) {

	SetPanelVisibility('u106','','fade',500);

	SetPanelVisibility('u150','hidden','none',500);

	SetPanelVisibility('u45','hidden','none',500);

	SetPanelVisibility('u62','hidden','none',500);

	SetPanelVisibility('u121','hidden','none',500);

	SetPanelVisibility('u81','hidden','none',500);

}
});
gv_vAlignTable['u176'] = 'top';gv_vAlignTable['u174'] = 'top';document.getElementById('u128_img').tabIndex = 0;

u128.style.cursor = 'pointer';
$axure.eventManager.click('u128', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Automate_measure_Calculation.html');

}
});
gv_vAlignTable['u85'] = 'center';gv_vAlignTable['u51'] = 'center';gv_vAlignTable['u10'] = 'top';gv_vAlignTable['u100'] = 'center';document.getElementById('u166_img').tabIndex = 0;

u166.style.cursor = 'pointer';
$axure.eventManager.click('u166', function(e) {

if ((GetWidgetVisibility('u150')) == (false)) {

	SetPanelVisibility('u150','','fade',500);

	SetPanelVisibility('u81','hidden','none',500);

	SetPanelVisibility('u45','hidden','none',500);

	SetPanelVisibility('u62','hidden','none',500);

	SetPanelVisibility('u121','hidden','none',500);

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
gv_vAlignTable['u95'] = 'center';document.getElementById('u116_img').tabIndex = 0;

u116.style.cursor = 'pointer';
$axure.eventManager.click('u116', function(e) {

if ((GetWidgetVisibility('u106')) == (true)) {

	SetPanelVisibility('u106','hidden','none',500);

	SetPanelVisibility('u150','hidden','none',500);

	SetPanelVisibility('u45','hidden','none',500);

	SetPanelVisibility('u62','hidden','none',500);

	SetPanelVisibility('u121','hidden','none',500);

	SetPanelVisibility('u81','hidden','none',500);

}
});
gv_vAlignTable['u158'] = 'center';gv_vAlignTable['u74'] = 'center';gv_vAlignTable['u123'] = 'center';gv_vAlignTable['u114'] = 'center';gv_vAlignTable['u33'] = 'top';gv_vAlignTable['u160'] = 'center';document.getElementById('u92_img').tabIndex = 0;

u92.style.cursor = 'pointer';
$axure.eventManager.click('u92', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('RecordDisclosure.html');

}
});
document.getElementById('u126_img').tabIndex = 0;

u126.style.cursor = 'pointer';
$axure.eventManager.click('u126', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PatientList.html');

}
});
gv_vAlignTable['u5'] = 'top';gv_vAlignTable['u127'] = 'center';gv_vAlignTable['u43'] = 'center';document.getElementById('u142_img').tabIndex = 0;

u142.style.cursor = 'pointer';
$axure.eventManager.click('u142', function(e) {

if (true) {

	SetPanelVisibility('u121','toggle','none',500);

	SetPanelVisibility('u45','hidden','none',500);

	SetPanelVisibility('u62','hidden','none',500);

}
});
gv_vAlignTable['u154'] = 'center';gv_vAlignTable['u139'] = 'center';gv_vAlignTable['u87'] = 'center';gv_vAlignTable['u53'] = 'center';gv_vAlignTable['u104'] = 'center';
$axure.eventManager.mouseover('u19', function(e) {
if (!IsTrueMouseOver('u19',e)) return;
if (true) {

	SetPanelVisibility('u13','','none',500);

}
});
gv_vAlignTable['u19'] = 'top';document.getElementById('u109_img').tabIndex = 0;

u109.style.cursor = 'pointer';
$axure.eventManager.click('u109', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('AddPatient.html');

}
});
document.getElementById('u50_img').tabIndex = 0;

u50.style.cursor = 'pointer';
$axure.eventManager.click('u50', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('UserGroupList.html');

}
});
gv_vAlignTable['u97'] = 'center';gv_vAlignTable['u170'] = 'center';document.getElementById('u76_img').tabIndex = 0;

u76.style.cursor = 'pointer';
$axure.eventManager.click('u76', function(e) {

if ((GetWidgetVisibility('u62')) == (true)) {

	SetPanelVisibility('u62','hidden','none',500);

	SetPanelVisibility('u150','hidden','none',500);

	SetPanelVisibility('u45','hidden','none',500);

	SetPanelVisibility('u81','hidden','none',500);

	SetPanelVisibility('u121','hidden','none',500);

	SetPanelVisibility('u106','hidden','none',500);

}
});
document.getElementById('u134_img').tabIndex = 0;

u134.style.cursor = 'pointer';
$axure.eventManager.click('u134', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ListDisclosure.html');

}
});
gv_vAlignTable['u177'] = 'top';gv_vAlignTable['u60'] = 'center';gv_vAlignTable['u102'] = 'center';u9.tabIndex = 0;

u9.style.cursor = 'pointer';
$axure.eventManager.click('u9', function(e) {

if (true) {

	parent.location.href = 'Login.html';

}
});
gv_vAlignTable['u9'] = 'top';document.getElementById('u147_img').tabIndex = 0;

u147.style.cursor = 'pointer';
$axure.eventManager.click('u147', function(e) {

if ((GetWidgetVisibility('u121')) == (false)) {

	SetPanelVisibility('u121','','fade',500);

	SetPanelVisibility('u81','hidden','none',500);

	SetPanelVisibility('u45','hidden','none',500);

	SetPanelVisibility('u62','hidden','none',500);

	SetPanelVisibility('u150','hidden','none',500);

}
});
gv_vAlignTable['u91'] = 'center';gv_vAlignTable['u131'] = 'center';gv_vAlignTable['u64'] = 'center';gv_vAlignTable['u70'] = 'center';gv_vAlignTable['u188'] = 'top';gv_vAlignTable['u162'] = 'center';gv_vAlignTable['u117'] = 'center';gv_vAlignTable['u29'] = 'top';document.getElementById('u111_img').tabIndex = 0;

u111.style.cursor = 'pointer';
$axure.eventManager.click('u111', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('SearchPatient.html');

}
});
document.getElementById('u132_img').tabIndex = 0;

u132.style.cursor = 'pointer';
$axure.eventManager.click('u132', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Reports.html');

}
});
gv_vAlignTable['u175'] = 'top';gv_vAlignTable['u129'] = 'center';gv_vAlignTable['u58'] = 'center';gv_vAlignTable['u173'] = 'top';gv_vAlignTable['u39'] = 'center';gv_vAlignTable['u31'] = 'top';gv_vAlignTable['u83'] = 'center';gv_vAlignTable['u178'] = 'top';
$axure.eventManager.mouseover('u8', function(e) {
if (!IsTrueMouseOver('u8',e)) return;
if (true) {

	SetPanelState('u23', 'pd0u23','none','',500,'none','',500);

	BringToFront("u23");

}
});
gv_vAlignTable['u8'] = 'top';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u146'] = 'center';gv_vAlignTable['u15'] = 'center';gv_vAlignTable['u49'] = 'center';document.getElementById('u124_img').tabIndex = 0;

u124.style.cursor = 'pointer';
$axure.eventManager.click('u124', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PatientReminder.html');

}
});
gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u148'] = 'center';gv_vAlignTable['u93'] = 'center';gv_vAlignTable['u167'] = 'center';document.getElementById('u145_img').tabIndex = 0;

u145.style.cursor = 'pointer';
$axure.eventManager.click('u145', function(e) {

if ((GetWidgetVisibility('u121')) == (true)) {

	SetPanelVisibility('u121','hidden','none',500);

	SetPanelVisibility('u81','hidden','none',500);

	SetPanelVisibility('u45','hidden','none',500);

	SetPanelVisibility('u62','hidden','none',500);

	SetPanelVisibility('u150','hidden','none',500);

}
});
gv_vAlignTable['u12'] = 'top';gv_vAlignTable['u165'] = 'center';gv_vAlignTable['u25'] = 'center';document.getElementById('u59_img').tabIndex = 0;

u59.style.cursor = 'pointer';
$axure.eventManager.click('u59', function(e) {

if ((GetWidgetVisibility('u45')) == (false)) {

	SetPanelVisibility('u45','','fade',500);

	SetPanelVisibility('u150','hidden','none',500);

	SetPanelVisibility('u62','hidden','none',500);

	SetPanelVisibility('u81','hidden','none',500);

	SetPanelVisibility('u121','hidden','none',500);

	SetPanelVisibility('u106','hidden','none',500);

}
});
gv_vAlignTable['u137'] = 'center';
$axure.eventManager.mouseover('u18', function(e) {
if (!IsTrueMouseOver('u18',e)) return;
if (true) {

	SetPanelVisibility('u13','','none',500);

}
});
gv_vAlignTable['u18'] = 'top';gv_vAlignTable['u77'] = 'center';gv_vAlignTable['u22'] = 'top';gv_vAlignTable['u143'] = 'center';gv_vAlignTable['u35'] = 'center';document.getElementById('u136_img').tabIndex = 0;

u136.style.cursor = 'pointer';
$axure.eventManager.click('u136', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ImmunizationRegistry.html');

}
});

u28.style.cursor = 'pointer';
$axure.eventManager.click('u28', function(e) {

if (true) {

	SetPanelVisibility('u23','hidden','none',500);

SetWidgetRichText('u22', '<p style="text-align:right;"><span style="font-family:Arial;font-size:12px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">( Location A )</span></p>');

SetCheckState('u30', false);

SetCheckState('u32', false);

}
});
