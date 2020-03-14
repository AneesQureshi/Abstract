for(var i = 0; i < 592; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

rdo2OnCalendarLoad(e);

}

});

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

if (bIE) document.getElementById('u511').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u511'); });
else {
    document.getElementById('u511').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u511'); }, true);
    document.getElementById('u511').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u511'); }, true);
}

widgetIdToDragFunction['u511'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u511',widgetDragInfo.xDelta,widgetDragInfo.yDelta,'none',500);

	BringToFront("u511");

}

}

function rdo2OnCalendarLoad(e) {

if (true) {

SetWidgetFormText('u312', '' + (GetGlobalVariableValue('Day')) + '');

SetWidgetFormText('u313', '' + (GetGlobalVariableValue('MonthName')) + '');

SetWidgetFormText('u314', '' + (GetGlobalVariableValue('Year')) + '');

SetWidgetFormText('u224', GetWidgetText('u312'));

SetSelectedOption('u225', GetWidgetText('u313'));

SetSelectedOption('u226', GetWidgetText('u314'));

	var obj1 = document.getElementById("u230");
    obj1.focus();

}

}

function rdo2OnDateSelection(e) {

if (true) {

SetWidgetFormText('u180', GetWidgetText('u229'));

	var obj1 = document.getElementById("u236");
    obj1.focus();
function waitu9554ed96ed934cc0ba7103a90cc8724b1() {

	var obj1 = document.getElementById("u180");
    obj1.focus();
}
setTimeout(waitu9554ed96ed934cc0ba7103a90cc8724b1, 200);

}

}

function rdo2OnCalendarClose(e) {

if (true) {

	var obj1 = document.getElementById("u236");
    obj1.focus();
function waitu0f0bc671d1794da396ce8114bc79bc4f1() {

	var obj1 = document.getElementById("u180");
    obj1.focus();
}
setTimeout(waitu0f0bc671d1794da396ce8114bc79bc4f1, 200);

}

}
gv_vAlignTable['u370'] = 'top';gv_vAlignTable['u488'] = 'center';
$axure.eventManager.focus('u299', function(e) {

if (true) {

SetWidgetNotSelected('u431');
SetWidgetNotSelected('u433');
SetWidgetNotSelected('u435');
SetWidgetNotSelected('u437');
SetWidgetNotSelected('u440');
SetWidgetNotSelected('u442');
SetWidgetNotSelected('u444');
SetWidgetNotSelected('u446');
SetWidgetNotSelected('u449');
SetWidgetNotSelected('u451');
SetWidgetNotSelected('u453');
SetWidgetNotSelected('u455');
SetWidgetNotSelected('u458');
SetWidgetNotSelected('u460');
SetWidgetNotSelected('u462');
SetWidgetNotSelected('u464');
SetWidgetNotSelected('u467');
SetWidgetNotSelected('u469');
SetWidgetNotSelected('u471');
SetWidgetNotSelected('u473');
SetWidgetNotSelected('u476');
SetWidgetNotSelected('u478');
SetWidgetNotSelected('u480');
SetWidgetNotSelected('u482');
SetWidgetNotSelected('u485');
SetWidgetNotSelected('u487');
SetWidgetNotSelected('u489');
SetWidgetNotSelected('u491');
SetWidgetNotSelected('u494');
SetWidgetNotSelected('u497');
SetWidgetNotSelected('u500');
	var obj1 = document.getElementById("u297");
    obj1.focus();

}
});
gv_vAlignTable['u465'] = 'center';document.getElementById('u421_img').tabIndex = 0;
HookHover('u421', false);

u421.style.cursor = 'pointer';
$axure.eventManager.click('u421', function(e) {

if (true) {

	var obj1 = document.getElementById("u255");
    obj1.focus();

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
gv_vAlignTable['u400'] = 'top';gv_vAlignTable['u553'] = 'center';gv_vAlignTable['u492'] = 'center';gv_vAlignTable['u72'] = 'center';gv_vAlignTable['u97'] = 'center';gv_vAlignTable['u152'] = 'center';gv_vAlignTable['u450'] = 'center';gv_vAlignTable['u587'] = 'center';gv_vAlignTable['u231'] = 'top';gv_vAlignTable['u78'] = 'center';gv_vAlignTable['u166'] = 'center';gv_vAlignTable['u298'] = 'top';document.getElementById('u464_img').tabIndex = 0;
HookHover('u464', false);

u464.style.cursor = 'pointer';
$axure.eventManager.click('u464', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u241', '25');

	var obj1 = document.getElementById("u245");
    obj1.focus();

}
});
gv_vAlignTable['u139'] = 'center';gv_vAlignTable['u201'] = 'top';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u583'] = 'center';gv_vAlignTable['u215'] = 'center';gv_vAlignTable['u193'] = 'top';gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u413'] = 'center';gv_vAlignTable['u332'] = 'top';document.getElementById('u151_img').tabIndex = 0;

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
gv_vAlignTable['u527'] = 'center';gv_vAlignTable['u26'] = 'top';gv_vAlignTable['u378'] = 'top';gv_vAlignTable['u463'] = 'center';document.getElementById('u138_img').tabIndex = 0;

u138.style.cursor = 'pointer';
$axure.eventManager.click('u138', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ListDisclosure.html');

}
});
gv_vAlignTable['u425'] = 'center';document.getElementById('u54_img').tabIndex = 0;

u54.style.cursor = 'pointer';
$axure.eventManager.click('u54', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('UserGroupList.html');

}
});

$axure.eventManager.focus('u236', function(e) {

if (true) {

	SetPanelVisibility('u315','hidden','none',500);

	var obj1 = document.getElementById("u230");
    obj1.focus();

}
});
document.getElementById('u214_img').tabIndex = 0;
HookHover('u214', false);

u214.style.cursor = 'pointer';
$axure.eventManager.click('u214', function(e) {

if (true) {

	SetPanelVisibility('u511','','fade',50);

	BringToFront("u511");

}
});

$axure.eventManager.focus('u269', function(e) {

if (true) {

SetWidgetFormText('u321', GetSelectedOption('u239'));

SetWidgetFormText('u323', GetWidgetText('u240'));

	var obj1 = document.getElementById("u267");
    obj1.focus();

}
});
gv_vAlignTable['u150'] = 'center';
$axure.eventManager.focus('u287', function(e) {

if (IsValueOneOf(GetWidgetText('u240'), ['2004', '2010', '2021', '2027'])) {

SetWidgetFormText('u293', '1');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u240'), ['2005', '2011', '2016', '2022'])) {

SetWidgetFormText('u293', '2');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u240'), ['2000', '2006', '2017', '2023', '2028'])) {

SetWidgetFormText('u293', '3');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u240'), ['2001', '2007', '2012', '2018', '2029'])) {

SetWidgetFormText('u293', '4');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u240'), ['2002', '2013', '2019', '2024', '2030'])) {

SetWidgetFormText('u293', '5');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u240'), ['2003', '2008', '2014', '2025'])) {

SetWidgetFormText('u293', '6');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u240'), ['2009', '2015', '2020', '2026'])) {

SetWidgetFormText('u293', '7');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
});
gv_vAlignTable['u585'] = 'center';gv_vAlignTable['u436'] = 'center';gv_vAlignTable['u340'] = 'top';u24.tabIndex = 0;

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
gv_vAlignTable['u24'] = 'top';document.getElementById('u80_img').tabIndex = 0;

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
gv_vAlignTable['u346'] = 'top';document.getElementById('u476_img').tabIndex = 0;
HookHover('u476', false);

u476.style.cursor = 'pointer';
$axure.eventManager.click('u476', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u241', '06');

	var obj1 = document.getElementById("u245");
    obj1.focus();

}
});
document.getElementById('u113_img').tabIndex = 0;

u113.style.cursor = 'pointer';
$axure.eventManager.click('u113', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('AddPatient.html');

}
});
gv_vAlignTable['u268'] = 'top';gv_vAlignTable['u330'] = 'top';gv_vAlignTable['u501'] = 'center';document.getElementById('u63_img').tabIndex = 0;

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
document.getElementById('u449_img').tabIndex = 0;
HookHover('u449', false);

u449.style.cursor = 'pointer';
$axure.eventManager.click('u449', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u241', '03');

	var obj1 = document.getElementById("u245");
    obj1.focus();

}
});
gv_vAlignTable['u326'] = 'top';gv_vAlignTable['u37'] = 'top';gv_vAlignTable['u93'] = 'center';gv_vAlignTable['u112'] = 'center';document.getElementById('u419_img').tabIndex = 0;

u419.style.cursor = 'pointer';
$axure.eventManager.click('u419', function(e) {

if (true) {

	var obj1 = document.getElementById("u255");
    obj1.focus();

}
});
gv_vAlignTable['u307'] = 'top';
$axure.eventManager.focus('u285', function(e) {

if (IsValueOneOf(GetWidgetText('u240'), ['2003', '2008', '2014', '2025'])) {

SetWidgetFormText('u293', '1');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u240'), ['2009', '2015', '2020', '2026'])) {

SetWidgetFormText('u293', '2');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u240'), ['2004', '2010', '2021', '2027'])) {

SetWidgetFormText('u293', '3');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u240'), ['2005', '2011', '2016', '2022'])) {

SetWidgetFormText('u293', '4');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u240'), ['2000', '2006', '2017', '2023', '2028'])) {

SetWidgetFormText('u293', '5');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u240'), ['2001', '2007', '2012', '2018', '2029'])) {

SetWidgetFormText('u293', '6');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u240'), ['2002', '2013', '2019', '2024', '2030'])) {

SetWidgetFormText('u293', '7');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
});

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
document.getElementById('u424_img').tabIndex = 0;
HookHover('u424', false);

u424.style.cursor = 'pointer';
$axure.eventManager.click('u424', function(e) {

if (true) {

	var obj1 = document.getElementById("u247");
    obj1.focus();

}
});
gv_vAlignTable['u74'] = 'center';gv_vAlignTable['u579'] = 'center';gv_vAlignTable['u162'] = 'center';document.getElementById('u460_img').tabIndex = 0;
HookHover('u460', false);

u460.style.cursor = 'pointer';
$axure.eventManager.click('u460', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u241', '11');

	var obj1 = document.getElementById("u245");
    obj1.focus();

}
});
gv_vAlignTable['u540'] = 'top';gv_vAlignTable['u447'] = 'center';gv_vAlignTable['u55'] = 'center';gv_vAlignTable['u411'] = 'center';document.getElementById('u149_img').tabIndex = 0;

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
gv_vAlignTable['u306'] = 'top';gv_vAlignTable['u284'] = 'top';
$axure.eventManager.mouseover('u12', function(e) {
if (!IsTrueMouseOver('u12',e)) return;
if (true) {

	SetPanelState('u27', 'pd0u27','none','',500,'none','',500);

	BringToFront("u27");

}
});
gv_vAlignTable['u12'] = 'top';gv_vAlignTable['u591'] = 'center';gv_vAlignTable['u342'] = 'top';document.getElementById('u518_img').tabIndex = 0;
HookClick('u518', false);

