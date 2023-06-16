import { AiOutlineMenu, AiOutlineClose } from "solid-icons/ai";
import { createSignal } from "solid-js";

const Navbar = (props: any) => {
  const [nav, setNav] = createSignal(true);
  const navHandler = () => {
    setNav(!nav());
  };

  const [bgColor, setBgColor] = createSignal(false);

  const changeBgColorHandler = () => {
    if (window.scrollY >= 90) {
      setBgColor(true);
    } else {
      setBgColor(false);
    }
  };

  window.addEventListener("scroll", changeBgColorHandler);

  return (
    <nav
      class={
        "fixed z-10 flex w-full items-center justify-between px-7 py-3 font-display font-bold " +
        (bgColor()
          ? "bg-primary-800 text-neutral duration-1000 ease-out"
          : "text-primary-800 duration-1000 ease-out")
      }
    >
      <a href="/">
        <img
          src="/public/logo.png"
          alt="logo"
          class={
            "h-12 lg:h-14 " +
            (bgColor()
              ? "brightness-0 invert duration-1000 ease-out"
              : "duration-1000 ease-out")
          }
        />
      </a>
      <ul class="hidden items-center gap-6 font-extrabold sm:flex">
        <a href="/" class="xl:mx-3">
          Inicio
        </a>
        <a href="/quienes-somos/" class="xl:mx-3">
          Quienes somos?
        </a>
        <a href="/eventos/" class="xl:mx-3">
          Eventos
        </a>
        <a href="/blog/" class="xl:mx-3">
          Blog
        </a>
      </ul>
      <div onClick={navHandler} class="block sm:hidden">
        {!nav() ? (
          <AiOutlineClose size={20} color="#FFFFFF" />
        ) : (
          <AiOutlineMenu size={20} color="#FFFFFF" />
        )}
      </div>
      <div
        class={
          "fixed top-0 w-[170px] bg-primary-800 text-neutral duration-500 h-screen " +
          (!nav() ? "left-0 ease-out" : "left-[-100%] ease-in")
        }
      >
        <div class="text-primary-light h-full font-display flex-col flex justify-center">
          <a
            href="/"
            class="py-3 ml-3 mr-4 px-1 border-b border-primary-400 my-2"
          >
            Inicio
          </a>
          <a
            href="/quienes-somos/"
            class="py-3 ml-3 mr-4 px-1 border-b border-primary-400 my-2"
          >
            Quienes somos?
          </a>
          <a
            href="/eventos/"
            class="py-3 ml-3 mr-4 px-1 border-b border-primary-400 my-2"
          >
            Eventos
          </a>
          <a
            href="/blog/"
            class="py-3 ml-3 mr-4 px-1 border-b border-primary-400 my-2"
          >
            Blog
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
