function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

/** @type {import('./types').AnalyzeArrayModule} */
module.exports = { capitalize };