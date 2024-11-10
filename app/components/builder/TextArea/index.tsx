import { Textarea } from '#app/components/ui/textarea.js'
import { type BuilderItemComponent } from '#app/types/builder'
import { BuilderItemSeparator } from '../Common/BuilderItemSeparator'
import { PromptRow } from '../Common/PromptRow'
import { Wrapper } from '../Common/Wrapper'
export const TextAreaQuery: BuilderItemComponent = ({ WrapperProps }) => {
	return (
		<Wrapper labelText="Text Area" icon="notebook-pen" {...WrapperProps}>
			<PromptRow />
			<BuilderItemSeparator />
			<Textarea placeholder="Correct Answer" className="col-start-2" />
		</Wrapper>
	)
}
