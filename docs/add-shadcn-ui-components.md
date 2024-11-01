To add Shadcn/UI components

### 1. Run the command from the shad

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
