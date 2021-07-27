const Box = ({ label, value }: { label: string; value: string }) => (
  <div className="text-center">
    <div className="text-lg font-bold">{label}</div>
    <div className="text-base">{value}</div>
  </div>
)

const SectionTitle = ({ title = '' }) => <div className="text-2xl text-teal-600 mt-3">{title}</div>

export default function Ja() {
  return (
    <div className="mt-12 bg-white m-auto resume-container p-8">
      <div className="text-3xl">Kay Gosho</div>
      <div className="mt-3 text-xl text-teal-400">Full Stack Web Engineer</div>
      <div className="mt-2 text-lg">
        Efficient and skilled in web application creation with a diverse knowledge of web
        technologies. I have been a web engineer for 6 years and garnered a multitude of experiences
        in the field of Server-side and Front-end programming, Front-end building, GraphQL,
        TypeScript, Testing, SQL tuning and others. I am also familiar with Infrastructure & DevOps
        tools such as AWS, CI services, Terraform, and Docker.
      </div>
      <div className="mt-4 text-lg text-white font-medium bg-teal-400">
        <div className="flex justify-between p-4">
          <Box label="Japanese, English" value="Languages" />
          <div className="w-0.5 h-14 bg-teal-600 opacity-50" />
          <Box label="+8180-7808-4235" value="Phone Number" />
          <div className="w-0.5 h-14 bg-teal-600 opacity-50" />
          <Box label="ketsume0211@gmail.com" value="Email" />
          <div className="w-0.5 h-14 bg-teal-600 opacity-50" />
          <Box label="Miyakojima, Japan" value="Location" />
        </div>
      </div>
      <SectionTitle title="Work Experience" />
      // TODO
    </div>
  )
}
