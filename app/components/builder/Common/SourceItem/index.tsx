import { useTranslation } from 'react-i18next'
import { Button } from '#app/components/ui/button'
import { Icon } from '#app/components/ui/icon'
import { type I18nHandle } from '#app/modules/i18next/util.js'
import { type BuilderSourceItem } from '#app/types/builder'

const handle: I18nHandle = {
	i18n: ['question-types'],
}

export const SourceItem = ({ item }: { item: BuilderSourceItem }) => {
	const { t } = useTranslation(['question-types'])
	return (
		<Button className="w-full" variant="secondary">
			<Icon name={item.icon}>{t(item.translationKey)}</Icon>
		</Button>
	)
}

SourceItem.handle = handle
