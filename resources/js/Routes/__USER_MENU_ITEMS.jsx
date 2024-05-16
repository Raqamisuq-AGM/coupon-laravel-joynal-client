export const __USER_MENU_ITEMS = [
    {
        title: "Dashboard",
        icon: "streamline:dashboard-circle",
        url: "/user/dashboard",
    },
    {
        head: "Application",
        menus: [
            {
                icon: "material-symbols:photo-library-outline-rounded",
                title: "Assets",
                url: route("user.assets.index"),
            },
            {
                icon: "ion:wallet-outline",
                title: "Subscription",
                url: route("user.subscription.index"),
            },
            {
                icon: "iconoir:headset-help",
                title: "Supports",
                url: route("user.supports.index"),
            },
            {
                icon: "fe:gear",
                title: "Account Settings",
                url: route("user.account-settings"),
            },
        ],
    },
];
