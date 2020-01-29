import m from "mithril"

export const AppMain = {
  view(v) {
    return m("main.admin-main",
      [
        m("header.admin-header",
          [
            m("a.sidebar-toggle[href='#'][data-toggleclass='sidebar-open'][data-target='body']",
            ),
            m("nav..mr-auto.my-auto",
              m("ul.nav.align-items-center",
                m("li.nav-item",
                  m("a.nav-link.[data-target='#siteSearchModal'][data-toggle='modal'][href='#']",
                    m("i..mdi.mdi-magnify.mdi-24px.align-middle")
                  )
                )
              )
            ),
            m("nav..ml-auto",
              m("ul.nav.align-items-center",
                [
                  m("li.nav-item",
                    m("div.dropdown",
                      [
                        m("a.nav-link[href='#'][data-toggle='dropdown'][aria-haspopup='true'][aria-expanded='false']",
                          [
                            m("i.mdi.mdi-24px.mdi-bell-outline"),
                            m("span.notification-counter")
                          ]
                        ),
                        m("div.dropdown-menu.notification-container.dropdown-menu-right",
                          [
                            m("div.d-flex.p-all-15.bg-white.justify-content-between.border-bottom.",
                              [
                                m("a.mdi.mdi-18px.mdi-settings.text-muted[href='#!']"),
                                m("span.h5.m-0",
                                  "Notifications"
                                ),
                                m("a.mdi.mdi-18px.mdi-notification-clear-all.text-muted[href='#!']")
                              ]
                            ),
                            m("div.notification-events.bg-gray-300",
                              [
                                m("div.text-overline.m-b-5",
                                  "today"
                                ),
                                m("a.d-block.m-b-10[href='#']",
                                  m("div.card",
                                    m("div.card-body",
                                      [
                                        m("i.mdi.mdi-circle.text-success"),
                                        " All systems operational."
                                      ]
                                    )
                                  )
                                ),
                                m("a.d-block.m-b-10[href='#']",
                                  m("div.card",
                                    m("div.card-body",
                                      [
                                        m("i.mdi.mdi-upload-multiple."),
                                        " File upload successful."
                                      ]
                                    )
                                  )
                                ),
                                m("a.d-block.m-b-10[href='#']",
                                  m("div.card",
                                    m("div.card-body",
                                      [
                                        m("i.mdi.mdi-cancel.text-danger"),
                                        " Your holiday has been denied "
                                      ]
                                    )
                                  )
                                )
                              ]
                            )
                          ]
                        )
                      ]
                    )
                  ),
                  m("li.nav-item.dropdown.",
                    [
                      m("a.nav-link.dropdown-toggle[href='#'][role='button'][data-toggle='dropdown'][aria-haspopup='true'][aria-expanded='false']",
                        m("div.avatar.avatar-sm.avatar-online",
                          m("span.avatar-title.rounded-circle.bg-dark",
                            "V"
                          )
                        )
                      ),
                      m("div.dropdown-menu.dropdown-menu-right",
                        [
                          m("a.dropdown-item[href='#']",
                            " Add Account "
                          ),
                          m("a.dropdown-item[href='#']",
                            " Reset Password"
                          ),
                          m("a.dropdown-item[href='#']",
                            " Help "
                          ),
                          m("div.dropdown-divider"),
                          m("a.dropdown-item[href='#']",
                            " Logout"
                          )
                        ]
                      )
                    ]
                  )
                ]
              )
            )
          ]
        ),
        m("section.admin-content",
          [
            m("div.bg-dark.m-b-30",
              m("div.container",
                m("div.row.p-b-60.p-t-60",
                  [
                    m("div.col-md-6.text-white.p-b-30",
                      m("div.media",
                        [
                          m("div.avatar.avatar.mr-3",
                            m("img.rounded-circle[src='/site-image/author.jpeg'][alt='']")
                          ),
                          m("div.media-body",
                            [
                              m("h1",
                                "huyhuy17 Blog"
                              ),
                              m("div.text-overline.opacity-75.",
                                "Blog nơi tôi viết linh tinh"
                              ),
                              m("p.opacity-75",
                                " Viết về đam mê công nghệ, và giới thiệu các tool tự chế, cũng như các bài viết sâu đíp "
                              )
                            ]
                          )
                        ]
                      )
                    ),
                    m("div.col-md-6.text-md-right.text-white",
                      [
                        m("div",
                          [
                            m("div.text-overline.opacity-75.m-b-10.",
                              "on Teams"
                            ),
                            m("a.badge-soft-danger.badge[href='$']",
                              "Development"
                            ),
                            m("a.badge-soft-info.badge[href='$']",
                              "UI/UX"
                            )
                          ]
                        ),
                        m("p.m-t-10",
                          m("a.btn.btn-white-translucent[href='#']",
                            " 👑 Infinity Plan"
                          )
                        )
                      ]
                    )
                  ]
                )
              )
            ),
            m("div.container.pull-up",
              m("div.row",
                [
                  m("div.col-lg-4.order-1.order-lg-0.m-b-30",
                    [
                      m("div.card.m-b-30",
                        [
                          m("div.card-header",
                            m("div.card-title",
                              [
                                m("div.avatar.mr-2.avatar-xs",
                                  m("div.avatar-title.bg-dark.rounded-circle",
                                    m("i.mdi.mdi-microphone.mdi-18px")
                                  )
                                ),
                                " Introduction "
                              ]
                            )
                          ),
                          m("div.list-group.list.list-group-flush",
                            [
                              m("div.list-group-item.p-all-15.h6.",
                                [
                                  m("i.mdi.mdi-briefcase"),
                                  " Works at ",
                                  m("a.text-underline[href='#']",
                                    " Tesla"
                                  )
                                ]
                              ),
                              m("div.list-group-item.p-all-15.h6.",
                                [
                                  m("i.mdi.mdi-map-marker"),
                                  " Lives in ",
                                  m("a.text-underline[href='https://goo.gl/maps/p2fXqrx8fdD2'][target='_blank']",
                                    " toronto"
                                  )
                                ]
                              ),
                              m("div.list-group-item.p-all-15.h6.",
                                [
                                  m("i.mdi.mdi-school"),
                                  " Studied at ",
                                  m("a.text-underline[href='#']",
                                    " Northeastern University"
                                  )
                                ]
                              ),
                              m("div.list-group-item.p-all-15.h6.",
                                [
                                  m("i.mdi.mdi-home"),
                                  " From ",
                                  m("a.text-underline[href='https://goo.gl/maps/p2fXqrx8fdD2'][target='_blank']",
                                    " Toronto,Ontario"
                                  )
                                ]
                              )
                            ]
                          )
                        ]
                      ),
                      m("div.card.m-b-30",
                        [
                          m("div.card-header",
                            m("div.card-title",
                              [
                                m("div.avatar.mr-2.avatar-xs",
                                  m("div.avatar-title.bg-success.rounded-circle",
                                    m("i.mdi.mdi-credit-card.mdi-18px")
                                  )
                                ),
                                " Credit Cards "
                              ]
                            )
                          ),
                          m("div.list-group.list.list-group-flush",
                            [
                              m("div.list-group-item.p-all-15.h6.text-muted.",
                                [
                                  m("img[src='assets/img/logos/americanexpress.jpg'][height='30'][alt='']"),
                                  " American Express ending in 2003 "
                                ]
                              ),
                              m("div.list-group-item.p-all-15.h6.text-muted.",
                                [
                                  m("img.rounded-circle[src='assets/img/logos/visa.jpg'][height='30'][alt='']"),
                                  " Visa ending in 2073 "
                                ]
                              )
                            ]
                          )
                        ]
                      ),
                      m("div.card.m-b-30",
                        [
                          m("div.card-header",
                            m("div.card-title",
                              [
                                m("div.avatar.mr-2.avatar-xs",
                                  m("div.avatar-title.bg-primary.rounded-circle",
                                    m("i.mdi.mdi-timelapse.mdi-18px")
                                  )
                                ),
                                " Subscriptions "
                              ]
                            )
                          ),
                          m("div.list-group.list.list-group-flush",
                            [
                              m("div.list-group-item.p-all-15.h6.text-muted.",
                                [
                                  m("img.rounded-circle[src='assets/img/logos/stripe.jpg'][height='30'][alt='']"),
                                  " Infinity Plan "
                                ]
                              ),
                              m("div.list-group-item.p-all-15.h6.text-muted.",
                                [
                                  m("img.rounded-circle[src='assets/img/logos/stripe.jpg'][height='30'][alt='']"),
                                  " Basic Plan "
                                ]
                              )
                            ]
                          )
                        ]
                      ),
                      m("div.card.m-b-30",
                        [
                          m("div.card-header",
                            m("div.card-title",
                              [
                                m("div.avatar.mr-2.avatar-xs",
                                  m("div.avatar-title.bg-warning.rounded-circle",
                                    m("i.mdi.mdi-shape-outline")
                                  )
                                ),
                                " Notes "
                              ]
                            )
                          ),
                          m("div.card-body",
                            [
                              m("textarea.form-control[placeholder='Add Notes']"),
                              m("div.m-t-10",
                                m("button.btn.btn-primary",
                                  [
                                    m("i.mdi.mdi-comment"),
                                    " Add Notes"
                                  ]
                                )
                              )
                            ]
                          )
                        ]
                      )
                    ]
                  ),
                  m("div.col-lg-8.m-b-30",
                    m("div.card",
                      [
                        m("div.card-header",
                          [
                            m("div.card-title",
                              "Timeline"
                            ),
                            m("div.card-controls",
                              m("select.custom-select",
                                [
                                  m("option[value='']",
                                    "Everything"
                                  ),
                                  m("option[value='']",
                                    "Charges"
                                  ),
                                  m("option[value='']",
                                    "Upgrades"
                                  )
                                ]
                              )
                            )
                          ]
                        ),
                        m("div.card-body",
                          m("div.timeline",
                            [
                              m("div.timeline-item",
                                m("div.timeline-wrapper",
                                  [
                                    m("div",
                                      m("div.avatar.avatar-sm",
                                        m("img.avatar-img.rounded-circle[src='assets/img/logos/stripe.jpg'][alt='']")
                                      )
                                    ),
                                    m("div.col-auto",
                                      m("h6.m-0",
                                        "Charged undefined"
                                      )
                                    ),
                                    m("div.ml-auto.col-auto.text-muted",
                                      "June 2, 2018"
                                    )
                                  ]
                                )
                              ),
                              m("div.timeline-item",
                                m("div.timeline-wrapper",
                                  [
                                    m("div",
                                      m("div.avatar.avatar-sm",
                                        m("div.avatar-title.bg-success.rounded-circle",
                                          m("i.mdi.mdi-account-circle")
                                        )
                                      )
                                    ),
                                    m("div.col-auto",
                                      m("h6.m-0",
                                        "Account Upgraded"
                                      )
                                    ),
                                    m("div.ml-auto.col-auto.text-muted",
                                      "June 12, 2018"
                                    )
                                  ]
                                )
                              ),
                              m("div.timeline-item",
                                m("div.timeline-wrapper",
                                  [
                                    m("div",
                                      m("div.avatar.avatar-sm",
                                        m("div.avatar-title.bg-danger.rounded-circle",
                                          m("i.mdi.mdi-alert-circle-outline")
                                        )
                                      )
                                    ),
                                    m("div.col-auto",
                                      m("h6.m-0",
                                        "Support Ticket Opened"
                                      )
                                    ),
                                    m("div.ml-auto.col-auto.text-muted",
                                      "July 16, 2018"
                                    )
                                  ]
                                )
                              ),
                              m("div.timeline-item",
                                m("div.timeline-wrapper",
                                  [
                                    m("div",
                                      m("div.avatar.avatar-sm",
                                        m("div.avatar-title.bg-success.rounded-circle",
                                          m("i.mdi.mdi-check-all")
                                        )
                                      )
                                    ),
                                    m("div.col-auto",
                                      m("h6.m-0",
                                        "Ticket Resolved"
                                      )
                                    ),
                                    m("div.ml-auto.col-auto.text-muted",
                                      "July 20, 2018"
                                    )
                                  ]
                                )
                              ),
                              m("div.timeline-item",
                                m("div.timeline-wrapper",
                                  [
                                    m("div",
                                      m("div.avatar.avatar-sm",
                                        m("img.avatar-img.rounded-circle[src='assets/img/logos/stripe.jpg'][alt='']")
                                      )
                                    ),
                                    m("div.col-auto",
                                      m("h6.m-0",
                                        "Payement Method: Stripe"
                                      )
                                    ),
                                    m("div.ml-auto.col-auto.text-muted",
                                      "Aug 19, 2018"
                                    )
                                  ]
                                )
                              ),
                              m("div.timeline-item",
                                m("div.timeline-wrapper",
                                  [
                                    m("div",
                                      m("div.avatar.avatar-sm",
                                        m("div.avatar-title.bg-primary.rounded-circle",
                                          m("i.mdi.mdi-magnet")
                                        )
                                      )
                                    ),
                                    m("div.col-auto",
                                      m("h6.m-0",
                                        "Join Development Group"
                                      )
                                    ),
                                    m("div.ml-auto.col-auto.text-muted",
                                      "Sep 25, 2018"
                                    )
                                  ]
                                )
                              ),
                              m("div.timeline-item",
                                m("div.timeline-wrapper",
                                  [
                                    m("div.badge.badge-soft-danger",
                                      " Account Under Review "
                                    ),
                                    m("div.ml-auto.col-auto.text-muted",
                                      "Sep 10, 2018"
                                    )
                                  ]
                                )
                              ),
                              m("div.timeline-item",
                                m("div.timeline-wrapper",
                                  [
                                    m("div",
                                      m("div.avatar.avatar-sm",
                                        m("div.avatar-title.bg-info.rounded-circle",
                                          m("i.mdi.mdi-buffer")
                                        )
                                      )
                                    ),
                                    m("div.col-auto",
                                      m("h6.m-0",
                                        "Switched to Atoms"
                                      )
                                    ),
                                    m("div.ml-auto.col-auto.text-muted",
                                      "Oct 12, 2018"
                                    )
                                  ]
                                )
                              ),
                              m("div.timeline-item",
                                m("div.timeline-wrapper",
                                  [
                                    m("div",
                                      m("div.avatar.avatar-sm",
                                        m("img.avatar-img.rounded-circle[src='assets/img/logos/mailchimp.jpg'][alt='']")
                                      )
                                    ),
                                    m("div.col-auto",
                                      m("h6.m-0",
                                        "Opened Newsletters"
                                      )
                                    ),
                                    m("div.ml-auto.col-auto.text-muted",
                                      "Nov 13, 2018"
                                    )
                                  ]
                                )
                              ),
                              m("div.timeline-item",
                                m("div.timeline-wrapper",
                                  [
                                    m("div",
                                      m("div.avatar.avatar-sm",
                                        m("img.avatar-img.rounded-circle[src='assets/img/logos/instagram.jpg'][alt='']")
                                      )
                                    ),
                                    m("div.col",
                                      [
                                        m("h6.p-t-10",
                                          "Uploaded Images"
                                        ),
                                        m("div.card.mb-2",
                                          m("div.card-body",
                                            [
                                              m("img.w-25[src='assets/img/social/1.jpg'][alt='']"),
                                              m("img.w-25[src='assets/img/social/2.jpg'][alt='']"),
                                              m("img.w-25[src='assets/img/social/3.jpg'][alt='']")
                                            ]
                                          )
                                        )
                                      ]
                                    ),
                                    m("div.ml-auto.col-auto.text-muted",
                                      "Jan 5, 2017"
                                    )
                                  ]
                                )
                              ),
                              m("div.timeline-item",
                                m("div.timeline-wrapper",
                                  [
                                    m("div",
                                      m("div.avatar.avatar-sm",
                                        m("div.avatar-title.bg-warning.rounded-circle",
                                          m("i.mdi.mdi-magnet")
                                        )
                                      )
                                    ),
                                    m("div.col-auto",
                                      m("h6.m-0",
                                        "Free Plan Selected"
                                      )
                                    ),
                                    m("div.ml-auto.col-auto.text-muted",
                                      "Dec 2, 2018"
                                    )
                                  ]
                                )
                              ),
                              m("div.timeline-item",
                                m("div.timeline-wrapper",
                                  [
                                    m("div",
                                      m("div.avatar.avatar-sm",
                                        m("img.avatar-img.rounded-circle[src='assets/img/logos/vimeo.jpg'][alt='']")
                                      )
                                    ),
                                    m("div.col",
                                      [
                                        m("h6.p-t-10",
                                          "Shared Video"
                                        ),
                                        m("div.card.mb-2",
                                          m("div.card-body",
                                            m("div.embed-responsive.embed-responsive-16by9",
                                              m("iframe[src='https://player.vimeo.com/video/265045525?color=f15f5f&title=0&byline=0&portrait=0'][width='640'][height='360']")
                                            )
                                          )
                                        )
                                      ]
                                    ),
                                    m("div.ml-auto.col-auto.text-muted",
                                      "Jan 5, 2017"
                                    )
                                  ]
                                )
                              ),
                              m("div.timeline-item",
                                m("div.timeline-wrapper",
                                  [
                                    m("div",
                                      m("div.avatar.avatar-sm",
                                        m("img.avatar-img.rounded-circle[src='assets/img/logos/google.jpg'][alt='']")
                                      )
                                    ),
                                    m("div.col-auto",
                                      m("h6.m-0",
                                        "Joined atmos"
                                      )
                                    ),
                                    m("div.ml-auto.col-auto.text-muted",
                                      "Jan 5, 2017"
                                    )
                                  ]
                                )
                              )
                            ]
                          )
                        )
                      ]
                    )
                  )
                ]
              )
            )
          ]
        )
      ]
    )
  }
};
let ls = [
  {
    key: "first",
    items: [
      {text: "first 1", key: "first 1", group: "first"},
      {text: "first 2", key: "first 2", group: "first"},
      {text: "first 3", key: "first 3", group: "first"},
      {text: "first 4", key: "first 4", group: "first"},
      {text: "first 5", key: "first 5", group: "first"},
      {text: "first 6", key: "first 6", group: "first"},
    ]
  }, {
    key: "second",
    items: [
      {text: "second 21", key: "second 21", group: "second"},
      {text: "second 22", key: "second 22", group: "second"},
      {text: "second 23", key: "second 23", group: "second"},
      {text: "second 24", key: "second 24", group: "second"},
      {text: "second 25", key: "second 25", group: "second"},
      {text: "second 26", key: "second 26", group: "second"},
    ]
  }, {
    key: "third",
    items: [
      {text: "third 21", key: "third 21", group: "third"},
      {text: "third 22", key: "third 22", group: "third"},
      {text: "third 23", key: "third 23", group: "third"},
      {text: "third 24", key: "third 24", group: "third"},
      {text: "third 25", key: "third 25", group: "third"},
      {text: "third 26", key: "third 26", group: "third"},
    ]
  }, {
    key: "fourth",
    items: [
      {text: "fourth 21", key: "fourth 21", group: "fourth"},
      {text: "fourth 22", key: "fourth 22", group: "fourth"},
      {text: "fourth 23", key: "fourth 23", group: "fourth"},
      {text: "fourth 24", key: "fourth 24", group: "fourth"},
      {text: "fourth 25", key: "fourth 25", group: "fourth"},
      {text: "fourth 26", key: "fourth 26", group: "fourth"},
    ]
  },


];

