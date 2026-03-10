import yaml from 'js-yaml'
import { Resume, type ResumeProps } from './Resume'
import enRaw from '../content/en.md?raw'
import jaRaw from '../content/ja.md?raw'

function parseFrontmatter(text: string) {
  const match = text.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match) return { data: {} as ResumeProps['frontmatter'], content: text }
  return {
    data: yaml.load(match[1]!) as ResumeProps['frontmatter'],
    content: match[2]!,
  }
}

const isJa = window.location.pathname.startsWith('/ja')
const { data, content } = parseFrontmatter(isJa ? jaRaw : enRaw)

export function App() {
  return <Resume frontmatter={data} markdown={content} />
}
