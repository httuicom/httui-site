import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  jsxFramework: "react",
  outdir: "styled-system",
  include: ["./src/**/*.{ts,tsx,astro,mdx}"],
  exclude: [],

  conditions: {
    dark: "[data-theme=dark] &",
    light: "[data-theme=light] &",
  },

  theme: {
    tokens: {
      fonts: {
        body: { value: "'Geist', system-ui, -apple-system, sans-serif" },
        heading: {
          value:
            "'Source Serif 4', 'Source Serif Pro', 'Iowan Old Style', Georgia, serif",
        },
        mono: {
          value: "'Geist Mono', 'JetBrains Mono', 'SF Mono', monospace",
        },
      },
      letterSpacings: {
        tighter: { value: "-0.03em" },
        tight: { value: "-0.02em" },
        snug: { value: "-0.01em" },
        wide: { value: "0.06em" },
        wider: { value: "0.08em" },
      },
      radii: {
        sm: { value: "4px" },
        md: { value: "8px" },
        lg: { value: "12px" },
        xl: { value: "16px" },
        "2xl": { value: "20px" },
        full: { value: "9999px" },
      },
      colors: {
        stone: {
          50: { value: "oklch(0.96 0.005 230)" },
          100: { value: "oklch(0.90 0.008 230)" },
          200: { value: "oklch(0.78 0.010 230)" },
          300: { value: "oklch(0.62 0.012 230)" },
          400: { value: "oklch(0.46 0.014 230)" },
          500: { value: "oklch(0.295 0.020 230)" },
          600: { value: "oklch(0.245 0.017 230)" },
          700: { value: "oklch(0.215 0.015 230)" },
          800: { value: "oklch(0.185 0.013 230)" },
          900: { value: "oklch(0.16 0.012 230)" },
          950: { value: "oklch(0.12 0.010 230)" },
        },
        paper: {
          50: { value: "oklch(0.99 0.004 90)" },
          100: { value: "oklch(0.985 0.006 90)" },
          200: { value: "oklch(0.972 0.008 90)" },
          300: { value: "oklch(0.948 0.010 90)" },
          400: { value: "oklch(0.910 0.012 90)" },
          500: { value: "oklch(0.870 0.014 90)" },
          600: { value: "oklch(0.78 0.016 90)" },
          700: { value: "oklch(0.62 0.018 90)" },
          800: { value: "oklch(0.46 0.020 90)" },
          900: { value: "oklch(0.30 0.022 90)" },
        },
        ink: {
          50: { value: "oklch(0.96 0.010 240)" },
          100: { value: "oklch(0.90 0.014 240)" },
          200: { value: "oklch(0.80 0.020 240)" },
          300: { value: "oklch(0.66 0.014 240)" },
          400: { value: "oklch(0.50 0.022 240)" },
          500: { value: "oklch(0.34 0.030 240)" },
          600: { value: "oklch(0.20 0.040 240)" },
          700: { value: "oklch(0.16 0.040 240)" },
          800: { value: "oklch(0.12 0.038 240)" },
          900: { value: "oklch(0.08 0.030 240)" },
        },
        canola: {
          50: { value: "oklch(0.98 0.020 95)" },
          100: { value: "oklch(0.95 0.060 95)" },
          200: { value: "oklch(0.93 0.100 95)" },
          300: { value: "oklch(0.88 0.130 95)" },
          400: { value: "oklch(0.84 0.160 90)" },
          500: { value: "oklch(0.78 0.160 95)" },
          600: { value: "oklch(0.66 0.150 90)" },
          700: { value: "oklch(0.52 0.130 90)" },
          800: { value: "oklch(0.40 0.110 90)" },
          900: { value: "oklch(0.32 0.060 90)" },
        },
        sky: {
          100: { value: "oklch(0.95 0.030 210)" },
          200: { value: "oklch(0.90 0.060 210)" },
          300: { value: "oklch(0.78 0.070 215)" },
          400: { value: "oklch(0.72 0.100 210)" },
          500: { value: "oklch(0.60 0.120 215)" },
          600: { value: "oklch(0.46 0.090 215)" },
          700: { value: "oklch(0.34 0.040 215)" },
        },
        moss: {
          200: { value: "oklch(0.86 0.060 145)" },
          300: { value: "oklch(0.74 0.090 145)" },
          400: { value: "oklch(0.66 0.110 145)" },
          500: { value: "oklch(0.62 0.100 145)" },
          600: { value: "oklch(0.50 0.110 150)" },
          700: { value: "oklch(0.42 0.100 155)" },
          800: { value: "oklch(0.32 0.080 155)" },
        },
        sunset: {
          300: { value: "oklch(0.78 0.130 25)" },
          400: { value: "oklch(0.72 0.160 18)" },
          500: { value: "oklch(0.66 0.180 15)" },
          600: { value: "oklch(0.55 0.160 18)" },
          700: { value: "oklch(0.44 0.130 20)" },
        },
      },
    },

    semanticTokens: {
      colors: {
        bg: {
          DEFAULT: {
            value: { base: "{colors.paper.100}", _dark: "{colors.stone.900}" },
          },
          surface: {
            value: { base: "{colors.paper.200}", _dark: "{colors.stone.800}" },
          },
          elevated: {
            value: { base: "{colors.paper.300}", _dark: "{colors.stone.700}" },
          },
          subtle: {
            value: { base: "{colors.paper.400}", _dark: "{colors.stone.600}" },
          },
          muted: {
            value: { base: "{colors.paper.500}", _dark: "{colors.stone.500}" },
          },
        },
        border: {
          DEFAULT: {
            value: {
              base: "{colors.paper.500}",
              _dark: "oklch(0.285 0.014 230)",
            },
          },
          subtle: {
            value: {
              base: "oklch(0.928 0.008 90)",
              _dark: "oklch(0.235 0.012 230)",
            },
          },
        },
        fg: {
          DEFAULT: {
            value: { base: "{colors.ink.600}", _dark: "{colors.paper.100}" },
          },
          muted: {
            value: { base: "{colors.ink.500}", _dark: "{colors.paper.300}" },
          },
          subtle: {
            value: { base: "{colors.ink.400}", _dark: "{colors.stone.200}" },
          },
          disabled: {
            value: { base: "{colors.ink.300}", _dark: "{colors.stone.300}" },
          },
        },
        accent: {
          DEFAULT: {
            value: {
              base: "{colors.canola.500}",
              _dark: "{colors.canola.400}",
            },
          },
          fg: {
            value: {
              base: "oklch(0.22 0.040 240)",
              _dark: "oklch(0.18 0.040 90)",
            },
          },
          subtle: {
            value: {
              base: "{colors.canola.200}",
              _dark: "{colors.canola.900}",
            },
          },
          emphasized: {
            value: {
              base: "{colors.canola.600}",
              _dark: "{colors.canola.300}",
            },
          },
        },
        ok: { DEFAULT: { value: "oklch(0.66 0.11 145)" } },
        warn: { DEFAULT: { value: "oklch(0.78 0.15 75)" } },
        err: { DEFAULT: { value: "oklch(0.66 0.18 15)" } },
        info: { DEFAULT: { value: "oklch(0.74 0.07 215)" } },
      },
      shadows: {
        photo: {
          value: {
            base: "0 40px 100px -20px oklch(0.20 0.04 230 / 0.18), 0 12px 30px -10px oklch(0.20 0.04 230 / 0.12)",
            _dark:
              "0 40px 100px -20px oklch(0.05 0.02 230 / 0.7), 0 12px 30px -10px oklch(0.05 0.02 230 / 0.5)",
          },
        },
        card: {
          value: {
            base: "0 12px 40px -16px oklch(0.20 0.04 230 / 0.14)",
            _dark: "0 12px 40px -16px oklch(0.05 0.02 230 / 0.55)",
          },
        },
      },
    },
  },

  globalCss: {
    "html, body": {
      bg: "bg",
      color: "fg",
      fontFamily: "body",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
    },
    body: {
      fontFeatureSettings: "'ss01', 'cv11'",
    },
    "::selection": {
      bg: "accent.subtle",
      color: "fg",
    },
    code: {
      fontFamily: "mono",
    },
  },
});
