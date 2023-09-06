import { email } from "../email";
import { Wrapper, ThisIs, Name, Summary, StyledButtonLink, ButtonIcon, Avatar } from "./styled";

export const MainInformation = () => (
    <Wrapper>
        <Avatar />
        <div>
            <ThisIs>This is</ThisIs>
            <Name>Mateusz Bryczek</Name>
            <Summary>
                Test
            </Summary>
            <StyledButtonLink href={`mailto:${email}`} title={email}>
                <ButtonIcon />
                    Hire me
            </StyledButtonLink>
        </div>
    </Wrapper>
);