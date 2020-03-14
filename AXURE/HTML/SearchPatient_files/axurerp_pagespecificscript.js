for(var i = 0; i < 528; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

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
gv_vAlignTable['u393'] = 'center';gv_vAlignTable['u488'] = 'center';gv_vAlignTable['u167'] = 'center';document.getElementById('u299_img').tabIndex = 0;

u299.style.cursor = 'pointer';
$axure.eventManager.click('u299', function(e) {

if (true) {

	SetPanelVisibility('u278','hidden','none',500);

	SetPanelVisibility('u275','','none',500);

	BringToFront("u275");

}
});
gv_vAlignTable['u36'] = 'top';gv_vAlignTable['u514'] = 'center';gv_vAlignTable['u492'] = 'center';gv_vAlignTable['u72'] = 'center';document.getElementById('u333_img').tabIndex = 0;

u333.style.cursor = 'pointer';
$axure.eventManager.click('u333', function(e) {

if (true) {

SetWidgetFormText('u305', 'Jessica');

	SetPanelVisibility('u320','hidden','fade',100);

}
});
gv_vAlignTable['u97'] = 'center';gv_vAlignTable['u152'] = 'center';gv_vAlignTable['u450'] = 'center';gv_vAlignTable['u231'] = 'center';gv_vAlignTable['u60'] = 'center';document.getElementById('u78_img').tabIndex = 0;

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
document.getElementById('u166_img').tabIndex = 0;

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
gv_vAlignTable['u298'] = 'top';gv_vAlignTable['u464'] = 'center';gv_vAlignTable['u139'] = 'center';gv_vAlignTable['u201'] = 'center';gv_vAlignTable['u95'] = 'center';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u215'] = 'center';gv_vAlignTable['u193'] = 'center';gv_vAlignTable['u11'] = 'top';document.getElementById('u126_img').tabIndex = 0;

u126.style.cursor = 'pointer';
$axure.eventManager.click('u126', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PatientList.html');

}
});
gv_vAlignTable['u527'] = 'center';gv_vAlignTable['u389'] = 'center';gv_vAlignTable['u165'] = 'center';document.getElementById('u138_img').tabIndex = 0;

u138.style.cursor = 'pointer';
$axure.eventManager.click('u138', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('OverdueImmunization.html');

}
});
gv_vAlignTable['u100'] = 'center';gv_vAlignTable['u236'] = 'top';document.getElementById('u269_img').tabIndex = 0;

u269.style.cursor = 'pointer';
$axure.eventManager.click('u269', function(e) {

if (true) {

	SetPanelState('u278', 'pd1u278','none','',500,'fade','',0);

	BringToFront("u278");

}
});
gv_vAlignTable['u287'] = 'top';gv_vAlignTable['u436'] = 'center';document.getElementById('u48_img').tabIndex = 0;

u48.style.cursor = 'pointer';
$axure.eventManager.click('u48', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('UserList.html');

}
});
document.getElementById('u345_img').tabIndex = 0;
HookHover('u345', false);

u345.style.cursor = 'pointer';
$axure.eventManager.click('u345', function(e) {

if (true) {

SetWidgetNotSelected('u343');
SetWidgetSelected('u345');
SetWidgetNotSelected('u347');
SetWidgetNotSelected('u349');
SetWidgetFormText('u305', '1001');

	SetPanelVisibility('u320','hidden','fade',100);

}
});
gv_vAlignTable['u340'] = 'center';document.getElementById('u65_img').tabIndex = 0;

u65.style.cursor = 'pointer';
$axure.eventManager.click('u65', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PasswordSettings.html');

}
});
gv_vAlignTable['u346'] = 'center';gv_vAlignTable['u476'] = 'center';document.getElementById('u318_img').tabIndex = 0;

u318.style.cursor = 'pointer';
$axure.eventManager.click('u318', function(e) {

if (true) {

	SetPanelVisibility('u310','hidden','none',500);

}
});
gv_vAlignTable['u268'] = 'center';gv_vAlignTable['u330'] = 'center';gv_vAlignTable['u274'] = 'center';gv_vAlignTable['u227'] = 'center';gv_vAlignTable['u326'] = 'center';gv_vAlignTable['u177'] = 'center';gv_vAlignTable['u93'] = 'center';gv_vAlignTable['u112'] = 'center';gv_vAlignTable['u307'] = 'center';
$axure.eventManager.mouseover('u18', function(e) {
if (!IsTrueMouseOver('u18',e)) return;
if (true) {

	SetPanelVisibility('u13','','none',500);

}
});
gv_vAlignTable['u18'] = 'top';document.getElementById('u50_img').tabIndex = 0;

