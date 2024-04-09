import GitHubCalendar, { ThemeInput } from 'react-github-calendar';

export default function GitHub({ isDarkTheme }: { isDarkTheme: boolean }) {
    const theme: ThemeInput = {
        light: ["#2c0076", "#7916ff", "#9f75ff", "#bea6ff", "#d9ceff"],
        dark: ["#f3f1ff", "#bea6ff", "#843dff", "#6b04fd", "#5a03d5"],
    };

    return (
        <div className={"flex flex-col items-center " + (isDarkTheme ? "text-prheart-100" : "text-prheart-900")}>
            <h2 className="subtitle mt-4 mb-8">Days I Code</h2>
            <GitHubCalendar
                username="heyimkaijoe"
                theme={theme}
                colorScheme={isDarkTheme ? "dark" : "light"}
                blockSize={14}
                fontSize={13}
            />
        </div>
    );
}
