for(var i = 0; i < 337; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

widgetIdToShowFunction['u205'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u221', GetNum('0'), GetNum('83'),'none',500);

	MoveWidgetBy('u240', GetNum('0'), GetNum('83'),'none',500);

	MoveWidgetBy('u309', GetNum('0'), GetNum('83'),'none',500);

	MoveWidgetBy('u280', GetNum('0'), GetNum('83'),'none',500);

	MoveWidgetBy('u265', GetNum('0'), GetNum('83'),'none',500);

	SetPanelState('u216', 'pd0u216','fade','',0,'none','',500);

	SetPanelState('u216', 'pd1u216','none','',500,'fade','',0);

}

}

widgetIdToHideFunction['u205'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u221', GetNum('0'), GetNum('-83'),'none',500);

	MoveWidgetBy('u240', GetNum('0'), GetNum('-83'),'none',500);

	MoveWidgetBy('u309', GetNum('0'), GetNum('-83'),'none',500);

	MoveWidgetBy('u280', GetNum('0'), GetNum('-83'),'none',500);

	MoveWidgetBy('u265', GetNum('0'), GetNum('-83'),'none',500);

	SetPanelState('u216', 'pd1u216','fade','',0,'none','',500);

	SetPanelState('u216', 'pd0u216','none','',500,'fade','',0);

}

}

widgetIdToShowFunction['u310'] = function() {
var e = windowEvent;

if (true) {

	SetPanelState('u323', 'pd0u323','fade','',0,'none','',500);

	SetPanelState('u323', 'pd1u323','none','',500,'fade','',0);

	MoveWidgetBy('u280', GetNum('0'), GetNum('109'),'none',500);

}

}

widgetIdToHideFunction['u310'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u280', GetNum('0'), GetNum('-109'),'none',500);

	SetPanelState('u323', 'pd1u323','fade','',0,'none','',500);

	SetPanelState('u323', 'pd0u323','none','',500,'fade','',0);

}

}

widgetIdToShowFunction['u241'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u309', GetNum('0'), GetNum('162'),'none',500);

	MoveWidgetBy('u280', GetNum('0'), GetNum('162'),'none',500);

	MoveWidgetBy('u265', GetNum('0'), GetNum('162'),'none',500);

	SetPanelState('u258', 'pd0u258','fade','',0,'none','',500);

	SetPanelState('u258', 'pd1u258','none','',500,'fade','',0);

}

}

widgetIdToHideFunction['u241'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u309', GetNum('0'), GetNum('-162'),'none',500);

	MoveWidgetBy('u280', GetNum('0'), GetNum('-162'),'none',500);

	MoveWidgetBy('u265', GetNum('0'), GetNum('-162'),'none',500);

	SetPanelState('u258', 'pd1u258','fade','',0,'none','',500);

	SetPanelState('u258', 'pd0u258','none','',500,'fade','',0);

}

}

widgetIdToShowFunction['u222'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u240', GetNum('0'), GetNum('109'),'none',500);

	MoveWidgetBy('u309', GetNum('0'), GetNum('109'),'none',500);

	MoveWidgetBy('u280', GetNum('0'), GetNum('109'),'none',500);

	MoveWidgetBy('u265', GetNum('0'), GetNum('109'),'none',500);

	SetPanelState('u235', 'pd0u235','fade','',0,'none','',500);

	SetPanelState('u235', 'pd1u235','none','',500,'fade','',0);

}

}

widgetIdToHideFunction['u222'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u240', GetNum('0'), GetNum('-109'),'none',500);

	MoveWidgetBy('u309', GetNum('0'), GetNum('-109'),'none',500);

	MoveWidgetBy('u280', GetNum('0'), GetNum('-109'),'none',500);

	MoveWidgetBy('u265', GetNum('0'), GetNum('-109'),'none',500);

	SetPanelState('u235', 'pd1u235','fade','',500,'none','',500);

	SetPanelState('u235', 'pd0u235','none','',500,'fade','',500);

}

}

