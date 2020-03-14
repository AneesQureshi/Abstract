for(var i = 0; i < 740; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

}

});

widgetIdToShowFunction['u709'] = function() {
var e = windowEvent;

if (true) {

	SetPanelState('u732', 'pd0u732','fade','',0,'none','',500);

	SetPanelState('u732', 'pd1u732','none','',500,'fade','',0);

}

}

widgetIdToHideFunction['u709'] = function() {
var e = windowEvent;

if (true) {

	SetPanelState('u732', 'pd1u732','fade','',0,'none','',500);

	SetPanelState('u732', 'pd0u732','none','',500,'fade','',0);

}

}

widgetIdToShowFunction['u167'] = function() {
var e = windowEvent;

if (true) {

SetWidgetFormText('u173', '' + (GetGlobalVariableValue('MonthName')) + ' ' + (GetGlobalVariableValue('Year')) + '');

}

}

widgetIdToShowFunction['u675'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u689', GetNum('0'), GetNum('55'),'none',500);

	MoveWidgetBy('u708', GetNum('0'), GetNum('55'),'none',500);

	SetPanelState('u684', 'pd0u684','fade','',0,'none','',500);

	SetPanelState('u684', 'pd1u684','none','',500,'fade','',0);

}

}

widgetIdToHideFunction['u675'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u689', GetNum('0'), GetNum('-55'),'none',500);

	MoveWidgetBy('u708', GetNum('0'), GetNum('-55'),'none',500);

	SetPanelState('u684', 'pd1u684','fade','',0,'none','',500);

	SetPanelState('u684', 'pd0u684','none','',500,'fade','',0);

}

}

widgetIdToShowFunction['u656'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u674', GetNum('0'), GetNum('109'),'none',500);

	MoveWidgetBy('u689', GetNum('0'), GetNum('109'),'none',500);

	MoveWidgetBy('u708', GetNum('0'), GetNum('109'),'none',500);

	SetPanelState('u669', 'pd0u669','fade','',0,'none','',500);

	SetPanelState('u669', 'pd1u669','none','',500,'fade','',0);

}

}

widgetIdToHideFunction['u656'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u674', GetNum('0'), GetNum('-109'),'none',500);

	MoveWidgetBy('u689', GetNum('0'), GetNum('-109'),'none',500);

	MoveWidgetBy('u708', GetNum('0'), GetNum('-109'),'none',500);

	SetPanelState('u669', 'pd1u669','fade','',500,'none','',500);

	SetPanelState('u669', 'pd0u669','none','',500,'fade','',500);

}

}

widgetIdToShowFunction['u639'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u655', GetNum('0'), GetNum('83'),'none',500);

	MoveWidgetBy('u674', GetNum('0'), GetNum('83'),'none',500);

	MoveWidgetBy('u689', GetNum('0'), GetNum('83'),'none',500);

	MoveWidgetBy('u708', GetNum('0'), GetNum('83'),'none',500);

	SetPanelState('u650', 'pd0u650','fade','',0,'none','',500);

	SetPanelState('u650', 'pd1u650','none','',500,'fade','',0);

}

}

widgetIdToHideFunction['u639'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u655', GetNum('0'), GetNum('-83'),'none',500);

	MoveWidgetBy('u674', GetNum('0'), GetNum('-83'),'none',500);

	MoveWidgetBy('u689', GetNum('0'), GetNum('-83'),'none',500);

	MoveWidgetBy('u708', GetNum('0'), GetNum('-83'),'none',500);

	SetPanelState('u650', 'pd1u650','fade','',0,'none','',500);

	SetPanelState('u650', 'pd0u650','none','',500,'fade','',0);

}

}

widgetIdToShowFunction['u690'] = function() {
var e = windowEvent;

if (true) {

	SetPanelState('u703', 'pd0u703','fade','',0,'none','',500);

	SetPanelState('u703', 'pd1u703','none','',500,'fade','',0);

	MoveWidgetBy('u708', GetNum('0'), GetNum('109'),'none',500);

}

}

widgetIdToHideFunction['u690'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u708', GetNum('0'), GetNum('-109'),'none',500);

	SetPanelState('u703', 'pd1u703','fade','',0,'none','',500);

	SetPanelState('u703', 'pd0u703','none','',500,'fade','',0);

}

}

widgetIdToShowFunction['u231'] = function() {
var e = windowEvent;

if (true) {

SetWidgetFormText('u237', '' + (GetGlobalVariableValue('MonthName')) + ' ' + (GetGlobalVariableValue('Year')) + '');

}

}
document.getElementById('u712_img').tabIndex = 0;

u712.style.cursor = 'pointer';
$axure.eventManager.click('u712', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PatientReminder.html');

}
});
document.getElementById('u493_img').tabIndex = 0;

u493.style.cursor = 'pointer';
$axure.eventManager.click('u493', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('AddPatient.html');

}
});
gv_vAlignTable['u400'] = 'center';gv_vAlignTable['u206'] = 'center';gv_vAlignTable['u263'] = 'center';document.getElementById('u680_img').tabIndex = 0;

u680.style.cursor = 'pointer';
$axure.eventManager.click('u680', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('SearchPatient.html');

}
});
gv_vAlignTable['u250'] = 'center';gv_vAlignTable['u637'] = 'top';gv_vAlignTable['u453'] = 'center';gv_vAlignTable['u202'] = 'top';gv_vAlignTable['u446'] = 'center';
$axure.eventManager.focus('u228', function(e) {

if (true) {

SetWidgetFormText('u228', '' + (GetGlobalVariableValue('Year')) + '-' + (GetGlobalVariableValue('Month')) + '-01');

}
});

$axure.eventManager.blur('u228', function(e) {

if ((GetWidgetText('u228')) == ('')) {

SetWidgetFormText('u228', '' + (GetGlobalVariableValue('Year')) + '-' + (GetGlobalVariableValue('Month')) + '-01');

}
});
document.getElementById('u81_img').tabIndex = 0;

u81.style.cursor = 'pointer';
$axure.eventManager.click('u81', function(e) {

if (true) {

	SetPanelVisibility('u48','hidden','none',500);

	SetPanelVisibility('u120','hidden','none',500);

	SetPanelVisibility('u488','hidden','none',500);

	SetPanelVisibility('u316','','none',500);

	SetPanelVisibility('u369','hidden','none',500);

}
});
gv_vAlignTable['u633'] = 'top';gv_vAlignTable['u230'] = 'center';gv_vAlignTable['u408'] = 'center';gv_vAlignTable['u18'] = 'top';gv_vAlignTable['u700'] = 'center';
$axure.eventManager.mouseover('u468', function(e) {
if (!IsTrueMouseOver('u468',e)) return;
if (true) {

	SetPanelVisibility('u463','','none',500);

}
});
gv_vAlignTable['u468'] = 'top';u470.tabIndex = 0;

u470.style.cursor = 'pointer';
$axure.eventManager.click('u470', function(e) {

if (true) {

	NewWindow($axure.globalVariableProvider.getLinkUrl('ChangePassword.html'), "", "directories=0, height=245, location=0, menubar=0, resizable=0, scrollbars=0, status=0, toolbar=0, width=450, left=400, top=400", false, 450, 245);

}
});

