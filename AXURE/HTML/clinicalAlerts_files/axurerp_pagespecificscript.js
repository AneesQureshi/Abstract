for(var i = 0; i < 284; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

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
gv_vAlignTable['u21'] = 'center';
u32.style.cursor = 'pointer';
$axure.eventManager.click('u32', function(e) {

if (true) {

	SetPanelVisibility('u27','hidden','none',500);

SetWidgetRichText('u26', '<p style="text-align:right;"><span style="font-family:Arial;font-size:12px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">( Location A )</span></p>');

SetCheckState('u34', false);

SetCheckState('u36', false);

}
});
document.getElementById('u243_img').tabIndex = 0;

u243.style.cursor = 'pointer';
$axure.eventManager.click('u243', function(e) {

if (true) {

SetWidgetFormText('u242', '');

}
});
gv_vAlignTable['u156'] = 'center';document.getElementById('u130_img').tabIndex = 0;

u130.style.cursor = 'pointer';
$axure.eventManager.click('u130', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PatientList.html');

}
});
gv_vAlignTable['u7'] = 'center';document.getElementById('u140_img').tabIndex = 0;

u140.style.cursor = 'pointer';
$axure.eventManager.click('u140', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ImmunizationRegistry.html');

}
});
gv_vAlignTable['u222'] = 'top';gv_vAlignTable['u135'] = 'center';document.getElementById('u151_img').tabIndex = 0;

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
gv_vAlignTable['u256'] = 'center';gv_vAlignTable['u229'] = 'top';gv_vAlignTable['u55'] = 'center';gv_vAlignTable['u101'] = 'center';gv_vAlignTable['u186'] = 'center';gv_vAlignTable['u14'] = 'top';document.getElementById('u105_img').tabIndex = 0;

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
document.getElementById('u278_img').tabIndex = 0;
HookHover('u278', false);

u278.style.cursor = 'pointer';
$axure.eventManager.click('u278', function(e) {

if (true) {

SetWidgetNotSelected('u276');
SetWidgetSelected('u278');
SetWidgetNotSelected('u280');
SetWidgetNotSelected('u282');
SetWidgetFormText('u242', 'V85.06');

	SetPanelVisibility('u273','hidden','fade',100);

}
});
document.getElementById('u138_img').tabIndex = 0;

u138.style.cursor = 'pointer';
$axure.eventManager.click('u138', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ListDisclosure.html');

}
});
gv_vAlignTable['u268'] = 'center';document.getElementById('u52_img').tabIndex = 0;

u52.style.cursor = 'pointer';
$axure.eventManager.click('u52', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('UserList.html');

}
});

