import { createContext, useState } from "react";

const LanguageContext = createContext(null);

export function LanguageProvider({
    children,
}) {
    const [language, setLanguage] = useState("en");
    return (
    <LanguageContext value={{language, setLanguage}}>
        {children}
    </LanguageContext>
    );
}

export default LanguageContext;