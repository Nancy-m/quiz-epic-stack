import { useTranslation } from 'react-i18next'
import { Textarea } from '#app/components/ui/textarea.js'
import { type I18nHandle } from '#app/modules/i18next/util.js'
import { type BuilderItemComponent } from '#app/types/builder'
import { BuilderItemSeparator } from '../Common/BuilderItemSeparator'
import { PromptRow } from '../Common/PromptRow'
import { Wrapper } from '../Common/Wrapper'

const handle: I18nHandle = {
	i18n: ['TextArea', 'question-types', ...PromptRow.handle.i18n],
}

export const TextAreaQuery: BuilderItemComponent & { handle: I18nHandle } = ({
	WrapperProps,
}) => {
	const { t } = useTranslation(['TextArea', 'question-types'])
	return (
		<Wrapper
			labelText={t('text-area', { ns: 'question-types' })}
			icon="notebook-pen"
			{...WrapperProps}
		>
			<PromptRow />
			<BuilderItemSeparator />
			<Textarea placeholder={t('correct-answer')} className="col-start-2" />
		</Wrapper>
	)
}

TextAreaQuery.handle = handle
