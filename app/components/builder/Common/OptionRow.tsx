import { Button } from '#app/components/ui/button.js'
import { Checkbox } from '#app/components/ui/checkbox.js'
import { Icon } from '#app/components/ui/icon.js'
import { Input } from '#app/components/ui/input.js'
import { RadioGroupItem } from '#app/components/ui/radio-group.js'
import { ImageAttachIcon } from './ImageAttachIcon'

enum SELECT_TYPES {
	checkbox = 'checkbox',
	radio = 'radio',
}

export const OptionRow = ({
	type,
	value,
}: {
	type: `${SELECT_TYPES}`
	value: string
}) => {
	return (
		<>
			<Icon name="grip-vertical" className="w-6" />

			<div className="relative w-full">
				<div className="absolute left-2 top-1/2 flex -translate-y-1/2 justify-center">
					{type === SELECT_TYPES.checkbox && <Checkbox />}
					{type === SELECT_TYPES.radio && <RadioGroupItem value={value} />}
				</div>
				<Input placeholder="Option Text" className="pl-8" />
				<ImageAttachIcon />
			</div>

			<div className="flex flex-row">
				<Button variant="ghost">
					<Icon name="circle-plus" />
				</Button>
				<Button variant="ghost">
					<Icon name="circle-minus" />
				</Button>
			</div>
		</>
	)
}
