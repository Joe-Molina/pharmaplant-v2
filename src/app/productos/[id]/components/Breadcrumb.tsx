import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

interface BreadcrumbProps {
  nombre: string
}

export const BreadcrumbDemo: React.FC<BreadcrumbProps> = ({ nombre }) => {
  return (
    <Breadcrumb className="md:w-full self-start">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/productos">Productos</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/productos" className="text-zinc-800">{nombre}</BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}