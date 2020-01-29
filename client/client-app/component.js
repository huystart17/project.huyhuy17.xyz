import m from "mithril";

export const SidebarMenu = {
  view(v) {
    return m('')
  }
};

export const MenuItem = {
  view(v) {
    let {attrs = {}} = v;
    let {label, href, icon = "1"} = attrs;
    return m("li.menu-item.active", v.attrs,

      m("a.open-dropdown.menu-link[href='/']",
        [
          m("span.menu-label",
            m("span.menu-name",
              [
                "Trang chủ ",
                m("span.menu-home")
              ]
            ),
            icon && m("span.menu-icon",
            m("i.icon-placeholder.fe.fe-edit.")
            )
          ),
        ]
      ),
    )
  }
};
