import { SectionHeader, StyledSection } from "./styled";

const Secion = ({title, body}) => (
    <StyledSection>
        <SectionHeader>
            <h2>{title}</h2>
        </SectionHeader>
        <div>
            {body}
        </div>
    </StyledSection>
);

export default Secion;