$axure.eventManager.mouseover('u20', function(e) {
if (!IsTrueMouseOver('u20',e)) return;
if (true) {

	SetPanelVisibility('u17','','none',500);

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
gv_vAlignTable['u152'] = 'center';document.getElementById('u6_img').tabIndex = 0;

u6.style.cursor = 'pointer';
$axure.eventManager.click('u6', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u108'] = 'center';
u247.style.cursor = 'pointer';
$axure.eventManager.click('u247', function(e) {

if (true) {

SetWidgetFormText('u247', '');

SetWidgetNotSelected('u253');
SetWidgetNotSelected('u255');
}
});

$axure.eventManager.keyup('u247', function(e) {

if (((GetWidgetText('u247')) == ('a')) || (((GetWidgetText('u247')) == ('ad')) || ((GetWidgetText('u247')) == ('as')))) {

	SetPanelState('u250', 'pd0u250','swing','up',50,'swing','down',50);

}
});

$axure.eventManager.blur('u247', function(e) {

if (true) {

SetWidgetFormText('u247', 'Search...');

}
});
gv_vAlignTable['u37'] = 'top';gv_vAlignTable['u62'] = 'center';gv_vAlignTable['u141'] = 'center';gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u133'] = 'center';gv_vAlignTable['u200'] = 'center';
u34.style.cursor = 'pointer';
$axure.eventManager.click('u34', function(e) {

if (true) {

	SetPanelVisibility('u27','hidden','none',500);

SetWidgetRichText('u26', '<p style="text-align:right;"><span style="font-family:Arial;font-size:12px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">( Location B )</span></p>');

SetCheckState('u32', false);

SetCheckState('u36', false);

}
});
gv_vAlignTable['u68'] = 'center';gv_vAlignTable['u89'] = 'center';gv_vAlignTable['u39'] = 'center';gv_vAlignTable['u266'] = 'center';gv_vAlignTable['u47'] = 'center';gv_vAlignTable['u184'] = 'center';gv_vAlignTable['u72'] = 'center';document.getElementById('u103_img').tabIndex = 0;

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
gv_vAlignTable['u164'] = 'center';gv_vAlignTable['u258'] = 'center';gv_vAlignTable['u99'] = 'center';gv_vAlignTable['u233'] = 'top';gv_vAlignTable['u112'] = 'center';gv_vAlignTable['u78'] = 'center';document.getElementById('u276_img').tabIndex = 0;
HookHover('u276', false);

u276.style.cursor = 'pointer';
$axure.eventManager.click('u276', function(e) {

if (true) {

SetWidgetSelected('u276');
SetWidgetNotSelected('u278');
SetWidgetNotSelected('u280');
SetWidgetNotSelected('u282');
SetWidgetFormText('u242', 'V84.00');

	SetPanelVisibility('u273','hidden','fade',100);

}
});
gv_vAlignTable['u57'] = 'center';gv_vAlignTable['u283'] = 'center';document.getElementById('u253_img').tabIndex = 0;
HookHover('u253', false);

u253.style.cursor = 'pointer';
$axure.eventManager.click('u253', function(e) {

if (true) {

SetWidgetSelected('u253');
SetWidgetNotSelected('u255');
SetWidgetFormText('u247', 'Adalat');

	SetPanelVisibility('u250','hidden','fade',100);

}
});
gv_vAlignTable['u16'] = 'top';gv_vAlignTable['u212'] = 'center';gv_vAlignTable['u246'] = 'center';document.getElementById('u149_img').tabIndex = 0;

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
gv_vAlignTable['u208'] = 'center';gv_vAlignTable['u118'] = 'center';gv_vAlignTable['u231'] = 'top';document.getElementById('u38_img').tabIndex = 0;

u38.style.cursor = 'pointer';
$axure.eventManager.click('u38', function(e) {

if (true) {

	SetPanelVisibility('u27','hidden','none',500);

}
});
document.getElementById('u267_img').tabIndex = 0;
HookHover('u267', false);

u267.style.cursor = 'pointer';
$axure.eventManager.click('u267', function(e) {

if (true) {

SetWidgetNotSelected('u265');
SetWidgetSelected('u267');
SetWidgetNotSelected('u269');
SetWidgetNotSelected('u271');
SetWidgetFormText('u259', 'V85.06');

	SetPanelVisibility('u262','hidden','fade',100);

}
});
gv_vAlignTable['u26'] = 'top';
u174.style.cursor = 'pointer';
$axure.eventManager.click('u174', function(e) {

if (true) {

SetSelectedOption('u224', 'Select');

SetSelectedOption('u225', 'Select');

SetSelectedOption('u226', 'Select');

SetSelectedOption('u227', 'Select');

SetWidgetFormText('u239', '');

SetWidgetFormText('u235', '');

SetWidgetFormText('u242', 'Search...');

SetWidgetFormText('u259', 'Search...');

SetWidgetFormText('u247', 'Search...');

SetWidgetFormText('u236', '');

SetWidgetFormText('u238', '');

	SetPanelVisibility('u195','','fade',500);
function waitu24764261db354db4b7a1ad9b29c487eb1() {

	SetPanelVisibility('u219','','fade',500);
function waitu3a738089066f4560ad609443a362448d1() {

	SetPanelVisibility('u219','hidden','fade',500);
}
setTimeout(waitu3a738089066f4560ad609443a362448d1, 3000);
}
setTimeout(waitu24764261db354db4b7a1ad9b29c487eb1, 1000);

}
});
gv_vAlignTable['u216'] = 'center';document.getElementById('u128_img').tabIndex = 0;

u128.style.cursor = 'pointer';
$axure.eventManager.click('u128', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PatientReminder.html');

}
});
gv_vAlignTable['u254'] = 'center';gv_vAlignTable['u51'] = 'center';gv_vAlignTable['u249'] = 'center';gv_vAlignTable['u241'] = 'center';gv_vAlignTable['u10'] = 'top';document.getElementById('u265_img').tabIndex = 0;
HookHover('u265', false);

u265.style.cursor = 'pointer';
$axure.eventManager.click('u265', function(e) {

if (true) {

SetWidgetSelected('u265');
SetWidgetNotSelected('u267');
SetWidgetNotSelected('u269');
SetWidgetNotSelected('u271');
SetWidgetFormText('u259', 'V84.00');

	SetPanelVisibility('u262','hidden','fade',100);

}
});
gv_vAlignTable['u204'] = 'center';
$axure.eventManager.mouseover('u23', function(e) {
if (!IsTrueMouseOver('u23',e)) return;
if (true) {

	SetPanelVisibility('u17','','none',500);

}
});
gv_vAlignTable['u23'] = 'top';document.getElementById('u144_img').tabIndex = 0;

u144.style.cursor = 'pointer';
$axure.eventManager.click('u144', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Intigrity.html');

}
});
gv_vAlignTable['u202'] = 'center';gv_vAlignTable['u166'] = 'center';document.getElementById('u82_img').tabIndex = 0;

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

