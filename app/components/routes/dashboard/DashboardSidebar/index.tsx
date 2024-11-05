import { type SerializeFrom } from '@remix-run/node'
import { useRouteLoaderData } from '@remix-run/react'
import { useTranslation } from 'react-i18next'
import { $path } from 'remix-routes'
import LanguageSelect from '#app/components/common/LanguageSelect/index.js'
import { Icon, type IconName } from '#app/components/ui/icon'
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '#app/components/ui/sidebar'
import { type loader } from '#app/root.js'
import { ThemeSwitch } from '#app/routes/resources+/theme-switch.js'

const menuItems = [
	{
		title: 'home',
		url: $path('/'),
		icon: 'house',
	},
	{
		title: 'notifications',
		url: '#',
		icon: 'inbox',
	},
	{
		title: 'accounts',
		url: $path('/dashboard/accounts'),
		icon: 'users',
	},
	{
		title: 'quizzes',
		url: $path('/dashboard/quizzes'),
		icon: 'calendar',
	},
	{
		title: 'questions',
		url: $path('/dashboard/questions'),
		icon: 'search',
	},
	{
		title: 'settings',
		url: $path('/dashboard/settings'),
		icon: 'settings',
	},
] satisfies { title: string; url: string; icon: IconName }[]

export const DashboardSidebar = () => {
	const { t } = useTranslation('DashboardSidebar')

	const data = useRouteLoaderData<typeof loader>('root') as SerializeFrom<
		typeof loader
	>
	return (
		<Sidebar data-testid="dashboard-sidebar">
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Dashboard</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{menuItems.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<a href={item.url}>
											<Icon name={item.icon} className="h-4 w-4" />
											<span>{t(item.title) as string}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter>
				<LanguageSelect />
				<ThemeSwitch userPreference={data.requestInfo.userPrefs.theme} />
			</SidebarFooter>
		</Sidebar>
	)
}

DashboardSidebar.handle = {
	i18n: ['DashboardSidebar'],
}
