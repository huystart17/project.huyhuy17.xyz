const AppSideBar = {
  view(v) {
    return m("aside.admin-sidebar",
      [
        m("div.admin-sidebar-brand",
          [
            m("img.admin-brand-logo[src='/site-image/favi.png'][width='40'][alt='Huyhuy17 logo']"),
            m("div.ml-auto",
              [
                m("a.admin-pin-sidebar.btn-ghost.btn.btn-rounded-circle[href='#']"),
                m("a.admin-close-sidebar[href='#']")
              ]
            )
          ]
        ),
        m("div.admin-sidebar-wrapper.js-scrollbar",
          m("ul.menu",
            [

              m("li.menu-item.active",
                [
                  m("a.open-dropdown.menu-link[href='/']",
                    [
                      m("span.menu-label",
                        m("span.menu-name",
                          [
                            "Trang chủ ",
                            m("span.menu-home")
                          ]
                        )
                      ),
                    ]
                  ),

                ]
              ),
              m("li.menu-item",
                [
                  m("a.open-dropdown.menu-link[href='#']",
                    [
                      m("span.menu-label",
                        m("span.menu-name",
                          [
                            "Học máy ",
                            m("span.menu-arrow")
                          ]
                        )
                      ),
                      m("span.menu-icon",
                        m("i.icon-placeholder.fe.fe-edit.")
                      )
                    ]
                  ),
                  m("ul.sub-menu",
                    [
                      m("li.menu-item",
                        m("a..menu-link[href='app-machine-learning/image-classifier.html']",
                          [
                            m("span.menu-label",
                              m("span.menu-name",
                                "Image classifier "
                              )
                            ),
                            m("span.menu-icon",
                              m("i.icon-placeholder.mdi.mdi-checkbook.")
                            )
                          ]
                        )
                      ),
                      m("li.menu-item",
                        m("a..menu-link[href='forms-custom.html']",
                          [
                            m("span.menu-label",
                              m("span.menu-name",
                                "Custom Controls "
                              )
                            ),
                            m("span.menu-icon",
                              m("i.icon-placeholder.mdi.mdi-checkbox-multiple-marked-circle.")
                            )
                          ]
                        )
                      ),
                      m("li.menu-item",
                        m("a..menu-link[href='forms-advance.html']",
                          [
                            m("span.menu-label",
                              m("span.menu-name",
                                "Advance "
                              )
                            ),
                            m("span.menu-icon",
                              m("i.icon-placeholder.mdi.mdi-calendar-edit.")
                            )
                          ]
                        )
                      ),
                      m("li.menu-item",
                        m("a..menu-link[href='forms-wizard.html']",
                          [
                            m("span.menu-label",
                              m("span.menu-name",
                                "Wizard "
                              )
                            ),
                            m("span.menu-icon",
                              m("i.icon-placeholder.mdi.mdi-step-forward.")
                            )
                          ]
                        )
                      )
                    ]
                  )
                ]
              )
            ]
          )
        )
      ]
    )
  }
}
