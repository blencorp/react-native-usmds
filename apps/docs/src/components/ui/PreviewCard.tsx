"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import * as React from "react";
import { PlatformSelect, usePlatform } from "./PlatformSelect";

const SHOWCASE_QR_IMAGE = "/images/showcase-qr.svg";
const SHOWCASE_URL =
  "exp://u.expo.dev/0e88c5ff-0082-4757-b0fc-5f63ba337b72?runtime-version=1.0.0&channel-name=showcase";

type PreviewCardProps = {
  preview?: React.ReactNode;
};

export function PreviewCard({ preview }: PreviewCardProps) {
  const { width } = useWindowSize();
  const isDark = useIsDarkMode();
  const params = useParams<{ slug: string[] }>();
  const [mounted, setMounted] = React.useState(false);
  const [platform, setPlatform] = usePlatform();

  const component = params.slug?.at(-1);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <>
        <div className="group/copy bg-card not-prose relative flex min-h-[450px] flex-col rounded-md border">
          <div className="flex flex-1 flex-col items-center justify-center p-4">
            <div className="flex max-w-sm flex-col items-center gap-6 p-4">
              <div className="h-[230px] w-[230px] animate-pulse rounded-md bg-muted" />
              <p className="text-center font-mono text-sm">Loading...</p>
            </div>
          </div>
        </div>
        <a
          href={SHOWCASE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="not-prose bg-primary text-primary-foreground focus-visible:border-ring focus-visible:ring-ring/50 mt-4 inline-flex w-full shrink-0 items-center gap-2.5 rounded-lg p-2.5 text-sm font-medium shadow-sm outline-none transition-all focus-visible:ring-[3px] sm:hidden dark:p-2 [&_svg]:shrink-0"
        >
          <div className="bg-primary flex items-center justify-center rounded-lg p-1 shadow-md dark:bg-black dark:p-2">
            <svg
              className="size-11 text-white dark:size-10"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <p className="leading-none">Tap to preview in the app</p>
            <p className="text-[1.3rem] font-semibold leading-none">USMDS</p>
          </div>
        </a>
      </>
    );
  }

  return (
    <>
      <div className="group/copy bg-card not-prose relative flex min-h-[450px] flex-col rounded-md border">
        <div className="absolute -top-12 right-0 hidden items-center justify-end sm:flex">
          <PlatformSelect value={platform} onValueChange={setPlatform} />
        </div>
        <div className="flex flex-1 flex-col items-center justify-center p-4">
          {platform === "native" && width >= 640 ? (
            <div className="flex max-w-sm flex-col items-center gap-6 p-4">
              <Image
                src={SHOWCASE_QR_IMAGE}
                alt="Scan to open USMDS showcase app in Expo Go"
                width={230}
                height={230}
                className="h-[230px] w-[230px]"
              />
              <p className="text-center font-mono text-sm">
                Scan to preview in Expo Go.
              </p>
            </div>
          ) : (
            preview
          )}
        </div>
      </div>
      <a
        href={SHOWCASE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="not-prose bg-primary text-primary-foreground focus-visible:border-ring focus-visible:ring-ring/50 mt-4 inline-flex w-full shrink-0 items-center gap-2.5 rounded-lg p-2.5 text-sm font-medium shadow-sm outline-none transition-all focus-visible:ring-[3px] sm:hidden dark:p-2 [&_svg]:shrink-0"
      >
        <div className="bg-primary flex items-center justify-center rounded-lg p-1 shadow-md dark:bg-black dark:p-2">
          <svg
            className="size-11 text-white dark:size-10"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L2 7L12 12L22 7L12 2Z"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 17L12 22L22 17"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 12L12 17L22 12"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex flex-col gap-1">
          <p className="leading-none">Tap to preview in the app</p>
          <p className="text-[1.3rem] font-semibold leading-none">USMDS</p>
        </div>
      </a>
    </>
  );
}

type WindowSize = {
  width: number;
  height: number;
};

function useWindowSize(): WindowSize {
  const [size, setSize] = React.useState<WindowSize>({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  React.useEffect(() => {
    function handleResize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size;
}

export function useIsDarkMode(): boolean {
  const [isDark, setIsDark] = React.useState(() => {
    if (typeof document === "undefined") return false;
    return document.documentElement.classList.contains("dark");
  });

  React.useEffect(() => {
    const htmlEl = document.documentElement;

    const updateDarkMode = () => {
      setIsDark(htmlEl.classList.contains("dark"));
    };

    updateDarkMode();

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          updateDarkMode();
        }
      }
    });

    observer.observe(htmlEl, { attributes: true, attributeFilter: ["class"] });

    return () => {
      observer.disconnect();
    };
  }, []);

  return isDark;
}
