import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { getTheme } from "@/redux/app/appSelector";
import { appActions } from "@/redux/app/appSlice";
import { useCallback, useEffect } from "react";
import { Button } from "react-daisyui";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useMedia } from "react-use";
import { themeChange } from "theme-change";

// Set the corresponding daisyUI themes from "tailwind.config.cjs"
const themes = { light: "winter", dark: "dark" };

export default function ThemeChanger({
  className,
}: {
  className?: string;
}): JSX.Element {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(getTheme);
  const deviceThemeDark = useMedia("(prefers-color-scheme: dark)", false);

  // Automatically set theme if non is explicitly set
  if (!theme) {
    const htmlElement = document.querySelector("html")!;
    htmlElement.setAttribute(
      "data-theme",
      deviceThemeDark ? themes.dark : themes.light
    );
  }

  useEffect(() => {
    themeChange(false);
  }, []);

  const themeIcon = useCallback(() => {
    return theme === themes.light ? (
      <MdOutlineDarkMode className="h-5 w-5" />
    ) : (
      <MdOutlineLightMode className="h-5 w-5" />
    );
  }, [theme]);

  return (
    <div className={className}>
      <Button
        data-set-theme={theme === themes.light ? themes.dark : themes.light}
        shape="circle"
        color="ghost"
        onClick={() =>
          dispatch(
            appActions.setTheme(
              theme === themes.light ? themes.dark : themes.light
            )
          )
        }
      >
        {themeIcon()}
      </Button>
    </div>
  );
}
