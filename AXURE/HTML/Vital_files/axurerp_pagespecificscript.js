for(var i = 0; i < 605; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

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

function rdo2OnCalendarLoad(e) {

if (true) {

SetWidgetFormText('u308', '' + (GetGlobalVariableValue('Day')) + '');

SetWidgetFormText('u309', '' + (GetGlobalVariableValue('MonthName')) + '');

SetWidgetFormText('u310', '' + (GetGlobalVariableValue('Year')) + '');

SetWidgetFormText('u220', GetWidgetText('u308'));

SetSelectedOption('u221', GetWidgetText('u309'));

SetSelectedOption('u222', GetWidgetText('u310'));

	var obj1 = document.getElementById("u226");
    obj1.focus();

}

}

function rdo2OnDateSelection(e) {

if (true) {

SetWidgetFormText('u188', GetWidgetText('u225'));

	var obj1 = document.getElementById("u232");
    obj1.focus();
function waitu0d8294ea85754141a1547f6b79e7121c1() {

	var obj1 = document.getElementById("u188");
    obj1.focus();
}
setTimeout(waitu0d8294ea85754141a1547f6b79e7121c1, 200);

}

}

function rdo2OnCalendarClose(e) {

if (true) {

	var obj1 = document.getElementById("u232");
    obj1.focus();
function waitu538c3425c43d4244941c2e43f0504cf11() {

	var obj1 = document.getElementById("u188");
    obj1.focus();
}
setTimeout(waitu538c3425c43d4244941c2e43f0504cf11, 200);

}

}
gv_vAlignTable['u370'] = 'top';gv_vAlignTable['u488'] = 'center';gv_vAlignTable['u299'] = 'top';document.getElementById('u465_img').tabIndex = 0;
HookHover('u465', false);

u465.style.cursor = 'pointer';
$axure.eventManager.click('u465', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u237', '12');

	var obj1 = document.getElementById("u241");
    obj1.focus();

}
});
gv_vAlignTable['u421'] = 'center';
u36.style.cursor = 'pointer';
$axure.eventManager.click('u36', function(e) {

if (true) {

	SetPanelVisibility('u27','hidden','none',500);

SetWidgetRichText('u26', '<p style="text-align:right;"><span style="font-family:Arial;font-size:12px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">( Location C )</span></p>');

SetCheckState('u32', false);

SetCheckState('u34', false);

}
});
gv_vAlignTable['u180'] = 'top';gv_vAlignTable['u400'] = 'top';gv_vAlignTable['u216'] = 'top';gv_vAlignTable['u194'] = 'center';gv_vAlignTable['u514'] = 'top';gv_vAlignTable['u72'] = 'center';gv_vAlignTable['u97'] = 'center';gv_vAlignTable['u152'] = 'center';gv_vAlignTable['u450'] = 'center';gv_vAlignTable['u231'] = 'top';gv_vAlignTable['u78'] = 'center';gv_vAlignTable['u166'] = 'center';gv_vAlignTable['u298'] = 'top';gv_vAlignTable['u464'] = 'center';gv_vAlignTable['u139'] = 'center';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u215'] = 'top';document.getElementById('u193_img').tabIndex = 0;

u193.style.cursor = 'pointer';
$axure.eventManager.click('u193', function(e) {

if (true) {

	var obj1 = document.getElementById("u228");
    obj1.focus();

}
});
gv_vAlignTable['u11'] = 'top';document.getElementById('u413_img').tabIndex = 0;

u413.style.cursor = 'pointer';
$axure.eventManager.click('u413', function(e) {

if (true) {

	var obj1 = document.getElementById("u251");
    obj1.focus();

}
});
gv_vAlignTable['u568'] = 'top';document.getElementById('u151_img').tabIndex = 0;

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
gv_vAlignTable['u26'] = 'top';gv_vAlignTable['u378'] = 'top';document.getElementById('u463_img').tabIndex = 0;
HookHover('u463', false);

u463.style.cursor = 'pointer';
$axure.eventManager.click('u463', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u237', '05');

	var obj1 = document.getElementById("u241");
    obj1.focus();

}
});
document.getElementById('u138_img').tabIndex = 0;

u138.style.cursor = 'pointer';
$axure.eventManager.click('u138', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ListDisclosure.html');

}
});
document.getElementById('u54_img').tabIndex = 0;

u54.style.cursor = 'pointer';
$axure.eventManager.click('u54', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('UserGroupList.html');

}
});
gv_vAlignTable['u214'] = 'top';gv_vAlignTable['u192'] = 'center';
$axure.eventManager.focus('u269', function(e) {

if ((GetWidgetText('u289')) == ('1')) {

	MoveWidgetTo('u426', GetNum('0'), GetNum('0'),'none',500);

	MoveWidgetTo('u435', GetNum('22'), GetNum('0'),'none',500);

	MoveWidgetTo('u444', GetNum('44'), GetNum('0'),'none',500);

	MoveWidgetTo('u453', GetNum('66'), GetNum('0'),'none',500);

	MoveWidgetTo('u462', GetNum('88'), GetNum('0'),'none',500);

	MoveWidgetTo('u471', GetNum('110'), GetNum('0'),'none',500);

	MoveWidgetTo('u480', GetNum('132'), GetNum('0'),'none',500);

	MoveWidgetTo('u489', GetNum('0'), GetNum('80'),'none',500);

	MoveWidgetTo('u492', GetNum('22'), GetNum('80'),'none',500);

	MoveWidgetTo('u495', GetNum('44'), GetNum('80'),'none',500);

}

if ((GetWidgetText('u289')) == ('2')) {

	MoveWidgetTo('u426', GetNum('22'), GetNum('0'),'none',500);

	MoveWidgetTo('u435', GetNum('44'), GetNum('0'),'none',500);

	MoveWidgetTo('u444', GetNum('66'), GetNum('0'),'none',500);

	MoveWidgetTo('u453', GetNum('88'), GetNum('0'),'none',500);

	MoveWidgetTo('u462', GetNum('110'), GetNum('0'),'none',500);

	MoveWidgetTo('u471', GetNum('132'), GetNum('0'),'none',500);

	MoveWidgetTo('u480', GetNum('0'), GetNum('20'),'none',500);

	MoveWidgetTo('u489', GetNum('22'), GetNum('80'),'none',500);

	MoveWidgetTo('u492', GetNum('44'), GetNum('80'),'none',500);

	MoveWidgetTo('u495', GetNum('66'), GetNum('80'),'none',500);

}

if ((GetWidgetText('u289')) == ('3')) {

	MoveWidgetTo('u426', GetNum('44'), GetNum('0'),'none',500);

	MoveWidgetTo('u435', GetNum('66'), GetNum('0'),'none',500);

	MoveWidgetTo('u444', GetNum('88'), GetNum('0'),'none',500);

	MoveWidgetTo('u453', GetNum('110'), GetNum('0'),'none',500);

	MoveWidgetTo('u462', GetNum('132'), GetNum('0'),'none',500);

	MoveWidgetTo('u471', GetNum('0'), GetNum('20'),'none',500);

	MoveWidgetTo('u480', GetNum('22'), GetNum('20'),'none',500);

	MoveWidgetTo('u489', GetNum('44'), GetNum('80'),'none',500);

	MoveWidgetTo('u492', GetNum('66'), GetNum('80'),'none',500);

	MoveWidgetTo('u495', GetNum('88'), GetNum('80'),'none',500);

}

if ((GetWidgetText('u289')) == ('4')) {

	MoveWidgetTo('u426', GetNum('66'), GetNum('0'),'none',500);

	MoveWidgetTo('u435', GetNum('88'), GetNum('0'),'none',500);

	MoveWidgetTo('u444', GetNum('110'), GetNum('0'),'none',500);

	MoveWidgetTo('u453', GetNum('132'), GetNum('0'),'none',500);

	MoveWidgetTo('u462', GetNum('0'), GetNum('20'),'none',500);

	MoveWidgetTo('u471', GetNum('22'), GetNum('20'),'none',500);

	MoveWidgetTo('u480', GetNum('44'), GetNum('20'),'none',500);

	MoveWidgetTo('u489', GetNum('66'), GetNum('80'),'none',500);

	MoveWidgetTo('u492', GetNum('88'), GetNum('80'),'none',500);

	MoveWidgetTo('u495', GetNum('110'), GetNum('80'),'none',500);

}

if ((GetWidgetText('u289')) == ('5')) {

	MoveWidgetTo('u426', GetNum('88'), GetNum('0'),'none',500);

	MoveWidgetTo('u435', GetNum('110'), GetNum('0'),'none',500);

	MoveWidgetTo('u444', GetNum('132'), GetNum('0'),'none',500);

	MoveWidgetTo('u453', GetNum('0'), GetNum('20'),'none',500);

	MoveWidgetTo('u462', GetNum('22'), GetNum('20'),'none',500);

	MoveWidgetTo('u471', GetNum('44'), GetNum('20'),'none',500);

	MoveWidgetTo('u480', GetNum('66'), GetNum('20'),'none',500);

	MoveWidgetTo('u489', GetNum('88'), GetNum('80'),'none',500);

	MoveWidgetTo('u492', GetNum('110'), GetNum('80'),'none',500);

	MoveWidgetTo('u495', GetNum('132'), GetNum('80'),'none',500);

}

if ((GetWidgetText('u289')) == ('6')) {

	MoveWidgetTo('u426', GetNum('110'), GetNum('0'),'none',500);

	MoveWidgetTo('u435', GetNum('132'), GetNum('0'),'none',500);

	MoveWidgetTo('u444', GetNum('0'), GetNum('20'),'none',500);

	MoveWidgetTo('u453', GetNum('22'), GetNum('20'),'none',500);

	MoveWidgetTo('u462', GetNum('44'), GetNum('20'),'none',500);

	MoveWidgetTo('u471', GetNum('66'), GetNum('20'),'none',500);

	MoveWidgetTo('u480', GetNum('88'), GetNum('20'),'none',500);

	MoveWidgetTo('u489', GetNum('110'), GetNum('80'),'none',500);

	MoveWidgetTo('u492', GetNum('132'), GetNum('80'),'none',500);

	MoveWidgetTo('u495', GetNum('0'), GetNum('100'),'none',500);

}

if ((GetWidgetText('u289')) == ('7')) {

	MoveWidgetTo('u426', GetNum('132'), GetNum('0'),'none',500);

	MoveWidgetTo('u435', GetNum('0'), GetNum('20'),'none',500);

	MoveWidgetTo('u444', GetNum('22'), GetNum('20'),'none',500);

	MoveWidgetTo('u453', GetNum('44'), GetNum('20'),'none',500);

	MoveWidgetTo('u462', GetNum('66'), GetNum('20'),'none',500);

	MoveWidgetTo('u471', GetNum('88'), GetNum('20'),'none',500);

	MoveWidgetTo('u480', GetNum('110'), GetNum('20'),'none',500);

	MoveWidgetTo('u489', GetNum('132'), GetNum('80'),'none',500);

	MoveWidgetTo('u492', GetNum('0'), GetNum('100'),'none',500);

	MoveWidgetTo('u495', GetNum('22'), GetNum('100'),'none',500);

}

if (true) {

	var obj1 = document.getElementById("u267");
    obj1.focus();

}
});
gv_vAlignTable['u150'] = 'center';
$axure.eventManager.focus('u287', function(e) {

if (IsValueOneOf(GetWidgetText('u236'), ['2000', '2006', '2017', '2023', '2028'])) {

SetWidgetFormText('u289', '1');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u236'), ['2001', '2007', '2012', '2018', '2029'])) {

SetWidgetFormText('u289', '2');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u236'), ['2002', '2013', '2019', '2024', '2030'])) {

SetWidgetFormText('u289', '3');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u236'), ['2003', '2008', '2014', '2025'])) {

SetWidgetFormText('u289', '4');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u236'), ['2009', '2015', '2020', '2026'])) {

SetWidgetFormText('u289', '5');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u236'), ['2004', '2010', '2021', '2027'])) {

SetWidgetFormText('u289', '6');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u236'), ['2005', '2011', '2016', '2022'])) {

SetWidgetFormText('u289', '7');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
});
document.getElementById('u436_img').tabIndex = 0;
HookHover('u436', false);

u436.style.cursor = 'pointer';
$axure.eventManager.click('u436', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u237', '02');

	var obj1 = document.getElementById("u241");
    obj1.focus();

}
});
gv_vAlignTable['u340'] = 'top';u24.tabIndex = 0;

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

