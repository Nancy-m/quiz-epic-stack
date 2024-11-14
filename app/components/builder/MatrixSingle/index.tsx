import { useId } from 'react'
import { useTranslation } from 'react-i18next'
import { Icon } from '#app/components/ui/icon.js'
import { Input } from '#app/components/ui/input.js'
import { RadioGroup, RadioGroupItem } from '#app/components/ui/radio-group.js'
import { type I18nHandle } from '#app/modules/i18next/util.js'
import { type BuilderItemComponent } from '#app/types/builder.ts'
import { cn } from '#app/utils/misc'
import { BuilderItemSeparator } from '../Common/BuilderItemSeparator'
import { PromptRow } from '../Common/PromptRow'
import { Wrapper } from '../Common/Wrapper'

const MATRIX_GAP = 'gap-2'

const handle: I18nHandle = {
	i18n: ['MatrixSingle', 'question-types', ...PromptRow.handle.i18n],
}

export const MatrixSingle: BuilderItemComponent & { handle: I18nHandle } = ({
	WrapperProps,
}) => {
	const { t } = useTranslation(['question-types'])
	return (
		<Wrapper
			labelText={t('matrix-single')}
			icon="layout-grid"
			{...WrapperProps}
		>
			<PromptRow />
			<BuilderItemSeparator />
			<MatrixQuadrant />
		</Wrapper>
	)
}

MatrixSingle.handle = handle

const MatrixQuadrant = () => {
	return (
		<div className={cn('col-start-2 flex flex-col', MATRIX_GAP)}>
			<MatrixHeaderRow />
			<MatrixRow />
			<MatrixRow />
			<MatrixRow />
		</div>
	)
}

const MatrixHeaderRow = () => {
	return (
		<div className={cn('flex flex-row', MATRIX_GAP)}>
			<div className="flex-1"></div>
			<HeaderItem />
			<HeaderItem />
			<HeaderItem />
		</div>
	)
}

const HeaderItem = () => {
	const { t } = useTranslation(['MatrixSingle'])
	return (
		<div className="flex flex-1 flex-row items-center gap-1">
			<Icon name="grip-vertical" />
			<Input placeholder={t('value')} />
			<Icon name="circle-minus" />
		</div>
	)
}

const MatrixRow = () => {
	return (
		<>
			<BuilderItemSeparator />
			<div className={cn('flex flex-row', MATRIX_GAP)}>
				<HeaderItem />
				<RadioGroup className="contents">
					<RowItem />
					<RowItem />
					<RowItem />
				</RadioGroup>
			</div>
		</>
	)
}

const RowItem = () => {
	const id = useId()
	return (
		<div className="flex flex-1 items-center justify-center">
			<RadioGroupItem disabled value={id} />
		</div>
	)
}
