import { Theme } from "../types";
import { createEffect, createEvent, createStore, sample } from "effector";
import { persist } from "effector-storage/local";

export const setTheme = createEvent<Theme>();
export const detectThemeIfNotSet = createEvent();
const persistTheme = createEvent();

export const detectThemeFx = createEffect<void, Theme>(() => {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return Theme.dark;
  }

  return Theme.light;
});

const setThemeAttributeToRootFx = createEffect<null | Theme, void>((theme) => {
  document.documentElement.setAttribute("data-theme", theme ?? Theme.light);
});

export const $theme = createStore<null | Theme>(null).on(
  [setTheme, detectThemeFx.doneData],
  (_, theme) => theme
);

sample({
  clock: detectThemeIfNotSet,
  filter: (theme) => !theme,
  source: $theme,
  target: detectThemeFx,
});

sample({
  clock: $theme,
  target: setThemeAttributeToRootFx,
});

sample({
  clock: setTheme,
  target: persistTheme,
});

persist({ clock: persistTheme, key: "theme", store: $theme });
