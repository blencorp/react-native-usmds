# Registry Build Script

## Overview

This script automatically generates `generated/usa.json` by scanning all component files in `src/usa/components/ui/` and analyzing their dependencies.

## Usage

```bash
pnpm registry:generate
```

> Note: the generated `generated/usa.json` is ignored by git. CI workflows rebuild it when needed.

## What It Does

1. **Scans Components**: Finds all `.tsx` files in `src/usa/components/ui/`
2. **Analyzes Dependencies**:
   - Detects `@rn-primitives/*` packages from imports
   - Detects other dependencies like `react-native-screens`
   - Detects local component dependencies (registryDependencies)
   - Filters out "essential" dependencies installed by the `init` command
3. **Generates Registry**: Creates a `usa.json` file with:
   - Component name, title, and description
   - File paths
   - Package dependencies
   - Registry dependencies (other components)

## When to Run

CI regenerates the registry automatically, but run the script locally whenever you:
- ✅ Add or remove a component
- ✅ Change component dependencies (add/remove imports)
- ✅ Update component descriptions

## Configuration

### Adding Component Descriptions

Edit the `DESCRIPTIONS` object in `build-registry.ts`:

```typescript
const DESCRIPTIONS: Record<string, string> = {
  'my-component': 'My component description here.',
  // ...
};
```

### Essential Dependencies

Dependencies in the `ESSENTIAL_DEPS` array are automatically installed by the `init` command and don't need to be listed in individual component entries:

- `class-variance-authority`
- `clsx`
- `nativewind`
- `tailwindcss-animate`
- `tailwind-merge`
- `react-native-reanimated`
- `react-native-svg`
- `lucide-react-native`
- `@rn-primitives/types`
- `@rn-primitives/slot`
- `@rn-primitives/portal`

## Output

The script generates `generated/usa.json` with this structure:

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry.json",
  "name": "usa",
  "items": [
    {
      "name": "button",
      "type": "registry:ui",
      "title": "Button",
      "description": "Displays a button or a component that looks like a button.",
      "files": [
        {
          "path": "./src/usa/components/ui/button.tsx",
          "type": "registry:ui"
        }
      ],
      "dependencies": ["@rn-primitives/slot"],
      "registryDependencies": [
        "https://storage.googleapis.com/usmds-registry/r/usa/text.json"
      ]
    }
  ]
}
```

## CI/CD Integration

Add these steps to CI to rebuild and validate the registry:

```yaml
      - run: pnpm registry:generate
      - run: pnpm registry:validate
```

## Troubleshooting

### Component not showing up
- Make sure the file is in `src/usa/components/ui/`
- Make sure it has a `.tsx` extension
- Run `pnpm build:registry` again

### Wrong dependencies detected
- Check the import statements in your component
- Update `ESSENTIAL_DEPS` if needed
- Manually edit the generated `usa.json` if automatic detection fails

### Missing description
- Add the component to the `DESCRIPTIONS` object
- Use a clear, concise description following the pattern of existing components