u50.style.cursor = 'pointer';
$axure.eventManager.click('u50', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('UserGroupList.html');

}
});
gv_vAlignTable['u424'] = 'center';gv_vAlignTable['u74'] = 'center';gv_vAlignTable['u162'] = 'center';gv_vAlignTable['u460'] = 'center';gv_vAlignTable['u357'] = 'center';gv_vAlignTable['u79'] = 'center';gv_vAlignTable['u55'] = 'center';document.getElementById('u111_img').tabIndex = 0;

u111.style.cursor = 'pointer';
$axure.eventManager.click('u111', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u391'] = 'center';document.getElementById('u306_img').tabIndex = 0;

u306.style.cursor = 'pointer';
$axure.eventManager.click('u306', function(e) {

if (true) {

SetWidgetFormText('u305', '');

	SetPanelVisibility('u353','hidden','none',500);

}
});
gv_vAlignTable['u284'] = 'center';gv_vAlignTable['u12'] = 'top';document.getElementById('u329_img').tabIndex = 0;

u329.style.cursor = 'pointer';
$axure.eventManager.click('u329', function(e) {

if (true) {

SetWidgetFormText('u305', 'Akers');

	SetPanelVisibility('u320','hidden','fade',100);

}
});
gv_vAlignTable['u518'] = 'center';gv_vAlignTable['u512'] = 'center';gv_vAlignTable['u175'] = 'center';gv_vAlignTable['u229'] = 'center';gv_vAlignTable['u148'] = 'center';gv_vAlignTable['u110'] = 'center';gv_vAlignTable['u348'] = 'center';gv_vAlignTable['u490'] = 'center';
u305.style.cursor = 'pointer';
$axure.eventManager.click('u305', function(e) {

if (true) {

SetWidgetFormText('u305', '');

SetWidgetNotSelected('u343');
SetWidgetNotSelected('u345');
SetWidgetNotSelected('u347');
SetWidgetNotSelected('u349');
}
});

$axure.eventManager.keyup('u305', function(e) {

if (((GetWidgetText('u305')) == ('10')) || ((GetWidgetText('u305')) == ('Search...'))) {

	SetPanelState('u320', 'pd0u320','swing','up',50,'swing','down',50);

}
else
if (((GetWidgetText('u305')) == ('je')) || (((GetWidgetText('u305')) == ('as')) || (((GetWidgetText('u305')) == ('chr')) || ((GetWidgetText('u305')) == ('el'))))) {

	SetPanelState('u320', 'pd1u320','swing','up',50,'swing','down',50);

}
else
if (true) {

	SetPanelVisibility('u320','hidden','fade',50);

SetWidgetNotSelected('u343');
SetWidgetNotSelected('u345');
SetWidgetNotSelected('u347');
SetWidgetNotSelected('u349');
}
});

$axure.eventManager.blur('u305', function(e) {

if (true) {

SetWidgetFormText('u305', 'Search...');

}
});
document.getElementById('u283_img').tabIndex = 0;

u283.style.cursor = 'pointer';
$axure.eventManager.click('u283', function(e) {

if (true) {

	SetPanelVisibility('u278','hidden','none',500);

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
gv_vAlignTable['u20'] = 'top';document.getElementById('u124_img').tabIndex = 0;

u124.style.cursor = 'pointer';
$axure.eventManager.click('u124', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PatientReminder.html');

}
});
HookHover('u526', false);
gv_vAlignTable['u241'] = 'center';gv_vAlignTable['u160'] = 'center';gv_vAlignTable['u297'] = 'top';
$axure.eventManager.mouseover('u8', function(e) {
if (!IsTrueMouseOver('u8',e)) return;
if (true) {

	SetPanelState('u23', 'pd0u23','none','',500,'none','',500);

	BringToFront("u23");

}
});
gv_vAlignTable['u8'] = 'top';gv_vAlignTable['u49'] = 'center';gv_vAlignTable['u355'] = 'center';gv_vAlignTable['u25'] = 'center';gv_vAlignTable['u309'] = 'center';gv_vAlignTable['u304'] = 'center';gv_vAlignTable['u282'] = 'center';document.getElementById('u76_img').tabIndex = 0;

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
gv_vAlignTable['u123'] = 'center';gv_vAlignTable['u137'] = 'center';gv_vAlignTable['u33'] = 'top';gv_vAlignTable['u254'] = 'center';gv_vAlignTable['u422'] = 'center';document.getElementById('u343_img').tabIndex = 0;
HookHover('u343', false);

u343.style.cursor = 'pointer';
$axure.eventManager.click('u343', function(e) {

if (true) {

SetWidgetSelected('u343');
SetWidgetNotSelected('u345');
SetWidgetNotSelected('u347');
SetWidgetNotSelected('u349');
SetWidgetFormText('u305', '1000');

	SetPanelVisibility('u320','hidden','fade',100);

	SetPanelState('u353', 'pd0u353','none','',500,'fade','',0);

	BringToFront("u353");

}
});
gv_vAlignTable['u438'] = 'center';gv_vAlignTable['u522'] = 'center';gv_vAlignTable['u420'] = 'center';gv_vAlignTable['u5'] = 'top';gv_vAlignTable['u317'] = 'center';gv_vAlignTable['u295'] = 'center';document.getElementById('u136_img').tabIndex = 0;

u136.style.cursor = 'pointer';
$axure.eventManager.click('u136', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ImmunizationRegistry.html');

}
});
gv_vAlignTable['u51'] = 'center';gv_vAlignTable['u434'] = 'center';document.getElementById('u109_img').tabIndex = 0;

