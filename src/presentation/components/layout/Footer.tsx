import type { Locale } from "@/infrastructure/i18n/config";
import { DesktopFooter } from "./DesktopFooter";
import { MobileFooter } from "./MobileFooter";

interface FooterProps {
  lang: Locale;
}

export function Footer({ lang }: FooterProps) {
  return (
    <>
      <DesktopFooter lang={lang} />
      <MobileFooter lang={lang} />
    </>
  );
}
