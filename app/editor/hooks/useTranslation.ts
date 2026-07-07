"use client";

import { translations } from "../i18n/translations";
import { useEditorStore } from "../store/editor-store";

type Language = keyof typeof translations;
type Translation = (typeof translations)[Language];
type Namespace = keyof Translation;

export function useTranslation<N extends Namespace>(namespace: N) {
  const language = useEditorStore((state) => state.language);
  const setLanguage = useEditorStore((state) => state.setLanguage);

  return {
    language,
    setLanguage,
    t: translations[language][namespace],
  };
}
