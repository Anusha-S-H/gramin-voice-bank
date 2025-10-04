import { Button } from "@/components/ui/button";
import { Moon, Sun, Globe, Menu } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState<'en' | 'hi' | 'kn'>('en');

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const languageLabels = {
    en: 'English',
    hi: 'हिन्दी',
    kn: 'ಕನ್ನಡ'
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur-xl bg-background/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">GB</span>
            </div>
            <h1 className="text-xl font-bold gradient-text">Gramin Bank</h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              const langs: ('en' | 'hi' | 'kn')[] = ['en', 'hi', 'kn'];
              const currentIndex = langs.indexOf(language);
              const nextLang = langs[(currentIndex + 1) % langs.length];
              setLanguage(nextLang);
            }}
            className="hover:bg-muted"
          >
            <Globe className="h-5 w-5" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="hover:bg-muted"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};
