import { ReactNode } from "react";
import { MainContentContainer } from "./styles";

export function MainContent({ children }: { children: ReactNode }) {
  return <MainContentContainer>{children}</MainContentContainer>;
}
