import GitHubCalendar, { ThemeInput } from 'react-github-calendar';

export default function GitHub({ isDarkTheme }: { isDarkTheme: boolean }) {
    const theme: ThemeInput = {
        light: ["#d9ceff", "#9f75ff", "#7916ff", "#6b04fd", "#4b05ad"],
        dark: ["#4b05ad", "#843dff", "#9f75ff", "#bea6ff", "#d9ceff"],
    };

    return (
        <div className={"flex flex-col items-center " + (isDarkTheme ? "text-prheart-100" : "text-prheart-900")}>
            <h2 className="subtitle mt-4 mb-8 font-semibold">Days I Code</h2>
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