let drake = dragula({
  copy: false
}).on('drop', function (el, target, source, sibling) {
  try {

    let from_group_key = source.getAttribute("data_group");
    let to_group_key = target.getAttribute("data_group");

    let from_key = el.getAttribute("data_key");

    let after_key = sibling && sibling.getAttribute("data_key");

    let fromGroupIndex = ls.findIndex(item => item.key === from_group_key);
    let fromItemIndex = ls[fromGroupIndex].items.findIndex(item => item.key === from_key);
    let insertItems = ls[fromGroupIndex].items.splice(fromItemIndex, 1);


    let toGroupIndex = ls.findIndex(item => item.key === to_group_key);
    let toItemIndex = ls[toGroupIndex].items.findIndex(item => item.key === after_key);
    if (toItemIndex < 0) {
      ls[toGroupIndex].items = ls[toGroupIndex].items.concat(insertItems)
    } else {
      ls[toGroupIndex].items = ls[toGroupIndex].items.slice(0, toItemIndex,).concat(insertItems).concat(ls[toGroupIndex].items.slice(toItemIndex))
    }

    AppMain2._key = Date.now();
    drake.containers = [];
    m.redraw()

  } catch (err) {

  }

});
export const AppMain2 = {
  _key: Date.now(),
  view(v) {
    return m('main.admin-main',
      m('h1', {key: "header"}, 'hELLO'),
      m(
        '.card', {
          style: {
            width: '600px',
            height: "800",
            backgroundColor: "lightgreen",
            display: 'flex',
            flexFlow: 'row'
          },
          key: AppMain2._key
        },
        ls.map(
          list => m('ul.list-group.list-group-flush.m-1',
            {
              oncreate(v) {
                drake.containers.push(v.dom);
              },
              style: {
                minHeight: 50
              },
              data_group: list.key,
              key: list.key
            },
            list.items.map(item => m('li.list-group-item d-flex  align-items-center', {
              data_key: item.key,
              key: item.key

            }, item.text))
          )
        )
      ))
  }

};
