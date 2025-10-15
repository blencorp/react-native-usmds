import Image from "next/image";

import uswds from "../../../images/logos/uswds.png";
import expo from "../../../images/logos/expo.png";
import reactNative from "../../../images/logos/react-native.png";
import tailwind from "../../../images/logos/tailwind.png";

export default function OpenSourceStrip() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 text-center">
        <h2 className="mx-auto max-w-2xl lg:mb-6 lg:line-height-heading">Powered by Modern Open Source & Public Standards</h2>
        <p className="mt-2 max-w-5xl text-neutral-600 mx-auto lg:text-xl">
          Built with React Native, Tailwind / NativeWind, and aligned with the
          U.S. Web Design System (USWDS), USMDS brings consistency, compliance,
          and speed to federal, state, and local app development.
        </p>

        <div className="mt-8 grid grid-cols-2 items-center py-8 gap-6 sm:grid-cols-4">
          <Image src={expo} alt="Expo" className="h-16 w-96 object-contain" />
          <Image
            src={uswds}
            alt="United States Web Design System"
            className="h-16 w-96 object-contain"
          />
          <Image
            src={reactNative}
            alt="React Native"
            className="h-16 w-96 object-contain"
          />

          <Image
            src={tailwind}
            alt="Tailwind"
            className="h-16 w-96 object-contain"
          />
        </div>
      </div>
    </section>
  );
}