widgetIdToShowFunction['u332'] = function() {
var e = windowEvent;

if (true) {

;

}

}

widgetIdToHideFunction['u332'] = function() {
var e = windowEvent;

if (true) {

SetWidgetFormText('u331', '' + (GetGlobalVariableValue('Month')) + '/' + (GetGlobalVariableValue('Day')) + '/' + (GetGlobalVariableValue('Year')) + '');

}

}

widgetIdToShowFunction['u281'] = function() {
var e = windowEvent;

if (true) {

	SetPanelState('u304', 'pd0u304','fade','',0,'none','',500);

	SetPanelState('u304', 'pd1u304','none','',500,'fade','',0);

}

}

widgetIdToHideFunction['u281'] = function() {
var e = windowEvent;

if (true) {

	SetPanelState('u304', 'pd1u304','fade','',0,'none','',500);

	SetPanelState('u304', 'pd0u304','none','',500,'fade','',0);

}

}

widgetIdToShowFunction['u266'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u309', GetNum('0'), GetNum('55'),'none',500);

	MoveWidgetBy('u280', GetNum('0'), GetNum('55'),'none',500);

	SetPanelState('u275', 'pd0u275','fade','',0,'none','',500);

	SetPanelState('u275', 'pd1u275','none','',500,'fade','',0);

}

}

widgetIdToHideFunction['u266'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u309', GetNum('0'), GetNum('-55'),'none',500);

	MoveWidgetBy('u280', GetNum('0'), GetNum('-55'),'none',500);

	SetPanelState('u275', 'pd1u275','fade','',0,'none','',500);

	SetPanelState('u275', 'pd0u275','none','',500,'fade','',0);

}

}
document.getElementById('u167_img').tabIndex = 0;

u167.style.cursor = 'pointer';
$axure.eventManager.click('u167', function(e) {

if (true) {

	SetPanelVisibility('u65','hidden','none',500);

}
});
gv_vAlignTable['u299'] = 'center';gv_vAlignTable['u36'] = 'top';gv_vAlignTable['u180'] = 'center';gv_vAlignTable['u97'] = 'center';
$axure.eventManager.change('u60', function(e) {

if ((GetSelectedOption('u60')) == ('Select One...')) {

}
});

$axure.eventManager.blur('u60', function(e) {

if ((GetSelectedOption('u60')) == ('Select One...')) {

}
else
if (true) {

}
});
document.getElementById('u298_img').tabIndex = 0;

u298.style.cursor = 'pointer';
$axure.eventManager.click('u298', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('OverdueImmunization.html');

}
});
gv_vAlignTable['u139'] = 'center';gv_vAlignTable['u201'] = 'center';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u215'] = 'center';gv_vAlignTable['u193'] = 'center';gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u151'] = 'center';gv_vAlignTable['u71'] = 'center';gv_vAlignTable['u202'] = 'top';gv_vAlignTable['u165'] = 'center';gv_vAlignTable['u54'] = 'center';document.getElementById('u236_img').tabIndex = 0;

u236.style.cursor = 'pointer';
$axure.eventManager.click('u236', function(e) {

if ((GetWidgetVisibility('u222')) == (true)) {

	SetPanelVisibility('u222','hidden','none',500);

	SetPanelVisibility('u310','hidden','none',500);

	SetPanelVisibility('u205','hidden','none',500);

	SetPanelVisibility('u241','hidden','none',500);

	SetPanelVisibility('u281','hidden','none',500);

	SetPanelVisibility('u266','hidden','none',500);

}
});
gv_vAlignTable['u67'] = 'center';document.getElementById('u269_img').tabIndex = 0;

u269.style.cursor = 'pointer';
$axure.eventManager.click('u269', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('AddPatient.html');

}
});

u331.style.cursor = 'pointer';
$axure.eventManager.click('u331', function(e) {

if (true) {

	SetPanelVisibility('u332','','none',500);

}
});

