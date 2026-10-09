import React from "react";
import Image from "next/image";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Navigation Bar */}
        <Nav active="projects" />
        {/* Header / Hero */}
        <header className="border-b border-zinc-800 pb-10 space-y-4">
          <p className="text-3xl sm:text-4xl font-bold text-white">
            Mechanical Engineering Portfolio
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="mailto:elliotk1@outlook.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-700 hover:bg-green-600 text-white font-medium transition"
            >
              elliotk1@outlook.com
            </a>
            <a
              href="https://github.com/elliot-kaiser"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 transition"
            >
              github.com/elliot-kaiser
            </a>
            <a
              href="https://www.linkedin.com/in/elliot-kaiser/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 transition"
            >
              linkedin.com/in/elliot-kaiser
            </a>
          </div>
        </header>

        {/* Project 1 */}
        <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Failure Detection System for Spring Cycle Tester
              </h2>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-zinc-950 text-zinc-400 border border-zinc-700">
                Renton Coil Spring
              </span>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {["ESP32", "C++", "KiCad", "SolidWorks", "Piezoelectric Sensor"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-2.5 py-1 rounded bg-zinc-800 text-zinc-300 border border-zinc-700"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-sm italic text-zinc-400">
              Note: Project details, metrics, and images shared with permission from Renton Coil Spring
            </p>
          </div>

          {/* Project 1 Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden p-3 flex flex-col items-center">
              <div className="relative w-full h-52">
                <Image
                  src="/images/RCSenclosure.jpg"
                  alt="Electronics Wired in 3D Printed Housing"
                  fill
                  className="object-contain rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <span className="text-xs text-zinc-400 mt-2">
                Electronics Wired in 3D Printed Housing
              </span>
            </div>
            <div className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden p-3 flex flex-col items-center">
              <div className="relative w-full h-52">
                <Image
                  src="/images/RCSKICAD.png"
                  alt="KICAD Circuit Diagram"
                  fill
                  className="object-contain rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <span className="text-xs text-zinc-400 mt-2">
                KICAD Circuit Diagram
              </span>
            </div>
          </div>

          {/* Project 1 Bullets */}
          <ul className="list-disc list-outside ml-5 space-y-3 text-zinc-300 leading-relaxed">
            <li>
              Engineered an automated vibration-sensing (piezoelectric sensor) spring failure detection system, resulting in 100% spring failure detection and &gt;99% decrease in wasted cycles per failed spring.
            </li>
            <li>
              Developed custom C++ firmware on an ESP32 microcontroller to process real-time data, establishing an algorithm to distinguish normal operation from failure and enabling 24/7 automated machine monitoring.
            </li>
            <li>
              Integrated a relay-driven hardware interrupt directly in series with the machine&apos;s safety loop, triggering instantaneous, autonomous machine shutdown when failure is detected.
            </li>
            <li>
              Leveraged the ESP32&apos;s Wi-Fi capabilities, allowing remote monitoring on computers and mobile devices.
            </li>
            <li>
              Designed a compact, 3D-printed controller housing in SolidWorks to safely isolate the microcontroller and relay.
            </li>
          </ul>
        </section>

        {/* Project 2 */}
        <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Smart Scale &amp; Cooking Companion
            </h2>
            <div className="flex flex-wrap gap-2 pt-1">
              {["Raspberry Pi 4", "Flask", "Supabase (PostgreSQL)", "SolidWorks", "HX711 ADC"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-2.5 py-1 rounded bg-zinc-800 text-zinc-300 border border-zinc-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Project 2 Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden p-3 flex flex-col items-center">
              <div className="relative w-full h-52">
                <Image
                  src="/images/smartScaleCAD.png"
                  alt="Section View of SOLIDWORKS Assembly"
                  fill
                  className="object-contain rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <span className="text-xs text-zinc-400 mt-2">
                Section View of SOLIDWORKS Assembly
              </span>
            </div>
            <div className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden p-3 flex flex-col items-center">
              <div className="relative w-full h-52">
                <Image
                  src="/images/smartScalePhoto.jpg"
                  alt="Wired Scale with 100g Test Load"
                  fill
                  className="object-contain rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <span className="text-xs text-zinc-400 mt-2">
                Wired Scale with 100g Test Load
              </span>
            </div>
          </div>

          {/* Project 2 Bullets */}
          <ul className="list-disc list-outside ml-5 space-y-3 text-zinc-300 leading-relaxed">
            <li>
              Developed an &quot;all-in-one&quot; smart scale + website (Flask) for calorie/nutrition tracking from Supabase (PostgreSQL) database, weight change goals, and recipe guidance, increasing food prep efficiency by 70%.
            </li>
            <li>
              Engineered a custom 3D-printed enclosure with a snap-fit locking mechanism, 0.25mm hardware clearance, and isolated cantilever load cell arm for accurate measurements.
            </li>
            <li>
              Integrated a Raspberry Pi 4, HX711 ADC, OLED, 5kg cantilever load cell, and pushbuttons (I2C/GPIO), increasing accuracy with median filtering and in-app calibration.
            </li>
            <li>
              Designed a guided cook flow that scrapes recipes into gram targets, walks ingredients step-by-step on hardware and website, and converts cooked yield into accurate portion macros.
            </li>
            <li>
              Implemented a predictive goal-planning algorithm that estimates TDEE based on logged intake and tracks true body weight trends using a 7-day exponential moving average.
            </li>
          </ul>
        </section>

        {/* Project 3 */}
        <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Volunteer Management Software
            </h2>
            <div className="flex flex-wrap gap-2 pt-1">
              {["Next.js", "React", "TypeScript", "Supabase (PostgreSQL)"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-2.5 py-1 rounded bg-zinc-800 text-zinc-300 border border-zinc-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Project 3 Videos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden p-3 flex flex-col items-center">
              <video
                src="/videos/Director Video.mp4"
                controls
                playsInline
                className="w-full rounded-lg bg-zinc-900"
              />
              <span className="text-xs text-zinc-400 mt-2">Director View</span>
            </div>
            <div className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden p-3 flex flex-col items-center">
              <video
                src="/videos/Member Video.mp4"
                controls
                playsInline
                className="w-full rounded-lg bg-zinc-900"
              />
              <span className="text-xs text-zinc-400 mt-2">Member View</span>
            </div>
          </div>

          {/* Project 3 Bullets */}
          <ul className="list-disc list-outside ml-5 space-y-3 text-zinc-300 leading-relaxed">
            <li>
              Engineered a mobile application using Next.js, React, and TypeScript to centralize volunteer coordination and communication for a sailing club of 120 members, slashing overhead by over 50%.
            </li>
            <li>
              Integrated a secure, real-time backend using Supabase with custom Row-Level Security policies to guarantee reliable data access across messaging and task assignment systems.
            </li>
            <li>
              Built separate Director and Member views with role-based access control, enabling directors to manage schedules and assignments while members receive real-time task updates.
            </li>
            <li>
              Validated efficiency gains through Keystroke-Level Model (KLM) analysis, demonstrating over 50% reduction in time-on-task compared to the club&apos;s previous manual methods.
            </li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-zinc-500 pt-8 border-t border-zinc-900">
          <p>© {new Date().getFullYear()} Elliot Kaiser.</p>
        </footer>
      </div>
    </main>
  );
}