u109.style.cursor = 'pointer';
$axure.eventManager.click('u109', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('AddPatient.html');

}
});
document.getElementById('u253_img').tabIndex = 0;

u253.style.cursor = 'pointer';
$axure.eventManager.click('u253', function(e) {

if (true) {

	SetPanelState('u278', 'pd1u278','none','',500,'fade','',0);

	BringToFront("u278");

}
});
gv_vAlignTable['u172'] = 'center';gv_vAlignTable['u470'] = 'center';gv_vAlignTable['u410'] = 'center';gv_vAlignTable['u472'] = 'center';document.getElementById('u267_img').tabIndex = 0;

u267.style.cursor = 'pointer';
$axure.eventManager.click('u267', function(e) {

if (true) {

	BringToFront("u278");

	SetPanelState('u278', 'pd0u278','none','',500,'fade','',0);

}
});
gv_vAlignTable['u399'] = 'center';gv_vAlignTable['u302'] = 'center';gv_vAlignTable['u280'] = 'center';gv_vAlignTable['u500'] = 'center';gv_vAlignTable['u414'] = 'center';document.getElementById('u316_img').tabIndex = 0;

u316.style.cursor = 'pointer';
$axure.eventManager.click('u316', function(e) {

if (true) {

	SetPanelVisibility('u310','hidden','none',500);

}
});
document.getElementById('u294_img').tabIndex = 0;

u294.style.cursor = 'pointer';
$axure.eventManager.click('u294', function(e) {

if (true) {

	SetPanelVisibility('u278','hidden','none',500);

}
});
gv_vAlignTable['u135'] = 'center';gv_vAlignTable['u108'] = 'center';gv_vAlignTable['u252'] = 'center';gv_vAlignTable['u191'] = 'center';gv_vAlignTable['u266'] = 'center';gv_vAlignTable['u64'] = 'center';gv_vAlignTable['u239'] = 'center';document.getElementById('u301_img').tabIndex = 0;

u301.style.cursor = 'pointer';
$axure.eventManager.click('u301', function(e) {

if (true) {

	SetPanelVisibility('u278','hidden','none',500);

}
});
document.getElementById('u2_img').tabIndex = 0;

u2.style.cursor = 'pointer';
$axure.eventManager.click('u2', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u315'] = 'center';gv_vAlignTable['u293'] = 'center';u21.tabIndex = 0;

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
gv_vAlignTable['u21'] = 'top';document.getElementById('u134_img').tabIndex = 0;

u134.style.cursor = 'pointer';
$axure.eventManager.click('u134', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ListDisclosure.html');

}
});
gv_vAlignTable['u432'] = 'center';gv_vAlignTable['u170'] = 'center';gv_vAlignTable['u446'] = 'center';gv_vAlignTable['u373'] = 'center';document.getElementById('u265_img').tabIndex = 0;

