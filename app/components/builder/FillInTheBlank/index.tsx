import { Input } from '#app/components/ui/input.js'
import { Separator } from '#app/components/ui/separator.js'
import { PromptRow } from '../Common/PromptRow'
import { Wrapper } from '../Common/Wrapper'

export const FillInTheBlank = () => {
	return (
		<Wrapper labelText="Fill In The Blank">
			<PromptRow />
			<Separator />
			<Input />
		</Wrapper>
	)
}
