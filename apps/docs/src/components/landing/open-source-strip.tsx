export default function OpenSourceStrip() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h2>
          Powered by Modern Open Source & Public Standards
        </h2>
        <p className="mt-2 max-w-3xl text-neutral-600">
          Built with React Native, Tailwind / NativeWind, and aligned with the U.S. Web Design
          System (USWDS), USMDS brings consistency, compliance, and speed to federal, state, and
          local app development.
        </p>
        <div className="mt-8 grid grid-cols-2 items-center gap-6 sm:grid-cols-4">
          <div className="h-10 w-32 rounded bg-neutral-100 bg-[url('/logos/react-native.png')] bg-contain bg-center bg-no-repeat" />
          <div className="h-10 w-32 rounded bg-neutral-100 bg-[url('/logos/expo.png')] bg-contain bg-center bg-no-repeat" />
          <div className="h-10 w-32 rounded bg-neutral-100 bg-[url('/logos/nativewind.png')] bg-contain bg-center bg-no-repeat" />
          <div className="h-10 w-32 rounded bg-neutral-100 bg-[url('/logos/tailwind.png')] bg-contain bg-center bg-no-repeat" />
        </div>
      </div>
    </section>
  )
}


