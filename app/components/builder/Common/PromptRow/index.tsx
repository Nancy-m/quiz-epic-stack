import { useTranslation } from 'react-i18next'
import { Button } from '#app/components/ui/button.js'
import { Icon } from '#app/components/ui/icon.js'
import { Input } from '#app/components/ui/input.js'
import { type I18nHandle } from '#app/modules/i18next/util.js'
import { ImageAttachIcon } from '../ImageAttachIcon'

const handle: I18nHandle = {
	i18n: ['PromptRow', ...ImageAttachIcon.handle.i18n],
}

export const PromptRow = () => {
	const { t } = useTranslation('PromptRow')
	return (
		<>
			<div className="flex items-center">
				<span className="text-red-500">*</span>
				<span>1.</span>
			</div>

			<div className="relative w-full">
				<ImageAttachIcon />
				<Input placeholder={t('question-text')} />
			</div>

			<div className="flex flex-row">
				<Button
					variant="ghost"
					className="text-red-400 hover:bg-destructive/20 hover:text-red-600"
				>
					<Icon name="trash" />
				</Button>
				<Button variant="ghost">
					<Icon name="git-fork" />
				</Button>
			</div>
		</>
	)
}

PromptRow.handle = handle
