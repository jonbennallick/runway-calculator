export function Header() {
  return (
    <header className="mb-6">
      <div className="flex items-center gap-4 mb-4">
        <a href="https://bennallick.com" target="_blank" rel="noopener noreferrer">
          <img
            src="/avatar.png"
            alt="Jon Bennallick"
            className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover shrink-0"
          />
        </a>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight font-serif">
          Runway<br />Calculator.
        </h1>
      </div>
      <p className="text-lg text-muted">
        Find out how long your business can keep going.
      </p>
      <p className="mt-3 text-sm text-muted leading-relaxed">
        I've built digital products for years, and people regularly forget that what
        they're building needs to make more money than it costs. This tool will help
        you and your team calculate how long you've got left and give you a chance to
        plan for it.
      </p>
    </header>
  );
}
