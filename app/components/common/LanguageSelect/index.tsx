import { type SerializeFrom } from '@remix-run/node'
import { useTranslation } from 'react-i18next'
import { useFetcher, useRouteLoaderData } from 'react-router-dom'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '#app/components/ui/select'
import { languages } from '#app/modules/i18next/config'
import { type loader as rootLoader } from '#app/root'

export const TEST_IDS = {
	WRAPPER: 'language-select_wrapper',
	OPEN_TRIGGER: 'language-select_open-trigger',
	SELECT_ITEM: (code: string) => `language-select_item-${code}`,
	SELECT_CONTENT: 'language-select_content',
} as const

export default function LanguageSelect() {
	const { i18n } = useTranslation()
	const fetcher = useFetcher()
	const rootLoaderData = useRouteLoaderData('root') as SerializeFrom<
		typeof rootLoader
	>
	const handleLanguageChange = (value: string) => {
		void i18n.changeLanguage(value)
		fetcher.load(`?lng=${value}`)
	}

	return (
		<div data-testid={TEST_IDS.WRAPPER}>
			<Select
				defaultValue={rootLoaderData?.locale ?? 'en'}
				onValueChange={handleLanguageChange}
			>
				<SelectTrigger
					className="w-[180px]"
					data-testid={TEST_IDS.OPEN_TRIGGER}
				>
					<SelectValue placeholder="Select Language" />
				</SelectTrigger>
				<SelectContent data-testid={TEST_IDS.SELECT_CONTENT}>
					{languages.map((lang) => (
						<SelectItem
							key={lang.code}
							value={lang.code}
							data-testid={TEST_IDS.SELECT_ITEM(lang.code)}
						>
							{lang.name}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	)
}

LanguageSelect.testIds = TEST_IDS
