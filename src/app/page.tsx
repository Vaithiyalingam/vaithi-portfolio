import Image from "next/image";
import { HomePage } from "../../ui_components/HomePage";
import { footerLinks } from "../../constants";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between  bg-bg max-w-full">
        <div className="py-20 lg:px-40 ">
          <HomePage />
        </div>
      </main>
      <footer>
        <div className="bg-black py-10 w-full flex flex-col lg:flex-row lg:items-center items-end pr-5 lg:pr-0 justify-center gap-3">
          {footerLinks.map((item, ind) => {
            return (
              <div key={ind}>
                <Link
                  className="flex items-center justify-center"
                  href={item.link}
                  target="_blank"
                >
                  <p className="font-inter font-medium text-[24px] leading-[1.2em] text-whiteBold underlineFooter hover:text-primary transition-all ease-in-out duration-300">
                    {item.name}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      </footer>
    </>
  );
}
