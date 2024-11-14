import { type ComponentType } from 'react'
import { type Wrapper } from '#app/components/builder/Common/Wrapper.js'
import { type IconName } from '#app/components/ui/icon.js'
import type questionTypes from '#app/locales/en/question-types.json'
import { type I18nHandle } from '#app/modules/i18next/util.js'
export type BuilderItemTypes =
	| 'single-select'
	| 'multi-select'
	| 'select-box'
	| 'fill-in-the-blank'
	| 'text-area'
	| 'matrix-single'

export type BuilderSourceItem = {
	/** The drag and drop id which must be unique among all drag and drop ids */
	id: `source_${BuilderItemTypes}`
	/** The display name for the source item */
	// label: string
	/** The icon to display for the source item */
	icon: IconName
	/** The React component to render for the source item */
	component: BuilderItemComponent & {
		handle: I18nHandle
	} /* ComponentType<{ id: string }> */
	translationKey: keyof typeof questionTypes
}

export type BuilderItem = {
	id: string
	type: BuilderItemTypes
	component: BuilderItemComponent
}
export type BuilderItemComponent = ComponentType<{
	WrapperProps: Pick<Parameters<typeof Wrapper>[0], 'WrapperHandleProps'>
}>
