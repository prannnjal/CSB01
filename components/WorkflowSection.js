import Image from "next/image";
import { useEffect, useRef } from "react";
import * as THREE from "three";

// SVG width/height
const SVG_WIDTH = 1500;
const SVG_HEIGHT = 600;

// Step data (use percentages for x/y)
const steps = [
  { key: "brief", label: "Client's Brief", x: 5.3, y: 36.7, img: "/images/client-brief.webp" },
  { key: "brainstorm", label: "Brain Storming", x: 23.3, y: 45, img: "/images/brainstorming.webp" },
  { key: "analysis", label: "Analysis", x: 40, y: 50, img: "/images/Data_analysis@2x-1.png" },
  { key: "wireframe", label: "Wireframe", x: 40, y: 13.3, img: "/images/4659873.webp" },
  { key: "tea", label: "Tea - Breaks", x: 56.7, y: 13.3, img: "/images/modern-tea-chai-break-background-advertisement_1017-53904.avif" },
  { key: "strategy", label: "Strategy", x: 70, y: 36.7, img: "/images/pulse-strategy.svg" },
  { key: "presentation", label: "Presentation", x: 83.3, y: 13.3, img: "/images/4778601-middle.png" },
  { key: "implementation", label: "Implementation", x: 83.3, y: 50, img: "/images/implementation-of-a-plan.png" },
  { key: "solution", label: "Solution", x: 56.7, y: 66.7, img: "/images/box-solution.png" },
  { key: "beta", label: "Beta", x: 70, y: 66.7, img: "/images/beta-testing-concept-icon-software-development-stage-idea-thin-line-illustration-application-perfomance-verification-it-project-managment-app-coding-isolated-outline-drawing-vector.jpg" },
  { key: "delivery", label: "Project Delivery", x: 93.3, y: 66.7, img: "/images/illustration-delivery.svg" },
];

// Consistent, smooth quadratic Bézier curves for all connections
const connections = [
  // brief -> wireframe
  ["brief", "wireframe", "M80 220 Q340 0 600 80"],
  // wireframe -> brainstorm
  ["wireframe", "brainstorm", "M600 80 Q475 175 350 270"],
  // brainstorm -> analysis
  ["brainstorm", "analysis", "M350 270 Q475 350 600 250"],
  // analysis -> tea
  ["analysis", "tea", "M600 300 Q725 0 850 80"],
  // tea -> solution
  ["tea", "solution", "M850 80 Q850 240 850 400"],
  // solution -> beta
  ["solution", "beta", "M850 400 Q950 400 1050 400"],
  // beta -> strategy
  ["beta", "strategy", "M1050 400 Q1050 310 1050 220"],
  // strategy -> presentation
  ["strategy", "presentation", "M1050 220 Q1150 0 1250 80"],
  // presentation -> implementation
  ["presentation", "implementation", "M1250 80 Q1250 190 1250 300"],
  // implementation -> delivery
  ["implementation", "delivery", "M1250 300 Q1325 350 1400 400"],
];

const ArrowDefs = () => (
  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#00FFAA" />
    </marker>
  </defs>
);

export default function WorkflowSection() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;
    // Scene, camera, renderer setup
    const scene = new THREE.Scene();
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 5000);
    camera.position.z = 1000;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0); // transparent background
    mountRef.current.appendChild(renderer.domElement);

    // Starfield
    const starGeometry = new THREE.BufferGeometry();
    const starVertices = []
    for (let i = 0; i < 1200; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      starVertices.push(x, y, z);
    }
    starGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(starVertices), 3));
    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 2 });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Nebula/Planet
    const loader = new THREE.TextureLoader();
    let nebulaMesh = null;
    loader.load("/images/nebula.jpg", (nebulaTexture) => {
      const nebulaMaterial = new THREE.MeshBasicMaterial({ map: nebulaTexture });
      nebulaMesh = new THREE.Mesh(new THREE.SphereGeometry(10, 30, 20), nebulaMaterial);
      nebulaMesh.position.set(0, 0, -1000);
      scene.add(nebulaMesh);
    });

    // Animation loop
    let animationId;
    let angle = 0;
    const radius = 1000;
    function animate() {
      animationId = requestAnimationFrame(animate);
      // Move camera in a slower circular path
      angle += 0.005; // Slower animation
      camera.position.x = Math.cos(angle) * radius;
      camera.position.z = Math.sin(angle) * radius;
      camera.position.y = Math.sin(angle * 0.5) * 100; // Optional: up/down oscillation
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    }
    animate();

    // Handle resize
    function handleResize() {
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      if (renderer) {
        renderer.dispose();
        if (renderer.domElement && mountRef.current) {
          mountRef.current.removeChild(renderer.domElement);
        }
      }
    };
  }, []);

  return (
    <section className="relative w-full bg-black overflow-x-auto py-8">
      {/* Three.js background */}
      <div
        ref={mountRef}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      />
      <div className="text-center mb-8" style={{ position: "relative", zIndex: 2 }}>
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">Our Workflow Process</h2>
        <p className="text-gray-400 text-base lg:text-lg">From concept to delivery - our proven methodology</p>
      </div>
      {/* Horizontally scrollable workflow for mobile */}
      <div
        className="w-full overflow-x-auto workflow-scroll"
        style={{ WebkitOverflowScrolling: 'touch', zIndex: 2 }}
      >
        <div
          className="relative mx-auto"
          style={{
            aspectRatio: `${SVG_WIDTH} / ${SVG_HEIGHT}`,
            minWidth: '1200px', // Ensures horizontal scroll on mobile
            width: '100%',
            maxWidth: '1500px',
          }}
        >
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
                left: `${step.x}%`,
                top: `${step.y}%`,
                transform: "translate(-50%, -50%)",
                zIndex: 2,
                width: "clamp(56px, 10vw, 110px)",
                minWidth: 48,
                maxWidth: 120,
              }}
              className="flex flex-col items-center"
            >
              <div
                className="w-full aspect-square rounded-full border-4 border-white bg-white flex items-center justify-center overflow-hidden shadow-lg p-2 sm:p-4"
                style={{ position: 'relative' }}
              >
                <Image 
                  src={step.img} 
                  alt={step.label} 
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="(max-width: 600px) 60px, (max-width: 1024px) 8vw, 110px"
                />
              </div>
              <span className="text-white mt-2 text-center font-semibold drop-shadow-lg text-xs sm:text-sm md:text-base max-w-[7.5rem] sm:max-w-[10rem] truncate">
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Hide scrollbar cross-browser */}
      <style jsx global>{`
        .workflow-scroll {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .workflow-scroll::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
        /* Hide all horizontal scrollbars everywhere */
        *::-webkit-scrollbar:horizontal {
          display: none !important;
          height: 0 !important;
        }
        * {
          scrollbar-width: none !important;
        }
        *:not(textarea) {
          -ms-overflow-style: none !important;
        }
      `}</style>
    </section>
  );
}