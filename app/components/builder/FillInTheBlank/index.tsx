import { useTranslation } from 'react-i18next'
import { Input } from '#app/components/ui/input'
import { type I18nHandle } from '#app/modules/i18next/util.js'
import { type BuilderItemComponent } from '#app/types/builder'
import { BuilderItemSeparator } from '../Common/BuilderItemSeparator'
import { PromptRow } from '../Common/PromptRow'
import { TextboxActionRow } from '../Common/TextboxActionRow'
import { Wrapper } from '../Common/Wrapper'

const handle: I18nHandle = {
	i18n: ['FillInTheBlank', ...TextboxActionRow.handle.i18n],
}
export const FillInTheBlank: BuilderItemComponent & { handle: I18nHandle } = ({
	WrapperProps,
}) => {
	const { t } = useTranslation(['FillInTheBlank', 'question-types'])
	return (
		<Wrapper
			labelText={t('fill-in-the-blank', { ns: 'question-types' })}
			icon="pencil-line"
			{...WrapperProps}
		>
			<PromptRow />
			<BuilderItemSeparator />
			<Input placeholder={t('correct-answer')} className="col-start-2" />
			<BuilderItemSeparator />
			<TextboxActionRow />
		</Wrapper>
	)
}

FillInTheBlank.handle = handle
