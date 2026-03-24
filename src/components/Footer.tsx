export function Footer() {
  return (
    <footer className="mt-12 pb-10 text-center">
      <div className="flex flex-col items-center gap-3">
        <a href="https://bennallick.com" target="_blank" rel="noopener noreferrer">
          <img
            src="/avatar.png"
            alt="Jon Bennallick"
            className="w-12 h-12 rounded-full object-cover"
          />
        </a>
        <div>
          <p className="text-sm text-foreground">
            Built by{" "}
            <a
              href="https://bennallick.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-2 hover:opacity-70 transition-opacity"
            >
              Jon Bennallick
            </a>
          </p>
          <p className="text-xs text-muted mt-1">
            I help teams build better digital products.{" "}
            <a
              href="https://bennallick.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:opacity-70 transition-opacity"
            >
              Get in touch &rarr;
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
