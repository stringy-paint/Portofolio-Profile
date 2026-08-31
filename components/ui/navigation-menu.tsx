"use client"
import React, { useState } from "react"
import { NavigationMenu as NavigationMenuPrimitive } from "@base-ui/react/navigation-menu"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { ChevronDownIcon, Menu, X } from "lucide-react"
import { FaTerminal } from "react-icons/fa6"

function NavigationMenu({
  align = "start",
  className,
  children,
  ...props
}: NavigationMenuPrimitive.Root.Props &
  Pick<NavigationMenuPrimitive.Positioner.Props, "align">) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      className={cn(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        className
      )}
      {...props}
    >
      {children}
      <NavigationMenuPositioner align={align} />
    </NavigationMenuPrimitive.Root>
  )
}

function NavigationMenuList({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn(
        "group flex flex-1 list-none items-center justify-center gap-0",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuItem({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn("relative", className)}
      {...props}
    />
  )
}

const navigationMenuTriggerStyle = cva(
  "group/navigation-menu-trigger inline-flex h-9 w-max items-center justify-center rounded-lg px-2.5 py-1.5 text-sm font-medium transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-popup-open:bg-muted/50 data-popup-open:hover:bg-muted data-open:bg-muted/50 data-open:hover:bg-muted data-open:focus:bg-muted"
)

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: NavigationMenuPrimitive.Trigger.Props) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle(), "group", className)}
      {...props}
    >
      {children}{" "}
      <ChevronDownIcon className="relative top-px ml-1 size-3 transition duration-300 group-data-popup-open/navigation-menu-trigger:rotate-180 group-data-open/navigation-menu-trigger:rotate-180" aria-hidden="true" />
    </NavigationMenuPrimitive.Trigger>
  )
}

function NavigationMenuContent({
  className,
  ...props
}: NavigationMenuPrimitive.Content.Props) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        "data-ending-style:data-activation-direction=left:translate-x-[50%] data-ending-style:data-activation-direction=right:translate-x-[-50%] data-starting-style:data-activation-direction=left:translate-x-[-50%] data-starting-style:data-activation-direction=right:translate-x-[50%] h-full w-auto p-1 transition-[opacity,transform,translate] duration-[0.35s] ease-[cubic-bezier(0.22,1,0.36,1)] group-data-[viewport=false]/navigation-menu:rounded-lg group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:ring-1 group-data-[viewport=false]/navigation-menu:ring-foreground/10 group-data-[viewport=false]/navigation-menu:duration-300 data-ending-style:opacity-0 data-starting-style:opacity-0 data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 data-[motion^=from-]:animate-in data-[motion^=from-]:fade-in data-[motion^=to-]:animate-out data-[motion^=to-]:fade-out **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none group-data-[viewport=false]/navigation-menu:data-open:animate-in group-data-[viewport=false]/navigation-menu:data-open:fade-in-0 group-data-[viewport=false]/navigation-menu:data-open:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-closed:animate-out group-data-[viewport=false]/navigation-menu:data-closed:fade-out-0 group-data-[viewport=false]/navigation-menu:data-closed:zoom-out-95",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuPositioner({
  className,
  side = "bottom",
  sideOffset = 8,
  align = "start",
  alignOffset = 0,
  ...props
}: NavigationMenuPrimitive.Positioner.Props) {
  return (
    <NavigationMenuPrimitive.Portal>
      <NavigationMenuPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        className={cn(
          "isolate z-50 h-(--positioner-height) w-(--positioner-width) max-w-(--available-width) transition-[top,left,right,bottom] duration-[0.35s] ease-[cubic-bezier(0.22,1,0.36,1)] data-instant:transition-none data-[side=bottom]:before:top-[-10px] data-[side=bottom]:before:right-0 data-[side=bottom]:before:left-0",
          className
        )}
        {...props}
      >
        <NavigationMenuPrimitive.Popup className="data-[ending-style]:easing-[ease] relative h-(--popup-height) w-(--popup-width) origin-(--transform-origin) rounded-lg bg-popover text-popover-foreground shadow ring-1 ring-foreground/10 transition-[opacity,transform,width,height,scale,translate] duration-[0.35s] ease-[cubic-bezier(0.22,1,0.36,1)] outline-none data-ending-style:scale-90 data-ending-style:opacity-0 data-ending-style:duration-150 data-starting-style:scale-90 data-starting-style:opacity-0">
          <NavigationMenuPrimitive.Viewport className="relative size-full overflow-hidden" />
        </NavigationMenuPrimitive.Popup>
      </NavigationMenuPrimitive.Positioner>
    </NavigationMenuPrimitive.Portal>
  )
}