$axure.eventManager.mouseover('u470', function(e) {
if (!IsTrueMouseOver('u470',e)) return;
if (true) {

	SetPanelVisibility('u463','','none',500);

}
});
gv_vAlignTable['u470'] = 'top';gv_vAlignTable['u275'] = 'center';
$axure.eventManager.mouseover('u22', function(e) {
if (!IsTrueMouseOver('u22',e)) return;
if (true) {

	SetPanelVisibility('u19','','none',500);

}
});
gv_vAlignTable['u591'] = 'center';gv_vAlignTable['u98'] = 'top';document.getElementById('u181_img').tabIndex = 0;
HookHover('u181', false);

u181.style.cursor = 'pointer';
$axure.eventManager.click('u181', function(e) {

if (true) {

SetWidgetNotSelected('u177');
SetWidgetNotSelected('u179');
SetWidgetSelected('u181');
SetWidgetNotSelected('u183');
SetWidgetFormText('u159', 'CZZ');

	SetPanelVisibility('u174','hidden','fade',100);

}
});
gv_vAlignTable['u393'] = 'center';gv_vAlignTable['u106'] = 'center';gv_vAlignTable['u141'] = 'center';gv_vAlignTable['u512'] = 'top';gv_vAlignTable['u166'] = 'center';gv_vAlignTable['u134'] = 'center';gv_vAlignTable['u505'] = 'center';gv_vAlignTable['u102'] = 'top';gv_vAlignTable['u39'] = 'top';gv_vAlignTable['u346'] = 'top';gv_vAlignTable['u565'] = 'top';gv_vAlignTable['u128'] = 'center';u314.tabIndex = 0;

u314.style.cursor = 'pointer';
$axure.eventManager.click('u314', function(e) {

if (true) {

	SetPanelState('u137', 'pd1u137','none','',500,'fade','',0);

	BringToFront("u137");

}
});
gv_vAlignTable['u314'] = 'top';document.getElementById('u533_img').tabIndex = 0;

u533.style.cursor = 'pointer';
$axure.eventManager.click('u533', function(e) {

if (true) {

SetWidgetFormText('u532', '');

}
});
gv_vAlignTable['u130'] = 'center';gv_vAlignTable['u342'] = 'top';gv_vAlignTable['u561'] = 'top';gv_vAlignTable['u149'] = 'center';gv_vAlignTable['u368'] = 'center';gv_vAlignTable['u364'] = 'center';gv_vAlignTable['u12'] = 'top';gv_vAlignTable['u87'] = 'top';document.getElementById('u77_img').tabIndex = 0;

u77.style.cursor = 'pointer';
$axure.eventManager.click('u77', function(e) {

if (true) {

	SetPanelVisibility('u120','','none',500);

	SetPanelVisibility('u48','hidden','none',500);

	SetPanelVisibility('u369','hidden','none',500);

	SetPanelVisibility('u316','hidden','none',500);

}
});
gv_vAlignTable['u702'] = 'center';gv_vAlignTable['u297'] = 'center';gv_vAlignTable['u88'] = 'top';document.getElementById('u484_img').tabIndex = 0;

u484.style.cursor = 'pointer';
$axure.eventManager.click('u484', function(e) {

if (true) {

	SetPanelVisibility('u473','hidden','none',500);

}
});
gv_vAlignTable['u7'] = 'center';gv_vAlignTable['u200'] = 'center';gv_vAlignTable['u225'] = 'top';
u480.style.cursor = 'pointer';
$axure.eventManager.click('u480', function(e) {

if (true) {

	SetPanelVisibility('u473','hidden','none',500);

SetWidgetRichText('u472', '<p style="text-align:right;"><span style="font-family:Arial;font-size:12px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">( Location B )</span></p>');

SetCheckState('u478', false);

SetCheckState('u482', false);

}
});
gv_vAlignTable['u412'] = 'center';gv_vAlignTable['u692'] = 'center';gv_vAlignTable['u624'] = 'center';gv_vAlignTable['u214'] = 'top';gv_vAlignTable['u614'] = 'top';gv_vAlignTable['u221'] = 'top';gv_vAlignTable['u246'] = 'center';gv_vAlignTable['u617'] = 'top';gv_vAlignTable['u82'] = 'center';gv_vAlignTable['u652'] = 'center';document.getElementById('u722_img').tabIndex = 0;

u722.style.cursor = 'pointer';
$axure.eventManager.click('u722', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ListDisclosure.html');

}
});
gv_vAlignTable['u677'] = 'center';gv_vAlignTable['u620'] = 'center';gv_vAlignTable['u645'] = 'center';gv_vAlignTable['u208'] = 'top';gv_vAlignTable['u242'] = 'center';gv_vAlignTable['u461'] = 'top';gv_vAlignTable['u448'] = 'center';gv_vAlignTable['u475'] = 'center';gv_vAlignTable['u5'] = 'center';document.getElementById('u540_img').tabIndex = 0;
HookHover('u540', false);

u540.style.cursor = 'pointer';
$axure.eventManager.click('u540', function(e) {

if (true) {

SetWidgetSelected('u540');
SetWidgetNotSelected('u542');
SetWidgetNotSelected('u544');
SetWidgetNotSelected('u546');
SetWidgetFormText('u532', 'Adba');

	SetPanelVisibility('u537','hidden','fade',100);

	SetPanelVisibility('u556','','none',500);

}
});
gv_vAlignTable['u391'] = 'center';document.getElementById('u365_img').tabIndex = 0;

u365.style.cursor = 'pointer';
$axure.eventManager.click('u365', function(e) {

if (true) {

	SetPanelVisibility('u48','','none',500);

	SetPanelVisibility('u369','hidden','none',500);

	SetPanelVisibility('u316','hidden','none',500);

	SetPanelVisibility('u488','hidden','none',500);

	SetPanelVisibility('u577','hidden','none',500);

}
});
gv_vAlignTable['u163'] = 'center';document.getElementById('u193_img').tabIndex = 0;
HookHover('u193', false);

u193.style.cursor = 'pointer';
$axure.eventManager.click('u193', function(e) {

if (true) {

SetWidgetNotSelected('u187');
SetWidgetNotSelected('u189');
SetWidgetNotSelected('u191');
SetWidgetSelected('u193');
SetWidgetFormText('u159', 'Ad Attacker');

	SetPanelVisibility('u174','hidden','fade',100);

}
});
gv_vAlignTable['u265'] = 'center';gv_vAlignTable['u465'] = 'center';gv_vAlignTable['u337'] = 'top';gv_vAlignTable['u153'] = 'top';gv_vAlignTable['u524'] = 'top';document.getElementById('u146_img').tabIndex = 0;

u146.style.cursor = 'pointer';
$axure.eventManager.click('u146', function(e) {

if (true) {

	SetPanelVisibility('u137','hidden','none',500);

}
});
gv_vAlignTable['u517'] = 'top';gv_vAlignTable['u736'] = 'center';gv_vAlignTable['u721'] = 'center';gv_vAlignTable['u114'] = 'top';document.getElementById('u552_img').tabIndex = 0;

u552.style.cursor = 'pointer';
$axure.eventManager.click('u552', function(e) {

if (true) {

	SetPanelVisibility('u548','hidden','none',500);

}
});
gv_vAlignTable['u301'] = 'center';gv_vAlignTable['u520'] = 'center';gv_vAlignTable['u545'] = 'center';gv_vAlignTable['u108'] = 'center';document.getElementById('u142_img').tabIndex = 0;

u142.style.cursor = 'pointer';
$axure.eventManager.click('u142', function(e) {

if (true) {

	SetPanelVisibility('u137','hidden','none',500);

}
});
gv_vAlignTable['u573'] = 'top';gv_vAlignTable['u348'] = 'top';gv_vAlignTable['u719'] = 'center';gv_vAlignTable['u305'] = 'center';gv_vAlignTable['u373'] = 'center';gv_vAlignTable['u9'] = 'center';gv_vAlignTable['u515'] = 'top';document.getElementById('u687_img').tabIndex = 0;

