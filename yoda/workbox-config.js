module.exports = {
    globDirectory: "build",
    globPatterns: ["**/*.{json,ico,html,js,css}", "assets/*.*"],
    swDest: "build/service-worker.js",
    clientsClaim: true,
    skipWaiting: true,
};
