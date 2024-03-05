import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="grid xl:grid-cols-[8fr_5fr]">
        <div className="relative min-h-[32rem]">
          <Image
            src="/desktop-image-hero-1.jpg"
            alt="Desktop image hero 1"
            className="object-cover"
            fill
            draggable={false}
          />
        </div>

        <div className="relative p-28 pb-56">
          <h2 className="mb-8 text-6xl font-semibold">
            Discover innovative ways to decorate
          </h2>
          <p className="mb-5">
            We provide unmatched quality, comfort, and style for property owners
            across the country. Our experts combine form and function in
            bringing your vision to life. Create a room in your own style with
            our collection and make your property a reflection of you and what
            you love.
          </p>
          <button className="uppercase tracking-[1rem]">Shop now</button>

          <div className="absolute bottom-0 left-0 flex">
            <button className="flex items-center justify-between bg-black p-8 text-white transition hover:bg-neutral-800">
              Left
            </button>
            <button className="flex items-center justify-between bg-black p-8 text-white transition hover:bg-neutral-800">
              Right
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
