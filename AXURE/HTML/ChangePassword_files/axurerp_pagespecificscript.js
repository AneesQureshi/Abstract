for(var i = 0; i < 18; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u16'] = 'top';gv_vAlignTable['u15'] = 'top';gv_vAlignTable['u17'] = 'top';gv_vAlignTable['u5'] = 'top';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u9'] = 'top';document.getElementById('u6_img').tabIndex = 0;

u6.style.cursor = 'pointer';
$axure.eventManager.click('u6', function(e) {

if (((GetWidgetText('u8')) == ('')) || (((GetWidgetText('u10')) == ('')) || ((GetWidgetText('u12')) == ('')))) {

	SetPanelState('u14', 'pd0u14','none','',500,'fade','',500);

	SetPanelVisibility('u14','hidden','fade',8000);

}
else
if ((GetWidgetText('u10')) != (GetWidgetText('u12'))) {

	SetPanelState('u14', 'pd1u14','none','',500,'fade','',500);

	SetPanelVisibility('u14','hidden','fade',8000);

}
else
if (((GetWidgetText('u8')) != ('')) && (((GetWidgetText('u10')) != ('')) && (((GetWidgetText('u12')) != ('')) && ((GetWidgetText('u10')) == (GetWidgetText('u12')))))) {

	SetPanelState('u14', 'pd2u14','none','',500,'fade','',500);

	SetPanelVisibility('u14','hidden','fade',5000);

SetWidgetFormText('u8', '');

SetWidgetFormText('u10', '');

SetWidgetFormText('u12', '');

}
});
gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u7'] = 'center';