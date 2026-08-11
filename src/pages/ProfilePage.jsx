import { useState } from "react";
import { Link } from "react-router-dom";
import MobileHeader from "../components/MobileHeader";
import Navbar from "../components/Navbar";
import BottomNavbar from "../components/BottomNavbar";

/**
 * ProfilePage component ports the HTML layout of profile.html.
 * It features dynamic state for the user's registered meetups,
 * letting the user click "Desapuntarse" to remove them from the list,
 * updating the badge counts in real-time.
 */
export default function ProfilePage() {
    // State list for the user's active registrations
    const [myMeetups, setMyMeetups] = useState([
        {
            id: 1,
            title: "Ruta Nocturna Centro",
            category: "Freeride",
            schedule: "Hoy, 19:00",
            location: "Plaza Mayor",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_FRC2wsloy5SwUEFx5a2diMVY1-o4Evv1THTSRbaJShlrfYQpS7370HaC_cQzpqlLC1Lfdq8rxZ-sPKfMLI4SOrwGHgKMjHlqqUpNJ1tvqZqZSDaKjp2CT2cQgnxd3dPAas-WtzB806l0Uyh_t4-UljZl74HcJbaknwy0t9T6ybQO1GaIPswpvPx9hislZB5hZJpIcg-7iQCzfCpdEtbZ-ZO8PxAetBYNfRrqwPKHSoDQ9qLFE3iTujtBVz5pBb_6VWzAkyGs3yVa"
        },
        {
            id: 2,
            title: "Sesión Bowl Matinal",
            category: "Skatepark",
            schedule: "Sáb, 10:00",
            location: "Skatepark Rio",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAk2cG7CT88YzGZdnMEf5obrEpITe4ijwcMpP85NXRh_igLYtcz_En-mDIM-B6Miuakf4aaq1hLE6g_iDAgSpBb87G-8gN5YCokpzhj4JZVk_VgtAKNx0e6KNW1wiYa7zVP-T9Zz9UaSwVVgYl2_DWC7LaZZGrZzLN9JQPqIWsdon4UjZIzJcvSANd-l3aaVh69WswnmKMERSRPO71kIigr8Uqdlf_0IZA4vmhkN7Yvi3XWbVqbZ_Un-IrgRIlrAoxMhVIJ0Q1fhO3Q"
        }
    ]);

    // Removes a meetup registration based on its unique id
    const handleUnregister = (id) => {
        setMyMeetups(myMeetups.filter(meetup => meetup.id !== id));
    };

    return (
        <div className="bg-background min-h-screen pb-24 md:pb-0 pt-16 md:pt-20">
            {/* Shared layout components */}
            <MobileHeader title="Rolling Spot"/>
            <Navbar activeTab="profile" />
            <BottomNavbar activeTab="profile" />

            {/* Main Content Container */}
            <main className="w-full max-w-3xl mx-auto pt-md md:pt-32 px-margin-mobile md:px-margin-desktop">
                {/* Profile Header */}
                <section className="bg-surface-container-lowest rounded-xl shadow-sm p-lg mb-lg border border-outline-variant/30 relative overflow-hidden">
                    {/* Decorative gradient radial element */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    <div className="flex flex-col md:flex-row items-center gap-lg relative z-10">
                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-surface shadow-md flex-shrink-0 bg-surface-container">
                            <img
                                alt="Alex Roller Profile"
                                className="w-full h-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhTVbYnyNCBUt44Ik6Rkb9hgu6IvLGbrUAeVEeIGWj46pCddtH7pcR1PPTCBAJF2Vedok4TUZNiaD_RZKw7U-AkrHy3O9ulAdwY7AvkqSN2SyhYcrubRChZx-S1SLCFrYUq3GQlbh7WT3fgaFcITCAMwQL5ARWEL-vdb_woz-MGvcQ0EgWvrxV2F75AJo1Sof4xNq1KvbOXMp6UTvtYvrt1abAnwir-Clwc_XsseYiFmB4fJaCkPZekgf0Eh-h3r6mWcMN52E0eES2"
                            />
                        </div>
                        <div className="text-center md:text-left flex-1">
                            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold mb-xs">
                                Alex Roller
                            </h2>
                            <div className="flex flex-wrap justify-center md:justify-start gap-sm mb-md">
                                <div className="bg-surface-container-high px-sm py-xs rounded-full flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary text-sm" data-icon="military_tech">military_tech</span>
                                    <span className="font-label-md text-label-md text-on-surface-variant">Nivel: <span className="text-primary font-bold">Unicornio</span></span>
                                </div>
                                <div className="bg-surface-container-high px-sm py-xs rounded-full flex items-center gap-2">
                                    <span className="material-symbols-outlined text-secondary text-sm" data-icon="group_add">group_add</span>
                                    <span className="font-label-md text-label-md text-on-surface-variant">{myMeetups.length} Quedadas</span>
                                </div>
                            </div>
                            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                                Amante del asfalto y explorador urbano. Siempre buscando el próximo spot perfecto para una buena sesión de freeride.
                            </p>
                        </div>
                    </div>
                    <div className="mt-lg pt-md border-t border-outline-variant/30 flex justify-center md:justify-end gap-sm">
                        <button className="h-12 px-lg rounded-full border border-outline text-on-surface-variant font-label-md text-label-md hover:bg-surface-container transition-colors flex items-center gap-2">
                            <span className="material-symbols-outlined" data-icon="edit">edit</span>
                            Editar Perfil
                        </button>
                    </div>
                </section>

                {/* Mis Quedadas Section */}
                <section className="mb-xl">
                    <h3 className="font-headline-md text-headline-md text-on-surface mb-md flex items-center gap-2 font-bold">
                        <span class="material-symbols-outlined text-primary" data-icon="calendar_month">calendar_month</span>
                        Mis Quedadas
                    </h3>
                    
                    {myMeetups.length === 0 ? (
                        <div className="text-center p-xl bg-surface-container-lowest rounded-lg border border-outline-variant/30 text-on-surface-variant">
                            <p className="font-body-lg">No tienes quedadas activas programadas.</p>
                            <Link to="/meetups" className="inline-block mt-4 px-6 py-2 bg-primary text-on-primary rounded-lg font-bold hover:opacity-90">
                                Buscar Quedadas
                            </Link>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-sm">
                            {myMeetups.map((meetup) => (
                                <div
                                    key={meetup.id}
                                    className="bg-surface-container-lowest rounded-lg p-md shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-outline-variant/20 flex flex-col sm:flex-row gap-md items-start sm:items-center transition-all hover:shadow-md"
                                >
                                    <div className="w-full sm:w-24 h-24 rounded-md overflow-hidden flex-shrink-0 bg-surface-container">
                                        <img className="w-full h-full object-cover" alt={meetup.title} src={meetup.image} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-xs">
                                            <span className={`px-2 py-1 rounded text-xs font-bold uppercase tracking-wider ${
                                                meetup.category === 'Freeride' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'
                                            }`}>
                                                {meetup.category}
                                            </span>
                                            <span className="text-on-surface-variant text-sm flex items-center gap-1">
                                                <span className="material-symbols-outlined text-[16px]" data-icon="schedule">schedule</span>
                                                {meetup.schedule}
                                            </span>
                                        </div>
                                        <h4 className="font-headline-md text-headline-md text-on-surface font-bold mb-1">{meetup.title}</h4>
                                        <p className="font-body-md text-body-md text-on-surface-variant text-sm flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[16px]" data-icon="location_on">location_on</span>
                                            {meetup.location}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => handleUnregister(meetup.id)}
                                        className="w-full sm:w-auto h-10 px-md rounded border border-error/50 text-error font-label-sm text-label-sm hover:bg-error-container/50 transition-colors flex items-center justify-center gap-2 active:scale-95"
                                    >
                                        <span className="material-symbols-outlined text-[18px]" data-icon="person_remove">person_remove</span>
                                        Desapuntarse
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            </main>

            {/* Bottom nav rendered by BottomNavbar component above */}
        </div>
    );
}
