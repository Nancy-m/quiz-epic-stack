import { type UniqueIdentifier } from '@dnd-kit/core'
import { type BuilderItemTypes } from '#app/types/builder'

/**
 * Checks if an ID belongs to a builder item
 */
export const isBuilderItem = (id: string) => id.startsWith('builder')

/**
 * Creates a temporary ID for an item being dragged
 */
export const asTempId = (id: string) => `${id}_temp`

/**
 * Generates a new unique builder ID
 */
export const generateBuilderId = () => `builder-${Date.now()}`

/**
 * Attempts to convert a DnD unique identifier to a string
 * @throws {Error} if the identifier is neither a string nor a number
 */
export const tryDndIdAsString = (id: UniqueIdentifier): string => {
	if (typeof id === 'string') {
		return id
	}
	if (typeof id === 'number') {
		return String(id)
	}
	throw new Error(
		`Expected DnD identifier to be string or number, got ${typeof id}`,
	)
}

/**
 * Extracts the type from a source item ID
 */
export const getTypeFromSourceId = (sourceId: string): BuilderItemTypes =>
	sourceId.replace('source_', '') as BuilderItemTypes

/**
 * Checks if an ID is a temporary one
 */
export const isTempId = (id: string) => id.includes('_temp')
