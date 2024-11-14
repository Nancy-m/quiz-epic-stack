import { useTranslation } from 'react-i18next'
import { Icon } from '#app/components/ui/icon.js'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '#app/components/ui/tooltip.js'
import { type I18nHandle } from '#app/modules/i18next/util.js'

const handle: I18nHandle = {
	i18n: ['ImageAttachIcon'],
}
export const ImageAttachIcon = () => {
	const { t } = useTranslation(['ImageAttachIcon'])
	return (
		<div className="absolute right-2 top-1/2 -translate-y-1/2">
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger>
						<Icon name="image-plus" />
					</TooltipTrigger>
					<TooltipContent>{t('attach-image')}</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</div>
	)
}

ImageAttachIcon.handle = handle
