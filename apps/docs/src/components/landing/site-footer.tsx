import Link from "next/link"

export default function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
        <p className="text-neutral-600">© {new Date().getFullYear()} USMDS</p>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/docs" className="text-neutral-600 hover:text-neutral-900">
            Docs
          </Link>
          <Link
            href="https://github.com/blencorp/react-native-usmds"
            className="text-neutral-600 hover:text-neutral-900"
          >
            GitHub
          </Link>
        </nav>
      </div>
    </footer>
  )
}


