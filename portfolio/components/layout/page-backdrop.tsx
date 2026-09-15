import type { ReactNode } from "react";

import { ShaderFlow } from "../shaders/shader-flow";

export function PageBackdrop(): ReactNode {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-225 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-50 md:opacity-100">
        <ShaderFlow brightness={2} iterations={10} flowSpeed={[0.5, 0.1]} colorLowA={[0, 0, 0.5]} colorHighA={[0, 0.5, 0.25]} className="grayscale-50" />
      </div>
    </div>
  );
}