function NavigationMenuLink({
  className,
  ...props
}: NavigationMenuPrimitive.Link.Props) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        "flex items-center gap-2 rounded-lg p-2 text-sm transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-1 in-data-[slot=navigation-menu-content]:rounded-md data-active:bg-muted/50 data-active:hover:bg-muted data-active:focus:bg-muted [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuIndicator({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof NavigationMenuPrimitive.Icon>) {
  return (
    <NavigationMenuPrimitive.Icon
      data-slot="navigation-menu-indicator"
      className={cn(
        "top-full z-1 flex h-1.5 items-end justify-center overflow-hidden data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:animate-in data-[state=visible]:fade-in",
        className
      )}
      {...props}
    >
      <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
    </NavigationMenuPrimitive.Icon>
  )
}

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (isOpen && headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const headerOffset = 80;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 50);
  };

  return (
    <header ref={headerRef} className="sticky top-0 z-[999] w-full border-b border-neutral-800 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 md:px-12 py-3.5 sm:py-4">
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setIsOpen(false);
          }}
          className="text-lg sm:text-xl font-extrabold tracking-tighter flex items-center gap-2 cursor-pointer text-white hover:text-green-400 transition-colors"
        >
          <FaTerminal className="size-4 sm:size-5 text-green-500" />
          <span>Ryan</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          <button onClick={() => scrollTo("about")} className={cn(navigationMenuTriggerStyle(), "cursor-pointer")}>
            About Me
          </button>
          <button onClick={() => scrollTo("Projects")} className={cn(navigationMenuTriggerStyle(), "cursor-pointer")}>
            Projects
          </button>
          <button onClick={() => scrollTo("experience")} className={cn(navigationMenuTriggerStyle(), "cursor-pointer")}>
            Experience
          </button>
          <button onClick={() => scrollTo("pencapaian")} className={cn(navigationMenuTriggerStyle(), "cursor-pointer")}>
            Pencapaian
          </button>
          <button onClick={() => scrollTo("kontak")} className={cn(navigationMenuTriggerStyle(), "cursor-pointer")}>
            Kontak
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Tutup Menu" : "Buka Menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="md:hidden flex items-center justify-center p-2 rounded-lg border border-neutral-800 bg-neutral-900/60 text-gray-300 hover:text-white hover:border-green-500/50 hover:bg-neutral-800 transition-all focus:outline-none focus:ring-2 focus:ring-green-500/50 min-w-[40px] min-h-[40px] cursor-pointer"
        >
          {isOpen ? <X className="size-5 text-green-400" /> : <Menu className="size-5 text-green-400" />}
        </button>
      </div>

      {/* Mobile Dropdown Navigation Menu */}
      {isOpen && (
        <nav id="mobile-navigation" className="md:hidden border-t border-neutral-800/80 bg-black/95 backdrop-blur-xl px-4 py-3 flex flex-col gap-1.5 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <button
            onClick={() => scrollTo("about")}
            className="flex items-center justify-between w-full px-3.5 py-2.5 rounded-lg text-left text-sm font-medium text-gray-200 hover:bg-neutral-900 hover:text-green-400 border border-transparent hover:border-neutral-800 active:bg-neutral-800 transition-all cursor-pointer"
          >
            <span>About Me</span>
            <span className="text-xs text-green-500 font-mono">01.</span>
          </button>
          <button
            onClick={() => scrollTo("Projects")}
            className="flex items-center justify-between w-full px-3.5 py-2.5 rounded-lg text-left text-sm font-medium text-gray-200 hover:bg-neutral-900 hover:text-green-400 border border-transparent hover:border-neutral-800 active:bg-neutral-800 transition-all cursor-pointer"
          >
            <span>Projects</span>
            <span className="text-xs text-green-500 font-mono">02.</span>
          </button>
          <button
            onClick={() => scrollTo("experience")}
            className="flex items-center justify-between w-full px-3.5 py-2.5 rounded-lg text-left text-sm font-medium text-gray-200 hover:bg-neutral-900 hover:text-green-400 border border-transparent hover:border-neutral-800 active:bg-neutral-800 transition-all cursor-pointer"
          >
            <span>Experience</span>
            <span className="text-xs text-green-500 font-mono">03.</span>
          </button>
          <button
            onClick={() => scrollTo("pencapaian")}
            className="flex items-center justify-between w-full px-3.5 py-2.5 rounded-lg text-left text-sm font-medium text-gray-200 hover:bg-neutral-900 hover:text-green-400 border border-transparent hover:border-neutral-800 active:bg-neutral-800 transition-all cursor-pointer"
          >
            <span>Pencapaian</span>
            <span className="text-xs text-green-500 font-mono">04.</span>
          </button>
          <button
            onClick={() => scrollTo("kontak")}
            className="flex items-center justify-between w-full px-3.5 py-2.5 rounded-lg text-left text-sm font-medium text-gray-200 hover:bg-neutral-900 hover:text-green-400 border border-transparent hover:border-neutral-800 active:bg-neutral-800 transition-all cursor-pointer"
          >
            <span>Kontak</span>
            <span className="text-xs text-green-500 font-mono">05.</span>
          </button>
        </nav>
      )}
    </header>
  )
}

export {
  NavBar,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuPositioner,
}
