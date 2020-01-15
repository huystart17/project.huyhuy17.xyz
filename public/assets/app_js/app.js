m.mount(document.body, {
  view (v){
    return [
      m(AppSideBar),
      m(AppMain),
      m(AppModal)
    ]
  }
});
