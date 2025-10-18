import { ReactNode, CSSProperties } from "react"
import { cn } from "@/lib/utils"

type SectionContentProps = {
  title: string | ReactNode
  subtitle?: string | ReactNode
  children: ReactNode
  sectionClassName?: string
  containerClassName?: string
  gridClassName?: string
  titleWrapperClassName?: string
  titleClassName?: string
  subtitleClassName?: string
  contentClassName?: string
  style?: CSSProperties
}

export default function SectionContent({
  title,
  subtitle,
  children,
  sectionClassName,
  containerClassName,
  gridClassName,
  titleWrapperClassName,
  titleClassName,
  subtitleClassName,
  contentClassName,
  style,
}: SectionContentProps) {
  const renderedTitle =
    typeof title === "string" ? <h2 className={cn("mb-4", titleClassName)}>{title}</h2> : title

  const renderedSubtitle =
    typeof subtitle === "string" ? (
      <p className={cn("text-neutral-600", subtitleClassName)}>{subtitle}</p>
    ) : (
      subtitle
    )

  return (
    <section className={cn("bg-white py-14", sectionClassName)} style={style}>
      <div className={cn("mx-auto max-w-6xl px-4 py-10", containerClassName)}>
        <div className={cn("grid grid-cols-1 gap-8 md:grid-cols-3", gridClassName)}>
          <div className={cn("md:col-span-1", titleWrapperClassName)}>
            {renderedTitle}
            {renderedSubtitle}
          </div>
          <div className={cn("md:col-span-2", contentClassName)}>{children}</div>
        </div>
      </div>
    </section>
  )
}