u518.style.cursor = 'pointer';
$axure.eventManager.click('u518', function(e) {

if ((GetGlobalVariableValue('FileName')) != ('')) {

	SetPanelVisibility('u511','hidden','fade',50);

	SetPanelVisibility('u218','','none',500);
function waitu51ace3421ecd4feca65daa1c121c4f5d1() {

	SetPanelVisibility('u218','hidden','none',500);

SetWidgetFormText('u216', GetGlobalVariableValue('FileName'));
}
setTimeout(waitu51ace3421ecd4feca65daa1c121c4f5d1, 1000);

}
else
if ((GetGlobalVariableValue('FileName')) == ('')) {

	SetPanelVisibility('u511','hidden','fade',50);

}
});
document.getElementById('u437_img').tabIndex = 0;
HookHover('u437', false);

u437.style.cursor = 'pointer';
$axure.eventManager.click('u437', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u241', '22');

	var obj1 = document.getElementById("u245");
    obj1.focus();

}
});
gv_vAlignTable['u356'] = 'top';gv_vAlignTable['u175'] = 'top';document.getElementById('u554_img').tabIndex = 0;

u554.style.cursor = 'pointer';
$axure.eventManager.click('u554', function(e) {

if (true) {

	SetPanelVisibility('u511','hidden','fade',50);

}
});
gv_vAlignTable['u348'] = 'top';gv_vAlignTable['u461'] = 'center';gv_vAlignTable['u490'] = 'center';gv_vAlignTable['u305'] = 'top';
$axure.eventManager.focus('u283', function(e) {

if (IsValueOneOf(GetWidgetText('u240'), ['2005', '2011', '2016', '2022'])) {

SetWidgetFormText('u293', '1');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u240'), ['2000', '2006', '2017', '2023', '2028'])) {

SetWidgetFormText('u293', '2');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u240'), ['2001', '2007', '2012', '2018', '2029'])) {

SetWidgetFormText('u293', '3');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u240'), ['2002', '2013', '2019', '2024', '2030'])) {

SetWidgetFormText('u293', '4');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u240'), ['2003', '2008', '2014', '2025'])) {

SetWidgetFormText('u293', '5');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u240'), ['2009', '2015', '2020', '2026'])) {

SetWidgetFormText('u293', '6');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u240'), ['2004', '2010', '2021', '2027'])) {

SetWidgetFormText('u293', '7');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
});

$axure.eventManager.mouseover('u20', function(e) {
if (!IsTrueMouseOver('u20',e)) return;
if (true) {

	SetPanelVisibility('u17','','none',500);

}
});

$axure.eventManager.focus('u279', function(e) {

if (IsValueOneOf(GetWidgetText('u240'), ['2009', '2015', '2020', '2026'])) {

SetWidgetFormText('u293', '1');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u240'), ['2004', '2010', '2021', '2027'])) {

SetWidgetFormText('u293', '2');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u240'), ['2005', '2011', '2016', '2022'])) {

SetWidgetFormText('u293', '3');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u240'), ['2000', '2006', '2017', '2023', '2028'])) {

SetWidgetFormText('u293', '4');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u240'), ['2001', '2007', '2012', '2018', '2029'])) {

SetWidgetFormText('u293', '5');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u240'), ['2002', '2013', '2019', '2024', '2030'])) {

SetWidgetFormText('u293', '6');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u240'), ['2003', '2008', '2014', '2025'])) {

SetWidgetFormText('u293', '7');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
});
gv_vAlignTable['u160'] = 'center';
$axure.eventManager.focus('u297', function(e) {

if (IsValueOneOf(GetSelectedOption('u239'), ['January', 'March', 'May', 'July', 'August', 'October', 'December'])) {

SetWidgetFormText('u296', '31');

}

if (IsValueOneOf(GetSelectedOption('u239'), ['April', 'June', 'September', 'November'])) {

SetWidgetFormText('u296', '30');

}

if ((GetSelectedOption('u239')) == ('February')) {

SetWidgetFormText('u296', '28');

}

if (((GetSelectedOption('u239')) == ('February')) && (IsValueOneOf(GetWidgetText('u240'), ['2000', '2004', '2008', '2012', '2016', '2020', '2024', '2028']))) {

SetWidgetFormText('u296', '29');

}

if (true) {

	var obj1 = document.getElementById("u294");
    obj1.focus();

}
});

$axure.eventManager.mouseover('u8', function(e) {
if (!IsTrueMouseOver('u8',e)) return;
if (true) {

	SetPanelVisibility('u17','','none',500);

	BringToFront("u17");

}
});
gv_vAlignTable['u8'] = 'top';u25.tabIndex = 0;

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
gv_vAlignTable['u25'] = 'top';gv_vAlignTable['u81'] = 'center';gv_vAlignTable['u474'] = 'center';gv_vAlignTable['u459'] = 'center';gv_vAlignTable['u567'] = 'center';gv_vAlignTable['u304'] = 'top';gv_vAlignTable['u282'] = 'top';gv_vAlignTable['u76'] = 'center';gv_vAlignTable['u123'] = 'center';gv_vAlignTable['u278'] = 'top';gv_vAlignTable['u137'] = 'center';gv_vAlignTable['u33'] = 'top';gv_vAlignTable['u254'] = 'top';gv_vAlignTable['u173'] = 'top';gv_vAlignTable['u422'] = 'center';gv_vAlignTable['u438'] = 'center';document.getElementById('u522_img').tabIndex = 0;
HookClick('u522', false);

u522.style.cursor = 'pointer';
$axure.eventManager.click('u522', function(e) {

if (true) {

	SetPanelVisibility('u511','hidden','fade',50);

}
});
gv_vAlignTable['u213'] = 'top';gv_vAlignTable['u303'] = 'top';
$axure.eventManager.focus('u281', function(e) {

if (IsValueOneOf(GetWidgetText('u240'), ['2001', '2007', '2012', '2018', '2029'])) {

SetWidgetFormText('u293', '1');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u240'), ['2002', '2013', '2019', '2024', '2030'])) {

SetWidgetFormText('u293', '2');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u240'), ['2003', '2008', '2014', '2025'])) {

SetWidgetFormText('u293', '3');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u240'), ['2009', '2015', '2020', '2026'])) {

SetWidgetFormText('u293', '4');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u240'), ['2004', '2010', '2021', '2027'])) {

SetWidgetFormText('u293', '5');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u240'), ['2005', '2011', '2016', '2022'])) {

SetWidgetFormText('u293', '6');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u240'), ['2000', '2006', '2017', '2023', '2028'])) {

SetWidgetFormText('u293', '7');

	var obj1 = document.getElementById("u273");
    obj1.focus();

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
gv_vAlignTable['u358'] = 'top';gv_vAlignTable['u420'] = 'center';gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u317'] = 'center';gv_vAlignTable['u295'] = 'top';document.getElementById('u136_img').tabIndex = 0;

u136.style.cursor = 'pointer';
$axure.eventManager.click('u136', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Reports.html');

}
});
gv_vAlignTable['u51'] = 'center';gv_vAlignTable['u434'] = 'center';
$axure.eventManager.focus('u253', function(e) {

if (true) {

SetSelectedOption('u239', 'December');

	var obj1 = document.getElementById("u247");
    obj1.focus();

}
});
gv_vAlignTable['u551'] = 'center';gv_vAlignTable['u470'] = 'center';document.getElementById('u410_img').tabIndex = 0;

u410.style.cursor = 'pointer';
$axure.eventManager.click('u410', function(e) {

if (true) {

	var obj1 = document.getElementById("u261");
    obj1.focus();

}
});
gv_vAlignTable['u472'] = 'center';
$axure.eventManager.focus('u267', function(e) {

if (((GetSelectedOption('u239')) == (GetSelectedOption('u225'))) && ((GetWidgetText('u240')) == (GetSelectedOption('u226')))) {

	var obj1 = document.getElementById("u265");
    obj1.focus();

}
else
if (true) {

	var obj1 = document.getElementById("u263");
    obj1.focus();

}
});
gv_vAlignTable['u302'] = 'top';gv_vAlignTable['u280'] = 'top';gv_vAlignTable['u538'] = 'top';gv_vAlignTable['u121'] = 'center';document.getElementById('u500_img').tabIndex = 0;
HookHover('u500', false);

u500.style.cursor = 'pointer';
$axure.eventManager.click('u500', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u241', '31');

	var obj1 = document.getElementById("u245");
    obj1.focus();

}
});
document.getElementById('u414_img').tabIndex = 0;
HookHover('u414', false);

u414.style.cursor = 'pointer';
$axure.eventManager.click('u414', function(e) {

if (true) {

	var obj1 = document.getElementById("u261");
    obj1.focus();

}
});
u509.tabIndex = 0;

u509.style.cursor = 'pointer';
$axure.eventManager.click('u509', function(e) {

if (true) {

rdo2OnCalendarClose(e);

}
});
gv_vAlignTable['u509'] = 'top';
$axure.eventManager.focus('u294', function(e) {

if ((GetSelectedOption('u239')) == ('January')) {

	var obj1 = document.getElementById("u275");
    obj1.focus();

}
else
if ((GetSelectedOption('u239')) == ('February')) {

	var obj1 = document.getElementById("u277");
    obj1.focus();

}
else
if (((GetSelectedOption('u239')) == ('March')) || ((GetSelectedOption('u239')) == ('November'))) {

	var obj1 = document.getElementById("u279");
    obj1.focus();

}
else
if (((GetSelectedOption('u239')) == ('April')) || ((GetSelectedOption('u239')) == ('July'))) {

	var obj1 = document.getElementById("u281");
    obj1.focus();

}
else
if ((GetSelectedOption('u239')) == ('May')) {

	var obj1 = document.getElementById("u283");
    obj1.focus();

}
else
if ((GetSelectedOption('u239')) == ('June')) {

	var obj1 = document.getElementById("u285");
    obj1.focus();

}
else
if ((GetSelectedOption('u239')) == ('August')) {

	var obj1 = document.getElementById("u287");
    obj1.focus();

}
else
if (((GetSelectedOption('u239')) == ('September')) || ((GetSelectedOption('u239')) == ('December'))) {

	var obj1 = document.getElementById("u289");
    obj1.focus();

}
else
if ((GetSelectedOption('u239')) == ('October')) {

	var obj1 = document.getElementById("u291");
    obj1.focus();

}
});
gv_vAlignTable['u135'] = 'center';document.getElementById('u433_img').tabIndex = 0;
HookHover('u433', false);

u433.style.cursor = 'pointer';
$axure.eventManager.click('u433', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u241', '08');

	var obj1 = document.getElementById("u245");
    obj1.focus();

}
});
gv_vAlignTable['u108'] = 'center';gv_vAlignTable['u252'] = 'top';gv_vAlignTable['u171'] = 'center';gv_vAlignTable['u191'] = 'top';gv_vAlignTable['u386'] = 'top';gv_vAlignTable['u266'] = 'top';gv_vAlignTable['u64'] = 'center';gv_vAlignTable['u564'] = 'center';
$axure.eventManager.focus('u301', function(e) {

if (true) {

	var obj1 = document.getElementById("u299");
    obj1.focus();

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
gv_vAlignTable['u21'] = 'center';document.getElementById('u134_img').tabIndex = 0;

u134.style.cursor = 'pointer';
$axure.eventManager.click('u134', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PQRS_Report.html');

}
});
gv_vAlignTable['u513'] = 'center';gv_vAlignTable['u432'] = 'center';
$axure.eventManager.focus('u251', function(e) {

if ((GetSelectedOption('u239')) == ('February')) {

SetSelectedOption('u239', 'January');

}

if ((GetSelectedOption('u239')) == ('March')) {

SetSelectedOption('u239', 'February');

}

if ((GetSelectedOption('u239')) == ('April')) {

SetSelectedOption('u239', 'March');

}

if ((GetSelectedOption('u239')) == ('May')) {

SetSelectedOption('u239', 'April');

}

if ((GetSelectedOption('u239')) == ('June')) {

SetSelectedOption('u239', 'May');

}

if ((GetSelectedOption('u239')) == ('July')) {

SetSelectedOption('u239', 'June');

}

if ((GetSelectedOption('u239')) == ('August')) {

SetSelectedOption('u239', 'July');

}

if ((GetSelectedOption('u239')) == ('September')) {

SetSelectedOption('u239', 'August');

}

if ((GetSelectedOption('u239')) == ('October')) {

SetSelectedOption('u239', 'September');

}

if ((GetSelectedOption('u239')) == ('November')) {

SetSelectedOption('u239', 'October');

}

if ((GetSelectedOption('u239')) == ('December')) {

SetSelectedOption('u239', 'November');

}

if (true) {

	var obj1 = document.getElementById("u301");
    obj1.focus();

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
document.getElementById('u446_img').tabIndex = 0;
HookHover('u446', false);

u446.style.cursor = 'pointer';
$axure.eventManager.click('u446', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u241', '23');

	var obj1 = document.getElementById("u245");
    obj1.focus();

}
});

$axure.eventManager.focus('u265', function(e) {

if ((GetWidgetText('u224')) == ('1')) {

SetWidgetSelected('u431');
}

if ((GetWidgetText('u224')) == ('2')) {

SetWidgetSelected('u440');
}

if ((GetWidgetText('u224')) == ('3')) {

SetWidgetSelected('u449');
}

if ((GetWidgetText('u224')) == ('4')) {

SetWidgetSelected('u458');
}

if ((GetWidgetText('u224')) == ('5')) {

SetWidgetSelected('u467');
}

if ((GetWidgetText('u224')) == ('6')) {

SetWidgetSelected('u476');
}

if ((GetWidgetText('u224')) == ('7')) {

SetWidgetSelected('u485');
}

if ((GetWidgetText('u224')) == ('8')) {

SetWidgetSelected('u433');
}

if ((GetWidgetText('u224')) == ('9')) {

SetWidgetSelected('u442');
}

if ((GetWidgetText('u224')) == ('10')) {

SetWidgetSelected('u451');
}

if ((GetWidgetText('u224')) == ('11')) {

SetWidgetSelected('u460');
}

if ((GetWidgetText('u224')) == ('12')) {

SetWidgetSelected('u469');
}

if ((GetWidgetText('u224')) == ('13')) {

SetWidgetSelected('u478');
}

if ((GetWidgetText('u224')) == ('14')) {

SetWidgetSelected('u487');
}

if ((GetWidgetText('u224')) == ('15')) {

SetWidgetSelected('u435');
}

if ((GetWidgetText('u224')) == ('16')) {

SetWidgetSelected('u444');
}

if ((GetWidgetText('u224')) == ('17')) {

SetWidgetSelected('u453');
}

if ((GetWidgetText('u224')) == ('18')) {

SetWidgetSelected('u462');
}

if ((GetWidgetText('u224')) == ('19')) {

SetWidgetSelected('u471');
}

if ((GetWidgetText('u224')) == ('20')) {

SetWidgetSelected('u480');
}

if ((GetWidgetText('u224')) == ('21')) {

SetWidgetSelected('u489');
}

if ((GetWidgetText('u224')) == ('22')) {

SetWidgetSelected('u437');
}

if ((GetWidgetText('u224')) == ('23')) {

SetWidgetSelected('u446');
}

if ((GetWidgetText('u224')) == ('24')) {

SetWidgetSelected('u455');
}

if ((GetWidgetText('u224')) == ('25')) {

SetWidgetSelected('u464');
}

if ((GetWidgetText('u224')) == ('26')) {

SetWidgetSelected('u473');
}

if ((GetWidgetText('u224')) == ('27')) {

SetWidgetSelected('u482');
}

if ((GetWidgetText('u224')) == ('28')) {

SetWidgetSelected('u491');
}

if ((GetWidgetText('u224')) == ('29')) {

SetWidgetSelected('u494');
}

if ((GetWidgetText('u224')) == ('30')) {

SetWidgetSelected('u497');
}

if ((GetWidgetText('u224')) == ('31')) {

SetWidgetSelected('u500');
}

if (true) {

	var obj1 = document.getElementById("u263");
    obj1.focus();

}
});
document.getElementById('u82_img').tabIndex = 0;

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
gv_vAlignTable['u16'] = 'top';gv_vAlignTable['u238'] = 'top';gv_vAlignTable['u502'] = 'top';gv_vAlignTable['u577'] = 'center';gv_vAlignTable['u292'] = 'top';gv_vAlignTable['u133'] = 'center';document.getElementById('u431_img').tabIndex = 0;
HookHover('u431', false);

u431.style.cursor = 'pointer';
$axure.eventManager.click('u431', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u241', '01');

	var obj1 = document.getElementById("u245");
    obj1.focus();

}
});
gv_vAlignTable['u250'] = 'top';gv_vAlignTable['u147'] = 'center';gv_vAlignTable['u445'] = 'center';
u34.style.cursor = 'pointer';
$axure.eventManager.click('u34', function(e) {

if (true) {

	SetPanelVisibility('u27','hidden','none',500);

SetWidgetRichText('u26', '<p style="text-align:right;"><span style="font-family:Arial;font-size:12px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">( Location B )</span></p>');

SetCheckState('u32', false);

SetCheckState('u36', false);

}
});
document.getElementById('u61_img').tabIndex = 0;

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
gv_vAlignTable['u164'] = 'center';gv_vAlignTable['u549'] = 'center';gv_vAlignTable['u95'] = 'center';document.getElementById('u132_img').tabIndex = 0;

