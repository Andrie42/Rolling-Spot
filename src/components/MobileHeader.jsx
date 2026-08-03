/**
 * MobileHeader — the top app bar visible only on mobile (md:hidden).
 *
 * Supports two modes:
 *
 * 1. **Standard mode** (showMenu / showSearch): used on list/feed pages
 *    like Home, Meetups, MapPage. Shows a hamburger menu on the left,
 *    the app brand/title in the center, and a search icon on the right.
 *
 * 2. **Sub-page mode** (showBack / showShare): used on detail pages like
 *    SpotDetail. Shows a back button on the left, a title in the center,
 *    and an optional share button on the right.
 *
 * @param {string}   title      - Text shown in the center of the bar.
 * @param {boolean}  showMenu   - Shows a hamburger menu icon (left side).
 * @param {boolean}  showSearch - Shows a search icon (right side).
 * @param {boolean}  showBack   - Shows a back button (left side).
 * @param {function} onBack     - Callback for the back button press.
 * @param {boolean}  showShare  - Shows a share button (right side).
 * @param {function} onShare    - Callback for the share button press.
 */
export default function MobileHeader({
    title,
    showMenu = false,
    showSearch = false,
    showBack = false,
    onBack,
    showShare = false,
    onShare,
}) {
    return (
        <header className="fixed top-0 w-full z-50 bg-surface dark:bg-surface-dim shadow-[0_4px_12px_rgba(0,0,0,0.15)] flex items-center justify-between px-margin-mobile h-16 md:hidden">
            {/* Left side: back button OR hamburger menu */}
            {showBack ? (
                <button
                    aria-label="Volver atrás"
                    onClick={onBack}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-lowest shadow-sm border border-outline-variant text-on-surface-variant hover:opacity-80 active:scale-95 transition-all"
                >
                    <span className="material-symbols-outlined">arrow_back</span>
                </button>
            ) : showMenu ? (
                <button
                    aria-label="Abrir menú"
                    className="text-on-surface-variant dark:text-outline-variant hover:opacity-80 transition-opacity active:scale-95 transition-transform duration-200"
                >
                    <span className="material-symbols-outlined">menu</span>
                </button>
            ) : (
                /* Spacer to keep title centered when no left button */
                <div className="w-10" />
            )}

            {/* Center: page title or brand name */}
            <div className="font-display text-headline-md font-black text-primary dark:text-inverse-primary tracking-tighter">
                {title}
            </div>

            {/* Right side: share button OR search icon */}
            {showShare ? (
                <button
                    aria-label="Compartir"
                    onClick={onShare}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-lowest shadow-sm border border-outline-variant text-on-surface-variant hover:opacity-80 active:scale-95 transition-all"
                >
                    <span className="material-symbols-outlined">share</span>
                </button>
            ) : showSearch ? (
                <button
                    aria-label="Buscar"
                    className="text-on-surface-variant dark:text-outline-variant hover:opacity-80 transition-opacity active:scale-95 transition-transform duration-200"
                >
                    <span className="material-symbols-outlined">search</span>
                </button>
            ) : (
                /* Spacer when no right button */
                <div className="w-10" />
            )}
        </header>
    );
}
