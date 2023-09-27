const colorNames = {
    mineShaft: "#252525",
    slateGray: "#6E7E91",
    scienceBlue: "#0366D6",
    scienceBlueLighter: "#0366d633",
    scienceBlueDarker: "#0366d680",
    white: "#FFFFFF",
    mercury: "#E5E5E5",
    whiteLilac: "#FBFBFE",
    iron: "#D1D5DA",
    ironLighter: "#d1d5da4d",
    ironDarker: "#363636b8",
    dodgerBlue: "#2188FF",
    mineShaftLighter: "#313131",
    doveGray: "#686868",
    cornflowerBlue: "#6195ED",
    shipCove: "#6D93BE",
};

const common = {
    breakpoints: {
        mobileMax: 767,
        tabletVerticalMax: 991,
        tabletHorizontalMax: 1199,
    },
    boxShadow: "0px -2px 50px rgba(9, 10, 51 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03)",
    borderRadiusSmall: "4px",
};

export const themeLight = {
    ...common,
    colors: {
        primary: colorNames.scienceBlue,
        textPrimary: colorNames.mineShaft,
        site: {
            background: colorNames.whiteLilac,
            text: colorNames.slateGray,
        },
        buttonLink: {
            text: colorNames.white,
            border: colorNames.ironTransparent,
            shadow: colorNames.anakiwa,
        },
        boxBackground: colorNames.white,
        headerLine: colorNames.mercury,
        
        title: {
            border: colorNames.porcelain,
            borderHover: colorNames.tropicalBlue,
            header: colorNames.scienceBlue,
        },
        themeSwitch: {
            background: colorNames.mercury,
            icon: colorNames.white,
        },
    },
};

export const themeDark = {
    ...common,
    colors: {
        primary: colorNames.dodgerBlue,
        textPrimary: colorNames.white,
        site: {
            background: colorNames.mineShaft,
            text: colorNames.white,
        },
        buttonLink: {
            text: colorNames.white,
            border: colorNames.ironTransparent,
            shadow: colorNames.shipCove,
        },
        boxBackground: colorNames.mineShaftLighter,
        
    },
}