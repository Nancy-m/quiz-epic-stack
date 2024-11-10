import {
	DndContext,
	type DragEndEvent,
	type DragOverEvent,
	DragOverlay,
	type DragStartEvent,
	useDroppable,
} from '@dnd-kit/core'
import {
	arrayMove,
	SortableContext,
	verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { useState } from 'react'
import { $path } from 'remix-routes'
import { Draggable } from '#app/components/builder/Common/Draggable.js'
import { SortableItem } from '#app/components/builder/Common/SortableItem.js'
import { Wrapper } from '#app/components/builder/Common/Wrapper.js'
import { Heading } from '#app/components/routes/dashboard/Common/Heading/index.js'
import { type BreadcrumbHandle } from '#app/components/routes/dashboard/DashboardBreadcrumbs'
import { Button } from '#app/components/ui/button.js'
import { Icon } from '#app/components/ui/icon.js'
import { type BuilderItem, type BuilderSourceItem } from '#app/types/builder.js'
import {
	isBuilderItem,
	asTempId,
	generateBuilderId,
	tryDndIdAsString,
} from '#app/utils/builder-ids.js'
import {
	BUILDER_SOURCE_ITEMS,
	isSourceItem,
	findSourceItem,
	createBuilderItem,
} from '#app/utils/builder-source-items.js'

export const handle: BreadcrumbHandle = {
	breadcrumb: {
		title: 'Builder',
		path: $path('/dashboard/builder'),
	},
}

const SourceItem = ({ item }: { item: BuilderSourceItem }) => {
	return (
		<Button className="w-full" variant="secondary">
			<Icon name={item.icon}>{item.label}</Icon>
		</Button>
	)
}

export default function Builder() {
	const [activeId, setActiveId] = useState<string | null>(null)
	const [builderItems, setBuilderItems] = useState<BuilderItem[]>([])

	const handleDragOver = ({ active, over }: DragOverEvent) => {
		console.log('handleDragOver', active, over)
		let activeId: string
		try {
			activeId = tryDndIdAsString(active?.id)
		} catch (error) {
			console.error('Invalid drag operation:', error)
			return
		}

		const activeIsSourceItem = isSourceItem(activeId)
		const isOverSelf = over?.id && over.id === active.id
		const isOverDroppable = over?.id

		if (activeIsSourceItem && !isOverDroppable) {
			setBuilderItems((items) =>
				items.filter((item) => item.id !== asTempId(activeId)),
			)
			return
		}

		const newBuilderItemTempId = asTempId(activeId)

		if (newBuilderItemTempId === over?.id) {
			return
		}

		if (activeIsSourceItem && isOverDroppable && !isOverSelf) {
			setBuilderItems((items) => {
				const existingTempItemIndex = items.findIndex(
					(item) => newBuilderItemTempId === item.id,
				)
				const overIndex = items.findIndex((item) => over.id === item.id)

				if (existingTempItemIndex !== -1) {
					return arrayMove(items, existingTempItemIndex, overIndex)
				}

				const newBuilderItem = createBuilderItem(activeId)
				const updatedItems = [...items]
				updatedItems.splice(overIndex, 0, newBuilderItem)
				return updatedItems
			})
			return
		}
	}

	const handleDragEnd = ({ active, over }: DragEndEvent) => {
		let activeId: string

		try {
			activeId = tryDndIdAsString(active.id)
		} catch (error) {
			console.error('Invalid drag operation:', error)
			return
		}

		const overSelf = activeId === over?.id

		if (isBuilderItem(activeId) && !overSelf) {
			setBuilderItems((items) => {
				const oldIndex = items.findIndex((item) => item.id === activeId)
				const newIndex = items.findIndex((item) => item.id === over?.id)
				return arrayMove(items, oldIndex, newIndex)
			})
		}

		if (isSourceItem(activeId)) {
			setBuilderItems((items) => {
				const theTempId = asTempId(activeId)
				const tempItemIndex = items.findIndex((item) => item.id === theTempId)
				if (tempItemIndex === -1) {
					return items
				}
				const tempItem = items[tempItemIndex]
				if (!tempItem) {
					return items
				}
				return [
					...items.slice(0, tempItemIndex),
					{
						...tempItem,
						id: generateBuilderId(),
					},
					...items.slice(tempItemIndex + 1),
				]
			})
		}

		setActiveId(null)
	}

	const handleDragStart = ({ active }: DragStartEvent) => {
		setActiveId(active.id as string)
	}

	return (
		<>
			<DndContext
				onDragEnd={handleDragEnd}
				onDragOver={handleDragOver}
				onDragStart={handleDragStart}
			>
				<Heading className="mb-4">Document Builder</Heading>
				<div className="flex flex-row gap-4">
					<div className="flex shrink-0 flex-col gap-4">
						{BUILDER_SOURCE_ITEMS.map((item) => (
							<Draggable id={item.id} key={item.id}>
								<SourceItem key={item.id} item={item} />
							</Draggable>
						))}
					</div>
					<div className="flex shrink-0 grow basis-3/4 flex-col gap-4 rounded-lg">
						<SortableContext
							strategy={verticalListSortingStrategy}
							items={builderItems}
						>
							{builderItems.map((item) => (
								<SortableItem key={item.id} id={item.id}>
									<item.component
										WrapperProps={{ WrapperHandleProps: { id: item.id } }}
									/>
								</SortableItem>
							))}
						</SortableContext>
						{builderItems.length === 0 && (
							<BuilderDropZone id="builder-drop-zone" />
						)}
					</div>
				</div>
				{activeId && !isSourceItem(tryDndIdAsString(activeId)) && (
					<DragOverlay>
						{activeId && isBuilderItem(activeId) && (
							<Wrapper
								labelText="Moving..."
								WrapperHandleProps={{ id: activeId }}
							>
								<div />
							</Wrapper>
						)}
					</DragOverlay>
				)}

				{activeId && isSourceItem(tryDndIdAsString(activeId)) && (
					<DragOverlay dropAnimation={null}>
						{findSourceItem(activeId) ? (
							<SourceItem item={findSourceItem(activeId)!} />
						) : null}
					</DragOverlay>
				)}
			</DndContext>
		</>
	)
}

const BuilderDropZone = ({ id }: { id: string }) => {
	const { isOver, setNodeRef } = useDroppable({ id })
	return (
		<div
			ref={setNodeRef}
			className={`flex h-full w-full items-center justify-center rounded-lg border-2 border-dashed ${
				isOver ? 'border-blue-500 bg-blue-100' : 'border-gray-300'
			}`}
		>
			Drop items here
		</div>
	)
}
