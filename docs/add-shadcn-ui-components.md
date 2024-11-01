# How To Add Shadcn/UI Components

### 1. Run the command from the shadcn/ui cli

Go to
[https://ui.shadcn.com/docs/components/accordion](https://ui.shadcn.com/docs/components/accordion),
install, and open the component file in the `components/ui` folder.

### 2. Update the imports to use the #app namespace from tsconfig.

```tsx
// example
import { cn } from '#app/utils/misc.tsx'
```

### 3. Replace the Icons

#### a. Add lucide-icons

Go here to find the icon code. `https://lucide.dev/icons/`

```bash
// npx sly add lucide-icons <...icons list> #--overwrite (if necessary*)
npx sly add lucide-icons icon-1 icon-2
```

_\* You may need to overwrite some of the icons which were added in the base
project from radix-ui/icons._

#### b. Replace the Icons in the Shadcn/UI component.

```tsx
import { Icon } from './icon.tsx'
...
// <Icon1 ... /> <-- replace this
<Icon name="icon-1" title="icon-1" className="h-4 w-4" />
```

### 4. Update the Tailwind CSS

#### a. Update the Tailwind CSS in the `tailwind.config.ts` file.

The Shadcn CLI might overwrite some of the Tailwind CSS variables, particularly
in the extend section. You will need to copy the new variables from the
`tailwind.config.ts` file into the `app/utils/extended-theme.ts` file and set
the extend section in the `tailwind.config.ts` file back to use the
`extendedTheme` object. Pay attention to the git diff to see which variables
were added and how to restore the `tailwind.config.ts` file.
