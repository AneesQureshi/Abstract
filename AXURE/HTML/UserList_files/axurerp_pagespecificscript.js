for(var i = 0; i < 252; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

widgetIdToShowFunction['u68'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u86', GetNum('0'), GetNum('109'),'none',500);

	MoveWidgetBy('u155', GetNum('0'), GetNum('109'),'none',500);

	MoveWidgetBy('u126', GetNum('0'), GetNum('109'),'none',500);

	MoveWidgetBy('u111', GetNum('0'), GetNum('109'),'none',500);

	SetPanelState('u81', 'pd0u81','fade','',0,'none','',500);

	SetPanelState('u81', 'pd1u81','none','',500,'fade','',0);

}

}

widgetIdToHideFunction['u68'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u86', GetNum('0'), GetNum('-109'),'none',500);

	MoveWidgetBy('u155', GetNum('0'), GetNum('-109'),'none',500);

	MoveWidgetBy('u126', GetNum('0'), GetNum('-109'),'none',500);

	MoveWidgetBy('u111', GetNum('0'), GetNum('-109'),'none',500);

	SetPanelState('u81', 'pd1u81','fade','',500,'none','',500);

	SetPanelState('u81', 'pd0u81','none','',500,'fade','',500);

}

}

widgetIdToShowFunction['u87'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u155', GetNum('0'), GetNum('162'),'none',500);

	MoveWidgetBy('u126', GetNum('0'), GetNum('162'),'none',500);

	MoveWidgetBy('u111', GetNum('0'), GetNum('162'),'none',500);

	SetPanelState('u104', 'pd0u104','fade','',0,'none','',500);

	SetPanelState('u104', 'pd1u104','none','',500,'fade','',0);

}

}

widgetIdToHideFunction['u87'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u155', GetNum('0'), GetNum('-162'),'none',500);

	MoveWidgetBy('u126', GetNum('0'), GetNum('-162'),'none',500);

	MoveWidgetBy('u111', GetNum('0'), GetNum('-162'),'none',500);

	SetPanelState('u104', 'pd1u104','fade','',0,'none','',500);

	SetPanelState('u104', 'pd0u104','none','',500,'fade','',0);

}

}

widgetIdToShowFunction['u127'] = function() {
var e = windowEvent;

if (true) {

	SetPanelState('u150', 'pd0u150','fade','',0,'none','',500);

	SetPanelState('u150', 'pd1u150','none','',500,'fade','',0);

}

}

widgetIdToHideFunction['u127'] = function() {
var e = windowEvent;

if (true) {

	SetPanelState('u150', 'pd1u150','fade','',0,'none','',500);

	SetPanelState('u150', 'pd0u150','none','',500,'fade','',0);

}

}

widgetIdToShowFunction['u156'] = function() {
var e = windowEvent;

if (true) {

	SetPanelState('u169', 'pd0u169','fade','',0,'none','',500);

	SetPanelState('u169', 'pd1u169','none','',500,'fade','',0);

	MoveWidgetBy('u126', GetNum('0'), GetNum('109'),'none',500);

}

}

widgetIdToHideFunction['u156'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u126', GetNum('0'), GetNum('-109'),'none',500);

	SetPanelState('u169', 'pd1u169','fade','',0,'none','',500);

	SetPanelState('u169', 'pd0u169','none','',500,'fade','',0);

}

}

widgetIdToShowFunction['u51'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u67', GetNum('0'), GetNum('83'),'none',500);

	MoveWidgetBy('u86', GetNum('0'), GetNum('83'),'none',500);

	MoveWidgetBy('u155', GetNum('0'), GetNum('83'),'none',500);

	MoveWidgetBy('u126', GetNum('0'), GetNum('83'),'none',500);

	MoveWidgetBy('u111', GetNum('0'), GetNum('83'),'none',500);

	SetPanelState('u62', 'pd0u62','fade','',0,'none','',500);

	SetPanelState('u62', 'pd1u62','none','',500,'fade','',0);

}

}

widgetIdToHideFunction['u51'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u67', GetNum('0'), GetNum('-83'),'none',500);

	MoveWidgetBy('u86', GetNum('0'), GetNum('-83'),'none',500);

	MoveWidgetBy('u155', GetNum('0'), GetNum('-83'),'none',500);

	MoveWidgetBy('u126', GetNum('0'), GetNum('-83'),'none',500);

	MoveWidgetBy('u111', GetNum('0'), GetNum('-83'),'none',500);

	SetPanelState('u62', 'pd1u62','fade','',0,'none','',500);

	SetPanelState('u62', 'pd0u62','none','',500,'fade','',0);

}

}

