const loc = "Taipei, Taiwan";

type ProficiencyLevels = "Upper Intermediate" | "Native";
interface LanguageProp {
    name: string;
    proficiency: ProficiencyLevels;
    cert?: {
        toeic: string;
    };
};
const languages: ReadonlyArray<LanguageProp> = [
    {
        name: "English",
        proficiency: "Upper Intermediate",
        cert: { toeic: "930" },
    },
    {
        name: "Chinese",
        proficiency: "Native",
    },
];

export { loc, languages };
