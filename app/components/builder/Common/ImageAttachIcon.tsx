import { Icon } from '#app/components/ui/icon.js'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '#app/components/ui/tooltip.js'
export const ImageAttachIcon = () => {
	return (
		<div className="absolute right-2 top-1/2 -translate-y-1/2">
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger>
						<Icon name="image-plus" />
					</TooltipTrigger>
					<TooltipContent>Attach Image(s)</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</div>
	)
}
