import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const EDGE_PX = 24; // touch must start within this from the left edge
const TRIGGER_PX = 90; // distance to trigger back
const MAX_OFFSET = 36; // how far the hint moves while dragging

export default function EdgeSwipeBack() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const activeRef = useRef(false);
  const startXRef = useRef(0);
  const deltaXRef = useRef(0);
  const touchIdRef = useRef<number | null>(null);

  useEffect(() => {
    const onStart = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      const t = e.touches[0];
      // Only start if the initial touch is on the very left edge
      if (t.clientX <= EDGE_PX) {
        activeRef.current = true;
        startXRef.current = t.clientX;
        deltaXRef.current = 0;
        touchIdRef.current = t.identifier;
        setProgress(0);
        setVisible(true);
      }
    };

    const pickTouch = (touches: TouchList) => {
      if (touchIdRef.current == null) return touches[0] ?? null;
      for (let i = 0; i < touches.length; i++) {
        if (touches[i].identifier === touchIdRef.current) return touches[i];
      }
      return null;
    };

    const onMove = (e: TouchEvent) => {
      if (!activeRef.current) return;
      const t = pickTouch(e.touches);
      if (!t) return;
      const dx = Math.max(0, t.clientX - startXRef.current);
      deltaXRef.current = dx;
      setProgress(Math.max(0, Math.min(1, dx / TRIGGER_PX)));
    };

    const finish = () => {
      const dx = deltaXRef.current;
      const shouldGoBack = dx >= TRIGGER_PX * 0.6;
      activeRef.current = false;
      touchIdRef.current = null;
      setProgress(0);
      setVisible(false);
      if (shouldGoBack) {
        if (window.history.length > 1) navigate(-1);
        else navigate("/");
      }
    };

    const onEnd = (e: TouchEvent) => {
      if (!activeRef.current) return;
      // Prefer the tracked touch end, but we can just finish regardless
      finish();
    };

    window.addEventListener("touchstart", onStart, { passive: true });
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchend", onEnd, { passive: true });
    window.addEventListener("touchcancel", onEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", onStart as any);
      window.removeEventListener("touchmove", onMove as any);
      window.removeEventListener("touchend", onEnd as any);
      window.removeEventListener("touchcancel", onEnd as any);
    };
  }, [navigate]);

  // Visual cue transforms with progress
  const translate = Math.round(progress * MAX_OFFSET);
  const opacity = visible ? Math.max(0.2, progress) : 0;

  return (
    <div aria-hidden className="fixed inset-0 z-[60] pointer-events-none">
      <div
        className="absolute left-2 top-1/2 -translate-y-1/2"
        style={{ transform: `translateX(${translate}px) translateY(-50%)`, opacity }}
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full border bg-card text-foreground shadow-elegant transition-all duration-150">
          <ArrowRight className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}
