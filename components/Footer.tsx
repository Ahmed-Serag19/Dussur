export function Footer() {
  return (
    <footer className="bg-background border-t border-muted-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center items-center gap-10">
          <h2 className="text-2xl font-bold text-foreground">Dusser</h2>
          <p className="text-muted-foreground">
            Building innovative software solutions for tomorrow's challenges.
          </p>
        </div>

        <div className="mt-12 pt-8 ">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
            <p className="text-muted-foreground text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Dusser. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                Made with ❤️ by Dusser
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
