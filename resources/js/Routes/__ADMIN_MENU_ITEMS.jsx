// for menu components and componentGroup is prefixed by 'Admin'
// so we can just use like componentGroup : "Dashboard"
// not componentGroup : "Admin/Dashboard"
// if permission not given it will be publicly visible

export const __ADMIN_MENU_ITEMS = [
    {
        icon: "material-symbols:dashboard-customize-outline",
        title: "Dashboard",
        url: route("dashboard"),
        component: "Dashboard",
    },

    // {
    //     head: "APPEARANCE",
    //     menus: [
    //         {
    //             icon: "bx:book",
    //             title: "Blogs",
    //             url: route("admin.blog.index"),
    //             componentGroup: "Blog",
    //             child: [
    //                 {
    //                     permission: "blogs",
    //                     title: "Blog",
    //                     componentGroup: "Blog/Index",
    //                     url: route("admin.blog.index"),
    //                 },
    //                 {
    //                     permission: "blog-category",
    //                     title: "Category",
    //                     componentGroup: "Blog/Category",
    //                     url: route("admin.category.index"),
    //                 },
    //                 {
    //                     permission: "blog-tags",
    //                     title: "Tags",
    //                     componentGroup: "Blog/Tag",
    //                     url: route("admin.tag.index"),
    //                 },
    //             ],
    //         },
    //         {
    //             icon: "bx:help-circle",
    //             title: "Faq",
    //             url: route("admin.faq.index"),
    //             componentGroup: "Faq",
    //             child: [
    //                 {
    //                     permission: "faq",
    //                     title: "Faq's",
    //                     component: "Faq/Index",
    //                     url: route("admin.faq.index"),
    //                 },
    //                 {
    //                     permission: "faq-category",
    //                     title: "Category",
    //                     component: "Faq/Category",
    //                     url: route("admin.faq-category.index"),
    //                 },
    //             ],
    //         },
    //         {
    //             permission: "testimonials",
    //             icon: "bx:message-square-detail",
    //             title: "Testimonials",
    //             componentGroup: "Testimonial",
    //             url: route("admin.testimonials.index"),
    //         },
    //         {
    //             permission: "language",
    //             icon: "iconoir:language",
    //             title: "Language",
    //             componentGroup: "Language",
    //             url: route("admin.language.index"),
    //         },
    //         {
    //             permission: "menu",
    //             icon: "bx:food-menu",
    //             title: "Menu",
    //             componentGroup: "Menu",
    //             url: route("admin.menu.index"),
    //         },
    //         // {
    //         //     permission: "menu",
    //         //     icon: "bx:food-menu",
    //         //     title: "Sidebar Menu",
    //         //     componentGroup: "SidebarMenu",
    //         //     url: route("admin.sidebar-menu.index"),
    //         // },
    //         {
    //             permission: "custom-page",
    //             icon: "bx:bxs-file",
    //             title: "Custom Pages",
    //             componentGroup: "CustomPage",
    //             url: route("admin.page.index"),
    //         },
    //         {
    //             permission: "seo",
    //             icon: "bx:shape-polygon",
    //             title: "Seo Settings",
    //             componentGroup: "Setting",
    //             url: route("admin.seo.index"),
    //         },
    //     ],
    // },

];
