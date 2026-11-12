import type { Metadata } from "next";
import Nav from "../components/Nav";

export const metadata: Metadata = {
  title: "Resume | Elliot Kaiser",
  description:
    "Resume of Elliot Kaiser — Mechanical Engineering student at the University of Toronto.",
  alternates: { canonical: "/resume" },
};

// ---------- Resume content (edit here; layout below renders it) ----------

const experience: RoleProps[] = [
  {
    title: "Undergraduate Research Assistant – Systems & Hardware",
    dates: "Oct 2026 – Present",
    org: "UofT Lin Lab, Department of Cell & Systems Biology",
    location: "Toronto, ON",
    bullets: [
      "Reducing end-to-end latency (~90 ms baseline) of a closed-loop 360° zebrafish VR system, building Arduino photodiode and 240 fps timing rigs (C++/Python) to profile the camera, Godot, and projector pipeline.",
    ],
  },
  {
    title: "Undergraduate Research Assistant – Composites",
    dates: "Sep 2026 – Present",
    org: "UofT Multifunctional Composites Manufacturing Lab (MCML)",
    location: "Toronto, ON",
    bullets: [
      "Deconvolve XPS carbon spectra in OriginPro to quantify the surface chemical bonding states of carbon fiber.",
      "Help develop a wet-layup procedure for nanoparticle-reinforced carbon fiber/epoxy laminates, using pulsed sonication and vacuum degassing to disperse particles and reduce voids.",
    ],
  },
  {
    title: "Mechanical Engineering Intern",
    dates: "May 2026 – Aug 2026",
    org: "Renton Coil Spring",
    location: "Renton, WA",
    bullets: [
      "Designed and built a spring failure detection system (piezo sensor, ESP32, safety relay), enabling unattended 24/7 operation and preventing 300,000 wasted cycles per failed spring.",
      "Designed and 3D printed universal SOLIDWORKS fixtures for non-standard spring geometries on a Rockwell hardness tester, achieving repeatable measurements within ±1 HRC.",
      "Fabricated 10+ aerospace-grade springs on 2D and 3D CNC machines and ran side-by-side quality comparisons.",
      "Converted 15+ legacy 2D drawings into 3D SOLIDWORKS models, reducing supplier lead times.",
    ],
  },
];

const designTeams: RoleProps[] = [
  {
    title: "Mechanical Engineer",
    dates: "Sep 2026 – Present",
    org: "Autonomous Rover Team – University of Toronto Robotics Association",
    location: "Toronto, ON",
    bullets: [
      "Derive first-principles load cases (traction, incline, acceleration) from competition rules to size motors, wheels, bearings, and drive type for a 15–40 kg 2WD rover within budget.",
      "Iterate a custom-machined drive shaft with ANSYS Mechanical FEA across all load cases, raising the minimum factor of safety to 2.4 (target 1.5).",
      "Design and trade off drivetrain layouts in SOLIDWORKS against packaging, cost, and serviceability.",
    ],
  },
  {
    title: "Hull and Structural Design Engineer",
    dates: "Sep 2025 – May 2026",
    org: "UofT Concrete Canoe",
    location: "Toronto, ON",
    bullets: [
      "Rewrote in-house hull performance simulation from C++ to Python, modeling 30%+ more race parameters.",
      "Converted generated hull meshes into SOLIDWORKS CAD and designed gunwales, handles, and seats.",
    ],
  },
];

const projects: { name: string; stack: string; dates: string; bullets: string[] }[] = [
  {
    name: "Smart Scale",
    stack: "SOLIDWORKS, OrcaSlicer, Python, Flask, PostgreSQL, Raspberry Pi",
    dates: "Jul 2026 – Aug 2026",
    bullets: [
      "Integrated a 5 kg cantilever load cell, HX711 ADC, and Raspberry Pi 4 in a custom 3D-printed enclosure, implementing median filtering and real-time calibration for ±1 g accuracy.",
      "Developed a full-stack Supabase (PostgreSQL) web app for guided recipes, meal logging, and nutrition goals.",
    ],
  },
  {
    name: "Volunteer Management Software",
    stack: "Next.js, React, TypeScript, PostgreSQL",
    dates: "Jan 2026 – Apr 2026",
    bullets: [
      "Built a mobile app centralizing volunteer coordination for a 120-member sailing club, cutting admin overhead 50%+.",
    ],
  },
];

