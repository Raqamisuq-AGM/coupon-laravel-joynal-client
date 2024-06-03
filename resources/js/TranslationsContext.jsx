import React, { createContext, useContext } from "react";

const TranslationsContext = createContext();

export const TranslationsProvider = ({ translations, locale, children }) => {
    return (
        <TranslationsContext.Provider value={{ translations, locale }}>
            {children}
        </TranslationsContext.Provider>
    );
};

export const useTranslations = () => {
    return useContext(TranslationsContext);
};

export const trans = (key) => {
    const { translations } = useTranslations();
    const keys = key.split(".");
    let value = translations;

    keys.forEach((k) => {
        value = value[k];
    });

    return value || key;
};
