import { useLocation, useMatches } from '@remix-run/react'
import { ChevronRight } from 'lucide-react'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
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
		/**
		 * The i18n namespace to use for the title translation.
		 * If no namespace is provided, the `this.title` will be used as-is,
		 * i.e. "Page Name" will be "Page Name"
		 */
		namespace?: string
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
	namespace,
	title,
	path,
	hasTrailingSlash,
}: {
	namespace?: string
	title: string
	path: string
	hasTrailingSlash: boolean
}) => {
	const { pathname } = useLocation()
	const { t } = useTranslation(namespace)
	return (
		<>
			<BreadcrumbItem>
				{path === pathname ? (
					<BreadcrumbPage className="font-bold">
						{namespace ? t(title) : title}
					</BreadcrumbPage>
				) : (
					<BreadcrumbLink href={path}>
						{namespace ? t(title) : title}
					</BreadcrumbLink>
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
						namespace={match.namespace}
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
