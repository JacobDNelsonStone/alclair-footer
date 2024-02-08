export const FooterForm = (props) => {

  return (
    <div class="flex h-screen items-center justify-center">
      <div class="grid w-80 grid-rows-4 gap-1">
        <p class="font-semibold text-gray-700">STAY UP TO DATE</p>
        <p class="text-gray-700">Enter your email to stay up to date on Alclair events, promotions, and other news!</p>
        <input type="text" class="h-10 w-full rounded border p-2 text-sm" placeholder="Your email" />
        <button class="rounded bg-[#00A7E1] text-gray-50 hover:bg-gradient-to-r hover:from-[#00B4F3] hover:to-[#0093C6]">Subscribe</button>
      </div>
    </div>
  )
}