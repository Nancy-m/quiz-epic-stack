import { ActionRow } from '../Common/ActionRow'
import { BuilderItemSeparator } from '../Common/BuilderItemSeparator'
import { OptionRow } from '../Common/OptionRow'
import { PromptRow } from '../Common/PromptRow'
import { Wrapper } from '../Common/Wrapper'

export function MultiChoice() {
	return (
		<Wrapper labelText="Multi Choice" icon="list-checks">
			<PromptRow />
			<BuilderItemSeparator />
			<OptionRow type="checkbox" value="1" />
			<OptionRow type="checkbox" value="2" />
			<BuilderItemSeparator />
			<ActionRow className="col-span-3" />
		</Wrapper>
	)
}
