import Image from "next/image";
import { HomePage } from "../../ui_components/HomePage";
import { footerLinks } from "../../constants";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between  bg-bg">
        <div className="py-20 mx-auto container">
          <HomePage />
        </div>
      </main>
      <footer>
        <div className="bg-black py-10 w-full flex items-center justify-center gap-3">
          {footerLinks.map((item) => {
            return (
              <Link
                className="flex items-center justify-center"
                href={item.link}
                target="_blank"
              >
                <p className="font-inter font-medium text-[24px] leading-[1.2em] text-whiteBold underlineFooter hover:text-primary transition-all ease-in-out duration-300">
                  {item.name}
                </p>
              </Link>
            );
          })}
        </div>
      </footer>
    </>
  );
}
