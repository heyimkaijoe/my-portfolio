export default function Hamburger({ isOpen }: { isOpen: boolean }) {
    const slice1 = isOpen ? "translate-y-[6px] rotate-45" : "translate-y-0 rotate-0";
    const slice2 = isOpen ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100";
    const slice3 = isOpen ? "-translate-y-[14px] -rotate-45" : "translate-y-0 rotate-0";
    
    return (
        <>
            <div className={slice1 + " slice"}></div>
            <div className={slice2 + " slice"}></div>
            <div className={slice3 + " slice"}></div>
        </>
    );
}
