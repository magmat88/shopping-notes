import './header.scss';

interface HeaderProps {
    title: string;
}

export function Header(title: HeaderProps): JSX.Element {
    return <div>{title}</div>;
}