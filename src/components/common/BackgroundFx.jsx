/**
 * Ambient background — fixed glow orbs + subtle grid overlay.
 * Sits behind all content (z-index 0), purely decorative.
 */
export default function BackgroundFx() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid opacity-40
                   [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]"
      />
      {/* Glow orbs */}
      <div className="absolute top-[-10%] left-[-5%] h-[400px] w-[400px] glow-spot animate-float-slow" />
      <div
        className="absolute top-[40%] right-[-10%] h-[500px] w-[500px] glow-spot animate-float-slow"
        style={{ animationDelay: "-7s" }}
      />
      <div
        className="absolute bottom-[5%] left-[20%] h-[350px] w-[350px] glow-spot animate-float-slow"
        style={{
          animationDelay: "-3s",
          background:
            "radial-gradient(circle at center, rgba(168,85,247,0.25) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
