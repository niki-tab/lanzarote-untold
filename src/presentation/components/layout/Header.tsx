import type { NavigationItem } from "@/domain/types";
import type { Locale } from "@/infrastructure/i18n/config";
import { DesktopHeader } from "./DesktopHeader";
import { MobileHeader } from "./MobileHeader";

interface HeaderProps {
  navigation: NavigationItem[];
  lang: Locale;
}

export function Header({ navigation, lang }: HeaderProps) {
  return (
    <>
      <DesktopHeader navigation={navigation} lang={lang} />
      <MobileHeader navigation={navigation} lang={lang} />
    </>
  );
}
