import { socials } from "./socials";
import { Item, Link, List } from "./styled";

export const SocialIcons = () => (
    <List>
        {socials.map(({ name, url, Icon }) => (
            <Item key={name}>
                <Link href={url} title={name} target="_blank" rel="nreferrer">
                    <Icon />
                </Link>
             </Item>
        ))}
    </List>
);