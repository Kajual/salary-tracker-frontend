import {
    NavigationMenu, NavigationMenuLink,
    NavigationMenuList, navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="flex items-center justify-between border p-2">

            <NavigationMenu className="p-2 border-gray-200 rounded-md text-sm text-gray-900">
                <NavigationMenuList>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="/">One</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="/">Two</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="/">Three</Link>
                    </NavigationMenuLink>
                </NavigationMenuList>
            </NavigationMenu>

            <Image
                src="/lebron.jpg"
                alt="lebron photo"
                width={40}
                height={40}
                className="rounded-full object-cover"
            />
        </div>
    );
}