u265.style.cursor = 'pointer';
$axure.eventManager.click('u265', function(e) {

if (true) {

	SetPanelVisibility('u358','','none',500);

	BringToFront("u358");

}
});

$axure.eventManager.mouseover('u16', function(e) {
if (!IsTrueMouseOver('u16',e)) return;
if (true) {

	SetPanelVisibility('u13','','none',500);

}
});
gv_vAlignTable['u502'] = 'center';document.getElementById('u314_img').tabIndex = 0;

u314.style.cursor = 'pointer';
$axure.eventManager.click('u314', function(e) {

if (true) {

	SetPanelVisibility('u310','hidden','none',500);

}
});
gv_vAlignTable['u77'] = 'center';gv_vAlignTable['u133'] = 'center';gv_vAlignTable['u250'] = 'center';gv_vAlignTable['u387'] = 'center';document.getElementById('u147_img').tabIndex = 0;

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
gv_vAlignTable['u58'] = 'center';document.getElementById('u34_img').tabIndex = 0;

u34.style.cursor = 'pointer';
$axure.eventManager.click('u34', function(e) {

if (true) {

	SetPanelVisibility('u23','hidden','none',500);

}
});
gv_vAlignTable['u444'] = 'center';document.getElementById('u164_img').tabIndex = 0;

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
gv_vAlignTable['u213'] = 'center';document.getElementById('u132_img').tabIndex = 0;

u132.style.cursor = 'pointer';
$axure.eventManager.click('u132', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Reports.html');

}
});
gv_vAlignTable['u368'] = 'center';gv_vAlignTable['u430'] = 'center';document.getElementById('u327_img').tabIndex = 0;

u327.style.cursor = 'pointer';
$axure.eventManager.click('u327', function(e) {

if (true) {

SetWidgetFormText('u305', 'Allen');

	SetPanelVisibility('u320','hidden','fade',100);

}
});
gv_vAlignTable['u146'] = 'center';document.getElementById('u52_img').tabIndex = 0;

u52.style.cursor = 'pointer';
$axure.eventManager.click('u52', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('UserRights.html');

}
});
gv_vAlignTable['u426'] = 'center';gv_vAlignTable['u125'] = 'center';document.getElementById('u263_img').tabIndex = 0;

u263.style.cursor = 'pointer';
$axure.eventManager.click('u263', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Encounter.html');

}
});
gv_vAlignTable['u277'] = 'center';gv_vAlignTable['u47'] = 'center';gv_vAlignTable['u131'] = 'center';gv_vAlignTable['u510'] = 'center';gv_vAlignTable['u385'] = 'center';
u28.style.cursor = 'pointer';
$axure.eventManager.click('u28', function(e) {

if (true) {

	SetPanelVisibility('u23','hidden','none',500);

SetWidgetRichText('u22', '<p style="text-align:right;"><span style="font-family:Arial;font-size:12px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">( Location A )</span></p>');

SetCheckState('u30', false);

SetCheckState('u32', false);

}
});
document.getElementById('u145_img').tabIndex = 0;

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
gv_vAlignTable['u524'] = 'center';document.getElementById('u118_img').tabIndex = 0;

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
gv_vAlignTable['u262'] = 'center';gv_vAlignTable['u89'] = 'center';document.getElementById('u249_img').tabIndex = 0;

u249.style.cursor = 'pointer';
$axure.eventManager.click('u249', function(e) {

if (true) {

	SetPanelVisibility('u358','','none',500);

	BringToFront("u358");

}
});
gv_vAlignTable['u211'] = 'center';document.getElementById('u130_img').tabIndex = 0;

u130.style.cursor = 'pointer';
$axure.eventManager.click('u130', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PQRS_Report.html');

}
});
gv_vAlignTable['u85'] = 'center';gv_vAlignTable['u22'] = 'top';gv_vAlignTable['u442'] = 'center';document.getElementById('u261_img').tabIndex = 0;

u261.style.cursor = 'pointer';
$axure.eventManager.click('u261', function(e) {

if (true) {

	SetPanelState('u278', 'pd1u278','none','',500,'fade','',0);

	BringToFront("u278");

}
});
gv_vAlignTable['u43'] = 'center';gv_vAlignTable['u456'] = 'center';gv_vAlignTable['u17'] = 'center';gv_vAlignTable['u248'] = 'center';document.getElementById('u325_img').tabIndex = 0;

