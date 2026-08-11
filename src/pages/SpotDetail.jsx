import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SpotMap from "../components/SpotMap";
import MobileHeader from "../components/MobileHeader";
import Navbar from "../components/Navbar";
import BottomNavbar from "../components/BottomNavbar";


export default function SpotDetail({ spots }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isFavorite, setIsFavorite] = useState(false);

    // Find the spot corresponding to the ID parameter in the URL
    const spot = spots.find(
        (s) => s.id === Number(id)
    );

    // If the spot is not found, display a fallback error view
    if (!spot) {
        return (
            <div className="flex flex-col items-center justify-center h-screen gap-4">
                <h2 className="font-headline-lg text-headline-lg text-error">Spot no encontrado</h2>
                <button
                    className="h-12 px-6 bg-primary text-on-primary rounded-lg font-bold"
                    onClick={() => navigate("/")}
                >
                    Volver a Inicio
                </button>
            </div>
        );
    }

    // Opens Google Maps routing in a new tab using the spot coordinates
    const handleGetDirections = () => {
        const url = `https://www.google.com/maps/dir/?api=1&destination=${spot.lat},${spot.lng}`;
        window.open(url, "_blank");
    };

    // Shares the page via Web Share API or falls back to clipboard copy
    const handleShare = () => {
        if (navigator.share) {
            navigator.share({ title: spot.name, text: spot.description, url: window.location.href })
                .catch(console.error);
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert("Enlace copiado al portapapeles");
        }
    };

    return (
        <div className="bg-surface text-on-surface antialiased pb-24 md:pb-8 min-h-screen">
            <MobileHeader
                title="Rolling Spot"
                onBack={() => navigate(-1)}
            />
            <Navbar activeTab="/spot/:id" />

            <main className="pt-16 max-w-7xl mx-auto md:px-margin-desktop px-0 grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-lg md:pt-24">
                {/* Hero Section & Left Column on Desktop */}
                <div className="md:col-span-8 flex flex-col gap-6 md:gap-8">
                    {/* Hero Image / Header */}
                    <div className="relative w-full aspect-[4/3] md:aspect-video md:rounded-xl overflow-hidden group bg-surface-container-low">
                        {/* We use a high quality placeholder for skating that matches our spot name */}
                        <img
                            className="w-full h-full object-cover"
                            alt={spot.name}
                            src={spot.image || getSpotImage(spot.type)}
                            loading="lazy"
                        />
                        {/* Rating Badge */}
                        <div className="absolute top-4 right-4 flex gap-2">
                            <div className="bg-surface-container-lowest/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-md flex items-center gap-1">
                                <span className="material-symbols-outlined filled text-primary text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                <span className="font-label-md text-label-md text-on-surface font-bold">4.8</span>
                            </div>
                        </div>
                        {/* Gradient and Title overlay */}
                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/70 to-transparent flex items-end p-margin-mobile md:p-6">
                            <h1 className="font-display text-headline-lg-mobile md:text-headline-lg text-white font-bold drop-shadow-md">
                                {spot.name}
                            </h1>
                        </div>
                    </div>

                    {/* Content Area (Mobile gets padding here) */}
                    <div className="px-margin-mobile md:px-0 flex flex-col gap-lg">
                        {/* Quick Info Row */}
                        <div className="flex flex-wrap items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <span className="font-body-md text-body-md text-on-surface-variant">42 reseñas</span>
                                <div className="w-1 h-1 rounded-full bg-outline-variant"></div>
                                <span className="font-body-md text-body-md text-on-surface-variant flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[18px]">distance</span> {spot.city}
                                </span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm border border-surface-container-highest">
                                    <span className="material-symbols-outlined text-[16px]">skateboarding</span> {spot.type}
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm border border-surface-container-highest">
                                    <span className="material-symbols-outlined text-[16px]">lightbulb</span> {spot.lighting ? "Iluminado" : "Sin Iluminación"}
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm border border-surface-container-highest">
                                    {spot.covered ? (
                                        <>
                                            <span className="material-symbols-outlined text-[16px]">umbrella</span> Cubierto
                                        </>
                                    ) : (
                                        <>
                                            <span className="material-symbols-outlined text-[16px]">wb_sunny</span> Exterior
                                        </>
                                    )}
                                </span>
                            </div>
                        </div>

                        <div className="w-full h-px bg-surface-container-high"></div>

                        {/* Description */}
                        <section>
                            <h2 className="font-headline-md text-headline-md text-on-surface mb-3">Sobre este lugar</h2>
                            <p className="font-body-lg text-body-lg text-on-surface-variant">
                                {spot.description || "No hay descripción disponible para este spot. ¡Visítalo y añade tus comentarios para ayudar a la comunidad!"}
                            </p>
                        </section>

                        {/* Technical Details Bento Grid */}
                        <section>
                            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Detalles Técnicos</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {/* Surface */}
                                <div className="bg-surface-container-lowest rounded-xl p-4 shadow-[0_4px_12px_rgba(0,0,0,0.03)] border border-surface-container flex flex-col gap-2 items-start">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-1">
                                        <span className="material-symbols-outlined">layers</span>
                                    </div>
                                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Superficie</span>
                                    <span className="font-label-md text-label-md text-on-surface font-semibold">{spot.surface || "Cemento Liso"}</span>
                                </div>
                                {/* Difficulty */}
                                <div className="bg-surface-container-lowest rounded-xl p-4 shadow-[0_4px_12px_rgba(0,0,0,0.03)] border border-surface-container flex flex-col gap-2 items-start">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-1">
                                        <span className="material-symbols-outlined">signal_cellular_alt</span>
                                    </div>
                                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Nivel</span>
                                    <span className="font-label-md text-label-md text-on-surface font-semibold">{spot.level}</span>
                                </div>
                                {/* Lighting */}
                                <div className="bg-surface-container-lowest rounded-xl p-4 shadow-[0_4px_12px_rgba(0,0,0,0.03)] border border-surface-container flex flex-col gap-2 items-start">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-1">
                                        <span className="material-symbols-outlined">lightbulb</span>
                                    </div>
                                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Iluminación</span>
                                    <span className="font-label-md text-label-md text-on-surface font-semibold">{spot.lighting ? "Sí" : "No"}</span>
                                </div>
                                {/* Covered */}
                                <div className="bg-surface-container-lowest rounded-xl p-4 shadow-[0_4px_12px_rgba(0,0,0,0.03)] border border-surface-container flex flex-col gap-2 items-start">
                                    <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant mb-1">
                                        <span className="material-symbols-outlined">umbrella</span>
                                    </div>
                                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Cubierto</span>
                                    <span className="font-label-md text-label-md text-on-surface font-semibold">{spot.covered ? "Sí" : "No"}</span>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                {/* Right Column / Sticky Sidebar on Desktop */}
                <div className="md:col-span-4 px-margin-mobile md:px-0 mt-8 md:mt-0">
                    <div className="sticky top-24 flex flex-col gap-6">
                        {/* Map / Location Panel */}
                        <div className="glass-panel rounded-xl overflow-hidden flex flex-col shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
                            <div className="p-5 flex flex-col gap-1">
                                <h3 class="font-headline-md text-headline-md text-on-surface">Ubicación</h3>
                                <p className="font-body-md text-body-md text-on-surface-variant">
                                    {spot.city}, España
                                </p>
                            </div>
                            {/* Live Leaflet Map centering the active spot */}
                            <div className="w-full h-48 bg-surface-container relative z-0">
                                <SpotMap
                                    spots={[spot]}
                                    selectedSpot={spot}
                                    style={{ height: "100%", width: "100%" }}
                                />
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col gap-3">
                            <button
                                onClick={handleGetDirections}
                                className="w-full h-14 bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md rounded-xl shadow-[0_4px_12px_rgba(1,111,185,0.3)] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                            >
                                <span className="material-symbols-outlined">directions</span>
                                Cómo llegar
                            </button>
                            <button
                                onClick={() => setIsFavorite(!isFavorite)}
                                className={`w-full h-14 border rounded-xl active:scale-[0.98] transition-all flex items-center justify-center gap-2 font-label-md text-label-md ${isFavorite
                                        ? "bg-red-50 border-red-200 text-red-600 hover:bg-red-100"
                                        : "bg-surface-container-lowest border-outline-variant hover:bg-surface-container-low text-on-surface"
                                    }`}
                            >
                                <span className={`material-symbols-outlined ${isFavorite ? "text-red-600" : "text-outline"}`}
                                    style={{ fontVariationSettings: isFavorite ? "'FILL' 1" : "'FILL' 0" }}>
                                    favorite
                                </span>
                                {isFavorite ? "En Favoritos" : "Añadir a favoritos"}
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}