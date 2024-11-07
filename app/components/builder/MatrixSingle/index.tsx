import { useId } from 'react'
import { Icon } from '#app/components/ui/icon.js'
import { Input } from '#app/components/ui/input.js'
import { RadioGroup, RadioGroupItem } from '#app/components/ui/radio-group.js'
import { cn } from '#app/utils/misc'
import { PromptRow } from '../Common/PromptRow'
import { BuilderItemSeparator } from '../Common/BuilderItemSeparator'
import { Wrapper } from '../Common/Wrapper'

const MATRIX_GAP = 'gap-2'

export const MatrixSingle = () => {
	return (
		<Wrapper labelText="Matrix Single">
			<PromptRow />
			<BuilderItemSeparator />
			<MatrixQuadrant />
		</Wrapper>
	)
}

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
	return (
		<div className="flex flex-1 flex-row items-center gap-1">
			<Icon name="grip-vertical" />
			<Input placeholder="Value" />
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
