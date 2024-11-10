import { useSortable } from '@dnd-kit/sortable'
import { isTempId } from '#app/utils/builder-ids.js'

interface SortableItemProps {
	id: string
	children: React.ReactNode
}

export const SortableItem = ({ id, children }: SortableItemProps) => {
	const { setNodeRef, transform, transition, isDragging, active } = useSortable(
		{
			id,
			transition: {
				duration: 250,
				easing: 'ease-in-out',
			},
		},
	)

	const isBeingDragged = isDragging || (isTempId(id) && active)

	const style = {
		transform: transform
			? `translate3d(${transform.x}px, ${transform.y}px, 0)`
			: '',
		transition,
		opacity: isBeingDragged ? 0.3 : 1,
		// border: '1px solid transparent',
	}

	return (
		<div
			ref={setNodeRef}
			// className={!isBeingDragged ? cn('animate-flash') : ''}
			style={style}
		>
			{children}
		</div>
	)
}