widgetIdToShowFunction['u112'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u155', GetNum('0'), GetNum('55'),'none',500);

	MoveWidgetBy('u126', GetNum('0'), GetNum('55'),'none',500);

	SetPanelState('u121', 'pd0u121','fade','',0,'none','',500);

	SetPanelState('u121', 'pd1u121','none','',500,'fade','',0);

}

}

widgetIdToHideFunction['u112'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u155', GetNum('0'), GetNum('-55'),'none',500);

	MoveWidgetBy('u126', GetNum('0'), GetNum('-55'),'none',500);

	SetPanelState('u121', 'pd1u121','fade','',0,'none','',500);

	SetPanelState('u121', 'pd0u121','none','',500,'fade','',0);

}

}
document.getElementById('u115_img').tabIndex = 0;

u115.style.cursor = 'pointer';
$axure.eventManager.click('u115', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('AddPatient.html');

}
});
document.getElementById('u122_img').tabIndex = 0;

u122.style.cursor = 'pointer';
$axure.eventManager.click('u122', function(e) {

if ((GetWidgetVisibility('u112')) == (true)) {

	SetPanelVisibility('u112','hidden','none',500);

	SetPanelVisibility('u156','hidden','none',500);

	SetPanelVisibility('u51','hidden','none',500);

	SetPanelVisibility('u68','hidden','none',500);

	SetPanelVisibility('u127','hidden','none',500);

	SetPanelVisibility('u87','hidden','none',500);

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
gv_vAlignTable['u243'] = 'center';document.getElementById('u130_img').tabIndex = 0;

u130.style.cursor = 'pointer';
$axure.eventManager.click('u130', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PatientReminder.html');

}
});
gv_vAlignTable['u7'] = 'top';document.getElementById('u2_img').tabIndex = 0;

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

if ((GetWidgetVisibility('u127')) == (false)) {

	SetPanelVisibility('u127','','fade',500);

	SetPanelVisibility('u87','hidden','none',500);

	SetPanelVisibility('u51','hidden','none',500);

	SetPanelVisibility('u68','hidden','none',500);

	SetPanelVisibility('u156','hidden','none',500);

}
});
document.getElementById('u140_img').tabIndex = 0;

u140.style.cursor = 'pointer';
$axure.eventManager.click('u140', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ListDisclosure.html');

}
});
gv_vAlignTable['u17'] = 'center';gv_vAlignTable['u222'] = 'top';gv_vAlignTable['u135'] = 'center';document.getElementById('u151_img').tabIndex = 0;

u151.style.cursor = 'pointer';
$axure.eventManager.click('u151', function(e) {

if ((GetWidgetVisibility('u127')) == (true)) {

	SetPanelVisibility('u127','hidden','none',500);

	SetPanelVisibility('u87','hidden','none',500);

	SetPanelVisibility('u51','hidden','none',500);

	SetPanelVisibility('u68','hidden','none',500);

	SetPanelVisibility('u156','hidden','none',500);

}
});
gv_vAlignTable['u55'] = 'center';gv_vAlignTable['u101'] = 'center';gv_vAlignTable['u186'] = 'center';
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

if ((GetWidgetVisibility('u87')) == (true)) {

	SetPanelVisibility('u87','hidden','none',500);

	SetPanelVisibility('u156','hidden','none',500);

	SetPanelVisibility('u51','hidden','none',500);

	SetPanelVisibility('u68','hidden','none',500);

	SetPanelVisibility('u127','hidden','none',500);

	SetPanelVisibility('u112','hidden','none',500);

}
});
gv_vAlignTable['u27'] = 'center';
u235.style.cursor = 'pointer';
$axure.eventManager.click('u235', function(e) {

if (true) {

	SetPanelVisibility('u229','hidden','none',500);

}
});
document.getElementById('u138_img').tabIndex = 0;

u138.style.cursor = 'pointer';
$axure.eventManager.click('u138', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Reports.html');

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

if ((GetWidgetVisibility('u51')) == (false)) {

	SetPanelVisibility('u51','','fade',500);

	SetPanelVisibility('u156','hidden','none',500);

	SetPanelVisibility('u68','hidden','none',500);

	SetPanelVisibility('u87','hidden','none',500);

	SetPanelVisibility('u127','hidden','none',500);

	SetPanelVisibility('u112','hidden','none',500);

}
});
gv_vAlignTable['u120'] = 'center';gv_vAlignTable['u152'] = 'center';gv_vAlignTable['u110'] = 'center';gv_vAlignTable['u6'] = 'top';gv_vAlignTable['u108'] = 'center';gv_vAlignTable['u247'] = 'center';gv_vAlignTable['u251'] = 'center';gv_vAlignTable['u141'] = 'center';gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u133'] = 'center';gv_vAlignTable['u200'] = 'center';document.getElementById('u34_img').tabIndex = 0;

