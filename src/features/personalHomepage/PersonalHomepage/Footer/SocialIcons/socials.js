import { styledIcons } from "./styled";
import { ReactComponent as GithubIcon } from "./icons/github.svg";
import { ReactComponent as FacebookIcon } from "./icons/facebook.svg";
import { ReactComponent as InstagramIcon } from "./icons/instagram.svg";

export const socials = [
    {
        name: "GitHub",
        url: "https://github.com/X-rey11",
        Icon: styledIcons(GithubIcon),
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/profile.php?id=100010898799523&locale=pl_PL",
        Icon: styledIcons(FacebookIcon),
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/mateusz.brysio/",
        Icon: styledIcons(InstagramIcon),
    },
];