u687.style.cursor = 'pointer';
$axure.eventManager.click('u687', function(e) {

if ((GetWidgetVisibility('u675')) == (false)) {

	SetPanelVisibility('u675','','fade',500);

	SetPanelVisibility('u690','hidden','none',500);

	SetPanelVisibility('u639','hidden','none',500);

	SetPanelVisibility('u656','hidden','none',500);

	SetPanelVisibility('u709','hidden','none',500);

}
});
gv_vAlignTable['u284'] = 'center';gv_vAlignTable['u97'] = 'top';gv_vAlignTable['u496'] = 'center';gv_vAlignTable['u58'] = 'center';gv_vAlignTable['u683'] = 'center';gv_vAlignTable['u280'] = 'center';gv_vAlignTable['u212'] = 'top';gv_vAlignTable['u492'] = 'center';document.getElementById('u205_img').tabIndex = 0;

u205.style.cursor = 'pointer';
$axure.eventManager.click('u205', function(e) {

if (true) {

	SetPanelVisibility('u137','hidden','none',500);

}
});
gv_vAlignTable['u424'] = 'center';gv_vAlignTable['u86'] = 'top';gv_vAlignTable['u240'] = 'center';gv_vAlignTable['u68'] = 'center';gv_vAlignTable['u233'] = 'center';document.getElementById('u452_img').tabIndex = 0;

u452.style.cursor = 'pointer';
$axure.eventManager.click('u452', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u477'] = 'center';gv_vAlignTable['u603'] = 'top';gv_vAlignTable['u420'] = 'top';document.getElementById('u445_img').tabIndex = 0;
HookHover('u445', false);

u445.style.cursor = 'pointer';
$axure.eventManager.click('u445', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u664'] = 'center';gv_vAlignTable['u261'] = 'center';gv_vAlignTable['u658'] = 'center';gv_vAlignTable['u23'] = 'center';gv_vAlignTable['u660'] = 'center';gv_vAlignTable['u248'] = 'center';document.getElementById('u619_img').tabIndex = 0;

u619.style.cursor = 'pointer';
$axure.eventManager.click('u619', function(e) {

if (true) {

	SetPanelVisibility('u120','','none',500);

	SetPanelVisibility('u488','','none',500);

	SetPanelVisibility('u316','hidden','none',500);

	SetPanelVisibility('u369','hidden','none',500);

	SetPanelVisibility('u48','hidden','none',500);

	SetPanelVisibility('u577','hidden','none',500);

}
});
gv_vAlignTable['u41'] = 'center';gv_vAlignTable['u698'] = 'center';gv_vAlignTable['u679'] = 'center';gv_vAlignTable['u47'] = 'center';gv_vAlignTable['u28'] = 'top';gv_vAlignTable['u78'] = 'center';gv_vAlignTable['u184'] = 'center';document.getElementById('u716_img').tabIndex = 0;

u716.style.cursor = 'pointer';
$axure.eventManager.click('u716', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Automate_measure_Calculation.html');

}
});
gv_vAlignTable['u180'] = 'center';gv_vAlignTable['u112'] = 'top';gv_vAlignTable['u514'] = 'top';document.getElementById('u105_img').tabIndex = 0;

u105.style.cursor = 'pointer';
$axure.eventManager.click('u105', function(e) {

if (true) {

	SetPanelVisibility('u316','','none',500);

	SetPanelVisibility('u48','hidden','none',500);

}
});
gv_vAlignTable['u324'] = 'center';document.getElementById('u199_img').tabIndex = 0;

u199.style.cursor = 'pointer';
$axure.eventManager.click('u199', function(e) {

if (true) {

	SetPanelVisibility('u137','hidden','none',500);

}
});
gv_vAlignTable['u354'] = 'center';gv_vAlignTable['u511'] = 'center';gv_vAlignTable['u536'] = 'center';gv_vAlignTable['u723'] = 'center';gv_vAlignTable['u377'] = 'center';gv_vAlignTable['u320'] = 'center';gv_vAlignTable['u606'] = 'top';gv_vAlignTable['u345'] = 'top';gv_vAlignTable['u564'] = 'top';gv_vAlignTable['u605'] = 'top';gv_vAlignTable['u161'] = 'center';
u532.style.cursor = 'pointer';
$axure.eventManager.click('u532', function(e) {

if (true) {

SetWidgetFormText('u532', '');

SetWidgetNotSelected('u540');
SetWidgetNotSelected('u542');
SetWidgetNotSelected('u544');
SetWidgetNotSelected('u546');
}
});

$axure.eventManager.keyup('u532', function(e) {

if (((GetWidgetText('u532')) == ('Ad')) || (((GetWidgetText('u532')) == ('ad')) || (((GetWidgetText('u532')) == ('ad ')) || ((GetWidgetText('u532')) == ('ad attack'))))) {

	SetPanelState('u537', 'pd0u537','swing','up',50,'swing','down',50);

}
else
if (((GetWidgetText('u532')) == ('C')) || ((GetWidgetText('u532')) == ('c'))) {

}
else
if (true) {

	SetPanelVisibility('u537','hidden','fade',50);

SetWidgetNotSelected('u540');
SetWidgetNotSelected('u542');
SetWidgetNotSelected('u544');
SetWidgetNotSelected('u546');
}
});

$axure.eventManager.blur('u532', function(e) {

if (true) {

SetWidgetFormText('u532', 'Search...');

}
});
gv_vAlignTable['u558'] = 'center';gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u560'] = 'center';document.getElementById('u148_img').tabIndex = 0;

u148.style.cursor = 'pointer';
$axure.eventManager.click('u148', function(e) {

if (true) {

	SetPanelVisibility('u137','hidden','none',500);

}
});
document.getElementById('u519_img').tabIndex = 0;

u519.style.cursor = 'pointer';
$axure.eventManager.click('u519', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Facesheet.html');

}
});
gv_vAlignTable['u738'] = 'center';gv_vAlignTable['u31'] = 'center';gv_vAlignTable['u579'] = 'center';gv_vAlignTable['u311'] = 'center';gv_vAlignTable['u604'] = 'top';gv_vAlignTable['u688'] = 'center';gv_vAlignTable['u490'] = 'center';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u483'] = 'top';document.getElementById('u367_img').tabIndex = 0;

u367.style.cursor = 'pointer';
$axure.eventManager.click('u367', function(e) {

if (true) {

	SetPanelVisibility('u316','','none',500);

	SetPanelVisibility('u48','hidden','none',500);

	SetPanelVisibility('u369','hidden','none',500);

}
});
gv_vAlignTable['u292'] = 'center';
u224.style.cursor = 'pointer';
$axure.eventManager.click('u224', function(e) {

if (true) {

	SetPanelVisibility('u226','','none',500);

	BringToFront("u226");

}
});
gv_vAlignTable['u151'] = 'top';gv_vAlignTable['u80'] = 'center';gv_vAlignTable['u404'] = 'center';gv_vAlignTable['u498'] = 'center';
u220.style.cursor = 'pointer';
$axure.eventManager.click('u220', function(e) {

if (true) {

}
});
document.getElementById('u706_img').tabIndex = 0;

