import { StyledHeader, Item, List, Section, StyledDot } from "./styled"

export const Skills = ({ title, skills }) => (
    <Section>
        <StyledHeader>{title}</StyledHeader>
        <List>
            {skills.map(skill => (
                <Item key={skill}>
                    <StyledDot />
                </Item>
            ))}
        </List>
    </Section>
);