interface ProjectProp {
    name: string;
    skills: Array<string>;
    imgUrl: string;
    link: string;
};

export const projects: ReadonlyArray<ProjectProp> = [
    {
        name: "My Portfolio",
        skills: ["React", "TypeScript", "CloudFront"],
        imgUrl: "/images/projects/my-portfolio.png",
        link: "https://kchsu.com/",
    },
    {
        name: "React Reversi",
        skills: ["React", "Tailwind CSS", "S3"],
        imgUrl: "/images/projects/react-reversi.png",
        link: "http://reversibykchsu.com/",
    },
];
