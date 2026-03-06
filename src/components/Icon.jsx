import * as icons from 'lucide-react';

/**
 * Renders a Lucide icon by string name.
 * Falls back to a dot if the icon name isn't found.
 */
export default function Icon({ name, size = 18, color = 'currentColor', strokeWidth = 1.8, className = '' }) {
    const LucideIcon = icons[name];
    if (!LucideIcon) return <span style={{ width: size, height: size, display: 'inline-block' }} />;
    return <LucideIcon size={size} color={color} strokeWidth={strokeWidth} className={className} />;
}