u325.style.cursor = 'pointer';
$axure.eventManager.click('u325', function(e) {

if (true) {

SetWidgetFormText('u305', 'Allam');

	SetPanelVisibility('u320','hidden','fade',100);

}
});
gv_vAlignTable['u405'] = 'center';gv_vAlignTable['u383'] = 'center';
u30.style.cursor = 'pointer';
$axure.eventManager.click('u30', function(e) {

if (true) {

	SetPanelVisibility('u23','hidden','none',500);

SetWidgetRichText('u22', '<p style="text-align:right;"><span style="font-family:Arial;font-size:12px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">( Location B )</span></p>');

SetCheckState('u28', false);

SetCheckState('u32', false);

}
});
gv_vAlignTable['u143'] = 'center';gv_vAlignTable['u379'] = 'center';gv_vAlignTable['u260'] = 'center';gv_vAlignTable['u397'] = 'center';u9.tabIndex = 0;

u9.style.cursor = 'pointer';
$axure.eventManager.click('u9', function(e) {

if (true) {

	parent.location.href = 'Login.html';

}
});
gv_vAlignTable['u9'] = 'top';document.getElementById('u59_img').tabIndex = 0;

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
gv_vAlignTable['u189'] = 'center';gv_vAlignTable['u35'] = 'center';gv_vAlignTable['u91'] = 'center';gv_vAlignTable['u328'] = 'center';gv_vAlignTable['u520'] = 'top';gv_vAlignTable['u223'] = 'center';document.getElementById('u142_img').tabIndex = 0;

u142.style.cursor = 'pointer';
$axure.eventManager.click('u142', function(e) {

if (true) {

	SetPanelVisibility('u121','toggle','none',500);

	SetPanelVisibility('u45','hidden','none',500);

	SetPanelVisibility('u62','hidden','none',500);

}
});
gv_vAlignTable['u70'] = 'center';gv_vAlignTable['u237'] = 'top';gv_vAlignTable['u156'] = 'center';document.getElementById('u273_img').tabIndex = 0;

u273.style.cursor = 'pointer';
$axure.eventManager.click('u273', function(e) {

if (true) {

	SetPanelVisibility('u358','','none',500);

	BringToFront("u358");

}
});
gv_vAlignTable['u403'] = 'center';gv_vAlignTable['u381'] = 'center';gv_vAlignTable['u458'] = 'center';gv_vAlignTable['u6'] = 'top';gv_vAlignTable['u395'] = 'center';gv_vAlignTable['u29'] = 'top';gv_vAlignTable['u209'] = 'center';gv_vAlignTable['u272'] = 'center';gv_vAlignTable['u336'] = 'center';
$axure.eventManager.mouseover('u19', function(e) {
if (!IsTrueMouseOver('u19',e)) return;
if (true) {

	SetPanelVisibility('u13','','none',500);

}
});
gv_vAlignTable['u19'] = 'top';HookHover('u367', false);
gv_vAlignTable['u104'] = 'center';document.getElementById('u308_img').tabIndex = 0;

u308.style.cursor = 'pointer';
$axure.eventManager.click('u308', function(e) {

if (true) {

	SetPanelVisibility('u310','','none',500);

	BringToFront("u310");

}
});
gv_vAlignTable['u221'] = 'center';gv_vAlignTable['u119'] = 'center';gv_vAlignTable['u416'] = 'center';gv_vAlignTable['u235'] = 'center';gv_vAlignTable['u352'] = 'top';document.getElementById('u271_img').tabIndex = 0;

u271.style.cursor = 'pointer';
$axure.eventManager.click('u271', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Encounter.html');

}
});
document.getElementById('u312_img').tabIndex = 0;

u312.style.cursor = 'pointer';
$axure.eventManager.click('u312', function(e) {

if (true) {

	SetPanelVisibility('u310','hidden','none',500);

}
});
gv_vAlignTable['u418'] = 'center';gv_vAlignTable['u366'] = 'top';document.getElementById('u103_img').tabIndex = 0;

