"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const tagStyle: React.CSSProperties = {
  fontSize: "0.75rem",
  fontWeight: 500,
  color: "#05537a",
  background: "#e6f9f8",
  padding: "2px 8px",
  borderRadius: "999px",
  border: "1px solid rgba(5,83,122,0.12)",
  flexShrink: 0,
  whiteSpace: "nowrap",
};

export default function StackTags({ stack }: { stack: string[] }) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [visibleCount, setVisibleCount] = useState(stack.length);

  const measure = useCallback(() => {
    const el = rowRef.current;
    if (!el || expanded) {
      setVisibleCount(stack.length);
      return;
    }
    // Temporarily show all tags to measure
    const tags = el.querySelectorAll<HTMLElement>("[data-tag]");
    tags.forEach((t) => (t.style.display = ""));

    const containerRight = el.getBoundingClientRect().right;
    let count = 0;
    for (const tag of tags) {
      const tagRight = tag.getBoundingClientRect().right;
      if (tagRight > containerRight + 1) break;
      count++;
    }
    setVisibleCount(count);
  }, [expanded, stack.length]);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const hiddenCount = stack.length - visibleCount;
  const visible = expanded ? stack : stack.slice(0, visibleCount);

  return (
    <div className="flex items-center" style={{ gap: "0.375rem", flexWrap: expanded ? "wrap" : "nowrap" }}>
      {visible.map((tech) => (
        <span key={tech} data-tag style={tagStyle}>
          {tech}
        </span>
      ))}
      {/* Hidden measurement container */}
      {!expanded && (
        <div
          ref={rowRef}
          aria-hidden
          style={{
            position: "absolute",
            visibility: "hidden",
            display: "flex",
            gap: "0.375rem",
            flexWrap: "nowrap",
            pointerEvents: "none",
            left: 0,
            right: 0,
          }}
        >
          {stack.map((tech) => (
            <span key={tech} data-tag style={tagStyle}>
              {tech}
            </span>
          ))}
        </div>
      )}
      {hiddenCount > 0 && !expanded && (
        <button
          onClick={() => setExpanded(true)}
          style={{
            fontSize: "0.75rem",
            fontWeight: 500,
            color: "#05537a",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "2px 4px",
            flexShrink: 0,
            whiteSpace: "nowrap",
          }}
        >
          +{hiddenCount}
        </button>
      )}
      {expanded && (
        <button
          onClick={() => setExpanded(false)}
          style={{
            fontSize: "0.75rem",
            fontWeight: 500,
            color: "#05537a",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "2px 4px",
            flexShrink: 0,
            whiteSpace: "nowrap",
          }}
        >
          less
        </button>
      )}
    </div>
  );
}