SetWidgetFormText('u237', '20');

	var obj1 = document.getElementById("u241");
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
gv_vAlignTable['u268'] = 'top';gv_vAlignTable['u330'] = 'top';gv_vAlignTable['u227'] = 'top';gv_vAlignTable['u584'] = 'top';gv_vAlignTable['u501'] = 'top';document.getElementById('u63_img').tabIndex = 0;

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
gv_vAlignTable['u598'] = 'top';document.getElementById('u449_img').tabIndex = 0;
HookHover('u449', false);

u449.style.cursor = 'pointer';
$axure.eventManager.click('u449', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u237', '17');

	var obj1 = document.getElementById("u241");
    obj1.focus();

}
});
gv_vAlignTable['u326'] = 'top';gv_vAlignTable['u177'] = 'top';gv_vAlignTable['u475'] = 'center';gv_vAlignTable['u37'] = 'top';gv_vAlignTable['u93'] = 'center';gv_vAlignTable['u112'] = 'center';gv_vAlignTable['u307'] = 'top';
$axure.eventManager.focus('u285', function(e) {

if (IsValueOneOf(GetWidgetText('u236'), ['2002', '2013', '2019', '2024', '2030'])) {

SetWidgetFormText('u289', '1');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u236'), ['2003', '2008', '2014', '2025'])) {

SetWidgetFormText('u289', '2');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u236'), ['2009', '2015', '2020', '2026'])) {

SetWidgetFormText('u289', '3');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u236'), ['2004', '2010', '2021', '2027'])) {

SetWidgetFormText('u289', '4');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u236'), ['2005', '2011', '2016', '2022'])) {

SetWidgetFormText('u289', '5');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u236'), ['2000', '2006', '2017', '2023', '2028'])) {

SetWidgetFormText('u289', '6');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u236'), ['2001', '2007', '2012', '2018', '2029'])) {

SetWidgetFormText('u289', '7');

	var obj1 = document.getElementById("u269");
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
gv_vAlignTable['u424'] = 'center';gv_vAlignTable['u74'] = 'center';gv_vAlignTable['u162'] = 'center';document.getElementById('u460_img').tabIndex = 0;
HookHover('u460', false);

u460.style.cursor = 'pointer';
$axure.eventManager.click('u460', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u237', '25');

	var obj1 = document.getElementById("u241");
    obj1.focus();

}
});
document.getElementById('u447_img').tabIndex = 0;
HookHover('u447', false);

u447.style.cursor = 'pointer';
$axure.eventManager.click('u447', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u237', '10');

	var obj1 = document.getElementById("u241");
    obj1.focus();

}
});
gv_vAlignTable['u176'] = 'top';gv_vAlignTable['u55'] = 'center';gv_vAlignTable['u411'] = 'center';document.getElementById('u149_img').tabIndex = 0;

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
gv_vAlignTable['u528'] = 'top';gv_vAlignTable['u332'] = 'top';gv_vAlignTable['u540'] = 'top';gv_vAlignTable['u306'] = 'top';gv_vAlignTable['u284'] = 'top';gv_vAlignTable['u604'] = 'center';
$axure.eventManager.mouseover('u12', function(e) {
if (!IsTrueMouseOver('u12',e)) return;
if (true) {

	SetPanelState('u27', 'pd0u27','none','',500,'none','',500);

	BringToFront("u27");

}
});
gv_vAlignTable['u12'] = 'top';document.getElementById('u423_img').tabIndex = 0;
HookHover('u423', false);

u423.style.cursor = 'pointer';
$axure.eventManager.click('u423', function(e) {

if (true) {

	var obj1 = document.getElementById("u245");
    obj1.focus();

}
});
gv_vAlignTable['u342'] = 'top';gv_vAlignTable['u578'] = 'top';gv_vAlignTable['u518'] = 'top';gv_vAlignTable['u596'] = 'top';gv_vAlignTable['u512'] = 'top';gv_vAlignTable['u437'] = 'center';gv_vAlignTable['u356'] = 'top';gv_vAlignTable['u175'] = 'top';gv_vAlignTable['u554'] = 'top';gv_vAlignTable['u229'] = 'top';gv_vAlignTable['u348'] = 'top';gv_vAlignTable['u461'] = 'center';document.getElementById('u490_img').tabIndex = 0;
HookHover('u490', false);

