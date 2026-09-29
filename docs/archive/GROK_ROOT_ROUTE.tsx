import { createRootRoute, HeadContent, Outlet, Scripts, useRouterState } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { FindDialog } from "@/components/find";
import { Instrument, useCurrentChamber } from "@/components/instrument";
import { RoomsOverlay } from "@/components/rooms";
import { Threshold } from "@/components/threshold";
import { useInstrument } from "@/lib/instrument-store";
import appCss from "../styles.css?url";

const APP_NAME = "INFAC";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content:
          "INFAC — the website is one of the works. Underground press, mutual-aid commons, artist archive.",
      },
      { name: "theme-color", content: "#080706" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,500;0,9..144,600;1,9..144,300;1,9..144,500&family=IBM+Plex+Mono:ital,wght@0,400;0,500;1,400&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap",
      },
    ],
  }),
  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <span
          dangerouslySetInnerHTML={{
            __html: "<!-- INFAC // VIEW SOURCE. The document participates in the system. Search: residue / star / 93 / unknown / 418 -->",
          }}
        />
        <PreviewHostBridge />
        <AuthProvider>
          <Shell />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}

function Shell() {
  const chamber = useCurrentChamber();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const readingPlain = useInstrument((s) => s.readingPlain);

  return (
    <div
      data-register={chamber.register}
      data-reading={readingPlain ? "plain" : undefined}
      className="min-h-dvh bg-void text-bone"
    >
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <Threshold enabled={pathname === "/"} />
      <Instrument />
      <RoomsOverlay current={chamber.id} />
      <FindDialog />
      <div className="grain" aria-hidden="true" />
      <div id="content">
        <Outlet />
      </div>
    </div>
  );
}
