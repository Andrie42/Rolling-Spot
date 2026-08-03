import { useState } from "react";
import MobileHeader from "../components/MobileHeader";
import Navbar from "../components/Navbar";
import BottomNavbar from "../components/BottomNavbar";
import SpotCard from "../components/SpotCard";

/**
 * Home — the main spots list page, styled from spotsList.html.
 *
 * Features:
 *  - Real-time text search filtering by spot name or city.
 *  - Category chip filters derived dynamically from the spots data.
 *  - Spot cards rendered via the reusable <SpotCard> component.
 *  - Per-card favorite toggling (local state).
 *  - Desktop Navbar + Mobile MobileHeader + BottomNavbar (all reusable).
 */
export default function Home({ spots }) {
    const [searchQuery, setSearchQuery]   = useState("");
    const [selectedType, setSelectedType] = useState("Todos");
    const [favorites, setFavorites]       = useState({});

    // Toggle the favorite flag for a single spot by id
    const toggleFavorite = (spotId) => {
        setFavorites(prev => ({ ...prev, [spotId]: !prev[spotId] }));
    };

    // Build unique type list for filter chips, always starting with "Todos"
    const spotTypes = ["Todos", ...new Set(spots.map(s => s.type))];

    // Apply both search text and category filters
    const filteredSpots = spots.filter(spot => {
        const matchesSearch =
            spot.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            spot.city.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesType = selectedType === "Todos" || spot.type === selectedType;
        return matchesSearch && matchesType;
    });

    return (
        <div className="bg-surface text-on-surface font-body-md min-h-screen pt-16 pb-24 md:pt-20 md:pb-0">
            {/* ── Shared layout components ── */}
            <MobileHeader title="ROLLERHUB" showMenu showSearch />
            <Navbar activeTab="spots" />
            <BottomNavbar activeTab="spots" />

            {/* ── Main content ── */}
            <main className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop pt-lg pb-xl">

                {/* Search bar + category chips */}
                <section className="mb-lg mt-md">
                    <div className="relative max-w-2xl mx-auto">
                        <span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-outline">search</span>
                        <input
                            className="w-full h-14 pl-12 pr-12 rounded-full border border-outline-variant bg-surface-container-lowest focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-body-md text-on-surface placeholder:text-outline shadow-sm"
                            placeholder="Buscar skateparks, bowls, zonas lisas..."
                            type="text"
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                        />
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-surface-container w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors">
                            <span className="material-symbols-outlined">tune</span>
                        </button>
                    </div>

                    {/* Dynamically generated category filter chips */}
                    <div className="flex gap-sm overflow-x-auto pb-2 mt-md no-scrollbar justify-start md:justify-center">
                        {spotTypes.map(type => (
                            <button
                                key={type}
                                onClick={() => setSelectedType(type)}
                                className={`shrink-0 px-4 py-2 rounded-full font-label-sm flex items-center gap-2 border transition-colors ${
                                    selectedType === type
                                        ? "bg-primary-container text-on-primary-container border-primary-container font-semibold"
                                        : "bg-surface-container-lowest text-on-surface-variant border-outline-variant hover:bg-surface-container"
                                }`}
                            >
                                {selectedType === type && (
                                    <span className="material-symbols-outlined text-[18px]">check</span>
                                )}
                                {type}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Results counter */}
                <div className="flex justify-between items-end mb-md">
                    <h2 className="font-headline-lg-mobile md:font-headline-lg text-on-surface font-bold">Explorar Sitios</h2>
                    <p className="font-label-sm text-secondary">{filteredSpots.length} resultados encontrados</p>
                </div>

                {/* Spot grid or empty state */}
                {filteredSpots.length === 0 ? (
                    <div className="text-center p-xl bg-white rounded-xl shadow-sm border border-outline-variant/30 text-on-surface-variant max-w-lg mx-auto">
                        <p className="font-body-lg">No encontramos ningún spot que coincida con tus filtros.</p>
                        <button
                            onClick={() => { setSearchQuery(""); setSelectedType("Todos"); }}
                            className="mt-4 px-6 py-2 bg-primary text-on-primary rounded-lg font-bold"
                        >
                            Limpiar Filtros
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md md:gap-lg">
                        {filteredSpots.map(spot => (
                            <SpotCard
                                key={spot.id}
                                spot={spot}
                                isFavorite={!!favorites[spot.id]}
                                onToggleFavorite={toggleFavorite}
                            />
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}