u34.style.cursor = 'pointer';
$axure.eventManager.click('u34', function(e) {

if (true) {

	SetPanelVisibility('u23','hidden','none',500);

}
});
gv_vAlignTable['u89'] = 'center';gv_vAlignTable['u208'] = 'center';gv_vAlignTable['u47'] = 'center';gv_vAlignTable['u184'] = 'center';gv_vAlignTable['u72'] = 'center';gv_vAlignTable['u103'] = 'center';gv_vAlignTable['u164'] = 'center';gv_vAlignTable['u99'] = 'center';gv_vAlignTable['u233'] = 'top';gv_vAlignTable['u66'] = 'center';gv_vAlignTable['u78'] = 'center';gv_vAlignTable['u57'] = 'center';
$axure.eventManager.mouseover('u16', function(e) {
if (!IsTrueMouseOver('u16',e)) return;
if (true) {

	SetPanelVisibility('u13','','none',500);

}
});
gv_vAlignTable['u212'] = 'center';gv_vAlignTable['u125'] = 'center';gv_vAlignTable['u41'] = 'center';document.getElementById('u172_img').tabIndex = 0;

u172.style.cursor = 'pointer';
$axure.eventManager.click('u172', function(e) {

if ((GetWidgetVisibility('u156')) == (false)) {

	SetPanelVisibility('u156','','fade',500);

	SetPanelVisibility('u87','hidden','none',500);

	SetPanelVisibility('u51','hidden','none',500);

	SetPanelVisibility('u68','hidden','none',500);

	SetPanelVisibility('u127','hidden','none',500);

}
});
document.getElementById('u246_img').tabIndex = 0;

u246.style.cursor = 'pointer';
$axure.eventManager.click('u246', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('EditAdduser.html');

}
});
gv_vAlignTable['u149'] = 'center';document.getElementById('u54_img').tabIndex = 0;

u54.style.cursor = 'pointer';
$axure.eventManager.click('u54', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u118'] = 'center';gv_vAlignTable['u231'] = 'center';gv_vAlignTable['u176'] = 'center';gv_vAlignTable['u216'] = 'center';gv_vAlignTable['u85'] = 'center';gv_vAlignTable['u182'] = 'center';gv_vAlignTable['u249'] = 'center';gv_vAlignTable['u241'] = 'center';gv_vAlignTable['u10'] = 'top';gv_vAlignTable['u204'] = 'center';document.getElementById('u144_img').tabIndex = 0;

u144.style.cursor = 'pointer';
$axure.eventManager.click('u144', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('OverdueImmunization.html');

}
});
gv_vAlignTable['u202'] = 'center';gv_vAlignTable['u166'] = 'center';document.getElementById('u82_img').tabIndex = 0;

u82.style.cursor = 'pointer';
$axure.eventManager.click('u82', function(e) {

if ((GetWidgetVisibility('u68')) == (true)) {

	SetPanelVisibility('u68','hidden','none',500);

	SetPanelVisibility('u156','hidden','none',500);

	SetPanelVisibility('u51','hidden','none',500);

	SetPanelVisibility('u87','hidden','none',500);

	SetPanelVisibility('u127','hidden','none',500);

	SetPanelVisibility('u112','hidden','none',500);

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
gv_vAlignTable['u95'] = 'center';gv_vAlignTable['u61'] = 'center';gv_vAlignTable['u116'] = 'center';gv_vAlignTable['u158'] = 'center';gv_vAlignTable['u74'] = 'center';gv_vAlignTable['u123'] = 'center';gv_vAlignTable['u223'] = 'top';gv_vAlignTable['u114'] = 'center';gv_vAlignTable['u33'] = 'top';gv_vAlignTable['u160'] = 'center';gv_vAlignTable['u221'] = 'center';document.getElementById('u71_img').tabIndex = 0;

u71.style.cursor = 'pointer';
$axure.eventManager.click('u71', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PasswordSettings.html');

}
});
gv_vAlignTable['u198'] = 'center';gv_vAlignTable['u5'] = 'top';document.getElementById('u98_img').tabIndex = 0;

u98.style.cursor = 'pointer';
$axure.eventManager.click('u98', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('RecordDisclosure.html');

}
});
gv_vAlignTable['u214'] = 'center';gv_vAlignTable['u225'] = 'center';gv_vAlignTable['u43'] = 'center';document.getElementById('u56_img').tabIndex = 0;

