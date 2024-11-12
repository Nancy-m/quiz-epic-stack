import { type UniqueIdentifier } from '@dnd-kit/core'
import { FillInTheBlank } from '#app/components/builder/FillInTheBlank'
import { MatrixSingle } from '#app/components/builder/MatrixSingle'
import { MultiChoice } from '#app/components/builder/MultiChoice'
import { SelectBox } from '#app/components/builder/SelectBox'
import { SingleChoice } from '#app/components/builder/SingleChoice'
import { TextAreaQuery } from '#app/components/builder/TextArea'
import { type BuilderItem, type BuilderSourceItem } from '#app/types/builder'
import { asTempId, getTypeFromSourceId } from './builder-ids'

/**
 * The source item bank from which new builder items can be created
 */
export const BUILDER_SOURCE_ITEMS: readonly BuilderSourceItem[] = [
	{
		id: 'source_single-select',
		label: 'Single Select',
		icon: 'square-square',
		component: SingleChoice,
	},
	{
		id: 'source_multi-select',
		label: 'Multi Select',
		icon: 'square-stack',
		component: MultiChoice,
	},
	{
		id: 'source_select-box',
		label: 'Select Box',
		icon: 'panel-top-open',
		component: SelectBox,
	},
	{
		id: 'source_fill-in-the-blank',
		label: 'Fill in the Blank',
		icon: 'pencil-line',
		component: FillInTheBlank,
	},
	{
		id: 'source_text-area',
		label: 'Text Area',
		icon: 'notebook-pen',
		component: TextAreaQuery,
	},
	{
		id: 'source_matrix-single',
		label: 'Matrix Single',
		icon: 'layout-grid',
		component: MatrixSingle,
	},
] as const

/**
 * Creates a new builder item from a source item
 */
export const createBuilderItem = (sourceId: string): BuilderItem => {
	const sourceItem = findSourceItem(sourceId)
	if (!sourceItem) {
		return {
			id: asTempId(sourceId),
			type: 'single-select',
			component: SingleChoice,
		}
	}
	return {
		id: asTempId(sourceId),
		type: getTypeFromSourceId(sourceItem.id),
		component: sourceItem.component,
	}
}

/**
 * Checks if an ID belongs to a source item
 */
export const isSourceItem = (id: string) => {
	return BUILDER_SOURCE_ITEMS.some((item) => item.id === id)
}

/**
 * Finds a source item by ID
 */
export const findSourceItem = (
	id: UniqueIdentifier,
): BuilderSourceItem | undefined =>
	BUILDER_SOURCE_ITEMS.find((item) => item.id === id)
