import { useState } from "react";
import MobileHeader from "../components/MobileHeader";
import Navbar from "../components/Navbar";
import BottomNavbar from "../components/BottomNavbar";

/**
 * MeetupsPage component displays upcoming meetups for the rollerblading community.
 * It maps static mockup data from meetups.html to React state.
 * Features:
 *  - Difficulty filter: filter meetups by level (Todos, Oruga, Cohete, Unicornio, etc.).
 *  - Interactive signup toggle: Join or leave meetups dynamically, which alters
 *    the badge counter and button style instantaneously.
 */
export default function MeetupsPage() {
    // Initializing state with meetups data from the meetup.html mockup
    const [meetups, setMeetups] = useState([
        {
            id: 1,
            title: "Ruta Nocturna Centro",
            level: "cohete",
            organizer: "Alex Roller",
            description: "Patinaje nocturno rápido por el distrito financiero. Espera pavimento liso...",
            startLocation: "Plaza Mayor",
            endLocation: "Retiro Park",
            participants: 24,
            joined: true,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdK4MlJfldkOx0f2nw3LG7tkhLixKnCIawwKY1TMR2q0fQHwsryUE2FPGIltF_CxKG9rBeqap54CeDzvMwrs0jIpy6tgezled9Oj9ikKad61lkDd_c9ARo_ci-62ClwyPIqA1N7dplwNJZKY5gH6bsqWqAndew0LqsTjeYnxSLujnWBufMxRfdeezUwmR-7WLA4CE6htgMhIGh7KKm7LRJNlnL013nBvtEsRtFe4M4wIO88v1X7GtJ2MmeuFX1dvCesW5H031C2lxs"
        },
        {
            id: 2,
            title: "Básicos para Principiantes",
            level: "oruga",
            organizer: "Sarah Wheels",
            description: "¿Primera vez en patines? Únete a una sesión suave y segura...",
            startLocation: "Madrid Rio (South)",
            endLocation: "Madrid Rio (South)",
            participants: 12,
            joined: false,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD51idSPZoXSG5e66bcH9Pbr_ZjOzrMVZaQ66ehNAIDAFX6k2aZoNaqNTBKOEDKJXn-8tVJjNOVQgfnOpEq247JKtzn8jKoO65OavQvyOJIe9AwEQIp-lKYpL7HYfpqE9kuncKJaAtkeB2pdrbdUPK-RGfyenDapSvvNG1iMG1MKhjKRFbv7nPCyS8ZXn-n24SsTA3VeF6sbLvJ502186UM-CmMTSOjO8mpMUtlBiMMJd3h-4X-_GDGbvtaVpkWw0DD4e7qhxt4NSdr"
        },
        {
            id: 3,
            title: "Freeride Urbano",
            level: "unicornio",
            organizer: "Mike Jumps",
            description: "Freeride urbano de alta velocidad. Escalas, saltos y tráfico...",
            startLocation: "Moncloa Metro",
            endLocation: "Nuevos Ministerios",
            participants: 5,
            joined: false,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPbCnYTgXQHLR9v13zyuMfUsWLrIV1aiH9x9oV1Q_mJk7Max0yw9N2j3hO0Ayn0ACcCkx_tLpavL9ruLqp0lF5AsFaQgpHEDsVc1-SnlnQNiKDYRHBcUYtaL51vEhZJbJsy7iPog618_tnefFeKWFeLZraX8sNdQUxidF7DSnRb8JAPHW4R-hEO-856xImnd2Vu2MtpC8sgQGKYU-o8rSFAT8zPZP7ohj31JjzMQ81T1WD5pjENFNc8SGjYBMA5qAXf3D_C7Lt5Xno"
        }
    ]);

    // Active level filter state
    const [selectedLevel, setSelectedLevel] = useState("Todos");

    // Toggle joining or leaving a meetup
    const handleToggleJoin = (id) => {
        setMeetups(meetups.map(meetup => {
            if (meetup.id === id) {
                return {
                    ...meetup,
                    joined: !meetup.joined,
                    participants: meetup.joined ? meetup.participants - 1 : meetup.participants + 1
                };
            }
            return meetup;
        }));
    };

    // Filter meetups dynamically
    const filteredMeetups = meetups.filter(meetup => {
        if (selectedLevel === "Todos") return true;
        return meetup.level.toLowerCase() === selectedLevel.toLowerCase();
    });

    const levels = ["Todos", "Caracol", "Oruga", "Mariposa", "Cohete", "Unicornio"];

    return (
        <div className="font-body-md text-on-surface antialiased pt-16 pb-24 md:pt-20 md:pb-0 min-h-screen flex flex-col bg-[#F8FAFC]">
            {/* Shared layout components */}
            <MobileHeader title="ROLLERHUB" showMenu showSearch />
            <Navbar activeTab="meetups" />
            <BottomNavbar activeTab="meetups" />

            {/* Main Content */}
            <main className="flex-grow flex flex-col px-margin-mobile md:px-margin-desktop py-lg max-w-[1280px] mx-auto w-full gap-lg">
                
                {/* Filters Section */}
                <div className="flex flex-col gap-md pb-2">
                    {/* Horizontal scroll of levels */}
                    <div className="flex items-center gap-sm overflow-x-auto pb-2 -mx-margin-mobile px-margin-mobile scrollbar-hide">
                        {levels.map(level => (
                            <button
                                key={level}
                                onClick={() => setSelectedLevel(level)}
                                className={`flex-shrink-0 px-4 py-1.5 rounded-full font-label-sm text-label-sm shadow-sm transition-colors border ${
                                    selectedLevel === level
                                        ? "bg-primary text-on-primary border-primary"
                                        : "bg-surface-container-high text-on-surface-variant border-outline-variant hover:bg-surface-variant"
                                }`}
                            >
                                {level}
                            </button>
                        ))}
                    </div>
                    
                    {/* Secondary Dropdown-like Buttons (Mock Action) */}
                    <div className="flex items-center gap-2">
                        <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container text-on-surface-variant border border-outline-variant font-label-sm text-label-sm hover:bg-surface-variant transition-colors">
                            <span className="material-symbols-outlined text-[18px]">location_on</span>
                            <span>Toda la ciudad</span>
                            <span className="material-symbols-outlined text-[18px]">expand_more</span>
                        </button>
                        <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container text-on-surface-variant border border-outline-variant font-label-sm text-label-sm hover:bg-surface-variant transition-colors">
                            <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                            <span>Hoy</span>
                            <span className="material-symbols-outlined text-[18px]">expand_more</span>
                        </button>
                    </div>
                </div>

                {/* Section Header */}
                <div className="flex justify-between items-end">
                    <div>
                        <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold">
                            Próximas Quedadas
                        </h2>
                        <p className="font-body-md text-body-md text-on-surface-variant mt-1">Únete a la comunidad sobre ruedas.</p>
                    </div>
                    {/* Add meetup FAB */}
                    <button className="bg-primary text-on-primary font-label-md text-label-md px-md py-sm rounded-lg hover:opacity-90 active:scale-95 transition-all shadow-md flex items-center gap-2 h-12">
                        <span className="material-symbols-outlined">add</span>
                        <span className="hidden md:inline">Crear Quedada</span>
                    </button>
                </div>

                {/* Meetups Grid */}
                {filteredMeetups.length === 0 ? (
                    <div className="text-center p-xl bg-white rounded-xl shadow-sm border border-outline-variant/30 text-on-surface-variant">
                        <p className="font-body-lg">No hay quedadas programadas para este nivel de dificultad.</p>
                        <button onClick={() => setSelectedLevel("Todos")} className="mt-4 px-6 py-2 bg-primary text-on-primary rounded-lg font-bold">
                            Mostrar Todas
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
                        {filteredMeetups.map((meetup) => (
                            <article key={meetup.id} className="glass-card rounded-xl overflow-hidden flex flex-col bg-white border border-[#E2E8F0] shadow-sm">
                                {/* Image and participants count */}
                                <div className="relative h-48 w-full bg-surface-container">
                                    <img className="w-full h-full object-cover" alt={meetup.title} src={meetup.image} />
                                    <div className="absolute top-sm right-sm bg-surface/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                                        <span className="material-symbols-outlined text-primary text-[16px]">groups</span>
                                        <span className="font-label-sm text-label-sm text-on-surface font-bold">{meetup.participants}</span>
                                    </div>
                                </div>

                                {/* Details Body */}
                                <div className="p-md flex-grow flex flex-col gap-sm">
                                    <div className="flex justify-between items-start">
                                        <h3 className="font-headline-md text-headline-md text-on-surface font-bold">{meetup.title}</h3>
                                        <div className="flex items-center gap-1 bg-surface-container-high px-2 py-1 rounded-md">
                                            <span className="material-symbols-outlined text-[16px] text-primary">
                                                {meetup.level === 'oruga' && 'bug_report'}
                                                {meetup.level === 'cohete' && 'rocket_launch'}
                                                {meetup.level === 'unicornio' && 'auto_awesome'}
                                            </span>
                                            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">{meetup.level}</span>
                                        </div>
                                    </div>
                                    <p className="font-label-sm text-label-sm text-secondary flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[14px]">person</span>
                                        Organizado por {meetup.organizer}
                                    </p>
                                    <p className="font-body-md text-body-md text-on-surface-variant flex-grow line-clamp-2">{meetup.description}</p>
                                    
                                    <div className="space-y-2 mt-2 pt-2 border-t border-surface-variant">
                                        <div className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface">
                                            <span className="material-symbols-outlined text-primary text-[16px]">my_location</span>
                                            <span>Inicio: {meetup.startLocation}</span>
                                        </div>
                                        <div className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface">
                                            <span className="material-symbols-outlined text-secondary text-[16px]">flag</span>
                                            <span>Fin: {meetup.endLocation}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Join Button Actions */}
                                <div className="p-md bg-surface-container-lowest border-t border-surface-variant mt-auto">
                                    {meetup.joined ? (
                                        <button
                                            onClick={() => handleToggleJoin(meetup.id)}
                                            className="w-full h-12 border border-outline text-secondary font-label-md text-label-md rounded-lg hover:bg-surface-variant active:scale-95 transition-all flex justify-center items-center gap-2"
                                        >
                                            <span className="material-symbols-outlined">check_circle</span>
                                            Desapuntarse
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => handleToggleJoin(meetup.id)}
                                            className="w-full h-12 bg-primary text-on-primary font-label-md text-label-md rounded-lg hover:opacity-90 active:scale-95 transition-all flex justify-center items-center gap-2 shadow-md"
                                        >
                                            <span className="material-symbols-outlined">person_add</span>
                                            Apuntarse
                                        </button>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </main>

            {/* Bottom nav rendered by BottomNavbar component above */}
        </div>
    );
}
