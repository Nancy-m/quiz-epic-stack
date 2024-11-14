import { useDroppable } from '@dnd-kit/core'
import { useTranslation } from 'react-i18next'

export const BuilderDropZone = ({ id }: { id: string }) => {
	const { isOver, setNodeRef } = useDroppable({ id })
	const { t } = useTranslation('builder_drop-zone')
	return (
		<div
			ref={setNodeRef}
			className={`flex h-full w-full items-center justify-center rounded-lg border-2 border-dashed ${
				isOver ? 'border-blue-500 bg-blue-100' : 'border-gray-300'
			}`}
		>
			{t('drop-here')}
		</div>
	)
}

BuilderDropZone.handle = {
	i18n: ['builder_drop-zone'],
}
