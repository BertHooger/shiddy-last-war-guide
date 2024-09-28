"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaChevronDown, FaChevronUp } from 'react-icons/fa';

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);

    const toggleQuickLinks = () => setIsQuickLinksOpen(!isQuickLinksOpen);

    const quickLinks = ['Basics', 'Tricks', 'Heroes', 'Troops', 'Gears', 'Season One'];

    return (
        <footer className="bg-gradient-to-r from-primary/10 to-primary/5 border-t border-border py-12 mt-16">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold text-primary mb-4">About Us</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Last War Guide is your ultimate resource for mastering the game.
                            We provide strategies, tips, and insights for players of all levels.
                        </p>
                    </div>
                    <div>
                        <button
                            onClick={toggleQuickLinks}
                            className="flex justify-between items-center w-full text-left text-lg font-semibold text-primary mb-4 focus:outline-none"
                        >
                            <span>Quick Links</span>
                            {isQuickLinksOpen ? <FaChevronUp /> : <FaChevronDown />}
                        </button>
                        <div
                            className={`transition-all duration-300 ease-in-out overflow-hidden ${isQuickLinksOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                        >
                            <ul className="space-y-2">
                                {quickLinks.map((item) => (
                                    <li key={item}>
                                        <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-primary mb-4">Connect With Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                                <FaFacebook size={20} />
                            </a>
                            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                                <FaTwitter size={20} />
                            </a>
                            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                                <FaInstagram size={20} />
                            </a>
                            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                                <FaGithub size={20} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        &copy; {currentYear} Last War Guide. All rights reserved to Last War.
                    </p>
                </div>
            </div>
        </footer>
    );
};