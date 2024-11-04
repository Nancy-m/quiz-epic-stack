import { $path } from 'remix-routes'
import { Heading } from '#app/components/routes/dashboard/Common/Heading/index.js'
import { type BreadcrumbHandle } from '#app/components/routes/dashboard/DashboardBreadcrumbs'

export const handle: BreadcrumbHandle = {
	breadcrumb: {
		title: 'Accounts',
		path: $path('/dashboard/accounts'),
	},
}
export default function Accounts() {
	return (
		<div>
			<Heading>Accounts</Heading>
		</div>
	)
}
