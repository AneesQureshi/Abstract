for(var i = 0; i < 886; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

rdo2OnCalendarLoad(e);

}

if (true) {

rdo3OnCalendarLoad(e);

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

SetWidgetFormText('u288', '' + (GetGlobalVariableValue('Day')) + '');

SetWidgetFormText('u289', '' + (GetGlobalVariableValue('MonthName')) + '');

SetWidgetFormText('u290', '' + (GetGlobalVariableValue('Year')) + '');

SetWidgetFormText('u200', GetWidgetText('u288'));

SetSelectedOption('u201', GetWidgetText('u289'));

SetSelectedOption('u202', GetWidgetText('u290'));

	var obj1 = document.getElementById("u206");
    obj1.focus();

}

}

function rdo2OnDateSelection(e) {

if (true) {

SetWidgetFormText('u192', GetWidgetText('u205'));

	var obj1 = document.getElementById("u212");
    obj1.focus();
function waitu0dc8985f24834ac4983673af05d9665c1() {

	var obj1 = document.getElementById("u192");
    obj1.focus();
}
setTimeout(waitu0dc8985f24834ac4983673af05d9665c1, 200);

}

}

function rdo2OnCalendarClose(e) {

if (true) {

	var obj1 = document.getElementById("u212");
    obj1.focus();
function waitu34dd11b207484747ad915a18b5fca6d61() {

	var obj1 = document.getElementById("u192");
    obj1.focus();
}
setTimeout(waitu34dd11b207484747ad915a18b5fca6d61, 200);

}

}

function rdo3OnCalendarLoad(e) {

if (true) {

SetWidgetFormText('u584', '' + (GetGlobalVariableValue('Day')) + '');

SetWidgetFormText('u585', '' + (GetGlobalVariableValue('MonthName')) + '');

SetWidgetFormText('u586', '' + (GetGlobalVariableValue('Year')) + '');

SetWidgetFormText('u496', GetWidgetText('u584'));

SetSelectedOption('u497', GetWidgetText('u585'));

SetSelectedOption('u498', GetWidgetText('u586'));

	var obj1 = document.getElementById("u502");
    obj1.focus();

}

}

function rdo3OnDateSelection(e) {

if (true) {

SetWidgetFormText('u488', GetWidgetText('u501'));

	var obj1 = document.getElementById("u508");
    obj1.focus();
function waitu9554ed96ed934cc0ba7103a90cc8724b1() {

	var obj1 = document.getElementById("u488");
    obj1.focus();
}
setTimeout(waitu9554ed96ed934cc0ba7103a90cc8724b1, 200);

}

}

function rdo3OnCalendarClose(e) {

if (true) {

	var obj1 = document.getElementById("u508");
    obj1.focus();
function waitu0f0bc671d1794da396ce8114bc79bc4f1() {

	var obj1 = document.getElementById("u488");
    obj1.focus();
}
setTimeout(waitu0f0bc671d1794da396ce8114bc79bc4f1, 200);

}

}
gv_vAlignTable['u285'] = 'top';document.getElementById('u712_img').tabIndex = 0;
HookHover('u712', false);

u712.style.cursor = 'pointer';
$axure.eventManager.click('u712', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u513', '02');

	var obj1 = document.getElementById("u517");
    obj1.focus();

}
});
document.getElementById('u691_img').tabIndex = 0;

u691.style.cursor = 'pointer';
$axure.eventManager.click('u691', function(e) {

if (true) {

	var obj1 = document.getElementById("u527");
    obj1.focus();

}
});
gv_vAlignTable['u421'] = 'center';gv_vAlignTable['u817'] = 'top';document.getElementById('u684_img').tabIndex = 0;

u684.style.cursor = 'pointer';
$axure.eventManager.click('u684', function(e) {

if (true) {

	var obj1 = document.getElementById("u533");
    obj1.focus();

}
});
gv_vAlignTable['u281'] = 'top';document.getElementById('u877_img').tabIndex = 0;

u877.style.cursor = 'pointer';
$axure.eventManager.click('u877', function(e) {

if (true) {

SetWidgetFormText('u182', '144');

SetWidgetFormText('u187', 'influenza, seasonal, intradermal, preservative free');

	SetPanelVisibility('u834','hidden','fade',500);

}
});
gv_vAlignTable['u213'] = 'top';gv_vAlignTable['u845'] = 'top';document.getElementById('u493_img').tabIndex = 0;

u493.style.cursor = 'pointer';
$axure.eventManager.click('u493', function(e) {

if (true) {

	var obj1 = document.getElementById("u504");
    obj1.focus();

}
});
document.getElementById('u400_img').tabIndex = 0;
HookHover('u400', false);

u400.style.cursor = 'pointer';
$axure.eventManager.click('u400', function(e) {

if (true) {

	var obj1 = document.getElementById("u223");
    obj1.focus();

}
});

$axure.eventManager.focus('u206', function(e) {

if (true) {

SetSelectedOption('u215', GetSelectedOption('u201'));

SetWidgetFormText('u216', GetSelectedOption('u202'));

	var obj1 = document.getElementById("u277");
    obj1.focus();

}
});

$axure.eventManager.focus('u263', function(e) {

if (IsValueOneOf(GetWidgetText('u216'), ['2004', '2010', '2021', '2027'])) {

SetWidgetFormText('u269', '1');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u216'), ['2005', '2011', '2016', '2022'])) {

SetWidgetFormText('u269', '2');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u216'), ['2000', '2006', '2017', '2023', '2028'])) {

SetWidgetFormText('u269', '3');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u216'), ['2001', '2007', '2012', '2018', '2029'])) {

SetWidgetFormText('u269', '4');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u216'), ['2002', '2013', '2019', '2024', '2030'])) {

SetWidgetFormText('u269', '5');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u216'), ['2003', '2008', '2014', '2025'])) {

SetWidgetFormText('u269', '6');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u216'), ['2009', '2015', '2020', '2026'])) {

SetWidgetFormText('u269', '7');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
});
gv_vAlignTable['u137'] = 'center';gv_vAlignTable['u680'] = 'top';
$axure.eventManager.focus('u241', function(e) {

if ((GetWidgetText('u200')) == ('1')) {

SetWidgetSelected('u407');
}

if ((GetWidgetText('u200')) == ('2')) {

SetWidgetSelected('u416');
}

if ((GetWidgetText('u200')) == ('3')) {

SetWidgetSelected('u425');
}

if ((GetWidgetText('u200')) == ('4')) {

SetWidgetSelected('u434');
}

if ((GetWidgetText('u200')) == ('5')) {

SetWidgetSelected('u443');
}

if ((GetWidgetText('u200')) == ('6')) {

SetWidgetSelected('u452');
}

if ((GetWidgetText('u200')) == ('7')) {

SetWidgetSelected('u461');
}

if ((GetWidgetText('u200')) == ('8')) {

SetWidgetSelected('u409');
}

if ((GetWidgetText('u200')) == ('9')) {

SetWidgetSelected('u418');
}

if ((GetWidgetText('u200')) == ('10')) {

SetWidgetSelected('u427');
}

if ((GetWidgetText('u200')) == ('11')) {

SetWidgetSelected('u436');
}

if ((GetWidgetText('u200')) == ('12')) {

SetWidgetSelected('u445');
}

if ((GetWidgetText('u200')) == ('13')) {

SetWidgetSelected('u454');
}

if ((GetWidgetText('u200')) == ('14')) {

SetWidgetSelected('u463');
}

if ((GetWidgetText('u200')) == ('15')) {

SetWidgetSelected('u411');
}

if ((GetWidgetText('u200')) == ('16')) {

SetWidgetSelected('u420');
}

if ((GetWidgetText('u200')) == ('17')) {

SetWidgetSelected('u429');
}

if ((GetWidgetText('u200')) == ('18')) {

SetWidgetSelected('u438');
}

if ((GetWidgetText('u200')) == ('19')) {

SetWidgetSelected('u447');
}

if ((GetWidgetText('u200')) == ('20')) {

SetWidgetSelected('u456');
}

if ((GetWidgetText('u200')) == ('21')) {

SetWidgetSelected('u465');
}

if ((GetWidgetText('u200')) == ('22')) {

SetWidgetSelected('u413');
}

if ((GetWidgetText('u200')) == ('23')) {

SetWidgetSelected('u422');
}

if ((GetWidgetText('u200')) == ('24')) {

SetWidgetSelected('u431');
}

if ((GetWidgetText('u200')) == ('25')) {

SetWidgetSelected('u440');
}

if ((GetWidgetText('u200')) == ('26')) {

SetWidgetSelected('u449');
}

if ((GetWidgetText('u200')) == ('27')) {

SetWidgetSelected('u458');
}

if ((GetWidgetText('u200')) == ('28')) {

SetWidgetSelected('u467');
}

if ((GetWidgetText('u200')) == ('29')) {

SetWidgetSelected('u470');
}

if ((GetWidgetText('u200')) == ('30')) {

SetWidgetSelected('u473');
}

if ((GetWidgetText('u200')) == ('31')) {

SetWidgetSelected('u476');
}

if (true) {

	var obj1 = document.getElementById("u239");
    obj1.focus();

}
});
gv_vAlignTable['u612'] = 'top';gv_vAlignTable['u250'] = 'top';gv_vAlignTable['u234'] = 'top';gv_vAlignTable['u453'] = 'center';document.getElementById('u699_img').tabIndex = 0;
HookHover('u699', false);

u699.style.cursor = 'pointer';
$axure.eventManager.click('u699', function(e) {

if (true) {

	var obj1 = document.getElementById("u521");
    obj1.focus();

}
});
gv_vAlignTable['u640'] = 'top';gv_vAlignTable['u446'] = 'center';gv_vAlignTable['u228'] = 'top';gv_vAlignTable['u81'] = 'center';gv_vAlignTable['u262'] = 'top';gv_vAlignTable['u230'] = 'top';
$axure.eventManager.focus('u255', function(e) {

if (IsValueOneOf(GetWidgetText('u216'), ['2009', '2015', '2020', '2026'])) {

SetWidgetFormText('u269', '1');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u216'), ['2004', '2010', '2021', '2027'])) {

SetWidgetFormText('u269', '2');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u216'), ['2005', '2011', '2016', '2022'])) {

SetWidgetFormText('u269', '3');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u216'), ['2000', '2006', '2017', '2023', '2028'])) {

SetWidgetFormText('u269', '4');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u216'), ['2001', '2007', '2012', '2018', '2029'])) {

SetWidgetFormText('u269', '5');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u216'), ['2002', '2013', '2019', '2024', '2030'])) {

SetWidgetFormText('u269', '6');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u216'), ['2003', '2008', '2014', '2025'])) {

SetWidgetFormText('u269', '7');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
});
gv_vAlignTable['u408'] = 'center';gv_vAlignTable['u868'] = 'top';gv_vAlignTable['u700'] = 'center';
$axure.eventManager.focus('u249', function(e) {

if ((GetWidgetText('u269')) == ('1')) {

	MoveWidgetTo('u406', GetNum('0'), GetNum('0'),'none',500);

	MoveWidgetTo('u415', GetNum('22'), GetNum('0'),'none',500);

	MoveWidgetTo('u424', GetNum('44'), GetNum('0'),'none',500);

	MoveWidgetTo('u433', GetNum('66'), GetNum('0'),'none',500);

	MoveWidgetTo('u442', GetNum('88'), GetNum('0'),'none',500);

	MoveWidgetTo('u451', GetNum('110'), GetNum('0'),'none',500);

	MoveWidgetTo('u460', GetNum('132'), GetNum('0'),'none',500);

	MoveWidgetTo('u469', GetNum('0'), GetNum('80'),'none',500);

	MoveWidgetTo('u472', GetNum('22'), GetNum('80'),'none',500);

	MoveWidgetTo('u475', GetNum('44'), GetNum('80'),'none',500);

}

if ((GetWidgetText('u269')) == ('2')) {

	MoveWidgetTo('u406', GetNum('22'), GetNum('0'),'none',500);

	MoveWidgetTo('u415', GetNum('44'), GetNum('0'),'none',500);

	MoveWidgetTo('u424', GetNum('66'), GetNum('0'),'none',500);

	MoveWidgetTo('u433', GetNum('88'), GetNum('0'),'none',500);

	MoveWidgetTo('u442', GetNum('110'), GetNum('0'),'none',500);

	MoveWidgetTo('u451', GetNum('132'), GetNum('0'),'none',500);

	MoveWidgetTo('u460', GetNum('0'), GetNum('20'),'none',500);

	MoveWidgetTo('u469', GetNum('22'), GetNum('80'),'none',500);

	MoveWidgetTo('u472', GetNum('44'), GetNum('80'),'none',500);

	MoveWidgetTo('u475', GetNum('66'), GetNum('80'),'none',500);

}

if ((GetWidgetText('u269')) == ('3')) {

	MoveWidgetTo('u406', GetNum('44'), GetNum('0'),'none',500);

	MoveWidgetTo('u415', GetNum('66'), GetNum('0'),'none',500);

	MoveWidgetTo('u424', GetNum('88'), GetNum('0'),'none',500);

	MoveWidgetTo('u433', GetNum('110'), GetNum('0'),'none',500);

	MoveWidgetTo('u442', GetNum('132'), GetNum('0'),'none',500);

	MoveWidgetTo('u451', GetNum('0'), GetNum('20'),'none',500);

	MoveWidgetTo('u460', GetNum('22'), GetNum('20'),'none',500);

	MoveWidgetTo('u469', GetNum('44'), GetNum('80'),'none',500);

	MoveWidgetTo('u472', GetNum('66'), GetNum('80'),'none',500);

	MoveWidgetTo('u475', GetNum('88'), GetNum('80'),'none',500);

}

if ((GetWidgetText('u269')) == ('4')) {

	MoveWidgetTo('u406', GetNum('66'), GetNum('0'),'none',500);

	MoveWidgetTo('u415', GetNum('88'), GetNum('0'),'none',500);

	MoveWidgetTo('u424', GetNum('110'), GetNum('0'),'none',500);

	MoveWidgetTo('u433', GetNum('132'), GetNum('0'),'none',500);

	MoveWidgetTo('u442', GetNum('0'), GetNum('20'),'none',500);

	MoveWidgetTo('u451', GetNum('22'), GetNum('20'),'none',500);

	MoveWidgetTo('u460', GetNum('44'), GetNum('20'),'none',500);

	MoveWidgetTo('u469', GetNum('66'), GetNum('80'),'none',500);

	MoveWidgetTo('u472', GetNum('88'), GetNum('80'),'none',500);

	MoveWidgetTo('u475', GetNum('110'), GetNum('80'),'none',500);

}

if ((GetWidgetText('u269')) == ('5')) {

	MoveWidgetTo('u406', GetNum('88'), GetNum('0'),'none',500);

	MoveWidgetTo('u415', GetNum('110'), GetNum('0'),'none',500);

	MoveWidgetTo('u424', GetNum('132'), GetNum('0'),'none',500);

	MoveWidgetTo('u433', GetNum('0'), GetNum('20'),'none',500);

	MoveWidgetTo('u442', GetNum('22'), GetNum('20'),'none',500);

	MoveWidgetTo('u451', GetNum('44'), GetNum('20'),'none',500);

	MoveWidgetTo('u460', GetNum('66'), GetNum('20'),'none',500);

	MoveWidgetTo('u469', GetNum('88'), GetNum('80'),'none',500);

	MoveWidgetTo('u472', GetNum('110'), GetNum('80'),'none',500);

	MoveWidgetTo('u475', GetNum('132'), GetNum('80'),'none',500);

}

if ((GetWidgetText('u269')) == ('6')) {

	MoveWidgetTo('u406', GetNum('110'), GetNum('0'),'none',500);

	MoveWidgetTo('u415', GetNum('132'), GetNum('0'),'none',500);

	MoveWidgetTo('u424', GetNum('0'), GetNum('20'),'none',500);

	MoveWidgetTo('u433', GetNum('22'), GetNum('20'),'none',500);

	MoveWidgetTo('u442', GetNum('44'), GetNum('20'),'none',500);

	MoveWidgetTo('u451', GetNum('66'), GetNum('20'),'none',500);

	MoveWidgetTo('u460', GetNum('88'), GetNum('20'),'none',500);

	MoveWidgetTo('u469', GetNum('110'), GetNum('80'),'none',500);

	MoveWidgetTo('u472', GetNum('132'), GetNum('80'),'none',500);

	MoveWidgetTo('u475', GetNum('0'), GetNum('100'),'none',500);

}

if ((GetWidgetText('u269')) == ('7')) {

	MoveWidgetTo('u406', GetNum('132'), GetNum('0'),'none',500);

	MoveWidgetTo('u415', GetNum('0'), GetNum('20'),'none',500);

	MoveWidgetTo('u424', GetNum('22'), GetNum('20'),'none',500);

	MoveWidgetTo('u433', GetNum('44'), GetNum('20'),'none',500);

	MoveWidgetTo('u442', GetNum('66'), GetNum('20'),'none',500);

	MoveWidgetTo('u451', GetNum('88'), GetNum('20'),'none',500);

	MoveWidgetTo('u460', GetNum('110'), GetNum('20'),'none',500);

	MoveWidgetTo('u469', GetNum('132'), GetNum('80'),'none',500);

	MoveWidgetTo('u472', GetNum('0'), GetNum('100'),'none',500);

	MoveWidgetTo('u475', GetNum('22'), GetNum('100'),'none',500);

}

if (true) {

	var obj1 = document.getElementById("u247");
    obj1.focus();

}
});
gv_vAlignTable['u468'] = 'center';gv_vAlignTable['u396'] = 'center';document.getElementById('u63_img').tabIndex = 0;

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
document.getElementById('u470_img').tabIndex = 0;
HookHover('u470', false);

u470.style.cursor = 'pointer';
$axure.eventManager.click('u470', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u217', '29');

	var obj1 = document.getElementById("u221");
    obj1.focus();

}
});
gv_vAlignTable['u648'] = 'top';
$axure.eventManager.focus('u275', function(e) {

if (true) {

SetWidgetNotSelected('u407');
SetWidgetNotSelected('u409');
SetWidgetNotSelected('u411');
SetWidgetNotSelected('u413');
SetWidgetNotSelected('u416');
SetWidgetNotSelected('u418');
SetWidgetNotSelected('u420');
SetWidgetNotSelected('u422');
SetWidgetNotSelected('u425');
SetWidgetNotSelected('u427');
SetWidgetNotSelected('u429');
SetWidgetNotSelected('u431');
SetWidgetNotSelected('u434');
SetWidgetNotSelected('u436');
SetWidgetNotSelected('u438');
SetWidgetNotSelected('u440');
SetWidgetNotSelected('u443');
SetWidgetNotSelected('u445');
SetWidgetNotSelected('u447');
SetWidgetNotSelected('u449');
SetWidgetNotSelected('u452');
SetWidgetNotSelected('u454');
SetWidgetNotSelected('u456');
SetWidgetNotSelected('u458');
SetWidgetNotSelected('u461');
SetWidgetNotSelected('u463');
SetWidgetNotSelected('u465');
SetWidgetNotSelected('u467');
SetWidgetNotSelected('u470');
SetWidgetNotSelected('u473');
SetWidgetNotSelected('u476');
	var obj1 = document.getElementById("u273");
    obj1.focus();

}
});

