import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ActionRow } from '#app/components/builder/Common/ActionRow'
import { RadioGroup } from '#app/components/ui/radio-group.js'
import { type I18nHandle } from '#app/modules/i18next/util.js'
import { type BuilderItemComponent } from '#app/types/builder'
import { BuilderItemSeparator } from '../Common/BuilderItemSeparator'
import { OptionRow } from '../Common/OptionRow'
import { PromptRow } from '../Common/PromptRow'
import { Wrapper } from '../Common/Wrapper'

type SelectOption = {
	text: string
	correct: boolean
	order: number
}
const handle: I18nHandle = {
	i18n: ['question-types', ...PromptRow.handle.i18n, ...ActionRow.handle.i18n],
}
export const SingleChoice: BuilderItemComponent & { handle: I18nHandle } = ({
	WrapperProps,
}) => {
	const { t } = useTranslation(['question-types'])
	const [options] = useState<SelectOption[]>([
		{ text: '', correct: false, order: 0 },
		{ text: '', correct: false, order: 1 },
		{ text: '', correct: false, order: 2 },
	])
	const optionsMap = useMemo(
		() =>
			options.map((option, idx) => (
				<OptionRow key={idx} type="radio" value={idx.toString()} />
			)),
		[options],
	)

	return (
		<Wrapper labelText={t('single-select')} icon="list-todo" {...WrapperProps}>
			<PromptRow />
			<BuilderItemSeparator />
			<RadioGroup className="contents">{optionsMap}</RadioGroup>
			<BuilderItemSeparator />
			<ActionRow className="col-span-3" />
		</Wrapper>
	)
}

SingleChoice.handle = handle
