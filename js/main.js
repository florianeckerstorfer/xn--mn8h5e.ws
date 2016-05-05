(function () {
    var authorEl = document.querySelector('.author a');

    function rand(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    function enterForceClick(e) {
        authorEl.focus();
    }

    window.onload = function () {
        var wel = document.querySelector('.waving'),
            hands = ['\uD83D\uDC4B\uD83C\uDFFB', '\uD83D\uDC4B\uD83C\uDFFC', '\uD83D\uDC4B\uD83C\uDFFC', '\uD83D\uDC4B\uD83C\uDFFC', '\uD83D\uDC4B\uD83C\uDFFC'];
        wel.textContent = hands[rand(0, 5)];
    };

    authorEl.addEventListener('webkitmouseforcedown', enterForceClick, false);
})();
