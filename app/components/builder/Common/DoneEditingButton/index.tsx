import { useTranslation } from 'react-i18next'
import { Button } from '#app/components/ui/button.js'
import { type I18nHandle } from '#app/modules/i18next/util.js'

const handle: I18nHandle = {
	i18n: ['DoneEditingButton'],
}

export const DoneEditingButton = () => {
	const { t } = useTranslation(['DoneEditingButton'])
	return <Button>{t('done-editing')}</Button>
}

DoneEditingButton.handle = handle
