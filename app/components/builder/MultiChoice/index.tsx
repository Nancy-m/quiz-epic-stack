import { useId } from 'react'
import { Separator } from '#app/components/ui/separator.js'
import { ActionRow } from '../Common/ActionRow'
import { OptionRow } from '../Common/OptionRow'
import { PromptRow } from '../Common/PromptRow'
import { Wrapper } from '../Common/Wrapper'

export function MultiChoice() {
	return (
		<Wrapper labelText="Multi Choice" icon="list-checks">
			<PromptRow />
			<Separator className="my-2" />
			<OptionRow type="checkbox" value="1" />
			<OptionRow type="checkbox" value="2" />
			<Separator className="my-2" />
			<ActionRow />
		</Wrapper>
	)
}
