'use client'

import AboutTab from "./about-tab"
import SkillsTab from "./skills-tab"
import { motion } from "framer-motion"
import EducationTab from "./education-tab"
import ExperienceTab from "./experience-tab"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ResumeRoot(props: ResumeRootProps) {

    const { titles, about, info, experience, education, skills, lang } = props

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 2.4,
                    duration: 0.4,
                    ease: 'easeIn'
                }
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-6"
        >
            <div className="container mx-auto">
                <Tabs
                    dir={lang === 'en' ? 'ltr' : 'rtl'}
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-[60px] py-6"
                >
                    <TabsList className={`flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 `}>
                        <TabsTrigger value="experience">{titles.experience}</TabsTrigger>
                        <TabsTrigger value="education">{titles.education}</TabsTrigger>
                        <TabsTrigger value="skills">{titles.skills}</TabsTrigger>
                        <TabsTrigger value="about">{titles.about}</TabsTrigger>
                    </TabsList>
                    <div className={`min-h-[70vh] w-full `}>
                        <TabsContent
                            value="experience"
                            className="w-full"
                        >
                            <ExperienceTab
                                experience={experience}
                                lang={lang}
                            />
                        </TabsContent>
                        <TabsContent
                            value="education"
                            className="w-full"
                        >
                            <EducationTab
                                education={education}
                                lang={lang}
                            />
                        </TabsContent>
                        <TabsContent
                            value="skills"
                            className="w-full h-full"
                        >
                            <SkillsTab
                                skills={skills}
                            />
                        </TabsContent>
                        <TabsContent
                            value="about"
                            className="w-full"
                        >
                            <AboutTab
                                about={about}
                                info={info}
                                lang={lang}
                            />
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}
