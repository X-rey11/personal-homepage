import styled from "styled-components";

export const Wrapper = styled.footer`
    margin-top: 120px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-top: 48px;
    }
`;

export const LetsTalk = styled.h2`
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: initial;
    margin: 0px;
`;

export const Address = styled.address`
    font-style: unset;
`;
export const Emailwrapper = styled.div`
    margin: 24px 0px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin: 12px 0px;
    }
`;

export const EmailLink = styled.a`
    color: ${({ theme }) => theme.colors.textPrimary};
    font-weight: 900px;
    font-size: 32px;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
        color: ${({ theme }) => theme.colors.primary}
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 18px;
    }
`;

export const Paragraph = styled.p`
    max-width: 670px;
    font-size: 12px;
    line-height: 1.4;
    color: ${({ theme }) => theme.colors.textPrimary};
    margin: 0px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 14px;
    }
`;