u132.style.cursor = 'pointer';
$axure.eventManager.click('u132', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Automate_measure_Calculation.html');

}
});
gv_vAlignTable['u368'] = 'top';
$axure.eventManager.focus('u255', function(e) {

if ((GetSelectedOption('u239')) == ('January')) {

	var obj1 = document.getElementById("u253");
    obj1.focus();

}
else
if (true) {

	var obj1 = document.getElementById("u251");
    obj1.focus();

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
document.getElementById('u52_img').tabIndex = 0;

u52.style.cursor = 'pointer';
$axure.eventManager.click('u52', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('UserList.html');

}
});
document.getElementById('u444_img').tabIndex = 0;
HookHover('u444', false);

u444.style.cursor = 'pointer';
$axure.eventManager.click('u444', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u241', '16');

	var obj1 = document.getElementById("u245");
    obj1.focus();

}
});

$axure.eventManager.focus('u263', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

	SetPanelVisibility('u409','','none',500);

	SetPanelVisibility('u416','','none',500);

	SetPanelVisibility('u423','','none',500);

	SetPanelVisibility('u426','','none',500);

}

if (((GetSelectedOption('u239')) == ('January')) && ((GetWidgetText('u240')) == (GetSelectedOption('u227')))) {

	SetPanelVisibility('u416','hidden','none',500);

}

