import { Outlet } from '@remix-run/react'
import { $path } from 'remix-routes'
import {
	type BreadcrumbHandle,
	DashboardBreadcrumbs,
} from '#app/components/routes/dashboard/DashboardBreadcrumbs'
import { DashboardSidebar } from '#app/components/routes/dashboard/DashboardSidebar'
import { SidebarProvider, SidebarTrigger } from '#app/components/ui/sidebar'
import { type I18nHandle } from '#app/modules/i18next/util'

export const handle: BreadcrumbHandle & I18nHandle = {
	breadcrumb: {
		title: 'Dashboard',
		path: $path('/dashboard'),
	},
	i18n: ['Dashboard', ...DashboardSidebar.handle.i18n],
}

const TEST_IDS = {
	sidebarProvider: 'sidebar-provider',
}

export default function Dashboard() {
	return (
		<div>
			<SidebarProvider data-testid={TEST_IDS.sidebarProvider}>
				<DashboardSidebar />
				<div className="flex w-full flex-col">
					<div className="flex w-full items-center gap-10 border-b-2 border-sidebar-accent bg-sidebar px-4 py-6">
						<SidebarTrigger />
					</div>
					<div className="flex flex-col items-center">
						<div className="w-full max-w-screen-xl px-4 py-4">
							<DashboardBreadcrumbs />
							<hr className="my-4 w-full border-t border-gray-200" />
							<Outlet />
						</div>
					</div>
				</div>
			</SidebarProvider>
		</div>
	)
}

Dashboard.testIds = TEST_IDS
