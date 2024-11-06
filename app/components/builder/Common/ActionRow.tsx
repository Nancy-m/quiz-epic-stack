import { useId, useState } from 'react'
import { Button } from '#app/components/ui/button.js'
import { Checkbox } from '#app/components/ui/checkbox.js'
import { Icon } from '#app/components/ui/icon.js'
import { cn } from '#app/utils/misc.js'

export const ActionRow = () => {
	const [required, setRequired] = useState(false)
	const requiredId = useId()

	return (
		<div className="flex flex-row items-center justify-between">
			<Button size="sm" variant="ghost" className="px-1 py-2">
				<Icon name="circle-plus" className="w-6">
					Add Option
				</Icon>
			</Button>
			<div className="flex flex-row gap-2">
				<label
					htmlFor={`required-${requiredId}`}
					className={cn(
						'flex cursor-pointer flex-row items-center gap-2 rounded-md p-2 pl-1',
						optionGroupStyle,
					)}
				>
					<Checkbox
						className="scale-75 transform"
						id={`required-${requiredId}`}
						onCheckedChange={(value) =>
							value !== 'indeterminate' && setRequired(value)
						}
					/>
					<div
						className={cn(
							required ? 'text-primary' : 'text-gray-500',
							'select-none text-sm',
						)}
					>
						Required
					</div>
				</label>
				<Button>Done Editing</Button>
			</div>
		</div>
	)
}

const optionGroupStyle =
	'rounded-md bg-gray-100 outline outline-1 outline-gray-200 dark:bg-muted dark:outline-gray-800'
