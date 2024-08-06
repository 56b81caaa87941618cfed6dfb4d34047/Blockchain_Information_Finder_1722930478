/* Summary: Contains a section with the following components:
1. Particles animation: A canvas element for displaying a particle animation in the background.
2. Illustration: An SVG illustration with a gradient background and various filters applied.
3. Hero content: The main content of the landing page, including an announcement text, a hero text, a sub-hero text, and two buttons. The hero content is centered.
*/

Vue.component("purple_hero_component_1722930481", {
    template: `
    <section id="hero-section-container" class="bg-gradient-to-br from-purple-900 to-black">
        <div id="section-container" class="relative max-w-6xl mx-auto px-4 sm:px-6 bg-opacity-20 bg-purple-800 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg">
            <div id="hero-content-container" class="pt-32 pb-16 md:pt-52 md:pb-32">
                <!-- Hero content -->
                <div id="hero-content" class="max-w-3xl mx-auto text-center" style="position: relative;z-index: 1">
                    <div id="announcement-text" class="mb-6" data-aos="fade-down"><div id="announcement-text-inner" class="flex relative before:absolute before:inset-0 before:blur-md"><a id="announcement-link" class="flex-1 btn-sm py-0.5 transition duration-150 ease-in-out group relative before:absolute before:inset-0 before:rounded-full before:pointer-events-none shadow bg-opacity-30 bg-blue-500 hover:bg-opacity-50 text-blue-200 hover:text-white" href="#0"><span id="announcement-link-text" class="relative inline-flex items-center">Discover the latest in blockchain technology - Now available! <span id="announcement-arrow" class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1 text-pink-400">-&gt;</span></span></a></div></div>
                    <div class="flex" id="hero-text-container"><h1 id="hero-text" class="h1 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-pink-500 to-purple-600 pb-4" data-aos="fade-down">Uncover the Future of Blockchain</h1></div>
                    <div class="flex" id="sub-hero-text-container"><p id="sub-hero-text" class="flex-1 text-lg mb-8 text-blue-200" data-aos="fade-down" data-aos-delay="200">Stay ahead of the curve with our cutting-edge app that brings you the newest and most innovative blockchain information at your fingertips.</p></div>
                    <div id="hero-buttons" class="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4" data-aos="fade-down" data-aos-delay="400">
                        <div id="get-started-button-container" class="flex"><a id="get-started-button" class="flex-1 btn w-full transition duration-150 ease-in-out group bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700" href="#0">Get Started <span id="get-started-arrow" class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1 text-blue-200">-&gt;</span></a></div>
                        <div id="docs-button-container" class="flex">
                            <a id="docs-button" class="flex-1 btn bg-opacity-25 hover:bg-opacity-40 w-full transition duration-150 ease-in-out bg-blue-800 text-blue-200 hover:text-white" href="#0">
                                <svg id="docs-icon" class="shrink-0 mr-3 fill-current text-pink-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="m1.999 0 1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 0l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 10l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM6.292 7.586l2.646-2.647L11.06 7.06 8.413 9.707zM0 13.878l5.586-5.586 2.122 2.121L2.12 16z" /></svg>
                                <span id="docs-button-text">Read the docs</span>
                            </a>
                        </div>
                    </div>
    
                </div>
    
            </div>
        </div>
    </section>`,
        data() {
            return {
                expanded: false, 
                tab: null,
                announcementTextStyle: "before:bg-purple-500",
                announcementLinkStyle: "text-slate-300",
                announcementLinkHoverStyle: "hover:text-white",
                announcementLinkGradientStyle: "[background:linear-gradient(theme(colors.purple.500),_theme(colors.purple.500))_padding-box,_linear-gradient(theme(colors.purple.500),_theme(colors.purple.200)_75%,_theme(colors.transparent)_100%)_border-box]",
                announcementLinkBeforeStyle:"before:bg-slate-800/50",
                landingPageAnnouncementTextStyle: "text-purple-500",
                landingPageSubHeroTextStyle: "text-slate-300",
                getStartedButtonPrimaryStyle: "text-slate-900",
                getStartedButtonGradientStyle: "bg-gradient-to-r from-white/80 via-white to-white/80",
                getStartedButtonHoverStyle: "hover:bg-white",
                getStartedArrowStyle: "text-purple-500",
                docsButtonPrimaryStyle: "text-slate-200",
                docsButtonHoverStyle: "hover:text-white",
                docsButtonBackgroundStyle: "bg-slate-900",
                docsIconStyle: "fill-slate-300"
            };
        },
    });
                    