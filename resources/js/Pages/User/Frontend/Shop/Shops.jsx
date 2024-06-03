import { Icon } from "@iconify/react";
import React from "react";

export const Shops = ({ shops, shop, setShop }) => {
    return (
        <div className="flex w-1/3 flex-col gap-6 font-['Poetsen_One'] lg:gap-10 ">
            {shops
                ? shops
                      .filter((s) => s.id !== shop?.id)
                      .map((shop) => (
                          <button
                              key={shop?.id}
                              type="button"
                              onClick={() => setShop(shop)}
                              className="flex items-center justify-end gap-4 lg:gap-6 "
                          >
                              <h4 className="text-2xl font-[400] tracking-[-1px] text-[#ffffff]">
                                  {shop?.name}
                              </h4>
                              {/* Cup Icon */}
                              <div className="h-10 w-10 rounded-full bg-[#ffffff] p-2 lg:h-14 lg:w-14">
                                  <Icon
                                      icon="bi:cup"
                                      className="h-full w-full"
                                  />
                              </div>
                          </button>
                      ))
                : ""}
        </div>
    );
};
