export const paginate = (items, perPage) =>
	items.reduce(
		(acc, _, index) => {
			if (index % perPage === 0)
				acc.push(items.slice(index, index + perPage))

			return acc
		},
		[]
	)

export const keysMiddleware = async (e, fn) => {
	await e.preventDefault()
	await e.stopPropagation()
	return fn()
}
