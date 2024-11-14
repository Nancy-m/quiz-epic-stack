import { useTranslation } from 'react-i18next'
import { type I18nHandle } from '#app/modules/i18next/util.js'
import { type BuilderItemComponent } from '#app/types/builder'
import { ActionRow } from '../Common/ActionRow'
import { BuilderItemSeparator } from '../Common/BuilderItemSeparator'
import { OptionRow } from '../Common/OptionRow'
import { PromptRow } from '../Common/PromptRow'
import { Wrapper } from '../Common/Wrapper'

export const MultiChoice: BuilderItemComponent & { handle: I18nHandle } = ({
	WrapperProps,
}) => {
	const { t } = useTranslation(['question-types'])
	return (
		<Wrapper labelText={t('multi-select')} icon="list-checks" {...WrapperProps}>
			<PromptRow />
			<BuilderItemSeparator />
			<OptionRow type="checkbox" value="1" />
			<OptionRow type="checkbox" value="2" />
			<BuilderItemSeparator />
			<ActionRow className="col-span-3" />
		</Wrapper>
	)
}

const handle: I18nHandle = {
	i18n: [
		...PromptRow.handle.i18n,
		...OptionRow.handle.i18n,
		...ActionRow.handle.i18n,
	],
}

MultiChoice.handle = handle
