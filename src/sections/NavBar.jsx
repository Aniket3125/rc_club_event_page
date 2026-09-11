const NavBar = () => {
  return (
    <div className="fixed top-4 left-4 md:top-8 md:left-8 z-[100]">
      <a
        href="https://robotics-club-mmmut-4joo.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Robotics Club MMMUT"
        className="block transition-all duration-300 hover:scale-110 active:scale-95 group"
      >
        <img
          src="/img/rc-club-logo.png"
          alt="Robotics Club MMMUT Logo"
          className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-[0_0_12px_rgba(255,110,30,0.5)] group-hover:drop-shadow-[0_0_20px_rgba(255,130,50,0.85)] transition-all duration-300 cursor-pointer"
        />
      </a>
    </div>
  )
}

export default NavBar