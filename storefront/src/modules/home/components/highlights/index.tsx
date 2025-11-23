import { Heading, Text, clx } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const cards = [
  {
    title: "რედაქციული კოლექციები",
    copy:
      "ემოციური ვიზუალები და შესაძენი მომენტები ერთიან კომბინაციად. გამოიყენე ეს ბლოკი კოლექციებისა და სეზონური შეთავაზებების გამოსაყოფად.",
    accent: "from-emerald-400/20 via-cyan-300/10 to-slate-900",
    cta: { label: "ნახე კოლექციები", href: "/store" },
  },
  {
    title: "პრემიუმ განწყობა",
    copy:
      "რბილი გრადიენტები, თავისუფალი სივრცეები და ფენოვანი ბარათები ქმნის ბუტიკის სტილის ატმოსფეროს პრემიუმ პროდუქციისთვის.",
    accent: "from-indigo-300/15 via-sky-200/10 to-slate-900",
    cta: { label: "იხილე კატალოგი", href: "/search" },
  },
  {
    title: "დემო–მზად ბლოკები",
    copy:
      "მოდულარული სექციები მზადაა სტორითელინგისთვის: ჰირო, რეილები, ლუქბუქი და ღირებულების ბლოკები backend ცვლილებების გარეშე.",
    accent: "from-amber-300/20 via-rose-200/10 to-slate-900",
    cta: { label: "დაათვალიერე პროდუქტები", href: "/store" },
  },
]

const Highlights = () => {
  return (
    <section className="content-container py-16 small:py-24">
      <div className="flex flex-col gap-3 text-center items-center">
        <Heading level="h2" className="text-3xl small:text-4xl font-semibold">
          შექმნილი შთაბეჭდილებისთვის პირველივე კლიკიდან
        </Heading>
        <Text className="text-ui-fg-subtle max-w-2xl">
          ფენოვანი გრადიენტები, მკაფიო ტიპოგრაფია და სწორად შერჩეული კონტენტის ბლოკები ამ დემო მაღაზიას მიზანმიმართულ და პრემიუმ შეგრძნებას აძლევს.
        </Text>
      </div>

      <div className="grid grid-cols-1 small:grid-cols-3 gap-6 mt-10">
        {cards.map((card) => (
          <div
            key={card.title}
            className="relative overflow-hidden rounded-2xl border border-ui-border-base bg-ui-bg-subtle shadow-[0_18px_45px_rgba(15,23,42,0.08)] p-6 flex flex-col gap-4"
          >
            <div
              aria-hidden
              className={clx(
                "absolute inset-0 opacity-90 blur-3xl",
                "bg-gradient-to-br",
                card.accent
              )}
            />
            <div className="relative flex flex-col gap-3">
              <Text className="txt-compact-small-plus uppercase tracking-wide text-ui-fg-muted">
                შოუ ქეისი
              </Text>
              <Heading level="h3" className="text-2xl font-semibold">
                {card.title}
              </Heading>
              <Text className="text-ui-fg-subtle">{card.copy}</Text>
            </div>
            <div className="relative mt-auto">
              <LocalizedClientLink
                href={card.cta.href}
                className="inline-flex items-center gap-2 rounded-full border border-ui-border-base bg-white px-4 py-2 text-sm font-medium text-ui-fg-base hover:border-ui-fg-muted shadow-sm"
              >
                {card.cta.label}
                <span aria-hidden>→</span>
              </LocalizedClientLink>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Highlights