$axure.eventManager.focus('u331', function(e) {

if (true) {

SetWidgetFormText('u331', '' + (GetGlobalVariableValue('Year')) + '-' + (GetGlobalVariableValue('Month')) + '-01');

}
});

$axure.eventManager.blur('u331', function(e) {

if ((GetWidgetText('u331')) == ('')) {

SetWidgetFormText('u331', '' + (GetGlobalVariableValue('Year')) + '-' + (GetGlobalVariableValue('Month')) + '-01');

}
});
gv_vAlignTable['u287'] = 'center';gv_vAlignTable['u318'] = 'center';gv_vAlignTable['u113'] = 'center';gv_vAlignTable['u268'] = 'center';gv_vAlignTable['u330'] = 'center';gv_vAlignTable['u159'] = 'center';gv_vAlignTable['u163'] = 'center';document.getElementById('u326_img').tabIndex = 0;

u326.style.cursor = 'pointer';
$axure.eventManager.click('u326', function(e) {

if ((GetWidgetVisibility('u310')) == (false)) {

	SetPanelVisibility('u310','','fade',500);

	SetPanelVisibility('u241','hidden','none',500);

	SetPanelVisibility('u205','hidden','none',500);

	SetPanelVisibility('u222','hidden','none',500);

	SetPanelVisibility('u281','hidden','none',500);

}
});
gv_vAlignTable['u93'] = 'center';document.getElementById('u307_img').tabIndex = 0;

u307.style.cursor = 'pointer';
$axure.eventManager.click('u307', function(e) {

if ((GetWidgetVisibility('u281')) == (false)) {

	SetPanelVisibility('u281','','fade',500);

	SetPanelVisibility('u241','hidden','none',500);

	SetPanelVisibility('u205','hidden','none',500);

	SetPanelVisibility('u222','hidden','none',500);

	SetPanelVisibility('u310','hidden','none',500);

}
});
gv_vAlignTable['u285'] = 'center';
$axure.eventManager.mouseover('u18', function(e) {
if (!IsTrueMouseOver('u18',e)) return;
if (true) {

	SetPanelVisibility('u13','','none',500);

}
});
gv_vAlignTable['u18'] = 'top';gv_vAlignTable['u79'] = 'center';gv_vAlignTable['u176'] = 'top';gv_vAlignTable['u55'] = 'top';gv_vAlignTable['u149'] = 'center';gv_vAlignTable['u111'] = 'center';gv_vAlignTable['u306'] = 'center';document.getElementById('u284_img').tabIndex = 0;

u284.style.cursor = 'pointer';
$axure.eventManager.click('u284', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PatientReminder.html');

}
});
gv_vAlignTable['u12'] = 'top';gv_vAlignTable['u161'] = 'center';document.getElementById('u305_img').tabIndex = 0;

u305.style.cursor = 'pointer';
$axure.eventManager.click('u305', function(e) {

if ((GetWidgetVisibility('u281')) == (true)) {

	SetPanelVisibility('u281','hidden','none',500);

	SetPanelVisibility('u241','hidden','none',500);

	SetPanelVisibility('u205','hidden','none',500);

	SetPanelVisibility('u222','hidden','none',500);

	SetPanelVisibility('u310','hidden','none',500);

}
});
gv_vAlignTable['u283'] = 'center';u20.tabIndex = 0;

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
gv_vAlignTable['u20'] = 'top';gv_vAlignTable['u279'] = 'center';gv_vAlignTable['u297'] = 'center';
$axure.eventManager.mouseover('u8', function(e) {
if (!IsTrueMouseOver('u8',e)) return;
if (true) {

	SetPanelState('u23', 'pd0u23','none','',500,'none','',500);

	BringToFront("u23");

}
});
gv_vAlignTable['u8'] = 'top';gv_vAlignTable['u25'] = 'center';gv_vAlignTable['u81'] = 'center';gv_vAlignTable['u228'] = 'center';gv_vAlignTable['u123'] = 'center';document.getElementById('u278_img').tabIndex = 0;

