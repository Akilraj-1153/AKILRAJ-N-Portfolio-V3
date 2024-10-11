import { atom } from "recoil";

export const MobNavState = atom({
  key: "MobNavState",
  default: false,
});

export const NavState = atom({
  key: "NavState",
  default: "home",
});

export const Centercertificate = atom({
  key: "Centercertificate",
  default: 0,
});
