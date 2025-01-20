interface IViewsGradation {
	value: number
	designation: string
}

export function transformViews(views: number): string {
	let formattedViews: string

	const viewsGradation: IViewsGradation[] = [
		{
			value: 1_000_000_000,
			designation: 'B'
		},
		{
			value: 1_000_000,
			designation: 'M'
		},
		{
			value: 1_000,
			designation: 'K'
		}
	]

	for (const currentViews of viewsGradation) {
		if (views >= currentViews.value) {
			formattedViews = (views / currentViews.value).toFixed(1)
			formattedViews = formattedViews.endsWith('.0') ? formattedViews.slice(0, -2) : formattedViews
			return `${formattedViews} ${currentViews.designation}`
		}
	}

	return `${views} views`
}