u278.style.cursor = 'pointer';
$axure.eventManager.click('u278', function(e) {

if ((GetWidgetVisibility('u266')) == (false)) {

	SetPanelVisibility('u266','','fade',500);

	SetPanelVisibility('u310','hidden','none',500);

	SetPanelVisibility('u205','hidden','none',500);

	SetPanelVisibility('u222','hidden','none',500);

	SetPanelVisibility('u281','hidden','none',500);

	SetPanelVisibility('u241','hidden','none',500);

}
});
document.getElementById('u296_img').tabIndex = 0;

u296.style.cursor = 'pointer';
$axure.eventManager.click('u296', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ImmunizationRegistry.html');

}
});
gv_vAlignTable['u137'] = 'center';gv_vAlignTable['u33'] = 'top';gv_vAlignTable['u213'] = 'center';gv_vAlignTable['u303'] = 'center';gv_vAlignTable['u5'] = 'top';gv_vAlignTable['u295'] = 'center';gv_vAlignTable['u51'] = 'center';gv_vAlignTable['u109'] = 'center';gv_vAlignTable['u253'] = 'center';gv_vAlignTable['u172'] = 'center';document.getElementById('u302_img').tabIndex = 0;

u302.style.cursor = 'pointer';
$axure.eventManager.click('u302', function(e) {

if (true) {

	SetPanelVisibility('u281','toggle','none',500);

	SetPanelVisibility('u205','hidden','none',500);

	SetPanelVisibility('u222','hidden','none',500);

}
});
gv_vAlignTable['u121'] = 'center';gv_vAlignTable['u316'] = 'center';document.getElementById('u294_img').tabIndex = 0;

u294.style.cursor = 'pointer';
$axure.eventManager.click('u294', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ListDisclosure.html');

}
});
gv_vAlignTable['u135'] = 'center';document.getElementById('u252_img').tabIndex = 0;

u252.style.cursor = 'pointer';
$axure.eventManager.click('u252', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u191'] = 'center';gv_vAlignTable['u64'] = 'top';gv_vAlignTable['u239'] = 'center';gv_vAlignTable['u301'] = 'center';document.getElementById('u2_img').tabIndex = 0;

u2.style.cursor = 'pointer';
$axure.eventManager.click('u2', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u293'] = 'center';u21.tabIndex = 0;

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
gv_vAlignTable['u21'] = 'top';gv_vAlignTable['u251'] = 'center';gv_vAlignTable['u170'] = 'center';
$axure.eventManager.mouseover('u16', function(e) {
if (!IsTrueMouseOver('u16',e)) return;
if (true) {

	SetPanelVisibility('u13','','none',500);

}
});
document.getElementById('u238_img').tabIndex = 0;

u238.style.cursor = 'pointer';
$axure.eventManager.click('u238', function(e) {

if ((GetWidgetVisibility('u222')) == (false)) {

	SetPanelVisibility('u222','','fade',500);

	SetPanelVisibility('u310','hidden','none',500);

	SetPanelVisibility('u205','hidden','none',500);

	SetPanelVisibility('u241','hidden','none',500);

	SetPanelVisibility('u281','hidden','none',500);

	SetPanelVisibility('u266','hidden','none',500);

}
});
gv_vAlignTable['u314'] = 'center';document.getElementById('u292_img').tabIndex = 0;

u292.style.cursor = 'pointer';
$axure.eventManager.click('u292', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Reports.html');

}
});
gv_vAlignTable['u77'] = 'center';gv_vAlignTable['u133'] = 'center';gv_vAlignTable['u147'] = 'center';document.getElementById('u34_img').tabIndex = 0;

u34.style.cursor = 'pointer';
$axure.eventManager.click('u34', function(e) {

if (true) {

	SetPanelVisibility('u23','hidden','none',500);

}
});
gv_vAlignTable['u61'] = 'top';gv_vAlignTable['u95'] = 'center';gv_vAlignTable['u327'] = 'center';gv_vAlignTable['u52'] = 'top';gv_vAlignTable['u125'] = 'center';document.getElementById('u263_img').tabIndex = 0;

