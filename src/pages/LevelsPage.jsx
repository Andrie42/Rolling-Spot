import { LEVELS } from "../constants/levels";
import MobileHeader from "../components/MobileHeader";
import Navbar from "../components/Navbar";
import BottomNavbar from "../components/BottomNavbar";


export default function LevelsPage() {
    const levels = Object.values(LEVELS);

    return (
        <div className="bg-surface text-on-surface min-h-screen pt-16 pb-24 md:pt-20 md:pb-0">

            <MobileHeader title="Guía de niveles" />
            <Navbar activeTab="levels" />
            <BottomNavbar activeTab="levels" />

            <main className="max-w-[1000px] mx-auto px-margin-mobile md:px-margin-desktop py-xl">
                <section className="text-center mb-xl">

                    <span className="text-5xl">
                        🛹
                    </span>

                    <h1 className="font-headline-lg-mobile md:font-headline-lg font-bold mt-md">
                        ¿Qué nivel soy?
                    </h1>

                    <p className="font-body-lg text-secondary max-w-2xl mx-auto mt-sm">
                        En Rolling Spot utilizamos la jerga de los patinadores mas veteranos
                        para describir el nivel de cada uno. Encuentra el tuyo y
                        descubre qué spots y quedadas pueden ser para ti.
                    </p>
                </section>

                {/* Lista de niveles */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-md">

                    {levels.map((level) => (

                        <article
                            key={level.label}
                            className="bg-white rounded-2xl border border-outline-variant/30 p-lg shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="text-5xl mb-md">
                                {level.icon}
                            </div>
                            <h2 className="font-headline-md font-bold">
                                {level.label}
                            </h2>
                            <p className="font-body-md text-secondary mt-sm">
                                {level.description}
                            </p>

                        </article>

                    ))}

                </section>

            </main>

        </div>
    );
}