$axure.eventManager.mouseover('u22', function(e) {
if (!IsTrueMouseOver('u22',e)) return;
if (true) {

	SetPanelVisibility('u17','','none',500);

}
});
gv_vAlignTable['u22'] = 'top';document.getElementById('u851_img').tabIndex = 0;

u851.style.cursor = 'pointer';
$axure.eventManager.click('u851', function(e) {

if (true) {

SetWidgetFormText('u182', '144');

SetWidgetFormText('u187', '  influenza, seasonal, intradermal, preservative free ');

	SetPanelVisibility('u834','hidden','fade',500);

}
});

$axure.eventManager.focus('u251', function(e) {

if (IsValueOneOf(GetWidgetText('u216'), ['2006', '2012', '2017', '2023'])) {

SetWidgetFormText('u269', '1');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u216'), ['2001', '2007', '2018', '2024', '2029'])) {

SetWidgetFormText('u269', '2');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u216'), ['2002', '2008', '2013', '2019', '2030'])) {

SetWidgetFormText('u269', '3');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u216'), ['2003', '2014', '2020', '2025'])) {

SetWidgetFormText('u269', '4');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u216'), ['2004', '2009', '2015', '2026'])) {

SetWidgetFormText('u269', '5');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u216'), ['2010', '2016', '2021', '2027'])) {

SetWidgetFormText('u269', '6');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u216'), ['2000', '2005', '2011', '2022', '2028'])) {

SetWidgetFormText('u269', '7');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
});
document.getElementById('u425_img').tabIndex = 0;
HookHover('u425', false);

u425.style.cursor = 'pointer';
$axure.eventManager.click('u425', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u217', '03');

	var obj1 = document.getElementById("u221");
    obj1.focus();

}
});
gv_vAlignTable['u591'] = 'center';document.getElementById('u397_img').tabIndex = 0;
HookHover('u397', false);

u397.style.cursor = 'pointer';
$axure.eventManager.click('u397', function(e) {

if (true) {

	var obj1 = document.getElementById("u231");
    obj1.focus();

}
});
gv_vAlignTable['u181'] = 'top';document.getElementById('u113_img').tabIndex = 0;

u113.style.cursor = 'pointer';
$axure.eventManager.click('u113', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('AddPatient.html');

}
});
document.getElementById('u393_img').tabIndex = 0;

u393.style.cursor = 'pointer';
$axure.eventManager.click('u393', function(e) {

if (true) {

	var obj1 = document.getElementById("u231");
    obj1.focus();

}
});
gv_vAlignTable['u106'] = 'center';gv_vAlignTable['u864'] = 'top';gv_vAlignTable['u580'] = 'top';gv_vAlignTable['u141'] = 'center';gv_vAlignTable['u166'] = 'center';
$axure.eventManager.focus('u537', function(e) {

if ((GetWidgetText('u496')) == ('1')) {

SetWidgetSelected('u703');
}

if ((GetWidgetText('u496')) == ('2')) {

SetWidgetSelected('u712');
}

if ((GetWidgetText('u496')) == ('3')) {

SetWidgetSelected('u721');
}

if ((GetWidgetText('u496')) == ('4')) {

SetWidgetSelected('u730');
}

if ((GetWidgetText('u496')) == ('5')) {

SetWidgetSelected('u739');
}

if ((GetWidgetText('u496')) == ('6')) {

SetWidgetSelected('u748');
}

if ((GetWidgetText('u496')) == ('7')) {

SetWidgetSelected('u757');
}

if ((GetWidgetText('u496')) == ('8')) {

SetWidgetSelected('u705');
}

if ((GetWidgetText('u496')) == ('9')) {

SetWidgetSelected('u714');
}

if ((GetWidgetText('u496')) == ('10')) {

SetWidgetSelected('u723');
}

if ((GetWidgetText('u496')) == ('11')) {

SetWidgetSelected('u732');
}

if ((GetWidgetText('u496')) == ('12')) {

SetWidgetSelected('u741');
}

if ((GetWidgetText('u496')) == ('13')) {

SetWidgetSelected('u750');
}

if ((GetWidgetText('u496')) == ('14')) {

SetWidgetSelected('u759');
}

if ((GetWidgetText('u496')) == ('15')) {

SetWidgetSelected('u707');
}

if ((GetWidgetText('u496')) == ('16')) {

SetWidgetSelected('u716');
}

if ((GetWidgetText('u496')) == ('17')) {

SetWidgetSelected('u725');
}

if ((GetWidgetText('u496')) == ('18')) {

SetWidgetSelected('u734');
}

if ((GetWidgetText('u496')) == ('19')) {

SetWidgetSelected('u743');
}

if ((GetWidgetText('u496')) == ('20')) {

SetWidgetSelected('u752');
}

if ((GetWidgetText('u496')) == ('21')) {

SetWidgetSelected('u761');
}

if ((GetWidgetText('u496')) == ('22')) {

SetWidgetSelected('u709');
}

if ((GetWidgetText('u496')) == ('23')) {

SetWidgetSelected('u718');
}

if ((GetWidgetText('u496')) == ('24')) {

SetWidgetSelected('u727');
}

if ((GetWidgetText('u496')) == ('25')) {

SetWidgetSelected('u736');
}

if ((GetWidgetText('u496')) == ('26')) {

SetWidgetSelected('u745');
}

if ((GetWidgetText('u496')) == ('27')) {

SetWidgetSelected('u754');
}

if ((GetWidgetText('u496')) == ('28')) {

SetWidgetSelected('u763');
}

if ((GetWidgetText('u496')) == ('29')) {

SetWidgetSelected('u766');
}

if ((GetWidgetText('u496')) == ('30')) {

SetWidgetSelected('u769');
}

if ((GetWidgetText('u496')) == ('31')) {

SetWidgetSelected('u772');
}

if (true) {

	var obj1 = document.getElementById("u535");
    obj1.focus();

}
});
document.getElementById('u134_img').tabIndex = 0;

u134.style.cursor = 'pointer';
$axure.eventManager.click('u134', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PQRS_Report.html');

}
});
gv_vAlignTable['u505'] = 'top';gv_vAlignTable['u29'] = 'center';gv_vAlignTable['u39'] = 'center';gv_vAlignTable['u127'] = 'center';gv_vAlignTable['u346'] = 'top';document.getElementById('u128_img').tabIndex = 0;

u128.style.cursor = 'pointer';
$axure.eventManager.click('u128', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PatientReminder.html');

}
});
gv_vAlignTable['u314'] = 'top';
$axure.eventManager.focus('u533', function(e) {

if ((GetSelectedOption('u511')) == ('December')) {

	var obj1 = document.getElementById("u529");
    obj1.focus();

}
else
if (true) {

	var obj1 = document.getElementById("u531");
    obj1.focus();

}
});
document.getElementById('u752_img').tabIndex = 0;
HookHover('u752', false);

u752.style.cursor = 'pointer';
$axure.eventManager.click('u752', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u513', '20');

	var obj1 = document.getElementById("u517");
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
gv_vAlignTable['u374'] = 'top';document.getElementById('u745_img').tabIndex = 0;
HookHover('u745', false);

u745.style.cursor = 'pointer';
$axure.eventManager.click('u745', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u513', '26');

	var obj1 = document.getElementById("u517");
    obj1.focus();

}
});
gv_vAlignTable['u308'] = 'top';gv_vAlignTable['u342'] = 'top';
$axure.eventManager.focus('u561', function(e) {

if (IsValueOneOf(GetWidgetText('u512'), ['2002', '2013', '2019', '2024', '2030'])) {

SetWidgetFormText('u565', '1');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u512'), ['2003', '2008', '2014', '2025'])) {

SetWidgetFormText('u565', '2');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u512'), ['2009', '2015', '2020', '2026'])) {

SetWidgetFormText('u565', '3');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u512'), ['2004', '2010', '2021', '2027'])) {

SetWidgetFormText('u565', '4');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u512'), ['2005', '2011', '2016', '2022'])) {

SetWidgetFormText('u565', '5');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u512'), ['2000', '2006', '2017', '2023', '2028'])) {

SetWidgetFormText('u565', '6');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u512'), ['2001', '2007', '2012', '2018', '2029'])) {

SetWidgetFormText('u565', '7');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
});
document.getElementById('u149_img').tabIndex = 0;

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
gv_vAlignTable['u368'] = 'top';gv_vAlignTable['u95'] = 'center';gv_vAlignTable['u53'] = 'center';gv_vAlignTable['u370'] = 'top';gv_vAlignTable['u364'] = 'top';gv_vAlignTable['u548'] = 'top';
$axure.eventManager.mouseover('u12', function(e) {
if (!IsTrueMouseOver('u12',e)) return;
if (true) {

	SetPanelState('u27', 'pd0u27','none','',500,'none','',500);

	BringToFront("u27");

}
});
gv_vAlignTable['u12'] = 'top';document.getElementById('u883_img').tabIndex = 0;

u883.style.cursor = 'pointer';
$axure.eventManager.click('u883', function(e) {

if (true) {

SetWidgetFormText('u182', '144');

SetWidgetFormText('u187', 'influenza, seasonal, intradermal, preservative free');

	SetPanelVisibility('u834','hidden','fade',500);

}
});
gv_vAlignTable['u836'] = 'center';gv_vAlignTable['u484'] = 'top';gv_vAlignTable['u7'] = 'center';gv_vAlignTable['u697'] = 'center';gv_vAlignTable['u293'] = 'center';
$axure.eventManager.focus('u225', function(e) {

if ((GetWidgetText('u216')) == ('2029')) {

SetWidgetFormText('u216', '2030');

}

if ((GetWidgetText('u216')) == ('2028')) {

SetWidgetFormText('u216', '2029');

}

if ((GetWidgetText('u216')) == ('2027')) {

SetWidgetFormText('u216', '2028');

}

if ((GetWidgetText('u216')) == ('2026')) {

SetWidgetFormText('u216', '2027');

}

if ((GetWidgetText('u216')) == ('2025')) {

SetWidgetFormText('u216', '2026');

}

if ((GetWidgetText('u216')) == ('2024')) {

SetWidgetFormText('u216', '2025');

}

if ((GetWidgetText('u216')) == ('2023')) {

SetWidgetFormText('u216', '2024');

}

if ((GetWidgetText('u216')) == ('2022')) {

SetWidgetFormText('u216', '2023');

}

if ((GetWidgetText('u216')) == ('2021')) {

SetWidgetFormText('u216', '2022');

}

if ((GetWidgetText('u216')) == ('2020')) {

SetWidgetFormText('u216', '2021');

}

if ((GetWidgetText('u216')) == ('2019')) {

SetWidgetFormText('u216', '2020');

}

if ((GetWidgetText('u216')) == ('2018')) {

SetWidgetFormText('u216', '2019');

}

if ((GetWidgetText('u216')) == ('2017')) {

SetWidgetFormText('u216', '2018');

}

if ((GetWidgetText('u216')) == ('2016')) {

SetWidgetFormText('u216', '2017');

}

if ((GetWidgetText('u216')) == ('2015')) {

SetWidgetFormText('u216', '2016');

}

if ((GetWidgetText('u216')) == ('2014')) {

SetWidgetFormText('u216', '2015');

}

if ((GetWidgetText('u216')) == ('2013')) {

SetWidgetFormText('u216', '2014');

}

if ((GetWidgetText('u216')) == ('2012')) {

SetWidgetFormText('u216', '2013');

}

if ((GetWidgetText('u216')) == ('2011')) {

SetWidgetFormText('u216', '2012');

}

if ((GetWidgetText('u216')) == ('2010')) {

SetWidgetFormText('u216', '2011');

}

if ((GetWidgetText('u216')) == ('2009')) {

SetWidgetFormText('u216', '2010');

}

if ((GetWidgetText('u216')) == ('2008')) {

SetWidgetFormText('u216', '2009');

}

if ((GetWidgetText('u216')) == ('2007')) {

SetWidgetFormText('u216', '2008');

}

if ((GetWidgetText('u216')) == ('2006')) {

SetWidgetFormText('u216', '2007');

}

if ((GetWidgetText('u216')) == ('2005')) {

SetWidgetFormText('u216', '2006');

}

if ((GetWidgetText('u216')) == ('2004')) {

SetWidgetFormText('u216', '2005');

}

if ((GetWidgetText('u216')) == ('2003')) {

SetWidgetFormText('u216', '2004');

}

if ((GetWidgetText('u216')) == ('2002')) {

SetWidgetFormText('u216', '2003');

}

if ((GetWidgetText('u216')) == ('2001')) {

SetWidgetFormText('u216', '2002');

}

if ((GetWidgetText('u216')) == ('2000')) {

SetWidgetFormText('u216', '2001');

}

if (true) {

	var obj1 = document.getElementById("u277");
    obj1.focus();

}
});
gv_vAlignTable['u832'] = 'center';gv_vAlignTable['u480'] = 'top';gv_vAlignTable['u412'] = 'center';gv_vAlignTable['u450'] = 'center';gv_vAlignTable['u437'] = 'center';gv_vAlignTable['u692'] = 'center';gv_vAlignTable['u352'] = 'top';gv_vAlignTable['u860'] = 'top';gv_vAlignTable['u614'] = 'top';
$axure.eventManager.focus('u221', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u218', GetGlobalVariableValue('OnLoadVariable'));

}

if (true) {

SetGlobalVariableValue('OnLoadVariable', GetWidgetText('u217'));

}

if ((GetSelectedOption('u215')) == ('January')) {

SetGlobalVariableValue('OnLoadVariable', '01/' + (GetGlobalVariableValue('OnLoadVariable')) + '');

	var obj1 = document.getElementById("u219");
    obj1.focus();

}
else
if ((GetSelectedOption('u215')) == ('February')) {

SetGlobalVariableValue('OnLoadVariable', '02/' + (GetGlobalVariableValue('OnLoadVariable')) + '');

	var obj1 = document.getElementById("u219");
    obj1.focus();

}
else
if ((GetSelectedOption('u215')) == ('March')) {

SetGlobalVariableValue('OnLoadVariable', '03/' + (GetGlobalVariableValue('OnLoadVariable')) + '');

	var obj1 = document.getElementById("u219");
    obj1.focus();

}
else
if ((GetSelectedOption('u215')) == ('April')) {

SetGlobalVariableValue('OnLoadVariable', '04/' + (GetGlobalVariableValue('OnLoadVariable')) + '');

	var obj1 = document.getElementById("u219");
    obj1.focus();

}
else
if ((GetSelectedOption('u215')) == ('May')) {

SetGlobalVariableValue('OnLoadVariable', '05/' + (GetGlobalVariableValue('OnLoadVariable')) + '');

	var obj1 = document.getElementById("u219");
    obj1.focus();

}
else
if ((GetSelectedOption('u215')) == ('June')) {

SetGlobalVariableValue('OnLoadVariable', '06/' + (GetGlobalVariableValue('OnLoadVariable')) + '');

	var obj1 = document.getElementById("u219");
    obj1.focus();

}
else
if ((GetSelectedOption('u215')) == ('July')) {

SetGlobalVariableValue('OnLoadVariable', '07/' + (GetGlobalVariableValue('OnLoadVariable')) + '');

	var obj1 = document.getElementById("u219");
    obj1.focus();

}
else
if ((GetSelectedOption('u215')) == ('August')) {

SetGlobalVariableValue('OnLoadVariable', '08/' + (GetGlobalVariableValue('OnLoadVariable')) + '');

	var obj1 = document.getElementById("u219");
    obj1.focus();

}
else
if ((GetSelectedOption('u215')) == ('September')) {

SetGlobalVariableValue('OnLoadVariable', '09/' + (GetGlobalVariableValue('OnLoadVariable')) + '');

	var obj1 = document.getElementById("u219");
    obj1.focus();

}
else
if ((GetSelectedOption('u215')) == ('October')) {

SetGlobalVariableValue('OnLoadVariable', '10/' + (GetGlobalVariableValue('OnLoadVariable')) + '');

	var obj1 = document.getElementById("u219");
    obj1.focus();

}
else
if ((GetSelectedOption('u215')) == ('November')) {

SetGlobalVariableValue('OnLoadVariable', '11/' + (GetGlobalVariableValue('OnLoadVariable')) + '');

	var obj1 = document.getElementById("u219");
    obj1.focus();

}
else
if ((GetSelectedOption('u215')) == ('December')) {

SetGlobalVariableValue('OnLoadVariable', '12/' + (GetGlobalVariableValue('OnLoadVariable')) + '');

	var obj1 = document.getElementById("u219");
    obj1.focus();

}
});
document.getElementById('u440_img').tabIndex = 0;
HookHover('u440', false);