if (((GetSelectedOption('u239')) == ('December')) && ((GetWidgetText('u240')) == (GetSelectedOption('u228')))) {

	SetPanelVisibility('u409','hidden','none',500);

}

if ((GetWidgetText('u240')) == (GetSelectedOption('u227'))) {

	SetPanelVisibility('u423','hidden','none',500);

}

if ((GetWidgetText('u240')) == (GetSelectedOption('u228'))) {

	SetPanelVisibility('u426','hidden','none',500);

}
});
gv_vAlignTable['u561'] = 'center';gv_vAlignTable['u91'] = 'center';
$axure.eventManager.focus('u277', function(e) {

if (IsValueOneOf(GetWidgetText('u240'), ['2004', '2009', '2015', '2026'])) {

SetWidgetFormText('u293', '1');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u240'), ['2010', '2016', '2021', '2027'])) {

SetWidgetFormText('u293', '2');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u240'), ['2000', '2005', '2011', '2022', '2028'])) {

SetWidgetFormText('u293', '3');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u240'), ['2006', '2012', '2017', '2023'])) {

SetWidgetFormText('u293', '4');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u240'), ['2001', '2007', '2018', '2024', '2029'])) {

SetWidgetFormText('u293', '5');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u240'), ['2002', '2008', '2013', '2019', '2030'])) {

SetWidgetFormText('u293', '6');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u240'), ['2003', '2014', '2020', '2025'])) {

SetWidgetFormText('u293', '7');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
});
gv_vAlignTable['u572'] = 'center';gv_vAlignTable['u388'] = 'top';gv_vAlignTable['u47'] = 'center';gv_vAlignTable['u212'] = 'center';gv_vAlignTable['u131'] = 'center';
$axure.eventManager.click('u510', function(e) {

if (true) {

SetWidgetFormText('u312', '' + (GetGlobalVariableValue('Day')) + '');

SetWidgetFormText('u313', '' + (GetGlobalVariableValue('MonthName')) + '');

SetWidgetFormText('u314', '' + (GetGlobalVariableValue('Year')) + '');

SetWidgetFormText('u224', GetWidgetText('u312'));

SetSelectedOption('u225', GetWidgetText('u313'));

SetSelectedOption('u226', GetWidgetText('u314'));

	var obj1 = document.getElementById("u230");
    obj1.focus();

}
});

$axure.eventManager.click('u510', function(e) {

if (true) {

SetWidgetFormText('u312', '' + (GetGlobalVariableValue('Day')) + '');

SetWidgetFormText('u313', '' + (GetGlobalVariableValue('MonthName')) + '');

SetWidgetFormText('u314', '' + (GetGlobalVariableValue('Year')) + '');

SetWidgetFormText('u224', GetWidgetText('u312'));

SetSelectedOption('u225', GetWidgetText('u313'));

SetSelectedOption('u226', GetWidgetText('u314'));

	var obj1 = document.getElementById("u230");
    obj1.focus();

}
});

$axure.eventManager.click('u510', function(e) {

if (true) {

SetWidgetFormText('u312', '' + (GetGlobalVariableValue('Day')) + '');

SetWidgetFormText('u313', '' + (GetGlobalVariableValue('MonthName')) + '');

SetWidgetFormText('u314', '' + (GetGlobalVariableValue('Year')) + '');

SetWidgetFormText('u224', GetWidgetText('u312'));

SetSelectedOption('u225', GetWidgetText('u313'));

SetSelectedOption('u226', GetWidgetText('u314'));

	var obj1 = document.getElementById("u230");
    obj1.focus();

}
});
gv_vAlignTable['u145'] = 'center';gv_vAlignTable['u443'] = 'center';gv_vAlignTable['u118'] = 'center';gv_vAlignTable['u262'] = 'top';gv_vAlignTable['u515'] = 'center';gv_vAlignTable['u276'] = 'top';gv_vAlignTable['u89'] = 'center';
$axure.eventManager.focus('u249', function(e) {

if ((GetWidgetText('u240')) == ('2029')) {

SetWidgetFormText('u240', '2030');

}

if ((GetWidgetText('u240')) == ('2028')) {

SetWidgetFormText('u240', '2029');

}

if ((GetWidgetText('u240')) == ('2027')) {

SetWidgetFormText('u240', '2028');

}

if ((GetWidgetText('u240')) == ('2026')) {

SetWidgetFormText('u240', '2027');

}

if ((GetWidgetText('u240')) == ('2025')) {

SetWidgetFormText('u240', '2026');

}

if ((GetWidgetText('u240')) == ('2024')) {

SetWidgetFormText('u240', '2025');

}

if ((GetWidgetText('u240')) == ('2023')) {

SetWidgetFormText('u240', '2024');

}

if ((GetWidgetText('u240')) == ('2022')) {

SetWidgetFormText('u240', '2023');

}

if ((GetWidgetText('u240')) == ('2021')) {

SetWidgetFormText('u240', '2022');

}

if ((GetWidgetText('u240')) == ('2020')) {

SetWidgetFormText('u240', '2021');

}

if ((GetWidgetText('u240')) == ('2019')) {

SetWidgetFormText('u240', '2020');

}

if ((GetWidgetText('u240')) == ('2018')) {

SetWidgetFormText('u240', '2019');

}

if ((GetWidgetText('u240')) == ('2017')) {

SetWidgetFormText('u240', '2018');

}

if ((GetWidgetText('u240')) == ('2016')) {

SetWidgetFormText('u240', '2017');

}

if ((GetWidgetText('u240')) == ('2015')) {

SetWidgetFormText('u240', '2016');

}

if ((GetWidgetText('u240')) == ('2014')) {

SetWidgetFormText('u240', '2015');

}

if ((GetWidgetText('u240')) == ('2013')) {

SetWidgetFormText('u240', '2014');

}

if ((GetWidgetText('u240')) == ('2012')) {

SetWidgetFormText('u240', '2013');

}

if ((GetWidgetText('u240')) == ('2011')) {

SetWidgetFormText('u240', '2012');

}

if ((GetWidgetText('u240')) == ('2010')) {

SetWidgetFormText('u240', '2011');

}

if ((GetWidgetText('u240')) == ('2009')) {

SetWidgetFormText('u240', '2010');

}

if ((GetWidgetText('u240')) == ('2008')) {

SetWidgetFormText('u240', '2009');

}

if ((GetWidgetText('u240')) == ('2007')) {

SetWidgetFormText('u240', '2008');

}

if ((GetWidgetText('u240')) == ('2006')) {

SetWidgetFormText('u240', '2007');

}

if ((GetWidgetText('u240')) == ('2005')) {

SetWidgetFormText('u240', '2006');

}

if ((GetWidgetText('u240')) == ('2004')) {

SetWidgetFormText('u240', '2005');

}

if ((GetWidgetText('u240')) == ('2003')) {

SetWidgetFormText('u240', '2004');

}

if ((GetWidgetText('u240')) == ('2002')) {

SetWidgetFormText('u240', '2003');

}

if ((GetWidgetText('u240')) == ('2001')) {

SetWidgetFormText('u240', '2002');

}

if ((GetWidgetText('u240')) == ('2000')) {

SetWidgetFormText('u240', '2001');

}

if (true) {

	var obj1 = document.getElementById("u301");
    obj1.focus();

}
});
document.getElementById('u130_img').tabIndex = 0;

u130.style.cursor = 'pointer';
$axure.eventManager.click('u130', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PatientList.html');

}
});
document.getElementById('u487_img').tabIndex = 0;
HookHover('u487', false);

u487.style.cursor = 'pointer';
$axure.eventManager.click('u487', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u241', '14');

	var obj1 = document.getElementById("u245");
    obj1.focus();

}
});
gv_vAlignTable['u406'] = 'top';gv_vAlignTable['u384'] = 'top';gv_vAlignTable['u503'] = 'top';
$axure.eventManager.mouseover('u22', function(e) {
if (!IsTrueMouseOver('u22',e)) return;
if (true) {

	SetPanelVisibility('u17','','none',500);

}
});
gv_vAlignTable['u22'] = 'top';document.getElementById('u144_img').tabIndex = 0;

u144.style.cursor = 'pointer';
$axure.eventManager.click('u144', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Intigrity.html');

}
});
gv_vAlignTable['u523'] = 'center';document.getElementById('u442_img').tabIndex = 0;
HookHover('u442', false);

u442.style.cursor = 'pointer';
$axure.eventManager.click('u442', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u241', '09');

	var obj1 = document.getElementById("u245");
    obj1.focus();

}
});

$axure.eventManager.focus('u261', function(e) {

if ((GetSelectedOption('u239')) == ('December')) {

	var obj1 = document.getElementById("u257");
    obj1.focus();

}
else
if (true) {

	var obj1 = document.getElementById("u259");
    obj1.focus();

}
});
gv_vAlignTable['u43'] = 'center';gv_vAlignTable['u537'] = 'center';gv_vAlignTable['u456'] = 'center';
$axure.eventManager.focus('u275', function(e) {

if (IsValueOneOf(GetWidgetText('u240'), ['2006', '2012', '2017', '2023'])) {

SetWidgetFormText('u293', '1');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u240'), ['2001', '2007', '2018', '2024', '2029'])) {

SetWidgetFormText('u293', '2');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u240'), ['2002', '2008', '2013', '2019', '2030'])) {

SetWidgetFormText('u293', '3');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u240'), ['2003', '2014', '2020', '2025'])) {

SetWidgetFormText('u293', '4');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u240'), ['2004', '2009', '2015', '2026'])) {

SetWidgetFormText('u293', '5');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u240'), ['2010', '2016', '2021', '2027'])) {

SetWidgetFormText('u293', '6');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u240'), ['2000', '2005', '2011', '2022', '2028'])) {

SetWidgetFormText('u293', '7');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
});
gv_vAlignTable['u248'] = 'top';document.getElementById('u107_img').tabIndex = 0;

u107.style.cursor = 'pointer';
$axure.eventManager.click('u107', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u143'] = 'center';gv_vAlignTable['u581'] = 'center';gv_vAlignTable['u260'] = 'top';gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u59'] = 'center';document.getElementById('u455_img').tabIndex = 0;
HookHover('u455', false);

u455.style.cursor = 'pointer';
$axure.eventManager.click('u455', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u241', '24');

	var obj1 = document.getElementById("u245");
    obj1.focus();

}
});
gv_vAlignTable['u189'] = 'top';gv_vAlignTable['u35'] = 'top';gv_vAlignTable['u274'] = 'top';gv_vAlignTable['u309'] = 'top';gv_vAlignTable['u328'] = 'top';document.getElementById('u435_img').tabIndex = 0;
HookHover('u435', false);

