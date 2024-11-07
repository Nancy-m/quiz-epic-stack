import { Textarea } from '#app/components/ui/textarea.js'
import { BuilderItemSeparator } from '../Common/BuilderItemSeparator'
import { PromptRow } from '../Common/PromptRow'
import { Wrapper } from '../Common/Wrapper'

export const TextAreaQuery = () => {
	return (
		<Wrapper labelText="Text Area" icon="notebook-pen">
			<PromptRow />
			<BuilderItemSeparator />
			<Textarea placeholder="Correct Answer" className="col-start-2" />
		</Wrapper>
	)
}
