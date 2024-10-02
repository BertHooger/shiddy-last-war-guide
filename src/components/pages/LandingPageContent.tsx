"use client"

import React from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card";
import DownloadButton from "../functions/navigation/DownloadButton";

import CommentSection from "../functions/section/thread/ThreadSection";

const LandingPage = () => {
    const router = useRouter();

    return (
        <div className="container mx-auto p-4">
            {/* Hero Section */}
            <section className="flex flex-col md:flex-row items-center justify-between py-16 bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl p-8 shadow-lg mb-16">
                <div className="md:w-1/2 space-y-6">
                    <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                        Last War ~ Survival Guide
                    </h1>
                    <p className="text-xl text-gray-700 dark:text-gray-300">
                        Master Last War with our comprehensive guide. Get cutting-edge strategies, insider tips, and exclusive insights for both newcomers and veterans.
                    </p>
                    <div className="flex gap-4">
                        <DownloadButton />
                        <Button
                            variant="outline"
                            onClick={() => router.push('/basics')} // Use router.push to redirect
                            className="border-primary text-primary hover:bg-primary hover:text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            Explore Guide
                        </Button>
                    </div>
                </div>
                <div className="md:w-1/2 mt-8 md:mt-0 animate-float">
                    <Image
                        src="/images/season-one/last-war-hero.jpg"
                        alt="Last War Game Screenshot"
                        width={500}
                        height={300}
                        className="rounded-2xl shadow-2xl"
                    />
                </div>
            </section>

            {/* Features Section with Slide-up Animation on Cards */}
            <section className="py-12">
                <h2 className="text-3xl font-bold text-center mb-8 text-primary"> {/* Adjusted text color */}
                    Whay you&apos;ll find on this website.
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="animate-slide-up transform hover:scale-105 transition duration-300 ease-in-out" >
                        <CardHeader>
                            <CardTitle>Beginner&apos;s Guide</CardTitle>
                            <CardDescription>
                                Essential tips for new players to get started and thrive.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc pl-5">
                                <li>Base building basics</li>
                                <li>Resource management</li>
                                <li>Early game strategies</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="animate-slide-up transform hover:scale-105 transition duration-300 ease-in-out" >
                        <CardHeader>
                            <CardTitle>Advanced Tactics</CardTitle>
                            <CardDescription>
                                Deep dives into complex strategies for experienced players.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc pl-5">
                                <li>Alliance warfare</li>
                                <li>Territory control</li>
                                <li>End-game optimization</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="animate-slide-up transform hover:scale-105 transition duration-300 ease-in-out" >
                        <CardHeader>
                            <CardTitle>Future Roadmap</CardTitle>
                            <CardDescription>
                                Know what will happen before anybody else.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc pl-5">
                                <li>Upcoming Passes</li>
                                <li>Wich Heroes to Upgrade</li>
                                <li>Prepare for more rewards</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </section>
            {/* Comment Section */}
            <section className="py-12">
                <h2 className="text-3xl font-bold text-center mb-8 text-primary"> {/* Adjusted text color */}
                    Share Your Thoughts
                </h2>
            </section>
            <CommentSection />
        </div>
    );
};

export default LandingPage;