u435.style.cursor = 'pointer';
$axure.eventManager.click('u435', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u241', '15');

	var obj1 = document.getElementById("u245");
    obj1.focus();

}
});
gv_vAlignTable['u106'] = 'center';gv_vAlignTable['u404'] = 'top';gv_vAlignTable['u382'] = 'top';gv_vAlignTable['u559'] = 'center';document.getElementById('u142_img').tabIndex = 0;

u142.style.cursor = 'pointer';
$axure.eventManager.click('u142', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('OverdueImmunization.html');

}
});
gv_vAlignTable['u70'] = 'center';gv_vAlignTable['u396'] = 'top';gv_vAlignTable['u533'] = 'center';gv_vAlignTable['u237'] = 'top';gv_vAlignTable['u156'] = 'center';document.getElementById('u491_img').tabIndex = 0;
HookHover('u491', false);

u491.style.cursor = 'pointer';
$axure.eventManager.click('u491', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u241', '28');

	var obj1 = document.getElementById("u245");
    obj1.focus();

}
});
gv_vAlignTable['u545'] = 'center';gv_vAlignTable['u354'] = 'top';
$axure.eventManager.focus('u273', function(e) {

if ((GetWidgetText('u293')) == ('1')) {

	MoveWidgetTo('u430', GetNum('0'), GetNum('0'),'none',500);

	MoveWidgetTo('u439', GetNum('22'), GetNum('0'),'none',500);

	MoveWidgetTo('u448', GetNum('44'), GetNum('0'),'none',500);

	MoveWidgetTo('u457', GetNum('66'), GetNum('0'),'none',500);

	MoveWidgetTo('u466', GetNum('88'), GetNum('0'),'none',500);

	MoveWidgetTo('u475', GetNum('110'), GetNum('0'),'none',500);

	MoveWidgetTo('u484', GetNum('132'), GetNum('0'),'none',500);

	MoveWidgetTo('u493', GetNum('0'), GetNum('80'),'none',500);

	MoveWidgetTo('u496', GetNum('22'), GetNum('80'),'none',500);

	MoveWidgetTo('u499', GetNum('44'), GetNum('80'),'none',500);

}

if ((GetWidgetText('u293')) == ('2')) {

	MoveWidgetTo('u430', GetNum('22'), GetNum('0'),'none',500);

	MoveWidgetTo('u439', GetNum('44'), GetNum('0'),'none',500);

	MoveWidgetTo('u448', GetNum('66'), GetNum('0'),'none',500);

	MoveWidgetTo('u457', GetNum('88'), GetNum('0'),'none',500);

	MoveWidgetTo('u466', GetNum('110'), GetNum('0'),'none',500);

	MoveWidgetTo('u475', GetNum('132'), GetNum('0'),'none',500);

	MoveWidgetTo('u484', GetNum('0'), GetNum('20'),'none',500);

	MoveWidgetTo('u493', GetNum('22'), GetNum('80'),'none',500);

	MoveWidgetTo('u496', GetNum('44'), GetNum('80'),'none',500);

	MoveWidgetTo('u499', GetNum('66'), GetNum('80'),'none',500);

}

if ((GetWidgetText('u293')) == ('3')) {

	MoveWidgetTo('u430', GetNum('44'), GetNum('0'),'none',500);

	MoveWidgetTo('u439', GetNum('66'), GetNum('0'),'none',500);

	MoveWidgetTo('u448', GetNum('88'), GetNum('0'),'none',500);

	MoveWidgetTo('u457', GetNum('110'), GetNum('0'),'none',500);

	MoveWidgetTo('u466', GetNum('132'), GetNum('0'),'none',500);

	MoveWidgetTo('u475', GetNum('0'), GetNum('20'),'none',500);

	MoveWidgetTo('u484', GetNum('22'), GetNum('20'),'none',500);

	MoveWidgetTo('u493', GetNum('44'), GetNum('80'),'none',500);

	MoveWidgetTo('u496', GetNum('66'), GetNum('80'),'none',500);

	MoveWidgetTo('u499', GetNum('88'), GetNum('80'),'none',500);

}

if ((GetWidgetText('u293')) == ('4')) {

	MoveWidgetTo('u430', GetNum('66'), GetNum('0'),'none',500);

	MoveWidgetTo('u439', GetNum('88'), GetNum('0'),'none',500);

	MoveWidgetTo('u448', GetNum('110'), GetNum('0'),'none',500);

	MoveWidgetTo('u457', GetNum('132'), GetNum('0'),'none',500);

	MoveWidgetTo('u466', GetNum('0'), GetNum('20'),'none',500);

	MoveWidgetTo('u475', GetNum('22'), GetNum('20'),'none',500);

	MoveWidgetTo('u484', GetNum('44'), GetNum('20'),'none',500);

	MoveWidgetTo('u493', GetNum('66'), GetNum('80'),'none',500);

	MoveWidgetTo('u496', GetNum('88'), GetNum('80'),'none',500);

	MoveWidgetTo('u499', GetNum('110'), GetNum('80'),'none',500);

}

if ((GetWidgetText('u293')) == ('5')) {

	MoveWidgetTo('u430', GetNum('88'), GetNum('0'),'none',500);

	MoveWidgetTo('u439', GetNum('110'), GetNum('0'),'none',500);

	MoveWidgetTo('u448', GetNum('132'), GetNum('0'),'none',500);

	MoveWidgetTo('u457', GetNum('0'), GetNum('20'),'none',500);

	MoveWidgetTo('u466', GetNum('22'), GetNum('20'),'none',500);

	MoveWidgetTo('u475', GetNum('44'), GetNum('20'),'none',500);

	MoveWidgetTo('u484', GetNum('66'), GetNum('20'),'none',500);

	MoveWidgetTo('u493', GetNum('88'), GetNum('80'),'none',500);

	MoveWidgetTo('u496', GetNum('110'), GetNum('80'),'none',500);

	MoveWidgetTo('u499', GetNum('132'), GetNum('80'),'none',500);

}

if ((GetWidgetText('u293')) == ('6')) {

	MoveWidgetTo('u430', GetNum('110'), GetNum('0'),'none',500);

	MoveWidgetTo('u439', GetNum('132'), GetNum('0'),'none',500);

	MoveWidgetTo('u448', GetNum('0'), GetNum('20'),'none',500);

	MoveWidgetTo('u457', GetNum('22'), GetNum('20'),'none',500);

	MoveWidgetTo('u466', GetNum('44'), GetNum('20'),'none',500);

	MoveWidgetTo('u475', GetNum('66'), GetNum('20'),'none',500);

	MoveWidgetTo('u484', GetNum('88'), GetNum('20'),'none',500);

	MoveWidgetTo('u493', GetNum('110'), GetNum('80'),'none',500);

	MoveWidgetTo('u496', GetNum('132'), GetNum('80'),'none',500);

	MoveWidgetTo('u499', GetNum('0'), GetNum('100'),'none',500);

}

if ((GetWidgetText('u293')) == ('7')) {

	MoveWidgetTo('u430', GetNum('132'), GetNum('0'),'none',500);

	MoveWidgetTo('u439', GetNum('0'), GetNum('20'),'none',500);

	MoveWidgetTo('u448', GetNum('22'), GetNum('20'),'none',500);

	MoveWidgetTo('u457', GetNum('44'), GetNum('20'),'none',500);

	MoveWidgetTo('u466', GetNum('66'), GetNum('20'),'none',500);

	MoveWidgetTo('u475', GetNum('88'), GetNum('20'),'none',500);

	MoveWidgetTo('u484', GetNum('110'), GetNum('20'),'none',500);

	MoveWidgetTo('u493', GetNum('132'), GetNum('80'),'none',500);

	MoveWidgetTo('u496', GetNum('0'), GetNum('100'),'none',500);

	MoveWidgetTo('u499', GetNum('22'), GetNum('100'),'none',500);

}

if (true) {

	var obj1 = document.getElementById("u271");
    obj1.focus();

}
});
gv_vAlignTable['u521'] = 'center';document.getElementById('u105_img').tabIndex = 0;

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
document.getElementById('u458_img').tabIndex = 0;
HookHover('u458', false);

u458.style.cursor = 'pointer';
$axure.eventManager.click('u458', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u241', '04');

	var obj1 = document.getElementById("u245");
    obj1.focus();

}
});
gv_vAlignTable['u311'] = 'top';document.getElementById('u6_img').tabIndex = 0;

u6.style.cursor = 'pointer';
$axure.eventManager.click('u6', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
document.getElementById('u417_img').tabIndex = 0;

u417.style.cursor = 'pointer';
$axure.eventManager.click('u417', function(e) {

if (true) {

	var obj1 = document.getElementById("u255");
    obj1.focus();

}
});
document.getElementById('u489_img').tabIndex = 0;
HookHover('u489', false);

u489.style.cursor = 'pointer';
$axure.eventManager.click('u489', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u241', '21');

	var obj1 = document.getElementById("u245");
    obj1.focus();

}
});
gv_vAlignTable['u29'] = 'center';document.getElementById('u534_img').tabIndex = 0;

