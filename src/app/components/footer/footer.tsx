import './footer.scss';

interface FooterProps {
    title: string;
}

export function Footer(title: FooterProps): JSX.Element {
    return <div>{title}</div>;
}