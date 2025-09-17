//import Image from "next/image";
import "./home.module.css";

const texts = [
    {texto: "-", class: "opacity-0"},
    {texto: "fresh icons", class: ""},
    {texto: "useful mockups", class: ""},
    {texto: "cool illustration", class: ""},
    {texto: "lovely typefaces", class: ""},
    {texto: "practical templates", class: ""},
];

export default async function Home() {
    return (
        <>
            <div className="flex flex-col w-full flex-1">
                <div className="flex flex-col items-center justify-center min-h-screen">
                    <div className="flex flex-col max-h-[clamp(40px,4vw,60px)] overflow-hidden text-center">
                        {texts.map((item, index) => {
                            return (
                                <span
                                    key={index}
                                    className={`${item.class}text-[clamp(2.1em,4vw,6rem)] animate-scroll-down font-itsa-bold translate-y-[-10px]`}
                                >
                                    {item.texto}
                                </span>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
