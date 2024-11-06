import { RadioGroup } from '#app/components/ui/radio-group.js'
import { Separator } from '#app/components/ui/separator.js'
import { ActionRow } from '../Common/ActionRow'
import { OptionRow } from '../Common/OptionRow'
import { PromptRow } from '../Common/PromptRow'
import { Wrapper } from '../Common/Wrapper'

export const SelectBox = () => {
	return (
		<Wrapper labelText="Select Box" icon="panel-top-open">
			<PromptRow />
			<Separator />
			<RadioGroup>
				<OptionRow type="radio" value="1" />
				<OptionRow type="radio" value="2" />
				<OptionRow type="radio" value="3" />
			</RadioGroup>
			<Separator />
			<ActionRow />
		</Wrapper>
	)
}
