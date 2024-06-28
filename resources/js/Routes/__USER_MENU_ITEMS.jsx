export const __USER_MENU_ITEMS = [
    {
        icon: "heroicons:rectangle-stack",
        title: "Dashboard",
        url: route("user.coupons.index"),
    },
    {
        icon: "heroicons:key",
        title: "Change Credentials",
        url: route("user.change-credential.index"),
    },
    {
        icon: "heroicons:pencil-square",
        title: "Edit Profile",
        url: route("user.profile.index"),
    },
];