u440.style.cursor = 'pointer';
$axure.eventManager.click('u440', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u217', '25');

	var obj1 = document.getElementById("u221");
    obj1.focus();

}
});
gv_vAlignTable['u246'] = 'top';gv_vAlignTable['u214'] = 'top';gv_vAlignTable['u652'] = 'top';gv_vAlignTable['u722'] = 'center';gv_vAlignTable['u401'] = 'center';gv_vAlignTable['u620'] = 'top';gv_vAlignTable['u274'] = 'top';
$axure.eventManager.focus('u208', function(e) {

if (true) {

	SetPanelVisibility('u291','','none',500);

}
});
gv_vAlignTable['u242'] = 'top';document.getElementById('u461_img').tabIndex = 0;
HookHover('u461', false);

u461.style.cursor = 'pointer';
$axure.eventManager.click('u461', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u217', '07');

	var obj1 = document.getElementById("u221");
    obj1.focus();

}
});

$axure.eventManager.focus('u277', function(e) {

if (true) {

	var obj1 = document.getElementById("u275");
    obj1.focus();

}
});
gv_vAlignTable['u777'] = 'top';gv_vAlignTable['u268'] = 'top';gv_vAlignTable['u43'] = 'center';gv_vAlignTable['u773'] = 'center';
$axure.eventManager.focus('u270', function(e) {

if ((GetSelectedOption('u215')) == ('January')) {

	var obj1 = document.getElementById("u251");
    obj1.focus();

}
else
if ((GetSelectedOption('u215')) == ('February')) {

	var obj1 = document.getElementById("u253");
    obj1.focus();

}
else
if (((GetSelectedOption('u215')) == ('March')) || ((GetSelectedOption('u215')) == ('November'))) {

	var obj1 = document.getElementById("u255");
    obj1.focus();

}
else
if (((GetSelectedOption('u215')) == ('April')) || ((GetSelectedOption('u215')) == ('July'))) {

	var obj1 = document.getElementById("u257");
    obj1.focus();

}
else
if ((GetSelectedOption('u215')) == ('May')) {

	var obj1 = document.getElementById("u259");
    obj1.focus();

}
else
if ((GetSelectedOption('u215')) == ('June')) {

	var obj1 = document.getElementById("u261");
    obj1.focus();

}
else
if ((GetSelectedOption('u215')) == ('August')) {

	var obj1 = document.getElementById("u263");
    obj1.focus();

}
else
if (((GetSelectedOption('u215')) == ('September')) || ((GetSelectedOption('u215')) == ('December'))) {

	var obj1 = document.getElementById("u265");
    obj1.focus();

}
else
if ((GetSelectedOption('u215')) == ('October')) {

	var obj1 = document.getElementById("u267");
    obj1.focus();

}
});
gv_vAlignTable['u819'] = 'top';gv_vAlignTable['u448'] = 'center';document.getElementById('u61_img').tabIndex = 0;

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
gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u540'] = 'top';gv_vAlignTable['u391'] = 'center';document.getElementById('u197_img').tabIndex = 0;

u197.style.cursor = 'pointer';
$axure.eventManager.click('u197', function(e) {

if (true) {

	var obj1 = document.getElementById("u208");
    obj1.focus();

}
});
gv_vAlignTable['u787'] = 'top';gv_vAlignTable['u384'] = 'top';gv_vAlignTable['u87'] = 'center';document.getElementById('u6_img').tabIndex = 0;

u6.style.cursor = 'pointer';
$axure.eventManager.click('u6', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});

$axure.eventManager.focus('u265', function(e) {

if (IsValueOneOf(GetWidgetText('u216'), ['2002', '2013', '2019', '2024', '2030'])) {

SetWidgetFormText('u269', '1');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u216'), ['2003', '2008', '2014', '2025'])) {

SetWidgetFormText('u269', '2');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u216'), ['2009', '2015', '2020', '2026'])) {

SetWidgetFormText('u269', '3');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u216'), ['2004', '2010', '2021', '2027'])) {

SetWidgetFormText('u269', '4');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u216'), ['2005', '2011', '2016', '2022'])) {

SetWidgetFormText('u269', '5');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u216'), ['2000', '2006', '2017', '2023', '2028'])) {

SetWidgetFormText('u269', '6');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u216'), ['2001', '2007', '2012', '2018', '2029'])) {

SetWidgetFormText('u269', '7');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
});
document.getElementById('u465_img').tabIndex = 0;
HookHover('u465', false);

u465.style.cursor = 'pointer';
$axure.eventManager.click('u465', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u217', '21');

	var obj1 = document.getElementById("u221");
    obj1.focus();

}
});
gv_vAlignTable['u380'] = 'top';gv_vAlignTable['u827'] = 'center';gv_vAlignTable['u312'] = 'top';gv_vAlignTable['u524'] = 'top';gv_vAlignTable['u19'] = 'center';gv_vAlignTable['u340'] = 'top';document.getElementById('u146_img').tabIndex = 0;

u146.style.cursor = 'pointer';
$axure.eventManager.click('u146', function(e) {

if (true) {

	SetPanelVisibility('u125','toggle','none',500);

	SetPanelVisibility('u49','hidden','none',500);

	SetPanelVisibility('u66','hidden','none',500);

}
});

$axure.eventManager.focus('u517', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u514', GetGlobalVariableValue('OnLoadVariable'));

}

if (true) {

SetGlobalVariableValue('OnLoadVariable', GetWidgetText('u513'));

}

if ((GetSelectedOption('u511')) == ('January')) {

SetGlobalVariableValue('OnLoadVariable', '01/' + (GetGlobalVariableValue('OnLoadVariable')) + '');

	var obj1 = document.getElementById("u515");
    obj1.focus();

}
else
if ((GetSelectedOption('u511')) == ('February')) {

SetGlobalVariableValue('OnLoadVariable', '02/' + (GetGlobalVariableValue('OnLoadVariable')) + '');

	var obj1 = document.getElementById("u515");
    obj1.focus();

}
else
if ((GetSelectedOption('u511')) == ('March')) {

SetGlobalVariableValue('OnLoadVariable', '03/' + (GetGlobalVariableValue('OnLoadVariable')) + '');

	var obj1 = document.getElementById("u515");
    obj1.focus();

}
else
if ((GetSelectedOption('u511')) == ('April')) {

SetGlobalVariableValue('OnLoadVariable', '04/' + (GetGlobalVariableValue('OnLoadVariable')) + '');

	var obj1 = document.getElementById("u515");
    obj1.focus();

}
else
if ((GetSelectedOption('u511')) == ('May')) {

SetGlobalVariableValue('OnLoadVariable', '05/' + (GetGlobalVariableValue('OnLoadVariable')) + '');

	var obj1 = document.getElementById("u515");
    obj1.focus();

}
else
if ((GetSelectedOption('u511')) == ('June')) {

SetGlobalVariableValue('OnLoadVariable', '06/' + (GetGlobalVariableValue('OnLoadVariable')) + '');

	var obj1 = document.getElementById("u515");
    obj1.focus();

}
else
if ((GetSelectedOption('u511')) == ('July')) {

SetGlobalVariableValue('OnLoadVariable', '07/' + (GetGlobalVariableValue('OnLoadVariable')) + '');

	var obj1 = document.getElementById("u515");
    obj1.focus();

}
else
if ((GetSelectedOption('u511')) == ('August')) {

SetGlobalVariableValue('OnLoadVariable', '08/' + (GetGlobalVariableValue('OnLoadVariable')) + '');

	var obj1 = document.getElementById("u515");
    obj1.focus();

}
else
if ((GetSelectedOption('u511')) == ('September')) {

SetGlobalVariableValue('OnLoadVariable', '09/' + (GetGlobalVariableValue('OnLoadVariable')) + '');

	var obj1 = document.getElementById("u515");
    obj1.focus();

}
else
if ((GetSelectedOption('u511')) == ('October')) {

SetGlobalVariableValue('OnLoadVariable', '10/' + (GetGlobalVariableValue('OnLoadVariable')) + '');

	var obj1 = document.getElementById("u515");
    obj1.focus();

}
else
if ((GetSelectedOption('u511')) == ('November')) {

SetGlobalVariableValue('OnLoadVariable', '11/' + (GetGlobalVariableValue('OnLoadVariable')) + '');

	var obj1 = document.getElementById("u515");
    obj1.focus();

}
else
if ((GetSelectedOption('u511')) == ('December')) {

SetGlobalVariableValue('OnLoadVariable', '12/' + (GetGlobalVariableValue('OnLoadVariable')) + '');

	var obj1 = document.getElementById("u515");
    obj1.focus();

}
});
document.getElementById('u736_img').tabIndex = 0;
HookHover('u736', false);

u736.style.cursor = 'pointer';
$axure.eventManager.click('u736', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u513', '25');

	var obj1 = document.getElementById("u517");
    obj1.focus();

}
});
document.getElementById('u721_img').tabIndex = 0;
HookHover('u721', false);

u721.style.cursor = 'pointer';
$axure.eventManager.click('u721', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u513', '03');

	var obj1 = document.getElementById("u517");
    obj1.focus();

}
});
gv_vAlignTable['u114'] = 'center';gv_vAlignTable['u552'] = 'top';gv_vAlignTable['u577'] = 'top';gv_vAlignTable['u520'] = 'top';gv_vAlignTable['u174'] = 'top';
$axure.eventManager.focus('u545', function(e) {

if ((GetWidgetText('u565')) == ('1')) {

	MoveWidgetTo('u702', GetNum('0'), GetNum('0'),'none',500);

	MoveWidgetTo('u711', GetNum('22'), GetNum('0'),'none',500);

	MoveWidgetTo('u720', GetNum('44'), GetNum('0'),'none',500);

	MoveWidgetTo('u729', GetNum('66'), GetNum('0'),'none',500);

	MoveWidgetTo('u738', GetNum('88'), GetNum('0'),'none',500);

	MoveWidgetTo('u747', GetNum('110'), GetNum('0'),'none',500);

	MoveWidgetTo('u756', GetNum('132'), GetNum('0'),'none',500);

	MoveWidgetTo('u765', GetNum('0'), GetNum('80'),'none',500);

	MoveWidgetTo('u768', GetNum('22'), GetNum('80'),'none',500);

	MoveWidgetTo('u771', GetNum('44'), GetNum('80'),'none',500);

}

if ((GetWidgetText('u565')) == ('2')) {

	MoveWidgetTo('u702', GetNum('22'), GetNum('0'),'none',500);

	MoveWidgetTo('u711', GetNum('44'), GetNum('0'),'none',500);

	MoveWidgetTo('u720', GetNum('66'), GetNum('0'),'none',500);

	MoveWidgetTo('u729', GetNum('88'), GetNum('0'),'none',500);

	MoveWidgetTo('u738', GetNum('110'), GetNum('0'),'none',500);

	MoveWidgetTo('u747', GetNum('132'), GetNum('0'),'none',500);

	MoveWidgetTo('u756', GetNum('0'), GetNum('20'),'none',500);

	MoveWidgetTo('u765', GetNum('22'), GetNum('80'),'none',500);

	MoveWidgetTo('u768', GetNum('44'), GetNum('80'),'none',500);

	MoveWidgetTo('u771', GetNum('66'), GetNum('80'),'none',500);

}

if ((GetWidgetText('u565')) == ('3')) {

	MoveWidgetTo('u702', GetNum('44'), GetNum('0'),'none',500);

	MoveWidgetTo('u711', GetNum('66'), GetNum('0'),'none',500);

	MoveWidgetTo('u720', GetNum('88'), GetNum('0'),'none',500);

	MoveWidgetTo('u729', GetNum('110'), GetNum('0'),'none',500);

	MoveWidgetTo('u738', GetNum('132'), GetNum('0'),'none',500);

	MoveWidgetTo('u747', GetNum('0'), GetNum('20'),'none',500);

	MoveWidgetTo('u756', GetNum('22'), GetNum('20'),'none',500);

	MoveWidgetTo('u765', GetNum('44'), GetNum('80'),'none',500);

	MoveWidgetTo('u768', GetNum('66'), GetNum('80'),'none',500);

	MoveWidgetTo('u771', GetNum('88'), GetNum('80'),'none',500);

}

if ((GetWidgetText('u565')) == ('4')) {

	MoveWidgetTo('u702', GetNum('66'), GetNum('0'),'none',500);

	MoveWidgetTo('u711', GetNum('88'), GetNum('0'),'none',500);

	MoveWidgetTo('u720', GetNum('110'), GetNum('0'),'none',500);

	MoveWidgetTo('u729', GetNum('132'), GetNum('0'),'none',500);

	MoveWidgetTo('u738', GetNum('0'), GetNum('20'),'none',500);

	MoveWidgetTo('u747', GetNum('22'), GetNum('20'),'none',500);

	MoveWidgetTo('u756', GetNum('44'), GetNum('20'),'none',500);

	MoveWidgetTo('u765', GetNum('66'), GetNum('80'),'none',500);

	MoveWidgetTo('u768', GetNum('88'), GetNum('80'),'none',500);

	MoveWidgetTo('u771', GetNum('110'), GetNum('80'),'none',500);

}

if ((GetWidgetText('u565')) == ('5')) {

	MoveWidgetTo('u702', GetNum('88'), GetNum('0'),'none',500);

	MoveWidgetTo('u711', GetNum('110'), GetNum('0'),'none',500);

	MoveWidgetTo('u720', GetNum('132'), GetNum('0'),'none',500);

	MoveWidgetTo('u729', GetNum('0'), GetNum('20'),'none',500);

	MoveWidgetTo('u738', GetNum('22'), GetNum('20'),'none',500);

	MoveWidgetTo('u747', GetNum('44'), GetNum('20'),'none',500);

	MoveWidgetTo('u756', GetNum('66'), GetNum('20'),'none',500);

	MoveWidgetTo('u765', GetNum('88'), GetNum('80'),'none',500);

	MoveWidgetTo('u768', GetNum('110'), GetNum('80'),'none',500);

	MoveWidgetTo('u771', GetNum('132'), GetNum('80'),'none',500);

}

if ((GetWidgetText('u565')) == ('6')) {

	MoveWidgetTo('u702', GetNum('110'), GetNum('0'),'none',500);

	MoveWidgetTo('u711', GetNum('132'), GetNum('0'),'none',500);

	MoveWidgetTo('u720', GetNum('0'), GetNum('20'),'none',500);

	MoveWidgetTo('u729', GetNum('22'), GetNum('20'),'none',500);

	MoveWidgetTo('u738', GetNum('44'), GetNum('20'),'none',500);

	MoveWidgetTo('u747', GetNum('66'), GetNum('20'),'none',500);

	MoveWidgetTo('u756', GetNum('88'), GetNum('20'),'none',500);

	MoveWidgetTo('u765', GetNum('110'), GetNum('80'),'none',500);

	MoveWidgetTo('u768', GetNum('132'), GetNum('80'),'none',500);

	MoveWidgetTo('u771', GetNum('0'), GetNum('100'),'none',500);

}

if ((GetWidgetText('u565')) == ('7')) {

	MoveWidgetTo('u702', GetNum('132'), GetNum('0'),'none',500);

	MoveWidgetTo('u711', GetNum('0'), GetNum('20'),'none',500);

	MoveWidgetTo('u720', GetNum('22'), GetNum('20'),'none',500);

	MoveWidgetTo('u729', GetNum('44'), GetNum('20'),'none',500);

	MoveWidgetTo('u738', GetNum('66'), GetNum('20'),'none',500);

	MoveWidgetTo('u747', GetNum('88'), GetNum('20'),'none',500);

	MoveWidgetTo('u756', GetNum('110'), GetNum('20'),'none',500);

	MoveWidgetTo('u765', GetNum('132'), GetNum('80'),'none',500);

	MoveWidgetTo('u768', GetNum('0'), GetNum('100'),'none',500);

	MoveWidgetTo('u771', GetNum('22'), GetNum('100'),'none',500);

}

if (true) {

	var obj1 = document.getElementById("u543");
    obj1.focus();

}
});
gv_vAlignTable['u108'] = 'center';document.getElementById('u142_img').tabIndex = 0;

u142.style.cursor = 'pointer';
$axure.eventManager.click('u142', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('OverdueImmunization.html');

}
});
document.getElementById('u732_img').tabIndex = 0;
HookHover('u732', false);

u732.style.cursor = 'pointer';
$axure.eventManager.click('u732', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u513', '11');

	var obj1 = document.getElementById("u517");
    obj1.focus();

}
});
document.getElementById('u757_img').tabIndex = 0;
HookHover('u757', false);

u757.style.cursor = 'pointer';
$axure.eventManager.click('u757', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u513', '07');

	var obj1 = document.getElementById("u517");
    obj1.focus();

}
});
document.getElementById('u168_img').tabIndex = 0;

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

