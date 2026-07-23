"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import { Bell, Search, Settings, ChevronDown, Languages } from "lucide-react";

import { useEditorStore } from "../editor/store/editor-store";
import { useTranslation } from "../editor/hooks/useTranslation";
import Image from "next/image";

const LANGUAGES = [
  {
    code: "bn",
    label: "বাংলা",
    flag: "🇧🇩",
  },
  {
    code: "en",
    label: "English",
    flag: "🇺🇸",
  },
] as const;

export default function Navbar() {
  // console.log(useEditorStore);
  const language = useEditorStore((state) => state.language);
  // console.log("language", language);
  const setLanguage = useEditorStore((state) => state.setLanguage);

  const { t } = useTranslation("navbar");
  const currentLanguage =
    LANGUAGES.find((lang) => lang.code === language) ?? LANGUAGES[0];

  return (
    <header className="relative z-50 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6">
      {" "}
      {/* Left */}
      <div className="flex items-center gap-8">
        <h1 className="text-2xl font-bold text-blue-600">{t.title}</h1>

        <div className="relative hidden md:block">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 translate-x-0 text-gray-400"
          />

          <input
            type="text"
            placeholder={t.search}
            className="h-11 w-105 rounded-full border border-gray-200 bg-gray-50 pl-11 pr-4 text-sm text-gray-700 outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
          />
        </div>
      </div>
      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Language */}
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-blue-500 hover:text-blue-600 hover:shadow-sm">
              <Languages size={18} className="text-blue-600" />

              <span>{currentLanguage.flag}</span>

              <span>{currentLanguage.label}</span>

              <ChevronDown size={16} />
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Content
            sideOffset={8}
            align="end"
            className="w-44 rounded-xl border border-gray-200 bg-white p-2 shadow-xl"
          >
            {LANGUAGES.map((lang) => (
              <DropdownMenu.Item
                key={lang.code}
                onSelect={() => setLanguage(lang.code)}
                className={`cursor-pointer rounded-lg px-3 py-2 text-sm outline-none ${
                  language === lang.code
                    ? "bg-blue-50 font-semibold text-blue-600"
                    : "hover:bg-blue-50"
                }`}
              >
                {lang.flag} {lang.label}
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.Content>
        </DropdownMenu.Root>

        {/* Notification */}
        <button className="rounded-full p-2 transition hover:bg-gray-100">
          <Bell size={20} />
        </button>

        {/* Settings */}
        <button className="rounded-full p-2 transition hover:bg-gray-100">
          <Settings size={20} />
        </button>

        {/* User */}
        <button className="flex items-center gap-3 rounded-full border border-gray-200 bg-white px-2 py-1 transition hover:bg-gray-50">
          <Image
            src="https://i.pravatar.cc/150?img=12"
            alt="User"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
          />
          <div className="hidden text-left lg:block">
            <p className="text-sm font-semibold text-gray-800">Jisan</p>

            <p className="text-xs text-gray-500">{t.role}</p>
          </div>
        </button>
      </div>
    </header>
  );
}
