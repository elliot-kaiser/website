"use client";

import { useEffect, useState } from "react";

// <model-viewer> is a web component; tell TypeScript about the tag and the attributes we use.
declare module "react" {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src: string;
        alt: string;
        "camera-controls"?: boolean;
        "auto-rotate"?: boolean;
        "auto-rotate-delay"?: number;
        "rotation-per-second"?: string;
        "camera-orbit"?: string;
        "shadow-intensity"?: string;
        exposure?: string;
        loading?: "auto" | "lazy" | "eager";
        "interaction-prompt"?: "auto" | "none";
        "touch-action"?: string;
      };
    }
  }
}

type Props = {
  src: string;
  alt: string;
  className?: string;
};

export default function ModelViewer({ src, alt, className }: Props) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // The library touches `window`, so it can only be loaded in the browser.
    // The GLB is meshopt-compressed; model-viewer only enables its decoder once this is set.
    import("@google/model-viewer").then(({ ModelViewerElement }) => {
      ModelViewerElement.meshoptDecoderLocation = "/vendor/meshopt_decoder.js";
      setReady(true);
    });
  }, []);

  return (
    <div className={`relative ${className ?? ""}`}>
      {ready ? (
        <model-viewer
          src={src}
          alt={alt}
          camera-controls
          auto-rotate
          auto-rotate-delay={0}
          rotation-per-second="20deg"
          shadow-intensity="1"
          exposure="1.1"
          loading="lazy"
          touch-action="pan-y"
          style={{ width: "100%", height: "100%", backgroundColor: "transparent" }}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-sm text-zinc-500">
          Loading 3D model…
        </div>
      )}
    </div>
  );
}
