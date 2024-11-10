import { useDraggable } from '@dnd-kit/core'

interface DraggableProps {
	children: React.ReactNode
	id: string
}

export const Draggable = ({ children, id }: DraggableProps) => {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id,
	})

	const style = transform
		? {
				// it doesn't need to go anywhere because there's a drag overlay
				// transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
			}
		: undefined

	return (
		<div ref={setNodeRef} {...attributes} {...listeners} style={{ ...style }}>
			{children}
		</div>
	)
}
