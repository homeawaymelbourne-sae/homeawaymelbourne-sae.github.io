// Click sound effects. Elements opt in via data-sfx="e" | "g" | "g-nm" | "c";
// everything else clickable falls back to the neutral beep.
const FILES: Record<string, string> = {
  e: "/audio/cim220.2_beep_e.wav",
  g: "/audio/cim220.2_beep_g.wav",
  "g-nm": "/audio/cim220.2_beep_g_no%20marimba.wav",
  c: "/audio/cim220.2_beep_c.wav",
  default: "/audio/cim220.2_beep_c_no%20marimba.wav",
};

const cache = new Map<string, HTMLAudioElement>();

export function playSfx(key: string) {
  const src = FILES[key] ?? FILES.default;
  try {
    let base = cache.get(src);
    if (!base) {
      base = new Audio(src);
      base.preload = "auto";
      cache.set(src, base);
    }
    const node = base.cloneNode(true) as HTMLAudioElement;
    node.volume = 0.5;
    void node.play().catch(() => {});
  } catch {
    /* ignore */
  }
}

export function initSfx() {
  if (typeof document === "undefined") return () => {};
  Object.values(FILES).forEach((src) => {
    if (!cache.has(src)) {
      const a = new Audio(src);
      a.preload = "auto";
      cache.set(src, a);
    }
  });

  const onClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement | null;
    const el = target?.closest?.("a,button,[role='button'],input[type='range']");
    if (!el) return;
    if (el.tagName === "INPUT") return;
    playSfx((el as HTMLElement).dataset.sfx ?? "default");
  };

  document.addEventListener("click", onClick);
  return () => document.removeEventListener("click", onClick);
}
