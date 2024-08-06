/* Summary: The section has a blurred radial gradient background and a call-to-action (CTA) content block.
It is centered on the page and includes a gradient-based title, a subtitle, a paragraph of text, and a button with a gradient background.
*/

Vue.component("purple_background_cta_component_1722930481", {
    template: `
    <section id="cta-section-container" class="bg-black bg-opacity-80">
        <div id="section-container" class="max-w-6xl mx-auto px-4 sm:px-6">
            <div id="content-container" class="relative px-8 py-12 md:py-20 rounded-3xl overflow-hidden bg-purple-900 bg-opacity-30 backdrop-filter backdrop-blur-lg shadow-lg">
                <!-- Radial gradient -->
                <div id="radial-gradient" class="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square" aria-hidden="true">
                    <div id="radial-gradient-outer" class="absolute inset-0 translate-z-0 rounded-full blur-[120px] opacity-70 bg-blue-500"></div>
                    <div id="radial-gradient-inner" class="absolute w-1/4 h-1/4 translate-z-0 rounded-full blur-[40px] bg-pink-400"></div>
                </div>
                <!-- Blurred shape -->
                <div id="blurred-shape" class="absolute bottom-0 translate-y-1/2 left-0 blur-2xl opacity-50 pointer-events-none -z-10" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
                        <defs><linearGradient id="bs5-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%"><stop offset="0%" stop-color="#00FFFF" /><stop offset="100%" stop-color="#FF00FF" stop-opacity="0" /></linearGradient></defs>
                        <path fill="url(#bs5-a)" fill-rule="evenodd" d="m0 0 461 369-284 58z" transform="matrix(1 0 0 -1 0 427)" />
                    </svg>
                </div>
                <!-- Content -->
                <div id="content" class="max-w-3xl mx-auto text-center">
                    <div id="content-subtitle" class="flex"><div id="content-subtitle-text" class="flex-1 font-medium text-transparent bg-clip-text pb-3 bg-gradient-to-r from-blue-400 to-pink-300">Uncover Tomorrow's Blockchain Today</div></div>
                    <div class="flex" id="content-title-container"><h2 id="content-title" class="flex-1 h2 text-transparent bg-clip-text pb-4 bg-gradient-to-r from-blue-200 via-purple-300 to-pink-200">Discover Blockchain's Latest Innovations</h2></div>
                    <div class="flex" id="content-body-container"><p id="content-body" class="flex-1 text-lg mb-8 text-gray-300">Stay ahead of the curve with real-time updates on emerging blockchain technologies, projects, and trends.</p></div>
                    <a id="content-cta-button" href="#0" class="btn transition duration-150 ease-in-out group bg-gradient-to-r from-blue-500 to-pink-500 text-white px-6 py-3 rounded-full hover:from-blue-600 hover:to-pink-600">Get Started <span id="content-cta-arrow" class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1 text-white">-&gt;</span></a>
                </div>
            </div>
        </div>
    </section>`,
        data() {
            return {
                expanded: false, 
                radialGradientPrimaryStyle: "bg-blue-500",
                radialGradientSecondaryStyle: "bg-pink-400",
                stopColorPrimaryStyle: "#00FFFF",
                stopColorSecondaryStyle: "#FF00FF",
                transparentTextStyle: "text-transparent",
                contentSubtitleStyle: "bg-gradient-to-r from-blue-400 to-pink-300",
                contentCtaTitleStyle: "bg-gradient-to-r from-blue-200 via-purple-300 to-pink-200",
                contentBodyStyle: "text-gray-300",
                contentCtaButtonPrimaryStyle:"text-white",
                contentCtaButtonGradientStyle: "bg-gradient-to-r from-blue-500 to-pink-500",
                contentCtaButtonHoverStyle: "hover:from-blue-600 hover:to-pink-600",
                contentCtaArrowStyle: "text-white"
        },
    });
                    