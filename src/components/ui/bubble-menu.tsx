"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { Terminal } from "lucide-react";

interface MenuItem {
  label: string;
  href: string;
  ariaLabel?: string;
  rotation?: number;
  hoverStyles?: {
    bgColor: string;
    textColor: string;
  };
}

const DEFAULT_ITEMS: MenuItem[] = [
  {
    label: "home",
    href: "/",
    ariaLabel: "Home",
    rotation: -8,
    hoverStyles: { bgColor: "#a855f7", textColor: "#ffffff" },
  },
  {
    label: "docs",
    href: "/docs",
    ariaLabel: "Documentation",
    rotation: 8,
    hoverStyles: { bgColor: "#ec4899", textColor: "#ffffff" },
  },
  {
    label: "github",
    href: "https://github.com/shirishshrestha/initkit",
    ariaLabel: "GitHub",
    rotation: 8,
    hoverStyles: { bgColor: "#8b5cf6", textColor: "#ffffff" },
  },
];

interface BubbleMenuProps {
  logo?: React.ReactNode;
  items?: MenuItem[];
  menuBg?: string;
  menuContentColor?: string;
  animationEase?: string;
  animationDuration?: number;
  staggerDelay?: number;
}

export function BubbleMenu({
  logo,
  items = DEFAULT_ITEMS,
  menuBg = "#ffffff",
  menuContentColor = "#111111",
  animationEase = "back.out(1.5)",
  animationDuration = 0.5,
  staggerDelay = 0.12,
}: BubbleMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const pathname = usePathname();

  const overlayRef = useRef<HTMLDivElement>(null);
  const bubblesRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const labelRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const handleToggle = () => {
    const nextState = !isMenuOpen;
    if (nextState) setShowOverlay(true);
    setIsMenuOpen(nextState);
  };

  useEffect(() => {
    const overlay = overlayRef.current;
    const bubbles = bubblesRef.current.filter(Boolean);
    const labels = labelRefs.current.filter(Boolean);

    if (!overlay || !bubbles.length) return;

    if (isMenuOpen) {
      gsap.set(overlay, { display: "flex" });
      gsap.killTweensOf([...bubbles, ...labels]);
      gsap.set(bubbles, { scale: 0, transformOrigin: "50% 50%" });
      gsap.set(labels, { y: 24, autoAlpha: 0 });

      bubbles.forEach((bubble, i) => {
        const delay = i * staggerDelay + gsap.utils.random(-0.05, 0.05);
        const tl = gsap.timeline({ delay });

        tl.to(bubble, {
          scale: 1,
          duration: animationDuration,
          ease: animationEase,
        });
        if (labels[i]) {
          tl.to(
            labels[i],
            {
              y: 0,
              autoAlpha: 1,
              duration: animationDuration,
              ease: "power3.out",
            },
            `-=${animationDuration * 0.9}`,
          );
        }
      });
    } else if (showOverlay) {
      gsap.killTweensOf([...bubbles, ...labels]);
      gsap.to(labels, {
        y: 24,
        autoAlpha: 0,
        duration: 0.2,
        ease: "power3.in",
      });
      gsap.to(bubbles, {
        scale: 0,
        duration: 0.2,
        ease: "power3.in",
        onComplete: () => {
          gsap.set(overlay, { display: "none" });
          setShowOverlay(false);
        },
      });
    }
  }, [isMenuOpen, showOverlay, animationEase, animationDuration, staggerDelay]);

  useEffect(() => {
    const handleResize = () => {
      if (isMenuOpen) {
        const bubbles = bubblesRef.current.filter(Boolean);
        const isDesktop = window.innerWidth >= 900;

        bubbles.forEach((bubble, i) => {
          const item = items[i];
          if (bubble && item) {
            const rotation = isDesktop ? (item.rotation ?? 0) : 0;
            gsap.set(bubble, { rotation });
          }
        });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen, items]);

  return (
    <>
      {/* Navigation Bar */}
      <nav
        className="fixed left-0 right-0 top-8 flex items-center justify-between gap-4 px-8 pointer-events-none z-[99]"
        aria-label="Main navigation"
      >
        {/* Logo Bubble */}
        <div
          className="inline-flex items-center justify-center min-h-[48px] h-[48px] px-4 rounded-full shadow-lg pointer-events-auto md:min-h-[56px] md:h-[56px]"
          style={{ background: menuBg }}
          aria-label="Logo"
        >
          <span className="inline-flex items-center justify-center w-[120px] h-full">
            {typeof logo === "string" ? (
              <img
                src={logo}
                alt="Logo"
                className="max-h-[60%] max-w-full object-contain block"
              />
            ) : logo ? (
              logo
            ) : (
              <Terminal
                className="w-5 h-5 md:w-6 md:h-6"
                style={{ color: menuContentColor }}
              />
            )}
          </span>
        </div>

        {/* Toggle Button */}
        <button
          type="button"
          className={`inline-flex flex-col items-center justify-center w-[48px] h-[48px] md:w-[56px] md:h-[56px] rounded-full shadow-lg pointer-events-auto cursor-pointer border-0 p-0 transition-transform ${
            isMenuOpen ? "rotate-0" : ""
          }`}
          onClick={handleToggle}
          aria-label="Toggle navigation"
          aria-pressed={isMenuOpen}
          style={{ background: menuBg }}
        >
          <span
            className={`w-[26px] h-[2px] rounded-sm block mx-auto transition-all duration-300 ${
              isMenuOpen ? "translate-y-1 rotate-45" : ""
            }`}
            style={{ background: menuContentColor }}
          />
          <span
            className={`w-[26px] h-[2px] rounded-sm block mx-auto mt-1.5 transition-all duration-300 ${
              isMenuOpen ? "-translate-y-1 -rotate-45" : ""
            }`}
            style={{ background: menuContentColor }}
          />
        </button>
      </nav>

      {/* Menu Items Overlay */}
      {showOverlay && (
        <div
          ref={overlayRef}
          className="fixed inset-0 flex items-center justify-center pointer-events-none z-[98] pt-0 md:pt-0"
          aria-hidden={!isMenuOpen}
          style={{ display: "none" }}
        >
          <ul
            className="list-none m-0 px-6 flex flex-wrap gap-0 row-gap-4 md:row-gap-1 w-full max-w-[1600px] mx-auto pointer-events-auto justify-stretch"
            role="menu"
            aria-label="Menu links"
          >
            {items.map((item, idx) => (
              <li
                key={idx}
                role="none"
                className="flex justify-center items-stretch flex-[0_0_100%] md:flex-[0_0_33.333%] box-border"
                style={{
                  marginLeft:
                    idx === 3 && items.length === 5
                      ? "16.666%"
                      : idx === 3 && items.length === 4
                        ? "33.333%"
                        : "0",
                }}
              >
                <Link
                  role="menuitem"
                  href={item.href}
                  aria-label={item.ariaLabel || item.label}
                  className="w-full min-h-[80px] md:min-h-[160px] py-6 md:py-12 text-2xl md:text-6xl font-normal leading-none rounded-full shadow-md flex items-center justify-center relative transition-all duration-300 box-border whitespace-nowrap overflow-hidden will-change-transform hover:scale-105 active:scale-95"
                  style={
                    {
                      "--item-rot": `${item.rotation ?? 0}deg`,
                      "--pill-bg": menuBg,
                      "--pill-color": menuContentColor,
                      "--hover-bg": item.hoverStyles?.bgColor || "#f3f4f6",
                      "--hover-color":
                        item.hoverStyles?.textColor || menuContentColor,
                      background:
                        pathname === item.href
                          ? item.hoverStyles?.bgColor
                          : "var(--pill-bg)",
                      color:
                        pathname === item.href
                          ? item.hoverStyles?.textColor
                          : "var(--pill-color)",
                      transform:
                        window.innerWidth >= 900
                          ? `rotate(${item.rotation ?? 0}deg)`
                          : "none",
                    } as React.CSSProperties
                  }
                  ref={(el) => {
                    if (el) bubblesRef.current[idx] = el;
                  }}
                  onMouseEnter={(e) => {
                    if (pathname !== item.href) {
                      e.currentTarget.style.background =
                        item.hoverStyles?.bgColor || "#f3f4f6";
                      e.currentTarget.style.color =
                        item.hoverStyles?.textColor || menuContentColor;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (pathname !== item.href) {
                      e.currentTarget.style.background = menuBg;
                      e.currentTarget.style.color = menuContentColor;
                    }
                  }}
                >
                  <span
                    className="inline-block will-change-transform h-[1.2em] leading-[1.2]"
                    ref={(el) => {
                      if (el) labelRefs.current[idx] = el;
                    }}
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
