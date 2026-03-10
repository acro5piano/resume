import { useEffect, useState } from 'react'
import yaml from 'js-yaml'
import { Resume } from './Resume'

interface ContactInfo {
  languages: string
  languagesLabel: string
  phone: string
  phoneLabel: string
  email: string
  emailLabel: string
  location: string
  locationLabel: string
}

interface FrontMatter {
  name: string
  subtitle: string
  description: string
  contact: ContactInfo
}

function parseFrontmatter(text: string) {
  const match = text.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match) return { data: {} as FrontMatter, content: text }
  return {
    data: yaml.load(match[1]!) as FrontMatter,
    content: match[2]!,
  }
}

const isJa = window.location.pathname.startsWith('/ja')

export function App() {
  const [frontmatter, setFrontmatter] = useState<FrontMatter | null>(null)
  const [markdown, setMarkdown] = useState('')

  useEffect(() => {
    const file = isJa ? '/content/ja.md' : '/content/en.md'
    fetch(file)
      .then((res) => res.text())
      .then((text) => {
        const { data, content } = parseFrontmatter(text)
        setFrontmatter(data)
        setMarkdown(content)
      })
  }, [])

  if (!frontmatter) return null

  return (
    <Resume frontmatter={frontmatter} markdown={markdown} />
  )
}
