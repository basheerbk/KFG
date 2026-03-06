import { Heart } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="footer">
            Made with&nbsp;<Heart size={13} className="footer-heart" style={{ display: 'inline', verticalAlign: 'middle', color: 'var(--blue-light)' }} />&nbsp;for Kozhikode&apos;s food lovers &nbsp;·&nbsp; 2026
        </footer>
    );
}