u490.style.cursor = 'pointer';
$axure.eventManager.click('u490', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u237', '29');

	var obj1 = document.getElementById("u241");
    obj1.focus();

}
});
gv_vAlignTable['u305'] = 'top';
$axure.eventManager.focus('u283', function(e) {

if (IsValueOneOf(GetWidgetText('u236'), ['2004', '2010', '2021', '2027'])) {

SetWidgetFormText('u289', '1');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u236'), ['2005', '2011', '2016', '2022'])) {

SetWidgetFormText('u289', '2');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u236'), ['2000', '2006', '2017', '2023', '2028'])) {

SetWidgetFormText('u289', '3');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u236'), ['2001', '2007', '2012', '2018', '2029'])) {

SetWidgetFormText('u289', '4');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u236'), ['2002', '2013', '2019', '2024', '2030'])) {

SetWidgetFormText('u289', '5');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u236'), ['2003', '2008', '2014', '2025'])) {

SetWidgetFormText('u289', '6');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u236'), ['2009', '2015', '2020', '2026'])) {

SetWidgetFormText('u289', '7');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
});

$axure.eventManager.mouseover('u20', function(e) {
if (!IsTrueMouseOver('u20',e)) return;
if (true) {

	SetPanelVisibility('u17','','none',500);

}
});
gv_vAlignTable['u526'] = 'top';
$axure.eventManager.focus('u279', function(e) {

if (IsValueOneOf(GetWidgetText('u236'), ['2005', '2011', '2016', '2022'])) {

SetWidgetFormText('u289', '1');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u236'), ['2000', '2006', '2017', '2023', '2028'])) {

SetWidgetFormText('u289', '2');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u236'), ['2001', '2007', '2012', '2018', '2029'])) {

SetWidgetFormText('u289', '3');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u236'), ['2002', '2013', '2019', '2024', '2030'])) {

SetWidgetFormText('u289', '4');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u236'), ['2003', '2008', '2014', '2025'])) {

SetWidgetFormText('u289', '5');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u236'), ['2009', '2015', '2020', '2026'])) {

SetWidgetFormText('u289', '6');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u236'), ['2004', '2010', '2021', '2027'])) {

SetWidgetFormText('u289', '7');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
});

$axure.eventManager.focus('u241', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u238', GetGlobalVariableValue('OnLoadVariable'));

}

if (true) {

SetGlobalVariableValue('OnLoadVariable', GetWidgetText('u237'));

}

if ((GetSelectedOption('u235')) == ('January')) {

SetGlobalVariableValue('OnLoadVariable', '01/' + (GetGlobalVariableValue('OnLoadVariable')) + '');

	var obj1 = document.getElementById("u239");
    obj1.focus();

}
else
if ((GetSelectedOption('u235')) == ('February')) {

SetGlobalVariableValue('OnLoadVariable', '02/' + (GetGlobalVariableValue('OnLoadVariable')) + '');

	var obj1 = document.getElementById("u239");
    obj1.focus();

}
else
if ((GetSelectedOption('u235')) == ('March')) {

SetGlobalVariableValue('OnLoadVariable', '03/' + (GetGlobalVariableValue('OnLoadVariable')) + '');

	var obj1 = document.getElementById("u239");
    obj1.focus();

}
else
if ((GetSelectedOption('u235')) == ('April')) {

SetGlobalVariableValue('OnLoadVariable', '04/' + (GetGlobalVariableValue('OnLoadVariable')) + '');

	var obj1 = document.getElementById("u239");
    obj1.focus();

}
else
if ((GetSelectedOption('u235')) == ('May')) {

SetGlobalVariableValue('OnLoadVariable', '05/' + (GetGlobalVariableValue('OnLoadVariable')) + '');

	var obj1 = document.getElementById("u239");
    obj1.focus();

}
else
if ((GetSelectedOption('u235')) == ('June')) {

SetGlobalVariableValue('OnLoadVariable', '06/' + (GetGlobalVariableValue('OnLoadVariable')) + '');

	var obj1 = document.getElementById("u239");
    obj1.focus();

}
else
if ((GetSelectedOption('u235')) == ('July')) {

SetGlobalVariableValue('OnLoadVariable', '07/' + (GetGlobalVariableValue('OnLoadVariable')) + '');

	var obj1 = document.getElementById("u239");
    obj1.focus();

}
else
if ((GetSelectedOption('u235')) == ('August')) {

SetGlobalVariableValue('OnLoadVariable', '08/' + (GetGlobalVariableValue('OnLoadVariable')) + '');

	var obj1 = document.getElementById("u239");
    obj1.focus();

}
else
if ((GetSelectedOption('u235')) == ('September')) {

SetGlobalVariableValue('OnLoadVariable', '09/' + (GetGlobalVariableValue('OnLoadVariable')) + '');

	var obj1 = document.getElementById("u239");
    obj1.focus();

}
else
if ((GetSelectedOption('u235')) == ('October')) {

SetGlobalVariableValue('OnLoadVariable', '10/' + (GetGlobalVariableValue('OnLoadVariable')) + '');

	var obj1 = document.getElementById("u239");
    obj1.focus();

}
else
if ((GetSelectedOption('u235')) == ('November')) {

SetGlobalVariableValue('OnLoadVariable', '11/' + (GetGlobalVariableValue('OnLoadVariable')) + '');

	var obj1 = document.getElementById("u239");
    obj1.focus();

}
else
if ((GetSelectedOption('u235')) == ('December')) {

SetGlobalVariableValue('OnLoadVariable', '12/' + (GetGlobalVariableValue('OnLoadVariable')) + '');

	var obj1 = document.getElementById("u239");
    obj1.focus();

}
});
gv_vAlignTable['u160'] = 'center';
$axure.eventManager.focus('u297', function(e) {

if (true) {

	var obj1 = document.getElementById("u295");
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
gv_vAlignTable['u25'] = 'top';gv_vAlignTable['u81'] = 'center';document.getElementById('u474_img').tabIndex = 0;
HookHover('u474', false);

u474.style.cursor = 'pointer';
$axure.eventManager.click('u474', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u237', '13');

	var obj1 = document.getElementById("u241");
    obj1.focus();

}
});

$axure.eventManager.focus('u228', function(e) {

if (true) {

	SetPanelVisibility('u311','','none',500);

}
});
gv_vAlignTable['u459'] = 'center';
u567.style.cursor = 'pointer';
$axure.eventManager.click('u567', function(e) {

if (true) {

SetWidgetRichText('u210', '<p style="text-align:left;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">C</span></p>');

SetWidgetRichText('u214', '<p style="text-align:left;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Kg</span></p>');

SetWidgetRichText('u215', '<p style="text-align:left;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">CM</span></p>');

SetWidgetRichText('u216', '<p style="text-align:left;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">CM</span></p>');

SetWidgetRichText('u217', '<p style="text-align:left;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">CM</span></p>');

SetWidgetRichText('u520', '<p style="text-align:left;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">37.8 *C</span></p>');

SetWidgetRichText('u540', '<p style="text-align:left;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">36.4 Kg</span></p>');

SetWidgetRichText('u544', '<p style="text-align:left;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">170.2 CM</span></p>');

	var obj1 = document.getElementById("u567");
    obj1.focus();

SetCheckState('u195', false);

}
});
gv_vAlignTable['u304'] = 'top';gv_vAlignTable['u282'] = 'top';gv_vAlignTable['u76'] = 'center';gv_vAlignTable['u123'] = 'center';gv_vAlignTable['u278'] = 'top';gv_vAlignTable['u240'] = 'top';gv_vAlignTable['u296'] = 'top';gv_vAlignTable['u137'] = 'center';gv_vAlignTable['u33'] = 'top';gv_vAlignTable['u254'] = 'top';gv_vAlignTable['u173'] = 'top';gv_vAlignTable['u552'] = 'top';document.getElementById('u438_img').tabIndex = 0;
HookHover('u438', false);

u438.style.cursor = 'pointer';
$axure.eventManager.click('u438', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u237', '09');

	var obj1 = document.getElementById("u241");
    obj1.focus();

}
});
gv_vAlignTable['u522'] = 'top';gv_vAlignTable['u213'] = 'top';gv_vAlignTable['u566'] = 'center';gv_vAlignTable['u303'] = 'top';
$axure.eventManager.focus('u281', function(e) {

if (IsValueOneOf(GetWidgetText('u236'), ['2003', '2008', '2014', '2025'])) {

SetWidgetFormText('u289', '1');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u236'), ['2009', '2015', '2020', '2026'])) {

SetWidgetFormText('u289', '2');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u236'), ['2004', '2010', '2021', '2027'])) {

SetWidgetFormText('u289', '3');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u236'), ['2005', '2011', '2016', '2022'])) {

SetWidgetFormText('u289', '4');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u236'), ['2000', '2006', '2017', '2023', '2028'])) {

SetWidgetFormText('u289', '5');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u236'), ['2001', '2007', '2012', '2018', '2029'])) {

SetWidgetFormText('u289', '6');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u236'), ['2002', '2013', '2019', '2024', '2030'])) {

SetWidgetFormText('u289', '7');

	var obj1 = document.getElementById("u269");
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
gv_vAlignTable['u358'] = 'top';document.getElementById('u420_img').tabIndex = 0;
HookHover('u420', false);

u420.style.cursor = 'pointer';
$axure.eventManager.click('u420', function(e) {

if (true) {

	var obj1 = document.getElementById("u243");
    obj1.focus();

}
});
gv_vAlignTable['u5'] = 'center';
$axure.eventManager.focus('u295', function(e) {

if (true) {

SetWidgetNotSelected('u427');
SetWidgetNotSelected('u429');
SetWidgetNotSelected('u431');
SetWidgetNotSelected('u433');
SetWidgetNotSelected('u436');
SetWidgetNotSelected('u438');
SetWidgetNotSelected('u440');
SetWidgetNotSelected('u442');
SetWidgetNotSelected('u445');
SetWidgetNotSelected('u447');
SetWidgetNotSelected('u449');
SetWidgetNotSelected('u451');
SetWidgetNotSelected('u454');
SetWidgetNotSelected('u456');
SetWidgetNotSelected('u458');
SetWidgetNotSelected('u460');
SetWidgetNotSelected('u463');
SetWidgetNotSelected('u465');
SetWidgetNotSelected('u467');
SetWidgetNotSelected('u469');
SetWidgetNotSelected('u472');
SetWidgetNotSelected('u474');
SetWidgetNotSelected('u476');
SetWidgetNotSelected('u478');
SetWidgetNotSelected('u481');
SetWidgetNotSelected('u483');
SetWidgetNotSelected('u485');
SetWidgetNotSelected('u487');
SetWidgetNotSelected('u490');
SetWidgetNotSelected('u493');
SetWidgetNotSelected('u496');
	var obj1 = document.getElementById("u293");
    obj1.focus();

}
});
document.getElementById('u136_img').tabIndex = 0;

u136.style.cursor = 'pointer';
$axure.eventManager.click('u136', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Reports.html');

}
});
gv_vAlignTable['u51'] = 'center';gv_vAlignTable['u434'] = 'center';
$axure.eventManager.focus('u253', function(e) {

if (true) {

SetSelectedOption('u235', 'January');

	var obj1 = document.getElementById("u245");
    obj1.focus();

}
});
gv_vAlignTable['u470'] = 'center';document.getElementById('u410_img').tabIndex = 0;
HookHover('u410', false);

u410.style.cursor = 'pointer';
$axure.eventManager.click('u410', function(e) {

if (true) {

	var obj1 = document.getElementById("u257");
    obj1.focus();

}
});
document.getElementById('u472_img').tabIndex = 0;
HookHover('u472', false);

u472.style.cursor = 'pointer';
$axure.eventManager.click('u472', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u237', '06');

	var obj1 = document.getElementById("u241");
    obj1.focus();

}
});

