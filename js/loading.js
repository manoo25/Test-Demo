// loading.js
document.addEventListener('DOMContentLoaded', function() {
    // إنشاء عناصر شاشة التحميل
    const loadingScreen = document.createElement('div');
    loadingScreen.className = 'loading-screen';
    loadingScreen.id = 'loading-screen';
    
    loadingScreen.innerHTML = `
        <div class="loader">
            <div class="loader-circle"></div>
            <div class="loader-circle"></div>
            <div class="loader-circle"></div>
        </div>
        <div class="loading-text">جاري التحميل...</div>
    `;
    
    document.body.prepend(loadingScreen);
    
    // إخفاء شاشة التحميل بعد 3 ثواني
    setTimeout(function() {
        loadingScreen.style.display = 'none';
    }, 2500);
});