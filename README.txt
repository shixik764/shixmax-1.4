Инструкция — как вставить эти файлы в репозиторий

1) Распакуй архив и скопируй файлы firebase.js, register.js, app.js в корень твоего репозитория (замени старые).
2) В index.html и register.html убедись, что перед подключением firebase.js стоят скрипты compat CDN:
   <script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js"></script>
   <script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-auth-compat.js"></script>
   <script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-database-compat.js"></script>
   (далее) <script src="firebase.js"></script>
3) На register.html добавь <script src="register.js"></script> внизу после firebase.js и Uploadcare (если используешь).
4) На других страницах (index_main.html, chat.html) при необходимости подключи app.js после firebase.js.
5) В Firebase Console -> Authentication -> Settings -> Authorized domains добавь:
   shixik764.github.io
6) В Realtime Database -> Rules можно временно поставить:
   { "rules": { ".read": true, ".write": true } }
7) Залей изменения в репозиторий и включи GitHub Pages (branch main, root).

После этого регистрация и вход должны работать. Если появится ошибка - пришли скрин консоли (F12 -> Console).