$axure.eventManager.focus('u539', function(e) {

if (((GetSelectedOption('u511')) == (GetSelectedOption('u497'))) && ((GetWidgetText('u512')) == (GetSelectedOption('u498')))) {

	var obj1 = document.getElementById("u537");
    obj1.focus();

}
else
if (true) {

	var obj1 = document.getElementById("u535");
    obj1.focus();

}
});
gv_vAlignTable['u758'] = 'center';
$axure.eventManager.focus('u573', function(e) {

if (true) {

	var obj1 = document.getElementById("u571");
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
gv_vAlignTable['u760'] = 'center';gv_vAlignTable['u348'] = 'top';gv_vAlignTable['u719'] = 'center';gv_vAlignTable['u51'] = 'center';gv_vAlignTable['u9'] = 'top';document.getElementById('u853_img').tabIndex = 0;

u853.style.cursor = 'pointer';
$axure.eventManager.click('u853', function(e) {

if (true) {

SetWidgetFormText('u182', '144');

SetWidgetFormText('u187', '  influenza, seasonal, intradermal, preservative free ');

	SetPanelVisibility('u834','hidden','fade',500);

}
});
gv_vAlignTable['u57'] = 'center';
$axure.eventManager.focus('u515', function(e) {

if ((GetWidgetText('u512')) == ('2000')) {

SetWidgetFormText('u501', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2000');

}

if ((GetWidgetText('u512')) == ('2001')) {

SetWidgetFormText('u501', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2001');

}

if ((GetWidgetText('u512')) == ('2002')) {

SetWidgetFormText('u501', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2002');

}

if ((GetWidgetText('u512')) == ('2003')) {

SetWidgetFormText('u501', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2003');

}

if ((GetWidgetText('u512')) == ('2004')) {

SetWidgetFormText('u501', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2004');

}

if ((GetWidgetText('u512')) == ('2005')) {

SetWidgetFormText('u501', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2005');

}

if ((GetWidgetText('u512')) == ('2006')) {

SetWidgetFormText('u501', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2006');

}

if ((GetWidgetText('u512')) == ('2007')) {

SetWidgetFormText('u501', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2007');

}

if ((GetWidgetText('u512')) == ('2008')) {

SetWidgetFormText('u501', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2008');

}

if ((GetWidgetText('u512')) == ('2009')) {

SetWidgetFormText('u501', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2009');

}

if ((GetWidgetText('u512')) == ('2010')) {

SetWidgetFormText('u501', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2010');

}

if ((GetWidgetText('u512')) == ('2011')) {

SetWidgetFormText('u501', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2011');

}

if ((GetWidgetText('u512')) == ('2012')) {

SetWidgetFormText('u501', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2012');

}

if ((GetWidgetText('u512')) == ('2013')) {

SetWidgetFormText('u501', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2013');

}

if ((GetWidgetText('u512')) == ('2014')) {

SetWidgetFormText('u501', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2014');

}

if ((GetWidgetText('u512')) == ('2015')) {

SetWidgetFormText('u501', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2015');

}

if ((GetWidgetText('u512')) == ('2016')) {

SetWidgetFormText('u501', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2016');

}

if ((GetWidgetText('u512')) == ('2017')) {

SetWidgetFormText('u501', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2017');

}

if ((GetWidgetText('u512')) == ('2018')) {

SetWidgetFormText('u501', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2018');

}

if ((GetWidgetText('u512')) == ('2019')) {

SetWidgetFormText('u501', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2019');

}

if ((GetWidgetText('u512')) == ('2020')) {

SetWidgetFormText('u501', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2020');

}

if ((GetWidgetText('u512')) == ('2021')) {

SetWidgetFormText('u501', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2021');

}

if ((GetWidgetText('u512')) == ('2022')) {

SetWidgetFormText('u501', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2022');

}

if ((GetWidgetText('u512')) == ('2023')) {

SetWidgetFormText('u501', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2023');

}

if ((GetWidgetText('u512')) == ('2024')) {

SetWidgetFormText('u501', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2024');

}

if ((GetWidgetText('u512')) == ('2025')) {

SetWidgetFormText('u501', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2025');

}

if ((GetWidgetText('u512')) == ('2026')) {

SetWidgetFormText('u501', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2026');

}

if ((GetWidgetText('u512')) == ('2027')) {

SetWidgetFormText('u501', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2027');

}

if ((GetWidgetText('u512')) == ('2028')) {

SetWidgetFormText('u501', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2028');

}

if ((GetWidgetText('u512')) == ('2029')) {

SetWidgetFormText('u501', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2029');

}

if ((GetWidgetText('u512')) == ('2030')) {

SetWidgetFormText('u501', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2030');

}

if (true) {

SetGlobalVariableValue('OnLoadVariable', GetWidgetText('u514'));

}

if (true) {

rdo3OnDateSelection(e);

}
});
gv_vAlignTable['u779'] = 'top';document.getElementById('u743_img').tabIndex = 0;
HookHover('u743', false);

u743.style.cursor = 'pointer';
$axure.eventManager.click('u743', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u513', '19');

	var obj1 = document.getElementById("u517");
    obj1.focus();

}
});
gv_vAlignTable['u687'] = 'center';gv_vAlignTable['u284'] = 'top';gv_vAlignTable['u97'] = 'center';gv_vAlignTable['u823'] = 'top';gv_vAlignTable['u690'] = 'center';gv_vAlignTable['u683'] = 'center';gv_vAlignTable['u858'] = 'top';gv_vAlignTable['u280'] = 'top';
$axure.eventManager.focus('u212', function(e) {

if (true) {

	SetPanelVisibility('u291','hidden','none',500);

	var obj1 = document.getElementById("u206");
    obj1.focus();

}
});

$axure.eventManager.focus('u237', function(e) {

if ((GetSelectedOption('u215')) == ('December')) {

	var obj1 = document.getElementById("u233");
    obj1.focus();

}
else
if (true) {

	var obj1 = document.getElementById("u235");
    obj1.focus();

}
});
gv_vAlignTable['u414'] = 'center';gv_vAlignTable['u492'] = 'center';gv_vAlignTable['u240'] = 'top';gv_vAlignTable['u68'] = 'center';gv_vAlignTable['u417'] = 'center';gv_vAlignTable['u636'] = 'top';gv_vAlignTable['u872'] = 'top';
$axure.eventManager.focus('u233', function(e) {

if (true) {

SetSelectedOption('u215', 'January');

	var obj1 = document.getElementById("u225");
    obj1.focus();

}
});
document.getElementById('u452_img').tabIndex = 0;
HookHover('u452', false);

u452.style.cursor = 'pointer';
$axure.eventManager.click('u452', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u217', '06');

	var obj1 = document.getElementById("u221");
    obj1.focus();

}
});
gv_vAlignTable['u477'] = 'center';document.getElementById('u420_img').tabIndex = 0;
HookHover('u420', false);

u420.style.cursor = 'pointer';
$axure.eventManager.click('u420', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u217', '16');

	var obj1 = document.getElementById("u221");
    obj1.focus();

}
});
document.getElementById('u445_img').tabIndex = 0;
HookHover('u445', false);

u445.style.cursor = 'pointer';
$axure.eventManager.click('u445', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u217', '12');

	var obj1 = document.getElementById("u221");
    obj1.focus();

}
});
gv_vAlignTable['u664'] = 'top';gv_vAlignTable['u852'] = 'top';
$axure.eventManager.focus('u261', function(e) {

if (IsValueOneOf(GetWidgetText('u216'), ['2003', '2008', '2014', '2025'])) {

SetWidgetFormText('u269', '1');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u216'), ['2009', '2015', '2020', '2026'])) {

SetWidgetFormText('u269', '2');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u216'), ['2004', '2010', '2021', '2027'])) {

SetWidgetFormText('u269', '3');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u216'), ['2005', '2011', '2016', '2022'])) {

SetWidgetFormText('u269', '4');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u216'), ['2000', '2006', '2017', '2023', '2028'])) {

SetWidgetFormText('u269', '5');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u216'), ['2001', '2007', '2012', '2018', '2029'])) {

SetWidgetFormText('u269', '6');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u216'), ['2002', '2013', '2019', '2024', '2030'])) {

SetWidgetFormText('u269', '7');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
});
gv_vAlignTable['u632'] = 'top';gv_vAlignTable['u439'] = 'center';gv_vAlignTable['u658'] = 'top';
$axure.eventManager.mouseover('u23', function(e) {
if (!IsTrueMouseOver('u23',e)) return;
if (true) {

	SetPanelVisibility('u17','','none',500);

}
});
gv_vAlignTable['u23'] = 'top';gv_vAlignTable['u660'] = 'top';gv_vAlignTable['u866'] = 'top';gv_vAlignTable['u266'] = 'top';gv_vAlignTable['u248'] = 'top';gv_vAlignTable['u791'] = 'top';gv_vAlignTable['u47'] = 'center';gv_vAlignTable['u78'] = 'center';document.getElementById('u716_img').tabIndex = 0;
HookHover('u716', false);

u716.style.cursor = 'pointer';
$axure.eventManager.click('u716', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u513', '16');

	var obj1 = document.getElementById("u517");
    obj1.focus();

}
});
gv_vAlignTable['u583'] = 'top';gv_vAlignTable['u180'] = 'top';gv_vAlignTable['u112'] = 'center';gv_vAlignTable['u795'] = 'top';gv_vAlignTable['u59'] = 'center';document.getElementById('u105_img').tabIndex = 0;

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
gv_vAlignTable['u324'] = 'top';gv_vAlignTable['u854'] = 'top';gv_vAlignTable['u354'] = 'top';
$axure.eventManager.focus('u253', function(e) {

if (IsValueOneOf(GetWidgetText('u216'), ['2004', '2009', '2015', '2026'])) {

SetWidgetFormText('u269', '1');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u216'), ['2010', '2016', '2021', '2027'])) {

SetWidgetFormText('u269', '2');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u216'), ['2000', '2005', '2011', '2022', '2028'])) {

SetWidgetFormText('u269', '3');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u216'), ['2006', '2012', '2017', '2023'])) {

SetWidgetFormText('u269', '4');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u216'), ['2001', '2007', '2018', '2024', '2029'])) {

SetWidgetFormText('u269', '5');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u216'), ['2002', '2008', '2013', '2019', '2030'])) {

SetWidgetFormText('u269', '6');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u216'), ['2003', '2014', '2020', '2025'])) {

SetWidgetFormText('u269', '7');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
});
document.getElementById('u140_img').tabIndex = 0;

u140.style.cursor = 'pointer';
$axure.eventManager.click('u140', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ImmunizationRegistry.html');

}
});
gv_vAlignTable['u536'] = 'top';document.getElementById('u96_img').tabIndex = 0;

u96.style.cursor = 'pointer';
$axure.eventManager.click('u96', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('RecordDisclosure.html');

}
});
gv_vAlignTable['u133'] = 'center';
$axure.eventManager.focus('u504', function(e) {

if (true) {

	SetPanelVisibility('u587','','none',500);

}
});
document.getElementById('u723_img').tabIndex = 0;
HookHover('u723', false);

u723.style.cursor = 'pointer';
$axure.eventManager.click('u723', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u513', '10');

	var obj1 = document.getElementById("u517");
    obj1.focus();

}
});
gv_vAlignTable['u101'] = 'center';gv_vAlignTable['u320'] = 'top';gv_vAlignTable['u564'] = 'top';gv_vAlignTable['u532'] = 'top';gv_vAlignTable['u751'] = 'center';
$axure.eventManager.focus('u557', function(e) {

if (IsValueOneOf(GetWidgetText('u512'), ['2003', '2008', '2014', '2025'])) {

SetWidgetFormText('u565', '1');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u512'), ['2009', '2015', '2020', '2026'])) {

SetWidgetFormText('u565', '2');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u512'), ['2004', '2010', '2021', '2027'])) {

SetWidgetFormText('u565', '3');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u512'), ['2005', '2011', '2016', '2022'])) {

SetWidgetFormText('u565', '4');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u512'), ['2000', '2006', '2017', '2023', '2028'])) {

SetWidgetFormText('u565', '5');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u512'), ['2001', '2007', '2012', '2018', '2029'])) {

SetWidgetFormText('u565', '6');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u512'), ['2002', '2013', '2019', '2024', '2030'])) {

SetWidgetFormText('u565', '7');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
});
gv_vAlignTable['u776'] = 'top';gv_vAlignTable['u558'] = 'top';u13.tabIndex = 0;

u13.style.cursor = 'pointer';
$axure.eventManager.click('u13', function(e) {

if (true) {

	parent.location.href = 'Login.html';

}
});
gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u744'] = 'center';gv_vAlignTable['u560'] = 'top';
$axure.eventManager.focus('u519', function(e) {

if ((GetWidgetText('u512')) == ('2001')) {

SetWidgetFormText('u512', '2000');

}

if ((GetWidgetText('u512')) == ('2002')) {

SetWidgetFormText('u512', '2001');

}

if ((GetWidgetText('u512')) == ('2003')) {

SetWidgetFormText('u512', '2002');

}

if ((GetWidgetText('u512')) == ('2004')) {

SetWidgetFormText('u512', '2003');

}

if ((GetWidgetText('u512')) == ('2005')) {

SetWidgetFormText('u512', '2004');

}

if ((GetWidgetText('u512')) == ('2006')) {

SetWidgetFormText('u512', '2005');

}

if ((GetWidgetText('u512')) == ('2007')) {

SetWidgetFormText('u512', '2006');

}

if ((GetWidgetText('u512')) == ('2008')) {

SetWidgetFormText('u512', '2007');

}

if ((GetWidgetText('u512')) == ('2009')) {

SetWidgetFormText('u512', '2008');

}

if ((GetWidgetText('u512')) == ('2010')) {

SetWidgetFormText('u512', '2009');

}

if ((GetWidgetText('u512')) == ('2011')) {

SetWidgetFormText('u512', '2010');

}

if ((GetWidgetText('u512')) == ('2012')) {

SetWidgetFormText('u512', '2011');

}

if ((GetWidgetText('u512')) == ('2013')) {

SetWidgetFormText('u512', '2012');

}

if ((GetWidgetText('u512')) == ('2014')) {

SetWidgetFormText('u512', '2013');

}

if ((GetWidgetText('u512')) == ('2015')) {

SetWidgetFormText('u512', '2014');

}

if ((GetWidgetText('u512')) == ('2016')) {

SetWidgetFormText('u512', '2015');

}

if ((GetWidgetText('u512')) == ('2017')) {

SetWidgetFormText('u512', '2016');

}

if ((GetWidgetText('u512')) == ('2018')) {

SetWidgetFormText('u512', '2017');

}

if ((GetWidgetText('u512')) == ('2019')) {

SetWidgetFormText('u512', '2018');

}

if ((GetWidgetText('u512')) == ('2020')) {

SetWidgetFormText('u512', '2019');

}

if ((GetWidgetText('u512')) == ('2021')) {

SetWidgetFormText('u512', '2020');

}

if ((GetWidgetText('u512')) == ('2022')) {

SetWidgetFormText('u512', '2021');

}

if ((GetWidgetText('u512')) == ('2023')) {

SetWidgetFormText('u512', '2022');

}

if ((GetWidgetText('u512')) == ('2024')) {

SetWidgetFormText('u512', '2023');

}

if ((GetWidgetText('u512')) == ('2025')) {

SetWidgetFormText('u512', '2024');

}

if ((GetWidgetText('u512')) == ('2026')) {

SetWidgetFormText('u512', '2025');

}

if ((GetWidgetText('u512')) == ('2027')) {

SetWidgetFormText('u512', '2026');

}

if ((GetWidgetText('u512')) == ('2028')) {

SetWidgetFormText('u512', '2027');

}

if ((GetWidgetText('u512')) == ('2029')) {

SetWidgetFormText('u512', '2028');

}

if ((GetWidgetText('u512')) == ('2030')) {

SetWidgetFormText('u512', '2029');

}

if (true) {

	var obj1 = document.getElementById("u573");
    obj1.focus();

}
});
gv_vAlignTable['u31'] = 'center';document.getElementById('u772_img').tabIndex = 0;
HookHover('u772', false);

u772.style.cursor = 'pointer';
$axure.eventManager.click('u772', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u513', '31');

	var obj1 = document.getElementById("u517");
    obj1.focus();

}
});
gv_vAlignTable['u579'] = 'top';document.getElementById('u759_img').tabIndex = 0;
HookHover('u759', false);

u759.style.cursor = 'pointer';
$axure.eventManager.click('u759', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u513', '14');

	var obj1 = document.getElementById("u517");
    obj1.focus();

}
});
gv_vAlignTable['u882'] = 'top';gv_vAlignTable['u55'] = 'center';gv_vAlignTable['u487'] = 'top';gv_vAlignTable['u604'] = 'top';gv_vAlignTable['u807'] = 'top';document.getElementById('u463_img').tabIndex = 0;
HookHover('u463', false);

u463.style.cursor = 'pointer';
$axure.eventManager.click('u463', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u217', '14');

	var obj1 = document.getElementById("u221");
    obj1.focus();

}
});
gv_vAlignTable['u490'] = 'center';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u483'] = 'top';gv_vAlignTable['u803'] = 'top';gv_vAlignTable['u755'] = 'center';gv_vAlignTable['u829'] = 'center';gv_vAlignTable['u224'] = 'top';document.getElementById('u689_img').tabIndex = 0;

u689.style.cursor = 'pointer';
$axure.eventManager.click('u689', function(e) {

if (true) {

	var obj1 = document.getElementById("u527");
    obj1.focus();

}
});
gv_vAlignTable['u856'] = 'top';document.getElementById('u411_img').tabIndex = 0;
HookHover('u411', false);

u411.style.cursor = 'pointer';
$axure.eventManager.click('u411', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u217', '15');

	var obj1 = document.getElementById("u221");
    obj1.focus();

}
});
document.getElementById('u436_img').tabIndex = 0;
HookHover('u436', false);

u436.style.cursor = 'pointer';
$axure.eventManager.click('u436', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u217', '11');

	var obj1 = document.getElementById("u221");
    obj1.focus();

}
});
document.getElementById('u151_img').tabIndex = 0;

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
document.getElementById('u80_img').tabIndex = 0;

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
gv_vAlignTable['u404'] = 'center';gv_vAlignTable['u220'] = 'top';gv_vAlignTable['u706'] = 'center';
$axure.eventManager.focus('u245', function(e) {

if (true) {

SetWidgetFormText('u297', GetSelectedOption('u215'));

SetWidgetFormText('u299', GetWidgetText('u216'));

	var obj1 = document.getElementById("u243");
    obj1.focus();

}
});
gv_vAlignTable['u616'] = 'top';gv_vAlignTable['u740'] = 'center';gv_vAlignTable['u432'] = 'center';gv_vAlignTable['u457'] = 'center';gv_vAlignTable['u676'] = 'top';
$axure.eventManager.focus('u239', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

	SetPanelVisibility('u385','','none',500);

	SetPanelVisibility('u392','','none',500);

	SetPanelVisibility('u399','','none',500);

	SetPanelVisibility('u402','','none',500);

}

if (((GetSelectedOption('u215')) == ('January')) && ((GetWidgetText('u216')) == (GetSelectedOption('u203')))) {

	SetPanelVisibility('u392','hidden','none',500);

}

if (((GetSelectedOption('u215')) == ('December')) && ((GetWidgetText('u216')) == (GetSelectedOption('u204')))) {

	SetPanelVisibility('u385','hidden','none',500);

}

if ((GetWidgetText('u216')) == (GetSelectedOption('u203'))) {

	SetPanelVisibility('u399','hidden','none',500);

}

if ((GetWidgetText('u216')) == (GetSelectedOption('u204'))) {

	SetPanelVisibility('u402','hidden','none',500);

}
});
document.getElementById('u458_img').tabIndex = 0;
HookHover('u458', false);

u458.style.cursor = 'pointer';
$axure.eventManager.click('u458', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u217', '27');

	var obj1 = document.getElementById("u221");
    obj1.focus();

}
});

$axure.eventManager.focus('u273', function(e) {

if (IsValueOneOf(GetSelectedOption('u215'), ['January', 'March', 'May', 'July', 'August', 'October', 'December'])) {

SetWidgetFormText('u272', '31');

}

if (IsValueOneOf(GetSelectedOption('u215'), ['April', 'June', 'September', 'November'])) {

SetWidgetFormText('u272', '30');

}

if ((GetSelectedOption('u215')) == ('February')) {

SetWidgetFormText('u272', '28');

}

if (((GetSelectedOption('u215')) == ('February')) && (IsValueOneOf(GetWidgetText('u216'), ['2000', '2004', '2008', '2012', '2016', '2020', '2024', '2028']))) {

SetWidgetFormText('u272', '29');

}

if (true) {

	var obj1 = document.getElementById("u270");
    obj1.focus();

}
});
gv_vAlignTable['u644'] = 'top';
$axure.eventManager.mouseover('u20', function(e) {
if (!IsTrueMouseOver('u20',e)) return;
if (true) {

	SetPanelVisibility('u17','','none',500);

}
});
gv_vAlignTable['u419'] = 'center';gv_vAlignTable['u638'] = 'top';gv_vAlignTable['u21'] = 'center';gv_vAlignTable['u672'] = 'top';document.getElementById('u739_img').tabIndex = 0;
HookHover('u739', false);

u739.style.cursor = 'pointer';
$axure.eventManager.click('u739', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u513', '05');

	var obj1 = document.getElementById("u517");
    obj1.focus();

}
});
gv_vAlignTable['u479'] = 'top';document.getElementById('u849_img').tabIndex = 0;

u849.style.cursor = 'pointer';
$axure.eventManager.click('u849', function(e) {

if (true) {

SetWidgetFormText('u182', '144');

SetWidgetFormText('u187', '  influenza, seasonal, intradermal, preservative free ');

	SetPanelVisibility('u834','hidden','fade',500);

}
});
gv_vAlignTable['u717'] = 'center';gv_vAlignTable['u45'] = 'center';gv_vAlignTable['u387'] = 'center';document.getElementById('u390_img').tabIndex = 0;
HookHover('u390', false);

u390.style.cursor = 'pointer';
$axure.eventManager.click('u390', function(e) {

if (true) {

	var obj1 = document.getElementById("u237");
    obj1.focus();

}
});
gv_vAlignTable['u196'] = 'center';gv_vAlignTable['u33'] = 'top';document.getElementById('u714_img').tabIndex = 0;
HookHover('u714', false);

u714.style.cursor = 'pointer';
$axure.eventManager.click('u714', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u513', '09');

	var obj1 = document.getElementById("u517");
    obj1.focus();

}
});
gv_vAlignTable['u797'] = 'top';
$axure.eventManager.click('u782', function(e) {

if (true) {

SetWidgetFormText('u584', '' + (GetGlobalVariableValue('Day')) + '');

SetWidgetFormText('u585', '' + (GetGlobalVariableValue('MonthName')) + '');

SetWidgetFormText('u586', '' + (GetGlobalVariableValue('Year')) + '');

SetWidgetFormText('u496', GetWidgetText('u584'));

SetSelectedOption('u497', GetWidgetText('u585'));

SetSelectedOption('u498', GetWidgetText('u586'));

	var obj1 = document.getElementById("u502");
    obj1.focus();

}
});

$axure.eventManager.click('u782', function(e) {

if (true) {

SetWidgetFormText('u584', '' + (GetGlobalVariableValue('Day')) + '');

SetWidgetFormText('u585', '' + (GetGlobalVariableValue('MonthName')) + '');

SetWidgetFormText('u586', '' + (GetGlobalVariableValue('Year')) + '');

SetWidgetFormText('u496', GetWidgetText('u584'));

SetSelectedOption('u497', GetWidgetText('u585'));

SetSelectedOption('u498', GetWidgetText('u586'));

	var obj1 = document.getElementById("u502");
    obj1.focus();

}
});

$axure.eventManager.click('u782', function(e) {

if (true) {

SetWidgetFormText('u584', '' + (GetGlobalVariableValue('Day')) + '');

SetWidgetFormText('u585', '' + (GetGlobalVariableValue('MonthName')) + '');

SetWidgetFormText('u586', '' + (GetGlobalVariableValue('Year')) + '');

SetWidgetFormText('u496', GetWidgetText('u584'));

SetSelectedOption('u497', GetWidgetText('u585'));

SetSelectedOption('u498', GetWidgetText('u586'));

	var obj1 = document.getElementById("u502");
    obj1.focus();

}
});
gv_vAlignTable['u589'] = 'center';document.getElementById('u38_img').tabIndex = 0;

u38.style.cursor = 'pointer';
$axure.eventManager.click('u38', function(e) {

if (true) {

	SetPanelVisibility('u27','hidden','none',500);

}
});
gv_vAlignTable['u336'] = 'top';document.getElementById('u707_img').tabIndex = 0;
HookHover('u707', false);

u707.style.cursor = 'pointer';
$axure.eventManager.click('u707', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u513', '15');

	var obj1 = document.getElementById("u517");
    obj1.focus();

}
});
gv_vAlignTable['u304'] = 'top';
$axure.eventManager.focus('u523', function(e) {

if ((GetSelectedOption('u511')) == ('February')) {

SetSelectedOption('u511', 'January');

}

if ((GetSelectedOption('u511')) == ('March')) {

SetSelectedOption('u511', 'February');

}

if ((GetSelectedOption('u511')) == ('April')) {

SetSelectedOption('u511', 'March');

}

if ((GetSelectedOption('u511')) == ('May')) {

SetSelectedOption('u511', 'April');

}

if ((GetSelectedOption('u511')) == ('June')) {

SetSelectedOption('u511', 'May');

}

if ((GetSelectedOption('u511')) == ('July')) {

SetSelectedOption('u511', 'June');

}

if ((GetSelectedOption('u511')) == ('August')) {

SetSelectedOption('u511', 'July');

}

if ((GetSelectedOption('u511')) == ('September')) {

SetSelectedOption('u511', 'August');

}

if ((GetSelectedOption('u511')) == ('October')) {

SetSelectedOption('u511', 'September');

}

if ((GetSelectedOption('u511')) == ('November')) {

SetSelectedOption('u511', 'October');

}

if ((GetSelectedOption('u511')) == ('December')) {

SetSelectedOption('u511', 'November');

}

if (true) {

	var obj1 = document.getElementById("u573");
    obj1.focus();

}
});
gv_vAlignTable['u398'] = 'center';gv_vAlignTable['u767'] = 'center';document.getElementById('u120_img').tabIndex = 0;

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
gv_vAlignTable['u145'] = 'center';gv_vAlignTable['u516'] = 'top';gv_vAlignTable['u735'] = 'center';document.getElementById('u705_img').tabIndex = 0;
HookHover('u705', false);

u705.style.cursor = 'pointer';
$axure.eventManager.click('u705', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u513', '08');

	var obj1 = document.getElementById("u517");
    obj1.focus();

}
});
gv_vAlignTable['u332'] = 'top';
$axure.eventManager.focus('u551', function(e) {

if (IsValueOneOf(GetWidgetText('u512'), ['2009', '2015', '2020', '2026'])) {

SetWidgetFormText('u565', '1');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u512'), ['2004', '2010', '2021', '2027'])) {

SetWidgetFormText('u565', '2');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u512'), ['2005', '2011', '2016', '2022'])) {

SetWidgetFormText('u565', '3');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u512'), ['2000', '2006', '2017', '2023', '2028'])) {

SetWidgetFormText('u565', '4');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u512'), ['2001', '2007', '2012', '2018', '2029'])) {

SetWidgetFormText('u565', '5');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u512'), ['2002', '2013', '2019', '2024', '2030'])) {

SetWidgetFormText('u565', '6');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u512'), ['2003', '2008', '2014', '2025'])) {

SetWidgetFormText('u565', '7');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
});
gv_vAlignTable['u576'] = 'top';gv_vAlignTable['u139'] = 'center';gv_vAlignTable['u358'] = 'top';gv_vAlignTable['u173'] = 'top';gv_vAlignTable['u544'] = 'top';document.getElementById('u763_img').tabIndex = 0;
HookHover('u763', false);

u763.style.cursor = 'pointer';
$axure.eventManager.click('u763', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u513', '28');

	var obj1 = document.getElementById("u517");
    obj1.focus();

}
});
gv_vAlignTable['u360'] = 'top';gv_vAlignTable['u731'] = 'center';gv_vAlignTable['u538'] = 'top';gv_vAlignTable['u556'] = 'top';gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u572'] = 'top';gv_vAlignTable['u70'] = 'center';gv_vAlignTable['u76'] = 'center';document.getElementById('u718_img').tabIndex = 0;
HookHover('u718', false);