u706.style.cursor = 'pointer';
$axure.eventManager.click('u706', function(e) {

if ((GetWidgetVisibility('u690')) == (false)) {

	SetPanelVisibility('u690','','fade',500);

	SetPanelVisibility('u675','hidden','none',500);

	SetPanelVisibility('u639','hidden','none',500);

	SetPanelVisibility('u656','hidden','none',500);

	SetPanelVisibility('u709','hidden','none',500);

}
});
gv_vAlignTable['u616'] = 'center';gv_vAlignTable['u432'] = 'top';document.getElementById('u651_img').tabIndex = 0;

u651.style.cursor = 'pointer';
$axure.eventManager.click('u651', function(e) {

if ((GetWidgetVisibility('u639')) == (true)) {

	SetPanelVisibility('u639','hidden','none',500);

	SetPanelVisibility('u690','hidden','none',500);

	SetPanelVisibility('u656','hidden','none',500);

	SetPanelVisibility('u675','hidden','none',500);

	SetPanelVisibility('u709','hidden','none',500);

}
});
gv_vAlignTable['u457'] = 'top';
$axure.eventManager.mouseover('u458', function(e) {
if (!IsTrueMouseOver('u458',e)) return;
if (true) {

	SetPanelState('u473', 'pd0u473','none','',500,'none','',500);

	BringToFront("u473");

}
});
gv_vAlignTable['u458'] = 'top';gv_vAlignTable['u273'] = 'center';
$axure.eventManager.mouseover('u20', function(e) {
if (!IsTrueMouseOver('u20',e)) return;
if (true) {

	SetPanelVisibility('u19','','none',500);

}
});

$axure.eventManager.mouseout('u20', function(e) {
if (!IsTrueMouseOut('u20',e)) return;
if (true) {

	SetPanelVisibility('u19','hidden','none',500);

}
});
gv_vAlignTable['u460'] = 'top';gv_vAlignTable['u21'] = 'center';document.getElementById('u672_img').tabIndex = 0;

u672.style.cursor = 'pointer';
$axure.eventManager.click('u672', function(e) {

if ((GetWidgetVisibility('u656')) == (false)) {

	SetPanelVisibility('u656','','fade',500);

	SetPanelVisibility('u690','hidden','none',500);

	SetPanelVisibility('u639','hidden','none',500);

	SetPanelVisibility('u675','hidden','none',500);

	SetPanelVisibility('u709','hidden','none',500);

}
});
gv_vAlignTable['u673'] = 'center';gv_vAlignTable['u479'] = 'top';u27.tabIndex = 0;

u27.style.cursor = 'pointer';
$axure.eventManager.click('u27', function(e) {

if (true) {

	parent.location.href = 'Login.html';

}
});

$axure.eventManager.mouseover('u27', function(e) {
if (!IsTrueMouseOver('u27',e)) return;
if (true) {

	SetPanelVisibility('u19','','none',500);

}
});
gv_vAlignTable['u27'] = 'top';gv_vAlignTable['u343'] = 'top';gv_vAlignTable['u717'] = 'center';document.getElementById('u659_img').tabIndex = 0;

u659.style.cursor = 'pointer';
$axure.eventManager.click('u659', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PasswordSettings.html');

}
});
gv_vAlignTable['u45'] = 'center';gv_vAlignTable['u196'] = 'center';gv_vAlignTable['u595'] = 'center';gv_vAlignTable['u33'] = 'center';document.getElementById('u714_img').tabIndex = 0;

u714.style.cursor = 'pointer';
$axure.eventManager.click('u714', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PatientList.html');

}
});
gv_vAlignTable['u192'] = 'center';gv_vAlignTable['u124'] = 'center';gv_vAlignTable['u589'] = 'center';
u38.style.cursor = 'pointer';
$axure.eventManager.click('u38', function(e) {

if (true) {

	SetPanelVisibility('u29','hidden','none',500);

SetWidgetRichText('u28', '<p style="text-align:right;"><span style="font-family:Arial;font-size:12px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">( Location C )</span></p>');

SetCheckState('u34', false);

SetCheckState('u36', false);

}
});
gv_vAlignTable['u117'] = 'top';gv_vAlignTable['u336'] = 'center';gv_vAlignTable['u707'] = 'center';gv_vAlignTable['u523'] = 'top';gv_vAlignTable['u398'] = 'center';gv_vAlignTable['u145'] = 'top';gv_vAlignTable['u516'] = 'top';document.getElementById('u735_img').tabIndex = 0;

u735.style.cursor = 'pointer';
$axure.eventManager.click('u735', function(e) {

if ((GetWidgetVisibility('u709')) == (false)) {

	SetPanelVisibility('u709','','fade',500);

	SetPanelVisibility('u675','hidden','none',500);

	SetPanelVisibility('u639','hidden','none',500);

	SetPanelVisibility('u656','hidden','none',500);

	SetPanelVisibility('u690','hidden','none',500);

}
});
gv_vAlignTable['u705'] = 'center';document.getElementById('u621_img').tabIndex = 0;

u621.style.cursor = 'pointer';
$axure.eventManager.click('u621', function(e) {

if (true) {

	SetPanelVisibility('u120','','none',500);

	SetPanelVisibility('u488','','none',500);

	SetPanelVisibility('u48','hidden','none',500);

	SetPanelVisibility('u316','hidden','none',500);

	SetPanelVisibility('u369','hidden','none',500);

	SetPanelVisibility('u577','hidden','none',500);

}
});
gv_vAlignTable['u551'] = 'center';document.getElementById('u357_img').tabIndex = 0;

u357.style.cursor = 'pointer';
$axure.eventManager.click('u357', function(e) {

if (true) {

	SetPanelVisibility('u120','','none',500);

	SetPanelVisibility('u488','','none',500);

	SetPanelVisibility('u316','hidden','none',500);

}
});
gv_vAlignTable['u576'] = 'center';gv_vAlignTable['u139'] = 'center';gv_vAlignTable['u358'] = 'center';gv_vAlignTable['u94'] = 'top';document.getElementById('u544_img').tabIndex = 0;
HookHover('u544', false);

u544.style.cursor = 'pointer';
$axure.eventManager.click('u544', function(e) {

if (true) {

SetWidgetNotSelected('u540');
SetWidgetNotSelected('u542');
SetWidgetSelected('u544');
SetWidgetNotSelected('u546');
SetWidgetFormText('u532', 'Adjiffy');

	SetPanelVisibility('u537','hidden','fade',100);

	SetPanelVisibility('u556','','none',500);

}
});
gv_vAlignTable['u731'] = 'center';gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u572'] = 'top';gv_vAlignTable['u70'] = 'center';gv_vAlignTable['u379'] = 'center';gv_vAlignTable['u17'] = 'top';gv_vAlignTable['u76'] = 'center';document.getElementById('u718_img').tabIndex = 0;

u718.style.cursor = 'pointer';
$axure.eventManager.click('u718', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PQRS_Report.html');

}
});
gv_vAlignTable['u35'] = 'top';gv_vAlignTable['u729'] = 'center';gv_vAlignTable['u290'] = 'center';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u686'] = 'center';document.getElementById('u682_img').tabIndex = 0;

u682.style.cursor = 'pointer';
$axure.eventManager.click('u682', function(e) {

if (true) {

	SetPanelVisibility('u675','toggle','none',500);

	SetPanelVisibility('u639','hidden','none',500);

	SetPanelVisibility('u656','hidden','none',500);

}
});
gv_vAlignTable['u211'] = 'top';u236.tabIndex = 0;

