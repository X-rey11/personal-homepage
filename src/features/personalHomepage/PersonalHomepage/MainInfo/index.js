import { email } from "../email";
import { Wrapper, ThisIs, Name, Summary, StyledButtonLink, ButtonIcon, Avatar } from "./styled";
import myPhoto from "./profile.jpg";

export const MainInformation = () => (
    <Wrapper>
        <Avatar src={myPhoto} alt="Mateusz Bryczek" />
        <div>
            <ThisIs>This is</ThisIs>
            <Name>Mateusz Bryczek</Name>
            <Summary>
                I'm Frontend Developer currently looking for a job and opportunity to develop my skills and also to learn a new ones.
            </Summary>
            <StyledButtonLink href={`mailto:${email}`} title={email}>
                <ButtonIcon />
                    Hire me
            </StyledButtonLink>
        </div>
    </Wrapper>
);