// main.js

// Register the service worker

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('https://resume.meringtone.com/sw.js', {
        scope: 'https://resume.meringtone.com/' // Explicit scope
    }).then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
    }).catch((err) => {
        console.error('Service Worker registration failed:', err);
    });
}