u36.style.cursor = 'pointer';
$axure.eventManager.click('u36', function(e) {

if (true) {

	SetPanelVisibility('u27','hidden','none',500);

SetWidgetRichText('u26', '<p style="text-align:right;"><span style="font-family:Arial;font-size:12px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">( Location C )</span></p>');

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
document.getElementById('u282_img').tabIndex = 0;
HookHover('u282', false);

u282.style.cursor = 'pointer';
$axure.eventManager.click('u282', function(e) {

if (true) {

SetWidgetNotSelected('u276');
SetWidgetNotSelected('u278');
SetWidgetNotSelected('u280');
SetWidgetSelected('u282');
SetWidgetFormText('u242', 'V86.50');

	SetPanelVisibility('u273','hidden','fade',100);

}
});
gv_vAlignTable['u116'] = 'center';gv_vAlignTable['u158'] = 'center';gv_vAlignTable['u74'] = 'center';gv_vAlignTable['u123'] = 'center';gv_vAlignTable['u223'] = 'top';gv_vAlignTable['u114'] = 'center';gv_vAlignTable['u33'] = 'top';gv_vAlignTable['u160'] = 'center';gv_vAlignTable['u221'] = 'center';document.getElementById('u255_img').tabIndex = 0;
HookHover('u255', false);

u255.style.cursor = 'pointer';
$axure.eventManager.click('u255', function(e) {

if (true) {

SetWidgetNotSelected('u253');
SetWidgetSelected('u255');
SetWidgetFormText('u247', 'Asprin');

	SetPanelVisibility('u250','hidden','fade',100);

}
});
gv_vAlignTable['u198'] = 'center';gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u214'] = 'center';gv_vAlignTable['u127'] = 'center';gv_vAlignTable['u279'] = 'center';gv_vAlignTable['u43'] = 'center';gv_vAlignTable['u169'] = 'center';document.getElementById('u56_img').tabIndex = 0;

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
gv_vAlignTable['u40'] = 'top';gv_vAlignTable['u139'] = 'center';gv_vAlignTable['u87'] = 'center';gv_vAlignTable['u53'] = 'center';gv_vAlignTable['u104'] = 'center';document.getElementById('u269_img').tabIndex = 0;
HookHover('u269', false);

u269.style.cursor = 'pointer';
$axure.eventManager.click('u269', function(e) {

if (true) {

SetWidgetNotSelected('u265');
SetWidgetNotSelected('u267');
SetWidgetSelected('u269');
SetWidgetNotSelected('u271');
SetWidgetFormText('u259', 'V86.01');

	SetPanelVisibility('u262','hidden','fade',100);

}
});
gv_vAlignTable['u192'] = 'center';gv_vAlignTable['u121'] = 'center';gv_vAlignTable['u19'] = 'center';
u242.style.cursor = 'pointer';
$axure.eventManager.click('u242', function(e) {

if (true) {

SetWidgetFormText('u242', '');

SetWidgetNotSelected('u276');
SetWidgetNotSelected('u278');
SetWidgetNotSelected('u280');
SetWidgetNotSelected('u282');
}
});

$axure.eventManager.keyup('u242', function(e) {

if (((GetWidgetText('u242')) == ('v')) || (((GetWidgetText('u242')) == ('v8')) || (((GetWidgetText('u242')) == ('v84')) || ((GetWidgetText('u242')) == ('v85'))))) {

	SetPanelState('u273', 'pd0u273','swing','up',50,'swing','down',50);

}
else
if (((GetWidgetText('u242')) == ('8')) || (((GetWidgetText('u242')) == ('5')) || ((GetWidgetText('u242')) == ('4')))) {

	SetPanelState('u273', 'pd0u273','swing','up',500,'swing','down',500);

}
});

$axure.eventManager.blur('u242', function(e) {

if (true) {

SetWidgetFormText('u242', 'Search...');

}
});
gv_vAlignTable['u206'] = 'center';gv_vAlignTable['u97'] = 'center';document.getElementById('u63_img').tabIndex = 0;

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
document.getElementById('u260_img').tabIndex = 0;

u260.style.cursor = 'pointer';
$axure.eventManager.click('u260', function(e) {

if (true) {

SetWidgetFormText('u259', '');

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
document.getElementById('u271_img').tabIndex = 0;
HookHover('u271', false);

u271.style.cursor = 'pointer';
$axure.eventManager.click('u271', function(e) {

if (true) {

SetWidgetNotSelected('u265');
SetWidgetNotSelected('u267');
SetWidgetNotSelected('u269');
SetWidgetSelected('u271');
SetWidgetFormText('u259', 'V86.50');

	SetPanelVisibility('u262','hidden','fade',100);

}
});
gv_vAlignTable['u81'] = 'center';gv_vAlignTable['u228'] = 'top';gv_vAlignTable['u190'] = 'center';gv_vAlignTable['u9'] = 'top';document.getElementById('u69_img').tabIndex = 0;

u69.style.cursor = 'pointer';
$axure.eventManager.click('u69', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PasswordSettings.html');

}
});
gv_vAlignTable['u270'] = 'center';gv_vAlignTable['u234'] = 'top';gv_vAlignTable['u147'] = 'center';gv_vAlignTable['u91'] = 'center';gv_vAlignTable['u131'] = 'center';gv_vAlignTable['u277'] = 'center';gv_vAlignTable['u64'] = 'center';gv_vAlignTable['u70'] = 'center';gv_vAlignTable['u272'] = 'center';u24.tabIndex = 0;

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
gv_vAlignTable['u24'] = 'top';gv_vAlignTable['u188'] = 'center';gv_vAlignTable['u230'] = 'top';gv_vAlignTable['u162'] = 'center';gv_vAlignTable['u210'] = 'center';u13.tabIndex = 0;

u13.style.cursor = 'pointer';
$axure.eventManager.click('u13', function(e) {

if (true) {

	parent.location.href = 'Login.html';

}
});
gv_vAlignTable['u13'] = 'top';document.getElementById('u113_img').tabIndex = 0;

u113.style.cursor = 'pointer';
$axure.eventManager.click('u113', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('AddPatient.html');

}
});
gv_vAlignTable['u29'] = 'center';
u259.style.cursor = 'pointer';
$axure.eventManager.click('u259', function(e) {

if (true) {

SetWidgetFormText('u259', '');

SetWidgetNotSelected('u265');
SetWidgetNotSelected('u267');
SetWidgetNotSelected('u269');
SetWidgetNotSelected('u271');
}
});

$axure.eventManager.keyup('u259', function(e) {

if (((GetWidgetText('u259')) == ('v')) || (((GetWidgetText('u259')) == ('v8')) || (((GetWidgetText('u259')) == ('v84')) || ((GetWidgetText('u259')) == ('v85'))))) {

	SetPanelState('u262', 'pd0u262','swing','up',50,'swing','down',50);

}
else
if (((GetWidgetText('u259')) == ('8')) || (((GetWidgetText('u259')) == ('5')) || ((GetWidgetText('u259')) == ('4')))) {

	SetPanelState('u262', 'pd0u262','swing','up',500,'swing','down',500);

}
});

$axure.eventManager.blur('u259', function(e) {

if (true) {

SetWidgetFormText('u259', 'Search...');

}
});
gv_vAlignTable['u261'] = 'center';document.getElementById('u132_img').tabIndex = 0;

u132.style.cursor = 'pointer';
$axure.eventManager.click('u132', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Automate_measure_Calculation.html');

}
});
gv_vAlignTable['u175'] = 'top';document.getElementById('u217_img').tabIndex = 0;

