import { createVisibilityObserver } from "@solid-primitives/intersection-observer";
import { AiOutlineMenu, AiOutlineClose } from "solid-icons/ai";
import { createSignal } from "solid-js";

const Navbar = () => {
  const [getNav, setNav] = createSignal(true);
  const navHandler = () => {
    setNav(!getNav());
  };

  let container: any;
  const visible = createVisibilityObserver()(() => container);
  const stuck = () => !visible();

  return (
    <>
      <div ref={container} />
      <nav
        class={
          "sticky top-0 flex w-full items-center justify-between px-7 py-3 font-display font-bold"
        }
        classList={{
          [stuck()
            ? "bg-primary-800 text-emerald-100 transition duration-700 ease-out"
            : "bg-transparent text-primary-800 transition duration-700 ease-out"]:
            true,
        }}
        id="navbar"
      >
        <img
          src="/public/logo.png"
          alt="logo"
          class="h-12 lg:h-14"
          classList={{
            [stuck()
              ? "brightness-0 invert duration-1000 ease-out"
              : "duration-1000 ease-out"]: true,
          }}
        />
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
          {/* <button class="block">Unirme</button> */}
        </ul>
        <div onClick={navHandler} class="block sm:hidden">
          {!getNav() ? (
            <AiOutlineClose size={20} />
          ) : (
            <AiOutlineMenu size={20} />
          )}
        </div>
        <div
          class={
            !getNav()
              ? "fixed left-0 top-0 w-2/5 bg-blue-950 duration-1000 ease-out"
              : "fixed left-[-100%] h-screen duration-1000 ease-out"
          }
        >
          <div class="text-primary-light h-screen pt-12 font-display flex-col flex">
            <a href="/" class="p-4">
              Inicio
            </a>
            <a href="/quienes-somos/" class="p-4">
              Quienes somos?
            </a>
            <a href="/eventos/" class="p-4">
              Eventos
            </a>
            <a href="/blog/" class="p-4">
              Blog
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