u263.style.cursor = 'pointer';
$axure.eventManager.click('u263', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u91'] = 'center';gv_vAlignTable['u277'] = 'center';gv_vAlignTable['u47'] = 'center';document.getElementById('u212_img').tabIndex = 0;

u212.style.cursor = 'pointer';
$axure.eventManager.click('u212', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('UserRights.html');

}
});
gv_vAlignTable['u131'] = 'center';
u28.style.cursor = 'pointer';
$axure.eventManager.click('u28', function(e) {

if (true) {

	SetPanelVisibility('u23','hidden','none',500);

SetWidgetRichText('u22', '<p style="text-align:right;"><span style="font-family:Arial;font-size:12px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">( Location A )</span></p>');

SetCheckState('u30', false);

SetCheckState('u32', false);

}
});
gv_vAlignTable['u145'] = 'center';gv_vAlignTable['u262'] = 'center';gv_vAlignTable['u322'] = 'center';document.getElementById('u276_img').tabIndex = 0;

u276.style.cursor = 'pointer';
$axure.eventManager.click('u276', function(e) {

if ((GetWidgetVisibility('u266')) == (true)) {

	SetPanelVisibility('u266','hidden','none',500);

	SetPanelVisibility('u310','hidden','none',500);

	SetPanelVisibility('u205','hidden','none',500);

	SetPanelVisibility('u222','hidden','none',500);

	SetPanelVisibility('u281','hidden','none',500);

	SetPanelVisibility('u241','hidden','none',500);

}
});
gv_vAlignTable['u89'] = 'center';gv_vAlignTable['u249'] = 'center';gv_vAlignTable['u211'] = 'center';gv_vAlignTable['u85'] = 'center';gv_vAlignTable['u22'] = 'top';document.getElementById('u261_img').tabIndex = 0;

u261.style.cursor = 'pointer';
$axure.eventManager.click('u261', function(e) {

if ((GetWidgetVisibility('u241')) == (false)) {

	SetPanelVisibility('u241','','fade',500);

	SetPanelVisibility('u310','hidden','none',500);

	SetPanelVisibility('u205','hidden','none',500);

	SetPanelVisibility('u222','hidden','none',500);

	SetPanelVisibility('u281','hidden','none',500);

	SetPanelVisibility('u266','hidden','none',500);

}
});
gv_vAlignTable['u175'] = 'top';gv_vAlignTable['u43'] = 'center';gv_vAlignTable['u17'] = 'center';document.getElementById('u210_img').tabIndex = 0;

u210.style.cursor = 'pointer';
$axure.eventManager.click('u210', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('UserGroupList.html');

}
});
gv_vAlignTable['u325'] = 'center';gv_vAlignTable['u107'] = 'center';
u30.style.cursor = 'pointer';
$axure.eventManager.click('u30', function(e) {

if (true) {

	SetPanelVisibility('u23','hidden','none',500);

SetWidgetRichText('u22', '<p style="text-align:right;"><span style="font-family:Arial;font-size:12px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">( Location B )</span></p>');

SetCheckState('u28', false);

SetCheckState('u32', false);

}
});
gv_vAlignTable['u224'] = 'center';gv_vAlignTable['u143'] = 'center';gv_vAlignTable['u260'] = 'center';u9.tabIndex = 0;

