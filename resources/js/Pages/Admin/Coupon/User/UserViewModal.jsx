import { Modal } from "@/Components/shared/Modal";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";

export const UserViewModal = ({ isOpen, setIsOpen, couponUser }) => {
    const [claims, setClaims] = useState([]);
    const getUserCouponClaims = async () => {
        const response = await axios.get(
            route("admin.coupon-user-claims", {
                coupon: couponUser.coupon_id,
                couponUser: couponUser.id,
            })
        );

        setClaims(response.data?.data);
    };

    useEffect(() => {
        if (couponUser && couponUser?.id) {
            getUserCouponClaims();
        }
    }, [couponUser]);

    return (
        <Modal title="View Users" isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className="p-6">
                <ul>
                    {claims.map((claim, index) => (
                        <li
                            key={claim.id}
                            className="border-b border-gray-200 py-2 last:border-0"
                        >
                            <div className="flex flex-row gap-4 ">
                                <div>Sr. {index + 1}</div>
                                <p className="text-gray-500">
                                    <span className="text-gray-800 dark:text-white">
                                        Code:{" "}
                                    </span>{" "}
                                    {claim.code}
                                </p>
                                <p className="text-gray-500">
                                    <span className="text-gray-800 dark:text-white">
                                        Claimed At:{" "}
                                    </span>
                                    {moment(claim.claimed_at).toNow(true)} ago
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </Modal>
    );
};
