import Link from "next/link"

interface LinkNavProps {
  endpoint: string,
  text: string
}

export const LinkNav = ({ endpoint, text }: LinkNavProps) => {
  return (
    <Link href={endpoint} className="hover:text-blue-950">{text}</Link>
  )
}