u534.style.cursor = 'pointer';
$axure.eventManager.click('u534', function(e) {

if (true) {

SetWidgetNotSelected('u530');
SetWidgetNotSelected('u532');
SetWidgetSelected('u534');
SetWidgetNotSelected('u536');
SetGlobalVariableValue('FileName', 'Filename3.csv');

;

}
});
gv_vAlignTable['u209'] = 'center';gv_vAlignTable['u525'] = 'center';gv_vAlignTable['u272'] = 'top';gv_vAlignTable['u570'] = 'center';gv_vAlignTable['u402'] = 'top';gv_vAlignTable['u336'] = 'top';gv_vAlignTable['u19'] = 'center';gv_vAlignTable['u104'] = 'center';gv_vAlignTable['u308'] = 'top';
$axure.eventManager.focus('u259', function(e) {

if ((GetSelectedOption('u239')) == ('November')) {

SetSelectedOption('u239', 'December');

}

if ((GetSelectedOption('u239')) == ('October')) {

SetSelectedOption('u239', 'November');

}

if ((GetSelectedOption('u239')) == ('September')) {

SetSelectedOption('u239', 'October');

}

if ((GetSelectedOption('u239')) == ('August')) {

SetSelectedOption('u239', 'September');

}

if ((GetSelectedOption('u239')) == ('July')) {

SetSelectedOption('u239', 'August');

}

if ((GetSelectedOption('u239')) == ('June')) {

SetSelectedOption('u239', 'July');

}

if ((GetSelectedOption('u239')) == ('May')) {

SetSelectedOption('u239', 'June');

}

if ((GetSelectedOption('u239')) == ('April')) {

SetSelectedOption('u239', 'May');

}

if ((GetSelectedOption('u239')) == ('March')) {

SetSelectedOption('u239', 'April');

}

if ((GetSelectedOption('u239')) == ('February')) {

SetSelectedOption('u239', 'March');

}

if ((GetSelectedOption('u239')) == ('January')) {

SetSelectedOption('u239', 'February');

}

if (true) {

	var obj1 = document.getElementById("u301");
    obj1.focus();

}
});
gv_vAlignTable['u380'] = 'top';gv_vAlignTable['u221'] = 'top';
$axure.eventManager.focus('u232', function(e) {

if (true) {

	SetPanelVisibility('u315','','none',500);

}
});
gv_vAlignTable['u394'] = 'top';gv_vAlignTable['u235'] = 'top';u13.tabIndex = 0;

u13.style.cursor = 'pointer';
$axure.eventManager.click('u13', function(e) {

if (true) {

	parent.location.href = 'Login.html';

}
});
gv_vAlignTable['u13'] = 'top';document.getElementById('u208_img').tabIndex = 0;

u208.style.cursor = 'pointer';
$axure.eventManager.click('u208', function(e) {

if (true) {

SetWidgetFormText('u180', '05/14/2013');

SetWidgetFormText('u177', '1001');

SetSelectedOption('u176', 'Double Power of Attorney');

SetWidgetFormText('u222', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.');

}
});
gv_vAlignTable['u352'] = 'top';
$axure.eventManager.focus('u271', function(e) {

if ((GetWidgetText('u296')) == ('28')) {

	SetPanelVisibility('u493','hidden','none',500);

	SetPanelVisibility('u496','hidden','none',500);

	SetPanelVisibility('u499','hidden','none',500);

}

if ((GetWidgetText('u296')) == ('29')) {

	SetPanelVisibility('u493','','none',500);

	SetPanelVisibility('u496','hidden','none',500);

	SetPanelVisibility('u499','hidden','none',500);

}

if ((GetWidgetText('u296')) == ('30')) {

	SetPanelVisibility('u493','','none',500);

	SetPanelVisibility('u496','','none',500);

	SetPanelVisibility('u499','hidden','none',500);

}

if ((GetWidgetText('u296')) == ('31')) {

	SetPanelVisibility('u493','','none',500);

	SetPanelVisibility('u496','','none',500);

	SetPanelVisibility('u499','','none',500);

}

if (true) {

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
});
gv_vAlignTable['u535'] = 'center';gv_vAlignTable['u547'] = 'center';gv_vAlignTable['u418'] = 'center';gv_vAlignTable['u531'] = 'center';gv_vAlignTable['u366'] = 'top';document.getElementById('u103_img').tabIndex = 0;

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
gv_vAlignTable['u158'] = 'center';gv_vAlignTable['u220'] = 'center';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u415'] = 'center';gv_vAlignTable['u31'] = 'center';
$axure.eventManager.focus('u234', function(e) {

if (true) {

	SetPanelVisibility('u315','hidden','none',500);

}
});
gv_vAlignTable['u270'] = 'top';gv_vAlignTable['u575'] = 'center';gv_vAlignTable['u199'] = 'top';gv_vAlignTable['u319'] = 'center';document.getElementById('u56_img').tabIndex = 0;

u56.style.cursor = 'pointer';
$axure.eventManager.click('u56', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('UserRights.html');

}
});
gv_vAlignTable['u300'] = 'top';document.getElementById('u471_img').tabIndex = 0;
HookHover('u471', false);

u471.style.cursor = 'pointer';
$axure.eventManager.click('u471', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u241', '19');

	var obj1 = document.getElementById("u245");
    obj1.focus();

}
});
gv_vAlignTable['u116'] = 'center';gv_vAlignTable['u186'] = 'center';gv_vAlignTable['u392'] = 'top';gv_vAlignTable['u233'] = 'top';document.getElementById('u469_img').tabIndex = 0;
HookHover('u469', false);

u469.style.cursor = 'pointer';
$axure.eventManager.click('u469', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u241', '12');

	var obj1 = document.getElementById("u245");
    obj1.focus();

}
});
gv_vAlignTable['u87'] = 'center';gv_vAlignTable['u350'] = 'top';gv_vAlignTable['u508'] = 'top';
$axure.eventManager.focus('u247', function(e) {

if ((GetWidgetText('u240')) == ('2001')) {

SetWidgetFormText('u240', '2000');

}

if ((GetWidgetText('u240')) == ('2002')) {

SetWidgetFormText('u240', '2001');

}

if ((GetWidgetText('u240')) == ('2003')) {

SetWidgetFormText('u240', '2002');

}

if ((GetWidgetText('u240')) == ('2004')) {

SetWidgetFormText('u240', '2003');

}

if ((GetWidgetText('u240')) == ('2005')) {

SetWidgetFormText('u240', '2004');

}

if ((GetWidgetText('u240')) == ('2006')) {

SetWidgetFormText('u240', '2005');

}

if ((GetWidgetText('u240')) == ('2007')) {

SetWidgetFormText('u240', '2006');

}

if ((GetWidgetText('u240')) == ('2008')) {

SetWidgetFormText('u240', '2007');

}

if ((GetWidgetText('u240')) == ('2009')) {

SetWidgetFormText('u240', '2008');

}

if ((GetWidgetText('u240')) == ('2010')) {

SetWidgetFormText('u240', '2009');

}

if ((GetWidgetText('u240')) == ('2011')) {

SetWidgetFormText('u240', '2010');

}

if ((GetWidgetText('u240')) == ('2012')) {

SetWidgetFormText('u240', '2011');

}

if ((GetWidgetText('u240')) == ('2013')) {

SetWidgetFormText('u240', '2012');

}

if ((GetWidgetText('u240')) == ('2014')) {

SetWidgetFormText('u240', '2013');

}

if ((GetWidgetText('u240')) == ('2015')) {

SetWidgetFormText('u240', '2014');

}

if ((GetWidgetText('u240')) == ('2016')) {

SetWidgetFormText('u240', '2015');

}

if ((GetWidgetText('u240')) == ('2017')) {

SetWidgetFormText('u240', '2016');

}

if ((GetWidgetText('u240')) == ('2018')) {

SetWidgetFormText('u240', '2017');

}

if ((GetWidgetText('u240')) == ('2019')) {

SetWidgetFormText('u240', '2018');

}

if ((GetWidgetText('u240')) == ('2020')) {

SetWidgetFormText('u240', '2019');

}

if ((GetWidgetText('u240')) == ('2021')) {

SetWidgetFormText('u240', '2020');

}

if ((GetWidgetText('u240')) == ('2022')) {

SetWidgetFormText('u240', '2021');

}

if ((GetWidgetText('u240')) == ('2023')) {

SetWidgetFormText('u240', '2022');

}

if ((GetWidgetText('u240')) == ('2024')) {

SetWidgetFormText('u240', '2023');

}

if ((GetWidgetText('u240')) == ('2025')) {

SetWidgetFormText('u240', '2024');

}

if ((GetWidgetText('u240')) == ('2026')) {

SetWidgetFormText('u240', '2025');

}

if ((GetWidgetText('u240')) == ('2027')) {

SetWidgetFormText('u240', '2026');

}

if ((GetWidgetText('u240')) == ('2028')) {

SetWidgetFormText('u240', '2027');

}

if ((GetWidgetText('u240')) == ('2029')) {

SetWidgetFormText('u240', '2028');

}

if ((GetWidgetText('u240')) == ('2030')) {

SetWidgetFormText('u240', '2029');

}

if (true) {

	var obj1 = document.getElementById("u301");
    obj1.focus();

}
});
gv_vAlignTable['u68'] = 'center';gv_vAlignTable['u364'] = 'top';gv_vAlignTable['u101'] = 'center';gv_vAlignTable['u452'] = 'center';document.getElementById('u115_img').tabIndex = 0;

u115.style.cursor = 'pointer';
$axure.eventManager.click('u115', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('SearchPatient.html');

}
});

