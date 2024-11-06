import { Button } from '#app/components/ui/button.js'
import { Icon } from '#app/components/ui/icon.js'
import { Input } from '#app/components/ui/input.js'
import { Label } from '#app/components/ui/label.js'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '#app/components/ui/tooltip.js'
import { ImageAttachIcon } from './ImageAttachIcon'

export const PromptRow = () => {
	return (
		<div className="flex flex-row items-center justify-between gap-2">
			<div className="w-6">
				<span className="text-red-500">*</span>
				<span>1.</span>
			</div>
			<div className="relative w-full">
				<ImageAttachIcon />
				<Input placeholder="Question Text" />
			</div>
			<div className="flex flex-row">
				<Button
					variant="ghost"
					className="text-red-400 hover:bg-destructive/20 hover:text-red-600"
				>
					<Icon name="trash" />
				</Button>
				<Button variant="ghost">
					<Icon name="git-fork" />
				</Button>
			</div>
		</div>
	)
}
