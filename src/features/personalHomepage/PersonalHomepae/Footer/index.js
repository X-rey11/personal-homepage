import { email } from "../email";
import { SocialIcons } from "./SocialIcons";
import { Address, EmailLink, Emailwrapper, LestsTalk, Paragraph, Wrapper } from "./styled";

export const Footer = () => (
    <Wrapper>
        <LestsTalk>Let's talk!</LestsTalk>
        <Address>
            <Emailwrapper>
                <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
            </Emailwrapper>
            <Paragraph>
                Test
            </Paragraph>
            <SocialIcons />
        </Address>
    </Wrapper>
);