import { Link } from "react-router-dom";

/**
 * Desktop top navigation bar (hidden on mobile).
 * Shows the ROLLERHUB logo and a set of nav links.
 * The active link is highlighted with primary color + bold weight.
 *
 * @param {string} activeTab - One of: "map" | "spots" | "meetups" | "profile"
 */
export default function Navbar({ activeTab }) {
    const links = [
        { id: "map",     label: "Mapa",     icon: "map",         path: "/map" },
        { id: "spots",   label: "Sitios",   icon: "location_on", path: "/" },
        { id: "meetups", label: "Quedadas", icon: "groups",      path: "/meetups" },
        { id: "profile", label: "Perfil",   icon: "person",      path: "/profile" },
    ];

    return (
        <div className="hidden md:flex fixed top-0 w-full z-50 bg-surface shadow-[0_4px_12px_rgba(0,0,0,0.15)] px-margin-desktop h-20 items-center justify-between">
            {/* Brand logo */}
            <div className="font-display text-headline-lg font-black text-primary tracking-tighter">
                ROLLERHUB
            </div>

            {/* Navigation links */}
            <nav className="flex gap-lg">
                {links.map(link => {
                    const isActive = link.id === activeTab;
                    return (
                        <Link
                            key={link.id}
                            to={link.path}
                            className={`flex items-center gap-2 font-label-md transition-colors ${
                                isActive
                                    ? "text-primary font-bold"
                                    : "text-on-surface-variant hover:text-primary"
                            }`}
                        >
                            <span
                                className="material-symbols-outlined"
                                style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
                            >
                                {link.icon}
                            </span>
                            {link.label}
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}
