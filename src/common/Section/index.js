import { SectionHeader, StyledSection } from "./styled";

const Section = ({title, body}) => (
    <StyledSection>
        <SectionHeader>
            <h2>{title}</h2>
        </SectionHeader>
        <div>
            {body}
        </div>
    </StyledSection>
);

export default Section;