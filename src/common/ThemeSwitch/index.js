import { useDispatch, useSelector } from "react-redux";
import { selectDarkTheme, toggleTheme } from "../themeSlice";

export const ThemeSwith = () => {
    const darkTheme = useSelector(selectDarkTheme);
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <Button>
                <Text>Dark mode {darkTheme ? "on" : "off"}</Text>
                <Box>
                    <IconWrapper movetoRight={darkTheme}>
                        <Icon />
                    </IconWrapper>
                </Box>
            </Button>
        </Wrapper>
    );
};