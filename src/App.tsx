import matter from 'gray-matter'
import { Resume, type ResumeProps } from './Resume'
import enRaw from '../content/en.md?raw'
import jaRaw from '../content/ja.md?raw'

const isJa = window.location.pathname.startsWith('/ja')
const { data, content } = matter(isJa ? jaRaw : enRaw)

export function App() {
  return <Resume frontmatter={data as ResumeProps['frontmatter']} markdown={content} />
}
