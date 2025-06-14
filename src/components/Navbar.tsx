
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator 
} from "@/components/ui/dropdown-menu";
import { useNavigate, useLocation } from "react-router-dom";
import { Home, BookOpen, Settings, LogOut, Bell, Menu, X, Heart, Video, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/live-class', label: 'Live Class', icon: Video },
    { path: '/notes', label: 'Notes', icon: BookOpen },
    { path: '/dashboard', label: 'Pulse Check', icon: Heart },
    { path: '/profile', label: 'Profile', icon: User },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-nature-green/20 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer" 
            onClick={() => navigate('/')}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-nature-green to-nature-darkGreen rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg font-serif">🌳</span>
            </div>
            <span className="text-2xl font-bold font-serif bg-gradient-to-r from-nature-green to-nature-darkGreen bg-clip-text text-transparent">
              SapienRoot
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Button
                  key={item.path}
                  variant={isActive ? "default" : "ghost"}
                  className={`flex items-center space-x-2 rounded-2xl font-medium transition-all duration-300 ${
                    isActive 
                      ? "bg-nature-green hover:bg-nature-darkGreen text-white shadow-lg" 
                      : "text-nature-brown hover:text-nature-darkGreen hover:bg-nature-beige/50"
                  }`}
                  onClick={() => navigate(item.path)}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Button>
              );
            })}
          </div>

          {/* Right Side - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Notifications */}
            <Button variant="ghost" size="sm" className="relative rounded-2xl">
              <Bell className="w-5 h-5 text-nature-brown" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-nature-green text-white text-xs p-0 flex items-center justify-center">
                2
              </Badge>
            </Button>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-2xl">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg" alt="Alex" />
                    <AvatarFallback className="bg-gradient-to-br from-nature-green to-nature-darkGreen text-white">
                      AJ
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 rounded-2xl shadow-xl border-nature-green/20" align="end" forceMount>
                <div className="flex flex-col space-y-1 p-4">
                  <p className="text-sm font-medium leading-none font-serif">Alex Johnson</p>
                  <p className="text-xs leading-none text-muted-foreground">alex@sapienroot.edu</p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate('/profile')} className="rounded-xl mx-2">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate('/')} className="rounded-xl mx-2">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Mobile Notifications */}
            <Button variant="ghost" size="sm" className="relative rounded-2xl">
              <Bell className="w-5 h-5 text-nature-brown" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-nature-green text-white text-xs p-0 flex items-center justify-center">
                2
              </Badge>
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              className="rounded-2xl"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-nature-brown" />
              ) : (
                <Menu className="h-6 w-6 text-nature-brown" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-nature-green/20 rounded-b-2xl shadow-xl">
            <div className="px-4 py-6 space-y-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <Button
                    key={item.path}
                    variant={isActive ? "default" : "ghost"}
                    className={`w-full justify-start space-x-3 rounded-2xl font-medium transition-all duration-300 ${
                      isActive 
                        ? "bg-nature-green hover:bg-nature-darkGreen text-white shadow-lg" 
                        : "text-nature-brown hover:text-nature-darkGreen hover:bg-nature-beige/50"
                    }`}
                    onClick={() => {
                      navigate(item.path);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Button>
                );
              })}
              
              {/* Mobile User Section */}
              <div className="pt-4 border-t border-nature-green/20 space-y-3">
                <div className="flex items-center space-x-3 px-3 py-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg" alt="Alex" />
                    <AvatarFallback className="bg-gradient-to-br from-nature-green to-nature-darkGreen text-white text-sm">
                      AJ
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium font-serif">Alex Johnson</p>
                    <p className="text-xs text-muted-foreground">alex@sapienroot.edu</p>
                  </div>
                </div>
                
                <Button
                  variant="ghost"
                  className="w-full justify-start space-x-3 rounded-2xl text-nature-brown hover:bg-nature-beige/50"
                  onClick={() => {
                    navigate('/profile');
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <Settings className="w-5 h-5" />
                  <span>Settings</span>
                </Button>
                
                <Button
                  variant="ghost"
                  className="w-full justify-start space-x-3 rounded-2xl text-nature-brown hover:bg-nature-beige/50"
                  onClick={() => {
                    navigate('/');
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <LogOut className="w-5 h-5" />
                  <span>Log out</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
