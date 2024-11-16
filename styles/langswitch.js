function toggleLanguageOptions(event) {
    event.preventDefault();

    const languageOptions = document.getElementById("languageOptions");
    languageOptions.style.display =
        languageOptions.style.display === "block" ? "none" : "block";
}

function switchLanguage(language) {
    const currentUrl = window.location.href;

    const urlParts = currentUrl.split("/");
    const lastPart = urlParts[urlParts.length - 1];

    const isGerman = lastPart.startsWith("de-");

    if (language === "en") {
        if (isGerman) {
            const englishPath = lastPart.replace("de-", "");
            urlParts[urlParts.length - 1] = englishPath;
        }
    } else if (language === "de") {

        if (!isGerman) {
            const germanPath = "de-" + lastPart;
            urlParts[urlParts.length - 1] = germanPath;
        }
    }

    window.location.href = urlParts.join("/");
}
