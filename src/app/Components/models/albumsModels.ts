export interface AlbumsModels {
  albums: Albums
  artists: Artists2
  episodes: Episodes
  genres: Genres
  playlists: Playlists
  podcasts: Podcasts
  topResults: TopResults
  tracks: Tracks
  users: Users
}

export interface Albums {
  totalCount: number
  items: Item[]
}

export interface Item {
  data: Data
}

export interface Data {
  uri: string
  name: string
  artists: Artists
  coverArt: CoverArt
  date: Date
}

export interface Artists {
  items: Item2[]
}

export interface Item2 {
  uri: string
  profile: Profile
}

export interface Profile {
  name: string
}

export interface CoverArt {
  sources: Source[]
}

export interface Source {
  url: string
  width: number
  height: number
}

export interface Date {
  year: number
}

export interface Artists2 {
  totalCount: number
  items: Item3[]
}

export interface Item3 {
  data: Data2
}

export interface Data2 {
  uri: string
  profile: Profile2
  visuals: Visuals
}

export interface Profile2 {
  name: string
}

export interface Visuals {
  avatarImage: AvatarImage
}

export interface AvatarImage {
  sources: Source2[]
}

export interface Source2 {
  url: string
  width: number
  height: number
}

export interface Episodes {
  totalCount: number
  items: Item4[]
}

export interface Item4 {
  data: Data3
}

export interface Data3 {
  uri: string
  name: string
  coverArt: CoverArt2
  duration: Duration
  releaseDate: ReleaseDate
  podcast: Podcast
  description: string
  contentRating: ContentRating
}

export interface CoverArt2 {
  sources: Source3[]
}

export interface Source3 {
  url: string
  width: number
  height: number
}

export interface Duration {
  totalMilliseconds: number
}

export interface ReleaseDate {
  isoString: string
}

export interface Podcast {
  coverArt: CoverArt3
}

export interface CoverArt3 {
  sources: Source4[]
}

export interface Source4 {
  url: string
  width: number
  height: number
}

export interface ContentRating {
  label: string
}

export interface Genres {
  totalCount: number
  items: any[]
}

export interface Playlists {
  totalCount: number
  items: Item5[]
}

export interface Item5 {
  data: Data4
}

export interface Data4 {
  uri: string
  name: string
  description: string
  images: Images
  owner: Owner
}

export interface Images {
  items: Item6[]
}

export interface Item6 {
  sources: Source5[]
}

export interface Source5 {
  url: string
  width?: number
  height?: number
}

export interface Owner {
  name: string
}

export interface Podcasts {
  totalCount: number
  items: Item7[]
}

export interface Item7 {
  data: Data5
}

export interface Data5 {
  uri: string
  name: string
  coverArt: CoverArt4
  type: string
  publisher: Publisher
  mediaType: string
}

export interface CoverArt4 {
  sources: Source6[]
}

export interface Source6 {
  url: string
  width: number
  height: number
}

export interface Publisher {
  name: string
}

export interface TopResults {
  items: Item8[]
  featured: Featured[]
}

export interface Item8 {
  data: Data6
}

export interface Data6 {
  uri: string
  id?: string
  name?: string
  albumOfTrack?: AlbumOfTrack
  artists?: Artists3
  contentRating?: ContentRating2
  duration?: Duration2
  playability?: Playability
  profile?: Profile4
  visuals?: Visuals2
  description?: string
  images?: Images2
  owner?: Owner2
}

export interface AlbumOfTrack {
  uri: string
  name: string
  coverArt: CoverArt5
  id: string
  sharingInfo: SharingInfo
}

export interface CoverArt5 {
  sources: Source7[]
}

export interface Source7 {
  url: string
  width: number
  height: number
}

export interface SharingInfo {
  shareUrl: string
}

export interface Artists3 {
  items: Item9[]
}

export interface Item9 {
  uri: string
  profile: Profile3
}

export interface Profile3 {
  name: string
}

export interface ContentRating2 {
  label: string
}

export interface Duration2 {
  totalMilliseconds: number
}

export interface Playability {
  playable: boolean
}

export interface Profile4 {
  name: string
}

export interface Visuals2 {
  avatarImage: AvatarImage2
}

export interface AvatarImage2 {
  sources: Source8[]
}

export interface Source8 {
  url: string
  width: number
  height: number
}

export interface Images2 {
  items: Item10[]
}

export interface Item10 {
  sources: Source9[]
}

export interface Source9 {
  url: string
  width: any
  height: any
}

export interface Owner2 {
  name: string
}

export interface Featured {
  data: Data7
}

export interface Data7 {
  uri: string
  name: string
  description: string
  images: Images3
  owner: Owner3
}

export interface Images3 {
  items: Item11[]
}

export interface Item11 {
  sources: Source10[]
}

export interface Source10 {
  url: string
  width: any
  height: any
}

export interface Owner3 {
  name: string
}

export interface Tracks {
  totalCount: number
  items: Item12[]
}

export interface Item12 {
  data: Data8
}

export interface Data8 {
  uri: string
  id: string
  name: string
  albumOfTrack: AlbumOfTrack2
  artists: Artists4
  contentRating: ContentRating3
  duration: Duration3
  playability: Playability2
}

export interface AlbumOfTrack2 {
  uri: string
  name: string
  coverArt: CoverArt6
  id: string
  sharingInfo: SharingInfo2
}

export interface CoverArt6 {
  sources: Source11[]
}

export interface Source11 {
  url: string
  width: number
  height: number
}

export interface SharingInfo2 {
  shareUrl: string
}

export interface Artists4 {
  items: Item13[]
}

export interface Item13 {
  uri: string
  profile: Profile5
}

export interface Profile5 {
  name: string
}

export interface ContentRating3 {
  label: string
}

export interface Duration3 {
  totalMilliseconds: number
}

export interface Playability2 {
  playable: boolean
}

export interface Users {
  totalCount: number
  items: Item14[]
}

export interface Item14 {
  data: Data9
}

export interface Data9 {
  uri: string
  id: string
  displayName: string
  username: string
  image: Image
}

export interface Image {
  smallImageUrl?: string
  largeImageUrl?: string
}
