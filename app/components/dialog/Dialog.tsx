// app/components/ui/Dialog/Dialog.tsx
import React, { useState } from 'react'
import { cn } from '#app/utils/misc'

const Dialog = ({
	children,
	open,
	onClose,
	className,
}: {
	open: boolean
	onClose: () => void
	className?: string
	children: React.ReactNode
}) => {
	if (!open) return null // 如果没有打开，则不渲染 Dialog

	return (
		<div
			className={cn(
				'dialog-overlay fixed inset-0 bg-black bg-opacity-10',
				className,
			)}
			onClick={onClose}
		>
			<div
				className="dialog-content fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white p-6 shadow-lg"
				onClick={(e) => e.stopPropagation()} // 防止点击 Dialog 内容关闭对话框
			>
				{children}
			</div>
		</div>
	)
}

const DialogTrigger = React.forwardRef<
	HTMLButtonElement,
	React.ComponentPropsWithoutRef<'button'>
>(({ className, ...props }, ref) => (
	<button ref={ref} className={cn('btn', className)} {...props} />
))
DialogTrigger.displayName = 'DialogTrigger'

const DialogContent = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<'div'>
>(({ className, children, ...props }, ref) => (
	<div ref={ref} className={cn('dialog-content', className)} {...props}>
		{children}
	</div>
))
DialogContent.displayName = 'DialogContent'

const DialogClose = React.forwardRef<
	HTMLButtonElement,
	React.ComponentPropsWithoutRef<'button'>
>(({ className, ...props }, ref) => (
	<button ref={ref} className={cn('dialog-close', className)} {...props}>
		Close
	</button>
))
DialogClose.displayName = 'DialogClose'

export { Dialog, DialogTrigger, DialogContent, DialogClose }
