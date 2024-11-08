import { useMemo, useState } from 'react'
import { RadioGroup } from '#app/components/ui/radio-group.js'
import { ActionRow } from '../Common/ActionRow'
import { BuilderItemSeparator } from '../Common/BuilderItemSeparator'
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
			<BuilderItemSeparator />
			<RadioGroup className="contents">{optionsMap}</RadioGroup>
			<BuilderItemSeparator />
			<ActionRow className="col-span-3" />
		</Wrapper>
	)
}
