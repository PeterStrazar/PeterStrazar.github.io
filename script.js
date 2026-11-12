(function () {
  var S = window.SITE;
  var root = document.documentElement;
  root.classList.add("js");

  var lang = root.lang === "sl" ? "sl" : "en";
  var $ = function (id) { return document.getElementById(id); };
  var t = function (o) { return (o && (o[lang] || o.en)) || ""; };
  var store = function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} };

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function card(item, moreKey, href) {
    var c = el(href ? "a" : "div", "card reveal in");
    if (href) {
      c.href = href;
      if (/^https?:/.test(href)) { c.target = "_blank"; c.rel = "noopener"; }
    }
    c.appendChild(el("span", "meta", t(item.meta)));
    c.appendChild(el("h3", "", t(item.title)));
    c.appendChild(el("p", "", t(item.text)));
    if (href) c.appendChild(el("span", "more", t(S.text[moreKey])));
    return c;
  }

  function fill(id, nodes) {
    var box = $(id);
    box.textContent = "";
    nodes.forEach(function (n) { box.appendChild(n); });
  }

  function render() {
    root.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (n) {
      n.textContent = t(S.text[n.getAttribute("data-i18n")]);
    });
    document.querySelectorAll("[data-lang]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang));
    });

    fill("facts", S.facts.map(function (f) {
      var d = el("div");
      d.appendChild(el("dt", "", t(f.label)));
      d.appendChild(el("dd", "", t(f.value)));
      return d;
    }));

    fill("project-list", S.projects.map(function (p) { return card(p, "projects.more", p.url); }));
    fill("offer-list", S.offers.map(function (o) { return card(o, "offers.more", "#contact"); }));

    var fmt = new Intl.DateTimeFormat(lang === "sl" ? "sl-SI" : "en-GB", { day: "numeric", month: "short", year: "numeric" });
    fill("post-list", S.posts.map(function (p) {
      var li = el("li", "post");
      var a = el("a");
      a.href = p.url || "#writing";
      var time = el("time", "", fmt.format(new Date(p.date)));
      time.dateTime = p.date;
      var body = el("div");
      body.appendChild(el("h3", "", t(p.title)));
      body.appendChild(el("p", "", t(p.text)));
      a.appendChild(time);
      a.appendChild(body);
      a.appendChild(el("span", "arrow", "→"));
      li.appendChild(a);
      return li;
    }));

    var mail = $("email-link");
    if (S.email) {
      mail.href = "mailto:" + S.email;
      mail.textContent = t(S.text["contact.email"]);
    } else {
      mail.href = "#contact";
      mail.textContent = t(S.text["contact.noemail"]);
    }

    fill("social-list", S.socials.map(function (s) {
      var li = el("li");
      var a = el("a", "", s.label);
      a.href = s.url; a.target = "_blank"; a.rel = "noopener";
      li.appendChild(a);
      return li;
    }));
  }

  document.querySelectorAll("[data-lang]").forEach(function (b) {
    b.addEventListener("click", function () {
      lang = b.getAttribute("data-lang");
      store("lang", lang);
      render();
    });
  });

  $("theme-toggle").addEventListener("click", function () {
    var dark = root.classList.toggle("dark");
    store("theme", dark ? "dark" : "light");
  });

  var menu = $("menu-toggle"), links = $("nav-links");
  menu.addEventListener("click", function () {
    menu.setAttribute("aria-expanded", String(links.classList.toggle("open")));
  });
  links.addEventListener("click", function (e) {
    if (e.target.closest("a")) { links.classList.remove("open"); menu.setAttribute("aria-expanded", "false"); }
  });

  $("year").textContent = new Date().getFullYear();
  render();

  // Scroll reveals — entrance only, once
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { rootMargin: "0px 0px -10% 0px" });
  document.querySelectorAll(".reveal:not(.in)").forEach(function (n) { io.observe(n); });
})();