u236.style.cursor = 'pointer';
$axure.eventManager.click('u236', function(e) {

if (true) {

SetWidgetFormText('u228', '' + (GetGlobalVariableValue('Year')) + '-' + (GetGlobalVariableValue('Month')) + '-22');

	SetPanelVisibility('u231','hidden','fade',50);

}
});
gv_vAlignTable['u607'] = 'top';gv_vAlignTable['u204'] = 'center';gv_vAlignTable['u635'] = 'top';document.getElementById('u704_img').tabIndex = 0;

u704.style.cursor = 'pointer';
$axure.eventManager.click('u704', function(e) {

if ((GetWidgetVisibility('u690')) == (true)) {

	SetPanelVisibility('u690','hidden','none',500);

	SetPanelVisibility('u675','hidden','none',500);

	SetPanelVisibility('u639','hidden','none',500);

	SetPanelVisibility('u656','hidden','none',500);

	SetPanelVisibility('u709','hidden','none',500);

}
});
gv_vAlignTable['u451'] = 'center';gv_vAlignTable['u444'] = 'center';gv_vAlignTable['u631'] = 'center';gv_vAlignTable['u219'] = 'top';gv_vAlignTable['u472'] = 'top';gv_vAlignTable['u60'] = 'center';gv_vAlignTable['u611'] = 'center';gv_vAlignTable['u66'] = 'center';u459.tabIndex = 0;

u459.style.cursor = 'pointer';
$axure.eventManager.click('u459', function(e) {

if (true) {

	parent.location.href = 'Login.html';

}
});
gv_vAlignTable['u459'] = 'top';document.getElementById('u678_img').tabIndex = 0;

u678.style.cursor = 'pointer';
$axure.eventManager.click('u678', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('AddPatient.html');

}
});

$axure.eventManager.mouseover('u25', function(e) {
if (!IsTrueMouseOver('u25',e)) return;
if (true) {

	SetPanelVisibility('u19','','none',500);

}
});
gv_vAlignTable['u25'] = 'top';document.getElementById('u187_img').tabIndex = 0;
HookHover('u187', false);

u187.style.cursor = 'pointer';
$axure.eventManager.click('u187', function(e) {

if (true) {

SetWidgetSelected('u187');
SetWidgetNotSelected('u189');
SetWidgetNotSelected('u191');
SetWidgetNotSelected('u193');
SetWidgetFormText('u159', 'Adba');

	SetPanelVisibility('u174','hidden','fade',100);

}
});
gv_vAlignTable['u332'] = 'center';gv_vAlignTable['u190'] = 'center';gv_vAlignTable['u586'] = 'top';document.getElementById('u183_img').tabIndex = 0;
HookHover('u183', false);

u183.style.cursor = 'pointer';
$axure.eventManager.click('u183', function(e) {

if (true) {

SetWidgetNotSelected('u177');
SetWidgetNotSelected('u179');
SetWidgetNotSelected('u181');
SetWidgetSelected('u183');
SetWidgetFormText('u159', 'Contender');

	SetPanelVisibility('u174','hidden','fade',100);

}
});
gv_vAlignTable['u395'] = 'center';gv_vAlignTable['u582'] = 'top';gv_vAlignTable['u389'] = 'center';gv_vAlignTable['u136'] = 'center';gv_vAlignTable['u507'] = 'center';document.getElementById('u726_img').tabIndex = 0;

u726.style.cursor = 'pointer';
$axure.eventManager.click('u726', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('OverdueImmunization.html');

}
});
gv_vAlignTable['u104'] = 'top';gv_vAlignTable['u198'] = 'center';gv_vAlignTable['u567'] = 'top';document.getElementById('u510_img').tabIndex = 0;

u510.style.cursor = 'pointer';
$axure.eventManager.click('u510', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Encounter.html');

}
});

$axure.eventManager.focus('u164', function(e) {

if (true) {

SetWidgetFormText('u164', '' + (GetGlobalVariableValue('Year')) + '-' + (GetGlobalVariableValue('Month')) + '-01');

}
});

$axure.eventManager.blur('u164', function(e) {

if ((GetWidgetText('u164')) == ('')) {

SetWidgetFormText('u164', '' + (GetGlobalVariableValue('Year')) + '-' + (GetGlobalVariableValue('Month')) + '-01');

}
});
document.getElementById('u535_img').tabIndex = 0;

u535.style.cursor = 'pointer';
$axure.eventManager.click('u535', function(e) {

if (true) {

	SetPanelVisibility('u548','','none',500);

}
});
gv_vAlignTable['u132'] = 'center';gv_vAlignTable['u158'] = 'center';gv_vAlignTable['u529'] = 'top';document.getElementById('u720_img').tabIndex = 0;

u720.style.cursor = 'pointer';
$axure.eventManager.click('u720', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Reports.html');

}
});
gv_vAlignTable['u344'] = 'top';gv_vAlignTable['u563'] = 'top';document.getElementById('u160_img').tabIndex = 0;

u160.style.cursor = 'pointer';
$axure.eventManager.click('u160', function(e) {

if (true) {

SetWidgetFormText('u159', '');

}
});
gv_vAlignTable['u531'] = 'center';document.getElementById('u40_img').tabIndex = 0;

u40.style.cursor = 'pointer';
$axure.eventManager.click('u40', function(e) {

if (true) {

	SetPanelVisibility('u29','hidden','none',500);

}
});
gv_vAlignTable['u119'] = 'center';gv_vAlignTable['u338'] = 'top';document.getElementById('u372_img').tabIndex = 0;

u372.style.cursor = 'pointer';
$axure.eventManager.click('u372', function(e) {

if (true) {

	SetPanelVisibility('u48','','none',500);

	SetPanelVisibility('u316','hidden','none',500);

	SetPanelVisibility('u120','hidden','none',500);

	SetPanelVisibility('u369','hidden','none',500);

}
});
gv_vAlignTable['u50'] = 'center';document.getElementById('u179_img').tabIndex = 0;
HookHover('u179', false);

u179.style.cursor = 'pointer';
$axure.eventManager.click('u179', function(e) {

if (true) {

SetWidgetNotSelected('u177');
SetWidgetSelected('u179');
SetWidgetNotSelected('u181');
SetWidgetNotSelected('u183');
SetWidgetFormText('u159', 'Cadoodie');

	SetPanelVisibility('u174','hidden','fade',100);

}
});
gv_vAlignTable['u711'] = 'center';gv_vAlignTable['u56'] = 'center';gv_vAlignTable['u518'] = 'top';document.getElementById('u8_img').tabIndex = 0;

