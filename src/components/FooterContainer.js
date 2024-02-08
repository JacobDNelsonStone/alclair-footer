

export const FooterContainer = ({props, children}) => {
    
  return (
    <footer class="bg-white flex flex-row items-center justify-around h-96 w-screen m-3 bg-gradient-to-r from-white via-gray-100 to-gray-300">
      {children}
    </footer>
  )
}