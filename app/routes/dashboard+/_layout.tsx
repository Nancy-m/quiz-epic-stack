import { Outlet } from '@remix-run/react'
import { SidebarProvider, SidebarTrigger } from '#app/components/ui/sidebar'
import { DashboardSidebar } from '#app/components/routes/dashboard/DashboardSidebar'
import {
	BreadcrumbHandle,
	DashboardBreadcrumbs,
} from '#app/components/routes/dashboard/DashboardBreadcrumbs'
import { $path } from 'remix-routes'
import { I18nHandle } from '#app/modules/i18next/util'

export const handle: BreadcrumbHandle & I18nHandle = {
	breadcrumb: {
		title: 'Dashboard',
		path: $path('/dashboard'),
	},
	i18n: ['Dashboard', ...DashboardSidebar.handle.i18n],
}

export default function Dashboard() {
	return (
		<div>
			<SidebarProvider>
				<DashboardSidebar />
				<div className="flex w-full flex-col">
					<div className="bg-sidebar border-sidebar-accent flex w-full items-center gap-10 border-b-2 px-4 py-6">
						<SidebarTrigger />
					</div>
					<div className="flex h-full flex-col items-center">
						<div className="h-full w-full max-w-screen-xl px-4 py-4">
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
