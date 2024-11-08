import { Icon } from '#app/components/ui/icon.js'

export const AddItemSeparator = () => {
	return (
		<div className="relative">
			<div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 opacity-100 hover:opacity-100">
				<div className="absolute left-1/2 top-1/2 h-1 w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary opacity-50"></div>
				<div className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary p-[0px]">
					<Icon
						name="circle-plus"
						className="text-primary-foreground"
						// className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
					/>
				</div>
			</div>
		</div>
	)
}