$axure.eventManager.focus('u267', function(e) {

if ((GetWidgetText('u292')) == ('28')) {

	SetPanelVisibility('u489','hidden','none',500);

	SetPanelVisibility('u492','hidden','none',500);

	SetPanelVisibility('u495','hidden','none',500);

}

if ((GetWidgetText('u292')) == ('29')) {

	SetPanelVisibility('u489','','none',500);

	SetPanelVisibility('u492','hidden','none',500);

	SetPanelVisibility('u495','hidden','none',500);

}

if ((GetWidgetText('u292')) == ('30')) {

	SetPanelVisibility('u489','','none',500);

	SetPanelVisibility('u492','','none',500);

	SetPanelVisibility('u495','hidden','none',500);

}

if ((GetWidgetText('u292')) == ('31')) {

	SetPanelVisibility('u489','','none',500);

	SetPanelVisibility('u492','','none',500);

	SetPanelVisibility('u495','','none',500);

}

if (true) {

	var obj1 = document.getElementById("u265");
    obj1.focus();

}
});
document.getElementById('u565_img').tabIndex = 0;

u565.style.cursor = 'pointer';
$axure.eventManager.click('u565', function(e) {

if (true) {

SetWidgetFormText('u198', '100');

SetWidgetFormText('u188', '05/16/2013');

SetWidgetFormText('u199', 'Hand');

SetWidgetFormText('u200', '10');

SetWidgetFormText('u201', '60');

SetWidgetFormText('u202', '70');

SetWidgetFormText('u203', '80');

SetWidgetFormText('u204', '80');

SetWidgetFormText('u205', '5.7');

SetWidgetFormText('u208', '1730.99');

SetSelectedOption('u197', '1');

}
});
gv_vAlignTable['u302'] = 'top';gv_vAlignTable['u280'] = 'top';gv_vAlignTable['u538'] = 'top';gv_vAlignTable['u121'] = 'center';gv_vAlignTable['u500'] = 'top';gv_vAlignTable['u414'] = 'center';gv_vAlignTable['u409'] = 'center';gv_vAlignTable['u294'] = 'top';gv_vAlignTable['u135'] = 'center';document.getElementById('u433_img').tabIndex = 0;
HookHover('u433', false);