u56.style.cursor = 'pointer';
$axure.eventManager.click('u56', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('UserGroupList.html');

}
});
document.getElementById('u142_img').tabIndex = 0;

u142.style.cursor = 'pointer';
$axure.eventManager.click('u142', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ImmunizationRegistry.html');

}
});
gv_vAlignTable['u106'] = 'center';gv_vAlignTable['u168'] = 'center';gv_vAlignTable['u154'] = 'center';gv_vAlignTable['u227'] = 'center';gv_vAlignTable['u139'] = 'center';gv_vAlignTable['u53'] = 'center';gv_vAlignTable['u192'] = 'center';document.getElementById('u250_img').tabIndex = 0;

u250.style.cursor = 'pointer';
$axure.eventManager.click('u250', function(e) {

if (true) {

	SetPanelVisibility('u229','','none',500);

}
});

$axure.eventManager.mouseover('u19', function(e) {
if (!IsTrueMouseOver('u19',e)) return;
if (true) {

	SetPanelVisibility('u13','','none',500);

}
});
gv_vAlignTable['u19'] = 'top';document.getElementById('u242_img').tabIndex = 0;

u242.style.cursor = 'pointer';
$axure.eventManager.click('u242', function(e) {

if (true) {

	SetPanelVisibility('u229','','none',500);

}
});
gv_vAlignTable['u206'] = 'center';document.getElementById('u109_img').tabIndex = 0;

u109.style.cursor = 'pointer';
$axure.eventManager.click('u109', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
document.getElementById('u84_img').tabIndex = 0;

u84.style.cursor = 'pointer';
$axure.eventManager.click('u84', function(e) {

if ((GetWidgetVisibility('u68')) == (false)) {

	SetPanelVisibility('u68','','fade',500);

	SetPanelVisibility('u156','hidden','none',500);

	SetPanelVisibility('u51','hidden','none',500);

	SetPanelVisibility('u87','hidden','none',500);

	SetPanelVisibility('u127','hidden','none',500);

	SetPanelVisibility('u112','hidden','none',500);

}
});
gv_vAlignTable['u239'] = 'center';gv_vAlignTable['u97'] = 'center';document.getElementById('u63_img').tabIndex = 0;

u63.style.cursor = 'pointer';
$axure.eventManager.click('u63', function(e) {

if ((GetWidgetVisibility('u51')) == (true)) {

	SetPanelVisibility('u51','hidden','none',500);

	SetPanelVisibility('u156','hidden','none',500);

	SetPanelVisibility('u68','hidden','none',500);

	SetPanelVisibility('u87','hidden','none',500);

	SetPanelVisibility('u127','hidden','none',500);

	SetPanelVisibility('u112','hidden','none',500);

}
});
document.getElementById('u170_img').tabIndex = 0;

u170.style.cursor = 'pointer';
$axure.eventManager.click('u170', function(e) {

if ((GetWidgetVisibility('u156')) == (true)) {

	SetPanelVisibility('u156','hidden','none',500);

	SetPanelVisibility('u87','hidden','none',500);

	SetPanelVisibility('u51','hidden','none',500);

	SetPanelVisibility('u68','hidden','none',500);

	SetPanelVisibility('u127','hidden','none',500);

}
});
gv_vAlignTable['u76'] = 'center';document.getElementById('u134_img').tabIndex = 0;

u134.style.cursor = 'pointer';
$axure.eventManager.click('u134', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Automate_measure_Calculation.html');

}
});
gv_vAlignTable['u190'] = 'center';u9.tabIndex = 0;

u9.style.cursor = 'pointer';
$axure.eventManager.click('u9', function(e) {

if (true) {

	parent.location.href = 'Login.html';

}
});
gv_vAlignTable['u9'] = 'top';
u234.style.cursor = 'pointer';
$axure.eventManager.click('u234', function(e) {

if (true) {

	SetPanelVisibility('u229','hidden','none',500);

}
});
gv_vAlignTable['u147'] = 'center';gv_vAlignTable['u91'] = 'center';gv_vAlignTable['u131'] = 'center';gv_vAlignTable['u64'] = 'center';gv_vAlignTable['u70'] = 'center';gv_vAlignTable['u162'] = 'center';document.getElementById('u117_img').tabIndex = 0;

