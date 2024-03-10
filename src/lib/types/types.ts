type ID = string | number

enum PersonName {
  DenaliBella = "Denali Bella",
}

type Author = {
  id: ID
  name: PersonName
  description: string
}

enum RoutePath {
  Home = "/",
  About = "/about",
  Contact = "/contact",
  Random = "/random",
}

enum ApiRoutePath {
  Posts = "/api/posts",
}

type NavItem = {
  id?: ID
  label: string
  path?: RoutePath
}

type NavList = {
  logo?: string
  items: NavItem[]
  active: NavItem
}

enum BlogCategory {
  Music = "Music",
  Travel = "Travel",
  Art = "Art",
  Tech = "Tech",
}

type Quote = {
  content: string
  author: string
}

type ParagraphContent = {
  subheading?: string
  subtitle?: string
  description?: string
  image?: string
  quote?: Quote
  ul?: string[]
  ol?: string[]
}

type BlogPost = {
  title: string
  subtitle: string
  content: ParagraphContent[]
  category: BlogCategory
  author: Author
  createdAt?: string
}

enum ContainerDimension {
  ExtraSmall = "max-width: var(--bp-sm);",
  Small = "max-width: var(--bp-md);",
  Medium = "max-width: var(--bp-lg);",
  Large = "max-width: var(--bp-xl);",
  ExtraLarge = "max-width: var(--bp-2xl);",
}

export { PersonName, RoutePath, BlogCategory, ContainerDimension, ApiRoutePath }

export type { ID, Author, NavItem, NavList, ParagraphContent, BlogPost }
