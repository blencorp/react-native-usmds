import Image from "next/image"

import showcaseApps from "../../../images/showcase-apps.webp"

const SHOWCASE_QR_IMAGE = "/images/showcase-qr.svg"

function qrCode() {
  return (
    <Image
      src={SHOWCASE_QR_IMAGE}
      alt="QR code to open the USMDS showcase app"
      width={230}
      height={230}
      priority
      className="h-[230px] w-[230px]"
    />
  )
}

export default function ShowcaseAppSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="text-center">
          <h2 className="pb-4 text-black">Showcase app</h2>
          <p className="mt-1 max-w-4xl mx-auto text-lg text-neutral-600">
            See every USMDS component in action. Buttons, forms, navigation,
            data display — all tested and ready to ship in your next mobile app.
          </p>
        </div>

        <div className="mt-8 mx-auto">
          <div className="rounded-xl border border-neutral-200 bg-white shadow-sm pt-8">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div className="flex flex-col items-center">
                <div className="h-[240px] w-[240px] rounded-lg bg-neutral-100 flex items-center justify-center">
                  {qrCode()}
                </div>
                <div className="mt-4 space-y-2 text-sm text-neutral-600 text-center">
                  <p>Scan to open the app on your phone</p>
                  <div className="flex items-center justify-center gap-6">
                    <div className="flex items-center gap-2">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                      </svg>
                      <span>iOS</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.61 10.2718.8995 12.8447.8995 15.8195h22.201c0-2.9748-1.7105-5.5477-5.2197-6.4981" />
                      </svg>
                      <span>Android</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src={showcaseApps}
                  alt="USMDS showcase app screens"
                  className="max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
