/*
  RippleLogo recreates the Conscious Flow AI mark from its generative logic
  (see Logo/ripple_animation.py): 7 concentric "C" arcs, each rotated by i·π/7,
  a 90° gap, radius = (i^1.2 + 1)·10 + sin(2φ)·5, on a 1000×1000 canvas.
  Rendered as crisp SVG; arcs animate inside-out via the .ripple-ring class.
*/

const NUM_RIPPLES = 7;
const CENTER = 500;
const GAP_RAD = Math.PI / 2; // 90° gap

type Arc = { d: string; radius: number };

function buildArcs(): Arc[] {
  const arcs: Arc[] = [];
  for (let i = 0; i < NUM_RIPPLES; i++) {
    const phi = (i * Math.PI) / NUM_RIPPLES;
    const radius = (Math.pow(i, 1.2) + 1) * 10 + Math.sin(2 * phi) * 5;
    const start = GAP_RAD / 2 + phi;
    const end = start + 2 * Math.PI - GAP_RAD; // 270° sweep

    const sx = CENTER + radius * Math.cos(start);
    const sy = CENTER + radius * Math.sin(start);
    const ex = CENTER + radius * Math.cos(end);
    const ey = CENTER + radius * Math.sin(end);

    // 270° arc => large-arc-flag = 1, sweep-flag = 1 (increasing angle)
    arcs.push({
      d: `M ${sx.toFixed(2)} ${sy.toFixed(2)} A ${radius.toFixed(2)} ${radius.toFixed(
        2,
      )} 0 1 1 ${ex.toFixed(2)} ${ey.toFixed(2)}`,
      radius,
    });
  }
  // Reveal inside-out: smallest radius first.
  return arcs.sort((a, b) => a.radius - b.radius);
}

const ARCS = buildArcs();
const MAX_RADIUS = Math.max(...ARCS.map((a) => a.radius));

export function RippleLogo({
  className,
  strokeWidth = 2.5,
  animate = true,
}: {
  className?: string;
  strokeWidth?: number;
  animate?: boolean;
}) {
  // Fit the viewBox tightly to the mark so it fills its box (the arcs only
  // occupy the center of the 1000×1000 canvas).
  const pad = MAX_RADIUS + strokeWidth + 8;
  const viewBox = `${CENTER - pad} ${CENTER - pad} ${2 * pad} ${2 * pad}`;

  return (
    <svg
      viewBox={viewBox}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      role="img"
      aria-label="Conscious Flow AI ripple mark"
    >
      {ARCS.map((arc, i) => (
        <path
          key={i}
          d={arc.d}
          pathLength={100}
          className={animate ? "ripple-ring" : undefined}
          style={animate ? { animationDelay: `${i * 0.18}s` } : undefined}
        />
      ))}
    </svg>
  );
}
