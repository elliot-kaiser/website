import Link from "next/link";

type NavProps = {
  active: "projects" | "resume";
  /** Optional extra element rendered to the right of the nav links */
  action?: React.ReactNode;
};

export default function Nav({ active, action }: NavProps) {
  return (
    <nav className="flex justify-between items-center border-b border-zinc-800 pb-5">
      <span className="text-xl font-bold text-white tracking-tight">
        Elliot Kaiser
      </span>
      <div className="flex items-center gap-4 text-sm font-semibold">
        <Link
          href="/"
          className={
            active === "projects"
              ? "px-3 py-1.5 rounded-md bg-zinc-800 text-green-400 border border-zinc-700"
              : "px-3 py-1.5 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-900 transition"
          }
        >
          Projects
        </Link>
        <Link
          href="/resume"
          className={
            active === "resume"
              ? "px-3 py-1.5 rounded-md bg-zinc-800 text-green-400 border border-zinc-700"
              : "px-3 py-1.5 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-900 transition"
          }
        >
          Resume
        </Link>
        {action}
      </div>
    </nav>
  );
}
