export type MainImageItem = {
  date: string
  url: string
  explanation: string
  title: string
  mediaType: string
}

export type ImageCatalogItem = MainImageItem & {
  copyright?: string
  hdurl: string
  service_version: string
}
