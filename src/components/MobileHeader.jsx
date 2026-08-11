export default function MobileHeader({ title, onBack }) {
    return (
        <header className="fixed top-0 w-full z-50 bg-surface dark:bg-surface-dim shadow-[0_4px_12px_rgba(0,0,0,0.15)] flex items-center justify-between px-margin-mobile h-12 md:hidden">

            {/* Botón atrás */}
            {onBack ? (
                <button
                    onClick={onBack}
                    aria-label="Volver atrás"
                    className="text-on-surface-variant hover:opacity-70 active:scale-95 transition-all"
                >
                    <span className="material-symbols-outlined">
                        arrow_back
                    </span>
                </button>
            ) : (
                <div className="w-10" />
            )}

            {/* Título */}
            <div className="font-display text-headline-md font-black text-primary dark:text-inverse-primary tracking-tighter">
                {title}
            </div>

            {/* Espacio derecho */}
            <div className="w-10" />

        </header>
    );
}
