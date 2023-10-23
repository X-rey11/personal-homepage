import { email } from "../email";
import { SocialIcons } from "./SocialIcons";
import { Address, EmailLink, Emailwrapper, LetsTalk, Paragraph, Wrapper } from "./styled";

export const Footer = () => (
    <Wrapper>
        <LetsTalk>Let's talk!</LetsTalk>
        <Address>
            <Emailwrapper>
                <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
            </Emailwrapper>
            <Paragraph>
                Thanks for visiting my website, i hope you liked it!
            </Paragraph>
            <SocialIcons />
        </Address>
    </Wrapper>
);