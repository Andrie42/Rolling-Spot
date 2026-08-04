export default function MobileHeader({
    title
}) {
    return (
        <header className="fixed top-0 w-full z-50 bg-surface dark:bg-surface-dim shadow-[0_4px_12px_rgba(0,0,0,0.15)] flex items-center justify-between px-margin-mobile h-12 md:hidden">
            <div className="w-10" />
            <div className="font-display text-headline-md font-black text-primary dark:text-inverse-primary tracking-tighter">
                {title}
            </div>
            <div className="w-10" />
        </header>
    );
}
