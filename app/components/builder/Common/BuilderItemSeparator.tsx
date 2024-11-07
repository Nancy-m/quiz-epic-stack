import { Separator } from '#app/components/ui/separator'
import { cn } from '#app/utils/misc.js'

export const BuilderItemSeparator = ({ className }: { className?: string }) => {
	return <Separator className={cn('col-span-3', className)} />
}