u718.style.cursor = 'pointer';
$axure.eventManager.click('u718', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u513', '23');

	var obj1 = document.getElementById("u517");
    obj1.focus();

}
});

$axure.eventManager.focus('u559', function(e) {

if (IsValueOneOf(GetWidgetText('u512'), ['2004', '2010', '2021', '2027'])) {

SetWidgetFormText('u565', '1');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u512'), ['2005', '2011', '2016', '2022'])) {

SetWidgetFormText('u565', '2');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u512'), ['2000', '2006', '2017', '2023', '2028'])) {

SetWidgetFormText('u565', '3');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u512'), ['2001', '2007', '2012', '2018', '2029'])) {

SetWidgetFormText('u565', '4');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u512'), ['2002', '2013', '2019', '2024', '2030'])) {

SetWidgetFormText('u565', '5');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u512'), ['2003', '2008', '2014', '2025'])) {

SetWidgetFormText('u565', '6');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u512'), ['2009', '2015', '2020', '2026'])) {

SetWidgetFormText('u565', '7');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
});
gv_vAlignTable['u778'] = 'top';gv_vAlignTable['u35'] = 'top';gv_vAlignTable['u287'] = 'top';document.getElementById('u826_img').tabIndex = 0;

u826.style.cursor = 'pointer';
$axure.eventManager.click('u826', function(e) {

if (true) {

	SetPanelVisibility('u804','hidden','fade',500);

}
});
gv_vAlignTable['u1'] = 'center';document.getElementById('u686_img').tabIndex = 0;
HookHover('u686', false);

u686.style.cursor = 'pointer';
$axure.eventManager.click('u686', function(e) {

if (true) {

	var obj1 = document.getElementById("u533");
    obj1.focus();

}
});
gv_vAlignTable['u283'] = 'top';gv_vAlignTable['u847'] = 'top';gv_vAlignTable['u815'] = 'top';document.getElementById('u682_img').tabIndex = 0;

u682.style.cursor = 'pointer';
$axure.eventManager.click('u682', function(e) {

if (true) {

	var obj1 = document.getElementById("u533");
    obj1.focus();

}
});
gv_vAlignTable['u850'] = 'top';gv_vAlignTable['u770'] = 'center';gv_vAlignTable['u875'] = 'center';gv_vAlignTable['u211'] = 'top';gv_vAlignTable['u809'] = 'top';gv_vAlignTable['u236'] = 'top';gv_vAlignTable['u843'] = 'top';gv_vAlignTable['u610'] = 'top';gv_vAlignTable['u264'] = 'top';gv_vAlignTable['u704'] = 'center';gv_vAlignTable['u232'] = 'top';
$axure.eventManager.focus('u257', function(e) {

if (IsValueOneOf(GetWidgetText('u216'), ['2001', '2007', '2012', '2018', '2029'])) {

SetWidgetFormText('u269', '1');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u216'), ['2002', '2013', '2019', '2024', '2030'])) {

SetWidgetFormText('u269', '2');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u216'), ['2003', '2008', '2014', '2025'])) {

SetWidgetFormText('u269', '3');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u216'), ['2009', '2015', '2020', '2026'])) {

SetWidgetFormText('u269', '4');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u216'), ['2004', '2010', '2021', '2027'])) {

SetWidgetFormText('u269', '5');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u216'), ['2005', '2011', '2016', '2022'])) {

SetWidgetFormText('u269', '6');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u216'), ['2000', '2006', '2017', '2023', '2028'])) {

SetWidgetFormText('u269', '7');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
});
document.getElementById('u476_img').tabIndex = 0;
HookHover('u476', false);

u476.style.cursor = 'pointer';
$axure.eventManager.click('u476', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u217', '31');

	var obj1 = document.getElementById("u221");
    obj1.focus();

}
});

