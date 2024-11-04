import { $path } from 'remix-routes'
import { Heading } from '#app/components/routes/dashboard/Common/Heading/index.js'
import { type BreadcrumbHandle } from '#app/components/routes/dashboard/DashboardBreadcrumbs'

export const handle: BreadcrumbHandle = {
	breadcrumb: {
		title: 'Settings',
		path: $path('/dashboard/settings'),
	},
}
export default function Settings() {
	return (
		<div>
			<Heading>Settings</Heading>
		</div>
	)
}
