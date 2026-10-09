import React from "react";
import Nav from "../components/Nav";

export default function Resume() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Navigation Bar — Download PDF lives here alongside the page links */}
        <Nav
          active="resume"
          action={
            <a
              href="/Resume.pdf"
              download="Elliot_Kaiser_Resume.pdf"
              className="px-3 py-1.5 rounded-md bg-green-700 hover:bg-green-600 text-white transition"
            >
              Download PDF
            </a>
          }
        />

        {/* Resume Header */}
        <header className="border-b border-zinc-800 pb-8 space-y-3">
          <p className="text-zinc-400 font-medium">U.S. &amp; Canadian Citizen</p>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-300">
            <span>206-707-2649</span>
            <span>•</span>
            <a href="mailto:elliotk1@outlook.com" className="hover:text-green-400 underline">
              elliotk1@outlook.com
            </a>
            <span>•</span>
            <a
              href="https://www.linkedin.com/in/elliot-kaiser/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 underline"
            >
              linkedin.com/in/elliot-kaiser
            </a>
            <span>•</span>
            <a
              href="https://github.com/elliot-kaiser"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 underline"
            >
              github.com/elliot-kaiser
            </a>
          </div>
        </header>

        {/* Education */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold uppercase tracking-wider text-green-400 border-b border-zinc-800 pb-2">
            Education
          </h2>
          <div className="space-y-2">
            <div className="flex flex-wrap justify-between items-baseline gap-2">
              <h3 className="text-lg font-bold text-white">University of Toronto</h3>
              <span className="text-sm text-zinc-400">Toronto, ON</span>
            </div>
            <div className="flex flex-wrap justify-between items-baseline gap-2 text-sm text-zinc-300 italic">
              <span>BASc, Mechanical Engineering + PEY Co-op (GPA: 3.9/4.0)</span>
              <span>Sep 2025 – May 2029</span>
            </div>
            <ul className="list-disc list-outside ml-5 text-sm text-zinc-300 pt-1">
              <li>Varsity Men&apos;s Field Lacrosse: dedicating 15+ hours weekly to high-performance training and regional competition</li>
            </ul>
          </div>
        </section>

        {/* Experience */}
        <section className="space-y-6">
          <h2 className="text-xl font-bold uppercase tracking-wider text-green-400 border-b border-zinc-800 pb-2">
            Experience
          </h2>

          {/* MCML */}
          <div className="space-y-2">
            <div className="flex flex-wrap justify-between items-baseline gap-2">
              <h3 className="text-lg font-bold text-white">Undergraduate Research Assistant</h3>
              <span className="text-sm text-zinc-400">Sep 2026 – Present</span>
            </div>
            <div className="flex flex-wrap justify-between items-baseline gap-2 text-sm text-zinc-300 italic">
              <span>UofT Multifunctional Composites Manufacturing Lab (MCML)</span>
              <span>Toronto, ON</span>
            </div>
            <ul className="list-disc list-outside ml-5 space-y-1.5 text-sm text-zinc-300 pt-1 leading-relaxed">
              <li>Performed X-ray photoelectron spectroscopy (XPS) deconvolution in OriginPro to characterize the chemical bonding states of nanoparticle-strengthened composites, accurately modeling complex carbon spectra.</li>
              <li>Manufactured carbon fiber sheets for composite fabrication, following strict cutting and sealing requirements.</li>
            </ul>
          </div>

          {/* Renton Coil Spring */}
          <div className="space-y-2">
            <div className="flex flex-wrap justify-between items-baseline gap-2">
              <h3 className="text-lg font-bold text-white">Mechanical Engineering Intern</h3>
              <span className="text-sm text-zinc-400">May 2026 – Aug 2026</span>
            </div>
            <div className="flex flex-wrap justify-between items-baseline gap-2 text-sm text-zinc-300 italic">
              <span>Renton Coil Spring</span>
              <span>Renton, WA</span>
            </div>
            <ul className="list-disc list-outside ml-5 space-y-1.5 text-sm text-zinc-300 pt-1 leading-relaxed">
              <li>Developed a spring failure detection system using a piezo disc and ESP32, allowing 24/7 efficiency and preventing 300,000 wasted cycles per failed spring.</li>
              <li>Designed universal mounting fixtures in SOLIDWORKS for non-standard specimen geometries to ensure high-accuracy hardness measurements within ±1 HRC.</li>
              <li>Fabricated 10+ aerospace-grade springs using 2D and 3D CNC machines, conducting side-by-side quality analyses.</li>
              <li>Converted 15+ legacy 2D drawings into 3D CAD models using SOLIDWORKS, reducing supplier lead times.</li>
              <li>Evaluated specialized manufacturing tooling and engineering drawings using DFM principles, expanding in-house capabilities for repairs and bearing installation.</li>
            </ul>
          </div>
        </section>

        {/* Extracurriculars */}
        <section className="space-y-6">
          <h2 className="text-xl font-bold uppercase tracking-wider text-green-400 border-b border-zinc-800 pb-2">
            Extracurricular Activities
          </h2>

          <div className="space-y-2">
            <div className="flex flex-wrap justify-between items-baseline gap-2">
              <h3 className="text-lg font-bold text-white">Mechanical Engineer</h3>
              <span className="text-sm text-zinc-400">Sep 2026 – Present</span>
            </div>
            <div className="flex flex-wrap justify-between items-baseline gap-2 text-sm text-zinc-300 italic">
              <span>Autonomous Rover Team - University of Toronto Robotics Association</span>
              <span>Toronto, ON</span>
            </div>
            <ul className="list-disc list-outside ml-5 space-y-1.5 text-sm text-zinc-300 pt-1 leading-relaxed">
              <li>Translated competition constraints into dynamic mechanical load cases, calculating exact 2WD power and torque requirements to support a target rover mass of 15-40 kg.</li>
              <li>Designed alternative drivetrain mechanisms in SOLIDWORKS, analyzing spatial constraints, hardware cost, and mechanical-to-electrical interconnectivity.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <div className="flex flex-wrap justify-between items-baseline gap-2">
              <h3 className="text-lg font-bold text-white">Hull and Structural Design Engineer</h3>
              <span className="text-sm text-zinc-400">Sep 2025 – May 2026</span>
            </div>
            <div className="flex flex-wrap justify-between items-line gap-2 text-sm text-zinc-300 italic">
              <span>UofT Concrete Canoe</span>
              <span>Toronto, ON</span>
            </div>
            <ul className="list-disc list-outside ml-5 space-y-1.5 text-sm text-zinc-300 pt-1 leading-relaxed">
              <li>Converted in-house simulation software from C++ to Python, incorporating over 30% more race parameters.</li>
              <li>Translated generated canoe meshes into CAD using SOLIDWORKS, designed gunwales, handles, and seats.</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="space-y-6">
          <h2 className="text-xl font-bold uppercase tracking-wider text-green-400 border-b border-zinc-800 pb-2">
            Projects
          </h2>

          <div className="space-y-2">
            <div className="flex flex-wrap justify-between items-baseline gap-2">
              <h3 className="text-lg font-bold text-white">
                Smart Scale <span className="text-sm font-normal text-zinc-400 italic">| SOLIDWORKS, OrcaSlicer, Python, Flask, PostgreSQL</span>
              </h3>
              <span className="text-sm text-zinc-400">Jul 2026 – Aug 2026</span>
            </div>
            <ul className="list-disc list-outside ml-5 space-y-1.5 text-sm text-zinc-300 pt-1 leading-relaxed">
              <li>Integrated a 5kg cantilever load cell with an HX711 ADC, Raspberry Pi 4, and 3D printed custom enclosure, implementing digital median filtering and real-time calibration for accurate weight readings within 1 gram.</li>
              <li>Developed a full-stack web application connected to a Supabase (PostgreSQL) database with step-by-step guided recipe functionality, meal logging, and automated nutrition goals.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <div className="flex flex-wrap justify-between items-baseline gap-2">
              <h3 className="text-lg font-bold text-white">
                Volunteer Management Software <span className="text-sm font-normal text-zinc-400 italic">| Next.js, React, TypeScript, PostgreSQL</span>
              </h3>
              <span className="text-sm text-zinc-400">Jan 2026 – Apr 2026</span>
            </div>
            <ul className="list-disc list-outside ml-5 space-y-1.5 text-sm text-zinc-300 pt-1 leading-relaxed">
              <li>Engineered a mobile application using Next.js, React, and TypeScript to centralize volunteer coordination and communication for a sailing club of 120 members, slashing overhead by over 50%.</li>
              <li>Integrated a secure, real-time backend using Supabase with custom Row-Level Security policies to guarantee reliable data access across messaging and task assignment systems.</li>
            </ul>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold uppercase tracking-wider text-green-400 border-b border-zinc-800 pb-2">
            Technical Skills
          </h2>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-3 text-sm text-zinc-200">
            <div>
              <strong className="text-white">Mechanical Design:</strong> SOLIDWORKS (CSWA Certified), AutoCAD, OnShape, Design for Manufacturability, GD&amp;T
            </div>
            <div>
              <strong className="text-white">Embedded Systems:</strong> ESP32, Raspberry Pi, Arduino IDE, HX711 ADC, Circuit Assembly
            </div>
            <div>
              <strong className="text-white">Software:</strong> Java, C, MATLAB, Python, JavaScript, HTML, Flask, React, PostgreSQL (Supabase), Git, VS Code
            </div>
            <div>
              <strong className="text-white">Fabrication:</strong> 3D Printing (OrcaSlicer), Soldering, 2D/3D CNC Machining, Shop Tools (Drill Press, Band Saw)
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-zinc-500 pt-8 border-t border-zinc-900">
          <p>© {new Date().getFullYear()} Elliot Kaiser.</p>
        </footer>
      </div>
    </main>
  );
}