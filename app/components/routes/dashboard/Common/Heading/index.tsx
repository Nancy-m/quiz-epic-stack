import { cn } from '#app/utils/misc.js'

export const Heading = ({
	children,
	...props
}: {
	children: React.ReactNode
} & React.HTMLAttributes<HTMLHeadingElement>) => {
	return (
		<h1 className={cn('text-2xl font-bold', props.className)}>{children}</h1>
	)
}
