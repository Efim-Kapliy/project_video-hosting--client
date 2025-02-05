import { Check } from 'lucide-react'

export default function VerifiedPage() {
	return (
		<div className='mx-auto mt-24 text-center'>
			<h1 className='font-semibold text-5xl inline-flex gap-2 items-center'>
				<Check
					size={60}
					className='text-green-500'
				/>
				<span>Email verified successfully!</span>
			</h1>
		</div>
	)
}
