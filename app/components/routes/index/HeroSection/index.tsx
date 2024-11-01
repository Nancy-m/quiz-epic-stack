import { Link } from '@remix-run/react'
import { useTranslation } from 'react-i18next'
import { $path } from 'remix-routes'
import { Button } from '#app/components/ui/button'
import { Icon } from '#app/components/ui/icon'

const NS_HERO_SECTION = 'HeroSection'
export default function HeroSection() {
	const { t } = useTranslation(NS_HERO_SECTION)
	return (
		<section className="w-full bg-background py-12 md:py-24 lg:py-32 xl:py-48">
			<div className="container px-4 md:px-6">
				<div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
					<div className="flex flex-col justify-center space-y-4">
						<div className="space-y-2">
							<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
								Craft Engaging Quizzes for Your Enterprise App
							</h1>
							<p className="max-w-[600px] text-muted-foreground md:text-xl">
								{`Create, customize, and seamlessly integrate interactive quizzes and questionnaires into your application's webviews.`}
							</p>
						</div>
						<div className="flex flex-col gap-2 min-[400px]:flex-row">
							<Button asChild>
								<Link to={$path('/dashboard')}>
									{t('start_building')}{' '}
									<Icon
										name="arrow-right"
										title="arrow-right"
										className="ml-2 h-4 w-4"
									/>
								</Link>
							</Button>
							<Button variant="outline" asChild>
								<Link to={$path('/example')}>
									Explore Webapp{' '}
									<Icon
										name="share-2"
										title="share-2"
										className="ml-2 h-4 w-4"
									/>
								</Link>
							</Button>
						</div>
						<div className="mt-6 flex flex-col gap-2">
							<h2 className="text-xl font-semibold">Why Choose QuizCraft?</h2>
							<ul className="grid gap-2 sm:grid-cols-2">
								<li className="flex items-center gap-2">
									<Icon
										name="puzzle"
										title="puzzle"
										className="h-5 w-5 text-primary"
									/>{' '}
									Easy-to-use Builder
								</li>
								<li className="flex items-center gap-2">
									<Icon
										name="share-2"
										title="share-2"
										className="h-5 w-5 text-primary"
									/>{' '}
									Seamless Integration
								</li>
								<li className="flex items-center gap-2">
									<Icon
										name="zap"
										title="zap"
										className="h-5 w-5 text-primary"
									/>{' '}
									Customizable Templates
								</li>
								<li className="flex items-center gap-2">
									<Icon
										name="arrow-right"
										title="arrow-right"
										className="h-5 w-5 text-primary"
									/>{' '}
									Real-time Analytics
								</li>
							</ul>
						</div>
					</div>
					<div className="flex items-center justify-center">
						<img
							// src="/images/quiz-craft-dashboard.png"
							src="https://static.vecteezy.com/system/resources/previews/002/556/980/large_2x/quiz-time-neon-signs-style-text-vector.jpg"
							width={550}
							height={550}
							alt="QuizCraft Dashboard"
							className="aspect-square w-full max-w-[550px] overflow-hidden rounded-xl object-cover"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

HeroSection.i18n = [NS_HERO_SECTION]
