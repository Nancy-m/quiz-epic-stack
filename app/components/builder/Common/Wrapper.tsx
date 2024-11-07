import { Button } from '#app/components/ui/button.js'
import { Icon } from '#app/components/ui/icon.js'

export const Wrapper = ({
	children,
	labelText,
	icon,
}: {
	children: React.ReactNode
	labelText?: string
	icon?: Parameters<typeof Icon>[0]['name']
}) => {
	return (
		<div className="relative flex justify-center rounded-lg border border-gray-200 bg-white p-4 pt-8 shadow-md dark:bg-card">
			<WrapperHandle />
			{labelText && (
				<WrapperLabel>
					<Icon name={icon ?? 'calendar'}>{labelText}</Icon>
				</WrapperLabel>
			)}
			<div className="grid grid-cols-[auto_400px_auto] gap-2">{children}</div>
		</div>
	)
}
export const WrapperLabel = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="absolute left-5 top-0 rounded-b-sm bg-primary p-1 text-xs text-primary-foreground">
			{children}
		</div>
	)
}
export const WrapperHandle = () => {
	return (
		<div className="absolute left-1/2 top-0 w-full -translate-x-1/2">
			<Button variant="ghost" size="icon" className="h-6 w-full rounded-b-none">
				<Icon name="grip-horizontal" />
			</Button>
		</div>
	)
}
