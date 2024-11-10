import { type BuilderItemComponent } from '#app/types/builder'
import { ActionRow } from '../Common/ActionRow'
import { BuilderItemSeparator } from '../Common/BuilderItemSeparator'
import { OptionRow } from '../Common/OptionRow'
import { PromptRow } from '../Common/PromptRow'
import { Wrapper } from '../Common/Wrapper'

export const MultiChoice: BuilderItemComponent = ({ WrapperProps }) => {
	return (
		<Wrapper labelText="Multi Choice" icon="list-checks" {...WrapperProps}>
			<PromptRow />
			<BuilderItemSeparator />
			<OptionRow type="checkbox" value="1" />
			<OptionRow type="checkbox" value="2" />
			<BuilderItemSeparator />
			<ActionRow className="col-span-3" />
		</Wrapper>
	)
}
