import { Button } from '#app/components/ui/button.js'
import { Checkbox } from '#app/components/ui/checkbox.js'
import { Icon } from '#app/components/ui/icon.js'
import { Input } from '#app/components/ui/input.js'

export function SingleChoice() {
	return (
		<div
			id="single_choice"
			className="relative flex justify-center rounded-lg border border-gray-200 p-4 pt-8 shadow-md"
		>
			<div className="absolute left-5 top-0 rounded-b-sm bg-primary p-1 text-xs text-primary-foreground">
				Single Choice
			</div>
			<div className="absolute left-1/2 top-0 -translate-x-1/2">
				<Button variant="ghost" size="icon" className="h-8 w-10">
					<Icon name="grip-horizontal" />
				</Button>
			</div>
			<div className="flex w-2/3 flex-col gap-2">
				<div className="flex flex-row items-center justify-between gap-2">
					<div className="w-6">
						<span className="text-red-500">*</span>
						<span>1.</span>
					</div>
					<div className="relative w-full">
						<Icon
							name="circle-plus"
							className="absolute right-2 top-1/2 -translate-y-1/2"
						/>
						<Input defaultValue="Question Text Here" />
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
				<div className="flex flex-row items-stretch justify-between gap-2">
					<Icon name="grip-vertical" className="w-6" />
					<Input defaultValue="option" />
					<div className="flex flex-row">
						<Button variant="ghost">
							<Icon name="circle-plus" />
						</Button>
						<Button variant="ghost">
							<Icon name="circle-minus" />
						</Button>
					</div>
				</div>
				<hr />
				<div className="flex flex-row items-center justify-between">
					<Button size="xs" variant="ghost" className="py-2 pr-1">
						<Icon name="circle-plus" className="w-6">
							Add Option
						</Icon>
					</Button>
					<div className="flex flex-row gap-2">
						<label
							htmlFor="required"
							className="flex cursor-pointer flex-row items-center gap-2 p-2"
						>
							<Checkbox id="required" />
							<div>Required</div>
						</label>
						<Button>Done Editing</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
