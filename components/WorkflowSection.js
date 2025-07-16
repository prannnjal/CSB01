import Image from "next/image";

// SVG width/height
const SVG_WIDTH = 1500;
const SVG_HEIGHT = 600;

// Step data (use percentages for x/y)
const steps = [
  { key: "brief", label: "Client's Brief", x: 80, y: 220, img: "/client-brief.png" },
  { key: "brainstorm", label: "Brain Storming", x: 350, y: 270, img: "/brainstorming.png" },
  { key: "analysis", label: "Analysis", x: 600, y: 300, img: "/analysis.png" },
  { key: "wireframe", label: "Wireframe", x: 600, y: 80, img: "/wireframe.png" },
  { key: "tea", label: "Tea - Breaks", x: 850, y: 80, img: "/tea.png" },
  { key: "strategy", label: "Strategy", x: 1050, y: 220, img: "/strategy.png" },
  { key: "presentation", label: "Presentation", x: 1250, y: 80, img: "/presentation.png" },
  { key: "implementation", label: "Implementation", x: 1250, y: 300, img: "/implementation.png" },
  { key: "solution", label: "Solution", x: 850, y: 400, img: "/solution.png" },
  { key: "beta", label: "Beta", x: 1050, y: 400, img: "/beta.png" },
  { key: "delivery", label: "Project Delivery", x: 1400, y: 400, img: "/delivery.png" },
];

// SVG connections (now in the new specified order)
const connections = [
  ["brief", "wireframe", "M120 250 Q300 100 600 120"],
  ["wireframe", "brainstorm", "M650 120 Q500 180 350 250"],
  ["brainstorm", "analysis", "M400 250 Q500 350 600 320"],
  ["analysis", "tea", "M650 320 Q800 60 850 100"],
  ["tea", "solution", "M900 100 Q900 400 850 420"],
  ["solution", "beta", "M900 420 Q1000 420 1050 420"],
  ["beta", "strategy", "M1100 420 Q1100 320 1050 250"],
  ["strategy", "presentation", "M1100 250 Q1200 100 1250 100"],
  ["presentation", "implementation", "M1300 100 Q1300 320 1250 320"],
  ["implementation", "delivery", "M1300 320 Q1450 350 1400 420"],
];

const ArrowDefs = () => (
  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#00FFAA" />
    </marker>
  </defs>
);

export default function WorkflowSection() {
  return (
    <section className="relative w-full bg-black overflow-x-auto py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">Our Workflow Process</h2>
        <p className="text-gray-400 text-base lg:text-lg">From concept to delivery - our proven methodology</p>
      </div>
      <div className="relative w-full" style={{ aspectRatio: `${SVG_WIDTH} / ${SVG_HEIGHT}` }}>
        <svg
          viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
          width="100%"
          height="100%"
          className="absolute top-0 left-0"
          style={{ zIndex: 1 }}
        >
          <ArrowDefs />
          {connections.map(([from, to, d], i) => (
            <path
              key={from + to}
              d={d}
              stroke="#00FFAA"
              strokeWidth={3}
              fill="none"
              markerEnd="url(#arrowhead)"
              strokeDasharray="6 4"
            />
          ))}
        </svg>
        {/* Steps as absolutely positioned divs */}
        {steps.map((step) => (
          <div
            key={step.key}
            style={{
              position: "absolute",
              left: `${(step.x / SVG_WIDTH) * 100}%`,
              top: `${(step.y / SVG_HEIGHT) * 100}%`,
              transform: "translate(-50%, -50%)",
              zIndex: 2,
              width: "clamp(60px, 8vw, 120px)",
            }}
            className="flex flex-col items-center"
          >
            <div className="w-full aspect-square rounded-full border-4 border-white bg-white flex items-center justify-center overflow-hidden shadow-lg">
              <Image src={step.img} alt={step.label} width={120} height={120} className="object-contain w-full h-full" />
            </div>
            <span className="text-white mt-2 text-center font-semibold drop-shadow-lg text-xs sm:text-sm md:text-base">
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
