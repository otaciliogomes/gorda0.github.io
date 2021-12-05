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

export const randomValue = from => Math.floor(Math.random() * from * 10) + 1

export const mountPicsumUrl = len => `https://picsum.photos/v2/list?page=${randomValue(len)}&limit=${len}`