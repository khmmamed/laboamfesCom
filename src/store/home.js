//Home reducer
export const home = (
  state = {
    topMenu: [
      { link: "./Acceuil", text: "Acceuil" },
      { link: "./Patient", text: "Patient" },
      { link: "./Professionel", text: "Professionel" },
      { link: "./Galerie", text: "Galerie" },
      { link: "./Contact", text: "Contact" }
    ],
    WorkingTimeHoverFromRedux: "color : yellow;"
  }
) => state;
