import { useEffect, useMemo, useState } from 'react'
import { Button } from '#app/components/ui/button.js'
import { Checkbox } from '#app/components/ui/checkbox.js'
import { Icon } from '#app/components/ui/icon.js'
import { Input } from '#app/components/ui/input.js'
import { RadioGroup, RadioGroupItem } from '#app/components/ui/radio-group.js'
import { Separator } from '#app/components/ui/separator.js'
import { Switch } from '#app/components/ui/switch.js'
import {
	ToggleGroup,
	ToggleGroupItem,
} from '#app/components/ui/toggle-group.js'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '#app/components/ui/tooltip.js'
import { cn } from '#app/utils/misc.js'
import { Wrapper } from '../Common/Wrapper'

enum SELECT_TYPES {
	single = 'Single',
	multi = 'Multi',
}

type SelectOption = {
	text: string
	correct: boolean
	order: number
}
export function SingleChoice() {
	const [type, setType] = useState<SELECT_TYPES>(SELECT_TYPES.single)
	const [options, setOptions] = useState<SelectOption[]>([
		{ text: '', correct: false, order: 0 },
		{ text: '', correct: false, order: 1 },
		{ text: '', correct: false, order: 2 },
	])

	const optionsMap = useMemo(
		() =>
			options.map((option, idx) => (
				<OptionRow
					key={idx}
					type={type}
					option={option}
					onChange={(option, newValue) => {
						console.log(`option row onChange ${option} ${newValue}`)
						setOptions((options) => {
							const newOptions = [...options]
							newOptions[newOptions.findIndex((val) => val === option)] =
								newValue
							return newOptions
						})
					}}
				/>
			)),
		[options, type],
	)

	return (
		<Wrapper labelText={`${type} Select`}>
			<div className="flex w-2/3 flex-col gap-2">
				<PromptRow />
				<Separator />
				{type === SELECT_TYPES.single && <RadioGroup>{optionsMap}</RadioGroup>}
				{type === SELECT_TYPES.multi && optionsMap}
				<Separator />
				<ActionRow onTypeChange={(type) => setType(type)} />
			</div>
		</Wrapper>
	)
}

const PromptRow = () => {
	return (
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
				<Input placeholder="Question Text Here" />
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

const OptionRow = ({
	type,
	option,
	onChange,
}: {
	type: SELECT_TYPES
	option: SelectOption
	onChange: (option: SelectOption, newValue: SelectOption) => void
}) => {
	console.log(`option row rendering`)
	return (
		<div className="flex flex-row items-stretch justify-between gap-2">
			<Icon name="grip-vertical" className="w-6" />
			<div className="relative w-full">
				{type === SELECT_TYPES.multi && (
					<Checkbox className="absolute left-2 top-1/2 -translate-y-1/2" />
				)}
				{type === SELECT_TYPES.single && (
					<RadioGroupItem
						className="absolute left-2 top-1/2 -translate-y-1/2"
						value={option.order.toString()}
					/>
				)}
				<Input
					value={option.text}
					placeholder="Option Text Here"
					className="pl-8"
					onChange={(e) => {
						onChange(option, { ...option, text: e.target.value })
					}}
				/>
				<Icon
					name="circle-plus"
					className="absolute right-2 top-1/2 -translate-y-1/2"
				/>
			</div>
			<div className="flex flex-row">
				<Button variant="ghost">
					<Icon name="circle-plus" />
				</Button>
				<Button variant="ghost">
					<Icon name="circle-minus" />
				</Button>
			</div>
		</div>
	)
}

const ActionRow = ({
	onTypeChange,
}: {
	onTypeChange: (type: SELECT_TYPES) => void
}) => {
	const [checked, setChecked] = useState(false)
	const [type, setType] = useState<SELECT_TYPES>(SELECT_TYPES.single)

	useEffect(() => {
		onTypeChange(type)
	}, [type, onTypeChange])

	return (
		<div className="flex flex-row items-center justify-between">
			<Button size="sm" variant="ghost" className="px-1 py-2">
				<Icon name="circle-plus" className="w-6">
					Add Option
				</Icon>
			</Button>
			<div className={optionGroupStyle}>
				<ToggleGroup
					type="single"
					value={type}
					onValueChange={(value) => {
						setType(
							(current) =>
								(value as SELECT_TYPES) ||
								(current === SELECT_TYPES.single
									? SELECT_TYPES.multi
									: SELECT_TYPES.single),
						)
					}}
				>
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger>
								<ToggleGroupItem value={SELECT_TYPES.single}>
									<Icon name="square-square" />
								</ToggleGroupItem>
							</TooltipTrigger>
							<TooltipContent>Single Select</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger>
								<ToggleGroupItem value={SELECT_TYPES.multi}>
									<Icon name="square-stack" />
								</ToggleGroupItem>
							</TooltipTrigger>
							<TooltipContent>Multi Select</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</ToggleGroup>
			</div>
			<div className="flex flex-row gap-2">
				<label
					htmlFor="required"
					className={cn(
						'flex cursor-pointer flex-row items-center rounded-md p-2 pl-1',
						optionGroupStyle,
					)}
				>
					<Switch
						className="scale-75 transform"
						id="required"
						onCheckedChange={(value) => setChecked(value)}
					/>
					<div
						className={cn(
							checked ? 'text-primary' : 'text-gray-500',
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
