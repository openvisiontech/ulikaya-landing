import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Cpu, Navigation, Eye, Waves, Wrench, Radio, Volume2, ShieldAlert, Zap, Cpu as Board, Wifi, Battery, Camera, Disc, MonitorSpeaker, Compass, Activity, Truck, ChevronRight, Network, Send } from 'lucide-react';

const Navbar = () => (
    <nav className="flex items-center justify-between px-8 py-6 bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 transition-all duration-300">
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                <Bot size={24} className="text-secondary" />
            </div>
            <span className="text-xl font-bold tracking-tight text-primary">Uli Kaya</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-600">
            <a href="#hero" className="hover:text-secondary transition-colors">Home</a>
            <a href="#architecture" className="hover:text-secondary transition-colors">Architecture</a>
            <a href="#capabilities" className="hover:text-secondary transition-colors">Capabilities</a>
            <a href="#specs" className="hover:text-secondary transition-colors">Specifications</a>
        </div>
        <a
            href="https://www.ulisdk.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent hover:opacity-90 text-white px-5 py-2 rounded-full text-sm font-semibold transition shadow-[0_4px_15px_rgba(242,148,98,0.4)]"
        >
            Explore Uli SDK
        </a>
    </nav>
);

const Hero = () => {
    return (
        <section id="hero" className="relative pt-24 pb-32 overflow-hidden bg-primary text-white">
            <div
                className="absolute inset-0 bg-cover bg-center z-0 opacity-30"
                style={{ backgroundImage: `url('/soccer_stadium.png')` }}
            />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/30 via-primary to-primary opacity-60 pointer-events-none z-0" />

            <div className="max-w-7xl mx-auto px-8 relative z-10 flex flex-col md:flex-row items-center gap-16">
                <div className="flex-1 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/15 border border-secondary/30 text-secondary text-xs font-bold mb-8 uppercase tracking-widest shadow-[0_0_15px_rgba(0,173,181,0.2)]"
                    >
                        <Zap size={14} className="animate-pulse" /> Agentic AI Ready Framework
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                        className="text-6xl md:text-7xl font-extrabold mb-8 tracking-tight leading-tight"
                    >
                        Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-400">Uli Kaya</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                        className="text-xl text-gray-300 mb-10 leading-relaxed font-light"
                    >
                        A powerful robotics platform with native voice conversation capabilities. Hosting AI agents with local LLM, Uli Kaya is ready for the Agentic AI era.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                        className="flex flex-wrap justify-center md:justify-start gap-4"
                    >
                        <a
                            href="#capabilities"
                            className="px-8 py-4 bg-secondary text-white rounded-xl font-bold flex items-center gap-2 hover:bg-teal-500 transition-all shadow-[0_4px_15px_rgba(0,173,181,0.4)]"
                        >
                            Explore Capabilities <ChevronRight size={18} />
                        </a>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                    transition={{
                        opacity: { delay: 0.2, type: "spring" },
                        scale: { delay: 0.2, type: "spring" },
                        y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="flex-1 relative mt-20 lg:mt-32"
                >
                    <div className="absolute inset-0 bg-secondary/20 blur-3xl rounded-full transform scale-90" />
                    <img
                        src="/uli-kaya-transparent.png"
                        alt="Uli Kaya Robot"
                        className="relative z-10 w-full max-w-lg mx-auto drop-shadow-2xl"
                    />
                </motion.div>
            </div>
        </section>
    );
};

const Architecture = () => (
    <section id="architecture" className="py-24 bg-bg-light relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-8 relative z-10">

            <div className="flex flex-col lg:flex-row gap-16 items-center">

                {/* Left: Architecture SVG Image */}
                <div className="flex-1 w-full">
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-secondary/10 blur-3xl rounded-full opacity-50" />
                        <div className="relative rounded-3xl border border-gray-200 bg-white p-6 shadow-2xl flex justify-center items-center overflow-hidden">
                            <img
                                src="/architecture.svg"
                                alt="Uli Kaya Architecture"
                                className="w-full h-auto rounded-2xl object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                            />
                        </div>
                    </div>
                </div>

                {/* Right: Architecture Text Content */}
                <div className="flex-1">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold mb-6"
                    >
                        <Cpu size={14} /> SYSTEM ARCHITECTURE
                    </motion.div>

                    <h2 className="text-4xl font-extrabold text-primary mb-6 tracking-tight">
                        Built on Uli SDK & <br />
                        <span className="text-secondary">Nvidia ISAAC ROS</span>
                    </h2>

                    <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                        <p>
                            The capabilities of Uli Kaya are implemented with Uli SDK applications, which communicate between the two onboard Nvidia Jetson devices. The Uli SDK applications form a robust subsystem with two nodes in the infrastructure.
                        </p>
                        <p>
                            Navigation, perceptions, and drives run on Nvidia ISAAC ROS, integrated via auto-generated python bindings. Topics route through Uli SDK Data Topic Services for native viewing and logging—no need to configure ROS RVIZ.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </section>
);

const Capabilities = () => {
    const capabilities = [
        { title: "Voice Conversation", desc: "Fine-tuned onboard LLM (Gemma 3) with private information, integrated speech-to-text, and text-to-speech modules.", icon: <Volume2 className="text-secondary" /> },
        { title: "Maneuverability", desc: "Omnidirectional movement capability including full 360-degree zero-radius turning.", icon: <Compass className="text-accent" /> },
        { title: "Teleoperation", desc: "Remote control capabilities executed seamlessly via gamepad joysticks.", icon: <Radio className="text-secondary" /> },
        { title: "Autonomous Navigation", desc: "Independent movement featuring real-time visual SLAM and autonomous navigation.", icon: <Navigation className="text-accent" /> },
        { title: "Avoidance Systems", desc: "Advanced detection and evasion of incoming obstacles and drop-offs (cliffs).", icon: <ShieldAlert className="text-secondary" /> },
        { title: "Proximity Sensing", desc: "Environmental range detection analyzing front, lateral, and rear surroundings.", icon: <Waves className="text-accent" /> },
        { title: "Object Tracking", desc: "Intelligent ability to continuously track and acquire specified visual objects.", icon: <Eye className="text-secondary" /> },
        { title: "Expressive Mechanisms", desc: "Mechanical eyes producing expressions: directed gaze, aperture adjustments, and blinking.", icon: <Bot className="text-accent" /> },
        { title: "Motorized Interaction", desc: "Front-mounted motorized pusher designed capable of kicking objects like a foosball.", icon: <Wrench className="text-secondary" /> },
    ];

    return (
        <section id="capabilities" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-primary mb-4 tracking-tight">Core Functional Capabilities</h2>
                    <div className="w-24 h-1 bg-secondary mx-auto rounded-full opacity-70" />
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {capabilities.map((c, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="p-8 rounded-2xl bg-bg-light hover:bg-white border border-transparent shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-secondary/20 transition-all duration-300 group"
                        >
                            <div className="mb-6 text-3xl p-4 bg-white rounded-2xl w-16 h-16 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                {c.icon}
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">{c.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">{c.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Specifications = () => {
    const [formState, setFormState] = useState('idle');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormState('loading');

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const scriptUrl = 'https://script.google.com/macros/s/AKfycbxwFSQWjR1IkNVtQNfFTWgf_kAc_Tgq4VLy-1eJbaVeNBRjUdZBb_y5fNf-7TH5Y-YUMg/exec';

            await fetch(scriptUrl, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8',
                },
                body: JSON.stringify(data),
            });

            setTimeout(() => setFormState('success'), 800);
        } catch (error) {
            console.error('Error submitting form:', error);
            setFormState('idle');
            alert('Failed to submit form. Please try again.');
        }
    };

    const specs = [
        { text: "Two Nvidia Jetson Orin Nano systems", icon: <Board size={20} className="text-secondary" /> },
        { text: "Arduino Uno with PWM Shield", icon: <Cpu size={20} className="text-secondary" /> },
        { text: "Wireless (Wi-Fi) connectivity integration", icon: <Wifi size={20} className="text-secondary" /> },
        { text: "Accommodates up to 3 DeWALT 20V 6AH batteries", icon: <Battery size={20} className="text-secondary" /> },
        { text: "Three highly sensitive range sensors", icon: <Activity size={20} className="text-secondary" /> },
        { text: "Intel RealSense 3D camera", icon: <Camera size={20} className="text-secondary" /> },
        { text: "Looking-down High Definition (HD) camera", icon: <Eye size={20} className="text-secondary" /> },
        { text: "ReSpeaker V2 mic array & Acoustic Source Localization", icon: <MonitorSpeaker size={20} className="text-secondary" /> },
        { text: "Two onboard audio output speakers", icon: <Volume2 size={20} className="text-secondary" /> },
        { text: "Three omnidirectional maneuverable wheels", icon: <Disc size={20} className="text-secondary" /> },
        { text: "Operational speed of 0.3 meters per second", icon: <Zap size={20} className="text-secondary" /> },
        { text: "Unit weight of 8 pounds (without battery)", icon: <Truck size={20} className="text-secondary" /> },
        { text: "Dimensions: 200mm x 220mm x 360mm", icon: <Navigation size={20} className="text-secondary" /> },
    ];

    return (
        <section id="specs" className="py-24 bg-primary text-white border-t border-white/10">
            <div className="max-w-6xl mx-auto px-8 flex flex-col lg:flex-row gap-16">
                <div className="lg:w-1/3">
                    <div className="sticky top-32">
                        <h2 className="text-4xl font-extrabold mb-4 tracking-tight">Hardware Specs</h2>
                        <div className="w-24 h-1 bg-accent mb-8 rounded-full opacity-90" />
                        <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light">
                            Uli Kaya is meticulously engineered from the ground up to support highly advanced Agentic AI interactions with enterprise-grade durability.
                        </p>
                        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                            {formState === 'success' ? (
                                <div className="text-center py-6">
                                    <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Send size={24} />
                                    </div>
                                    <h4 className="text-white font-bold mb-2">Request Received</h4>
                                    <p className="text-sm text-gray-400 font-light">We will be in touch shortly.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <h4 className="text-white font-bold mb-2">Ready to build?</h4>
                                        <p className="text-sm text-gray-400 font-light mb-4">Request a kit quote.</p>
                                    </div>
                                    <input name="fullName" required className="w-full bg-white/10 border border-white/20 p-3 rounded-lg text-white outline-none focus:border-secondary transition shadow-sm placeholder-gray-400 text-sm" placeholder="Full Name" />
                                    <input name="email" required type="email" className="w-full bg-white/10 border border-white/20 p-3 rounded-lg text-white outline-none focus:border-secondary transition shadow-sm placeholder-gray-400 text-sm" placeholder="Email Address" />

                                    <button
                                        disabled={formState === 'loading'}
                                        className="w-full py-3 bg-accent hover:bg-orange-500 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-accent/20 disabled:opacity-75 disabled:cursor-not-allowed mt-2"
                                    >
                                        {formState === 'loading' ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Submitting...
                                            </>
                                        ) : (
                                            'Request Quote'
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
                <div className="lg:w-2/3 grid sm:grid-cols-2 gap-4">
                    {specs.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-4 p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-colors"
                        >
                            <div className="shrink-0 mt-1">{item.icon}</div>
                            <span className="text-gray-300 font-medium tracking-wide text-sm">{item.text}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Footer = () => (
    <footer className="py-12 bg-primary border-t border-white/5 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} Open Vision Technology, LLC. All rights reserved.</p>
    </footer>
);

const App = () => (
    <div className="min-h-screen bg-bg-light font-sans selection:bg-secondary/30 selection:text-white">
        <Navbar />
        <Hero />
        <Architecture />
        <Capabilities />
        <Specifications />
        <Footer />
    </div>
);

export default App;
