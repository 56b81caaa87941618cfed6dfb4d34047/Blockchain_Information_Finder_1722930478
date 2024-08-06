/* Summary: HTML file that describes a list of features.
It contains a grid layout with 6 feature sections, each with an icon, a title, and a description. 
The feature sections are organised in a grid of two rows, each with three columns.
*/

Vue.component("purple_feature_grid_component_1722930481", {
    template: `
    <!-- Features list -->
    <div id="features-grid" class="grid md:grid-cols-3 gap-8 md:gap-12 bg-purple-900 bg-opacity-30 p-8 rounded-lg backdrop-filter backdrop-blur-lg shadow-lg">
        <!-- Feature -->
        <div id="feature-1" class="bg-purple-800 bg-opacity-20 p-6 rounded-lg shadow-md hover:bg-opacity-30 transition duration-300">
            <div id="feature-1-header" class="flex items-center space-x-2 mb-3">
                <svg id="feature-1-icon" class="shrink-0 text-pink-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                <div class="flex" id="feature-1-title-container"><h4 id="feature-1-title" class="flex-1 font-medium text-blue-300">Real-Time Blockchain Updates</h4></div>
            </div>
            <div class="flex" id="feature-1-description-container"><p id="feature-1-description" class="flex-1 text-sm text-gray-300">Stay ahead of the curve with instant notifications on new blockchain developments, projects, and technologies.</p></div>
        </div>
        <!-- Feature -->
        <div id="feature-2" class="bg-purple-800 bg-opacity-20 p-6 rounded-lg shadow-md hover:bg-opacity-30 transition duration-300">
            <div id="feature-2-header" class="flex items-center space-x-2 mb-3">
                <svg id="feature-2-icon" class="shrink-0 text-pink-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                <div class="flex" id="feature-2-title-container"><h4 id="feature-2-title" class="flex-1 font-medium text-blue-300">Customizable News Feed</h4></div>
            </div>
            <div class="flex" id="feature-2-description-container"><p id="feature-2-description" class="flex-1 text-sm text-gray-300">Tailor your information stream to focus on the blockchain topics and cryptocurrencies that matter most to you.</p></div>
        </div>
        <!-- Feature -->
        <div id="feature-3" class="bg-purple-800 bg-opacity-20 p-6 rounded-lg shadow-md hover:bg-opacity-30 transition duration-300">
            <div id="feature-3-header" class="flex items-center space-x-2 mb-3">
                <svg id="feature-3-icon" class="shrink-0 text-pink-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="14 2 18 6 7 17 3 17 3 13 14 2"></polygon><line x1="3" y1="22" x2="21" y2="22"></line></svg>
                <div class="flex" id="feature-3-title-container"><h4 id="feature-3-title" class="flex-1 font-medium text-blue-300">Expert Analysis and Insights</h4></div>
            </div>
            <div class="flex" id="feature-3-description-container"><p id="feature-3-description" class="flex-1 text-sm text-gray-300">Access in-depth reports and commentary from leading blockchain experts and industry insiders.</p></div>
        </div>
        <!-- Feature -->
        <div id="feature-4" class="bg-purple-800 bg-opacity-20 p-6 rounded-lg shadow-md hover:bg-opacity-30 transition duration-300">
            <div id="feature-4-header" class="flex items-center space-x-2 mb-3">
                <svg id="feature-4-icon" class="shrink-0 text-pink-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                <div class="flex" id="feature-4-title-container"><h4 id="feature-4-title" class="flex-1 font-medium text-blue-300">Interactive Learning Hub</h4></div>
            </div>
            <div class="flex" id="feature-4-description-container"><p id="feature-4-description" class="flex-1 text-sm text-gray-300">Enhance your blockchain knowledge with our comprehensive tutorials, guides, and educational resources.</p></div>
        </div>
        <!-- Feature -->
        <div id="feature-5" class="bg-purple-800 bg-opacity-20 p-6 rounded-lg shadow-md hover:bg-opacity-30 transition duration-300">
            <div id="feature-5-header" class="flex items-center space-x-2 mb-3">
                <svg id="feature-5-icon" class="shrink-0 text-pink-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                <div class="flex" id="feature-5-title-container"><h4 id="feature-5-title" class="flex-1 font-medium text-blue-300">Community-Driven Discovery</h4></div>
            </div>
            <div class="flex" id="feature-5-description-container"><p id="feature-5-description" class="flex-1 text-sm text-gray-300">Connect with like-minded enthusiasts to discuss, share, and uncover the latest blockchain innovations.</p></div>
        </div>
        <!-- Feature -->
        <div id="feature-6" class="bg-purple-800 bg-opacity-20 p-6 rounded-lg shadow-md hover:bg-opacity-30 transition duration-300">
            <div id="feature-6-header" class="flex items-center space-x-2 mb-3">
                <svg id="feature-6-icon" class="shrink-0 text-pink-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                <div class="flex" id="feature-6-title-container"><h4 id="feature-6-title" class="flex-1 font-medium text-blue-300">Cross-Chain Explorer</h4></div>
            </div>
            <div class="flex" id="feature-6-description-container"><p id="feature-6-description" class="flex-1 text-sm text-gray-300">Seamlessly navigate and compare information across multiple blockchain networks in one intuitive interface.</p></div>
        </div>
    </div>`,
        data() {
            return {
                expanded: false, 
                tab: null,
                textFillStylePrimary: "fill-slate-300",
                textPrimaryStyle: "text-slate-400",
                textSecondaryStyle: "text-slate-50",
            };
        },
    });
                    