u8.style.cursor = 'pointer';
$axure.eventManager.click('u8', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
u15.tabIndex = 0;

u15.style.cursor = 'pointer';
$axure.eventManager.click('u15', function(e) {

if (true) {

	parent.location.href = 'Login.html';

}
});
gv_vAlignTable['u15'] = 'top';gv_vAlignTable['u74'] = 'center';document.getElementById('u191_img').tabIndex = 0;
HookHover('u191', false);

u191.style.cursor = 'pointer';
$axure.eventManager.click('u191', function(e) {

if (true) {

SetWidgetNotSelected('u187');
SetWidgetNotSelected('u189');
SetWidgetSelected('u191');
SetWidgetNotSelected('u193');
SetWidgetFormText('u159', 'Adjiffy');

	SetPanelVisibility('u174','hidden','fade',100);

}
});
gv_vAlignTable['u486'] = 'top';
u482.style.cursor = 'pointer';
$axure.eventManager.click('u482', function(e) {

if (true) {

	SetPanelVisibility('u473','hidden','none',500);

SetWidgetRichText('u472', '<p style="text-align:right;"><span style="font-family:Arial;font-size:12px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">( Location C )</span></p>');

SetCheckState('u478', false);

SetCheckState('u480', false);

}
});
gv_vAlignTable['u527'] = 'top';gv_vAlignTable['u694'] = 'center';gv_vAlignTable['u626'] = 'center';gv_vAlignTable['u223'] = 'top';gv_vAlignTable['u467'] = 'center';gv_vAlignTable['u254'] = 'center';gv_vAlignTable['u410'] = 'center';gv_vAlignTable['u654'] = 'center';gv_vAlignTable['u622'] = 'center';gv_vAlignTable['u647'] = 'center';gv_vAlignTable['u244'] = 'center';gv_vAlignTable['u503'] = 'center';gv_vAlignTable['u456'] = 'top';gv_vAlignTable['u609'] = 'center';gv_vAlignTable['u643'] = 'center';gv_vAlignTable['u671'] = 'center';gv_vAlignTable['u259'] = 'center';
u478.style.cursor = 'pointer';
$axure.eventManager.click('u478', function(e) {

if (true) {

	SetPanelVisibility('u473','hidden','none',500);

SetWidgetRichText('u472', '<p style="text-align:right;"><span style="font-family:Arial;font-size:12px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">( Location A )</span></p>');

SetCheckState('u480', false);

SetCheckState('u482', false);

}
});
gv_vAlignTable['u64'] = 'center';gv_vAlignTable['u727'] = 'center';gv_vAlignTable['u386'] = 'top';gv_vAlignTable['u382'] = 'top';document.getElementById('u189_img').tabIndex = 0;
HookHover('u189', false);

u189.style.cursor = 'pointer';
$axure.eventManager.click('u189', function(e) {

if (true) {

SetWidgetNotSelected('u187');
SetWidgetSelected('u189');
SetWidgetNotSelected('u191');
SetWidgetNotSelected('u193');
SetWidgetFormText('u159', 'Adder');

	SetPanelVisibility('u174','hidden','fade',100);

}
});
gv_vAlignTable['u307'] = 'center';gv_vAlignTable['u526'] = 'top';gv_vAlignTable['u713'] = 'center';gv_vAlignTable['u116'] = 'top';document.getElementById('u554_img').tabIndex = 0;

u554.style.cursor = 'pointer';
$axure.eventManager.click('u554', function(e) {

if (true) {

	SetPanelVisibility('u548','hidden','none',500);

}
});
gv_vAlignTable['u303'] = 'center';gv_vAlignTable['u522'] = 'center';gv_vAlignTable['u547'] = 'center';document.getElementById('u363_img').tabIndex = 0;

u363.style.cursor = 'pointer';
$axure.eventManager.click('u363', function(e) {

if (true) {

	SetPanelVisibility('u369','','none',500);

	SetPanelVisibility('u48','hidden','none',500);

	SetPanelVisibility('u316','hidden','none',500);

	SetPanelVisibility('u488','hidden','none',500);

	SetPanelVisibility('u577','hidden','none',500);

}
});
gv_vAlignTable['u734'] = 'center';document.getElementById('u550_img').tabIndex = 0;

u550.style.cursor = 'pointer';
$axure.eventManager.click('u550', function(e) {

if (true) {

	SetPanelVisibility('u548','hidden','none',500);

}
});
gv_vAlignTable['u356'] = 'center';gv_vAlignTable['u509'] = 'center';document.getElementById('u728_img').tabIndex = 0;

u728.style.cursor = 'pointer';
$axure.eventManager.click('u728', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Intigrity.html');

}
});
u172.tabIndex = 0;

u172.style.cursor = 'pointer';
$axure.eventManager.click('u172', function(e) {

if (true) {

SetWidgetFormText('u164', '' + (GetGlobalVariableValue('Year')) + '-' + (GetGlobalVariableValue('Month')) + '-22');

	SetPanelVisibility('u167','hidden','fade',50);

}
});
gv_vAlignTable['u543'] = 'center';gv_vAlignTable['u569'] = 'top';document.getElementById('u730_img').tabIndex = 0;

u730.style.cursor = 'pointer';
$axure.eventManager.click('u730', function(e) {

if (true) {

	SetPanelVisibility('u709','toggle','none',500);

	SetPanelVisibility('u639','hidden','none',500);

	SetPanelVisibility('u656','hidden','none',500);

}
});

u36.style.cursor = 'pointer';
$axure.eventManager.click('u36', function(e) {

if (true) {

	SetPanelVisibility('u29','hidden','none',500);

SetWidgetRichText('u28', '<p style="text-align:right;"><span style="font-family:Arial;font-size:12px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">( Location B )</span></p>');

SetCheckState('u34', false);

SetCheckState('u38', false);

}
});
gv_vAlignTable['u318'] = 'center';gv_vAlignTable['u571'] = 'top';
u159.style.cursor = 'pointer';
$axure.eventManager.click('u159', function(e) {

if (true) {

SetWidgetFormText('u159', '');

SetWidgetNotSelected('u187');
SetWidgetNotSelected('u189');
SetWidgetNotSelected('u191');
SetWidgetNotSelected('u193');
SetWidgetNotSelected('u177');
SetWidgetNotSelected('u179');
SetWidgetNotSelected('u181');
SetWidgetNotSelected('u183');
}
});

$axure.eventManager.keyup('u159', function(e) {

if (((GetWidgetText('u159')) == ('Ad')) || (((GetWidgetText('u159')) == ('ad')) || (((GetWidgetText('u159')) == ('ad ')) || ((GetWidgetText('u159')) == ('ad attack'))))) {

	SetPanelState('u174', 'pd0u174','swing','up',50,'swing','down',50);

}
else
if (((GetWidgetText('u159')) == ('C')) || ((GetWidgetText('u159')) == ('c'))) {

	SetPanelState('u174', 'pd1u174','swing','up',50,'swing','down',50);

}
else
if (true) {

	SetPanelVisibility('u174','hidden','fade',50);

SetWidgetNotSelected('u187');
SetWidgetNotSelected('u189');
SetWidgetNotSelected('u191');
SetWidgetNotSelected('u193');
SetWidgetNotSelected('u177');
SetWidgetNotSelected('u179');
SetWidgetNotSelected('u181');
SetWidgetNotSelected('u183');
}
});

$axure.eventManager.blur('u159', function(e) {

if (true) {

SetWidgetFormText('u159', 'Search...');

}
});
gv_vAlignTable['u54'] = 'center';gv_vAlignTable['u72'] = 'center';gv_vAlignTable['u286'] = 'center';document.getElementById('u685_img').tabIndex = 0;

u685.style.cursor = 'pointer';
$axure.eventManager.click('u685', function(e) {

if ((GetWidgetVisibility('u675')) == (true)) {

	SetPanelVisibility('u675','hidden','none',500);

	SetPanelVisibility('u690','hidden','none',500);

	SetPanelVisibility('u639','hidden','none',500);

	SetPanelVisibility('u656','hidden','none',500);

	SetPanelVisibility('u709','hidden','none',500);

}
});
gv_vAlignTable['u282'] = 'center';gv_vAlignTable['u494'] = 'center';gv_vAlignTable['u207'] = 'top';gv_vAlignTable['u426'] = 'top';gv_vAlignTable['u681'] = 'center';gv_vAlignTable['u613'] = 'top';gv_vAlignTable['u267'] = 'center';gv_vAlignTable['u235'] = 'center';
$axure.eventManager.mouseover('u454', function(e) {
if (!IsTrueMouseOver('u454',e)) return;
if (true) {

	SetPanelVisibility('u463','','none',500);

	BringToFront("u463");

}
});
gv_vAlignTable['u454'] = 'top';document.getElementById('u203_img').tabIndex = 0;

