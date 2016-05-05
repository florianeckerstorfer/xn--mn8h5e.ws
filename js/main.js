(function () {
    function rand(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    window.onload = function () {
        var wel = document.querySelector('.waving'),
            hands = ['\uD83D\uDC4B\uD83C\uDFFB', '\uD83D\uDC4B\uD83C\uDFFC', '\uD83D\uDC4B\uD83C\uDFFC', '\uD83D\uDC4B\uD83C\uDFFC', '\uD83D\uDC4B\uD83C\uDFFC'];
        wel.textContent = hands[rand(0, 5)];
    };
})();
