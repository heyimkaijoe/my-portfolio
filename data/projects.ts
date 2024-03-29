interface ProjectProp {
    name: string;
    skills: Array<string>;
};

export const projects: ReadonlyArray<ProjectProp> = [
    {
        name: "My Portfolio",
        skills: ["React", "TypeScript", "CloudFront"],
    },
    {
        name: "React Reversi",
        skills: ["React", "Tailwind CSS", "S3"],
    },
];
