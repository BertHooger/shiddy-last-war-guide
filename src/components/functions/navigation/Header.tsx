"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ThemeToggle } from '../theme/ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { name: 'Basics', path: '/basics' },
        { name: 'Events', path: '/events' },
        { name: 'Tricks', path: '/tricks' },
        { name: 'Heroes', path: '/heroes' },
        { name: 'Troops', path: '/troops' },
        { name: 'Gears', path: '/gears' },
        { name: 'Season One', path: '/season-one' },
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <motion.header
            className="bg-background border-b border-border py-6"
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
                        <Link href="/" className="text-4xl font-heading text-primary hover:text-opacity-80 transition-opacity">
                            Last War Guide
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-4">
                        {navItems.map((item) => (
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
                        ))}
                        <ThemeToggle />
                    </nav>

                    {/* Mobile Menu Button and Theme Toggle */}
                    <div className="flex items-center space-x-2 md:hidden">
                        <ThemeToggle />
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
                            className="md:hidden py-4"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.path}
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={item.path}
                                        className={`block py-2 hover:text-primary transition-colors ${pathname === item.path ? 'text-primary font-semibold' : 'text-foreground'}`}
                                        onClick={toggleMenu}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.nav>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
};

export default Header;