import { Link } from "react-router-dom";

/**
 * Helper: returns a skate-themed image URL based on spot type.
 * Centralised here so SpotCard and any future list views all use the same logic.
 */
export function getSpotImage(type = "") {
    const t = type.toLowerCase();
    if (t === "parque" || t === "skatepark") {
        return "https://images.unsplash.com/photo-1564982722483-e290f52921a0?auto=format&fit=crop&q=80&w=600";
    }
    return "https://images.unsplash.com/photo-1520156473095-523681023185?auto=format&fit=crop&q=80&w=600";
}

/**
 * SpotCard — styled card used in the spots grid on the Home page.
 *
 * Displays:
 *  - Thumbnail image (type-based placeholder via getSpotImage)
 *  - Favorite toggle (heart icon, filled when active)
 *  - Static rating badge
 *  - Spot name, type chip, description snippet
 *  - Feature icons (lighting, covered) — greyed out when unavailable
 *  - "Ver en mapa" link → /map
 *  - "Detalles" link → /spot/:id
 *
 * @param {object}   spot             - The spot data object.
 * @param {boolean}  isFavorite       - Whether this spot is currently favorited.
 * @param {function} onToggleFavorite - Called with spot.id when the heart is clicked.
 */
export default function SpotCard({ spot, isFavorite, onToggleFavorite }) {
    return (
        <article className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-outline-variant/30 overflow-hidden flex flex-col hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-shadow duration-300">

            {/* ── Thumbnail ── */}
            <div className="h-48 relative bg-surface-container">
                <img
                    className="w-full h-full object-cover"
                    alt={spot.name}
                    src={getSpotImage(spot.type)}
                    loading="lazy"
                />

                {/* Favorite toggle button */}
                <button
                    onClick={() => onToggleFavorite(spot.id)}
                    aria-label={isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
                    className="absolute top-sm right-sm w-10 h-10 bg-surface-container-lowest/80 backdrop-blur rounded-full flex items-center justify-center text-on-surface-variant hover:text-red-500 transition-colors shadow-sm"
                >
                    <span
                        className={`material-symbols-outlined ${isFavorite ? "text-red-500" : ""}`}
                        style={{ fontVariationSettings: isFavorite ? "'FILL' 1" : "'FILL' 0" }}
                    >
                        favorite
                    </span>
                </button>

                {/* Rating badge */}
                <div className="absolute bottom-sm left-sm">
                    <span className="bg-surface-container-lowest/90 backdrop-blur px-2 py-1 rounded font-label-sm text-on-surface shadow-sm flex items-center gap-1">
                        <span
                            className="material-symbols-outlined text-[16px] text-primary"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                            star
                        </span>
                        4.8
                    </span>
                </div>
            </div>

            {/* ── Card body ── */}
            <div className="p-md flex-grow flex flex-col">
                {/* Title + type chip */}
                <div className="flex justify-between items-start mb-xs gap-2">
                    <h3 className="font-headline-md text-on-surface font-bold line-clamp-1">{spot.name}</h3>
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded font-label-sm whitespace-nowrap shrink-0">
                        {spot.type}
                    </span>
                </div>

                {/* Description snippet */}
                <p className="font-body-md text-secondary line-clamp-2 mb-md flex-grow">
                    {spot.description || "Sin descripción detallada disponible."}
                </p>

                {/* ── Footer: feature icons + action links ── */}
                <div className="flex items-center justify-between pt-md border-t border-outline-variant/30">

                    {/* Lighting & covered icons — greyed when unavailable */}
                    <div className="flex gap-3">
                        <span
                            className={`material-symbols-outlined text-[20px] ${spot.lighting ? "text-primary" : "text-on-surface-variant opacity-30"}`}
                            title={spot.lighting ? "Tiene iluminación" : "Sin iluminación"}
                        >
                            lightbulb
                        </span>
                        <span
                            className={`material-symbols-outlined text-[20px] ${spot.covered ? "text-primary" : "text-on-surface-variant opacity-30"}`}
                            title={spot.covered ? "Cubierto" : "Al aire libre"}
                        >
                            umbrella
                        </span>
                    </div>

                    {/* Action links */}
                    <div className="flex items-center gap-2">
                        <Link
                            to="/map"
                            className="text-secondary font-label-md flex items-center gap-1 hover:text-primary transition-colors text-sm"
                        >
                            <span className="material-symbols-outlined text-[18px]">map</span>
                            Ver en mapa
                        </Link>
                        <Link
                            to={`/spot/${spot.id}`}
                            className="text-primary font-label-md flex items-center gap-1 hover:underline text-sm font-semibold"
                        >
                            Detalles
                            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
}