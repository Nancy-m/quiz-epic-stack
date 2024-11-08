import { Input } from '#app/components/ui/input'
import { BuilderItemSeparator } from '../Common/BuilderItemSeparator'
import { PromptRow } from '../Common/PromptRow'
import { TextboxActionRow } from '../Common/TextboxActionRow'
import { Wrapper } from '../Common/Wrapper'

export const FillInTheBlank = () => {
	return (
		<Wrapper labelText="Fill In The Blank" icon="pencil-line">
			<PromptRow />
			<BuilderItemSeparator />
			<Input placeholder="Correct Answer" className="col-start-2" />
			<BuilderItemSeparator />
			<TextboxActionRow />
		</Wrapper>
	)
}