u9.style.cursor = 'pointer';
$axure.eventManager.click('u9', function(e) {

if (true) {

	parent.location.href = 'Login.html';

}
});
gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u157'] = 'center';gv_vAlignTable['u59'] = 'top';gv_vAlignTable['u189'] = 'center';gv_vAlignTable['u35'] = 'center';gv_vAlignTable['u274'] = 'center';gv_vAlignTable['u237'] = 'center';gv_vAlignTable['u105'] = 'center';gv_vAlignTable['u6'] = 'top';gv_vAlignTable['u29'] = 'top';gv_vAlignTable['u155'] = 'center';gv_vAlignTable['u209'] = 'center';gv_vAlignTable['u272'] = 'center';
$axure.eventManager.mouseover('u19', function(e) {
if (!IsTrueMouseOver('u19',e)) return;
if (true) {

	SetPanelVisibility('u13','','none',500);

}
});
gv_vAlignTable['u19'] = 'top';gv_vAlignTable['u308'] = 'center';gv_vAlignTable['u119'] = 'center';gv_vAlignTable['u232'] = 'center';gv_vAlignTable['u75'] = 'center';document.getElementById('u208_img').tabIndex = 0;

u208.style.cursor = 'pointer';
$axure.eventManager.click('u208', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('UserList.html');

}
});
document.getElementById('u271_img').tabIndex = 0;

u271.style.cursor = 'pointer';
$axure.eventManager.click('u271', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('SearchPatient.html');

}
});
gv_vAlignTable['u312'] = 'center';gv_vAlignTable['u103'] = 'center';gv_vAlignTable['u220'] = 'center';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u117'] = 'center';gv_vAlignTable['u31'] = 'top';gv_vAlignTable['u234'] = 'center';gv_vAlignTable['u73'] = 'center';gv_vAlignTable['u270'] = 'center';gv_vAlignTable['u199'] = 'center';document.getElementById('u300_img').tabIndex = 0;

u300.style.cursor = 'pointer';
$axure.eventManager.click('u300', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Intigrity.html');

}
});
gv_vAlignTable['u87'] = 'center';gv_vAlignTable['u247'] = 'center';gv_vAlignTable['u226'] = 'center';gv_vAlignTable['u101'] = 'center';gv_vAlignTable['u115'] = 'center';gv_vAlignTable['u291'] = 'center';gv_vAlignTable['u7'] = 'top';gv_vAlignTable['u62'] = 'top';document.getElementById('u219_img').tabIndex = 0;

u219.style.cursor = 'pointer';
$axure.eventManager.click('u219', function(e) {

if ((GetWidgetVisibility('u205')) == (false)) {

	SetPanelVisibility('u205','','fade',500);

	SetPanelVisibility('u310','hidden','none',500);

	SetPanelVisibility('u222','hidden','none',500);

	SetPanelVisibility('u241','hidden','none',500);

	SetPanelVisibility('u281','hidden','none',500);

	SetPanelVisibility('u266','hidden','none',500);

}
});
document.getElementById('u259_img').tabIndex = 0;

u259.style.cursor = 'pointer';
$axure.eventManager.click('u259', function(e) {

if ((GetWidgetVisibility('u241')) == (true)) {

	SetPanelVisibility('u241','hidden','none',500);

	SetPanelVisibility('u310','hidden','none',500);

	SetPanelVisibility('u205','hidden','none',500);

	SetPanelVisibility('u222','hidden','none',500);

	SetPanelVisibility('u281','hidden','none',500);

	SetPanelVisibility('u266','hidden','none',500);

}
});
gv_vAlignTable['u57'] = 'top';document.getElementById('u290_img').tabIndex = 0;

u290.style.cursor = 'pointer';
$axure.eventManager.click('u290', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PQRS_Report.html');

}
});
gv_vAlignTable['u187'] = 'center';gv_vAlignTable['u245'] = 'center';
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
gv_vAlignTable['u218'] = 'center';gv_vAlignTable['u99'] = 'center';document.getElementById('u286_img').tabIndex = 0;

