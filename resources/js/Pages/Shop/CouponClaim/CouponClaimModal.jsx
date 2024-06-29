import React from "react";

const CouponClaimModal = ({ isOpen, onClose, userData, coupon, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
            <div className="bg-white p-8 max-w-lg w-full rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Coupon Claim Details</h2>
                {userData && (
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold mb-2">User Details:</h3>
                        <p>Name: {userData.name}</p>
                        <p>Email: {userData.email}</p>
                        {/* Add more user details as needed */}
                    </div>
                )}
                {coupon && (
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold mb-2">Coupon Details:</h3>
                        <p>Title: {coupon.title}</p>
                        <p>Description: {coupon.description}</p>
                        {/* Add more coupon details as needed */}
                    </div>
                )}
                <div className="flex justify-end">
                    <button
                        className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-md mr-4"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                        onClick={onConfirm}
                    >
                        Yes, Claim Coupon
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CouponClaimModal;
