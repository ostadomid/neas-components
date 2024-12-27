import { Registry } from "./schema";

export const ui: Registry = [
  {
    name: "scroll-area-fa",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-scroll-area"],
    files: ["ui/scroll-area-fa.tsx"],
  },
];
