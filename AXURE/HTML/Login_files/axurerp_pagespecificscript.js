for(var i = 0; i < 32; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u28'] = 'center';gv_vAlignTable['u30'] = 'center';u6.tabIndex = 0;

u6.style.cursor = 'pointer';
$axure.eventManager.click('u6', function(e) {

if (true) {

	SetPanelVisibility('u14','','none',500);

}
});
gv_vAlignTable['u6'] = 'top';gv_vAlignTable['u13'] = 'top';document.getElementById('u4_img').tabIndex = 0;

u4.style.cursor = 'pointer';
$axure.eventManager.click('u4', function(e) {

if (((GetWidgetText('u7')) == ('admin')) && ((GetWidgetText('u8')) == ('admin'))) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
else
if (((GetWidgetText('u7')) != ('admin')) || ((GetWidgetText('u8')) != ('admin'))) {

	SetPanelState('u11', 'pd0u11','none','',500,'fade','',500);

	SetPanelVisibility('u11','hidden','fade',8000);

}
});
gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u26'] = 'top';gv_vAlignTable['u10'] = 'center';gv_vAlignTable['u3'] = 'top';gv_vAlignTable['u12'] = 'top';document.getElementById('u23_img').tabIndex = 0;

u23.style.cursor = 'pointer';
$axure.eventManager.click('u23', function(e) {

if ((GetWidgetText('u25')) != ('')) {

	SetPanelVisibility('u14','hidden','none',500);

	SetPanelState('u11', 'pd1u11','none','',500,'fade','',500);

	SetPanelVisibility('u11','hidden','fade',8000);

}
});
gv_vAlignTable['u24'] = 'center';gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u2'] = 'top';gv_vAlignTable['u18'] = 'center';document.getElementById('u19_img').tabIndex = 0;

u19.style.cursor = 'pointer';
$axure.eventManager.click('u19', function(e) {

if (true) {

	SetPanelVisibility('u14','hidden','none',500);

}
});
gv_vAlignTable['u20'] = 'center';gv_vAlignTable['u22'] = 'top';