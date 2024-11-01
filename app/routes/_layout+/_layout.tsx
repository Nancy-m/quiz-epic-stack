import { type SerializeFrom } from '@remix-run/node'
import { Link, Outlet, useMatches, useRouteLoaderData } from '@remix-run/react'
import { useChangeLanguage } from 'remix-i18next/react'
import LanguageSelect from '#app/components/common/LanguageSelect'
import { EpicProgress } from '#app/components/progress-bar.js'
import { Logo, UserDropdown } from '#app/components/routes/_layout/index.js'
import { SearchBar } from '#app/components/search-bar.js'
import { useToast } from '#app/components/toaster.js'
import { Button } from '#app/components/ui/button.js'
import { EpicToaster } from '#app/components/ui/sonner.js'
import { type loader } from '#app/root.js'
import { ThemeSwitch, useTheme } from '#app/routes/resources+/theme-switch.js'
import { useOptionalUser } from '#app/utils/user.js'

export default function MarketingLayout() {
	const data = useRouteLoaderData<typeof loader>('root') as SerializeFrom<
		typeof loader
	>
	const user = useOptionalUser()
	const theme = useTheme()
	const matches = useMatches()
	const isOnSearchPage = matches.find((m) => m.id === 'routes/users+/index')
	const searchBar = isOnSearchPage ? null : <SearchBar status="idle" />
	useToast(data.toast)

	useChangeLanguage(data.locale)

	return (
		<>
			<div className="flex h-screen flex-col justify-between">
				<header className="container py-6">
					<nav className="flex flex-wrap items-center justify-between gap-4 sm:flex-nowrap md:gap-8">
						<Logo />
						<div className="ml-auto hidden max-w-sm flex-1 sm:block">
							{searchBar}
						</div>
						<div className="flex items-center gap-10">
							{user ? (
								<UserDropdown />
							) : (
								<Button asChild variant="default" size="lg">
									<Link to="/login">Log In</Link>
								</Button>
							)}
						</div>
						<div className="block w-full sm:hidden">{searchBar}</div>
					</nav>
				</header>

				<div className="flex-1">
					<Outlet />
				</div>

				<div className="container flex justify-between pb-5">
					<Logo />
					<ThemeSwitch userPreference={data.requestInfo.userPrefs.theme} />
					<LanguageSelect />
				</div>
			</div>
			<EpicToaster closeButton position="top-center" theme={theme} />
			<EpicProgress />
		</>
	)
}
