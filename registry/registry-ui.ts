import { Registry } from "./schema";

export const ui: Registry = [
  {
    name: "red-button",
    type: "registry:ui",
    dependencies: ["button"],
    files: ["ui/red-button.tsx"],
  },
];
