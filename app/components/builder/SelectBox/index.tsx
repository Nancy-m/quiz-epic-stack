import { useTranslation } from 'react-i18next'
import { RadioGroup } from '#app/components/ui/radio-group.js'
import { type I18nHandle } from '#app/modules/i18next/util.js'
import { type BuilderItemComponent } from '#app/types/builder'
import { ActionRow } from '../Common/ActionRow'
import { BuilderItemSeparator } from '../Common/BuilderItemSeparator'
import { OptionRow } from '../Common/OptionRow'
import { PromptRow } from '../Common/PromptRow'
import { Wrapper } from '../Common/Wrapper'

export const SelectBox: BuilderItemComponent & { handle: I18nHandle } = ({
	WrapperProps,
}) => {
	const { t } = useTranslation(['question-types'])
	return (
		<Wrapper
			labelText={t('select-box')}
			icon="panel-top-open"
			{...WrapperProps}
		>
			<PromptRow />
			<BuilderItemSeparator />
			<RadioGroup className="contents">
				<OptionRow type="radio" value="1" />
				<OptionRow type="radio" value="2" />
				<OptionRow type="radio" value="3" />
			</RadioGroup>
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

SelectBox.handle = handle
