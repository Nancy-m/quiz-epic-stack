import { useId, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Checkbox } from '#app/components/ui/checkbox.js'
import { type I18nHandle } from '#app/modules/i18next/util.js'
import { cn } from '#app/utils/misc.js'

const handle: I18nHandle = {
	i18n: ['RequiredCheckbox'],
}

export const RequiredCheckbox = () => {
	const { t } = useTranslation(['RequiredCheckbox'])
	const requiredId = useId()
	const [required, setRequired] = useState(false)
	return (
		<label
			htmlFor={`required-${requiredId}`}
			className={cn(
				'flex cursor-pointer flex-row items-center gap-2 rounded-md p-2 pl-1',
				optionGroupStyle,
			)}
		>
			<Checkbox
				className="scale-75 transform"
				id={`required-${requiredId}`}
				onCheckedChange={(value) =>
					value !== 'indeterminate' && setRequired(value)
				}
			/>
			<div
				className={cn(
					required ? 'text-primary' : 'text-gray-500',
					'select-none text-sm',
				)}
			>
				{t('required')}
			</div>
		</label>
	)
}

const optionGroupStyle =
	'rounded-md bg-gray-100 outline outline-1 outline-gray-200 dark:bg-muted dark:outline-gray-800'

RequiredCheckbox.handle = handle
