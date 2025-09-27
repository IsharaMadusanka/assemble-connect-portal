import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const mainMenuItems = [
    { label: "Home", href: "/" },
    { 
      label: "I'm New", 
      href: "/im-new",
      dropdown: [
        { label: "What to Expect", href: "/im-new" },
        { label: "Service Times", href: "/im-new#service-times" },
        { label: "FAQ for Visitors", href: "/im-new#faq" },
        { label: "Meet the Pastor", href: "/about#leadership" },
        { label: "Plan Your Visit", href: "/contact" },
      ]
    },
    { 
      label: "About Us", 
      href: "/about",
      dropdown: [
        { label: "Mission & Vision", href: "/about#mission" },
        { label: "Statement of Faith", href: "/about#faith" },
        { label: "Church History", href: "/about#history" },
        { label: "Leadership & Staff", href: "/about#leadership" },
      ]
    },
    { 
      label: "Worship", 
      href: "/worship",
      dropdown: [
        { label: "Weekly Services", href: "/worship" },
        { label: "Livestream", href: "/worship#livestream" },
        { label: "Sermon Archive", href: "/sermons" },
        { label: "Music & Choir", href: "/worship#music" },
      ]
    },
    { 
      label: "Ministries", 
      href: "/ministries",
      dropdown: [
        { label: "Children's Ministry", href: "/ministries#children" },
        { label: "Youth Ministry", href: "/ministries#youth" },
        { label: "Men's & Women's Groups", href: "/ministries#groups" },
        { label: "Bible Studies", href: "/ministries#bible-studies" },
        { label: "Outreach & Missions", href: "/ministries#outreach" },
      ]
    },
    { label: "Events", href: "/events" },
    { label: "Connect", href: "/connect" },
    { label: "Give", href: "/give" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
              <span className="text-sm font-bold text-primary-foreground">AG</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-foreground">Assemble Of God Warakapola</h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {mainMenuItems.map((item) => (
                <NavigationMenuItem key={item.label}>
                  {item.dropdown ? (
                    <>
                      <NavigationMenuTrigger
                        className={cn(
                          "bg-transparent hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                          isActive(item.href) && "bg-accent text-accent-foreground"
                        )}
                      >
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {item.dropdown.map((subItem) => (
                            <li key={subItem.label}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={subItem.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-sm font-medium leading-none">{subItem.label}</div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <Link
                        to={item.href}
                        className={cn(
                          "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                          isActive(item.href) && "bg-accent text-accent-foreground"
                        )}
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="border-t lg:hidden">
            <div className="px-2 py-3 space-y-1">
              {mainMenuItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    className={cn(
                      "block px-3 py-2 text-base font-medium rounded-md transition-colors",
                      isActive(item.href) 
                        ? "bg-accent text-accent-foreground" 
                        : "hover:bg-accent hover:text-accent-foreground"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          className="block px-3 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;