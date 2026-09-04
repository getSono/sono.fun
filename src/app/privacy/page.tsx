import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzhinweise für die Nutzung von sono.fun.",
  openGraph: {
    title: "Datenschutzerklärung",
    description: "Datenschutzhinweise für die Nutzung von sono.fun.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Datenschutzerklärung",
    description: "Datenschutzhinweise für die Nutzung von sono.fun.",
  },
};

const BLUR_FADE_DELAY = 0.04;

export default function PrivacyPage() {
  const imprint = DATA.imprint;

  return (
    <section id="privacy" className="space-y-8">
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
            Datenschutz
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Datenschutzerklärung
          </h1>
        </div>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <div className="space-y-6 rounded-xl border bg-card/60 p-6 shadow-sm shadow-black/5">
          <section className="space-y-2">
            <h2 className="text-lg font-semibold">1. Verantwortlicher</h2>
            <p className="text-muted-foreground">
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              <br />
              {imprint.responsible}
              <br />
              {imprint.location.split("\n").map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
              E-Mail:{" "}
              <Link href={`mailto:${imprint.email}`} className="text-primary hover:underline">
                {imprint.email}
              </Link>
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">2. Hosting und Server-Logfiles</h2>
            <p className="text-muted-foreground">
              Beim Aufruf dieser Website werden durch den Hosting-Anbieter technisch erforderliche
              Daten verarbeitet (z. B. IP-Adresse, Datum und Uhrzeit, aufgerufene URL, Referrer,
              Browser-Informationen). Diese Verarbeitung dient der Bereitstellung, Sicherheit und
              Stabilität der Website.
            </p>
            <p className="text-muted-foreground">
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an sicherem
              und zuverlässigem Betrieb der Website).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">3. Kontaktaufnahme</h2>
            <p className="text-muted-foreground">
              Wenn Sie mich per E-Mail, Telefon oder Kontaktformular kontaktieren, verarbeite ich
              Ihre Angaben zur Bearbeitung der Anfrage und für den Fall von Anschlussfragen.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) oder
              Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Kommunikation).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">4. Externe Inhalte und Links</h2>
            <p className="text-muted-foreground">
              Diese Website enthält Links zu externen Plattformen (z. B. GitHub, YouTube). Beim
              Anklicken der Links gelten die Datenschutzbestimmungen der jeweiligen Anbieter.
            </p>
            <p className="text-muted-foreground">
              In Projektbereichen können Medien von Drittanbietern geladen werden (z. B. Bilder
              von imgur.com). Dabei kann Ihre IP-Adresse an diese Anbieter übermittelt werden.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">5. Speicherdauer</h2>
            <p className="text-muted-foreground">
              Personenbezogene Daten werden nur so lange gespeichert, wie es für die genannten
              Zwecke erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">6. Ihre Rechte</h2>
            <p className="text-muted-foreground">
              Sie haben nach der DSGVO das Recht auf Auskunft, Berichtigung, Löschung,
              Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch gegen die
              Verarbeitung Ihrer Daten.
            </p>
            <p className="text-muted-foreground">
              Außerdem haben Sie ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">7. Aktualität</h2>
            <p className="text-muted-foreground">
              Diese Datenschutzerklärung hat den Stand September 2026 und wird bei Bedarf
              aktualisiert.
            </p>
          </section>

          <p className="text-sm text-muted-foreground">
            Ergänzende Angaben finden Sie im{" "}
            <Link href="/imprint" className="text-primary hover:underline">
              Impressum
            </Link>
            .
          </p>
        </div>
      </BlurFade>
    </section>
  );
}
