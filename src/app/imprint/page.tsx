import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Imprint",
  description: "Legal notice and contact information for Sono.",
  openGraph: {
    title: "Imprint",
    description: "Legal notice and contact information for Sono.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Imprint",
    description: "Legal notice and contact information for Sono.",
  },
};

const BLUR_FADE_DELAY = 0.04;

export default function ImprintPage() {
  return (
    <section id="imprint" className="space-y-8">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Back home
        </Link>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Legal notice
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Imprint
          </h1>
        </div>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <div className="rounded-xl border bg-card/60 p-6 shadow-sm shadow-black/5">
          <div className="mb-5 flex items-center justify-between gap-2">
            <p>
              Sono — Julian Duc-Nam Wolf
              <br />
              c/o Online-Impressum 10690
              <br />
              Europaring 90
              <br />
              53757 Sankt Augustin
              <br />
              <br />
              <span className="font-medium">Email</span>:{" "}
              <Link
                href="mailto:sono@mail.online-impressum.de"
                className="text-primary hover:underline"
              >
                sono@mail.online-impressum.de
              </Link>
              <br />
              <span className="font-medium">Phone</span>:{" "}
              <Link
                href="tel:+49125255746757"
                className="text-primary hover:underline"
              >
                +49 12525 5746757
              </Link>
              <br/>
              <Link href="https://mein.online-impressum.de/sono#zweiterkontaktweg" className="text-medium hover:underline">
                Contact Formular
              </Link>
              <br />
              <br />
              <span className="font-medium">Zuständige Aufsichtsbehörde</span>: Bayerische Landeszentrale für neue Medien | Sitz: Deutschland
            </p>
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
