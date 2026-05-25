window.addEventListener('DOMContentLoaded', function() {
    var lista = document.getElementById('sumario-lista');
    var box = document.getElementById('sumario-box');
    var btn = document.getElementById('sumario-toggle-btn');
    if (!lista || !box || !btn) return;

    var seletores = [
        '.elementor-widget-theme-post-content .elementor-widget-container',
        '.entry-content',
        '.post-content'
    ];

    var content = null;
    for (var i = 0; i < seletores.length; i++) {
        var el = document.querySelector(seletores[i]);
        if (el) { content = el; break; }
    }

    if (!content) { box.style.display = 'none'; return; }

    var headings = content.querySelectorAll('h2, h3');
    if (!headings.length) { box.style.display = 'none'; return; }

    headings.forEach(function(h, i) {
        if (!h.id) h.id = 'sec-' + i;
        var li = document.createElement('li');
        if (h.tagName === 'H3') li.className = 'h3-item';
        var a = document.createElement('a');
        a.href = '#' + h.id;
        a.textContent = h.textContent.trim();
        a.onclick = function(e) {
            e.preventDefault();
            var t = document.getElementById(h.id);
            if (t) window.scrollTo({
                top: t.getBoundingClientRect().top + window.scrollY - 100,
                behavior: 'smooth'
            });
        };
        li.appendChild(a);
        lista.appendChild(li);
    });

    btn.onclick = function() {
        lista.classList.toggle('sumario-oculto');
        box.classList.toggle('sumario-fechado');
    };
});
