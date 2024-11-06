import { useMemo, useState } from 'react'
import { RadioGroup } from '#app/components/ui/radio-group.js'
import { Separator } from '#app/components/ui/separator.js'
import { ActionRow } from '../Common/ActionRow'
import { OptionRow } from '../Common/OptionRow'
import { PromptRow } from '../Common/PromptRow'
import { Wrapper } from '../Common/Wrapper'

type SelectOption = {
	text: string
	correct: boolean
	order: number
}
export function SingleChoice() {
	const [options, setOptions] = useState<SelectOption[]>([
		{ text: '', correct: false, order: 0 },
		{ text: '', correct: false, order: 1 },
		{ text: '', correct: false, order: 2 },
	])
	const optionsMap = useMemo(
		() =>
			options.map((option, idx) => (
				<OptionRow key={idx} type="radio" value={idx.toString()} />
			)),
		[options],
	)

	return (
		<Wrapper labelText="Single Select" icon="list-todo">
			<PromptRow />
			<Separator className="my-2" />
			<RadioGroup>{optionsMap}</RadioGroup>
			<Separator className="my-2" />
			<ActionRow />
		</Wrapper>
	)
}
