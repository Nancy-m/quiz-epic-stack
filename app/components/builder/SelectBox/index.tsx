import { RadioGroup } from '#app/components/ui/radio-group.js'
import { ActionRow } from '../Common/ActionRow'
import { BuilderItemSeparator } from '../Common/BuilderItemSeparator'
import { OptionRow } from '../Common/OptionRow'
import { PromptRow } from '../Common/PromptRow'
import { Wrapper } from '../Common/Wrapper'

export const SelectBox = () => {
	return (
		<Wrapper labelText="Select Box" icon="panel-top-open">
			<PromptRow />
			<BuilderItemSeparator />
			<RadioGroup className="contents">
				<OptionRow type="radio" value="1" />
				<OptionRow type="radio" value="2" />
				<OptionRow type="radio" value="3" />
			</RadioGroup>
			<BuilderItemSeparator />
			<ActionRow className="col-span-3" />
		</Wrapper>
	)
}