u103.style.cursor = 'pointer';
$axure.eventManager.click('u103', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
document.getElementById('u339_img').tabIndex = 0;

u339.style.cursor = 'pointer';
$axure.eventManager.click('u339', function(e) {

if (true) {

SetWidgetFormText('u305', 'Ellen');

	SetPanelVisibility('u320','hidden','fade',100);

}
});
gv_vAlignTable['u401'] = 'center';gv_vAlignTable['u158'] = 'center';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u117'] = 'center';gv_vAlignTable['u31'] = 'top';
u351.style.cursor = 'pointer';
$axure.eventManager.click('u351', function(e) {

if ((GetCheckState('u351')) == (true)) {

	SetPanelState('u353', 'pd1u353','none','',500,'fade','',0);

	BringToFront("u353");

}
else
if (true) {

	SetPanelVisibility('u353','hidden','none',500);

}
});
gv_vAlignTable['u270'] = 'center';gv_vAlignTable['u199'] = 'center';gv_vAlignTable['u319'] = 'center';document.getElementById('u92_img').tabIndex = 0;

u92.style.cursor = 'pointer';
$axure.eventManager.click('u92', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('RecordDisclosure.html');

}
});
gv_vAlignTable['u102'] = 'center';gv_vAlignTable['u300'] = 'center';document.getElementById('u116_img').tabIndex = 0;

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
gv_vAlignTable['u233'] = 'center';gv_vAlignTable['u87'] = 'center';gv_vAlignTable['u350'] = 'center';document.getElementById('u347_img').tabIndex = 0;
HookHover('u347', false);

u347.style.cursor = 'pointer';
$axure.eventManager.click('u347', function(e) {

if (true) {

SetWidgetNotSelected('u343');
SetWidgetNotSelected('u345');
SetWidgetSelected('u347');
SetWidgetNotSelected('u349');
SetWidgetFormText('u305', '1002');

	SetPanelVisibility('u320','hidden','fade',100);

}
});
gv_vAlignTable['u508'] = 'center';document.getElementById('u247_img').tabIndex = 0;

u247.style.cursor = 'pointer';
$axure.eventManager.click('u247', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Encounter.html');

}
});
gv_vAlignTable['u68'] = 'center';gv_vAlignTable['u364'] = 'center';document.getElementById('u101_img').tabIndex = 0;

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
gv_vAlignTable['u452'] = 'center';gv_vAlignTable['u313'] = 'center';gv_vAlignTable['u468'] = 'center';gv_vAlignTable['u486'] = 'center';gv_vAlignTable['u7'] = 'top';gv_vAlignTable['u246'] = 'center';gv_vAlignTable['u219'] = 'center';document.getElementById('u363_img').tabIndex = 0;

u363.style.cursor = 'pointer';
$axure.eventManager.click('u363', function(e) {

if (true) {

	SetPanelVisibility('u358','hidden','none',500);

}
});
gv_vAlignTable['u448'] = 'center';gv_vAlignTable['u377'] = 'center';gv_vAlignTable['u114'] = 'center';document.getElementById('u57_img').tabIndex = 0;

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
gv_vAlignTable['u408'] = 'center';gv_vAlignTable['u187'] = 'center';document.getElementById('u245_img').tabIndex = 0;

u245.style.cursor = 'pointer';
$axure.eventManager.click('u245', function(e) {

if (true) {

	SetPanelState('u278', 'pd1u278','none','',500,'fade','',0);

	BringToFront("u278");

}
});
gv_vAlignTable['u412'] = 'center';
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
gv_vAlignTable['u362'] = 'center';document.getElementById('u99_img').tabIndex = 0;

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
gv_vAlignTable['u286'] = 'top';document.getElementById('u349_img').tabIndex = 0;
HookHover('u349', false);

u349.style.cursor = 'pointer';
$axure.eventManager.click('u349', function(e) {

if (true) {

SetWidgetNotSelected('u343');
SetWidgetNotSelected('u345');
SetWidgetNotSelected('u347');
SetWidgetSelected('u349');
SetWidgetFormText('u305', '1003');

	SetPanelVisibility('u320','hidden','fade',100);

}
});
gv_vAlignTable['u519'] = 'top';gv_vAlignTable['u127'] = 'center';gv_vAlignTable['u338'] = 'center';gv_vAlignTable['u484'] = 'center';
u32.style.cursor = 'pointer';
$axure.eventManager.click('u32', function(e) {

if (true) {

	SetPanelVisibility('u23','hidden','none',500);

SetWidgetRichText('u22', '<p style="text-align:right;"><span style="font-family:Arial;font-size:12px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">( Location C )</span></p>');

SetCheckState('u28', false);

SetCheckState('u30', false);

}
});
gv_vAlignTable['u244'] = 'center';gv_vAlignTable['u462'] = 'center';gv_vAlignTable['u375'] = 'center';gv_vAlignTable['u27'] = 'center';gv_vAlignTable['u83'] = 'center';gv_vAlignTable['u478'] = 'center';gv_vAlignTable['u207'] = 'center';gv_vAlignTable['u185'] = 'center';gv_vAlignTable['u324'] = 'center';gv_vAlignTable['u360'] = 'center';document.getElementById('u257_img').tabIndex = 0;