u203.style.cursor = 'pointer';
$axure.eventManager.click('u203', function(e) {

if (true) {

	SetPanelVisibility('u137','hidden','none',500);

}
});
gv_vAlignTable['u422'] = 'top';gv_vAlignTable['u641'] = 'center';document.getElementById('u447_img').tabIndex = 0;
HookHover('u447', false);

u447.style.cursor = 'pointer';
$axure.eventManager.click('u447', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u666'] = 'center';document.getElementById('u229_img').tabIndex = 0;

u229.style.cursor = 'pointer';
$axure.eventManager.click('u229', function(e) {

if (true) {

	SetPanelVisibility('u231','toggle','fade',50);

	BringToFront("u231");

}
});
gv_vAlignTable['u415'] = 'center';gv_vAlignTable['u256'] = 'center';gv_vAlignTable['u627'] = 'top';document.getElementById('u443_img').tabIndex = 0;

u443.style.cursor = 'pointer';
$axure.eventManager.click('u443', function(e) {

if (true) {

	SetPanelVisibility('u413','','none',500);

	SetPanelVisibility('u417','hidden','none',500);

}
});
gv_vAlignTable['u662'] = 'center';
$axure.eventManager.mouseover('u469', function(e) {
if (!IsTrueMouseOver('u469',e)) return;
if (true) {

	SetPanelVisibility('u463','','none',500);

}
});
gv_vAlignTable['u469'] = 'top';
u218.style.cursor = 'pointer';
$axure.eventManager.click('u218', function(e) {

if (true) {

}
});
u471.tabIndex = 0;

u471.style.cursor = 'pointer';
$axure.eventManager.click('u471', function(e) {

if (true) {

	parent.location.href = 'Login.html';

}
});

$axure.eventManager.mouseover('u471', function(e) {
if (!IsTrueMouseOver('u471',e)) return;
if (true) {

	SetPanelVisibility('u463','','none',500);

}
});
gv_vAlignTable['u471'] = 'top';gv_vAlignTable['u278'] = 'center';gv_vAlignTable['u649'] = 'center';gv_vAlignTable['u62'] = 'center';
$axure.eventManager.mouseover('u464', function(e) {
if (!IsTrueMouseOver('u464',e)) return;
if (true) {

	SetPanelVisibility('u463','','none',500);

}
});

$axure.eventManager.mouseout('u464', function(e) {
if (!IsTrueMouseOut('u464',e)) return;
if (true) {

	SetPanelVisibility('u463','hidden','none',500);

}
});
gv_vAlignTable['u585'] = 'center';gv_vAlignTable['u182'] = 'center';gv_vAlignTable['u16'] = 'top';document.getElementById('u394_img').tabIndex = 0;
HookHover('u394', false);

u394.style.cursor = 'pointer';
$axure.eventManager.click('u394', function(e) {

if (true) {

	SetPanelVisibility('u417','','none',500);

	SetPanelVisibility('u413','hidden','none',500);

}
});
document.getElementById('u107_img').tabIndex = 0;

u107.style.cursor = 'pointer';
$axure.eventManager.click('u107', function(e) {

if (true) {

	SetPanelVisibility('u120','','none',500);

	SetPanelVisibility('u488','','none',500);

	SetPanelVisibility('u48','hidden','none',500);

}
});
gv_vAlignTable['u326'] = 'center';gv_vAlignTable['u581'] = 'center';gv_vAlignTable['u513'] = 'top';document.getElementById('u388_img').tabIndex = 0;

u388.style.cursor = 'pointer';
$axure.eventManager.click('u388', function(e) {

if (true) {

	SetPanelVisibility('u316','','none',500);

	SetPanelVisibility('u48','hidden','none',500);

	SetPanelVisibility('u369','hidden','none',500);

}
});
gv_vAlignTable['u110'] = 'top';document.getElementById('u506_img').tabIndex = 0;

u506.style.cursor = 'pointer';
$axure.eventManager.click('u506', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Encounter.html');

}
});
gv_vAlignTable['u725'] = 'center';gv_vAlignTable['u103'] = 'top';gv_vAlignTable['u322'] = 'center';gv_vAlignTable['u541'] = 'center';gv_vAlignTable['u566'] = 'top';gv_vAlignTable['u93'] = 'top';u315.tabIndex = 0;

u315.style.cursor = 'pointer';
$axure.eventManager.click('u315', function(e) {

if (true) {

	SetPanelState('u137', 'pd0u137','none','',500,'fade','',0);

	BringToFront("u137");

}
});
gv_vAlignTable['u315'] = 'top';gv_vAlignTable['u534'] = 'center';document.getElementById('u131_img').tabIndex = 0;

u131.style.cursor = 'pointer';
$axure.eventManager.click('u131', function(e) {

if (true) {

	SetPanelState('u137', 'pd0u137','none','',500,'fade','',0);

	BringToFront("u137");

}
});
gv_vAlignTable['u350'] = 'center';gv_vAlignTable['u156'] = 'center';gv_vAlignTable['u375'] = 'center';gv_vAlignTable['u309'] = 'center';gv_vAlignTable['u528'] = 'top';
$axure.eventManager.mouseover('u10', function(e) {
if (!IsTrueMouseOver('u10',e)) return;
if (true) {

	SetPanelVisibility('u19','','none',500);

	BringToFront("u19");

}
});
gv_vAlignTable['u10'] = 'top';gv_vAlignTable['u562'] = 'top';gv_vAlignTable['u555'] = 'center';document.getElementById('u118_img').tabIndex = 0;

u118.style.cursor = 'pointer';
$axure.eventManager.click('u118', function(e) {

if (true) {

	SetPanelVisibility('u48','hidden','none',500);

	SetPanelVisibility('u120','hidden','none',500);

	SetPanelVisibility('u488','hidden','none',500);

	SetPanelVisibility('u316','hidden','none',500);

	SetPanelVisibility('u369','','none',500);

}
});
gv_vAlignTable['u371'] = 'center';gv_vAlignTable['u178'] = 'center';gv_vAlignTable['u696'] = 'center';
u34.style.cursor = 'pointer';
$axure.eventManager.click('u34', function(e) {

if (true) {

	SetPanelVisibility('u29','hidden','none',500);

SetWidgetRichText('u28', '<p style="text-align:right;"><span style="font-family:Arial;font-size:12px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">( Location A )</span></p>');

SetCheckState('u36', false);

SetCheckState('u38', false);

}
});
document.getElementById('u177_img').tabIndex = 0;
HookHover('u177', false);

u177.style.cursor = 'pointer';
$axure.eventManager.click('u177', function(e) {

if (true) {

SetWidgetSelected('u177');
SetWidgetNotSelected('u179');
SetWidgetNotSelected('u181');
SetWidgetNotSelected('u183');
SetWidgetFormText('u159', 'Catman');

	SetPanelVisibility('u174','hidden','fade',100);

}
});
gv_vAlignTable['u37'] = 'top';gv_vAlignTable['u52'] = 'center';gv_vAlignTable['u485'] = 'center';gv_vAlignTable['u299'] = 'center';u26.tabIndex = 0;

