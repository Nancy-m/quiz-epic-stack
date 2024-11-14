import { useTranslation } from 'react-i18next'
import { Button } from '#app/components/ui/button.js'
import { Icon } from '#app/components/ui/icon.js'
import { type I18nHandle } from '#app/modules/i18next/util.js'
import { cn } from '#app/utils/misc.js'
import { DoneEditingButton } from '../DoneEditingButton'
import { RequiredCheckbox } from '../RequiredCheckbox'

const handle: I18nHandle = {
	i18n: ['ActionRow', 'DoneEditingButton', 'RequiredCheckbox'],
}
export const ActionRow = ({ className }: { className?: string }) => {
	const { t } = useTranslation(['ActionRow'])
	return (
		<div
			className={cn('flex flex-row items-center justify-between', className)}
		>
			<Button size="sm" variant="ghost" className="px-1 py-2">
				<Icon name="circle-plus" className="w-6">
					{t('add-option')}
				</Icon>
			</Button>
			<div className="flex flex-row gap-2">
				<RequiredCheckbox />
				<DoneEditingButton />
			</div>
		</div>
	)
}

ActionRow.handle = handle