u117.style.cursor = 'pointer';
$axure.eventManager.click('u117', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('SearchPatient.html');

}
});
gv_vAlignTable['u210'] = 'center';gv_vAlignTable['u29'] = 'top';document.getElementById('u132_img').tabIndex = 0;

u132.style.cursor = 'pointer';
$axure.eventManager.click('u132', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PatientList.html');

}
});
gv_vAlignTable['u129'] = 'center';document.getElementById('u58_img').tabIndex = 0;

u58.style.cursor = 'pointer';
$axure.eventManager.click('u58', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('UserRights.html');

}
});
gv_vAlignTable['u173'] = 'center';gv_vAlignTable['u39'] = 'center';gv_vAlignTable['u171'] = 'center';gv_vAlignTable['u31'] = 'top';gv_vAlignTable['u232'] = 'top';gv_vAlignTable['u83'] = 'center';
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

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Intigrity.html');

}
});
gv_vAlignTable['u196'] = 'center';gv_vAlignTable['u15'] = 'center';document.getElementById('u124_img').tabIndex = 0;

u124.style.cursor = 'pointer';
$axure.eventManager.click('u124', function(e) {

if ((GetWidgetVisibility('u112')) == (false)) {

	SetPanelVisibility('u112','','fade',500);

	SetPanelVisibility('u156','hidden','none',500);

	SetPanelVisibility('u51','hidden','none',500);

	SetPanelVisibility('u68','hidden','none',500);

	SetPanelVisibility('u127','hidden','none',500);

	SetPanelVisibility('u87','hidden','none',500);

}
});
gv_vAlignTable['u80'] = 'center';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u245'] = 'center';document.getElementById('u148_img').tabIndex = 0;

u148.style.cursor = 'pointer';
$axure.eventManager.click('u148', function(e) {

if (true) {

	SetPanelVisibility('u127','toggle','none',500);

	SetPanelVisibility('u51','hidden','none',500);

	SetPanelVisibility('u68','hidden','none',500);

}
});
gv_vAlignTable['u93'] = 'center';gv_vAlignTable['u145'] = 'center';gv_vAlignTable['u237'] = 'center';gv_vAlignTable['u12'] = 'top';gv_vAlignTable['u25'] = 'center';gv_vAlignTable['u59'] = 'center';gv_vAlignTable['u137'] = 'center';document.getElementById('u244_img').tabIndex = 0;
HookHover('u244', false);

u244.style.cursor = 'pointer';
$axure.eventManager.click('u244', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Adduser.html');

}
});

$axure.eventManager.mouseover('u18', function(e) {
if (!IsTrueMouseOver('u18',e)) return;
if (true) {

	SetPanelVisibility('u13','','none',500);

}
});
gv_vAlignTable['u18'] = 'top';document.getElementById('u248_img').tabIndex = 0;

u248.style.cursor = 'pointer';
$axure.eventManager.click('u248', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('DeleteUserList.html');

}
});
gv_vAlignTable['u45'] = 'center';gv_vAlignTable['u22'] = 'top';gv_vAlignTable['u143'] = 'center';document.getElementById('u107_img').tabIndex = 0;

u107.style.cursor = 'pointer';
$axure.eventManager.click('u107', function(e) {

if ((GetWidgetVisibility('u87')) == (false)) {

	SetPanelVisibility('u87','','fade',500);

	SetPanelVisibility('u156','hidden','none',500);

	SetPanelVisibility('u51','hidden','none',500);

	SetPanelVisibility('u68','hidden','none',500);

	SetPanelVisibility('u127','hidden','none',500);

	SetPanelVisibility('u112','hidden','none',500);

}
});
gv_vAlignTable['u35'] = 'center';document.getElementById('u136_img').tabIndex = 0;

u136.style.cursor = 'pointer';
$axure.eventManager.click('u136', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PQRS_Report.html');

}
});
gv_vAlignTable['u218'] = 'center';gv_vAlignTable['u180'] = 'center';
u28.style.cursor = 'pointer';
$axure.eventManager.click('u28', function(e) {

if (true) {

	SetPanelVisibility('u23','hidden','none',500);

SetWidgetRichText('u22', '<p style="text-align:right;"><span style="font-family:Arial;font-size:12px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">( Location A )</span></p>');

SetCheckState('u30', false);

SetCheckState('u32', false);

}
});
gv_vAlignTable['u194'] = 'center';gv_vAlignTable['u188'] = 'center';