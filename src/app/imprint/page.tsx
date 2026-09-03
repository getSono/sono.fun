import BlurFade from "@/components/magicui/blur-fade";
import type { Metadata } from "next";
import Link from "next/link";
import { DATA } from "@/data/resume";

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
  const imprint = DATA.imprint;

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
              {imprint.responsible}
              <br />
              {imprint.location.split("\n").map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
              <br />
              <span className="font-medium">E-Mail</span>:{" "}
              <Link
                href={`mailto:${imprint.email}`}
                className="text-primary hover:underline"
              >
                {imprint.email}
              </Link>
              <br />
              <span className="font-medium">Phone</span>:{" "}
              <Link
                href={`tel:${imprint.tel}`}
                className="text-primary hover:underline"
              >
                {imprint.tel}
              </Link>
              <br />
              <Link
                href={imprint.secondContactUrl}
                className="text-medium hover:underline"
              >
                Kontaktformular
              </Link>
              <br />
              <br />
              <span className="font-medium">
                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
              </span>
              : Julian Duc-Nam Wolf
              <br />
              <span className="font-medium">Zuständige Aufsichtsbehörde</span>:{" "}
              {imprint.authority}
              <br />
              <span className="font-medium">
                Verbraucherstreitbeilegung (§ 36 VSBG)
              </span>
              : Ich bin nicht bereit und nicht verpflichtet, an
              Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
              <br />
              <br />
              <Link href="/privacy" className="text-primary hover:underline">
                Zur Datenschutzerklärung
              </Link>
            </p>
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
