import { Modal } from "@/Components/shared/Modal";
import React from "react";

export const UserViewModal = ({ isOpen, setIsOpen }) => {

    return (
        <Modal title="View User" isOpen={isOpen} setIsOpen={setIsOpen} >
            HELLO WORLD
        </Modal>
    )
};
