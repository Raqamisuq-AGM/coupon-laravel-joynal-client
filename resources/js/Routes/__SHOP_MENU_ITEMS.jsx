export const __SHOP_MENU_ITEMS = [
    // {
    //     icon: "material-symbols:dashboard-customize-outline",
    //     title: "Dashboard",
    //     url: route("shop.dashboard"),
    // },
    {
        icon: "material-symbols:dashboard-customize-outline",
        title: "Dashboard",
        url: route("shop.coupons.index"),
    },
    {
        icon: "heroicons:rectangle-stack",
        title: "Coupon Claim",
        url: route("shop.coupon-claims.index"),
    },
    {
        icon: "heroicons:key",
        title: "Change Credentials",
        url: route("shop.change-credential.index"),
    },
    {
        icon: "heroicons:pencil-square",
        title: "Edit Shop",
        url: route("shop.profile.index"),
    },
];
