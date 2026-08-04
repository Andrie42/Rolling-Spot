import { Link } from "react-router-dom";

/**
 * The navigation tabs shared across all pages.
 * Each tab has: id (matching route key), label, icon name, and path.
 */
const NAV_TABS = [
    { id: "map",     label: "Mapa",     icon: "map",         path: "/map" },
    { id: "spots",   label: "Sitios",   icon: "location_on", path: "/" },
    { id: "meetups", label: "Quedadas", icon: "groups",      path: "/meetups" },
    { id: "profile", label: "Perfil",   icon: "person",      path: "/profile" },
];

/**
 * BottomNavbar — displayed on mobile only (md:hidden).
 * Highlights the active tab based on the `activeTab` prop.
 *
 * @param {string} activeTab - One of: "map" | "spots" | "meetups" | "profile"
 */
export default function BottomNavbar({ activeTab }) {
    return (
        <nav className="fixed bottom-0 w-full z-50 rounded-t-xl bg-surface dark:bg-inverse-surface border-t border-outline-variant dark:border-outline shadow-[0_-4px_12px_rgba(0,0,0,0.15)] flex justify-around items-center h-16 px-2 pb-safe md:hidden">
            {NAV_TABS.map(tab => {
                const isActive = tab.id === activeTab;
                return (
                    <Link
                        key={tab.id}
                        to={tab.path}
                        className="flex flex-col items-center justify-center active:scale-90 transition-transform duration-150 rounded-lg p-1 group"
                    >
                        {/* Active tab gets a filled pill background; inactive gets plain icon */}
                        <div className={`flex flex-col items-center justify-center rounded-full px-4 py-1.5 transition-colors ${
                            isActive
                                ? "bg-primary-container dark:bg-on-primary-fixed-variant text-on-primary-container dark:text-on-primary-fixed"
                                : "text-secondary dark:text-secondary-fixed-dim"
                        }`}>
                            <span
                                className="material-symbols-outlined"
                                style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
                            >
                                {tab.icon}
                            </span>
                        </div>
                        <span className={`font-label-sm text-label-sm mt-1 transition-colors ${
                            isActive ? "text-on-surface font-bold" : "text-secondary group-hover:text-on-surface"
                        }`}>
                            {tab.label}
                        </span>
                    </Link>
                );
            })}
        </nav>
    );
}
