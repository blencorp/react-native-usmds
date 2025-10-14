export default function KitchensinkSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h2>Kitchensink App</h2>
        <p className="mt-1 max-w-3xl text-neutral-600">
          KitchenSink is a comprehensive demo React and React Native mobile app showcasing all the
          USMDS UI component libraries in action including buttons, forms, action sheets and much
          more!
        </p>

        <div className="mt-8 grid items-start gap-6 md:grid-cols-[240px_1fr]">
          <div className="rounded-xl border border-neutral-200 bg-white/80 p-4 shadow-sm">
            <div className="h-[240px] w-full rounded-lg bg-neutral-100" />
            <div className="mt-3 space-y-2 text-xs text-neutral-500">
              <p>Scan the QR code to open the app on your phone</p>
              <div className="flex items-center justify-between">
                <div className="h-20 w-20 rounded bg-neutral-200" />
                <div className="h-4 w-24 rounded bg-neutral-200" />
                <div className="h-4 w-24 rounded bg-neutral-200" />
              </div>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-neutral-200 bg-white/80 p-4 shadow-sm">
              <div className="h-[420px] rounded-lg bg-neutral-100 bg-[url('/images/device-2.png')] bg-cover bg-center" />
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white/80 p-4 shadow-sm">
              <div className="h-[420px] rounded-lg bg-neutral-100 bg-[url('/images/device-3.png')] bg-cover bg-center" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


