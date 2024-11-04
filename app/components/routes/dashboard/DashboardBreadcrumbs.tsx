import { useLocation, useMatches } from '@remix-run/react'
import { ChevronRight } from 'lucide-react'
import { useMemo } from 'react'
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '#app/components/ui/breadcrumb'

export interface BreadcrumbHandle {
	breadcrumb: {
		title: string
		path: string
	}
}

const useDashboardBreadcrumbs = () => {
	const matches = useMatches()
	const breadcrumbs = useMemo(() => {
		return matches
			.filter(
				(match) =>
					match.handle && (match.handle as BreadcrumbHandle).breadcrumb,
			)
			.map((match) => (match.handle as BreadcrumbHandle).breadcrumb)
	}, [matches])
	return breadcrumbs
}

const BreadcrumbObj = ({
	title,
	path,
	hasTrailingSlash,
}: {
	title: string
	path: string
	hasTrailingSlash: boolean
}) => {
	const { pathname } = useLocation()
	return (
		<>
			<BreadcrumbItem>
				{path === pathname ? (
					<BreadcrumbPage className="font-bold">{title}</BreadcrumbPage>
				) : (
					<BreadcrumbLink href={path}>{title}</BreadcrumbLink>
				)}
			</BreadcrumbItem>

			{hasTrailingSlash && (
				<BreadcrumbSeparator>
					<ChevronRight />
				</BreadcrumbSeparator>
			)}
		</>
	)
}

export const DashboardBreadcrumbs = () => {
	const breadcrumbs = useDashboardBreadcrumbs()

	return (
		<Breadcrumb>
			<BreadcrumbList>
				{breadcrumbs.map((match, idx) => (
					<BreadcrumbObj
						title={match.title}
						path={match.path}
						hasTrailingSlash={idx < breadcrumbs.length - 1}
						key={match.title}
					/>
				))}
			</BreadcrumbList>
		</Breadcrumb>
	)
}