u433.style.cursor = 'pointer';
$axure.eventManager.click('u433', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u237', '22');

	var obj1 = document.getElementById("u241");
    obj1.focus();

}
});
gv_vAlignTable['u108'] = 'center';gv_vAlignTable['u252'] = 'top';gv_vAlignTable['u171'] = 'center';gv_vAlignTable['u550'] = 'top';gv_vAlignTable['u386'] = 'top';gv_vAlignTable['u266'] = 'top';gv_vAlignTable['u64'] = 'center';gv_vAlignTable['u564'] = 'top';
$axure.eventManager.focus('u239', function(e) {

if ((GetWidgetText('u236')) == ('2000')) {

SetWidgetFormText('u225', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2000');

}

if ((GetWidgetText('u236')) == ('2001')) {

SetWidgetFormText('u225', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2001');

}

if ((GetWidgetText('u236')) == ('2002')) {

SetWidgetFormText('u225', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2002');

}

if ((GetWidgetText('u236')) == ('2003')) {

SetWidgetFormText('u225', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2003');

}

if ((GetWidgetText('u236')) == ('2004')) {

SetWidgetFormText('u225', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2004');

}

if ((GetWidgetText('u236')) == ('2005')) {

SetWidgetFormText('u225', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2005');

}

if ((GetWidgetText('u236')) == ('2006')) {

SetWidgetFormText('u225', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2006');

}

if ((GetWidgetText('u236')) == ('2007')) {

SetWidgetFormText('u225', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2007');

}

if ((GetWidgetText('u236')) == ('2008')) {

SetWidgetFormText('u225', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2008');

}

if ((GetWidgetText('u236')) == ('2009')) {

SetWidgetFormText('u225', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2009');

}

if ((GetWidgetText('u236')) == ('2010')) {

SetWidgetFormText('u225', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2010');

}

if ((GetWidgetText('u236')) == ('2011')) {

SetWidgetFormText('u225', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2011');

}

if ((GetWidgetText('u236')) == ('2012')) {

SetWidgetFormText('u225', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2012');

}

if ((GetWidgetText('u236')) == ('2013')) {

SetWidgetFormText('u225', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2013');

}

if ((GetWidgetText('u236')) == ('2014')) {

SetWidgetFormText('u225', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2014');

}

if ((GetWidgetText('u236')) == ('2015')) {

SetWidgetFormText('u225', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2015');

}

if ((GetWidgetText('u236')) == ('2016')) {

SetWidgetFormText('u225', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2016');

}

if ((GetWidgetText('u236')) == ('2017')) {

SetWidgetFormText('u225', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2017');

}

if ((GetWidgetText('u236')) == ('2018')) {

SetWidgetFormText('u225', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2018');

}

if ((GetWidgetText('u236')) == ('2019')) {

SetWidgetFormText('u225', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2019');

}

if ((GetWidgetText('u236')) == ('2020')) {

SetWidgetFormText('u225', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2020');

}

if ((GetWidgetText('u236')) == ('2021')) {

SetWidgetFormText('u225', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2021');

}

if ((GetWidgetText('u236')) == ('2022')) {

SetWidgetFormText('u225', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2022');

}

if ((GetWidgetText('u236')) == ('2023')) {

SetWidgetFormText('u225', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2023');

}

if ((GetWidgetText('u236')) == ('2024')) {

SetWidgetFormText('u225', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2024');

}

if ((GetWidgetText('u236')) == ('2025')) {

SetWidgetFormText('u225', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2025');

}

if ((GetWidgetText('u236')) == ('2026')) {

SetWidgetFormText('u225', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2026');

}

if ((GetWidgetText('u236')) == ('2027')) {

SetWidgetFormText('u225', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2027');

}

if ((GetWidgetText('u236')) == ('2028')) {

SetWidgetFormText('u225', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2028');

}

if ((GetWidgetText('u236')) == ('2029')) {

SetWidgetFormText('u225', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2029');

}

if ((GetWidgetText('u236')) == ('2030')) {

SetWidgetFormText('u225', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2030');

}

if (true) {

SetGlobalVariableValue('OnLoadVariable', GetWidgetText('u238'));

}

if (true) {

rdo2OnDateSelection(e);

}
});
gv_vAlignTable['u301'] = 'top';document.getElementById('u120_img').tabIndex = 0;

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
gv_vAlignTable['u315'] = 'center';
$axure.eventManager.focus('u293', function(e) {

if (IsValueOneOf(GetSelectedOption('u235'), ['January', 'March', 'May', 'July', 'August', 'October', 'December'])) {

SetWidgetFormText('u292', '31');

}

if (IsValueOneOf(GetSelectedOption('u235'), ['April', 'June', 'September', 'November'])) {

SetWidgetFormText('u292', '30');

}

if ((GetSelectedOption('u235')) == ('February')) {

SetWidgetFormText('u292', '28');

}

if (((GetSelectedOption('u235')) == ('February')) && (IsValueOneOf(GetWidgetText('u236'), ['2000', '2004', '2008', '2012', '2016', '2020', '2024', '2028']))) {

SetWidgetFormText('u292', '29');

}

if (true) {

	var obj1 = document.getElementById("u290");
    obj1.focus();

}
});
gv_vAlignTable['u21'] = 'center';document.getElementById('u134_img').tabIndex = 0;

u134.style.cursor = 'pointer';
$axure.eventManager.click('u134', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PQRS_Report.html');

}
});
gv_vAlignTable['u432'] = 'center';
$axure.eventManager.focus('u251', function(e) {

if ((GetSelectedOption('u235')) == ('January')) {

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
else
if (true) {

	var obj1 = document.getElementById("u247");
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
document.getElementById('u496_img').tabIndex = 0;
HookHover('u496', false);

u496.style.cursor = 'pointer';
$axure.eventManager.click('u496', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u237', '31');

	var obj1 = document.getElementById("u241");
    obj1.focus();

}
});
gv_vAlignTable['u446'] = 'center';
$axure.eventManager.focus('u265', function(e) {

if (true) {

SetWidgetFormText('u317', GetSelectedOption('u235'));

SetWidgetFormText('u319', GetWidgetText('u236'));

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
gv_vAlignTable['u16'] = 'top';gv_vAlignTable['u502'] = 'top';gv_vAlignTable['u133'] = 'center';document.getElementById('u431_img').tabIndex = 0;
HookHover('u431', false);

u431.style.cursor = 'pointer';
$axure.eventManager.click('u431', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u237', '15');

	var obj1 = document.getElementById("u241");
    obj1.focus();

}
});
gv_vAlignTable['u250'] = 'top';gv_vAlignTable['u147'] = 'center';document.getElementById('u445_img').tabIndex = 0;
HookHover('u445', false);

u445.style.cursor = 'pointer';
$axure.eventManager.click('u445', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u237', '03');

	var obj1 = document.getElementById("u241");
    obj1.focus();

}
});
gv_vAlignTable['u594'] = 'top';
u34.style.cursor = 'pointer';
$axure.eventManager.click('u34', function(e) {

if (true) {

	SetPanelVisibility('u27','hidden','none',500);

SetWidgetRichText('u26', '<p style="text-align:right;"><span style="font-family:Arial;font-size:12px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">( Location B )</span></p>');

SetCheckState('u32', false);

SetCheckState('u36', false);

}
});
gv_vAlignTable['u562'] = 'top';document.getElementById('u61_img').tabIndex = 0;

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
gv_vAlignTable['u164'] = 'center';gv_vAlignTable['u576'] = 'top';gv_vAlignTable['u95'] = 'center';document.getElementById('u132_img').tabIndex = 0;

u132.style.cursor = 'pointer';
$axure.eventManager.click('u132', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Automate_measure_Calculation.html');

}
});
gv_vAlignTable['u368'] = 'top';gv_vAlignTable['u430'] = 'center';
$axure.eventManager.focus('u255', function(e) {

if ((GetSelectedOption('u235')) == ('November')) {

SetSelectedOption('u235', 'December');

}

if ((GetSelectedOption('u235')) == ('October')) {

SetSelectedOption('u235', 'November');

}

if ((GetSelectedOption('u235')) == ('September')) {

SetSelectedOption('u235', 'October');

}

if ((GetSelectedOption('u235')) == ('August')) {

SetSelectedOption('u235', 'September');

}

if ((GetSelectedOption('u235')) == ('July')) {

SetSelectedOption('u235', 'August');

}

if ((GetSelectedOption('u235')) == ('June')) {

SetSelectedOption('u235', 'July');

}

if ((GetSelectedOption('u235')) == ('May')) {

SetSelectedOption('u235', 'June');

}

if ((GetSelectedOption('u235')) == ('April')) {

SetSelectedOption('u235', 'May');

}

if ((GetSelectedOption('u235')) == ('March')) {

SetSelectedOption('u235', 'April');

}

if ((GetSelectedOption('u235')) == ('February')) {

SetSelectedOption('u235', 'March');

}

if ((GetSelectedOption('u235')) == ('January')) {

SetSelectedOption('u235', 'February');

}

if (true) {

	var obj1 = document.getElementById("u297");
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

$axure.eventManager.focus('u263', function(e) {

if (((GetSelectedOption('u235')) == (GetSelectedOption('u221'))) && ((GetWidgetText('u236')) == (GetSelectedOption('u222')))) {

	var obj1 = document.getElementById("u261");
    obj1.focus();

}
else
if (true) {

	var obj1 = document.getElementById("u259");
    obj1.focus();

}
});
gv_vAlignTable['u91'] = 'center';
$axure.eventManager.focus('u277', function(e) {

if (IsValueOneOf(GetWidgetText('u236'), ['2001', '2007', '2012', '2018', '2029'])) {

SetWidgetFormText('u289', '1');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u236'), ['2002', '2013', '2019', '2024', '2030'])) {

SetWidgetFormText('u289', '2');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u236'), ['2003', '2008', '2014', '2025'])) {

SetWidgetFormText('u289', '3');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u236'), ['2009', '2015', '2020', '2026'])) {

SetWidgetFormText('u289', '4');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u236'), ['2004', '2010', '2021', '2027'])) {

SetWidgetFormText('u289', '5');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u236'), ['2005', '2011', '2016', '2022'])) {

SetWidgetFormText('u289', '6');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u236'), ['2000', '2006', '2017', '2023', '2028'])) {

SetWidgetFormText('u289', '7');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
});
gv_vAlignTable['u572'] = 'top';gv_vAlignTable['u388'] = 'top';gv_vAlignTable['u47'] = 'center';gv_vAlignTable['u548'] = 'top';gv_vAlignTable['u212'] = 'top';gv_vAlignTable['u131'] = 'center';gv_vAlignTable['u510'] = 'top';gv_vAlignTable['u407'] = 'center';gv_vAlignTable['u145'] = 'center';gv_vAlignTable['u524'] = 'top';gv_vAlignTable['u443'] = 'center';gv_vAlignTable['u118'] = 'center';gv_vAlignTable['u262'] = 'top';gv_vAlignTable['u560'] = 'top';gv_vAlignTable['u322'] = 'top';gv_vAlignTable['u457'] = 'center';gv_vAlignTable['u276'] = 'top';gv_vAlignTable['u89'] = 'center';
$axure.eventManager.focus('u249', function(e) {

if (true) {

SetSelectedOption('u235', 'December');

	var obj1 = document.getElementById("u243");
    obj1.focus();

}
});
gv_vAlignTable['u211'] = 'top';document.getElementById('u130_img').tabIndex = 0;

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

SetWidgetFormText('u237', '28');

	var obj1 = document.getElementById("u241");
    obj1.focus();

}
});
document.getElementById('u406_img').tabIndex = 0;

u406.style.cursor = 'pointer';
$axure.eventManager.click('u406', function(e) {

if (true) {

	var obj1 = document.getElementById("u257");
    obj1.focus();

}
});
gv_vAlignTable['u384'] = 'top';gv_vAlignTable['u503'] = 'top';
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
document.getElementById('u442_img').tabIndex = 0;
HookHover('u442', false);

u442.style.cursor = 'pointer';
$axure.eventManager.click('u442', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u237', '23');

	var obj1 = document.getElementById("u241");
    obj1.focus();

}
});

$axure.eventManager.focus('u261', function(e) {

if ((GetWidgetText('u220')) == ('1')) {

SetWidgetSelected('u427');
}

if ((GetWidgetText('u220')) == ('2')) {

SetWidgetSelected('u436');
}

if ((GetWidgetText('u220')) == ('3')) {

SetWidgetSelected('u445');
}

if ((GetWidgetText('u220')) == ('4')) {

SetWidgetSelected('u454');
}

if ((GetWidgetText('u220')) == ('5')) {

SetWidgetSelected('u463');
}

if ((GetWidgetText('u220')) == ('6')) {

SetWidgetSelected('u472');
}

if ((GetWidgetText('u220')) == ('7')) {

SetWidgetSelected('u481');
}

if ((GetWidgetText('u220')) == ('8')) {

SetWidgetSelected('u429');
}

if ((GetWidgetText('u220')) == ('9')) {

SetWidgetSelected('u438');
}

if ((GetWidgetText('u220')) == ('10')) {

SetWidgetSelected('u447');
}

if ((GetWidgetText('u220')) == ('11')) {

SetWidgetSelected('u456');
}

if ((GetWidgetText('u220')) == ('12')) {

SetWidgetSelected('u465');
}

if ((GetWidgetText('u220')) == ('13')) {

SetWidgetSelected('u474');
}

if ((GetWidgetText('u220')) == ('14')) {

SetWidgetSelected('u483');
}

if ((GetWidgetText('u220')) == ('15')) {

SetWidgetSelected('u431');
}

if ((GetWidgetText('u220')) == ('16')) {

SetWidgetSelected('u440');
}

if ((GetWidgetText('u220')) == ('17')) {

SetWidgetSelected('u449');
}

if ((GetWidgetText('u220')) == ('18')) {

SetWidgetSelected('u458');
}

if ((GetWidgetText('u220')) == ('19')) {

SetWidgetSelected('u467');
}

if ((GetWidgetText('u220')) == ('20')) {

SetWidgetSelected('u476');
}

if ((GetWidgetText('u220')) == ('21')) {

SetWidgetSelected('u485');
}

if ((GetWidgetText('u220')) == ('22')) {

SetWidgetSelected('u433');
}

if ((GetWidgetText('u220')) == ('23')) {

SetWidgetSelected('u442');
}

if ((GetWidgetText('u220')) == ('24')) {

SetWidgetSelected('u451');
}

if ((GetWidgetText('u220')) == ('25')) {

SetWidgetSelected('u460');
}

if ((GetWidgetText('u220')) == ('26')) {

SetWidgetSelected('u469');
}

if ((GetWidgetText('u220')) == ('27')) {

SetWidgetSelected('u478');
}

if ((GetWidgetText('u220')) == ('28')) {

SetWidgetSelected('u487');
}

if ((GetWidgetText('u220')) == ('29')) {

SetWidgetSelected('u490');
}

if ((GetWidgetText('u220')) == ('30')) {

SetWidgetSelected('u493');
}

if ((GetWidgetText('u220')) == ('31')) {

SetWidgetSelected('u496');
}

if (true) {

	var obj1 = document.getElementById("u259");
    obj1.focus();

}
});
gv_vAlignTable['u43'] = 'center';document.getElementById('u456_img').tabIndex = 0;
HookHover('u456', false);

u456.style.cursor = 'pointer';
$axure.eventManager.click('u456', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u237', '11');

	var obj1 = document.getElementById("u241");
    obj1.focus();

}
});

$axure.eventManager.focus('u275', function(e) {

if (IsValueOneOf(GetWidgetText('u236'), ['2009', '2015', '2020', '2026'])) {

SetWidgetFormText('u289', '1');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u236'), ['2004', '2010', '2021', '2027'])) {

SetWidgetFormText('u289', '2');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u236'), ['2005', '2011', '2016', '2022'])) {

SetWidgetFormText('u289', '3');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u236'), ['2000', '2006', '2017', '2023', '2028'])) {

SetWidgetFormText('u289', '4');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u236'), ['2001', '2007', '2012', '2018', '2029'])) {

SetWidgetFormText('u289', '5');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u236'), ['2002', '2013', '2019', '2024', '2030'])) {

SetWidgetFormText('u289', '6');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u236'), ['2003', '2008', '2014', '2025'])) {

SetWidgetFormText('u289', '7');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
});
gv_vAlignTable['u248'] = 'top';gv_vAlignTable['u210'] = 'top';document.getElementById('u107_img').tabIndex = 0;

u107.style.cursor = 'pointer';
$axure.eventManager.click('u107', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u143'] = 'center';gv_vAlignTable['u260'] = 'top';gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u59'] = 'center';gv_vAlignTable['u455'] = 'center';gv_vAlignTable['u35'] = 'top';gv_vAlignTable['u274'] = 'top';gv_vAlignTable['u328'] = 'top';gv_vAlignTable['u106'] = 'center';gv_vAlignTable['u520'] = 'top';gv_vAlignTable['u404'] = 'top';gv_vAlignTable['u382'] = 'top';document.getElementById('u142_img').tabIndex = 0;

u142.style.cursor = 'pointer';
$axure.eventManager.click('u142', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('OverdueImmunization.html');

}
});
gv_vAlignTable['u70'] = 'center';gv_vAlignTable['u396'] = 'top';gv_vAlignTable['u156'] = 'center';gv_vAlignTable['u491'] = 'center';gv_vAlignTable['u354'] = 'top';
$axure.eventManager.focus('u273', function(e) {

if (IsValueOneOf(GetWidgetText('u236'), ['2004', '2009', '2015', '2026'])) {

SetWidgetFormText('u289', '1');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u236'), ['2010', '2016', '2021', '2027'])) {

SetWidgetFormText('u289', '2');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u236'), ['2000', '2005', '2011', '2022', '2028'])) {

SetWidgetFormText('u289', '3');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u236'), ['2006', '2012', '2017', '2023'])) {

SetWidgetFormText('u289', '4');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u236'), ['2001', '2007', '2018', '2024', '2029'])) {

SetWidgetFormText('u289', '5');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u236'), ['2002', '2008', '2013', '2019', '2030'])) {

SetWidgetFormText('u289', '6');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u236'), ['2003', '2014', '2020', '2025'])) {

SetWidgetFormText('u289', '7');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
});
gv_vAlignTable['u571'] = 'center';document.getElementById('u105_img').tabIndex = 0;

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

SetWidgetFormText('u237', '18');

	var obj1 = document.getElementById("u241");
    obj1.focus();

}
});
document.getElementById('u6_img').tabIndex = 0;

u6.style.cursor = 'pointer';
$axure.eventManager.click('u6', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
document.getElementById('u417_img').tabIndex = 0;
HookHover('u417', false);

u417.style.cursor = 'pointer';
$axure.eventManager.click('u417', function(e) {

if (true) {

	var obj1 = document.getElementById("u251");
    obj1.focus();

}
});
gv_vAlignTable['u29'] = 'center';gv_vAlignTable['u534'] = 'top';gv_vAlignTable['u272'] = 'top';gv_vAlignTable['u592'] = 'top';gv_vAlignTable['u402'] = 'top';gv_vAlignTable['u336'] = 'top';gv_vAlignTable['u19'] = 'center';gv_vAlignTable['u499'] = 'top';gv_vAlignTable['u104'] = 'center';
$axure.eventManager.focus('u259', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

	SetPanelVisibility('u405','','none',500);

	SetPanelVisibility('u412','','none',500);

	SetPanelVisibility('u419','','none',500);

	SetPanelVisibility('u422','','none',500);

}

if (((GetSelectedOption('u235')) == ('January')) && ((GetWidgetText('u236')) == (GetSelectedOption('u223')))) {

	SetPanelVisibility('u412','hidden','none',500);

}

if (((GetSelectedOption('u235')) == ('December')) && ((GetWidgetText('u236')) == (GetSelectedOption('u224')))) {

	SetPanelVisibility('u405','hidden','none',500);

}

if ((GetWidgetText('u236')) == (GetSelectedOption('u223'))) {

	SetPanelVisibility('u419','hidden','none',500);

}

if ((GetWidgetText('u236')) == (GetSelectedOption('u224'))) {

	SetPanelVisibility('u422','hidden','none',500);

}
});
gv_vAlignTable['u380'] = 'top';gv_vAlignTable['u600'] = 'top';
$axure.eventManager.focus('u232', function(e) {

if (true) {

	SetPanelVisibility('u311','hidden','none',500);

	var obj1 = document.getElementById("u226");
    obj1.focus();

}
});
gv_vAlignTable['u416'] = 'center';gv_vAlignTable['u394'] = 'top';u13.tabIndex = 0;

u13.style.cursor = 'pointer';
$axure.eventManager.click('u13', function(e) {

if (true) {

	parent.location.href = 'Login.html';

}
});
gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u352'] = 'top';
$axure.eventManager.focus('u271', function(e) {

if (IsValueOneOf(GetWidgetText('u236'), ['2006', '2012', '2017', '2023'])) {

SetWidgetFormText('u289', '1');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u236'), ['2001', '2007', '2018', '2024', '2029'])) {

SetWidgetFormText('u289', '2');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u236'), ['2002', '2008', '2013', '2019', '2030'])) {

SetWidgetFormText('u289', '3');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u236'), ['2003', '2014', '2020', '2025'])) {

SetWidgetFormText('u289', '4');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u236'), ['2004', '2009', '2015', '2026'])) {

SetWidgetFormText('u289', '5');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u236'), ['2010', '2016', '2021', '2027'])) {

SetWidgetFormText('u289', '6');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u236'), ['2000', '2005', '2011', '2022', '2028'])) {

SetWidgetFormText('u289', '7');

	var obj1 = document.getElementById("u269");
    obj1.focus();

}
});
gv_vAlignTable['u418'] = 'center';gv_vAlignTable['u366'] = 'top';document.getElementById('u103_img').tabIndex = 0;

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
gv_vAlignTable['u158'] = 'center';gv_vAlignTable['u3'] = 'center';document.getElementById('u415_img').tabIndex = 0;

u415.style.cursor = 'pointer';
$axure.eventManager.click('u415', function(e) {

if (true) {

	var obj1 = document.getElementById("u251");
    obj1.focus();

}
});
gv_vAlignTable['u31'] = 'center';gv_vAlignTable['u234'] = 'top';gv_vAlignTable['u270'] = 'top';gv_vAlignTable['u546'] = 'top';document.getElementById('u56_img').tabIndex = 0;

u56.style.cursor = 'pointer';
$axure.eventManager.click('u56', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('UserRights.html');

}
});
gv_vAlignTable['u300'] = 'top';gv_vAlignTable['u116'] = 'center';gv_vAlignTable['u186'] = 'top';gv_vAlignTable['u392'] = 'top';gv_vAlignTable['u602'] = 'top';gv_vAlignTable['u233'] = 'top';document.getElementById('u469_img').tabIndex = 0;
HookHover('u469', false);

u469.style.cursor = 'pointer';
$axure.eventManager.click('u469', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u237', '26');

	var obj1 = document.getElementById("u241");
    obj1.focus();

}
});
gv_vAlignTable['u87'] = 'center';gv_vAlignTable['u350'] = 'top';
$axure.eventManager.focus('u247', function(e) {

if ((GetSelectedOption('u235')) == ('February')) {

SetSelectedOption('u235', 'January');

}

if ((GetSelectedOption('u235')) == ('March')) {

SetSelectedOption('u235', 'February');

}

if ((GetSelectedOption('u235')) == ('April')) {

SetSelectedOption('u235', 'March');

}

if ((GetSelectedOption('u235')) == ('May')) {

SetSelectedOption('u235', 'April');

}

if ((GetSelectedOption('u235')) == ('June')) {

SetSelectedOption('u235', 'May');

}

if ((GetSelectedOption('u235')) == ('July')) {

SetSelectedOption('u235', 'June');

}

if ((GetSelectedOption('u235')) == ('August')) {

SetSelectedOption('u235', 'July');

}

if ((GetSelectedOption('u235')) == ('September')) {

SetSelectedOption('u235', 'August');

}

if ((GetSelectedOption('u235')) == ('October')) {

SetSelectedOption('u235', 'September');

}

if ((GetSelectedOption('u235')) == ('November')) {

SetSelectedOption('u235', 'October');

}

if ((GetSelectedOption('u235')) == ('December')) {

SetSelectedOption('u235', 'November');

}

if (true) {

	var obj1 = document.getElementById("u297");
    obj1.focus();

}
});
gv_vAlignTable['u68'] = 'center';
$axure.eventManager.focus('u226', function(e) {

if (true) {

SetSelectedOption('u235', GetSelectedOption('u221'));

SetWidgetFormText('u236', GetSelectedOption('u222'));

	var obj1 = document.getElementById("u297");
    obj1.focus();

}
});
gv_vAlignTable['u364'] = 'top';gv_vAlignTable['u101'] = 'center';gv_vAlignTable['u452'] = 'center';gv_vAlignTable['u190'] = 'center';document.getElementById('u115_img').tabIndex = 0;

u115.style.cursor = 'pointer';
$axure.eventManager.click('u115', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('SearchPatient.html');

}
});
gv_vAlignTable['u313'] = 'center';gv_vAlignTable['u291'] = 'top';gv_vAlignTable['u468'] = 'center';gv_vAlignTable['u530'] = 'top';document.getElementById('u427_img').tabIndex = 0;
HookHover('u427', false);

u427.style.cursor = 'pointer';
$axure.eventManager.click('u427', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u237', '01');

	var obj1 = document.getElementById("u241");
    obj1.focus();

}
});
gv_vAlignTable['u7'] = 'center';gv_vAlignTable['u246'] = 'top';gv_vAlignTable['u62'] = 'center';gv_vAlignTable['u544'] = 'top';gv_vAlignTable['u448'] = 'center';gv_vAlignTable['u372'] = 'top';gv_vAlignTable['u114'] = 'center';gv_vAlignTable['u57'] = 'center';gv_vAlignTable['u169'] = 'center';
$axure.eventManager.focus('u290', function(e) {

if ((GetSelectedOption('u235')) == ('January')) {

	var obj1 = document.getElementById("u271");
    obj1.focus();

}
else
if ((GetSelectedOption('u235')) == ('February')) {

	var obj1 = document.getElementById("u273");
    obj1.focus();

}
else
if (((GetSelectedOption('u235')) == ('March')) || ((GetSelectedOption('u235')) == ('November'))) {

	var obj1 = document.getElementById("u275");
    obj1.focus();

}
else
if (((GetSelectedOption('u235')) == ('April')) || ((GetSelectedOption('u235')) == ('July'))) {

	var obj1 = document.getElementById("u277");
    obj1.focus();

}
else
if ((GetSelectedOption('u235')) == ('May')) {

	var obj1 = document.getElementById("u279");
    obj1.focus();

}
else
if ((GetSelectedOption('u235')) == ('June')) {

	var obj1 = document.getElementById("u281");
    obj1.focus();

}
else
if ((GetSelectedOption('u235')) == ('August')) {

	var obj1 = document.getElementById("u283");
    obj1.focus();

}
else
if (((GetSelectedOption('u235')) == ('September')) || ((GetSelectedOption('u235')) == ('December'))) {

	var obj1 = document.getElementById("u285");
    obj1.focus();

}
else
if ((GetSelectedOption('u235')) == ('October')) {

	var obj1 = document.getElementById("u287");
    obj1.focus();

}
});
document.getElementById('u408_img').tabIndex = 0;

u408.style.cursor = 'pointer';
$axure.eventManager.click('u408', function(e) {

if (true) {

	var obj1 = document.getElementById("u257");
    obj1.focus();

}
});
gv_vAlignTable['u187'] = 'top';
u507.style.cursor = 'pointer';
$axure.eventManager.click('u507', function(e) {

if ((GetWidgetText('u202')) != ('70')) {

	SetPanelVisibility('u573','','fade',500);

	SetPanelVisibility('u569','','fade',500);
function waitu4f8aa845e4a645e58a69a9df845d15f41() {

	SetPanelVisibility('u569','hidden','fade',500);
}
setTimeout(waitu4f8aa845e4a645e58a69a9df845d15f41, 3000);

}
else
if ((GetWidgetText('u202')) == ('70')) {

	SetPanelVisibility('u569','','fade',500);
function waitu74d483740ea14df3896ac449a826edad1() {

	SetPanelVisibility('u569','hidden','fade',500);
}
setTimeout(waitu74d483740ea14df3896ac449a826edad1, 3000);

}
});
document.getElementById('u485_img').tabIndex = 0;
HookHover('u485', false);

u485.style.cursor = 'pointer';
$axure.eventManager.click('u485', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u237', '21');

	var obj1 = document.getElementById("u241");
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

if ((GetWidgetText('u236')) == ('2029')) {

SetWidgetFormText('u236', '2030');

}

if ((GetWidgetText('u236')) == ('2028')) {

SetWidgetFormText('u236', '2029');

}

if ((GetWidgetText('u236')) == ('2027')) {

SetWidgetFormText('u236', '2028');

}

if ((GetWidgetText('u236')) == ('2026')) {

SetWidgetFormText('u236', '2027');

}

if ((GetWidgetText('u236')) == ('2025')) {

SetWidgetFormText('u236', '2026');

}

if ((GetWidgetText('u236')) == ('2024')) {

SetWidgetFormText('u236', '2025');

}

if ((GetWidgetText('u236')) == ('2023')) {

SetWidgetFormText('u236', '2024');

}

if ((GetWidgetText('u236')) == ('2022')) {

SetWidgetFormText('u236', '2023');

}

if ((GetWidgetText('u236')) == ('2021')) {

SetWidgetFormText('u236', '2022');

}

if ((GetWidgetText('u236')) == ('2020')) {

SetWidgetFormText('u236', '2021');

}

if ((GetWidgetText('u236')) == ('2019')) {

SetWidgetFormText('u236', '2020');

}

if ((GetWidgetText('u236')) == ('2018')) {

SetWidgetFormText('u236', '2019');

}

if ((GetWidgetText('u236')) == ('2017')) {

SetWidgetFormText('u236', '2018');

}

if ((GetWidgetText('u236')) == ('2016')) {

SetWidgetFormText('u236', '2017');

}

if ((GetWidgetText('u236')) == ('2015')) {

SetWidgetFormText('u236', '2016');

}

if ((GetWidgetText('u236')) == ('2014')) {

SetWidgetFormText('u236', '2015');

}

if ((GetWidgetText('u236')) == ('2013')) {

SetWidgetFormText('u236', '2014');

}

if ((GetWidgetText('u236')) == ('2012')) {

SetWidgetFormText('u236', '2013');

}

if ((GetWidgetText('u236')) == ('2011')) {

SetWidgetFormText('u236', '2012');

}

if ((GetWidgetText('u236')) == ('2010')) {

SetWidgetFormText('u236', '2011');

}

if ((GetWidgetText('u236')) == ('2009')) {

SetWidgetFormText('u236', '2010');

}

if ((GetWidgetText('u236')) == ('2008')) {

SetWidgetFormText('u236', '2009');

}

if ((GetWidgetText('u236')) == ('2007')) {

SetWidgetFormText('u236', '2008');

}

if ((GetWidgetText('u236')) == ('2006')) {

SetWidgetFormText('u236', '2007');

}

if ((GetWidgetText('u236')) == ('2005')) {

SetWidgetFormText('u236', '2006');

}

if ((GetWidgetText('u236')) == ('2004')) {

SetWidgetFormText('u236', '2005');

}

if ((GetWidgetText('u236')) == ('2003')) {

SetWidgetFormText('u236', '2004');

}

if ((GetWidgetText('u236')) == ('2002')) {

SetWidgetFormText('u236', '2003');

}

if ((GetWidgetText('u236')) == ('2001')) {

SetWidgetFormText('u236', '2002');

}

if ((GetWidgetText('u236')) == ('2000')) {

SetWidgetFormText('u236', '2001');

}

if (true) {

	var obj1 = document.getElementById("u297");
    obj1.focus();

}
});
gv_vAlignTable['u14'] = 'top';gv_vAlignTable['u218'] = 'top';gv_vAlignTable['u362'] = 'top';gv_vAlignTable['u582'] = 'top';gv_vAlignTable['u376'] = 'top';gv_vAlignTable['u99'] = 'center';gv_vAlignTable['u286'] = 'top';document.getElementById('u168_img').tabIndex = 0;

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

	SetPanelVisibility('u311','hidden','none',500);

}
});
gv_vAlignTable['u127'] = 'center';
$axure.eventManager.click('u506', function(e) {

if (true) {

SetWidgetFormText('u308', '' + (GetGlobalVariableValue('Day')) + '');

SetWidgetFormText('u309', '' + (GetGlobalVariableValue('MonthName')) + '');

SetWidgetFormText('u310', '' + (GetGlobalVariableValue('Year')) + '');

SetWidgetFormText('u220', GetWidgetText('u308'));

SetSelectedOption('u221', GetWidgetText('u309'));

SetSelectedOption('u222', GetWidgetText('u310'));

	var obj1 = document.getElementById("u226");
    obj1.focus();

}
});

$axure.eventManager.click('u506', function(e) {

if (true) {

SetWidgetFormText('u308', '' + (GetGlobalVariableValue('Day')) + '');

SetWidgetFormText('u309', '' + (GetGlobalVariableValue('MonthName')) + '');

SetWidgetFormText('u310', '' + (GetGlobalVariableValue('Year')) + '');

SetWidgetFormText('u220', GetWidgetText('u308'));

SetSelectedOption('u221', GetWidgetText('u309'));

SetSelectedOption('u222', GetWidgetText('u310'));

	var obj1 = document.getElementById("u226");
    obj1.focus();

}
});

$axure.eventManager.click('u506', function(e) {

if (true) {

SetWidgetFormText('u308', '' + (GetGlobalVariableValue('Day')) + '');

SetWidgetFormText('u309', '' + (GetGlobalVariableValue('MonthName')) + '');

SetWidgetFormText('u310', '' + (GetGlobalVariableValue('Year')) + '');

SetWidgetFormText('u220', GetWidgetText('u308'));

SetSelectedOption('u221', GetWidgetText('u309'));

SetSelectedOption('u222', GetWidgetText('u310'));

	var obj1 = document.getElementById("u226");
    obj1.focus();

}
});
gv_vAlignTable['u484'] = 'center';
u32.style.cursor = 'pointer';
$axure.eventManager.click('u32', function(e) {

if (true) {

	SetPanelVisibility('u27','hidden','none',500);

SetWidgetRichText('u26', '<p style="text-align:right;"><span style="font-family:Arial;font-size:12px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">( Location A )</span></p>');

SetCheckState('u34', false);

SetCheckState('u36', false);

}
});
gv_vAlignTable['u244'] = 'top';gv_vAlignTable['u542'] = 'top';gv_vAlignTable['u390'] = 'top';gv_vAlignTable['u556'] = 'top';gv_vAlignTable['u580'] = 'top';gv_vAlignTable['u83'] = 'center';document.getElementById('u478_img').tabIndex = 0;
HookHover('u478', false);

u478.style.cursor = 'pointer';
$axure.eventManager.click('u478', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u237', '27');

	var obj1 = document.getElementById("u241");
    obj1.focus();

}
});
gv_vAlignTable['u185'] = 'top';u505.tabIndex = 0;

u505.style.cursor = 'pointer';
$axure.eventManager.click('u505', function(e) {

if (true) {

rdo2OnCalendarClose(e);

}
});
gv_vAlignTable['u505'] = 'top';document.getElementById('u483_img').tabIndex = 0;
HookHover('u483', false);

u483.style.cursor = 'pointer';
$axure.eventManager.click('u483', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u237', '14');

	var obj1 = document.getElementById("u241");
    obj1.focus();

}
});
gv_vAlignTable['u40'] = 'top';gv_vAlignTable['u324'] = 'top';
$axure.eventManager.focus('u243', function(e) {

if ((GetWidgetText('u236')) == ('2001')) {

SetWidgetFormText('u236', '2000');

}

if ((GetWidgetText('u236')) == ('2002')) {

SetWidgetFormText('u236', '2001');

}

if ((GetWidgetText('u236')) == ('2003')) {

SetWidgetFormText('u236', '2002');

}

if ((GetWidgetText('u236')) == ('2004')) {

SetWidgetFormText('u236', '2003');

}

if ((GetWidgetText('u236')) == ('2005')) {

SetWidgetFormText('u236', '2004');

}

if ((GetWidgetText('u236')) == ('2006')) {

SetWidgetFormText('u236', '2005');

}

if ((GetWidgetText('u236')) == ('2007')) {

SetWidgetFormText('u236', '2006');

}

if ((GetWidgetText('u236')) == ('2008')) {

SetWidgetFormText('u236', '2007');

}

if ((GetWidgetText('u236')) == ('2009')) {

SetWidgetFormText('u236', '2008');

}

if ((GetWidgetText('u236')) == ('2010')) {

SetWidgetFormText('u236', '2009');

}

if ((GetWidgetText('u236')) == ('2011')) {

SetWidgetFormText('u236', '2010');

}

if ((GetWidgetText('u236')) == ('2012')) {

SetWidgetFormText('u236', '2011');

}

if ((GetWidgetText('u236')) == ('2013')) {

SetWidgetFormText('u236', '2012');

}

if ((GetWidgetText('u236')) == ('2014')) {

SetWidgetFormText('u236', '2013');

}

if ((GetWidgetText('u236')) == ('2015')) {

SetWidgetFormText('u236', '2014');

}

if ((GetWidgetText('u236')) == ('2016')) {

SetWidgetFormText('u236', '2015');

}

if ((GetWidgetText('u236')) == ('2017')) {

SetWidgetFormText('u236', '2016');

}

if ((GetWidgetText('u236')) == ('2018')) {

SetWidgetFormText('u236', '2017');

}

if ((GetWidgetText('u236')) == ('2019')) {

SetWidgetFormText('u236', '2018');

}

if ((GetWidgetText('u236')) == ('2020')) {

SetWidgetFormText('u236', '2019');

}

if ((GetWidgetText('u236')) == ('2021')) {

SetWidgetFormText('u236', '2020');

}

if ((GetWidgetText('u236')) == ('2022')) {

SetWidgetFormText('u236', '2021');

}

if ((GetWidgetText('u236')) == ('2023')) {

SetWidgetFormText('u236', '2022');

}

if ((GetWidgetText('u236')) == ('2024')) {

SetWidgetFormText('u236', '2023');

}

if ((GetWidgetText('u236')) == ('2025')) {

SetWidgetFormText('u236', '2024');

}

if ((GetWidgetText('u236')) == ('2026')) {

SetWidgetFormText('u236', '2025');

}

if ((GetWidgetText('u236')) == ('2027')) {

SetWidgetFormText('u236', '2026');

}

if ((GetWidgetText('u236')) == ('2028')) {

SetWidgetFormText('u236', '2027');

}

if ((GetWidgetText('u236')) == ('2029')) {

SetWidgetFormText('u236', '2028');

}

if ((GetWidgetText('u236')) == ('2030')) {

SetWidgetFormText('u236', '2029');

}

if (true) {

	var obj1 = document.getElementById("u297");
    obj1.focus();

}
});
gv_vAlignTable['u479'] = 'center';gv_vAlignTable['u338'] = 'top';gv_vAlignTable['u441'] = 'center';gv_vAlignTable['u360'] = 'top';gv_vAlignTable['u497'] = 'center';gv_vAlignTable['u532'] = 'top';
$axure.eventManager.focus('u257', function(e) {

if ((GetSelectedOption('u235')) == ('December')) {

	var obj1 = document.getElementById("u253");
    obj1.focus();

}
else
if (true) {

	var obj1 = document.getElementById("u255");
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
gv_vAlignTable['u45'] = 'center';gv_vAlignTable['u374'] = 'top';gv_vAlignTable['u428'] = 'center';gv_vAlignTable['u536'] = 'top';gv_vAlignTable['u184'] = 'top';gv_vAlignTable['u504'] = 'top';gv_vAlignTable['u482'] = 'center';gv_vAlignTable['u242'] = 'top';document.getElementById('u96_img').tabIndex = 0;

u96.style.cursor = 'pointer';
$axure.eventManager.click('u96', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('RecordDisclosure.html');

}
});
gv_vAlignTable['u344'] = 'top';gv_vAlignTable['u439'] = 'center';gv_vAlignTable['u486'] = 'center';gv_vAlignTable['u256'] = 'top';gv_vAlignTable['u53'] = 'center';document.getElementById('u454_img').tabIndex = 0;
HookHover('u454', false);

u454.style.cursor = 'pointer';
$axure.eventManager.click('u454', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u237', '04');

	var obj1 = document.getElementById("u241");
    obj1.focus();

}
});
gv_vAlignTable['u129'] = 'center';gv_vAlignTable['u174'] = 'top';document.getElementById('u440_img').tabIndex = 0;
HookHover('u440', false);

u440.style.cursor = 'pointer';
$axure.eventManager.click('u440', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u237', '16');

	var obj1 = document.getElementById("u241");
    obj1.focus();

}
});
gv_vAlignTable['u590'] = 'top';gv_vAlignTable['u183'] = 'top';gv_vAlignTable['u10'] = 'top';document.getElementById('u481_img').tabIndex = 0;
HookHover('u481', false);

u481.style.cursor = 'pointer';
$axure.eventManager.click('u481', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u237', '07');

	var obj1 = document.getElementById("u241");
    obj1.focus();

}
});
gv_vAlignTable['u179'] = 'top';gv_vAlignTable['u558'] = 'top';gv_vAlignTable['u586'] = 'top';gv_vAlignTable['u141'] = 'center';gv_vAlignTable['u473'] = 'center';gv_vAlignTable['u39'] = 'center';gv_vAlignTable['u15'] = 'top';gv_vAlignTable['u477'] = 'center';document.getElementById('u128_img').tabIndex = 0;

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

