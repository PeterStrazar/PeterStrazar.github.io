/*
 * ALL SITE TEXT LIVES HERE.
 * Every entry has an English (en) and Slovenian (sl) version.
 * Text in [square brackets] is a placeholder — replace it with your own.
 */
window.SITE = {
  email: "", // e.g. "hello@yourdomain.com" — left empty until you choose which address to publish

  socials: [
    // { label: "LinkedIn", url: "https://www.linkedin.com/in/..." },
    // { label: "Instagram", url: "https://www.instagram.com/..." },
  ],

  text: {
    skip: { en: "Skip to content", sl: "Preskoči na vsebino" },
    "nav.about": { en: "About", sl: "O meni" },
    "nav.projects": { en: "Projects", sl: "Projekti" },
    "nav.writing": { en: "Writing", sl: "Zapisi" },
    "nav.offers": { en: "Offers", sl: "Ponudba" },
    "nav.contact": { en: "Contact", sl: "Kontakt" },

    "hero.eyebrow": { en: "[Your role · Your city]", sl: "[Tvoja vloga · Tvoje mesto]" },
    "hero.lead": {
      en: "[One or two sentences on what you do and who it is for.] Everything I work on, write and offer, in one place.",
      sl: "[En ali dva stavka o tem, kaj počneš in za koga.] Vse, kar delam, pišem in ponujam, na enem mestu.",
    },
    "hero.cta": { en: "See projects", sl: "Poglej projekte" },
    "hero.cta2": { en: "Get in touch", sl: "Piši mi" },

    "about.eyebrow": { en: "About", sl: "O meni" },
    "about.title": { en: "Who I am", sl: "Kdo sem" },
    "about.p1": {
      en: "[Short bio: where you are from, what you do now and what drives you.]",
      sl: "[Kratek opis: od kod prihajaš, kaj počneš zdaj in kaj te žene.]",
    },
    "about.p2": {
      en: "[A second paragraph with your background, experience or the story of how you got here.]",
      sl: "[Drugi odstavek o tvojem ozadju, izkušnjah ali zgodbi, kako si prišel do sem.]",
    },

    "projects.eyebrow": { en: "Projects", sl: "Projekti" },
    "projects.title": { en: "What I'm working on", sl: "Na čem delam" },
    "projects.more": { en: "View project", sl: "Poglej projekt" },

    "writing.eyebrow": { en: "Writing", sl: "Zapisi" },
    "writing.title": { en: "Notes and articles", sl: "Zapiski in članki" },

    "offers.eyebrow": { en: "Offers", sl: "Ponudba" },
    "offers.title": { en: "How we can work together", sl: "Kako lahko sodelujeva" },
    "offers.more": { en: "Ask about this", sl: "Vprašaj o tem" },

    "contact.eyebrow": { en: "Contact", sl: "Kontakt" },
    "contact.title": { en: "Let's talk", sl: "Pogovoriva se" },
    "contact.lead": {
      en: "Have a question or an idea? Write to me and I'll get back to you.",
      sl: "Imaš vprašanje ali idejo? Piši mi in odgovorim ti.",
    },
    "contact.email": { en: "Send an email", sl: "Pošlji e-pošto" },
    "contact.noemail": { en: "[Add your email in content.js]", sl: "[Dodaj e-pošto v content.js]" },

    "footer.top": { en: "Back to top ↑", sl: "Na vrh ↑" },
  },

  facts: [
    { label: { en: "Based in", sl: "Lokacija" }, value: { en: "[City, Slovenia]", sl: "[Mesto, Slovenija]" } },
    { label: { en: "Focus", sl: "Področje" }, value: { en: "[Your field]", sl: "[Tvoje področje]" } },
    { label: { en: "Languages", sl: "Jeziki" }, value: { en: "Slovenian, English", sl: "slovenščina, angleščina" } },
  ],

  projects: [
    {
      meta: { en: "[Year · Role]", sl: "[Leto · Vloga]" },
      title: { en: "[Project one]", sl: "[Prvi projekt]" },
      text: { en: "[What it is and what you did.]", sl: "[Kaj je to in kaj si naredil.]" },
      url: "",
    },
    {
      meta: { en: "[Year · Role]", sl: "[Leto · Vloga]" },
      title: { en: "[Project two]", sl: "[Drugi projekt]" },
      text: { en: "[What it is and what you did.]", sl: "[Kaj je to in kaj si naredil.]" },
      url: "",
    },
    {
      meta: { en: "[Year · Role]", sl: "[Leto · Vloga]" },
      title: { en: "[Project three]", sl: "[Tretji projekt]" },
      text: { en: "[What it is and what you did.]", sl: "[Kaj je to in kaj si naredil.]" },
      url: "",
    },
  ],

  posts: [
    {
      date: "2026-11-12",
      title: { en: "[First post title]", sl: "[Naslov prvega zapisa]" },
      text: { en: "[One-line summary.]", sl: "[Povzetek v eni vrstici.]" },
      url: "",
    },
    {
      date: "2026-11-01",
      title: { en: "[Second post title]", sl: "[Naslov drugega zapisa]" },
      text: { en: "[One-line summary.]", sl: "[Povzetek v eni vrstici.]" },
      url: "",
    },
  ],

  offers: [
    {
      meta: { en: "01", sl: "01" },
      title: { en: "[Offer one]", sl: "[Prva ponudba]" },
      text: { en: "[Who it is for and what they get.]", sl: "[Za koga je in kaj dobi.]" },
    },
    {
      meta: { en: "02", sl: "02" },
      title: { en: "[Offer two]", sl: "[Druga ponudba]" },
      text: { en: "[Who it is for and what they get.]", sl: "[Za koga je in kaj dobi.]" },
    },
    {
      meta: { en: "03", sl: "03" },
      title: { en: "[Offer three]", sl: "[Tretja ponudba]" },
      text: { en: "[Who it is for and what they get.]", sl: "[Za koga je in kaj dobi.]" },
    },
  ],
};
