import { useId, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '#app/components/ui/button.js'
import { Checkbox } from '#app/components/ui/checkbox.js'
import { Icon } from '#app/components/ui/icon.js'
import { Input } from '#app/components/ui/input.js'
import { Label } from '#app/components/ui/label.js'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '#app/components/ui/popover.js'
import {
	Select,
	SelectValue,
	SelectTrigger,
	SelectItem,
	SelectContent,
} from '#app/components/ui/select.js'
import { Separator } from '#app/components/ui/separator.js'
import { type I18nHandle } from '#app/modules/i18next/util.js'
import { DoneEditingButton } from '../DoneEditingButton'
import { RequiredCheckbox } from '../RequiredCheckbox'

const handle: I18nHandle = {
	i18n: [
		'TextboxActionRow',
		...RequiredCheckbox.handle.i18n,
		...DoneEditingButton.handle.i18n,
	],
}

export const TextboxActionRow = () => {
	const { t } = useTranslation(['TextboxActionRow'])
	const [showLengthOptions, setShowLengthOptions] = useState<boolean>(false)
	const limitLengthId = useId()
	const disablePastingId = useId()
	return (
		<div className="col-span-3 flex flex-row items-center justify-between gap-2">
			<div className="flex flex-row items-center gap-2">
				<Select>
					<SelectTrigger className="w-24">
						<SelectValue placeholder={t('select-a-value')} />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="1">1</SelectItem>
						<SelectItem value="2">2</SelectItem>
					</SelectContent>
				</Select>
				<Popover modal={true}>
					<PopoverTrigger asChild>
						<Button className="inline-flex items-center gap-2" variant="ghost">
							{t('options')}
							<Icon name="chevron-down"></Icon>
						</Button>
					</PopoverTrigger>
					<PopoverContent align="start">
						<div className="flex flex-col gap-4">
							<label
								htmlFor={`${limitLengthId}-limit`}
								className="flex flex-row items-center gap-2"
							>
								<Checkbox
									id={`${limitLengthId}-limit`}
									onCheckedChange={(checked) =>
										setShowLengthOptions(checked as boolean)
									}
								/>
								<div>{t('limit-length')}</div>
							</label>
							<div className="flex flex-row items-center gap-2">
								<Label className="text-nowrap">{t('min')}</Label>
								<Input
									type="number"
									className="col-span-2"
									defaultValue={0}
									disabled={!showLengthOptions}
								/>
								<Separator orientation="vertical" />
								<Label className="text-nowrap">{t('max')}</Label>
								<Input
									type="number"
									className="col-span-2"
									defaultValue={64}
									disabled={!showLengthOptions}
								/>
							</div>
							<label
								htmlFor={`${disablePastingId}-disable-pasting`}
								className="flex flex-row items-center gap-2"
							>
								<div className="col-span-1 flex items-center justify-center">
									<Checkbox id={`${disablePastingId}-disable-pasting`} />
								</div>
								<div className="col-span-4">{t('disable-pasting')}</div>
							</label>
						</div>
					</PopoverContent>
				</Popover>
			</div>
			<div className="flex flex-row items-center gap-2">
				<RequiredCheckbox />
				<DoneEditingButton />
			</div>
		</div>
	)
}

TextboxActionRow.handle = handle