u217.style.cursor = 'pointer';
$axure.eventManager.click('u217', function(e) {

if (true) {

SetSelectedOption('u224', 'Asian');

SetSelectedOption('u225', 'Greater than');

SetSelectedOption('u226', 'Male');

SetSelectedOption('u227', 'English');

SetWidgetFormText('u239', '20');

SetWidgetFormText('u235', 'New Alert');

SetWidgetFormText('u242', 'V84.00');

SetWidgetFormText('u259', 'V84.00');

SetWidgetFormText('u247', 'Asprin');

SetWidgetFormText('u236', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.');

SetWidgetFormText('u238', 'http://www.example.com');

}
});
gv_vAlignTable['u129'] = 'center';gv_vAlignTable['u173'] = 'top';document.getElementById('u280_img').tabIndex = 0;
HookHover('u280', false);

u280.style.cursor = 'pointer';
$axure.eventManager.click('u280', function(e) {

if (true) {

SetWidgetNotSelected('u276');
SetWidgetNotSelected('u278');
SetWidgetSelected('u280');
SetWidgetNotSelected('u282');
SetWidgetFormText('u242', 'V86.01');

	SetPanelVisibility('u273','hidden','fade',100);

}
});
gv_vAlignTable['u171'] = 'center';gv_vAlignTable['u31'] = 'center';gv_vAlignTable['u232'] = 'top';gv_vAlignTable['u83'] = 'center';gv_vAlignTable['u178'] = 'center';
$axure.eventManager.mouseover('u8', function(e) {
if (!IsTrueMouseOver('u8',e)) return;
if (true) {

	SetPanelVisibility('u17','','none',500);

	BringToFront("u17");

}
});
gv_vAlignTable['u8'] = 'top';gv_vAlignTable['u3'] = 'center';document.getElementById('u96_img').tabIndex = 0;

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
gv_vAlignTable['u15'] = 'top';document.getElementById('u80_img').tabIndex = 0;

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
gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u93'] = 'center';gv_vAlignTable['u145'] = 'center';gv_vAlignTable['u237'] = 'top';
$axure.eventManager.mouseover('u12', function(e) {
if (!IsTrueMouseOver('u12',e)) return;
if (true) {

	SetPanelState('u27', 'pd0u27','none','',500,'none','',500);

	BringToFront("u27");

}
});
gv_vAlignTable['u12'] = 'top';gv_vAlignTable['u281'] = 'center';u25.tabIndex = 0;

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
gv_vAlignTable['u25'] = 'top';gv_vAlignTable['u59'] = 'center';document.getElementById('u215_img').tabIndex = 0;

u215.style.cursor = 'pointer';
$axure.eventManager.click('u215', function(e) {

if (true) {

	SetPanelVisibility('u195','hidden','fade',500);

SetSelectedOption('u224', 'Select');

SetSelectedOption('u225', 'Select');

SetSelectedOption('u226', 'Select');

SetSelectedOption('u227', 'Select');

SetWidgetFormText('u239', '');

SetWidgetFormText('u235', '');

SetWidgetFormText('u242', 'Search...');

SetWidgetFormText('u259', 'Search...');

SetWidgetFormText('u247', 'Search...');

SetWidgetFormText('u236', '');

SetWidgetFormText('u238', '');

}
});
gv_vAlignTable['u137'] = 'center';gv_vAlignTable['u244'] = 'center';
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
document.getElementById('u248_img').tabIndex = 0;

u248.style.cursor = 'pointer';
$axure.eventManager.click('u248', function(e) {

if (true) {

SetWidgetFormText('u247', '');

}
});
gv_vAlignTable['u45'] = 'center';
$axure.eventManager.mouseover('u22', function(e) {
if (!IsTrueMouseOver('u22',e)) return;
if (true) {

	SetPanelVisibility('u17','','none',500);

}
});
gv_vAlignTable['u22'] = 'top';gv_vAlignTable['u143'] = 'center';document.getElementById('u107_img').tabIndex = 0;

u107.style.cursor = 'pointer';
$axure.eventManager.click('u107', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u182'] = 'center';gv_vAlignTable['u35'] = 'top';document.getElementById('u136_img').tabIndex = 0;

u136.style.cursor = 'pointer';
$axure.eventManager.click('u136', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Reports.html');

}
});
gv_vAlignTable['u218'] = 'center';gv_vAlignTable['u180'] = 'center';gv_vAlignTable['u194'] = 'center';