const skills: [string, string][] = [
  ["Mechanical Design", "SOLIDWORKS (CSWA), ANSYS Mechanical (FEA), OnShape, AutoCAD, GD&T, DFM/A, Load Analysis"],
  ["Embedded & Test", "ESP32, Arduino, Raspberry Pi, Sensor Integration, Data Acquisition, Circuit Assembly, Soldering"],
  ["Software", "Python, C/C++, MATLAB, Git, OriginPro, Godot, Java, JavaScript/React, Flask, PostgreSQL"],
  ["Manufacturing", "CNC Machining, Composite Wet Layup, Vacuum Degassing, 3D Printing (FDM), Shop Tools"],
];

// ---------- Layout ----------

type RoleProps = {
  title: string;
  dates: string;
  org: string;
  location: string;
  bullets: string[];
};

const sectionTitle =
  "text-xl font-bold uppercase tracking-wider text-green-400 border-b border-zinc-800 pb-2";
const bulletList =
  "list-disc list-outside ml-5 space-y-1.5 text-sm text-zinc-300 pt-1 leading-relaxed";

function Role({ title, dates, org, location, bullets }: RoleProps) {
  return (
    <div className="space-y-2">
      <div className="flex flex-wrap justify-between items-baseline gap-2">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <span className="text-sm text-zinc-400">{dates}</span>
      </div>
      <div className="flex flex-wrap justify-between items-baseline gap-2 text-sm text-zinc-300 italic">
        <span>{org}</span>
        <span>{location}</span>
      </div>
      <ul className={bulletList}>
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

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
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Resume</h1>
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
          <h2 className={sectionTitle}>Education</h2>
          <div className="space-y-2">
            <div className="flex flex-wrap justify-between items-baseline gap-2">
              <h3 className="text-lg font-bold text-white">University of Toronto</h3>
              <span className="text-sm text-zinc-400">Toronto, ON</span>
            </div>
            <div className="flex flex-wrap justify-between items-baseline gap-2 text-sm text-zinc-300 italic">
              <span>BASc, Mechanical Engineering + PEY Co-op (GPA: 3.9/4.0, Dean&apos;s Honours List)</span>
              <span>Sep 2025 – May 2029</span>
            </div>
            <ul className="list-disc list-outside ml-5 text-sm text-zinc-300 pt-1">
              <li>Varsity Men&apos;s Field Lacrosse (15+ hrs/week)</li>
            </ul>
          </div>
        </section>

        {/* Experience */}
        <section className="space-y-6">
          <h2 className={sectionTitle}>Experience</h2>
          {experience.map((r) => (
            <Role key={r.org} {...r} />
          ))}
        </section>

        {/* Design Teams */}
        <section className="space-y-6">
          <h2 className={sectionTitle}>Design Teams</h2>
          {designTeams.map((r) => (
            <Role key={r.org} {...r} />
          ))}
        </section>

        {/* Projects */}
        <section className="space-y-6">
          <h2 className={sectionTitle}>Projects</h2>
          {projects.map((p) => (
            <div key={p.name} className="space-y-2">
              <div className="flex flex-wrap justify-between items-baseline gap-2">
                <h3 className="text-lg font-bold text-white">
                  {p.name}{" "}
                  <span className="text-sm font-normal text-zinc-400 italic">| {p.stack}</span>
                </h3>
                <span className="text-sm text-zinc-400">{p.dates}</span>
              </div>
              <ul className={bulletList}>
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Technical Skills */}
        <section className="space-y-4">
          <h2 className={sectionTitle}>Technical Skills</h2>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-3 text-sm text-zinc-200">
            {skills.map(([label, list]) => (
              <div key={label}>
                <strong className="text-white">{label}:</strong> {list}
              </div>
            ))}
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