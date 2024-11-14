import { useTranslation } from 'react-i18next'
import { Button } from '#app/components/ui/button.js'
import { Checkbox } from '#app/components/ui/checkbox.js'
import { Icon } from '#app/components/ui/icon.js'
import { Input } from '#app/components/ui/input.js'
import { RadioGroupItem } from '#app/components/ui/radio-group.js'
import { type I18nHandle } from '#app/modules/i18next/util.js'
import { ImageAttachIcon } from '../ImageAttachIcon'

enum SELECT_TYPES {
	checkbox = 'checkbox',
	radio = 'radio',
}

const handle: I18nHandle = {
	i18n: ['OptionRow', ...ImageAttachIcon.handle.i18n],
}

export const OptionRow = ({
	type,
	value,
}: {
	type: `${SELECT_TYPES}`
	value: string
}) => {
	const { t } = useTranslation(['OptionRow'])
	return (
		<>
			<Icon name="grip-vertical" className="w-6" />

			<div className="relative w-full">
				<div className="absolute left-2 top-1/2 flex -translate-y-1/2 justify-center">
					{type === SELECT_TYPES.checkbox && <Checkbox />}
					{type === SELECT_TYPES.radio && <RadioGroupItem value={value} />}
				</div>
				<Input placeholder={t('Option Text')} className="pl-8" />
				<ImageAttachIcon />
			</div>

			<div className="flex flex-row">
				<Button variant="ghost">
					<Icon name="circle-plus" />
				</Button>
				<Button variant="ghost">
					<Icon name="circle-minus" />
				</Button>
			</div>
		</>
	)
}

OptionRow.handle = handle
