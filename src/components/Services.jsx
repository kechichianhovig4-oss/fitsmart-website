import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Services() {
  const navigate = useNavigate();
  const [isNavigating, setIsNavigating] = useState(false);

  // Navigation handler with delay
  const handleNavClick = (path) => {
    setIsNavigating(true);
    
    // Add delay before navigation
    setTimeout(() => {
      navigate(path);
      setIsNavigating(false);
    }, 300); // 300ms delay
  };

  return (
    <div className="bg-white font-display text-gray-900">
      {/* Add Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Spline+Sans:wght@400;500;700;800&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          {/* Header - Matched exactly with HomePage */}
          <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm">
            <div className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-gray-200 px-4 sm:px-10 lg:px-20 py-3">
              <div className="flex items-center gap-4 text-gray-900">
                <Link 
                  to="/" 
                  onClick={() => handleNavClick('/')}
                  className="flex items-center gap-4 hover:opacity-80 transition-opacity"
                >
                  <div className="size-8 text-red-600">
                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.8261 17.4264C16.7203 18.1174 20.2244 18.5217 24 18.5217C27.7756 18.5217 31.2797 18.1174 34.1739 17.4264C36.9144 16.7722 39.9967 15.2331 41.3563 14.1648L24.8486 40.6391C24.4571 41.267 23.5429 41.267 23.1514 40.6391L6.64374 14.1648C8.00331 15.2331 11.0856 16.7722 13.8261 17.4264Z" fill="currentColor"></path>
                      <path clipRule="evenodd" d="M39.998 12.236C39.9944 12.2537 39.9875 12.2845 39.9748 12.3294C39.9436 12.4399 39.8949 12.5741 39.8346 12.7175C39.8168 12.7597 39.7989 12.8007 39.7813 12.8398C38.5103 13.7113 35.9788 14.9393 33.7095 15.4811C30.9875 16.131 27.6413 16.5217 24 16.5217C20.3587 16.5217 17.0125 16.131 14.2905 15.4811C12.0012 14.9346 9.44505 13.6897 8.18538 12.8168C8.17384 12.7925 8.16216 12.767 8.15052 12.7408C8.09919 12.6249 8.05721 12.5114 8.02977 12.411C8.00356 12.3152 8.00039 12.2667 8.00004 12.2612C8.00004 12.261 8 12.2607 8.00004 12.2612C8.00004 12.2359 8.0104 11.9233 8.68485 11.3686C9.34546 10.8254 10.4222 10.2469 11.9291 9.72276C14.9242 8.68098 19.1919 8 24 8C28.8081 8 33.0758 8.68098 36.0709 9.72276C37.5778 10.2469 38.6545 10.8254 39.3151 11.3686C39.9006 11.8501 39.9857 12.1489 39.998 12.236ZM4.95178 15.2312L21.4543 41.6973C22.6288 43.5809 25.3712 43.5809 26.5457 41.6973L43.0534 15.223C43.0709 15.1948 43.0878 15.1662 43.104 15.1371L41.3563 14.1648C43.104 15.1371 43.1038 15.1374 43.104 15.1371L43.1051 15.135/L43.1065 15.1325/L43.1101 15.1261/L43.1199 15.1082C43.1276 15.094 43.1377 15.0754 43.1497 15.0527C43.1738 15.0075 43.2062 14.9455 43.244 14.8701C43.319 14.7208 43.4196 14.511 43.5217 14.2683C43.6901 13.8679 44 13.0689 44 12.2609C44 10.5573 43.003 9.22254 41.8558 8.2791C40.6947 7.32427 39.1354 6.55361 37.385 5.94477C33.8654 4.72057 29.133 4 24 4C18.867 4 14.1346 4.72057 10.615 5.94478C8.86463 6.55361 7.30529 7.32428 6.14419 8.27911C4.99695 9.22255 3.99999 10.5573 3.99999 12.2609C3.99999 13.1275 4.29264 13.9078 4.49321 14.3607C4.60375 14.6102 4.71348 14.8196 4.79687 14.9689C4.83898 15.0444 4.87547 15.1065 4.9035 15.1529C4.91754 15.1762 4.92954 15.1957 4.93916 15.2111L4.94662 15.223/L4.95178 15.2312ZM35.9868 18.996L24 38.22L12.0131 18.996C12.4661 19.1391 12.9179 19.2658 13.3617 19.3718C16.4281 20.1039 20.0901 20.5217 24 20.5217C27.9099 20.5217 31.5719 20.1039 34.6383 19.3718C35.082 19.2658 35.5339 19.1391 35.9868 18.996Z" fill="currentColor" fillRule="evenodd"></path>
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-bold leading-tight tracking-[-0.015em]">FitSmart</h2>
                </Link>
              </div>
              <div className="hidden lg:flex flex-1 justify-end gap-8">
                <div className="flex items-center gap-9">
                  <Link 
                    to="/HomePage" 
                    onClick={() => handleNavClick('/HomePage')}
                    className="text-gray-900 text-sm font-medium leading-normal hover:text-red-600 transition-colors"
                  >
                    Home
                  </Link>
                 
                  <span className="text-red-600 text-sm font-bold leading-normal">Services</span>
                   <Link 
                    to="/AboutMe" 
                    onClick={() => handleNavClick('/AboutMe')}
                    className="text-gray-900 text-sm font-medium leading-normal hover:text-red-600 transition-colors"
                  >
                    About
                  </Link>
                </div>

                <Link 
                  to="/Contact" 
                  onClick={() => handleNavClick('/Contact')}
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-red-600 text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-red-700 transition-all"
                >
                  <span className="truncate">Book Now</span>
                </Link>
              </div>
              <div className="lg:hidden">
                <button className="text-gray-900">
                  <span className="material-symbols-outlined">menu</span>
                </button>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1">
            {/* Hero Section */}
            <div className="px-4 sm:px-10 lg:px-20 py-12">
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Our Services</h1>
              <p className="text-gray-600 text-lg max-w-2xl">
                Programs designed to fit your life and power your results.
              </p>
            </div>

            {/* Services Grid - Full width container */}
            <div className="px-4 sm:px-10 lg:px-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                {/* Service 1 */}
                <div className="bg-white p-8 border border-solid border-gray-200 rounded-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-red-600">person</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl font-bold text-gray-300">1</span>
                        <h3 className="text-xl font-bold text-gray-900">1-on-1 Personal Training</h3>
                      </div>
                      <p className="text-gray-600">
                        Tailored, one-on-one sessions with custom programming, form correction, nutrition guidance, 
                        progress assessments, and flexible scheduling. Ideal for beginners, injury rehab, and accountability seekers.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service 2 */}
                <div className="bg-white p-8 border border-solid border-gray-200 rounded-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-red-600">fitness_center</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl font-bold text-gray-300">2</span>
                        <h3 className="text-xl font-bold text-gray-900">Strength & Sculpt</h3>
                      </div>
                      <p className="text-gray-600">
                        Progressive strength training focusing on compound movements to build lean muscle 
                        and increase bone density. Ideal for muscle building, toning, and strength gains.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service 3 */}
                <div className="bg-white p-8 border border-solid border-gray-200 rounded-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-red-600">laptop_mac</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl font-bold text-gray-300">3</span>
                        <h3 className="text-xl font-bold text-gray-900">Online Training Programs</h3>
                      </div>
                      <p className="text-gray-600">
                        Full virtual coaching experience with app access, weekly form video reviews, 
                        24/7 messaging support, and digital progress tracking. Ideal for travelers and remote workers.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service 4 */}
                <div className="bg-white p-8 border border-solid border-gray-200 rounded-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-red-600">groups</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl font-bold text-gray-300">4</span>
                        <h3 className="text-xl font-bold text-gray-900">Small Group Training (2-4 People)</h3>
                      </div>
                      <p className="text-gray-600">
                        Semi-private sessions with personalized attention and group motivation, 
                        including coached sessions and social accountability. Ideal for couples, friends, and budget-conscious clients.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service 5 */}
                <div className="bg-white p-8 border border-solid border-gray-200 rounded-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-red-600">self_improvement</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl font-bold text-gray-300">5</span>
                        <h3 className="text-xl font-bold text-gray-900">Mobility & Recovery</h3>
                      </div>
                      <p className="text-gray-600">
                        Sessions to prevent injury, reduce pain, and improve movement quality, 
                        featuring foam rolling, stretching, and mobility drills. Ideal for desk workers and athletes.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service 6 */}
                <div className="bg-white p-8 border border-solid border-gray-200 rounded-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-red-600">apartment</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl font-bold text-gray-300">6</span>
                        <h3 className="text-xl font-bold text-gray-900">Corporate Wellness Packages</h3>
                      </div>
                      <p className="text-gray-600">
                        Onsite or virtual classes, lunch & learns, and team fitness challenges for workplaces, 
                        including ergonomic assessments. Ideal for companies and office teams.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service 7 */}
                <div className="bg-white p-8 border border-solid border-gray-200 rounded-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-red-600">bolt</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl font-bold text-gray-300">7</span>
                        <h3 className="text-xl font-bold text-gray-900">HIIT Blast Classes</h3>
                      </div>
                      <p className="text-gray-600">
                        High-Intensity Interval Training classes (45 minutes) to torch calories and boost metabolism 
                        with options for no equipment. Suitable for all fitness levels.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service 8 */}
                <div className="bg-white p-8 border border-solid border-gray-200 rounded-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-red-600">nutrition</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl font-bold text-gray-300">8</span>
                        <h3 className="text-xl font-bold text-gray-900">Nutrition Coaching</h3>
                      </div>
                      <p className="text-gray-600">
                        Sustainable nutrition habits, portion control strategies, and meal prep techniques, 
                        with a habit-based approach. Ideal for weight management and lifestyle changes.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service 9 */}
                <div className="bg-white p-8 border border-solid border-gray-200 rounded-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-red-600">pregnant_woman</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl font-bold text-gray-300">9</span>
                        <h3 className="text-xl font-bold text-gray-900">Pre/Post Natal Fitness</h3>
                      </div>
                      <p className="text-gray-600">
                        Safe, specialized programming for pregnancy and postpartum recovery, 
                        focusing on core restoration and pelvic floor strengthening. Ideal for expecting mothers and new parents.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service 10 */}
                <div className="bg-white p-8 border border-solid border-gray-200 rounded-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-red-600">trending_up</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl font-bold text-gray-300">10</span>
                        <h3 className="text-xl font-bold text-gray-900">8-Week Transformation Challenge</h3>
                      </div>
                      <p className="text-gray-600">
                        A signature program combining training, nutrition, and community support for dramatic results, 
                        including assessments and group sessions. Ideal for jumpstarting fitness journeys.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="px-4 sm:px-10 lg:px-20 py-16 border-t border-solid border-gray-200 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
              <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                Book a free, no-obligation consultation to discuss your goals with Bennie.
              </p>
              <Link 
                to="/Contact" 
                onClick={() => handleNavClick('/Contact')}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-red-600 text-white text-base font-bold leading-normal tracking-[0.015em] mx-auto hover:bg-red-700 transition-all"
              >
                <span className="truncate">Book Your Consultation Here</span>
              </Link>
            </div>

            {/* Contact Details Section */}
            <section className="bg-gray-50 border-t border-solid border-gray-200 mt-16">
              <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                  <div className="md:col-span-1">
                    <h3 className="text-lg font-bold text-gray-900">Contact Bennie</h3>
                    <div className="mt-4 space-y-2 text-gray-600">
                      <p className="flex items-center justify-center md:justify-start">
                        <span className="material-symbols-outlined mr-2 text-red-600">email</span>
                        <span>bennieEdmonson@fitsmart.com</span>
                      </p>
                      <p className="flex items-center justify-center md:justify-start">
                        <span className="material-symbols-outlined mr-2 text-red-600">phone</span>
                        <span>(123) 456-7890</span>
                      </p>
                      <p className="flex items-center justify-center md:justify-start">
                        <span className="material-symbols-outlined mr-2 text-red-600">location_on</span>
                        <span>4535 Deslin Dr<br />Tallahassee<br />FL 32305</span>
                      </p>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-lg font-bold text-gray-900">Studio Hours</h3>
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-gray-600">
                      <p><strong>Monday - Thursday:</strong> 6:00 AM - 8:00 PM</p>
                      <p><strong>Friday:</strong> 6:00 AM - 6:00 PM</p>
                      <p><strong>Saturday:</strong> 8:00 AM - 2:00 PM</p>
                      <p><strong>Sunday:</strong> Closed (Online sessions available)</p>
                    </div>
                    <div className="mt-6">
                      <div className="flex justify-center md:justify-start space-x-4">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-100 text-gray-700">
              <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
                <div className="flex justify-center space-x-6">
                </div>
                <div className="mt-8 flex justify-center space-x-6 text-sm">
                  <Link 
                    to="/AboutMe" 
                    onClick={() => handleNavClick('/AboutMe')}
                    className="hover:text-red-600 transition-colors"
                  >
                    About
                  </Link>
                  <Link 
                    to="/Contact" 
                    onClick={() => handleNavClick('/Contact')}
                    className="hover:text-red-600 transition-colors"
                  >
                    Contact
                  </Link>
                </div>
                <p className="mt-8 text-center text-xs leading-5">© 2025 FitSmart by Bennie. All rights reserved.</p>
              </div>
            </footer>
          </main>
        </div>
      </div>

      <style jsx>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>
    </div>
  );
}

export default Services;