$axure.eventManager.focus('u502', function(e) {

if (true) {

SetSelectedOption('u511', GetSelectedOption('u497'));

SetWidgetFormText('u512', GetSelectedOption('u498'));

	var obj1 = document.getElementById("u573");
    obj1.focus();

}
});
gv_vAlignTable['u258'] = 'top';gv_vAlignTable['u444'] = 'center';gv_vAlignTable['u260'] = 'top';gv_vAlignTable['u656'] = 'top';
$axure.eventManager.focus('u219', function(e) {

if ((GetWidgetText('u216')) == ('2000')) {

SetWidgetFormText('u205', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2000');

}

if ((GetWidgetText('u216')) == ('2001')) {

SetWidgetFormText('u205', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2001');

}

if ((GetWidgetText('u216')) == ('2002')) {

SetWidgetFormText('u205', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2002');

}

if ((GetWidgetText('u216')) == ('2003')) {

SetWidgetFormText('u205', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2003');

}

if ((GetWidgetText('u216')) == ('2004')) {

SetWidgetFormText('u205', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2004');

}

if ((GetWidgetText('u216')) == ('2005')) {

SetWidgetFormText('u205', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2005');

}

if ((GetWidgetText('u216')) == ('2006')) {

SetWidgetFormText('u205', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2006');

}

if ((GetWidgetText('u216')) == ('2007')) {

SetWidgetFormText('u205', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2007');

}

if ((GetWidgetText('u216')) == ('2008')) {

SetWidgetFormText('u205', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2008');

}

if ((GetWidgetText('u216')) == ('2009')) {

SetWidgetFormText('u205', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2009');

}

if ((GetWidgetText('u216')) == ('2010')) {

SetWidgetFormText('u205', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2010');

}

if ((GetWidgetText('u216')) == ('2011')) {

SetWidgetFormText('u205', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2011');

}

if ((GetWidgetText('u216')) == ('2012')) {

SetWidgetFormText('u205', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2012');

}

if ((GetWidgetText('u216')) == ('2013')) {

SetWidgetFormText('u205', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2013');

}

if ((GetWidgetText('u216')) == ('2014')) {

SetWidgetFormText('u205', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2014');

}

if ((GetWidgetText('u216')) == ('2015')) {

SetWidgetFormText('u205', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2015');

}

if ((GetWidgetText('u216')) == ('2016')) {

SetWidgetFormText('u205', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2016');

}

if ((GetWidgetText('u216')) == ('2017')) {

SetWidgetFormText('u205', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2017');

}

if ((GetWidgetText('u216')) == ('2018')) {

SetWidgetFormText('u205', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2018');

}

if ((GetWidgetText('u216')) == ('2019')) {

SetWidgetFormText('u205', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2019');

}

if ((GetWidgetText('u216')) == ('2020')) {

SetWidgetFormText('u205', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2020');

}

if ((GetWidgetText('u216')) == ('2021')) {

SetWidgetFormText('u205', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2021');

}

if ((GetWidgetText('u216')) == ('2022')) {

SetWidgetFormText('u205', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2022');

}

if ((GetWidgetText('u216')) == ('2023')) {

SetWidgetFormText('u205', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2023');

}

if ((GetWidgetText('u216')) == ('2024')) {

SetWidgetFormText('u205', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2024');

}

if ((GetWidgetText('u216')) == ('2025')) {

SetWidgetFormText('u205', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2025');

}

if ((GetWidgetText('u216')) == ('2026')) {

SetWidgetFormText('u205', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2026');

}

if ((GetWidgetText('u216')) == ('2027')) {

SetWidgetFormText('u205', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2027');

}

if ((GetWidgetText('u216')) == ('2028')) {

SetWidgetFormText('u205', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2028');

}

if ((GetWidgetText('u216')) == ('2029')) {

SetWidgetFormText('u205', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2029');

}

if ((GetWidgetText('u216')) == ('2030')) {

SetWidgetFormText('u205', '' + (GetGlobalVariableValue('OnLoadVariable')) + '/2030');

}

if (true) {

SetGlobalVariableValue('OnLoadVariable', GetWidgetText('u218'));

}

if (true) {

rdo2OnDateSelection(e);

}
});
document.getElementById('u438_img').tabIndex = 0;
HookHover('u438', false);

u438.style.cursor = 'pointer';
$axure.eventManager.click('u438', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u217', '18');

	var obj1 = document.getElementById("u221");
    obj1.focus();

}
});
gv_vAlignTable['u279'] = 'top';gv_vAlignTable['u618'] = 'top';gv_vAlignTable['u459'] = 'center';gv_vAlignTable['u678'] = 'top';u25.tabIndex = 0;

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
gv_vAlignTable['u25'] = 'top';
$axure.eventManager.focus('u227', function(e) {

if ((GetSelectedOption('u215')) == ('February')) {

SetSelectedOption('u215', 'January');

}

if ((GetSelectedOption('u215')) == ('March')) {

SetSelectedOption('u215', 'February');

}

if ((GetSelectedOption('u215')) == ('April')) {

SetSelectedOption('u215', 'March');

}

if ((GetSelectedOption('u215')) == ('May')) {

SetSelectedOption('u215', 'April');

}

if ((GetSelectedOption('u215')) == ('June')) {

SetSelectedOption('u215', 'May');

}

if ((GetSelectedOption('u215')) == ('July')) {

SetSelectedOption('u215', 'June');

}

if ((GetSelectedOption('u215')) == ('August')) {

SetSelectedOption('u215', 'July');

}

if ((GetSelectedOption('u215')) == ('September')) {

SetSelectedOption('u215', 'August');

}

if ((GetSelectedOption('u215')) == ('October')) {

SetSelectedOption('u215', 'September');

}

if ((GetSelectedOption('u215')) == ('November')) {

SetSelectedOption('u215', 'October');

}

if ((GetSelectedOption('u215')) == ('December')) {

SetSelectedOption('u215', 'November');

}

if (true) {

	var obj1 = document.getElementById("u277");
    obj1.focus();

}
});
gv_vAlignTable['u606'] = 'top';gv_vAlignTable['u190'] = 'center';document.getElementById('u709_img').tabIndex = 0;
HookHover('u709', false);

u709.style.cursor = 'pointer';
$axure.eventManager.click('u709', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u513', '22');

	var obj1 = document.getElementById("u517");
    obj1.focus();

}
});
document.getElementById('u395_img').tabIndex = 0;

u395.style.cursor = 'pointer';
$axure.eventManager.click('u395', function(e) {

if (true) {

	var obj1 = document.getElementById("u231");
    obj1.focus();

}
});
gv_vAlignTable['u582'] = 'top';gv_vAlignTable['u389'] = 'center';document.getElementById('u136_img').tabIndex = 0;

u136.style.cursor = 'pointer';
$axure.eventManager.click('u136', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Reports.html');

}
});
gv_vAlignTable['u507'] = 'top';gv_vAlignTable['u726'] = 'center';gv_vAlignTable['u104'] = 'center';gv_vAlignTable['u198'] = 'center';gv_vAlignTable['u567'] = 'top';gv_vAlignTable['u510'] = 'top';gv_vAlignTable['u164'] = 'center';
$axure.eventManager.focus('u535', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

	SetPanelVisibility('u681','','none',500);

	SetPanelVisibility('u688','','none',500);

	SetPanelVisibility('u695','','none',500);

	SetPanelVisibility('u698','','none',500);

}

if (((GetSelectedOption('u511')) == ('January')) && ((GetWidgetText('u512')) == (GetSelectedOption('u499')))) {

	SetPanelVisibility('u688','hidden','none',500);

}

if (((GetSelectedOption('u511')) == ('December')) && ((GetWidgetText('u512')) == (GetSelectedOption('u500')))) {

	SetPanelVisibility('u681','hidden','none',500);

}

if ((GetWidgetText('u512')) == (GetSelectedOption('u499'))) {

	SetPanelVisibility('u695','hidden','none',500);

}

if ((GetWidgetText('u512')) == (GetSelectedOption('u500'))) {

	SetPanelVisibility('u698','hidden','none',500);

}
});
document.getElementById('u754_img').tabIndex = 0;
HookHover('u754', false);

u754.style.cursor = 'pointer';
$axure.eventManager.click('u754', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u513', '27');

	var obj1 = document.getElementById("u517");
    obj1.focus();

}
});
document.getElementById('u132_img').tabIndex = 0;

u132.style.cursor = 'pointer';
$axure.eventManager.click('u132', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Automate_measure_Calculation.html');

}
});
gv_vAlignTable['u376'] = 'top';gv_vAlignTable['u158'] = 'center';
$axure.eventManager.focus('u529', function(e) {

if (true) {

SetSelectedOption('u511', 'January');

	var obj1 = document.getElementById("u521");
    obj1.focus();

}
});
gv_vAlignTable['u344'] = 'top';
$axure.eventManager.focus('u563', function(e) {

if (IsValueOneOf(GetWidgetText('u512'), ['2000', '2006', '2017', '2023', '2028'])) {

SetWidgetFormText('u565', '1');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u512'), ['2001', '2007', '2012', '2018', '2029'])) {

SetWidgetFormText('u565', '2');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u512'), ['2002', '2013', '2019', '2024', '2030'])) {

SetWidgetFormText('u565', '3');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u512'), ['2003', '2008', '2014', '2025'])) {

SetWidgetFormText('u565', '4');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u512'), ['2009', '2015', '2020', '2026'])) {

SetWidgetFormText('u565', '5');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u512'), ['2004', '2010', '2021', '2027'])) {

SetWidgetFormText('u565', '6');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u512'), ['2005', '2011', '2016', '2022'])) {

SetWidgetFormText('u565', '7');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
});
gv_vAlignTable['u160'] = 'center';
$axure.eventManager.focus('u531', function(e) {

if ((GetSelectedOption('u511')) == ('November')) {

SetSelectedOption('u511', 'December');

}

if ((GetSelectedOption('u511')) == ('October')) {

SetSelectedOption('u511', 'November');

}

if ((GetSelectedOption('u511')) == ('September')) {

SetSelectedOption('u511', 'October');

}

if ((GetSelectedOption('u511')) == ('August')) {

SetSelectedOption('u511', 'September');

}

if ((GetSelectedOption('u511')) == ('July')) {

SetSelectedOption('u511', 'August');

}

if ((GetSelectedOption('u511')) == ('June')) {

SetSelectedOption('u511', 'July');

}

if ((GetSelectedOption('u511')) == ('May')) {

SetSelectedOption('u511', 'June');

}

if ((GetSelectedOption('u511')) == ('April')) {

SetSelectedOption('u511', 'May');

}

if ((GetSelectedOption('u511')) == ('March')) {

SetSelectedOption('u511', 'April');

}

if ((GetSelectedOption('u511')) == ('February')) {

SetSelectedOption('u511', 'March');

}

if ((GetSelectedOption('u511')) == ('January')) {

SetSelectedOption('u511', 'February');

}

if (true) {

	var obj1 = document.getElementById("u573");
    obj1.focus();

}
});
document.getElementById('u750_img').tabIndex = 0;
HookHover('u750', false);

u750.style.cursor = 'pointer';
$axure.eventManager.click('u750', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u513', '13');

	var obj1 = document.getElementById("u517");
    obj1.focus();

}
});
gv_vAlignTable['u40'] = 'top';gv_vAlignTable['u338'] = 'top';gv_vAlignTable['u372'] = 'top';gv_vAlignTable['u179'] = 'top';document.getElementById('u769_img').tabIndex = 0;
HookHover('u769', false);

u769.style.cursor = 'pointer';
$axure.eventManager.click('u769', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u513', '30');

	var obj1 = document.getElementById("u517");
    obj1.focus();

}
});
document.getElementById('u56_img').tabIndex = 0;

u56.style.cursor = 'pointer';
$axure.eventManager.click('u56', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('UserRights.html');

}
});
gv_vAlignTable['u518'] = 'top';
$axure.eventManager.keyup('u885', function(e) {

if ((GetWidgetText('u885')) != ('')) {

	SetPanelVisibility('u873','','fade',500);

}
else
if ((GetWidgetText('u885')) == ('')) {

	SetPanelVisibility('u873','hidden','fade',500);

}
});

$axure.eventManager.focus('u885', function(e) {

if (true) {

SetWidgetFormText('u885', '');

}
});

$axure.eventManager.blur('u885', function(e) {

if (true) {

SetWidgetFormText('u885', 'Search');

}
});

$axure.eventManager.mouseover('u8', function(e) {
if (!IsTrueMouseOver('u8',e)) return;
if (true) {

	SetPanelVisibility('u17','','none',500);

	BringToFront("u17");

}
});
gv_vAlignTable['u8'] = 'top';gv_vAlignTable['u578'] = 'top';gv_vAlignTable['u15'] = 'top';gv_vAlignTable['u74'] = 'center';
u191.style.cursor = 'pointer';
$axure.eventManager.click('u191', function(e) {

if (true) {

	SetPanelVisibility('u804','','fade',500);
function waitucb6a0e3d5c0d42f3b182bbfea478a4cc1() {

	SetPanelVisibility('u830','','fade',500);
function waitu480c4b5d8ff245af85e4894bd572d8da1() {

	SetPanelVisibility('u830','hidden','fade',500);
}
setTimeout(waitu480c4b5d8ff245af85e4894bd572d8da1, 3000);
}
setTimeout(waitucb6a0e3d5c0d42f3b182bbfea478a4cc1, 1000);

}
});
document.getElementById('u881_img').tabIndex = 0;

u881.style.cursor = 'pointer';
$axure.eventManager.click('u881', function(e) {

if (true) {

SetWidgetFormText('u182', '144');

SetWidgetFormText('u187', 'influenza, seasonal, intradermal, preservative free');

	SetPanelVisibility('u834','hidden','fade',500);

}
});
gv_vAlignTable['u813'] = 'top';
$axure.eventManager.click('u486', function(e) {

if (true) {

SetWidgetFormText('u288', '' + (GetGlobalVariableValue('Day')) + '');

SetWidgetFormText('u289', '' + (GetGlobalVariableValue('MonthName')) + '');

SetWidgetFormText('u290', '' + (GetGlobalVariableValue('Year')) + '');

SetWidgetFormText('u200', GetWidgetText('u288'));

SetSelectedOption('u201', GetWidgetText('u289'));

SetSelectedOption('u202', GetWidgetText('u290'));

	var obj1 = document.getElementById("u206");
    obj1.focus();

}
});

$axure.eventManager.click('u486', function(e) {

if (true) {

SetWidgetFormText('u288', '' + (GetGlobalVariableValue('Day')) + '');

SetWidgetFormText('u289', '' + (GetGlobalVariableValue('MonthName')) + '');

SetWidgetFormText('u290', '' + (GetGlobalVariableValue('Year')) + '');

SetWidgetFormText('u200', GetWidgetText('u288'));

SetSelectedOption('u201', GetWidgetText('u289'));

SetSelectedOption('u202', GetWidgetText('u290'));

	var obj1 = document.getElementById("u206");
    obj1.focus();

}
});

$axure.eventManager.click('u486', function(e) {

if (true) {

SetWidgetFormText('u288', '' + (GetGlobalVariableValue('Day')) + '');

SetWidgetFormText('u289', '' + (GetGlobalVariableValue('MonthName')) + '');

SetWidgetFormText('u290', '' + (GetGlobalVariableValue('Year')) + '');

SetWidgetFormText('u200', GetWidgetText('u288'));

SetSelectedOption('u201', GetWidgetText('u289'));

SetSelectedOption('u202', GetWidgetText('u290'));

	var obj1 = document.getElementById("u206");
    obj1.focus();

}
});
gv_vAlignTable['u841'] = 'top';gv_vAlignTable['u295'] = 'center';gv_vAlignTable['u482'] = 'top';gv_vAlignTable['u121'] = 'center';
$axure.eventManager.focus('u527', function(e) {

if ((GetSelectedOption('u511')) == ('January')) {

	var obj1 = document.getElementById("u525");
    obj1.focus();

}
else
if (true) {

	var obj1 = document.getElementById("u523");
    obj1.focus();

}
});
gv_vAlignTable['u694'] = 'center';document.getElementById('u828_img').tabIndex = 0;

u828.style.cursor = 'pointer';
$axure.eventManager.click('u828', function(e) {

if (true) {

SetWidgetFormText('u182', '136');

SetWidgetFormText('u488', '05/14/2013');

SetWidgetFormText('u192', '05/14/2015');

SetWidgetFormText('u187', 'Meningococcal conjugate vaccine, serogroups A, C, Y and W-135 (tetravalent), for intramuscular use');

SetWidgetFormText('u184', '1458');

SetWidgetFormText('u183', '5');

SetSelectedOption('u186', 'ml');

SetSelectedOption('u185', 'Abott Laboratories');

SetWidgetFormText('u188', 'CBX421');

}
});
document.getElementById('u407_img').tabIndex = 0;
HookHover('u407', false);

u407.style.cursor = 'pointer';
$axure.eventManager.click('u407', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u217', '01');

	var obj1 = document.getElementById("u221");
    obj1.focus();

}
});
gv_vAlignTable['u626'] = 'top';gv_vAlignTable['u862'] = 'top';
$axure.eventManager.focus('u223', function(e) {

if ((GetWidgetText('u216')) == ('2001')) {

SetWidgetFormText('u216', '2000');

}

if ((GetWidgetText('u216')) == ('2002')) {

SetWidgetFormText('u216', '2001');

}

if ((GetWidgetText('u216')) == ('2003')) {

SetWidgetFormText('u216', '2002');

}

if ((GetWidgetText('u216')) == ('2004')) {

SetWidgetFormText('u216', '2003');

}

if ((GetWidgetText('u216')) == ('2005')) {

SetWidgetFormText('u216', '2004');

}

if ((GetWidgetText('u216')) == ('2006')) {

SetWidgetFormText('u216', '2005');

}

if ((GetWidgetText('u216')) == ('2007')) {

SetWidgetFormText('u216', '2006');

}

if ((GetWidgetText('u216')) == ('2008')) {

SetWidgetFormText('u216', '2007');

}

if ((GetWidgetText('u216')) == ('2009')) {

SetWidgetFormText('u216', '2008');

}

if ((GetWidgetText('u216')) == ('2010')) {

SetWidgetFormText('u216', '2009');

}

if ((GetWidgetText('u216')) == ('2011')) {

SetWidgetFormText('u216', '2010');

}

if ((GetWidgetText('u216')) == ('2012')) {

SetWidgetFormText('u216', '2011');

}

if ((GetWidgetText('u216')) == ('2013')) {

SetWidgetFormText('u216', '2012');

}

if ((GetWidgetText('u216')) == ('2014')) {

SetWidgetFormText('u216', '2013');

}

if ((GetWidgetText('u216')) == ('2015')) {

SetWidgetFormText('u216', '2014');

}

if ((GetWidgetText('u216')) == ('2016')) {

SetWidgetFormText('u216', '2015');

}

if ((GetWidgetText('u216')) == ('2017')) {

SetWidgetFormText('u216', '2016');

}

if ((GetWidgetText('u216')) == ('2018')) {

SetWidgetFormText('u216', '2017');

}

if ((GetWidgetText('u216')) == ('2019')) {

SetWidgetFormText('u216', '2018');

}

if ((GetWidgetText('u216')) == ('2020')) {

SetWidgetFormText('u216', '2019');

}

if ((GetWidgetText('u216')) == ('2021')) {

SetWidgetFormText('u216', '2020');

}

if ((GetWidgetText('u216')) == ('2022')) {

SetWidgetFormText('u216', '2021');

}

if ((GetWidgetText('u216')) == ('2023')) {

SetWidgetFormText('u216', '2022');

}

if ((GetWidgetText('u216')) == ('2024')) {

SetWidgetFormText('u216', '2023');

}

if ((GetWidgetText('u216')) == ('2025')) {

SetWidgetFormText('u216', '2024');

}

if ((GetWidgetText('u216')) == ('2026')) {

SetWidgetFormText('u216', '2025');

}

if ((GetWidgetText('u216')) == ('2027')) {

SetWidgetFormText('u216', '2026');

}

if ((GetWidgetText('u216')) == ('2028')) {

SetWidgetFormText('u216', '2027');

}

if ((GetWidgetText('u216')) == ('2029')) {

SetWidgetFormText('u216', '2028');

}

if ((GetWidgetText('u216')) == ('2030')) {

SetWidgetFormText('u216', '2029');

}

if (true) {

	var obj1 = document.getElementById("u277");
    obj1.focus();

}
});
document.getElementById('u467_img').tabIndex = 0;
HookHover('u467', false);

u467.style.cursor = 'pointer';
$axure.eventManager.click('u467', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u217', '28');

	var obj1 = document.getElementById("u221");
    obj1.focus();

}
});
gv_vAlignTable['u254'] = 'top';document.getElementById('u855_img').tabIndex = 0;

u855.style.cursor = 'pointer';
$axure.eventManager.click('u855', function(e) {

if (true) {

SetWidgetFormText('u182', '144');

SetWidgetFormText('u187', '  influenza, seasonal, intradermal, preservative free ');

	SetPanelVisibility('u834','hidden','fade',500);

}
});
gv_vAlignTable['u410'] = 'center';gv_vAlignTable['u435'] = 'center';gv_vAlignTable['u654'] = 'top';document.getElementById('u403_img').tabIndex = 0;
HookHover('u403', false);

u403.style.cursor = 'pointer';
$axure.eventManager.click('u403', function(e) {

if (true) {

	var obj1 = document.getElementById("u225");
    obj1.focus();

}
});
gv_vAlignTable['u622'] = 'top';gv_vAlignTable['u276'] = 'top';document.getElementById('u429_img').tabIndex = 0;
HookHover('u429', false);

u429.style.cursor = 'pointer';
$axure.eventManager.click('u429', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u217', '17');

	var obj1 = document.getElementById("u221");
    obj1.focus();

}
});
gv_vAlignTable['u244'] = 'top';gv_vAlignTable['u503'] = 'top';document.getElementById('u879_img').tabIndex = 0;

u879.style.cursor = 'pointer';
$axure.eventManager.click('u879', function(e) {

if (true) {

SetWidgetFormText('u182', '144');

SetWidgetFormText('u187', 'influenza, seasonal, intradermal, preservative free');

	SetPanelVisibility('u834','hidden','fade',500);

}
});
document.getElementById('u431_img').tabIndex = 0;
HookHover('u431', false);

u431.style.cursor = 'pointer';
$axure.eventManager.click('u431', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u217', '24');

	var obj1 = document.getElementById("u221");
    obj1.focus();

}
});
gv_vAlignTable['u650'] = 'top';document.getElementById('u456_img').tabIndex = 0;
HookHover('u456', false);

u456.style.cursor = 'pointer';
$axure.eventManager.click('u456', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u217', '20');

	var obj1 = document.getElementById("u221");
    obj1.focus();

}
});
gv_vAlignTable['u238'] = 'top';document.getElementById('u82_img').tabIndex = 0;

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
document.getElementById('u418_img').tabIndex = 0;
HookHover('u418', false);

u418.style.cursor = 'pointer';
$axure.eventManager.click('u418', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u217', '09');

	var obj1 = document.getElementById("u221");
    obj1.focus();

}
});

$axure.eventManager.focus('u259', function(e) {

if (IsValueOneOf(GetWidgetText('u216'), ['2005', '2011', '2016', '2022'])) {

SetWidgetFormText('u269', '1');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u216'), ['2000', '2006', '2017', '2023', '2028'])) {

SetWidgetFormText('u269', '2');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u216'), ['2001', '2007', '2012', '2018', '2029'])) {

SetWidgetFormText('u269', '3');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u216'), ['2002', '2013', '2019', '2024', '2030'])) {

SetWidgetFormText('u269', '4');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u216'), ['2003', '2008', '2014', '2025'])) {

SetWidgetFormText('u269', '5');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u216'), ['2009', '2015', '2020', '2026'])) {

SetWidgetFormText('u269', '6');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u216'), ['2004', '2010', '2021', '2027'])) {

SetWidgetFormText('u269', '7');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
});
gv_vAlignTable['u478'] = 'top';gv_vAlignTable['u64'] = 'center';document.getElementById('u727_img').tabIndex = 0;
HookHover('u727', false);

u727.style.cursor = 'pointer';
$axure.eventManager.click('u727', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u513', '24');

	var obj1 = document.getElementById("u517");
    obj1.focus();

}
});
document.getElementById('u386_img').tabIndex = 0;

