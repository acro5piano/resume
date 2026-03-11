import Markdown from 'react-markdown'

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

export interface ResumeProps {
  frontmatter: {
    name: string
    subtitle: string
    description: string
    contact: ContactInfo
  }
  markdown: string
}

export function Resume({ frontmatter, markdown }: ResumeProps) {
  const { name, subtitle, description, contact } = frontmatter

  return (
    <div className="resume-container">
      <div className="eyecatch">
        <h1 className="eyecatch-title">{name}</h1>
        <p className="eyecatch-subtitle">{subtitle}</p>
        <p className="eyecatch-description">{description}</p>
      </div>

      <div className="contact">
        <div className="contact-row">
          <div className="contact-item contact-item-border">
            <p className="contact-content">{contact.languages}</p>
            <p className="contact-heading">{contact.languagesLabel}</p>
          </div>
          <div className="contact-item contact-item-border">
            <p className="contact-content">{contact.phone}</p>
            <p className="contact-heading">{contact.phoneLabel}</p>
          </div>
          <div className="contact-item contact-item-border contact-item-email">
            <p className="contact-content">{contact.email}</p>
            <p className="contact-heading">{contact.emailLabel}</p>
          </div>
          <div className="contact-item">
            <p className="contact-content">{contact.location}</p>
            <p className="contact-heading">{contact.locationLabel}</p>
          </div>
        </div>
      </div>

      <div className="content">
        <Markdown>{markdown}</Markdown>
      </div>
    </div>
  )
}
