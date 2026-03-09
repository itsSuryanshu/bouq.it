import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <div className="fixed top-3 inset-x-0 h-10 bg-transparent z-50 px-3">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between">
        <h1 className="text-pink-300 text-xl font-medium">Bouq.it</h1>

        <div className="flex items-center gap-4">
          {/* Add links in here*/}
          <div className="flex items-center gap-4 bg-pink-300 rounded-full px-4 h-8">
          <a className="text-white text-sm font-medium" href="/">Home</a>
          <a className="text-white text-sm font-medium" href="/">About</a>
          </div>
          <Button
            variant="default"
            size="icon"
            className="bg-pink-300 text-white w-20 h-8 rounded-full font-bold"
          >
            Sign in
          </Button>
        </div>
      </div>
    </div>
  )
}