interface GetSEOParams {
  title?: string
}

export const useSEO = () => {
  const getSEO = (params?: GetSEOParams) => {
    const { title } = params || {}
    const defaultTitle = 'All Chords'

    return {
      title: title ? `${title} | ${defaultTitle}` : defaultTitle
    }
  }

  return {
    getSEO
  }
}