u26.style.cursor = 'pointer';
$axure.eventManager.click('u26', function(e) {

if (true) {

	NewWindow($axure.globalVariableProvider.getLinkUrl('ChangePassword.html'), "", "directories=0, height=245, location=0, menubar=0, resizable=0, scrollbars=0, status=0, toolbar=0, width=450, left=400, top=400", false, 450, 245);

}
});

$axure.eventManager.mouseover('u26', function(e) {
if (!IsTrueMouseOver('u26',e)) return;
if (true) {

	SetPanelVisibility('u19','','none',500);

}
});
gv_vAlignTable['u26'] = 'top';gv_vAlignTable['u294'] = 'center';gv_vAlignTable['u715'] = 'center';gv_vAlignTable['u481'] = 'top';gv_vAlignTable['u288'] = 'center';gv_vAlignTable['u406'] = 'center';gv_vAlignTable['u252'] = 'center';
u222.style.cursor = 'pointer';
$axure.eventManager.click('u222', function(e) {

if (true) {

	SetPanelVisibility('u226','hidden','none',500);

}
});

$axure.eventManager.mouseover('u466', function(e) {
if (!IsTrueMouseOver('u466',e)) return;
if (true) {

	SetPanelVisibility('u463','','none',500);

}
});
gv_vAlignTable['u215'] = 'top';gv_vAlignTable['u434'] = 'top';document.getElementById('u653_img').tabIndex = 0;

u653.style.cursor = 'pointer';
$axure.eventManager.click('u653', function(e) {

if ((GetWidgetVisibility('u639')) == (false)) {

	SetPanelVisibility('u639','','fade',500);

	SetPanelVisibility('u690','hidden','none',500);

	SetPanelVisibility('u656','hidden','none',500);

	SetPanelVisibility('u675','hidden','none',500);

	SetPanelVisibility('u709','hidden','none',500);

}
});
gv_vAlignTable['u402'] = 'center';gv_vAlignTable['u209'] = 'top';gv_vAlignTable['u428'] = 'top';gv_vAlignTable['u462'] = 'top';gv_vAlignTable['u269'] = 'center';gv_vAlignTable['u430'] = 'top';gv_vAlignTable['u455'] = 'top';gv_vAlignTable['u271'] = 'center';document.getElementById('u642_img').tabIndex = 0;

u642.style.cursor = 'pointer';
$axure.eventManager.click('u642', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('UserGroupList.html');

}
});
gv_vAlignTable['u449'] = 'top';gv_vAlignTable['u668'] = 'center';
$axure.eventManager.mouseover('u24', function(e) {
if (!IsTrueMouseOver('u24',e)) return;
if (true) {

	SetPanelVisibility('u19','','none',500);

}
});
gv_vAlignTable['u24'] = 'top';document.getElementById('u670_img').tabIndex = 0;

u670.style.cursor = 'pointer';
$axure.eventManager.click('u670', function(e) {

if ((GetWidgetVisibility('u656')) == (true)) {

	SetPanelVisibility('u656','hidden','none',500);

	SetPanelVisibility('u690','hidden','none',500);

	SetPanelVisibility('u639','hidden','none',500);

	SetPanelVisibility('u675','hidden','none',500);

	SetPanelVisibility('u709','hidden','none',500);

}
});
gv_vAlignTable['u42'] = 'top';document.getElementById('u165_img').tabIndex = 0;

u165.style.cursor = 'pointer';
$axure.eventManager.click('u165', function(e) {

if (true) {

	SetPanelVisibility('u167','toggle','fade',50);

	BringToFront("u167");

}
});
gv_vAlignTable['u385'] = 'center';gv_vAlignTable['u95'] = 'top';gv_vAlignTable['u597'] = 'center';gv_vAlignTable['u194'] = 'center';gv_vAlignTable['u126'] = 'center';gv_vAlignTable['u150'] = 'top';gv_vAlignTable['u416'] = 'top';gv_vAlignTable['u381'] = 'top';gv_vAlignTable['u313'] = 'center';gv_vAlignTable['u188'] = 'center';gv_vAlignTable['u593'] = 'center';gv_vAlignTable['u500'] = 'center';gv_vAlignTable['u154'] = 'top';gv_vAlignTable['u525'] = 'top';gv_vAlignTable['u352'] = 'top';gv_vAlignTable['u122'] = 'center';gv_vAlignTable['u341'] = 'top';gv_vAlignTable['u147'] = 'center';gv_vAlignTable['u366'] = 'center';document.getElementById('u737_img').tabIndex = 0;

u737.style.cursor = 'pointer';
$axure.eventManager.click('u737', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u553'] = 'center';document.getElementById('u724_img').tabIndex = 0;

u724.style.cursor = 'pointer';
$axure.eventManager.click('u724', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ImmunizationRegistry.html');

}
});
document.getElementById('u546_img').tabIndex = 0;
HookHover('u546', false);

u546.style.cursor = 'pointer';
$axure.eventManager.click('u546', function(e) {

if (true) {

SetWidgetNotSelected('u540');
SetWidgetNotSelected('u542');
SetWidgetNotSelected('u544');
SetWidgetSelected('u546');
SetWidgetFormText('u532', 'Ad Attacker');

	SetPanelVisibility('u537','hidden','fade',100);

	SetPanelVisibility('u556','','none',500);

}
});
gv_vAlignTable['u328'] = 'center';gv_vAlignTable['u143'] = 'center';document.getElementById('u733_img').tabIndex = 0;

u733.style.cursor = 'pointer';
$axure.eventManager.click('u733', function(e) {

if ((GetWidgetVisibility('u709')) == (true)) {

	SetPanelVisibility('u709','hidden','none',500);

	SetPanelVisibility('u675','hidden','none',500);

	SetPanelVisibility('u639','hidden','none',500);

	SetPanelVisibility('u656','hidden','none',500);

	SetPanelVisibility('u690','hidden','none',500);

}
});
gv_vAlignTable['u169'] = 'center';gv_vAlignTable['u330'] = 'center';document.getElementById('u701_img').tabIndex = 0;

u701.style.cursor = 'pointer';
$axure.eventManager.click('u701', function(e) {

if (true) {

	SetPanelVisibility('u690','toggle','none',500);

	SetPanelVisibility('u639','hidden','none',500);

	SetPanelVisibility('u656','hidden','none',500);

}
});
document.getElementById('u355_img').tabIndex = 0;

u355.style.cursor = 'pointer';
$axure.eventManager.click('u355', function(e) {

if (true) {

	SetPanelVisibility('u369','','none',500);

	SetPanelVisibility('u316','hidden','none',500);

}
});
gv_vAlignTable['u574'] = 'top';gv_vAlignTable['u171'] = 'center';document.getElementById('u542_img').tabIndex = 0;
HookHover('u542', false);

u542.style.cursor = 'pointer';
$axure.eventManager.click('u542', function(e) {

if (true) {

SetWidgetNotSelected('u540');
SetWidgetSelected('u542');
SetWidgetNotSelected('u544');
SetWidgetNotSelected('u546');
SetWidgetFormText('u532', 'Adder');

	SetPanelVisibility('u537','hidden','fade',100);

	SetPanelVisibility('u556','','none',500);

}
});
gv_vAlignTable['u568'] = 'top';
$axure.eventManager.mouseover('u14', function(e) {
if (!IsTrueMouseOver('u14',e)) return;
if (true) {

	SetPanelState('u29', 'pd0u29','none','',500,'none','',500);

	BringToFront("u29");

}
});
gv_vAlignTable['u14'] = 'top';gv_vAlignTable['u629'] = 'top';gv_vAlignTable['u570'] = 'top';