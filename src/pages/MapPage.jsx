import { useState } from "react";
import { Link } from "react-router-dom";
import SpotMap from "../components/SpotMap";
import MobileHeader from "../components/MobileHeader";
import BottomNavbar from "../components/BottomNavbar";

/**
 * MapPage — full-screen interactive Leaflet map with spot search overlay.
 *
 * Layout notes:
 *  - On mobile: fixed top header + bottom nav wrap the full-screen map.
 *    The search bar sits below the header, left-aligned with right margin
 *    so it doesn't overlap the Leaflet attribution or any map controls.
 *  - On desktop: a side drawer nav replaces both top/bottom bars.
 *  - Zoom controls are disabled on <SpotMap> to avoid overlay conflicts.
 */
export default function MapPage({ spots }) {
    const [selectedSpot, setSelectedSpot] = useState(null);
    const [searchQuery, setSearchQuery]   = useState("");

    // Filter map pins based on search query (name or city)
    const filteredSpots = spots.filter(spot =>
        spot.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        spot.city.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="bg-background text-on-background h-screen w-screen overflow-hidden flex flex-col relative">
            {/* Mobile top bar (reusable) */}
            <MobileHeader title="Rolling Spot" showMenu showSearch />

            {/* ── Full-screen map canvas ── */}
            <main className="flex-grow relative z-0 w-full h-full mt-16 mb-20 md:mt-0 md:mb-0">

                {/* Leaflet map — zoom controls are off to avoid UI conflicts */}
                <div className="absolute inset-0 w-full h-full bg-surface-container-low">
                    <SpotMap
                        spots={filteredSpots}
                        selectedSpot={selectedSpot}
                        setSelectedSpot={setSelectedSpot}
                        style={{ height: "100%", width: "100%" }}
                    />
                </div>

                {/* Desktop search overlay (centered above map) */}
                <div className="absolute top-0 left-0 w-full p-md hidden md:flex justify-center pointer-events-none z-[1000] pt-lg">
                    <div className="w-full max-w-md bg-surface shadow-xl rounded-full flex items-center px-4 py-3 pointer-events-auto border border-outline-variant">
                        <span className="material-symbols-outlined text-secondary mr-sm">search</span>
                        <input
                            className="flex-grow bg-transparent border-none focus:ring-0 text-body-md font-body-md outline-none placeholder:text-on-surface-variant"
                            placeholder="Buscar sitios..."
                            type="text"
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                {/* Mobile search bar — right margin leaves room for map attribution */}
                <div className="absolute top-sm left-margin-mobile right-[100px] z-[1000] md:hidden pointer-events-auto">
                    <div className="bg-surface shadow-[0_4px_12px_rgba(0,0,0,0.15)] rounded-full flex items-center px-4 py-3 border border-outline-variant">
                        <span className="material-symbols-outlined text-secondary mr-sm">search</span>
                        <input
                            className="flex-grow bg-transparent border-none focus:ring-0 text-body-md font-body-md outline-none placeholder:text-on-surface-variant min-w-0"
                            placeholder="Buscar sitios..."
                            type="text"
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                {/* FAB — add new spot */}
                <Link
                    to="/new-spot"
                    className="absolute bottom-md right-margin-mobile md:bottom-lg md:right-margin-desktop w-14 h-14 bg-primary text-on-primary rounded-full shadow-lg flex items-center justify-center hover:bg-primary-container hover:text-on-primary-container active:scale-90 transition-all duration-200 z-[1000] pointer-events-auto"
                >
                    <span className="material-symbols-outlined text-[28px]">add</span>
                </Link>
            </main>

            {/* ── Desktop side drawer ── */}
            <nav className="fixed left-0 top-0 h-full w-[280px] bg-surface-container-lowest dark:bg-inverse-surface shadow-xl hidden md:flex flex-col p-md z-[1000] rounded-r-xl">
                {/* User avatar & stats */}
                <div className="flex items-center mb-xl mt-lg px-sm">
                    <div className="w-12 h-12 rounded-full bg-surface-variant overflow-hidden mr-sm border border-outline-variant shrink-0">
                        <img
                            alt="Foto de perfil"
                            className="w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmN15Gn8ZtmYSoODS-IlsYjCR7aeBcjxvG6k8zqSEPYNWNuUwSoaVOA-X8_Dh3GXLexpQQoM7dbH69feKgpPmVKiMxjD2NIgEk4cGx2LyIPOr477n1jeKz8Bx1i6CoUIVt8PTC3n2jkXOtZYLC-ILxBNP7lw_-HaGk7VvUOOQOqSbAPNAyYlLKja76RKTc7Ik2vxwK6f7UqH5dx6FHYzVr0yyXcB7Jo77f8fw2HiREH9LqupF1sqXJ2wywXDJuFNBomBfKk1a-7MP9"
                        />
                    </div>
                    <div>
                        <h2 className="font-headline-md text-headline-md text-on-surface font-bold">Alex Roller</h2>
                        <p className="font-label-sm text-label-sm text-secondary">Pro Level • Unicornio</p>
                        <p className="font-label-sm text-label-sm text-primary">{spots.length} Sitios</p>
                    </div>
                </div>

                {/* Drawer nav links */}
                <ul className="flex flex-col gap-2 flex-grow">
                    {[
                        { to: "/map",     icon: "map",         label: "Mapa",     active: true },
                        { to: "/",        icon: "location_on", label: "Sitios",   active: false },
                        { to: "/meetups", icon: "groups",      label: "Quedadas", active: false },
                        { to: "/profile", icon: "person",      label: "Perfil",   active: false },
                    ].map(item => (
                        <li key={item.to}>
                            <Link
                                to={item.to}
                                className={`flex items-center px-4 py-3 rounded-lg active:opacity-70 transition-all ${
                                    item.active
                                        ? "bg-secondary-container text-on-secondary-container font-bold"
                                        : "text-on-surface-variant hover:bg-surface-container"
                                }`}
                            >
                                <span
                                    className="material-symbols-outlined mr-sm"
                                    style={{ fontVariationSettings: item.active ? "'FILL' 1" : "'FILL' 0" }}
                                >
                                    {item.icon}
                                </span>
                                <span className="font-body-md text-body-md">{item.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Drawer footer */}
                <div className="mt-auto border-t border-outline-variant pt-sm">
                    {[
                        { icon: "settings", label: "Ajustes" },
                        { icon: "help",     label: "Ayuda" },
                    ].map(item => (
                        <a
                            key={item.label}
                            href="#"
                            className="flex items-center px-4 py-3 text-on-surface-variant hover:bg-surface-container rounded-lg active:opacity-70 transition-all"
                        >
                            <span className="material-symbols-outlined mr-sm">{item.icon}</span>
                            <span className="font-body-md text-body-md">{item.label}</span>
                        </a>
                    ))}
                </div>
            </nav>

            {/* Mobile bottom nav (reusable) */}
            <BottomNavbar activeTab="map" />
        </div>
    );
}