$axure.eventManager.focus('u291', function(e) {

if (IsValueOneOf(GetWidgetText('u240'), ['2000', '2006', '2017', '2023', '2028'])) {

SetWidgetFormText('u293', '1');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u240'), ['2001', '2007', '2012', '2018', '2029'])) {

SetWidgetFormText('u293', '2');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u240'), ['2002', '2013', '2019', '2024', '2030'])) {

SetWidgetFormText('u293', '3');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u240'), ['2003', '2008', '2014', '2025'])) {

SetWidgetFormText('u293', '4');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u240'), ['2009', '2015', '2020', '2026'])) {

SetWidgetFormText('u293', '5');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u240'), ['2004', '2010', '2021', '2027'])) {

SetWidgetFormText('u293', '6');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u240'), ['2005', '2011', '2016', '2022'])) {

SetWidgetFormText('u293', '7');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
});
gv_vAlignTable['u468'] = 'center';document.getElementById('u530_img').tabIndex = 0;

u530.style.cursor = 'pointer';
$axure.eventManager.click('u530', function(e) {

if (true) {

SetWidgetSelected('u530');
SetWidgetNotSelected('u532');
SetWidgetNotSelected('u534');
SetWidgetNotSelected('u536');
SetGlobalVariableValue('FileName', 'filename1.csv');

;

}
});
document.getElementById('u427_img').tabIndex = 0;
HookHover('u427', false);

u427.style.cursor = 'pointer';
$axure.eventManager.click('u427', function(e) {

if (true) {

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
});
gv_vAlignTable['u7'] = 'center';gv_vAlignTable['u246'] = 'top';gv_vAlignTable['u62'] = 'center';gv_vAlignTable['u495'] = 'center';gv_vAlignTable['u372'] = 'top';gv_vAlignTable['u114'] = 'center';gv_vAlignTable['u57'] = 'center';gv_vAlignTable['u169'] = 'center';gv_vAlignTable['u290'] = 'top';gv_vAlignTable['u408'] = 'top';gv_vAlignTable['u507'] = 'top';document.getElementById('u485_img').tabIndex = 0;
HookHover('u485', false);

u485.style.cursor = 'pointer';
$axure.eventManager.click('u485', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u241', '07');

	var obj1 = document.getElementById("u245");
    obj1.focus();

}
});
document.getElementById('u38_img').tabIndex = 0;

u38.style.cursor = 'pointer';
$axure.eventManager.click('u38', function(e) {

if (true) {

	SetPanelVisibility('u27','hidden','none',500);

}
});

$axure.eventManager.focus('u245', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u242', GetGlobalVariableValue('OnLoadVariable'));

}

if (true) {

SetGlobalVariableValue('OnLoadVariable', GetWidgetText('u241'));

}

if ((GetSelectedOption('u239')) == ('January')) {

SetGlobalVariableValue('OnLoadVariable', '01/' + (GetGlobalVariableValue('OnLoadVariable')) + '');

	var obj1 = document.getElementById("u243");
    obj1.focus();

}
else
if ((GetSelectedOption('u239')) == ('February')) {

SetGlobalVariableValue('OnLoadVariable', '02/' + (GetGlobalVariableValue('OnLoadVariable')) + '');

	var obj1 = document.getElementById("u243");
    obj1.focus();

}
else
if ((GetSelectedOption('u239')) == ('March')) {

SetGlobalVariableValue('OnLoadVariable', '03/' + (GetGlobalVariableValue('OnLoadVariable')) + '');

	var obj1 = document.getElementById("u243");
    obj1.focus();

}
else
if ((GetSelectedOption('u239')) == ('April')) {

SetGlobalVariableValue('OnLoadVariable', '04/' + (GetGlobalVariableValue('OnLoadVariable')) + '');

	var obj1 = document.getElementById("u243");
    obj1.focus();

}
else
if ((GetSelectedOption('u239')) == ('May')) {

SetGlobalVariableValue('OnLoadVariable', '05/' + (GetGlobalVariableValue('OnLoadVariable')) + '');

	var obj1 = document.getElementById("u243");
    obj1.focus();

}
else
if ((GetSelectedOption('u239')) == ('June')) {

SetGlobalVariableValue('OnLoadVariable', '06/' + (GetGlobalVariableValue('OnLoadVariable')) + '');

	var obj1 = document.getElementById("u243");
    obj1.focus();

}
else
if ((GetSelectedOption('u239')) == ('July')) {

SetGlobalVariableValue('OnLoadVariable', '07/' + (GetGlobalVariableValue('OnLoadVariable')) + '');

	var obj1 = document.getElementById("u243");
    obj1.focus();

}
else
if ((GetSelectedOption('u239')) == ('August')) {

SetGlobalVariableValue('OnLoadVariable', '08/' + (GetGlobalVariableValue('OnLoadVariable')) + '');

	var obj1 = document.getElementById("u243");
    obj1.focus();

}
else
if ((GetSelectedOption('u239')) == ('September')) {

SetGlobalVariableValue('OnLoadVariable', '09/' + (GetGlobalVariableValue('OnLoadVariable')) + '');

	var obj1 = document.getElementById("u243");
    obj1.focus();

}
else
if ((GetSelectedOption('u239')) == ('October')) {

SetGlobalVariableValue('OnLoadVariable', '10/' + (GetGlobalVariableValue('OnLoadVariable')) + '');

	var obj1 = document.getElementById("u243");
    obj1.focus();

}
else
if ((GetSelectedOption('u239')) == ('November')) {

SetGlobalVariableValue('OnLoadVariable', '11/' + (GetGlobalVariableValue('OnLoadVariable')) + '');

	var obj1 = document.getElementById("u243");
    obj1.focus();

}
else
if ((GetSelectedOption('u239')) == ('December')) {

SetGlobalVariableValue('OnLoadVariable', '12/' + (GetGlobalVariableValue('OnLoadVariable')) + '');

	var obj1 = document.getElementById("u243");
    obj1.focus();

}
});
document.getElementById('u412_img').tabIndex = 0;

u412.style.cursor = 'pointer';
$axure.eventManager.click('u412', function(e) {

if (true) {

	var obj1 = document.getElementById("u261");
    obj1.focus();

}
});
gv_vAlignTable['u14'] = 'top';gv_vAlignTable['u362'] = 'top';gv_vAlignTable['u376'] = 'top';gv_vAlignTable['u99'] = 'center';gv_vAlignTable['u286'] = 'top';document.getElementById('u168_img').tabIndex = 0;

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

$axure.eventManager.focus('u230', function(e) {

if (true) {

SetSelectedOption('u239', GetSelectedOption('u225'));

SetWidgetFormText('u240', GetSelectedOption('u226'));

	var obj1 = document.getElementById("u301");
    obj1.focus();

}
});
gv_vAlignTable['u519'] = 'center';gv_vAlignTable['u127'] = 'center';gv_vAlignTable['u338'] = 'top';
u32.style.cursor = 'pointer';
$axure.eventManager.click('u32', function(e) {

if (true) {

	SetPanelVisibility('u27','hidden','none',500);

SetWidgetRichText('u26', '<p style="text-align:right;"><span style="font-family:Arial;font-size:12px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">( Location A )</span></p>');

SetCheckState('u34', false);

SetCheckState('u36', false);

}
});
gv_vAlignTable['u244'] = 'top';gv_vAlignTable['u390'] = 'top';document.getElementById('u462_img').tabIndex = 0;
HookHover('u462', false);

u462.style.cursor = 'pointer';
$axure.eventManager.click('u462', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u241', '18');

	var obj1 = document.getElementById("u245");
    obj1.focus();

}
});
gv_vAlignTable['u83'] = 'center';gv_vAlignTable['u310'] = 'top';document.getElementById('u478_img').tabIndex = 0;
HookHover('u478', false);

u478.style.cursor = 'pointer';
$axure.eventManager.click('u478', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u241', '13');

	var obj1 = document.getElementById("u245");
    obj1.focus();

}
});
gv_vAlignTable['u207'] = 'center';document.getElementById('u185_img').tabIndex = 0;