u386.style.cursor = 'pointer';
$axure.eventManager.click('u386', function(e) {

if (true) {

	var obj1 = document.getElementById("u237");
    obj1.focus();

}
});
gv_vAlignTable['u821'] = 'top';gv_vAlignTable['u811'] = 'top';gv_vAlignTable['u785'] = 'top';gv_vAlignTable['u382'] = 'top';document.getElementById('u189_img').tabIndex = 0;

u189.style.cursor = 'pointer';
$axure.eventManager.click('u189', function(e) {

if (true) {

	SetPanelVisibility('u834','','fade',500);

}
});
gv_vAlignTable['u99'] = 'center';gv_vAlignTable['u526'] = 'top';u781.tabIndex = 0;

u781.style.cursor = 'pointer';
$axure.eventManager.click('u781', function(e) {

if (true) {

rdo3OnCalendarClose(e);

}
});
gv_vAlignTable['u781'] = 'top';gv_vAlignTable['u123'] = 'center';gv_vAlignTable['u713'] = 'center';gv_vAlignTable['u310'] = 'top';gv_vAlignTable['u116'] = 'center';gv_vAlignTable['u554'] = 'top';gv_vAlignTable['u880'] = 'top';document.getElementById('u703_img').tabIndex = 0;
HookHover('u703', false);

u703.style.cursor = 'pointer';
$axure.eventManager.click('u703', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u513', '01');

	var obj1 = document.getElementById("u517");
    obj1.focus();

}
});
gv_vAlignTable['u522'] = 'top';gv_vAlignTable['u176'] = 'top';
$axure.eventManager.focus('u547', function(e) {

if (IsValueOneOf(GetWidgetText('u512'), ['2006', '2012', '2017', '2023'])) {

SetWidgetFormText('u565', '1');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u512'), ['2001', '2007', '2018', '2024', '2029'])) {

SetWidgetFormText('u565', '2');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u512'), ['2002', '2008', '2013', '2019', '2030'])) {

SetWidgetFormText('u565', '3');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u512'), ['2003', '2014', '2020', '2025'])) {

SetWidgetFormText('u565', '4');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u512'), ['2004', '2009', '2015', '2026'])) {

SetWidgetFormText('u565', '5');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u512'), ['2010', '2016', '2021', '2027'])) {

SetWidgetFormText('u565', '6');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u512'), ['2000', '2005', '2011', '2022', '2028'])) {

SetWidgetFormText('u565', '7');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
});
document.getElementById('u766_img').tabIndex = 0;
HookHover('u766', false);

u766.style.cursor = 'pointer';
$axure.eventManager.click('u766', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u513', '29');

	var obj1 = document.getElementById("u517");
    obj1.focus();

}
});
document.getElementById('u144_img').tabIndex = 0;

u144.style.cursor = 'pointer';
$axure.eventManager.click('u144', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Intigrity.html');

}
});
document.getElementById('u734_img').tabIndex = 0;
HookHover('u734', false);

u734.style.cursor = 'pointer';
$axure.eventManager.click('u734', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u513', '18');

	var obj1 = document.getElementById("u517");
    obj1.focus();

}
});
gv_vAlignTable['u550'] = 'top';gv_vAlignTable['u356'] = 'top';gv_vAlignTable['u575'] = 'top';document.getElementById('u138_img').tabIndex = 0;

u138.style.cursor = 'pointer';
$axure.eventManager.click('u138', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ListDisclosure.html');

}
});
gv_vAlignTable['u509'] = 'top';gv_vAlignTable['u728'] = 'center';
$axure.eventManager.focus('u543', function(e) {

if ((GetWidgetText('u568')) == ('28')) {

	SetPanelVisibility('u765','hidden','none',500);

	SetPanelVisibility('u768','hidden','none',500);

	SetPanelVisibility('u771','hidden','none',500);

}

if ((GetWidgetText('u568')) == ('29')) {

	SetPanelVisibility('u765','','none',500);

	SetPanelVisibility('u768','hidden','none',500);

	SetPanelVisibility('u771','hidden','none',500);

}

if ((GetWidgetText('u568')) == ('30')) {

	SetPanelVisibility('u765','','none',500);

	SetPanelVisibility('u768','','none',500);

	SetPanelVisibility('u771','hidden','none',500);

}

if ((GetWidgetText('u568')) == ('31')) {

	SetPanelVisibility('u765','','none',500);

	SetPanelVisibility('u768','','none',500);

	SetPanelVisibility('u771','','none',500);

}

if (true) {

	var obj1 = document.getElementById("u541");
    obj1.focus();

}
});
gv_vAlignTable['u762'] = 'center';
$axure.eventManager.focus('u569', function(e) {

if (IsValueOneOf(GetSelectedOption('u511'), ['January', 'March', 'May', 'July', 'August', 'October', 'December'])) {

SetWidgetFormText('u568', '31');

}

if (IsValueOneOf(GetSelectedOption('u511'), ['April', 'June', 'September', 'November'])) {

SetWidgetFormText('u568', '30');

}

if ((GetSelectedOption('u511')) == ('February')) {

SetWidgetFormText('u568', '28');

}

if (((GetSelectedOption('u511')) == ('February')) && (IsValueOneOf(GetWidgetText('u512'), ['2000', '2004', '2008', '2012', '2016', '2020', '2024', '2028']))) {

SetWidgetFormText('u568', '29');

}

if (true) {

	var obj1 = document.getElementById("u566");
    obj1.focus();

}
});
document.getElementById('u730_img').tabIndex = 0;
HookHover('u730', false);

u730.style.cursor = 'pointer';
$axure.eventManager.click('u730', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u513', '04');

	var obj1 = document.getElementById("u517");
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
gv_vAlignTable['u318'] = 'top';
$axure.eventManager.focus('u571', function(e) {

if (true) {

SetWidgetNotSelected('u703');
SetWidgetNotSelected('u705');
SetWidgetNotSelected('u707');
SetWidgetNotSelected('u709');
SetWidgetNotSelected('u712');
SetWidgetNotSelected('u714');
SetWidgetNotSelected('u716');
SetWidgetNotSelected('u718');
SetWidgetNotSelected('u721');
SetWidgetNotSelected('u723');
SetWidgetNotSelected('u725');
SetWidgetNotSelected('u727');
SetWidgetNotSelected('u730');
SetWidgetNotSelected('u732');
SetWidgetNotSelected('u734');
SetWidgetNotSelected('u736');
SetWidgetNotSelected('u739');
SetWidgetNotSelected('u741');
SetWidgetNotSelected('u743');
SetWidgetNotSelected('u745');
SetWidgetNotSelected('u748');
SetWidgetNotSelected('u750');
SetWidgetNotSelected('u752');
SetWidgetNotSelected('u754');
SetWidgetNotSelected('u757');
SetWidgetNotSelected('u759');
SetWidgetNotSelected('u761');
SetWidgetNotSelected('u763');
SetWidgetNotSelected('u766');
SetWidgetNotSelected('u769');
SetWidgetNotSelected('u772');
	var obj1 = document.getElementById("u569");
    obj1.focus();

}
});
gv_vAlignTable['u775'] = 'top';gv_vAlignTable['u378'] = 'top';document.getElementById('u54_img').tabIndex = 0;

u54.style.cursor = 'pointer';
$axure.eventManager.click('u54', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('UserGroupList.html');

}
});
gv_vAlignTable['u72'] = 'center';gv_vAlignTable['u286'] = 'top';gv_vAlignTable['u825'] = 'top';gv_vAlignTable['u685'] = 'center';gv_vAlignTable['u282'] = 'top';gv_vAlignTable['u306'] = 'top';gv_vAlignTable['u89'] = 'center';gv_vAlignTable['u494'] = 'center';gv_vAlignTable['u207'] = 'top';gv_vAlignTable['u426'] = 'center';
$axure.eventManager.focus('u267', function(e) {

if (IsValueOneOf(GetWidgetText('u216'), ['2000', '2006', '2017', '2023', '2028'])) {

SetWidgetFormText('u269', '1');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u216'), ['2001', '2007', '2012', '2018', '2029'])) {

SetWidgetFormText('u269', '2');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u216'), ['2002', '2013', '2019', '2024', '2030'])) {

SetWidgetFormText('u269', '3');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u216'), ['2003', '2008', '2014', '2025'])) {

SetWidgetFormText('u269', '4');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u216'), ['2009', '2015', '2020', '2026'])) {

SetWidgetFormText('u269', '5');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u216'), ['2004', '2010', '2021', '2027'])) {

SetWidgetFormText('u269', '6');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u216'), ['2005', '2011', '2016', '2022'])) {

SetWidgetFormText('u269', '7');

	var obj1 = document.getElementById("u249");
    obj1.focus();

}
});

$axure.eventManager.focus('u210', function(e) {

if (true) {

	SetPanelVisibility('u291','hidden','none',500);

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

$axure.eventManager.focus('u235', function(e) {

if ((GetSelectedOption('u215')) == ('November')) {

SetSelectedOption('u215', 'December');

}

if ((GetSelectedOption('u215')) == ('October')) {

SetSelectedOption('u215', 'November');

}

if ((GetSelectedOption('u215')) == ('September')) {

SetSelectedOption('u215', 'October');

}

if ((GetSelectedOption('u215')) == ('August')) {

SetSelectedOption('u215', 'September');

}

if ((GetSelectedOption('u215')) == ('July')) {

SetSelectedOption('u215', 'August');

}

if ((GetSelectedOption('u215')) == ('June')) {

SetSelectedOption('u215', 'July');

}

if ((GetSelectedOption('u215')) == ('May')) {

SetSelectedOption('u215', 'June');

}

if ((GetSelectedOption('u215')) == ('April')) {

SetSelectedOption('u215', 'May');

}

if ((GetSelectedOption('u215')) == ('March')) {

SetSelectedOption('u215', 'April');

}

if ((GetSelectedOption('u215')) == ('February')) {

SetSelectedOption('u215', 'March');

}

if ((GetSelectedOption('u215')) == ('January')) {

SetSelectedOption('u215', 'February');

}

if (true) {

	var obj1 = document.getElementById("u277");
    obj1.focus();

}
});
document.getElementById('u454_img').tabIndex = 0;
HookHover('u454', false);

u454.style.cursor = 'pointer';
$axure.eventManager.click('u454', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u217', '13');

	var obj1 = document.getElementById("u221");
    obj1.focus();

}
});
document.getElementById('u422_img').tabIndex = 0;
HookHover('u422', false);

u422.style.cursor = 'pointer';
$axure.eventManager.click('u422', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u217', '23');

	var obj1 = document.getElementById("u221");
    obj1.focus();

}
});
document.getElementById('u447_img').tabIndex = 0;
HookHover('u447', false);

u447.style.cursor = 'pointer';
$axure.eventManager.click('u447', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u217', '19');

	var obj1 = document.getElementById("u221");
    obj1.focus();

}
});
gv_vAlignTable['u666'] = 'top';
$axure.eventManager.focus('u229', function(e) {

if (true) {

SetSelectedOption('u215', 'December');

	var obj1 = document.getElementById("u223");
    obj1.focus();

}
});
gv_vAlignTable['u634'] = 'top';gv_vAlignTable['u870'] = 'top';
$axure.eventManager.focus('u231', function(e) {

if ((GetSelectedOption('u215')) == ('January')) {

	var obj1 = document.getElementById("u229");
    obj1.focus();

}
else
if (true) {

	var obj1 = document.getElementById("u227");
    obj1.focus();

}
});
gv_vAlignTable['u602'] = 'top';gv_vAlignTable['u256'] = 'top';document.getElementById('u409_img').tabIndex = 0;
HookHover('u409', false);

u409.style.cursor = 'pointer';
$axure.eventManager.click('u409', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u217', '08');

	var obj1 = document.getElementById("u221");
    obj1.focus();

}
});
gv_vAlignTable['u628'] = 'top';document.getElementById('u443_img').tabIndex = 0;
HookHover('u443', false);

u443.style.cursor = 'pointer';
$axure.eventManager.click('u443', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u217', '05');

	var obj1 = document.getElementById("u221");
    obj1.focus();

}
});
gv_vAlignTable['u662'] = 'top';gv_vAlignTable['u598'] = 'top';gv_vAlignTable['u630'] = 'top';document.getElementById('u473_img').tabIndex = 0;
HookHover('u473', false);

u473.style.cursor = 'pointer';
$axure.eventManager.click('u473', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u217', '30');

	var obj1 = document.getElementById("u221");
    obj1.focus();

}
});
gv_vAlignTable['u471'] = 'center';gv_vAlignTable['u278'] = 'top';gv_vAlignTable['u62'] = 'center';gv_vAlignTable['u464'] = 'center';gv_vAlignTable['u878'] = 'top';gv_vAlignTable['u710'] = 'center';gv_vAlignTable['u16'] = 'top';gv_vAlignTable['u394'] = 'center';document.getElementById('u107_img').tabIndex = 0;

u107.style.cursor = 'pointer';
$axure.eventManager.click('u107', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u326'] = 'top';gv_vAlignTable['u316'] = 'top';gv_vAlignTable['u581'] = 'top';document.getElementById('u388_img').tabIndex = 0;

u388.style.cursor = 'pointer';
$axure.eventManager.click('u388', function(e) {

if (true) {

	var obj1 = document.getElementById("u237");
    obj1.focus();

}
});
gv_vAlignTable['u793'] = 'top';gv_vAlignTable['u135'] = 'center';
$axure.eventManager.focus('u506', function(e) {

if (true) {

	SetPanelVisibility('u587','hidden','none',500);

}
});
document.getElementById('u725_img').tabIndex = 0;
HookHover('u725', false);

u725.style.cursor = 'pointer';
$axure.eventManager.click('u725', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u513', '17');

	var obj1 = document.getElementById("u517");
    obj1.focus();

}
});
gv_vAlignTable['u152'] = 'center';document.getElementById('u103_img').tabIndex = 0;

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
gv_vAlignTable['u322'] = 'top';
$axure.eventManager.focus('u541', function(e) {

if (true) {

SetWidgetFormText('u593', GetSelectedOption('u511'));

SetWidgetFormText('u595', GetWidgetText('u512'));

	var obj1 = document.getElementById("u539");
    obj1.focus();

}
});