u286.style.cursor = 'pointer';
$axure.eventManager.click('u286', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PatientList.html');

}
});
gv_vAlignTable['u168'] = 'center';gv_vAlignTable['u230'] = 'center';gv_vAlignTable['u127'] = 'center';
u32.style.cursor = 'pointer';
$axure.eventManager.click('u32', function(e) {

if (true) {

	SetPanelVisibility('u23','hidden','none',500);

SetWidgetRichText('u22', '<p style="text-align:right;"><span style="font-family:Arial;font-size:12px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">( Location C )</span></p>');

SetCheckState('u28', false);

SetCheckState('u30', false);

}
});
gv_vAlignTable['u27'] = 'center';gv_vAlignTable['u83'] = 'top';gv_vAlignTable['u207'] = 'center';gv_vAlignTable['u185'] = 'center';document.getElementById('u324_img').tabIndex = 0;

u324.style.cursor = 'pointer';
$axure.eventManager.click('u324', function(e) {

if ((GetWidgetVisibility('u310')) == (true)) {

	SetPanelVisibility('u310','hidden','none',500);

	SetPanelVisibility('u241','hidden','none',500);

	SetPanelVisibility('u205','hidden','none',500);

	SetPanelVisibility('u222','hidden','none',500);

	SetPanelVisibility('u281','hidden','none',500);

}
});
gv_vAlignTable['u243'] = 'center';gv_vAlignTable['u257'] = 'center';gv_vAlignTable['u289'] = 'center';gv_vAlignTable['u45'] = 'center';document.getElementById('u53_img').tabIndex = 0;
HookHover('u53', false);

u53.style.cursor = 'pointer';
$axure.eventManager.click('u53', function(e) {

if (true) {

	SetPanelVisibility('u65','','none',500);

}
});
gv_vAlignTable['u129'] = 'center';gv_vAlignTable['u174'] = 'center';gv_vAlignTable['u183'] = 'center';gv_vAlignTable['u10'] = 'top';gv_vAlignTable['u141'] = 'center';gv_vAlignTable['u197'] = 'center';gv_vAlignTable['u39'] = 'center';gv_vAlignTable['u255'] = 'center';gv_vAlignTable['u15'] = 'center';document.getElementById('u288_img').tabIndex = 0;

u288.style.cursor = 'pointer';
$axure.eventManager.click('u288', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Automate_measure_Calculation.html');

}
});
gv_vAlignTable['u178'] = 'center';u335.tabIndex = 0;

u335.style.cursor = 'pointer';
$axure.eventManager.click('u335', function(e) {

if (true) {

SetWidgetFormText('u331', '' + (GetGlobalVariableValue('Year')) + '-' + (GetGlobalVariableValue('Month')) + '-22');

	SetPanelVisibility('u332','hidden','fade',50);

}
});
gv_vAlignTable['u264'] = 'center';
$axure.eventManager.change('u203', function(e) {

if ((GetSelectedOption('u203')) == ('Select One...')) {

}
});

$axure.eventManager.blur('u203', function(e) {

if ((GetSelectedOption('u203')) == ('Select One...')) {

}
else
if (true) {

}
});
gv_vAlignTable['u320'] = 'center';
$axure.eventManager.mouseover('u4', function(e) {
if (!IsTrueMouseOver('u4',e)) return;
if (true) {

	SetPanelVisibility('u13','','none',500);

	BringToFront("u13");

}
});
gv_vAlignTable['u4'] = 'top';document.getElementById('u217_img').tabIndex = 0;

u217.style.cursor = 'pointer';
$axure.eventManager.click('u217', function(e) {

if ((GetWidgetVisibility('u205')) == (true)) {

	SetPanelVisibility('u205','hidden','none',500);

	SetPanelVisibility('u310','hidden','none',500);

	SetPanelVisibility('u222','hidden','none',500);

	SetPanelVisibility('u241','hidden','none',500);

	SetPanelVisibility('u281','hidden','none',500);

	SetPanelVisibility('u266','hidden','none',500);

}
});
gv_vAlignTable['u195'] = 'center';document.getElementById('u225_img').tabIndex = 0;

u225.style.cursor = 'pointer';
$axure.eventManager.click('u225', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PasswordSettings.html');

}
});
gv_vAlignTable['u41'] = 'center';gv_vAlignTable['u334'] = 'center';gv_vAlignTable['u153'] = 'center';