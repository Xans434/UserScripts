// ==UserScript==
// @name         c.ai+
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Дополнение для character.ai
// @author       xans434
// @match        https://*.character.ai/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Функция для изменения заголовка и иконки
    function changeTitleAndIcon() {
        document.title = "YouTube"; // Изменение заголовка
        const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.rel = 'icon';
        link.href = 'https://www.gstatic.com/youtube/img/branding/favicon/favicon_144x144.png'; // Изменение иконки
        document.getElementsByTagName('head')[0].appendChild(link);
    }

    // Наблюдатель за изменениями в DOM
    const observer = new MutationObserver(changeTitleAndIcon);
    observer.observe(document.body, { childList: true, subtree: true });

    // Первоначальный вызов функции
    changeTitleAndIcon();

    // Функция для переадресации на YouTube
    function redirectToYouTube() {
        window.location.href = "https://www.youtube.com/";
    }

    // Обработчик нажатия клавиш
    document.addEventListener('keydown', function(event) {
        if (event.altKey && event.code === 'KeyW') { // Проверка на Alt+W
            redirectToYouTube();
        }
    });
})();