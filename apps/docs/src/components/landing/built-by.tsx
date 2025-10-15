import blen from "../../../images/logos/blen.png";

export default function BuiltBy() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-1">
            <h2>Built by</h2>
          </div>
          <div className="md:col-span-2">
            <div className="flex flex-col gap-4">
              <div className="h-12 w-40 rounded bg-contain bg-left bg-no-repeat" style={{ backgroundImage: `url(${blen.src})` }} />
              <p className="text-neutral-600">
                BLEN is a digital services company that provides Emerging Technology
                (ML/AI, RPA), Digital Modernization (Legacy to Cloud) and
                Human-Centered Web/Mobile Design and Development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