$axure.eventManager.focus('u566', function(e) {

if ((GetSelectedOption('u511')) == ('January')) {

	var obj1 = document.getElementById("u547");
    obj1.focus();

}
else
if ((GetSelectedOption('u511')) == ('February')) {

	var obj1 = document.getElementById("u549");
    obj1.focus();

}
else
if (((GetSelectedOption('u511')) == ('March')) || ((GetSelectedOption('u511')) == ('November'))) {

	var obj1 = document.getElementById("u551");
    obj1.focus();

}
else
if (((GetSelectedOption('u511')) == ('April')) || ((GetSelectedOption('u511')) == ('July'))) {

	var obj1 = document.getElementById("u553");
    obj1.focus();

}
else
if ((GetSelectedOption('u511')) == ('May')) {

	var obj1 = document.getElementById("u555");
    obj1.focus();

}
else
if ((GetSelectedOption('u511')) == ('June')) {

	var obj1 = document.getElementById("u557");
    obj1.focus();

}
else
if ((GetSelectedOption('u511')) == ('August')) {

	var obj1 = document.getElementById("u559");
    obj1.focus();

}
else
if (((GetSelectedOption('u511')) == ('September')) || ((GetSelectedOption('u511')) == ('December'))) {

	var obj1 = document.getElementById("u561");
    obj1.focus();

}
else
if ((GetSelectedOption('u511')) == ('October')) {

	var obj1 = document.getElementById("u563");
    obj1.focus();

}
});
gv_vAlignTable['u129'] = 'center';gv_vAlignTable['u93'] = 'center';gv_vAlignTable['u534'] = 'top';gv_vAlignTable['u753'] = 'center';gv_vAlignTable['u724'] = 'center';document.getElementById('u741_img').tabIndex = 0;
HookHover('u741', false);

u741.style.cursor = 'pointer';
$axure.eventManager.click('u741', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u513', '12');

	var obj1 = document.getElementById("u517");
    obj1.focus();

}
});
gv_vAlignTable['u131'] = 'center';gv_vAlignTable['u350'] = 'top';gv_vAlignTable['u156'] = 'center';gv_vAlignTable['u746'] = 'center';gv_vAlignTable['u528'] = 'top';gv_vAlignTable['u10'] = 'top';gv_vAlignTable['u562'] = 'top';gv_vAlignTable['u530'] = 'top';
$axure.eventManager.focus('u555', function(e) {

if (IsValueOneOf(GetWidgetText('u512'), ['2005', '2011', '2016', '2022'])) {

SetWidgetFormText('u565', '1');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u512'), ['2000', '2006', '2017', '2023', '2028'])) {

SetWidgetFormText('u565', '2');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u512'), ['2001', '2007', '2012', '2018', '2029'])) {

SetWidgetFormText('u565', '3');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u512'), ['2002', '2013', '2019', '2024', '2030'])) {

SetWidgetFormText('u565', '4');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u512'), ['2003', '2008', '2014', '2025'])) {

SetWidgetFormText('u565', '5');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u512'), ['2009', '2015', '2020', '2026'])) {

SetWidgetFormText('u565', '6');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u512'), ['2004', '2010', '2021', '2027'])) {

SetWidgetFormText('u565', '7');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
});
gv_vAlignTable['u118'] = 'center';gv_vAlignTable['u708'] = 'center';gv_vAlignTable['u742'] = 'center';gv_vAlignTable['u178'] = 'top';
$axure.eventManager.focus('u549', function(e) {

if (IsValueOneOf(GetWidgetText('u512'), ['2004', '2009', '2015', '2026'])) {

SetWidgetFormText('u565', '1');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u512'), ['2010', '2016', '2021', '2027'])) {

SetWidgetFormText('u565', '2');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u512'), ['2000', '2005', '2011', '2022', '2028'])) {

SetWidgetFormText('u565', '3');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u512'), ['2006', '2012', '2017', '2023'])) {

SetWidgetFormText('u565', '4');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u512'), ['2001', '2007', '2018', '2024', '2029'])) {

SetWidgetFormText('u565', '5');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u512'), ['2002', '2008', '2013', '2019', '2030'])) {

SetWidgetFormText('u565', '6');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u512'), ['2003', '2014', '2020', '2025'])) {

SetWidgetFormText('u565', '7');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
});
document.getElementById('u696_img').tabIndex = 0;
HookHover('u696', false);

u696.style.cursor = 'pointer';
$axure.eventManager.click('u696', function(e) {

if (true) {

	var obj1 = document.getElementById("u519");
    obj1.focus();

}
});

u34.style.cursor = 'pointer';
$axure.eventManager.click('u34', function(e) {

if (true) {

	SetPanelVisibility('u27','hidden','none',500);

SetWidgetRichText('u26', '<p style="text-align:right;"><span style="font-family:Arial;font-size:12px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">( Location B )</span></p>');

SetCheckState('u32', false);

SetCheckState('u36', false);

}
});
gv_vAlignTable['u884'] = 'top';gv_vAlignTable['u177'] = 'top';gv_vAlignTable['u37'] = 'top';document.getElementById('u52_img').tabIndex = 0;

u52.style.cursor = 'pointer';
$axure.eventManager.click('u52', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('UserList.html');

}
});
gv_vAlignTable['u423'] = 'center';gv_vAlignTable['u789'] = 'top';gv_vAlignTable['u837'] = 'top';u485.tabIndex = 0;

u485.style.cursor = 'pointer';
$axure.eventManager.click('u485', function(e) {

if (true) {

rdo2OnCalendarClose(e);

}
});
gv_vAlignTable['u485'] = 'top';gv_vAlignTable['u26'] = 'top';gv_vAlignTable['u474'] = 'center';gv_vAlignTable['u226'] = 'top';gv_vAlignTable['u715'] = 'center';gv_vAlignTable['u833'] = 'top';gv_vAlignTable['u481'] = 'top';document.getElementById('u413_img').tabIndex = 0;
HookHover('u413', false);

u413.style.cursor = 'pointer';
$axure.eventManager.click('u413', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u217', '22');

	var obj1 = document.getElementById("u221");
    obj1.focus();

}
});
gv_vAlignTable['u801'] = 'top';document.getElementById('u693_img').tabIndex = 0;
HookHover('u693', false);

u693.style.cursor = 'pointer';
$axure.eventManager.click('u693', function(e) {

if (true) {

	var obj1 = document.getElementById("u527");
    obj1.focus();

}
});
gv_vAlignTable['u600'] = 'top';gv_vAlignTable['u252'] = 'top';gv_vAlignTable['u222'] = 'top';gv_vAlignTable['u441'] = 'center';
$axure.eventManager.focus('u247', function(e) {

if ((GetWidgetText('u272')) == ('28')) {

	SetPanelVisibility('u469','hidden','none',500);

	SetPanelVisibility('u472','hidden','none',500);

	SetPanelVisibility('u475','hidden','none',500);

}

if ((GetWidgetText('u272')) == ('29')) {

	SetPanelVisibility('u469','','none',500);

	SetPanelVisibility('u472','hidden','none',500);

	SetPanelVisibility('u475','hidden','none',500);

}

if ((GetWidgetText('u272')) == ('30')) {

	SetPanelVisibility('u469','','none',500);

	SetPanelVisibility('u472','','none',500);

	SetPanelVisibility('u475','hidden','none',500);

}

if ((GetWidgetText('u272')) == ('31')) {

	SetPanelVisibility('u469','','none',500);

	SetPanelVisibility('u472','','none',500);

	SetPanelVisibility('u475','','none',500);

}

if (true) {

	var obj1 = document.getElementById("u245");
    obj1.focus();

}
});
gv_vAlignTable['u466'] = 'center';gv_vAlignTable['u83'] = 'center';document.getElementById('u434_img').tabIndex = 0;
HookHover('u434', false);

u434.style.cursor = 'pointer';
$axure.eventManager.click('u434', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u217', '04');

	var obj1 = document.getElementById("u221");
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
document.getElementById('u427_img').tabIndex = 0;
HookHover('u427', false);

u427.style.cursor = 'pointer';
$axure.eventManager.click('u427', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u217', '10');

	var obj1 = document.getElementById("u221");
    obj1.focus();

}
});
gv_vAlignTable['u646'] = 'top';gv_vAlignTable['u209'] = 'top';gv_vAlignTable['u428'] = 'center';
$axure.eventManager.focus('u243', function(e) {

if (((GetSelectedOption('u215')) == (GetSelectedOption('u201'))) && ((GetWidgetText('u216')) == (GetSelectedOption('u202')))) {

	var obj1 = document.getElementById("u241");
    obj1.focus();

}
else
if (true) {

	var obj1 = document.getElementById("u239");
    obj1.focus();

}
});
gv_vAlignTable['u462'] = 'center';gv_vAlignTable['u430'] = 'center';gv_vAlignTable['u455'] = 'center';gv_vAlignTable['u674'] = 'top';gv_vAlignTable['u608'] = 'top';gv_vAlignTable['u271'] = 'top';gv_vAlignTable['u642'] = 'top';document.getElementById('u449_img').tabIndex = 0;
HookHover('u449', false);

u449.style.cursor = 'pointer';
$axure.eventManager.click('u449', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u217', '26');

	var obj1 = document.getElementById("u221");
    obj1.focus();

}
});
gv_vAlignTable['u668'] = 'top';u24.tabIndex = 0;

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
gv_vAlignTable['u24'] = 'top';gv_vAlignTable['u162'] = 'center';gv_vAlignTable['u670'] = 'top';gv_vAlignTable['u194'] = 'center';gv_vAlignTable['u150'] = 'center';document.getElementById('u416_img').tabIndex = 0;
HookHover('u416', false);

u416.style.cursor = 'pointer';
$axure.eventManager.click('u416', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u217', '02');

	var obj1 = document.getElementById("u221");
    obj1.focus();

}
});
gv_vAlignTable['u749'] = 'center';gv_vAlignTable['u774'] = 'top';
$axure.eventManager.focus('u525', function(e) {

if (true) {

SetSelectedOption('u511', 'December');

	var obj1 = document.getElementById("u519");
    obj1.focus();

}
});
gv_vAlignTable['u780'] = 'top';document.getElementById('u122_img').tabIndex = 0;

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
gv_vAlignTable['u147'] = 'center';gv_vAlignTable['u366'] = 'top';gv_vAlignTable['u737'] = 'center';document.getElementById('u115_img').tabIndex = 0;

u115.style.cursor = 'pointer';
$axure.eventManager.click('u115', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('SearchPatient.html');

}
});
gv_vAlignTable['u334'] = 'top';
$axure.eventManager.focus('u553', function(e) {

if (IsValueOneOf(GetWidgetText('u512'), ['2001', '2007', '2012', '2018', '2029'])) {

SetWidgetFormText('u565', '1');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u512'), ['2002', '2013', '2019', '2024', '2030'])) {

SetWidgetFormText('u565', '2');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u512'), ['2003', '2008', '2014', '2025'])) {

SetWidgetFormText('u565', '3');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u512'), ['2009', '2015', '2020', '2026'])) {

SetWidgetFormText('u565', '4');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u512'), ['2004', '2010', '2021', '2027'])) {

SetWidgetFormText('u565', '5');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u512'), ['2005', '2011', '2016', '2022'])) {

SetWidgetFormText('u565', '6');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
else
if (IsValueOneOf(GetWidgetText('u512'), ['2000', '2006', '2017', '2023', '2028'])) {

SetWidgetFormText('u565', '7');

	var obj1 = document.getElementById("u545");
    obj1.focus();

}
});
gv_vAlignTable['u624'] = 'top';gv_vAlignTable['u799'] = 'top';gv_vAlignTable['u302'] = 'top';
$axure.eventManager.focus('u521', function(e) {

if ((GetWidgetText('u512')) == ('2029')) {

SetWidgetFormText('u512', '2030');

}

if ((GetWidgetText('u512')) == ('2028')) {

SetWidgetFormText('u512', '2029');

}

if ((GetWidgetText('u512')) == ('2027')) {

SetWidgetFormText('u512', '2028');

}

if ((GetWidgetText('u512')) == ('2026')) {

SetWidgetFormText('u512', '2027');

}

if ((GetWidgetText('u512')) == ('2025')) {

SetWidgetFormText('u512', '2026');

}

if ((GetWidgetText('u512')) == ('2024')) {

SetWidgetFormText('u512', '2025');

}

if ((GetWidgetText('u512')) == ('2023')) {

SetWidgetFormText('u512', '2024');

}

if ((GetWidgetText('u512')) == ('2022')) {

SetWidgetFormText('u512', '2023');

}

if ((GetWidgetText('u512')) == ('2021')) {

SetWidgetFormText('u512', '2022');

}

if ((GetWidgetText('u512')) == ('2020')) {

SetWidgetFormText('u512', '2021');

}

if ((GetWidgetText('u512')) == ('2019')) {

SetWidgetFormText('u512', '2020');

}

if ((GetWidgetText('u512')) == ('2018')) {

SetWidgetFormText('u512', '2019');

}

if ((GetWidgetText('u512')) == ('2017')) {

SetWidgetFormText('u512', '2018');

}

if ((GetWidgetText('u512')) == ('2016')) {

SetWidgetFormText('u512', '2017');

}

if ((GetWidgetText('u512')) == ('2015')) {

SetWidgetFormText('u512', '2016');

}

if ((GetWidgetText('u512')) == ('2014')) {

SetWidgetFormText('u512', '2015');

}

if ((GetWidgetText('u512')) == ('2013')) {

SetWidgetFormText('u512', '2014');

}

if ((GetWidgetText('u512')) == ('2012')) {

SetWidgetFormText('u512', '2013');

}

if ((GetWidgetText('u512')) == ('2011')) {

SetWidgetFormText('u512', '2012');

}

if ((GetWidgetText('u512')) == ('2010')) {

SetWidgetFormText('u512', '2011');

}

if ((GetWidgetText('u512')) == ('2009')) {

SetWidgetFormText('u512', '2010');

}

if ((GetWidgetText('u512')) == ('2008')) {

SetWidgetFormText('u512', '2009');

}

if ((GetWidgetText('u512')) == ('2007')) {

SetWidgetFormText('u512', '2008');

}

if ((GetWidgetText('u512')) == ('2006')) {

SetWidgetFormText('u512', '2007');

}

if ((GetWidgetText('u512')) == ('2005')) {

SetWidgetFormText('u512', '2006');

}

if ((GetWidgetText('u512')) == ('2004')) {

SetWidgetFormText('u512', '2005');

}

if ((GetWidgetText('u512')) == ('2003')) {

SetWidgetFormText('u512', '2004');

}

if ((GetWidgetText('u512')) == ('2002')) {

SetWidgetFormText('u512', '2003');

}

if ((GetWidgetText('u512')) == ('2001')) {

SetWidgetFormText('u512', '2002');

}

if ((GetWidgetText('u512')) == ('2000')) {

SetWidgetFormText('u512', '2001');

}

if (true) {

	var obj1 = document.getElementById("u573");
    obj1.focus();

}
});
gv_vAlignTable['u546'] = 'top';gv_vAlignTable['u328'] = 'top';gv_vAlignTable['u91'] = 'center';gv_vAlignTable['u143'] = 'center';gv_vAlignTable['u362'] = 'top';gv_vAlignTable['u733'] = 'center';gv_vAlignTable['u169'] = 'center';gv_vAlignTable['u330'] = 'top';gv_vAlignTable['u574'] = 'top';
$axure.eventManager.focus('u508', function(e) {

if (true) {

	SetPanelVisibility('u587','hidden','none',500);

	var obj1 = document.getElementById("u502");
    obj1.focus();

}
});
gv_vAlignTable['u171'] = 'center';gv_vAlignTable['u542'] = 'top';document.getElementById('u761_img').tabIndex = 0;
HookHover('u761', false);

u761.style.cursor = 'pointer';
$axure.eventManager.click('u761', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u513', '21');

	var obj1 = document.getElementById("u517");
    obj1.focus();

}
});
gv_vAlignTable['u14'] = 'top';gv_vAlignTable['u570'] = 'top';document.getElementById('u748_img').tabIndex = 0;
HookHover('u748', false);

u748.style.cursor = 'pointer';
$axure.eventManager.click('u748', function(e) {

if (((GetGlobalVariableValue('OnLoadVariable')) == ('1')) || ((GetGlobalVariableValue('OnLoadVariable')) != ('1'))) {

SetWidgetFormText('u513', '06');

	var obj1 = document.getElementById("u517");
    obj1.focus();

}
});
gv_vAlignTable['u175'] = 'top';
u32.style.cursor = 'pointer';
$axure.eventManager.click('u32', function(e) {

if (true) {

	SetPanelVisibility('u27','hidden','none',500);

SetWidgetRichText('u26', '<p style="text-align:right;"><span style="font-family:Arial;font-size:12px;font-weight:bold;font-style:normal;text-decoration:none;color:#666666;">( Location A )</span></p>');

SetCheckState('u34', false);

SetCheckState('u36', false);

}
});
gv_vAlignTable['u764'] = 'center';