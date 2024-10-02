"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import DynamicThemeToggle from '../theme/DynamicThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { name: 'Basics', path: '/basics', dropdown: true },
        { name: 'Heroes', path: '/heroes' },
        { name: 'Season One', path: '/season-one' },
    ];

    const dropdownItems = [
        { name: 'Events', path: '/basics/events' },
        { name: 'Tricks', path: '/basics/tricks' },
        { name: 'Troops', path: '/basics/troops' },
        { name: 'Gears', path: '/basics/gears' },
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    return (
        <motion.header
            className="bg-background border-b border-border py-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="flex justify-between items-center">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link href="/" className="text-2xl md:text-3xl font-heading text-primary hover:text-opacity-80 transition-opacity">
                            Last War Guide
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-4 max-lg:w-1/4">
                        {navItems.map((item) => (
                            item.dropdown ? (
                                <div key={item.path} className="relative">
                                    <Button
                                        variant="ghost"
                                        className="flex items-center space-x-1"
                                        onClick={toggleDropdown}
                                    >
                                        <span>{item.name}</span>
                                        <ChevronDown size={16} />
                                    </Button>
                                    {isDropdownOpen && (
                                        <motion.div
                                            className="absolute top-full left-0 bg-background border border-border rounded-md shadow-lg py-2 mt-1"
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                        >
                                            {dropdownItems.map((dropdownItem) => (
                                                <Link
                                                    key={dropdownItem.path}
                                                    href={dropdownItem.path}
                                                    className="block px-4 py-2 hover:bg-accent hover:text-accent-foreground"
                                                >
                                                    {dropdownItem.name}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </div>
                            ) : (
                                <motion.div
                                    key={item.path}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link
                                        href={item.path}
                                        className={`hover:text-primary transition-colors ${pathname === item.path ? 'text-primary font-bold' : 'text-foreground'}`}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            )
                        ))}
                        <DynamicThemeToggle />
                    </nav>

                    {/* Mobile Menu Button and Theme Toggle */}
                    <div className="flex items-center space-x-2 lg:hidden">
                        <DynamicThemeToggle />
                        <motion.div
                            whileTap={{ scale: 0.9 }}
                        >
                            <Button
                                variant="ghost"
                                className="text-foreground"
                                onClick={toggleMenu}
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </Button>
                        </motion.div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.nav
                            className="lg:hidden py-4"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {navItems.map((item) => (
                                <React.Fragment key={item.path}>
                                    {item.dropdown ? (
                                        <>
                                            <Button
                                                variant="ghost"
                                                className="w-full text-left py-2 flex justify-between items-center"
                                                onClick={toggleDropdown}
                                            >
                                                <span>{item.name}</span>
                                                <ChevronDown size={16} />
                                            </Button>
                                            {isDropdownOpen && (
                                                <motion.div
                                                    className="pl-4"
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                >
                                                    {dropdownItems.map((dropdownItem) => (
                                                        <Link
                                                            key={dropdownItem.path}
                                                            href={dropdownItem.path}
                                                            className="block py-2 hover:text-primary transition-colors"
                                                            onClick={toggleMenu}
                                                        >
                                                            {dropdownItem.name}
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </>
                                    ) : (
                                        <Link
                                            href={item.path}
                                            className={`block py-2 hover:text-primary transition-colors ${pathname === item.path ? 'text-primary font-semibold' : 'text-foreground'}`}
                                            onClick={toggleMenu}
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </React.Fragment>
                            ))}
                        </motion.nav>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
};

export default Header;