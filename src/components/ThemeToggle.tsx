import { Switch } from "@ark-ui/react/switch";
import { useEffect, useState } from "react";
import { css } from "../../styled-system/css";

type Theme = "light" | "dark";

const root = css({
  display: "inline-flex",
  alignItems: "center",
  cursor: "pointer",
  gap: "2",
});

const control = css({
  position: "relative",
  width: "36px",
  height: "20px",
  bg: "bg.elevated",
  rounded: "full",
  border: "1px solid",
  borderColor: "border.subtle",
  transition: "background-color .15s ease",
  _checked: { bg: "accent" },
});

const thumb = css({
  position: "absolute",
  top: "1px",
  left: "1px",
  width: "16px",
  height: "16px",
  bg: "bg",
  rounded: "full",
  transition: "transform .15s ease",
  boxShadow: "card",
  _checked: { transform: "translateX(16px)" },
});

const label = css({
  fontSize: "xs",
  color: "fg.muted",
  fontFamily: "mono",
});

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const current = (document.documentElement.dataset.theme as Theme) || "light";
    setTheme(current);
  }, []);

  const onCheckedChange = (details: { checked: boolean }) => {
    const next: Theme = details.checked ? "dark" : "light";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
  };

  return (
    <Switch.Root
      checked={theme === "dark"}
      onCheckedChange={onCheckedChange}
      className={root}
    >
      <Switch.Control className={control}>
        <Switch.Thumb className={thumb} />
      </Switch.Control>
      <Switch.HiddenInput />
      <Switch.Label className={label}>{theme === "dark" ? "dark" : "light"}</Switch.Label>
    </Switch.Root>
  );
}
