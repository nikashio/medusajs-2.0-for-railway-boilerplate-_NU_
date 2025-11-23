import { Button, Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-slate-900 text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop"
          alt="Fashion Background"
          className="object-cover"
          fill
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center text-center p-6">
        <div className="glass p-8 rounded-2xl max-w-4xl w-full flex flex-col items-center gap-6 animate-fade-in-top">
          <Heading
            level="h1"
            className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-lg"
          >
            გამოხატე შენი <span className="text-emerald-400">სტილი</span>
          </Heading>

          <Text className="text-lg md:text-xl text-white/90 max-w-2xl font-light">
            აღმოაჩინე უახლესი ტენდენციები პრემიუმ მოდაში. გამორჩეული კოლექციები თანამედროვე ადამიანებისთვის.
          </Text>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button
              asChild
              size="xlarge"
              className="bg-emerald-500 hover:bg-emerald-600 text-white border-0 rounded-full px-8 py-4 text-lg transition-all hover:scale-105 shadow-lg shadow-emerald-500/30"
            >
              <LocalizedClientLink href="/store">
                შეიძინე კოლექცია
              </LocalizedClientLink>
            </Button>

            <Button
              variant="secondary"
              asChild
              size="xlarge"
              className="glass hover:bg-white/20 text-white border-white/30 rounded-full px-8 py-4 text-lg transition-all hover:scale-105"
            >
              <LocalizedClientLink href="/search">
                დაათვალიერე კატალოგი
              </LocalizedClientLink>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

