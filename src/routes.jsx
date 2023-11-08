import {
    Landing,
    About,
    Blog,
    Careers,
    CaseStudies,
    Features,
    Widgets,
    PrivacyPolicy,
    TermsofService,

} from "./pages";

import { Blog, DigitalSignageHelp, BestTricks } from "./blog";

const routes = [
    {
        path: "/",
        element: <About />,
        title: "About",
        description:
            "What does NWK do and what are our products?",
    },

    {
        path: "/",
        element: <Blog />,
        title: "Blog",
        description:
            " Learn more about the best practices and tips and tricks.",
    },

    {
        path: "/",
        element: <Careers />,
        title: "Landing ",
        description:
            " See our Careers in our company NWK.",
    },

    {
        path: "/",
        element: <CaseStudies />,
        title: "Landing",
        description:
            " See how people have benefitted from our products .",
    },
    {
        path: "/",
        element: <Features />,
        title: "Landing ",
        description:
            " What seperates us from the rest ? Learn more.",
    },

    {
        path: "/",
        element: <Widgets />,
        title: "Landing",
        description:
            " See the widgets that are provided to you .",
    },

    {
        path: "/",
        element: <PrivacyPolicy />,
        title: "Landing  ",
        description:
            " Privacy policy of our company and our individual products .",
    },
    {
        path: "/",
        element: <TermsofService />,
        title: "Landing",
        description:
            " Learn about the terms and services that you will have to abide.",
    },
]
