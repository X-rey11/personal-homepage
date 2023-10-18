import { MainInformation } from "./MainInfo";
import { Skills } from "./Skills";
import { Container, Icon } from "./styled";
import { skills, nextSkills } from "./skillsData";
import { Portfolio } from './Portfolio';
import { Footer } from "./Footer";
import { ThemeSwitch } from "../../../common/ThemeSwitch";
import toolsIcon from "./toolsIcon.png";
import rocketIcon from "./rocketIcon.png";

export const PersonalHomepage = () => (
    <Container>
        <ThemeSwitch />
        <MainInformation />

        <main>
            <Skills
                title={(
                    <>
                        My skillset <Icon src={toolsIcon} alt="" />
                    </>
                )}
                skills={skills}
            />

            <Skills 
                title={(
                    <>
                        What i want to learn next <Icon src={rocketIcon} alt="" />
                    </>
                )}
                skills={nextSkills}
            />

            <Portfolio />
        </main>

        <Footer />
    </Container>
);