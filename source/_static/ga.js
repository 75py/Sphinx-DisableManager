// �y�[�W�\�����ɌĂт����pageshow��on(bind)����
$(document).on("pageshow", function() {
    ga('send', 'pageview', $.mobile.activePage.jqmData('url'));
});
 
// ����ǂݍ��ݗp ����͈�x�����Ăяo�����΂悢
$(document).ready(function(){

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-9578951-11', 'nagopy.com');
ga('send', 'pageview');

});