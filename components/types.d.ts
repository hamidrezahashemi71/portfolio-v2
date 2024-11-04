// SHARED ~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
type LangProp = { lang: Locale }

// HOME ~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
type HomeStatsProps = {
    stats: {
        num: number
        text: string
    }[]
}

type LogoProps = {
    title: string
    lang: Locale
}

type MobileNavProps = {
    links: {
        name: string
        path: string
    }[]
    lang: Locale
    mode: {
        dark: string,
        light: string,
        system: string
    }
    title: string
}

type ModeProps = {
    mode: {
        dark: string,
        light: string,
        system: string
    }
    lang: Locale
}

type DesktopNavProps = {
    links: {
        name: string
        path: string
    }[]
    lang: Locale
}

// SERVICES ~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
type ServicesRootProps = {
    services: {
        num: string
        title: string
        description: string
        href: string
        active: boolean
        status: string
    }[]
    lang: Locale
}

// RESUME ~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
type ResumeRootProps = {
    titles: {
        experience: string
        education: string
        skills: string
        about: string
    }
    about: {
        title: string
        description: string
    }
    info: {
        fieldName: string
        fieldValue: string
    }[]
    experience: {
        icon: string
        title: string
        description: string
        items: {
            company: string
            companyLinkedInLink: string
            position: string
            duration: string
        }[]
    }
    education: {
        icon: string
        title: string
        description: string
        items: {
            Institution: string
            companyLinkedInLink: string
            position: string
            duration: string
        }[]
    }
    skills: {
        title: string
        description: string
    }
    lang: Locale
}

type ResumeExperienceProps = Pick<ResumeRootProps, 'experience' | 'lang'>
type ResumeEducationProps = Pick<ResumeRootProps, 'education' | 'lang'>
type ResumeSkillsProps = Pick<ResumeRootProps, 'skills'>
type ResumeAboutProps = Pick<ResumeRootProps, 'about' | 'info' | 'lang'>

// WORK ~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
type WorkRootProps = {
    projects: {
        num: string
        category: string
        title: string
        description: string
        stack: {
            name: string
        }[]
        image: string
        live: string
        github: string
    }[]
    liveProjectTitle: string
    gitRepoTitle: string
    lang: Locale
}

// CONTACT ~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
type ContactRootProps = {
    lang: Locale
    title: string
    description: string
    selectPlaceholder: string
    select: {
        value: string
        title: string
    }[]
    inputs: {
        type: string
        placeholder: string
    }[]
    textareaPlaceholder: string
    buttonText: string
    info: {
        icon: string
        title: string
        description: string
    }[]
}
