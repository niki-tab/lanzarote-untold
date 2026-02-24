import type { NavigationItem } from "@/domain/types";
import { DesktopHeader } from "./DesktopHeader";
import { MobileHeader } from "./MobileHeader";

interface HeaderProps {
  navigation: NavigationItem[];
}

export function Header({ navigation }: HeaderProps) {
  return (
    <>
      <DesktopHeader navigation={navigation} />
      <MobileHeader navigation={navigation} />
    </>
  );
}