SetWidgetFormText('u237', '19');

	var obj1 = document.getElementById("u241");
    obj1.focus();

}
});
gv_vAlignTable['u398'] = 'top';gv_vAlignTable['u182'] = 'top';gv_vAlignTable['u178'] = 'top';document.getElementById('u140_img').tabIndex = 0;

u140.style.cursor = 'pointer';
$axure.eventManager.click('u140', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ImmunizationRegistry.html');

}
});
gv_vAlignTable['u498'] = 'top';gv_vAlignTable['u196'] = 'top';gv_vAlignTable['u516'] = 'top';gv_vAlignTable['u494'] = 'center';
$axure.eventManager.mouseover('u23', function(e) {
if (!IsTrueMouseOver('u23',e)) return;
if (true) {

	SetPanelVisibility('u17','','none',500);

}
});
gv_vAlignTable['u23'] = 'top';gv_vAlignTable['u264'] = 'top';gv_vAlignTable['u588'] = 'top';gv_vAlignTable['u466'] = 'center';document.getElementById('u429_img').tabIndex = 0;
HookHover('u429', false);

u429.style.cursor = 'pointer';
$axure.eventManager.click('u429', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u237', '08');

	var obj1 = document.getElementById("u241");
    obj1.focus();

}
});
gv_vAlignTable['u181'] = 'top';gv_vAlignTable['u258'] = 'top';gv_vAlignTable['u217'] = 'top';
u195.style.cursor = 'pointer';
$axure.eventManager.click('u195', function(e) {

if (true) {

SetWidgetRichText('u210', '<p style="text-align:left;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">F</span></p>');

SetWidgetRichText('u214', '<p style="text-align:left;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">LBS</span></p>');

SetWidgetRichText('u215', '<p style="text-align:left;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Inch</span></p>');

SetWidgetRichText('u216', '<p style="text-align:left;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Inch</span></p>');

SetWidgetRichText('u217', '<p style="text-align:left;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Inch</span></p>');

SetWidgetRichText('u520', '<p style="text-align:left;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">100 *F</span></p>');

SetWidgetRichText('u540', '<p style="text-align:left;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">80 LBS</span></p>');

SetWidgetRichText('u544', '<p style="text-align:left;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">5.7 Inch</span></p>');

	var obj1 = document.getElementById("u195");
    obj1.focus();

SetCheckState('u567', false);

}
});
document.getElementById('u493_img').tabIndex = 0;
HookHover('u493', false);

u493.style.cursor = 'pointer';
$axure.eventManager.click('u493', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u237', '30');

	var obj1 = document.getElementById("u241");
    obj1.focus();

}
});
gv_vAlignTable['u334'] = 'top';document.getElementById('u451_img').tabIndex = 0;
HookHover('u451', false);

u451.style.cursor = 'pointer';
$axure.eventManager.click('u451', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u237', '24');

	var obj1 = document.getElementById("u241");
    obj1.focus();

}
});
