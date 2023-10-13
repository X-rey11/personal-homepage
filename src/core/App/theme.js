const colorNames = {
    mineShaft: "#252525",
    slateGray: "#6E7E91",
    scienceBlue: "#0366D6",
    scienceBlueLighter: "#2188FF",
    scienceBlueDarker: "#1F5189",
    anakiwa: "#8CC2FF",
    white: "#FFFFFF",
    mercury: "#E5E5E5",
    whiteLilac: "#F8F8FE",
    iron: "#CDE0F7",
    mineShaftLighter: "#313131",
    doveGray: "#6D6D6D",
    cornflowerBlue: "#6195ED",
    shipCove: "#6D93BE",
    tundora: "#414141",
    porcelain: "#F2F3F4",
    ironTransparent: "rgba(209, 213, 218, 0.3)",
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
        
        tile: {
            border: colorNames.porcelain,
            borderHover: colorNames.iron,
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
        primary: colorNames.scienceBlueLighter,
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
            headerLine: colorNames.tundora,

        tile : {
            border: colorNames.tundora,
            borderHover: colorNames.scienceBlueDarker,
            header: colorNames.white,
        },
        themeSwitch: {
            background: colorNames.doveGray,
            icon: colorNames.mineShaft,
        },
    }, 
};