import { Textarea } from '#app/components/ui/textarea.js'
import { PromptRow } from '../Common/PromptRow'
import { BuilderItemSeparator } from '../Common/BuilderItemSeparator'
import { Wrapper } from '../Common/Wrapper'

export const TextAreaQuery = () => {
	return (
		<Wrapper labelText="Fill In The Blank">
			<PromptRow />
			<BuilderItemSeparator />
			<Textarea placeholder="Correct Answer" className="col-start-2" />
		</Wrapper>
	)
}
