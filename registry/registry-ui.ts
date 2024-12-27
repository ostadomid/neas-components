import { Registry } from "./schema";

export const ui: Registry = [
  {
    name: "scroll-area-full-height",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-scroll-area"],
    files: ["ui/scroll-area-full-height.tsx"],
  },
];
