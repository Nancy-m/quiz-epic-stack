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
		<Select
			data-testid="language-select"
			defaultValue={rootLoaderData.locale || 'en'}
			onValueChange={handleLanguageChange}
		>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="Select Language" />
			</SelectTrigger>
			<SelectContent>
				{languages.map((lang) => (
					<SelectItem key={lang.code} value={lang.code}>
						{lang.name}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	)
}