u185.style.cursor = 'pointer';
$axure.eventManager.click('u185', function(e) {

if (true) {

	var obj1 = document.getElementById("u232");
    obj1.focus();

}
});
gv_vAlignTable['u505'] = 'top';gv_vAlignTable['u483'] = 'center';gv_vAlignTable['u40'] = 'top';
$axure.eventManager.focus('u243', function(e) {

if ((GetWidgetText('u240')) == ('2000')) {

SetWidgetFormText('u229', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2000');

}

if ((GetWidgetText('u240')) == ('2001')) {

SetWidgetFormText('u229', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2001');

}

if ((GetWidgetText('u240')) == ('2002')) {

SetWidgetFormText('u229', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2002');

}

if ((GetWidgetText('u240')) == ('2003')) {

SetWidgetFormText('u229', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2003');

}

if ((GetWidgetText('u240')) == ('2004')) {

SetWidgetFormText('u229', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2004');

}

if ((GetWidgetText('u240')) == ('2005')) {

SetWidgetFormText('u229', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2005');

}

if ((GetWidgetText('u240')) == ('2006')) {

SetWidgetFormText('u229', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2006');

}

if ((GetWidgetText('u240')) == ('2007')) {

SetWidgetFormText('u229', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2007');

}

if ((GetWidgetText('u240')) == ('2008')) {

SetWidgetFormText('u229', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2008');

}

if ((GetWidgetText('u240')) == ('2009')) {

SetWidgetFormText('u229', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2009');

}

if ((GetWidgetText('u240')) == ('2010')) {

SetWidgetFormText('u229', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2010');

}

if ((GetWidgetText('u240')) == ('2011')) {

SetWidgetFormText('u229', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2011');

}

if ((GetWidgetText('u240')) == ('2012')) {

SetWidgetFormText('u229', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2012');

}

if ((GetWidgetText('u240')) == ('2013')) {

SetWidgetFormText('u229', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2013');

}

if ((GetWidgetText('u240')) == ('2014')) {

SetWidgetFormText('u229', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2014');

}

if ((GetWidgetText('u240')) == ('2015')) {

SetWidgetFormText('u229', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2015');

}

if ((GetWidgetText('u240')) == ('2016')) {

SetWidgetFormText('u229', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2016');

}

if ((GetWidgetText('u240')) == ('2017')) {

SetWidgetFormText('u229', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2017');

}

if ((GetWidgetText('u240')) == ('2018')) {

SetWidgetFormText('u229', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2018');

}

if ((GetWidgetText('u240')) == ('2019')) {

SetWidgetFormText('u229', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2019');

}

if ((GetWidgetText('u240')) == ('2020')) {

SetWidgetFormText('u229', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2020');

}

if ((GetWidgetText('u240')) == ('2021')) {

SetWidgetFormText('u229', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2021');

}

if ((GetWidgetText('u240')) == ('2022')) {

SetWidgetFormText('u229', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2022');

}

if ((GetWidgetText('u240')) == ('2023')) {

SetWidgetFormText('u229', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2023');

}

if ((GetWidgetText('u240')) == ('2024')) {

SetWidgetFormText('u229', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2024');

}

if ((GetWidgetText('u240')) == ('2025')) {

SetWidgetFormText('u229', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2025');

}

if ((GetWidgetText('u240')) == ('2026')) {

SetWidgetFormText('u229', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2026');

}

if ((GetWidgetText('u240')) == ('2027')) {

SetWidgetFormText('u229', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2027');

}

if ((GetWidgetText('u240')) == ('2028')) {

SetWidgetFormText('u229', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2028');

}

if ((GetWidgetText('u240')) == ('2029')) {

SetWidgetFormText('u229', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2029');

}

if ((GetWidgetText('u240')) == ('2030')) {

SetWidgetFormText('u229', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2030');

}

if (true) {

SetGlobalVariableValue('OnLoadVariable', GetWidgetText('u242'));

}

if (true) {

rdo2OnDateSelection(e);

}
});
gv_vAlignTable['u479'] = 'center';gv_vAlignTable['u441'] = 'center';gv_vAlignTable['u360'] = 'top';document.getElementById('u497_img').tabIndex = 0;
HookHover('u497', false);

u497.style.cursor = 'pointer';
$axure.eventManager.click('u497', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u241', '30');

	var obj1 = document.getElementById("u245");
    obj1.focus();

}
});
document.getElementById('u532_img').tabIndex = 0;

u532.style.cursor = 'pointer';
$axure.eventManager.click('u532', function(e) {

if (true) {

SetWidgetNotSelected('u530');
SetWidgetSelected('u532');
SetWidgetNotSelected('u534');
SetWidgetNotSelected('u536');
SetGlobalVariableValue('FileName', 'filename2.csv');

;

}
});

$axure.eventManager.focus('u257', function(e) {

if (true) {

SetSelectedOption('u239', 'January');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
});
document.getElementById('u69_img').tabIndex = 0;

u69.style.cursor = 'pointer';
$axure.eventManager.click('u69', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PasswordSettings.html');

}
});
gv_vAlignTable['u555'] = 'center';
$axure.eventManager.focus('u289', function(e) {

if (IsValueOneOf(GetWidgetText('u240'), ['2002', '2013', '2019', '2024', '2030'])) {

SetWidgetFormText('u293', '1');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u240'), ['2003', '2008', '2014', '2025'])) {

SetWidgetFormText('u293', '2');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u240'), ['2009', '2015', '2020', '2026'])) {

SetWidgetFormText('u293', '3');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u240'), ['2004', '2010', '2021', '2027'])) {

SetWidgetFormText('u293', '4');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u240'), ['2005', '2011', '2016', '2022'])) {

SetWidgetFormText('u293', '5');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u240'), ['2000', '2006', '2017', '2023', '2028'])) {

SetWidgetFormText('u293', '6');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u240'), ['2001', '2007', '2012', '2018', '2029'])) {

SetWidgetFormText('u293', '7');

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
});
gv_vAlignTable['u45'] = 'center';gv_vAlignTable['u374'] = 'top';gv_vAlignTable['u428'] = 'center';document.getElementById('u536_img').tabIndex = 0;

u536.style.cursor = 'pointer';
$axure.eventManager.click('u536', function(e) {

if (true) {

SetWidgetNotSelected('u530');
SetWidgetNotSelected('u532');
SetWidgetNotSelected('u534');
SetWidgetSelected('u536');
SetGlobalVariableValue('FileName', 'filename4.csv');

;

}
});
document.getElementById('u206_img').tabIndex = 0;

u206.style.cursor = 'pointer';
$axure.eventManager.click('u206', function(e) {

if (true) {

	SetPanelVisibility('u196','hidden','fade',500);

SetWidgetFormText('u180', '');

SetWidgetFormText('u177', '');

SetSelectedOption('u176', 'Select');

SetWidgetFormText('u222', '');

}
});
gv_vAlignTable['u184'] = 'center';gv_vAlignTable['u504'] = 'top';document.getElementById('u482_img').tabIndex = 0;
HookHover('u482', false);

u482.style.cursor = 'pointer';
$axure.eventManager.click('u482', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u241', '27');

	var obj1 = document.getElementById("u245");
    obj1.focus();

}
});
document.getElementById('u96_img').tabIndex = 0;

u96.style.cursor = 'pointer';
$axure.eventManager.click('u96', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('RecordDisclosure.html');

}
});
gv_vAlignTable['u344'] = 'top';gv_vAlignTable['u486'] = 'center';gv_vAlignTable['u256'] = 'top';gv_vAlignTable['u53'] = 'center';gv_vAlignTable['u454'] = 'center';gv_vAlignTable['u129'] = 'center';gv_vAlignTable['u174'] = 'top';document.getElementById('u440_img').tabIndex = 0;
HookHover('u440', false);

u440.style.cursor = 'pointer';
$axure.eventManager.click('u440', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u241', '02');

	var obj1 = document.getElementById("u245");
    obj1.focus();

}
});
gv_vAlignTable['u205'] = 'top';gv_vAlignTable['u10'] = 'top';gv_vAlignTable['u481'] = 'center';gv_vAlignTable['u179'] = 'top';gv_vAlignTable['u141'] = 'center';gv_vAlignTable['u517'] = 'center';document.getElementById('u473_img').tabIndex = 0;
HookHover('u473', false);

u473.style.cursor = 'pointer';
$axure.eventManager.click('u473', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u241', '26');

	var obj1 = document.getElementById("u245");
    obj1.focus();

}
});
gv_vAlignTable['u39'] = 'center';gv_vAlignTable['u15'] = 'top';gv_vAlignTable['u477'] = 'center';document.getElementById('u453_img').tabIndex = 0;
HookHover('u453', false);

u453.style.cursor = 'pointer';
$axure.eventManager.click('u453', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u241', '17');

	var obj1 = document.getElementById("u245");
    obj1.focus();

}
});
document.getElementById('u128_img').tabIndex = 0;

u128.style.cursor = 'pointer';
$axure.eventManager.click('u128', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PatientReminder.html');

}
});
gv_vAlignTable['u288'] = 'top';document.getElementById('u467_img').tabIndex = 0;
HookHover('u467', false);

u467.style.cursor = 'pointer';
$axure.eventManager.click('u467', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u241', '05');

	var obj1 = document.getElementById("u245");
    obj1.focus();

}
});
gv_vAlignTable['u398'] = 'top';gv_vAlignTable['u182'] = 'center';document.getElementById('u480_img').tabIndex = 0;
HookHover('u480', false);

u480.style.cursor = 'pointer';
$axure.eventManager.click('u480', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u241', '20');

	var obj1 = document.getElementById("u245");
    obj1.focus();

}
});

u178.style.cursor = 'pointer';
$axure.eventManager.click('u178', function(e) {

if (true) {

SetWidgetFormText('u180', '');

SetWidgetFormText('u177', '');

SetSelectedOption('u176', 'Select');

SetWidgetFormText('u222', '');

SetWidgetFormText('u216', 'No file selected.');

	SetPanelVisibility('u196','','fade',500);
function waitu82bb0ad9617b4153ada18cf9d0a275dd1() {

	SetPanelVisibility('u210','','fade',500);
function waitu2ce4f271a6344193abe1110e89dfb4031() {

	SetPanelVisibility('u210','hidden','fade',500);
}
setTimeout(waitu2ce4f271a6344193abe1110e89dfb4031, 3000);
}
setTimeout(waitu82bb0ad9617b4153ada18cf9d0a275dd1, 1000);

}
});
document.getElementById('u140_img').tabIndex = 0;

u140.style.cursor = 'pointer';
$axure.eventManager.click('u140', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ImmunizationRegistry.html');

}
});
gv_vAlignTable['u498'] = 'center';document.getElementById('u494_img').tabIndex = 0;
HookHover('u494', false);

u494.style.cursor = 'pointer';
$axure.eventManager.click('u494', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u241', '29');

	var obj1 = document.getElementById("u245");
    obj1.focus();

}
});

$axure.eventManager.mouseover('u23', function(e) {
if (!IsTrueMouseOver('u23',e)) return;
if (true) {

	SetPanelVisibility('u17','','none',500);

}
});
gv_vAlignTable['u23'] = 'top';gv_vAlignTable['u264'] = 'top';gv_vAlignTable['u203'] = 'top';gv_vAlignTable['u258'] = 'top';gv_vAlignTable['u506'] = 'top';gv_vAlignTable['u589'] = 'center';gv_vAlignTable['u217'] = 'top';gv_vAlignTable['u195'] = 'top';gv_vAlignTable['u334'] = 'top';document.getElementById('u451_img').tabIndex = 0;
HookHover('u451', false);

u451.style.cursor = 'pointer';
$axure.eventManager.click('u451', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u241', '10');

	var obj1 = document.getElementById("u245");
    obj1.focus();

}
});
