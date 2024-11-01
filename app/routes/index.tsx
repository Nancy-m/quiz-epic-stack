import { type MetaFunction } from '@remix-run/node'
import HeroSection from '#app/components/routes/index/HeroSection'

export const meta: MetaFunction = () => [{ title: 'Epic Notes' }]

export default function Index() {
	return <HeroSection />
}
