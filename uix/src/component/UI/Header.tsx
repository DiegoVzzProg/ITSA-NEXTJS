"use client";

//import Image from "next/image";

export default function Header() {
    return (
        <>
            <header className="flex w-full px-[clamp(18px,5vw,68px)] min-h-[76px] items-center justify-center sticky top-0 left-0 bg-white z-[9999]">
                <nav className="flex flex-row items-center justify-between w-full h-full gap-5 border-b border-black">
                    <span className="flex w-full items-center max-w-[165px]">itsa</span>
                    <div className="flex flex-row justify-between gap-3 w-[min(300px,100%)]">
                        <button
                            type="button"
                            className="flex flex-col items-center justify-center text-center transition-all hover:bg-black hover:text-white"
                        >
                            login/join
                        </button>
                        <button className="flex flex-col items-center justify-center text-center transition-all hover:bg-black hover:text-white">
                            logout
                        </button>

                        <button className="flex flex-row items-center justify-center text-center transition-all hover:bg-black hover:text-white">
                            {`cart(0)`}
                        </button>
                    </div>
                </nav>
            </header>
        </>
    );
}
