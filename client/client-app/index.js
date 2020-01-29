import {AppSideBar} from "./sidebar";
import {AppMain} from "./main";
import {AppModal} from "./modal";
import m from "mithril"

m.mount(document.body, {
  view(v) {
    return [
      m(AppSideBar),
      m(AppMain),
      m(AppModal)
    ]
  }
});