u257.style.cursor = 'pointer';
$axure.eventManager.click('u257', function(e) {

if (true) {

	SetPanelVisibility('u358','','none',500);

	BringToFront("u358");

}
});
gv_vAlignTable['u289'] = 'center';gv_vAlignTable['u428'] = 'center';gv_vAlignTable['u504'] = 'center';gv_vAlignTable['u482'] = 'center';document.getElementById('u323_img').tabIndex = 0;

u323.style.cursor = 'pointer';
$axure.eventManager.click('u323', function(e) {

if (true) {

SetWidgetFormText('u305', 'Alba');

	SetPanelVisibility('u320','hidden','fade',100);

}
});
gv_vAlignTable['u344'] = 'center';gv_vAlignTable['u474'] = 'center';gv_vAlignTable['u291'] = 'center';gv_vAlignTable['u496'] = 'center';document.getElementById('u337_img').tabIndex = 0;

u337.style.cursor = 'pointer';
$axure.eventManager.click('u337', function(e) {

if (true) {

SetWidgetFormText('u305', 'Christine');

	SetPanelVisibility('u320','hidden','fade',100);

}
});
gv_vAlignTable['u256'] = 'center';gv_vAlignTable['u53'] = 'center';gv_vAlignTable['u454'] = 'center';gv_vAlignTable['u129'] = 'center';gv_vAlignTable['u440'] = 'center';gv_vAlignTable['u205'] = 'center';gv_vAlignTable['u183'] = 'center';gv_vAlignTable['u10'] = 'top';gv_vAlignTable['u179'] = 'center';gv_vAlignTable['u141'] = 'center';gv_vAlignTable['u197'] = 'center';gv_vAlignTable['u39'] = 'center';document.getElementById('u255_img').tabIndex = 0;

u255.style.cursor = 'pointer';
$axure.eventManager.click('u255', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Encounter.html');

}
});
gv_vAlignTable['u15'] = 'center';document.getElementById('u128_img').tabIndex = 0;

u128.style.cursor = 'pointer';
$axure.eventManager.click('u128', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Automate_measure_Calculation.html');

}
});
document.getElementById('u288_img').tabIndex = 0;

u288.style.cursor = 'pointer';
$axure.eventManager.click('u288', function(e) {

if (true) {

	SetPanelVisibility('u278','hidden','none',500);

}
});
gv_vAlignTable['u66'] = 'center';gv_vAlignTable['u480'] = 'center';document.getElementById('u140_img').tabIndex = 0;

u140.style.cursor = 'pointer';
$axure.eventManager.click('u140', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Intigrity.html');

}
});
gv_vAlignTable['u498'] = 'center';gv_vAlignTable['u516'] = 'center';gv_vAlignTable['u494'] = 'center';document.getElementById('u335_img').tabIndex = 0;

u335.style.cursor = 'pointer';
$axure.eventManager.click('u335', function(e) {

if (true) {

SetWidgetFormText('u305', 'Asif');

	SetPanelVisibility('u320','hidden','fade',100);

}
});
gv_vAlignTable['u154'] = 'center';gv_vAlignTable['u264'] = 'center';gv_vAlignTable['u371'] = 'center';gv_vAlignTable['u466'] = 'center';gv_vAlignTable['u203'] = 'center';gv_vAlignTable['u181'] = 'center';gv_vAlignTable['u258'] = 'center';
$axure.eventManager.mouseover('u4', function(e) {
if (!IsTrueMouseOver('u4',e)) return;
if (true) {

	SetPanelVisibility('u13','','none',500);

	BringToFront("u13");

}
});
gv_vAlignTable['u4'] = 'top';gv_vAlignTable['u506'] = 'center';gv_vAlignTable['u217'] = 'center';gv_vAlignTable['u195'] = 'center';gv_vAlignTable['u225'] = 'center';gv_vAlignTable['u41'] = 'center';gv_vAlignTable['u334'] = 'center';