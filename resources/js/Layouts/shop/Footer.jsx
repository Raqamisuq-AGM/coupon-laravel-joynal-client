import React from "react";

export default function Footer() {
    return (
        <footer className="footer">
            <p className="text-sm">
                Copyright © 2023
                <a
                    className="text-primary-500 hover:underline"
                    href="https://getadmintoolkit.com"
                    target="_blank"
                >
                    Admin Toolkit
                </a>
            </p>

            <p className="flex items-center gap-1 text-sm">
                Hand-crafted &amp; Made with
                <i
                    className="text-danger-500"
                    data-feather="heart"
                    height="1em"
                    width="1em"
                ></i>
            </p>
        </footer>
    );
}
