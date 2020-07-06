// 全局分享
/*!function () {
  const PageTmp = Page;

  Page = function (pageConfig) {
    pageConfig = Object.assign({
      onShareAppMessage: function () {
        return {
          title: 'title',
          path: 'path',
          imageUrl: 'image'
        };
      }
    }, pageConfig);

    PageTmp(pageConfig);
  };
}();*/

App({});
