const root = document.currentScript.getAttribute("data-root") || "./";

async function loadPartial(id, file) {
    const element = document.getElementById(id);

    if (!element) return;

    try {
        const response = await fetch(root + file);

        if (!response.ok) {
            throw new Error(`Could not load ${file}`);
        }

        const html = await response.text();
        element.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}

async function loadPartials() {
    await Promise.all([
        loadPartial("navbar-placeholder", "partials/navbar.html"),
        loadPartial("footer-placeholder", "partials/footer.html")
    ]);

    window.partialsAreLoaded = true;
    document.dispatchEvent(new Event("partialsLoaded"));
}

loadPartials();